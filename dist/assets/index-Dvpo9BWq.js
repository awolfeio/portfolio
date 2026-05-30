var Pv=Object.defineProperty;var Lv=(r,e,t)=>e in r?Pv(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ge=(r,e,t)=>Lv(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function er(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function bg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Po={duration:.5,overwrite:!1,delay:0},nf,un,It,di=1e8,Tt=1/di,vh=Math.PI*2,Iv=vh/4,Dv=0,Sg=Math.sqrt,Ov=Math.cos,Fv=Math.sin,an=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},lr=function(e){return typeof e=="number"},rf=function(e){return typeof e>"u"},Gi=function(e){return typeof e=="object"},Un=function(e){return e!==!1},sf=function(){return typeof window<"u"},_l=function(e){return zt(e)||an(e)},wg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_n=Array.isArray,yh=/(?:-?\.?\d|\.)+/gi,Mg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ho=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,pu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Eg=/[+-]=-?[.\d]+/,Tg=/[^,'"\[\]\s]+/gi,Nv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,Pi,xh,of,ii={},Tc={},Ag,Cg=function(e){return(Tc=Lo(e,ii))&&Gn},af=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},qa=function(e,t){return!t&&console.warn(e)},Rg=function(e,t){return e&&(ii[e]=t)&&Tc&&(Tc[e]=t)||ii},Xa=function(){return 0},Uv={suppressEvents:!0,isStart:!0,kill:!1},lc={suppressEvents:!0,kill:!1},kv={suppressEvents:!0},lf={},Dr=[],bh={},Pg,Jn={},mu={},op=30,cc=[],cf="",uf=function(e){var t=e[0],n,i;if(Gi(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=cc.length;i--&&!cc[i].targetTest(t););n=cc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new e_(e[i],n)))||e.splice(i,1);return e},ys=function(e){return e._gsap||uf(fi(e))[0]._gsap},Lg=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():rf(n)&&e.getAttribute&&e.getAttribute(t)||n},kn=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Yt=function(e){return Math.round(e*1e7)/1e7||0},xo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Bv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ac=function(){var e=Dr.length,t=Dr.slice(0),n,i;for(bh={},Dr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},hf=function(e){return!!(e._initted||e._startAt||e.add)},Ig=function(e,t,n,i){Dr.length&&!un&&Ac(),e.render(t,n,!!(un&&t<0&&hf(e))),Dr.length&&!un&&Ac()},Dg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Tg).length<2?t:an(e)?e.trim():e},Og=function(e){return e},ri=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},zv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Lo=function(e,t){for(var n in t)e[n]=t[n];return e},ap=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Gi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Cc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ma=function(e){var t=e.parent||Ot,n=e.keyframes?zv(_n(e.keyframes)):ri;if(Un(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Hv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Fg=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},tu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},kr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Vv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Sh=function(e,t,n,i){return e._startAt&&(un?e._startAt.revert(lc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Gv=function r(e){return!e||e._ts&&r(e.parent)},lp=function(e){return e._repeat?Io(e._tTime,e=e.duration()+e._rDelay)*e:0},Io=function(e,t){var n=Math.floor(e=Yt(e/t));return e&&n===e?n-1:n},Rc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},nu=function(e){return e._end=Yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},iu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Yt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),nu(e),n._dirty||xs(n,e)),e},Ng=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Rc(e.rawTime(),t),(!t._dur||ul(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),xs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},Di=function(e,t,n,i){return t.parent&&kr(t),t._start=Yt((lr(n)?n:n||e!==Ot?ci(e,n,t):e._time)+t._delay),t._end=Yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Fg(e,t,"_first","_last",e._sort?"_start":0),wh(t)||(e._recent=t),i||Ng(e,t),e._ts<0&&iu(e,e._tTime),e},Ug=function(e,t){return(ii.ScrollTrigger||af("scrollTrigger",t))&&ii.ScrollTrigger.create(t,e)},kg=function(e,t,n,i,s){if(ff(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Pg!==Kn.frame)return Dr.push(e),e._lazy=[s,i],1},Wv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},wh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},qv=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Wv(e)&&!(!e._initted&&wh(e))||(e._ts<0||e._dp._ts<0)&&!wh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=ul(0,e._tDur,t),u=Io(l,a),e._yoyo&&u&1&&(o=1-o),u!==Io(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||un||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&kg(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Sh(e,t,n,!0),e._onUpdate&&!n&&ti(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&kr(e,1),!n&&!un&&(ti(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Xv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Do=function(e,t,n,i){var s=e._repeat,o=Yt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Yt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&iu(e,e._tTime=e._tDur*a),e.parent&&nu(e),n||xs(e.parent,e),e},cp=function(e){return e instanceof Rn?xs(e):Do(e,e._dur)},$v={_start:0,endTime:Xa,totalDuration:Xa},ci=function r(e,t,n){var i=e.labels,s=e._recent||$v,o=e.duration()>=di?s.endTime(!1):e._dur,a,l,c;return an(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(_n(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ea=function(e,t,n){var i=lr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Un(l.vars.inherit)&&l.parent;o.immediateRender=Un(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new $t(t[0],o,t[s+1])},Gr=function(e,t){return e||e===0?t(e):t},ul=function(e,t,n){return n<e?e:n>t?t:n},mn=function(e,t){return!an(e)||!(t=Nv.exec(e))?"":t[1]},Yv=function(e,t,n){return Gr(n,function(i){return ul(e,t,i)})},Mh=[].slice,Bg=function(e,t){return e&&Gi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Gi(e[0]))&&!e.nodeType&&e!==Pi},jv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return an(i)&&!t||Bg(i,1)?(s=n).push.apply(s,fi(i)):n.push(i)})||n},fi=function(e,t,n){return It&&!t&&It.selector?It.selector(e):an(e)&&!n&&(xh||!Oo())?Mh.call((t||of).querySelectorAll(e),0):_n(e)?jv(e,n):Bg(e)?Mh.call(e,0):e?[e]:[]},Eh=function(e){return e=fi(e)[0]||qa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return fi(t,n.querySelectorAll?n:n===e?qa("Invalid scope")||of.createElement("div"):e)}},zg=function(e){return e.sort(function(){return .5-Math.random()})},Hg=function(e){if(zt(e))return e;var t=Gi(e)?e:{each:e},n=bs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return an(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,_){var p=(_||t).length,g=o[p],m,x,y,v,E,M,w,C,S;if(!g){if(S=t.grid==="auto"?0:(t.grid||[1,di])[1],!S){for(w=-di;w<(w=_[S++].getBoundingClientRect().left)&&S<p;);S<p&&S--}for(g=o[p]=[],m=l?Math.min(S,p)*u-.5:i%S,x=S===di?0:l?p*h/S-.5:i/S|0,w=0,C=di,M=0;M<p;M++)y=M%S-m,v=x-(M/S|0),g[M]=E=c?Math.abs(c==="y"?v:y):Sg(y*y+v*v),E>w&&(w=E),E<C&&(C=E);i==="random"&&zg(g),g.max=w-C,g.min=C,g.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(S>p?p-1:c?c==="y"?p/S:S:Math.max(S,p/S))||0)*(i==="edges"?-1:1),g.b=p<0?s-p:s,g.u=mn(t.amount||t.each)||0,n=n&&p<0?Qg(n):n}return p=(g[d]-g.min)/g.max||0,Yt(g.b+(n?n(p):p)*g.v)+g.u}},Th=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Yt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(lr(n)?0:mn(n))}},Vg=function(e,t){var n=_n(e),i,s;return!n&&Gi(e)&&(i=n=e.radius||di,e.values?(e=fi(e.values),(s=!lr(e[0]))&&(i*=i)):e=Th(e.increment)),Gr(t,n?zt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=di,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||lr(o)?u:u+mn(o)}:Th(e))},Gg=function(e,t,n,i){return Gr(_n(e)?!t:n===!0?!!(n=0):!i,function(){return _n(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Jv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Qv=function(e,t){return function(n){return e(parseFloat(n))+(t||mn(n))}},Zv=function(e,t,n){return qg(e,t,0,1,n)},Wg=function(e,t,n){return Gr(n,function(i){return e[~~t(i)]})},Kv=function r(e,t,n){var i=t-e;return _n(e)?Wg(e,r(0,e.length),t):Gr(n,function(s){return(i+(s-e)%i)%i+e})},ey=function r(e,t,n){var i=t-e,s=i*2;return _n(e)?Wg(e,r(0,e.length-1),t):Gr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},$a=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Tg:yh),n+=e.substr(t,i-t)+Gg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},qg=function(e,t,n,i,s){var o=t-e,a=i-n;return Gr(s,function(l){return n+((l-e)/o*a||0)})},ty=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=an(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(_n(e)&&!_n(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var p=Math.min(d,~~_);return u[p](_-p)},n=t}else i||(e=Lo(_n(e)?[]:{},e));if(!u){for(l in t)df.call(a,e,l,"get",t[l]);s=function(_){return gf(_,a)||(o?e.p:e)}}}return Gr(n,s)},up=function(e,t,n){var i=e.labels,s=di,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ti=function(e,t,n){var i=e.vars,s=i[t],o=It,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Dr.length&&Ac(),a&&(It=a),u=l?s.apply(c,l):s.call(c),It=o,u},da=function(e){return kr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!un),e.progress()<1&&ti(e,"onInterrupt"),e},fo,Xg=[],$g=function(e){if(e)if(e=!e.name&&e.default||e,sf()||e.headless){var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Xa,render:gf,add:df,kill:_y,modifier:gy,rawVars:0},o={targetTest:0,get:0,getSetter:mf,aliases:{},register:0};if(Oo(),e!==i){if(Jn[t])return;ri(i,ri(Cc(e,s),o)),Lo(i.prototype,Lo(s,Cc(e,o))),Jn[i.prop=t]=i,e.targetTest&&(cc.push(i),lf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Rg(t,i),e.register&&e.register(Gn,i,Bn)}else Xg.push(e)},Et=255,fa={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},gu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Et+.5|0},Yg=function(e,t,n){var i=e?lr(e)?[e>>16,e>>8&Et,e&Et]:0:fa.black,s,o,a,l,c,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fa[e])i=fa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Et,i&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(yh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=gu(l+1/3,s,o),i[1]=gu(l,s,o),i[2]=gu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Mg),n&&i.length<4&&(i[3]=1),i}else i=e.match(yh)||fa.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Et,o=i[1]/Et,a=i[2]/Et,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},jg=function(e){var t=[],n=[],i=-1;return e.split(Or).forEach(function(s){var o=s.match(ho)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},hp=function(e,t,n){var i="",s=(e+i).match(Or),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Yg(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=jg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Or,"1").split(ho),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Or),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Or=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),ny=/hsl[a]?\(/,Jg=function(e){var t=e.join(" "),n;if(Or.lastIndex=0,Or.test(t))return n=ny.test(t),e[1]=hp(e[1],n),e[0]=hp(e[0],n,jg(e[1])),!0},Ya,Kn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,_=function p(g){var m=r()-i,x=g===!0,y,v,E,M;if((m>e||m<0)&&(n+=m-t),i+=m,E=i-n,y=E-o,(y>0||x)&&(M=++h.frame,d=E-h.time*1e3,h.time=E=E/1e3,o+=y+(y>=s?4:s-y),v=1),x||(l=c(p)),v)for(f=0;f<a.length;f++)a[f](E,d,M,g)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){Ag&&(!xh&&sf()&&(Pi=xh=window,of=Pi.document||{},ii.gsap=Gn,(Pi.gsapVersions||(Pi.gsapVersions=[])).push(Gn.version),Cg(Tc||Pi.GreenSockGlobals||!Pi.gsap&&Pi||{}),Xg.forEach($g)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Ya=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ya=0,c=Xa},lagSmoothing:function(g,m){e=g||1/0,t=Math.min(m||33,e)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,m,x){var y=m?function(v,E,M,w){g(v,E,M,w),h.remove(y)}:g;return h.remove(g),a[x?"unshift":"push"](y),Oo(),y},remove:function(g,m){~(m=a.indexOf(g))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},h})(),Oo=function(){return!Ya&&Kn.wake()},ht={},iy=/^[\d.\-M][\d.\-,\s]/,ry=/["']/g,sy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(ry,"").trim():+c,i=l.substr(a+1).trim();return t},oy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ay=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[sy(t[1])]:oy(e).split(",").map(Dg)):ht._CE&&iy.test(e)?ht._CE("",e):n},Qg=function(e){return function(t){return 1-e(1-t)}},Zg=function r(e,t){for(var n=e._first,i;n;)n instanceof Rn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},bs=function(e,t){return e&&(zt(e)?e:ht[e]||ay(e))||t},Ns=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return kn(e,function(a){ht[a]=ii[a]=s,ht[o=a.toLowerCase()]=n;for(var l in s)ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=s[l]}),s},Kg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},_u=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/vh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Fv((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Kg(a);return s=vh/s,l.config=function(c,u){return r(e,c,u)},l},vu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Kg(n);return i.config=function(s){return r(e,s)},i};kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ns(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;Ns("Elastic",_u("in"),_u("out"),_u());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ns("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ns("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ns("Circ",function(r){return-(Sg(1-r*r)-1)});Ns("Sine",function(r){return r===1?1:-Ov(r*Iv)+1});Ns("Back",vu("in"),vu("out"),vu());ht.SteppedEase=ht.steps=ii.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Tt;return function(a){return((i*ul(0,o,a)|0)+s)*n}}};Po.ease=ht["quad.out"];kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return cf+=r+","+r+"Params,"});var e_=function(e,t){this.id=Dv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Lg,this.set=t?t.getSetter:mf},ja=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Do(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),Ya||Kn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Do(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Oo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(iu(this,n),!s._dp||s.parent||Ng(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ig(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+lp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+lp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Io(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Rc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts,this.totalTime(ul(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),nu(this),Vv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Oo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Di(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Un(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Rc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=kv);var i=un;return un=n,hf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),un=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,cp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,cp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ci(this,n),Un(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Un(i)),this._dur||(this._zTime=-Tt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=zt(n)?n:Og,a=function(){var c=i.then;i.then=null,zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){da(this)},r})();ri(ja.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var Rn=(function(r){bg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Un(n.sortChildren),Ot&&Di(n.parent||Ot,er(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ug(er(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ea(0,arguments,this),this},t.from=function(i,s,o){return Ea(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ea(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ma(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new $t(i,s,ci(this,o),1),this},t.call=function(i,s,o){return Di(this,$t.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new $t(i,o,ci(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Ma(o).immediateRender=Un(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Ma(a).immediateRender=Un(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Yt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,p,g,m,x,y,v,E,M,w;if(this!==Ot&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,y=this._ts,m=!y,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(d=Yt(u%g),u===l?(p=this._repeat,d=c):(E=Yt(u/g),p=~~E,p&&p===E&&(d=c,p--),d>c&&(d=c)),E=Io(this._tTime,g),!a&&this._tTime&&E!==p&&this._tTime-E*g-this._dur<=0&&(E=p),M&&p&1&&(d=c-d,w=1),p!==E&&!this._lock){var C=M&&E&1,S=C===(M&&p&1);if(p<E&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Yt(p*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ti(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Zg(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Xv(this,Yt(a),Yt(d)),x&&(u-=d-(d=x._start))),this._tTime=u,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!E&&(ti(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=-Tt);break}}f=_}else{f=this._last;for(var b=i<0?i:d;f;){if(_=f._prev,(f._act||b<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(b-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(b-f._start)*f._ts,s,o||un&&hf(f)),d!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=b?-Tt:Tt);break}}f=_}}if(x&&!s&&(this.pause(),x.render(d>=a?0:-Tt)._zTime=d>=a?1:-1,this._ts))return this._start=v,nu(this),this.render(i,s,o);this._onUpdate&&!s&&ti(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&kr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ti(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(lr(s)||(s=ci(this,s,i)),!(i instanceof ja)){if(_n(i))return i.forEach(function(a){return o.add(a,s)}),this;if(an(i))return this.addLabel(i,s);if(zt(i))i=$t.delayedCall(0,i);else return this}return this!==i?Di(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-di);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof $t?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return an(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(i.parent===this&&tu(this,i),i===this._recent&&(this._recent=this._last),xs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Yt(Kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ci(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=$t.delayedCall(0,s||Xa,o);return a.data="isPause",this._hasPause=1,Di(this,a,ci(this,i))},t.removePause=function(i){var s=this._first;for(i=ci(this,i);s;)s._start===i&&s.data==="isPause"&&kr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Tr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=fi(i),l=this._first,c=lr(s),u;l;)l instanceof $t?Bv(l._targets,a)&&(c?(!Tr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ci(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=$t.to(o,ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!f){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==g&&Do(_,g,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ri({startAt:{time:ci(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),up(this,ci(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),up(this,ci(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return xs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xs(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=di,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Di(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Do(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ot._ts&&(Ig(Ot,Rc(i,Ot)),Pg=Kn.frame),Kn.frame>=op){op+=ni.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&ni.autoSleep&&Kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Kn.sleep()}}},e})(ja);ri(Rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ly=function(e,t,n,i,s,o,a){var l=new Bn(this._pt,e,t,0,1,o_,null,s),c=0,u=0,h,d,f,_,p,g,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=$a(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),d=n.match(pu)||[];h=pu.exec(i);)_=h[0],p=i.substring(c,h.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(g=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:g,c:_.charAt(1)==="="?xo(g,_)-g:parseFloat(_)-g,m:f&&f<4?Math.round:0},c=pu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Eg.test(i)||m)&&(l.e=0),this._pt=l,l},df=function(e,t,n,i,s,o,a,l,c,u){zt(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:zt(h)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=zt(h)?c?fy:r_:pf,_;if(an(i)&&(~i.indexOf("random(")&&(i=$a(i)),i.charAt(1)==="="&&(_=xo(d,i)+(mn(d)||0),(_||_===0)&&(i=_))),!u||d!==i||Ah)return!isNaN(d*i)&&i!==""?(_=new Bn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?my:s_,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&af(t,i),ly.call(this,e,t,d,i,f,l||ni.stringFilter,c))},cy=function(e,t,n,i,s){if(zt(e)&&(e=Ta(e,s,t,n,i)),!Gi(e)||e.style&&e.nodeType||_n(e)||wg(e))return an(e)?Ta(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Ta(e[a],s,t,n,i);return o},t_=function(e,t,n,i,s,o){var a,l,c,u;if(Jn[e]&&(a=new Jn[e]).init(s,a.rawVars?t[e]:cy(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Bn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==fo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Tr,Ah,ff=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,p=e._startAt,g=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:g,y=e._overwrite==="auto"&&!nf,v=e.timeline,E,M,w,C,S,b,D,N,G,V,Y,q,X;if(v&&(!d||!s)&&(s="none"),e._ease=bs(s,Po.ease),e._yEase=h?Qg(bs(h===!0?s:h,Po.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(N=g[0]?ys(g[0]).harness:0,q=N&&i[N.prop],E=Cc(i,lf),p&&(p._zTime<0&&p.progress(1),t<0&&u&&a&&!f?p.render(-1,!0):p.revert(u&&_?lc:Uv),p._lazy=0),o){if(kr(e._startAt=$t.set(g,ri({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!p&&Un(l),startAt:null,delay:0,onUpdate:c&&function(){return ti(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un||!a&&!f)&&e._startAt.revert(lc),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!p){if(t&&(a=!1),w=ri({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Un(l),immediateRender:a,stagger:0,parent:m},E),q&&(w[N.prop]=q),kr(e._startAt=$t.set(g,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un?e._startAt.revert(lc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Un(l)||l&&!_,M=0;M<g.length;M++){if(S=g[M],D=S._gsap||uf(g)[M]._gsap,e._ptLookup[M]=V={},bh[D.id]&&Dr.length&&Ac(),Y=x===g?M:x.indexOf(S),N&&(G=new N).init(S,q||E,e,Y,x)!==!1&&(e._pt=C=new Bn(e._pt,S,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(B){V[B]=C}),G.priority&&(b=1)),!N||q)for(w in E)Jn[w]&&(G=t_(w,E,e,Y,S,x))?G.priority&&(b=1):V[w]=C=df.call(e,S,w,"get",E[w],Y,x,0,i.stringFilter);e._op&&e._op[M]&&e.kill(S,e._op[M]),y&&e._pt&&(Tr=e,Ot.killTweensOf(S,V,e.globalTime(t)),X=!e.parent,Tr=0),e._pt&&l&&(bh[D.id]=1)}b&&a_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,d&&t<=0&&v.render(di,!0,!0)},uy=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ah=1,e.vars[t]="+=0",ff(e,a),Ah=0,l?qa(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Vt(n)+mn(h.e)),h.b&&(h.b=u.s+mn(h.b))},hy=function(e,t){var n=e[0]?ys(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Lo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},dy=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(_n(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ta=function(e,t,n,i,s){return zt(e)?e.call(t,n,i,s):an(e)&&~e.indexOf("random(")?$a(e):e},n_=cf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",i_={};kn(n_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return i_[r]=1});var $t=(function(r){bg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ma(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,p=l.defaults,g=l.scrollTrigger,m=l.yoyoEase,x=i.parent||Ot,y=(_n(n)||wg(n)?lr(n[0]):"length"in i)?[n]:fi(n),v,E,M,w,C,S,b,D;if(a._targets=y.length?uf(y):qa("GSAP target "+n+" not found. https://gsap.com",!ni.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||_l(c)||_l(u)){if(i=a.vars,v=a.timeline=new Rn({data:"nested",defaults:p||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=er(a),v._start=0,d||_l(c)||_l(u)){if(w=y.length,b=d&&Hg(d),Gi(d))for(C in d)~n_.indexOf(C)&&(D||(D={}),D[C]=d[C]);for(E=0;E<w;E++)M=Cc(i,i_),M.stagger=0,m&&(M.yoyoEase=m),D&&Lo(M,D),S=y[E],M.duration=+Ta(c,er(a),E,S,y),M.delay=(+Ta(u,er(a),E,S,y)||0)-a._delay,!d&&w===1&&M.delay&&(a._delay=u=M.delay,a._start+=u,M.delay=0),v.to(S,M,b?b(E,S,y):0),v._ease=ht.none;v.duration()?c=u=0:a.timeline=0}else if(_){Ma(ri(v.vars.defaults,{ease:"none"})),v._ease=bs(_.ease||i.ease||"none");var N=0,G,V,Y;if(_n(_))_.forEach(function(q){return v.to(y,q,">")}),v.duration();else{M={};for(C in _)C==="ease"||C==="easeEach"||dy(C,_[C],M,_.easeEach);for(C in M)for(G=M[C].sort(function(q,X){return q.t-X.t}),N=0,E=0;E<G.length;E++)V=G[E],Y={ease:V.e,duration:(V.t-(E?G[E-1].t:0))/100*c},Y[C]=V.v,v.to(y,Y,N),N+=Y.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!nf&&(Tr=er(a),Ot.killTweensOf(y),Tr=0),Di(x,er(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Yt(x._time)&&Un(h)&&Gv(er(a))&&x.data!=="nested")&&(a._tTime=-Tt,a.render(Math.max(0,-u)||0)),g&&Ug(er(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Tt&&!u?l:i<Tt?0:i,d,f,_,p,g,m,x,y,v;if(!c)qv(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,y=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+i,s,o);if(d=Yt(h%p),h===l?(_=this._repeat,d=c):(g=Yt(h/p),_=~~g,_&&_===g?(d=c,_--):d>c&&(d=c)),m=this._yoyo&&_&1,m&&(v=this._yEase,d=c-d),g=Io(this._tTime,p),d===a&&!o&&this._initted&&_===g)return this._tTime=h,this;_!==g&&(y&&this._yEase&&Zg(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&d!==p&&this._initted&&(this._lock=o=1,this.render(Yt(p*_),!0).invalidate()._lock=0))}if(!this._initted){if(kg(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(d/c),this._from&&(this.ratio=x=1-x),!a&&h&&!s&&!g&&(ti(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Sh(this,i,s,o),ti(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&ti(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Sh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&kr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(ti(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ya||Kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ff(this,c),u=this._ease(c/this._dur),uy(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(iu(this,0),this.parent||Fg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?da(this):this.scrollTrigger&&this.scrollTrigger.kill(!!un),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Tr&&Tr.vars.overwrite!==!0)._first||da(this),this.parent&&o!==this.timeline.totalDuration()&&Do(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?fi(i):a,c=this._ptLookup,u=this._pt,h,d,f,_,p,g,m;if((!s||s==="all")&&Hv(a,l))return s==="all"&&(this._pt=0),da(this);for(h=this._op=this._op||[],s!=="all"&&(an(s)&&(p={},kn(s,function(x){return p[x]=1}),s=p),s=hy(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(h[m]=s,_=d,f={}):(f=h[m]=h[m]||{},_=s);for(p in _)g=d&&d[p],g&&((!("kill"in g.d)||g.d.kill(p)===!0)&&tu(this,g,"_pt"),delete d[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&u&&da(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ea(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ea(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ot.killTweensOf(i,s,o)},e})(ja);ri($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});kn("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var e=new Rn,t=Mh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var pf=function(e,t,n){return e[t]=n},r_=function(e,t,n){return e[t](n)},fy=function(e,t,n,i){return e[t](i.fp,n)},py=function(e,t,n){return e.setAttribute(t,n)},mf=function(e,t){return zt(e[t])?r_:rf(e[t])&&e.setAttribute?py:pf},s_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},my=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},o_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},gf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},gy=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},_y=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?tu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},vy=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},a_=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Bn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||s_,this.d=l||this,this.set=c||pf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=vy,this.m=n,this.mt=s,this.tween=i},r})();kn(cf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return lf[r]=1});ii.TweenMax=ii.TweenLite=$t;ii.TimelineLite=ii.TimelineMax=Rn;Ot=new Rn({sortChildren:!1,defaults:Po,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ni.stringFilter=Jg;var Ss=[],uc={},yy=[],dp=0,xy=0,yu=function(e){return(uc[e]||yy).map(function(t){return t()})},Ch=function(){var e=Date.now(),t=[];e-dp>2&&(yu("matchMediaInit"),Ss.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Pi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),yu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),dp=e,yu("matchMedia"))},l_=(function(){function r(t,n){this.selector=n&&Eh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=xy++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){zt(n)&&(s=i,i=n,n=zt);var o=this,a=function(){var c=It,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Eh(s)),It=o,h=i.apply(o,arguments),zt(h)&&o._r.push(h),It=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===zt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=It;It=null,n(this),It=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof $t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Rn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $t)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ss.length;o--;)Ss[o].id===this.id&&Ss.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),by=(function(){function r(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Gi(n)||(n={matches:n});var o=new l_(0,s||this.scope),a=o.conditions={},l,c,u;It&&!o.selector&&(o.selector=It.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Pi.matchMedia(n[c]),l&&(Ss.indexOf(o)<0&&Ss.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ch):l.addEventListener("change",Ch)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Pc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return $g(i)})},timeline:function(e){return new Rn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){an(e)&&(e=fi(e)[0]);var s=ys(e||{}).get,o=n?Og:Dg;return n==="native"&&(n=""),e&&(t?o((Jn[t]&&Jn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Jn[a]&&Jn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=fi(e),e.length>1){var i=e.map(function(u){return Gn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Jn[t],a=ys(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;fo._pt=0,h.init(e,n?u+n:u,fo,0,[e]),h.render(1,h),fo._pt&&gf(1,fo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Gn.to(e,ri((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=bs(e.ease,Po.ease)),ap(Po,e||{})},config:function(e){return ap(ni,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Jn[a]&&!ii[a]&&qa(t+" effect requires "+a+" plugin.")}),mu[t]=function(a,l,c){return n(fi(a),ri(l||{},s),c)},o&&(Rn.prototype[t]=function(a,l,c){return this.add(mu[t](a,Gi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=bs(t)},parseEase:function(e,t){return arguments.length?bs(e,t):ht},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Rn(e),i,s;for(n.smoothChildTiming=Un(e.smoothChildTiming),Ot.remove(n),n._dp=0,n._time=n._tTime=Ot._time,i=Ot._first;i;)s=i._next,(t||!(!i._dur&&i instanceof $t&&i.vars.onComplete===i._targets[0]))&&Di(n,i,i._start-i._delay),i=s;return Di(Ot,n,0),n},context:function(e,t){return e?new l_(e,t):It},matchMedia:function(e){return new by(e)},matchMediaRefresh:function(){return Ss.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ch()},addEventListener:function(e,t){var n=uc[e]||(uc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=uc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Kv,wrapYoyo:ey,distribute:Hg,random:Gg,snap:Vg,normalize:Zv,getUnit:mn,clamp:Yv,splitColor:Yg,toArray:fi,selector:Eh,mapRange:qg,pipe:Jv,unitize:Qv,interpolate:ty,shuffle:zg},install:Cg,effects:mu,ticker:Kn,updateRoot:Rn.updateRoot,plugins:Jn,globalTimeline:Ot,core:{PropTween:Bn,globals:Rg,Tween:$t,Timeline:Rn,Animation:ja,getCache:ys,_removeLinkedListItem:tu,reverting:function(){return un},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return nf=e}}};kn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Pc[r]=$t[r]});Kn.add(Rn.updateRoot);fo=Pc.to({},{duration:0});var Sy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},wy=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Sy(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},xu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(an(s)&&(l={},kn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}wy(a,s)}}}},Gn=Pc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)un?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},xu("roundProps",Th),xu("modifiers"),xu("snap",Vg))||Pc;$t.version=Rn.version=Gn.version="3.13.0";Ag=1;sf()&&Oo();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fp,Ar,bo,_f,hs,pp,vf,My=function(){return typeof window<"u"},cr={},is=180/Math.PI,So=Math.PI/180,zs=Math.atan2,mp=1e8,yf=/([A-Z])/g,Ey=/(left|right|width|margin|padding|x)/i,Ty=/[\s,\(]\S/,Fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ay=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Cy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ry=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},c_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},u_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Py=function(e,t,n){return e.style[t]=n},Ly=function(e,t,n){return e.style.setProperty(t,n)},Iy=function(e,t,n){return e._gsap[t]=n},Dy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Oy=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Fy=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ft="transform",zn=Ft+"Origin",Ny=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in cr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Fi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=tr(i,a)}):this.tfm[e]=o.x?o[e]:tr(i,e),e===zn&&(this.tfm.zOrigin=o.zOrigin);else return Fi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(zn,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},h_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Uy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(yf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=vf(),(!s||!s.isStart)&&!n[Ft]&&(h_(n),i.zOrigin&&n[zn]&&(n[zn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},d_=function(e,t){var n={target:e,props:[],revert:Uy,save:Ny};return e._gsap||Gn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},f_,Ph=function(e,t){var n=Ar.createElementNS?Ar.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ar.createElement(e);return n&&n.style?n:Ar.createElement(e)},pi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(yf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Fo(t)||t,1)||""},gp="O,Moz,ms,Ms,Webkit".split(","),Fo=function(e,t,n){var i=t||hs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(gp[o]+e in s););return o<0?null:(o===3?"ms":o>=0?gp[o]:"")+e},Lh=function(){My()&&window.document&&(fp=window,Ar=fp.document,bo=Ar.documentElement,hs=Ph("div")||{style:{}},Ph("div"),Ft=Fo(Ft),zn=Ft+"Origin",hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",f_=!!Fo("perspective"),vf=Gn.core.reverting,_f=1)},_p=function(e){var t=e.ownerSVGElement,n=Ph("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),bo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),bo.removeChild(n),s},vp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},p_=function(e){var t,n;try{t=e.getBBox()}catch{t=_p(e),n=1}return t&&(t.width||t.height)||n||(t=_p(e)),t&&!t.width&&!t.x&&!t.y?{x:+vp(e,["x","cx","x1"])||0,y:+vp(e,["y","cy","y1"])||0,width:0,height:0}:t},m_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&p_(e))},As=function(e,t){if(t){var n=e.style,i;t in cr&&t!==zn&&(t=Ft),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(yf,"-$1").toLowerCase())):n.removeAttribute(t)}},Cr=function(e,t,n,i,s,o){var a=new Bn(e._pt,t,n,0,1,o?u_:c_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},yp={deg:1,rad:1,turn:1},ky={grid:1,flex:1},Br=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=hs.style,l=Ey.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,p,g,m;if(i===o||!s||yp[i]||yp[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&m_(e),(f||o==="%")&&(cr[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Vt(f?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(d?o:i),p=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Ar||!p.appendChild)&&(p=Ar.body),g=p._gsap,g&&f&&g.width&&l&&g.time===Kn.time&&!g.uncache)return Vt(s/g.width*h);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,_=e[u],x?e.style[t]=x:As(e,t)}else(f||o==="%")&&!ky[pi(p,"display")]&&(a.position=pi(e,"position")),p===e&&(a.position="static"),p.appendChild(hs),_=hs[u],p.removeChild(hs),a.position="absolute";return l&&f&&(g=ys(p),g.time=Kn.time,g.width=p[u]),Vt(d?_*s/h:_&&s?h/_*s:0)},tr=function(e,t,n,i){var s;return _f||Lh(),t in Fi&&t!=="transform"&&(t=Fi[t],~t.indexOf(",")&&(t=t.split(",")[0])),cr[t]&&t!=="transform"?(s=Qa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ic(pi(e,zn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Lc[t]&&Lc[t](e,t,n)||pi(e,t)||Lg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Br(e,t,s,n)+n:s},By=function(e,t,n,i){if(!n||n==="none"){var s=Fo(t,e,1),o=s&&pi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=pi(e,"borderTopColor"))}var a=new Bn(this._pt,e.style,t,0,1,o_),l=0,c=0,u,h,d,f,_,p,g,m,x,y,v,E;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=pi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(p=e.style[t],e.style[t]=i,i=pi(e,t)||i,p?e.style[t]=p:As(e,t)),u=[n,i],Jg(u),n=u[0],i=u[1],d=n.match(ho)||[],E=i.match(ho)||[],E.length){for(;h=ho.exec(i);)g=h[0],x=i.substring(l,h.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),g!==(p=d[c++]||"")&&(f=parseFloat(p)||0,v=p.substr((f+"").length),g.charAt(1)==="="&&(g=xo(f,g)+v),m=parseFloat(g),y=g.substr((m+"").length),l=ho.lastIndex-y.length,y||(y=y||ni.units[t]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(f=Br(e,t,p,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:f,c:m-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?u_:c_;return Eg.test(i)&&(a.e=0),this._pt=a,a},xp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=xp[n]||n,t[1]=xp[i]||i,t.join(" ")},Hy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],cr[a]&&(l=1,a=a==="transformOrigin"?zn:Ft),As(n,a);l&&(As(n,Ft),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Qa(n,1),o.uncache=1,h_(i)))}},Lc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Bn(e._pt,t,n,0,0,Hy);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ja=[1,0,0,1,0,0],g_={},__=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bp=function(e){var t=pi(e,Ft);return __(t)?Ja:t.substr(7).match(Mg).map(Vt)},xf=function(e,t){var n=e._gsap||ys(e),i=e.style,s=bp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ja:s):(s===Ja&&!e.offsetParent&&e!==bo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,bo.appendChild(e)),s=bp(e),l?i.display=l:As(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):bo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ih=function(e,t,n,i,s,o){var a=e._gsap,l=s||xf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],p=l[2],g=l[3],m=l[4],x=l[5],y=t.split(" "),v=parseFloat(y[0])||0,E=parseFloat(y[1])||0,M,w,C,S;n?l!==Ja&&(w=f*g-_*p)&&(C=v*(g/w)+E*(-p/w)+(p*x-g*m)/w,S=v*(-_/w)+E*(f/w)-(f*x-_*m)/w,v=C,E=S):(M=p_(e),v=M.x+(~y[0].indexOf("%")?v/100*M.width:v),E=M.y+(~(y[1]||y[0]).indexOf("%")?E/100*M.height:E)),i||i!==!1&&a.smooth?(m=v-c,x=E-u,a.xOffset=h+(m*f+x*p)-m,a.yOffset=d+(m*_+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[zn]="0px 0px",o&&(Cr(o,a,"xOrigin",c,v),Cr(o,a,"yOrigin",u,E),Cr(o,a,"xOffset",h,a.xOffset),Cr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+E)},Qa=function(e,t){var n=e._gsap||new e_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=pi(e,zn)||"0",u,h,d,f,_,p,g,m,x,y,v,E,M,w,C,S,b,D,N,G,V,Y,q,X,B,se,U,ge,_e,we,F,O;return u=h=d=p=g=m=x=y=v=0,f=_=1,n.svg=!!(e.getCTM&&m_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),i.scale=i.rotate=i.translate="none"),w=xf(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Ih(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,w)),E=n.xOrigin||0,M=n.yOrigin||0,w!==Ja&&(D=w[0],N=w[1],G=w[2],V=w[3],u=Y=w[4],h=q=w[5],w.length===6?(f=Math.sqrt(D*D+N*N),_=Math.sqrt(V*V+G*G),p=D||N?zs(N,D)*is:0,x=G||V?zs(G,V)*is+p:0,x&&(_*=Math.abs(Math.cos(x*So))),n.svg&&(u-=E-(E*D+M*G),h-=M-(E*N+M*V))):(O=w[6],we=w[7],U=w[8],ge=w[9],_e=w[10],F=w[11],u=w[12],h=w[13],d=w[14],C=zs(O,_e),g=C*is,C&&(S=Math.cos(-C),b=Math.sin(-C),X=Y*S+U*b,B=q*S+ge*b,se=O*S+_e*b,U=Y*-b+U*S,ge=q*-b+ge*S,_e=O*-b+_e*S,F=we*-b+F*S,Y=X,q=B,O=se),C=zs(-G,_e),m=C*is,C&&(S=Math.cos(-C),b=Math.sin(-C),X=D*S-U*b,B=N*S-ge*b,se=G*S-_e*b,F=V*b+F*S,D=X,N=B,G=se),C=zs(N,D),p=C*is,C&&(S=Math.cos(C),b=Math.sin(C),X=D*S+N*b,B=Y*S+q*b,N=N*S-D*b,q=q*S-Y*b,D=X,Y=B),g&&Math.abs(g)+Math.abs(p)>359.9&&(g=p=0,m=180-m),f=Vt(Math.sqrt(D*D+N*N+G*G)),_=Vt(Math.sqrt(q*q+O*O)),C=zs(Y,q),x=Math.abs(C)>2e-4?C*is:0,v=F?1/(F<0?-F:F):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!__(pi(e,Ft)),X&&e.setAttribute("transform",X))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=p<=0?180:-180,p+=p<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Vt(f),n.scaleY=Vt(_),n.rotation=Vt(p)+a,n.rotationX=Vt(g)+a,n.rotationY=Vt(m)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[zn]=Ic(c)),n.xOffset=n.yOffset=0,n.force3D=ni.force3D,n.renderTransform=n.svg?Gy:f_?v_:Vy,n.uncache=0,n},Ic=function(e){return(e=e.split(" "))[0]+" "+e[1]},bu=function(e,t,n){var i=mn(t);return Vt(parseFloat(t)+parseFloat(Br(e,"x",n+"px",i)))+i},Vy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,v_(e,t)},$r="0deg",Qo="0px",Yr=") ",v_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,p=n.scaleY,g=n.transformPerspective,m=n.force3D,x=n.target,y=n.zOrigin,v="",E=m==="auto"&&e&&e!==1||m===!0;if(y&&(h!==$r||u!==$r)){var M=parseFloat(u)*So,w=Math.sin(M),C=Math.cos(M),S;M=parseFloat(h)*So,S=Math.cos(M),o=bu(x,o,w*S*-y),a=bu(x,a,-Math.sin(M)*-y),l=bu(x,l,C*S*-y+y)}g!==Qo&&(v+="perspective("+g+Yr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(E||o!==Qo||a!==Qo||l!==Qo)&&(v+=l!==Qo||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Yr),c!==$r&&(v+="rotate("+c+Yr),u!==$r&&(v+="rotateY("+u+Yr),h!==$r&&(v+="rotateX("+h+Yr),(d!==$r||f!==$r)&&(v+="skew("+d+", "+f+Yr),(_!==1||p!==1)&&(v+="scale("+_+", "+p+Yr),x.style[Ft]=v||"translate(0, 0)"},Gy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,p=n.yOrigin,g=n.xOffset,m=n.yOffset,x=n.forceCSS,y=parseFloat(o),v=parseFloat(a),E,M,w,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=So,c*=So,E=Math.cos(l)*h,M=Math.sin(l)*h,w=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=So,S=Math.tan(c-u),S=Math.sqrt(1+S*S),w*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),E*=S,M*=S)),E=Vt(E),M=Vt(M),w=Vt(w),C=Vt(C)):(E=h,C=d,M=w=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=Br(f,"x",o,"px"),v=Br(f,"y",a,"px")),(_||p||g||m)&&(y=Vt(y+_-(_*E+p*w)+g),v=Vt(v+p-(_*M+p*C)+m)),(i||s)&&(S=f.getBBox(),y=Vt(y+i/100*S.width),v=Vt(v+s/100*S.height)),S="matrix("+E+","+M+","+w+","+C+","+y+","+v+")",f.setAttribute("transform",S),x&&(f.style[Ft]=S)},Wy=function(e,t,n,i,s){var o=360,a=an(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?is:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*mp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*mp)%o-~~(c/o)*o)),e._pt=d=new Bn(e._pt,t,n,i,c,Ay),d.e=u,d.u="deg",e._props.push(n),d},Sp=function(e,t){for(var n in t)e[n]=t[n];return e},qy=function(e,t,n){var i=Sp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ft]=t,a=Qa(n,1),As(n,Ft),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ft],o[Ft]=t,a=Qa(n,1),o[Ft]=c);for(l in cr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=mn(c),_=mn(u),h=f!==_?Br(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new Bn(e._pt,a,l,h,d-h,Rh),e._pt.u=_||0,e._props.push(l));Sp(a,i)};kn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Lc[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(_){return tr(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(_,p){return f[_]=d[p]=d[p]||d[(p-1)/2|0]}),a.init(l,f,h)}});var y_={name:"css",register:Lh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,_,p,g,m,x,y,v,E,M,w,C;_f||Lh(),this.styles=this.styles||d_(e),C=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(u=t[p],!(Jn[p]&&t_(p,t,n,i,e,s)))){if(f=typeof u,_=Lc[p],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=$a(u)),_)_(this,e,p,u,n)&&(w=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Or.lastIndex=0,Or.test(c)||(g=mn(c),m=mn(u)),m?g!==m&&(c=Br(e,p,c,m)+m):g&&(u+=g),this.add(a,"setProperty",c,u,i,s,0,0,p),o.push(p),C.push(p,0,a[p]);else if(f!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,s):l[p],an(c)&&~c.indexOf("random(")&&(c=$a(c)),mn(c+"")||c==="auto"||(c+=ni.units[p]||mn(tr(e,p))||""),(c+"").charAt(1)==="="&&(c=tr(e,p))):c=tr(e,p),d=parseFloat(c),x=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),p in Fi&&(p==="autoAlpha"&&(d===1&&tr(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,a.visibility),Cr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=Fi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),y=p in cr,y){if(this.styles.save(p),f==="string"&&u.substring(0,6)==="var(--"&&(u=pi(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),v||(E=e._gsap,E.renderTransform&&!t.parseTransform||Qa(e,t.parseTransform),M=t.smoothOrigin!==!1&&E.smooth,v=this._pt=new Bn(this._pt,a,Ft,0,1,E.renderTransform,E,0,-1),v.dep=1),p==="scale")this._pt=new Bn(this._pt,E,"scaleY",E.scaleY,(x?xo(E.scaleY,x+h):h)-E.scaleY||0,Rh),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){C.push(zn,0,a[zn]),u=zy(u),E.svg?Ih(e,u,0,M,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&Cr(this,E,"zOrigin",E.zOrigin,m),Cr(this,a,p,Ic(c),Ic(u)));continue}else if(p==="svgOrigin"){Ih(e,u,1,M,0,this);continue}else if(p in g_){Wy(this,E,p,d,x?xo(d,x+u):u);continue}else if(p==="smoothOrigin"){Cr(this,E,"smooth",E.smooth,u);continue}else if(p==="force3D"){E[p]=u;continue}else if(p==="transform"){qy(this,u,e);continue}}else p in a||(p=Fo(p)||p);if(y||(h||h===0)&&(d||d===0)&&!Ty.test(u)&&p in a)g=(c+"").substr((d+"").length),h||(h=0),m=mn(u)||(p in ni.units?ni.units[p]:g),g!==m&&(d=Br(e,p,c,m)),this._pt=new Bn(this._pt,y?E:a,p,d,(x?xo(d,x+h):h)-d,!y&&(m==="px"||p==="zIndex")&&t.autoRound!==!1?Ry:Rh),this._pt.u=m||0,g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Cy);else if(p in a)By.call(this,e,p,c,x?x+u:u);else if(p in e)this.add(e,p,c||e[p],x?x+u:u,i,s);else if(p!=="parseTransform"){af(p,u);continue}y||(p in a?C.push(p,0,a[p]):typeof e[p]=="function"?C.push(p,2,e[p]()):C.push(p,1,c||e[p])),o.push(p)}}w&&a_(this)},render:function(e,t){if(t.tween._time||!vf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:tr,aliases:Fi,getSetter:function(e,t,n){var i=Fi[t];return i&&i.indexOf(",")<0&&(t=i),t in cr&&t!==zn&&(e._gsap.x||tr(e,"x"))?n&&pp===n?t==="scale"?Dy:Iy:(pp=n||{})&&(t==="scale"?Oy:Fy):e.style&&!rf(e.style[t])?Py:~t.indexOf("-")?Ly:mf(e,t)},core:{_removeProperty:As,_getMatrix:xf}};Gn.utils.checkPrefix=Fo;Gn.core.getStyleSaver=d_;(function(r,e,t,n){var i=kn(r+","+e+","+t,function(s){cr[s]=1});kn(e,function(s){ni.units[s]="deg",g_[s]=1}),Fi[i[13]]=r+","+e,kn(n,function(s){var o=s.split(":");Fi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ni.units[r]="px"});Gn.registerPlugin(y_);var De=Gn.registerPlugin(y_)||Gn;De.core.Tween;/*!
 * paths 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xy=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,$y=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,Yy=Math.PI/180,vl=Math.sin,yl=Math.cos,Aa=Math.abs,Zo=Math.sqrt,jy=function(e){return typeof e=="number"},wp=1e5,fr=function(e){return Math.round(e*wp)/wp||0};function Jy(r,e,t,n,i,s,o){for(var a=r.length,l,c,u,h,d;--a>-1;)for(l=r[a],c=l.length,u=0;u<c;u+=2)h=l[u],d=l[u+1],l[u]=h*e+d*n+s,l[u+1]=h*t+d*i+o;return r._dirty=1,r}function Qy(r,e,t,n,i,s,o,a,l){if(!(r===a&&e===l)){t=Aa(t),n=Aa(n);var c=i%360*Yy,u=yl(c),h=vl(c),d=Math.PI,f=d*2,_=(r-a)/2,p=(e-l)/2,g=u*_+h*p,m=-h*_+u*p,x=g*g,y=m*m,v=x/(t*t)+y/(n*n);v>1&&(t=Zo(v)*t,n=Zo(v)*n);var E=t*t,M=n*n,w=(E*M-E*y-M*x)/(E*y+M*x);w<0&&(w=0);var C=(s===o?-1:1)*Zo(w),S=C*(t*m/n),b=C*-(n*g/t),D=(r+a)/2,N=(e+l)/2,G=D+(u*S-h*b),V=N+(h*S+u*b),Y=(g-S)/t,q=(m-b)/n,X=(-g-S)/t,B=(-m-b)/n,se=Y*Y+q*q,U=(q<0?-1:1)*Math.acos(Y/Zo(se)),ge=(Y*B-q*X<0?-1:1)*Math.acos((Y*X+q*B)/Zo(se*(X*X+B*B)));isNaN(ge)&&(ge=d),!o&&ge>0?ge-=f:o&&ge<0&&(ge+=f),U%=f,ge%=f;var _e=Math.ceil(Aa(ge)/(f/4)),we=[],F=ge/_e,O=4/3*vl(F/2)/(1+yl(F/2)),L=u*t,A=h*t,j=h*-n,he=u*n,$;for($=0;$<_e;$++)i=U+$*F,g=yl(i),m=vl(i),Y=yl(i+=F),q=vl(i),we.push(g-O*m,m+O*g,Y+O*q,q-O*Y,Y,q);for($=0;$<we.length;$+=2)g=we[$],m=we[$+1],we[$]=g*L+m*j+G,we[$+1]=g*A+m*he+V;return we[$-2]=a,we[$-1]=l,we}}function Zy(r){var e=(r+"").replace($y,function(S){var b=+S;return b<1e-4&&b>-1e-4?0:b}).match(Xy)||[],t=[],n=0,i=0,s=2/3,o=e.length,a=0,l="ERROR: malformed path: "+r,c,u,h,d,f,_,p,g,m,x,y,v,E,M,w,C=function(b,D,N,G){x=(N-b)/3,y=(G-D)/3,p.push(b+x,D+y,N-x,G-y,N,G)};if(!r||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(E=f,isNaN(e[c])?(f=e[c].toUpperCase(),_=f!==e[c]):c--,h=+e[c+1],d=+e[c+2],_&&(h+=n,d+=i),c||(g=h,m=d),f==="M")p&&(p.length<8?t.length-=1:a+=p.length),n=g=h,i=m=d,p=[h,d],t.push(p),c+=2,f="L";else if(f==="C")p||(p=[0,0]),_||(n=i=0),p.push(h,d,n+e[c+3]*1,i+e[c+4]*1,n+=e[c+5]*1,i+=e[c+6]*1),c+=6;else if(f==="S")x=n,y=i,(E==="C"||E==="S")&&(x+=n-p[p.length-4],y+=i-p[p.length-3]),_||(n=i=0),p.push(x,y,h,d,n+=e[c+3]*1,i+=e[c+4]*1),c+=4;else if(f==="Q")x=n+(h-n)*s,y=i+(d-i)*s,_||(n=i=0),n+=e[c+3]*1,i+=e[c+4]*1,p.push(x,y,n+(h-n)*s,i+(d-i)*s,n,i),c+=4;else if(f==="T")x=n-p[p.length-4],y=i-p[p.length-3],p.push(n+x,i+y,h+(n+x*1.5-h)*s,d+(i+y*1.5-d)*s,n=h,i=d),c+=2;else if(f==="H")C(n,i,n=h,i),c+=1;else if(f==="V")C(n,i,n,i=h+(_?i-n:0)),c+=1;else if(f==="L"||f==="Z")f==="Z"&&(h=g,d=m,p.closed=!0),(f==="L"||Aa(n-h)>.5||Aa(i-d)>.5)&&(C(n,i,h,d),f==="L"&&(c+=2)),n=h,i=d;else if(f==="A"){if(M=e[c+4],w=e[c+5],x=e[c+6],y=e[c+7],u=7,M.length>1&&(M.length<3?(y=x,x=w,u--):(y=w,x=M.substr(2),u-=2),w=M.charAt(1),M=M.charAt(0)),v=Qy(n,i,+e[c+1],+e[c+2],+e[c+3],+M,+w,(_?n:0)+x*1,(_?i:0)+y*1),c+=u,v)for(u=0;u<v.length;u++)p.push(v[u]);n=p[p.length-2],i=p[p.length-1]}else console.log(l);return c=p.length,c<6?(t.pop(),c=0):p[0]===p[c-2]&&p[1]===p[c-1]&&(p.closed=!0),t.totalPoints=a+c,t}function Ky(r){jy(r[0])&&(r=[r]);var e="",t=r.length,n,i,s,o;for(i=0;i<t;i++){for(o=r[i],e+="M"+fr(o[0])+","+fr(o[1])+" C",n=o.length,s=2;s<n;s++)e+=fr(o[s++])+","+fr(o[s++])+" "+fr(o[s++])+","+fr(o[s++])+" "+fr(o[s++])+","+fr(o[s])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nn,x_,b_=function(){return Nn||typeof window<"u"&&(Nn=window.gsap)&&Nn.registerPlugin&&Nn},Mp=function(){Nn=b_(),Nn?(Nn.registerEase("_CE",Us.create),x_=1):console.warn("Please gsap.registerPlugin(CustomEase)")},ex=1e20,xl=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},tx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,nx=/[cLlsSaAhHvVtTqQ]/g,ix=function(e){var t=e.length,n=ex,i;for(i=1;i<t;i+=6)+e[i]<n&&(n=+e[i]);return n},rx=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var i=+e[0]*-1,s=-n,o=e.length,a=1/(+e[o-2]+i),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?ix(e)+s:+e[o-1]+s),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+i)*a,e[c+1]=(+e[c+1]+s)*l},sx=function r(e,t,n,i,s,o,a,l,c,u,h){var d=(e+n)/2,f=(t+i)/2,_=(n+s)/2,p=(i+o)/2,g=(s+a)/2,m=(o+l)/2,x=(d+_)/2,y=(f+p)/2,v=(_+g)/2,E=(p+m)/2,M=(x+v)/2,w=(y+E)/2,C=a-e,S=l-t,b=Math.abs((n-a)*S-(i-l)*C),D=Math.abs((s-a)*S-(o-l)*C),N;return u||(u=[{x:e,y:t},{x:a,y:l}],h=1),u.splice(h||u.length-1,0,{x:M,y:w}),(b+D)*(b+D)>c*(C*C+S*S)&&(N=u.length,r(e,t,d,f,x,y,M,w,c,u,h),r(M,w,v,E,g,m,a,l,c,u,h+1+(u.length-N))),u},Us=(function(){function r(t,n,i){x_||Mp(),this.id=t,this.setData(n,i)}var e=r.prototype;return e.setData=function(n,i){i=i||{},n=n||"0,0,1,1";var s=n.match(tx),o=1,a=[],l=[],c=i.precision||1,u=c<=1,h,d,f,_,p,g,m,x,y;if(this.data=n,(nx.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(s=Zy(n)[0]),h=s.length,h===4)s.unshift(0,0),s.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[h-2]!=1)&&rx(s,i.height,i.originY),this.segment=s,_=2;_<h;_+=6)d={x:+s[_-2],y:+s[_-1]},f={x:+s[_+4],y:+s[_+5]},a.push(d,f),sx(d.x,d.y,+s[_],+s[_+1],+s[_+2],+s[_+3],f.x,f.y,1/(c*2e5),a,a.length-1);for(h=a.length,_=0;_<h;_++)m=a[_],x=a[_-1]||m,(m.x>x.x||x.y!==m.y&&x.x===m.x||m===x)&&m.x<=1?(x.cx=m.x-x.x,x.cy=m.y-x.y,x.n=m,x.nx=m.x,u&&_>1&&Math.abs(x.cy/x.cx-a[_-2].cy/a[_-2].cx)>2&&(u=0),x.cx<o&&(x.cx?o=x.cx:(x.cx=.001,_===h-1&&(x.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(_--,1),h--);if(h=1/o+1|0,p=1/h,g=0,m=a[0],u){for(_=0;_<h;_++)y=_*p,m.nx<y&&(m=a[++g]),d=m.y+(y-m.x)/m.cx*m.cy,l[_]={x:y,cx:p,y:d,cy:0,nx:9},_&&(l[_-1].cy=d-l[_-1].y);g=a[a.length-1],l[h-1].cy=g.y-d,l[h-1].cx=g.x-l[l.length-1].x}else{for(_=0;_<h;_++)m.nx<_*p&&(m=a[++g]),l[_]=m;g<a.length-1&&(l[_-1]=a[a.length-2])}return this.ease=function(v){var E=l[v*h|0]||l[h-1];return E.nx<v&&(E=E.n),E.y+(v-E.x)/E.cx*E.cy},this.ease.custom=this,this.id&&Nn&&Nn.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return r.getSVGData(this,n)},r.create=function(n,i,s){return new r(n,i,s).ease},r.register=function(n){Nn=n,Mp()},r.get=function(n){return Nn.parseEase(n)},r.getSVGData=function(n,i){i=i||{};var s=i.width||100,o=i.height||100,a=i.x||0,l=(i.y||0)+o,c=Nn.utils.toArray(i.path)[0],u,h,d,f,_,p,g,m,x,y;if(i.invert&&(o=-o,l=0),typeof n=="string"&&(n=Nn.parseEase(n)),n.custom&&(n=n.custom),n instanceof r)u=Ky(Jy([n.segment],s,0,0,-o,a,l));else{for(u=[a,l],g=Math.max(5,(i.precision||1)*200),f=1/g,g+=2,m=5/g,x=xl(a+f*s),y=xl(l+n(f)*-o),h=(y-l)/(x-a),d=2;d<g;d++)_=xl(a+d*f*s),p=xl(l+n(d*f)*-o),(Math.abs((p-y)/(_-x)-h)>m||d===g-1)&&(u.push(x,y),h=(p-y)/(_-x)),x=_,y=p;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},r})();Us.version="3.13.0";Us.headless=!0;b_()&&Nn.registerPlugin(Us);function ox(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var hc={exports:{}};/*!
 * circletype 2.3.0
 * A JavaScript library that lets you curve type on the web.
 * Copyright © 2014-2018 Peter Hrynkow
 * Licensed MIT
 * https://github.com/peterhry/CircleType#readme
 */var ax=hc.exports,Ep;function lx(){return Ep||(Ep=1,(function(r,e){(function(t,n){r.exports=n()})(typeof self<"u"?self:ax,function(){return(function(t){function n(s){if(i[s])return i[s].exports;var o=i[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var i={};return n.m=t,n.c=i,n.d=function(s,o,a){n.o(s,o)||Object.defineProperty(s,o,{configurable:!1,enumerable:!0,get:a})},n.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return n.d(o,"a",o),o},n.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},n.p="",n(n.s=29)})([function(t,n,i){var s=i(24)("wks"),o=i(12),a=i(1).Symbol,l=typeof a=="function";(t.exports=function(c){return s[c]||(s[c]=l&&a[c]||(l?a:o)("Symbol."+c))}).store=s},function(t,n){var i=t.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=i)},function(t,n){var i=t.exports={version:"2.5.6"};typeof __e=="number"&&(__e=i)},function(t,n,i){var s=i(4),o=i(11);t.exports=i(6)?function(a,l,c){return s.f(a,l,o(1,c))}:function(a,l,c){return a[l]=c,a}},function(t,n,i){var s=i(5),o=i(34),a=i(35),l=Object.defineProperty;n.f=i(6)?Object.defineProperty:function(c,u,h){if(s(c),u=a(u,!0),s(h),o)try{return l(c,u,h)}catch{}if("get"in h||"set"in h)throw TypeError("Accessors not supported!");return"value"in h&&(c[u]=h.value),c}},function(t,n,i){var s=i(10);t.exports=function(o){if(!s(o))throw TypeError(o+" is not an object!");return o}},function(t,n,i){t.exports=!i(17)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(t,n){var i={}.hasOwnProperty;t.exports=function(s,o){return i.call(s,o)}},function(t,n){var i=Math.ceil,s=Math.floor;t.exports=function(o){return isNaN(o=+o)?0:(o>0?s:i)(o)}},function(t,n){t.exports=function(i){if(i==null)throw TypeError("Can't call method on  "+i);return i}},function(t,n){t.exports=function(i){return typeof i=="object"?i!==null:typeof i=="function"}},function(t,n){t.exports=function(i,s){return{enumerable:!(1&i),configurable:!(2&i),writable:!(4&i),value:s}}},function(t,n){var i=0,s=Math.random();t.exports=function(o){return"Symbol(".concat(o===void 0?"":o,")_",(++i+s).toString(36))}},function(t,n){t.exports={}},function(t,n,i){var s=i(24)("keys"),o=i(12);t.exports=function(a){return s[a]||(s[a]=o(a))}},function(t,n){t.exports=!1},function(t,n,i){var s=i(1),o=i(2),a=i(3),l=i(19),c=i(20),u=function(h,d,f){var _,p,g,m,x=h&u.F,y=h&u.G,v=h&u.S,E=h&u.P,M=h&u.B,w=y?s:v?s[d]||(s[d]={}):(s[d]||{}).prototype,C=y?o:o[d]||(o[d]={}),S=C.prototype||(C.prototype={});y&&(f=d);for(_ in f)p=!x&&w&&w[_]!==void 0,g=(p?w:f)[_],m=M&&p?c(g,s):E&&typeof g=="function"?c(Function.call,g):g,w&&l(w,_,g,h&u.U),C[_]!=g&&a(C,_,m),E&&S[_]!=g&&(S[_]=g)};s.core=o,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n){t.exports=function(i){try{return!!i()}catch{return!0}}},function(t,n,i){var s=i(10),o=i(1).document,a=s(o)&&s(o.createElement);t.exports=function(l){return a?o.createElement(l):{}}},function(t,n,i){var s=i(1),o=i(3),a=i(7),l=i(12)("src"),c=Function.toString,u=(""+c).split("toString");i(2).inspectSource=function(h){return c.call(h)},(t.exports=function(h,d,f,_){var p=typeof f=="function";p&&(a(f,"name")||o(f,"name",d)),h[d]!==f&&(p&&(a(f,l)||o(f,l,h[d]?""+h[d]:u.join(String(d)))),h===s?h[d]=f:_?h[d]?h[d]=f:o(h,d,f):(delete h[d],o(h,d,f)))})(Function.prototype,"toString",function(){return typeof this=="function"&&this[l]||c.call(this)})},function(t,n,i){var s=i(36);t.exports=function(o,a,l){if(s(o),a===void 0)return o;switch(l){case 1:return function(c){return o.call(a,c)};case 2:return function(c,u){return o.call(a,c,u)};case 3:return function(c,u,h){return o.call(a,c,u,h)}}return function(){return o.apply(a,arguments)}}},function(t,n,i){var s=i(42),o=i(9);t.exports=function(a){return s(o(a))}},function(t,n){var i={}.toString;t.exports=function(s){return i.call(s).slice(8,-1)}},function(t,n,i){var s=i(8),o=Math.min;t.exports=function(a){return a>0?o(s(a),9007199254740991):0}},function(t,n,i){var s=i(2),o=i(1),a=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(l,c){return a[l]||(a[l]=c!==void 0?c:{})})("versions",[]).push({version:s.version,mode:i(15)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,i){var s=i(4).f,o=i(7),a=i(0)("toStringTag");t.exports=function(l,c,u){l&&!o(l=u?l:l.prototype,a)&&s(l,a,{configurable:!0,value:c})}},function(t,n,i){var s=i(9);t.exports=function(o){return Object(s(o))}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=Math.PI/180;n.default=function(o){return o*s}},function(t,n,i){i(30);var s=i(54),o=(function(a){return a&&a.__esModule?a:{default:a}})(s);t.exports=o.default},function(t,n,i){i(31),i(47),t.exports=i(2).Array.from},function(t,n,i){var s=i(32)(!0);i(33)(String,"String",function(o){this._t=String(o),this._i=0},function(){var o,a=this._t,l=this._i;return l>=a.length?{value:void 0,done:!0}:(o=s(a,l),this._i+=o.length,{value:o,done:!1})})},function(t,n,i){var s=i(8),o=i(9);t.exports=function(a){return function(l,c){var u,h,d=String(o(l)),f=s(c),_=d.length;return f<0||f>=_?a?"":void 0:(u=d.charCodeAt(f),u<55296||u>56319||f+1===_||(h=d.charCodeAt(f+1))<56320||h>57343?a?d.charAt(f):u:a?d.slice(f,f+2):h-56320+(u-55296<<10)+65536)}}},function(t,n,i){var s=i(15),o=i(16),a=i(19),l=i(3),c=i(13),u=i(37),h=i(26),d=i(46),f=i(0)("iterator"),_=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(g,m,x,y,v,E,M){u(x,m,y);var w,C,S,b=function(se){if(!_&&se in V)return V[se];switch(se){case"keys":case"values":return function(){return new x(this,se)}}return function(){return new x(this,se)}},D=m+" Iterator",N=v=="values",G=!1,V=g.prototype,Y=V[f]||V["@@iterator"]||v&&V[v],q=Y||b(v),X=v?N?b("entries"):q:void 0,B=m=="Array"&&V.entries||Y;if(B&&(S=d(B.call(new g)))!==Object.prototype&&S.next&&(h(S,D,!0),s||typeof S[f]=="function"||l(S,f,p)),N&&Y&&Y.name!=="values"&&(G=!0,q=function(){return Y.call(this)}),s&&!M||!_&&!G&&V[f]||l(V,f,q),c[m]=q,c[D]=p,v)if(w={values:N?q:b("values"),keys:E?q:b("keys"),entries:X},M)for(C in w)C in V||a(V,C,w[C]);else o(o.P+o.F*(_||G),m,w);return w}},function(t,n,i){t.exports=!i(6)&&!i(17)(function(){return Object.defineProperty(i(18)("div"),"a",{get:function(){return 7}}).a!=7})},function(t,n,i){var s=i(10);t.exports=function(o,a){if(!s(o))return o;var l,c;if(a&&typeof(l=o.toString)=="function"&&!s(c=l.call(o))||typeof(l=o.valueOf)=="function"&&!s(c=l.call(o))||!a&&typeof(l=o.toString)=="function"&&!s(c=l.call(o)))return c;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(i){if(typeof i!="function")throw TypeError(i+" is not a function!");return i}},function(t,n,i){var s=i(38),o=i(11),a=i(26),l={};i(3)(l,i(0)("iterator"),function(){return this}),t.exports=function(c,u,h){c.prototype=s(l,{next:o(1,h)}),a(c,u+" Iterator")}},function(t,n,i){var s=i(5),o=i(39),a=i(25),l=i(14)("IE_PROTO"),c=function(){},u=function(){var h,d=i(18)("iframe"),f=a.length;for(d.style.display="none",i(45).appendChild(d),d.src="javascript:",h=d.contentWindow.document,h.open(),h.write("<script>document.F=Object<\/script>"),h.close(),u=h.F;f--;)delete u.prototype[a[f]];return u()};t.exports=Object.create||function(h,d){var f;return h!==null?(c.prototype=s(h),f=new c,c.prototype=null,f[l]=h):f=u(),d===void 0?f:o(f,d)}},function(t,n,i){var s=i(4),o=i(5),a=i(40);t.exports=i(6)?Object.defineProperties:function(l,c){o(l);for(var u,h=a(c),d=h.length,f=0;d>f;)s.f(l,u=h[f++],c[u]);return l}},function(t,n,i){var s=i(41),o=i(25);t.exports=Object.keys||function(a){return s(a,o)}},function(t,n,i){var s=i(7),o=i(21),a=i(43)(!1),l=i(14)("IE_PROTO");t.exports=function(c,u){var h,d=o(c),f=0,_=[];for(h in d)h!=l&&s(d,h)&&_.push(h);for(;u.length>f;)s(d,h=u[f++])&&(~a(_,h)||_.push(h));return _}},function(t,n,i){var s=i(22);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(o){return s(o)=="String"?o.split(""):Object(o)}},function(t,n,i){var s=i(21),o=i(23),a=i(44);t.exports=function(l){return function(c,u,h){var d,f=s(c),_=o(f.length),p=a(h,_);if(l&&u!=u){for(;_>p;)if((d=f[p++])!=d)return!0}else for(;_>p;p++)if((l||p in f)&&f[p]===u)return l||p||0;return!l&&-1}}},function(t,n,i){var s=i(8),o=Math.max,a=Math.min;t.exports=function(l,c){return l=s(l),l<0?o(l+c,0):a(l,c)}},function(t,n,i){var s=i(1).document;t.exports=s&&s.documentElement},function(t,n,i){var s=i(7),o=i(27),a=i(14)("IE_PROTO"),l=Object.prototype;t.exports=Object.getPrototypeOf||function(c){return c=o(c),s(c,a)?c[a]:typeof c.constructor=="function"&&c instanceof c.constructor?c.constructor.prototype:c instanceof Object?l:null}},function(t,n,i){var s=i(20),o=i(16),a=i(27),l=i(48),c=i(49),u=i(23),h=i(50),d=i(51);o(o.S+o.F*!i(53)(function(f){Array.from(f)}),"Array",{from:function(f){var _,p,g,m,x=a(f),y=typeof this=="function"?this:Array,v=arguments.length,E=v>1?arguments[1]:void 0,M=E!==void 0,w=0,C=d(x);if(M&&(E=s(E,v>2?arguments[2]:void 0,2)),C==null||y==Array&&c(C))for(_=u(x.length),p=new y(_);_>w;w++)h(p,w,M?E(x[w],w):x[w]);else for(m=C.call(x),p=new y;!(g=m.next()).done;w++)h(p,w,M?l(m,E,[g.value,w],!0):g.value);return p.length=w,p}})},function(t,n,i){var s=i(5);t.exports=function(o,a,l,c){try{return c?a(s(l)[0],l[1]):a(l)}catch(h){var u=o.return;throw u!==void 0&&s(u.call(o)),h}}},function(t,n,i){var s=i(13),o=i(0)("iterator"),a=Array.prototype;t.exports=function(l){return l!==void 0&&(s.Array===l||a[o]===l)}},function(t,n,i){var s=i(4),o=i(11);t.exports=function(a,l,c){l in a?s.f(a,l,o(0,c)):a[l]=c}},function(t,n,i){var s=i(52),o=i(0)("iterator"),a=i(13);t.exports=i(2).getIteratorMethod=function(l){if(l!=null)return l[o]||l["@@iterator"]||a[s(l)]}},function(t,n,i){var s=i(22),o=i(0)("toStringTag"),a=s((function(){return arguments})())=="Arguments",l=function(c,u){try{return c[u]}catch{}};t.exports=function(c){var u,h,d;return c===void 0?"Undefined":c===null?"Null":typeof(h=l(u=Object(c),o))=="string"?h:a?s(u):(d=s(u))=="Object"&&typeof u.callee=="function"?"Arguments":d}},function(t,n,i){var s=i(0)("iterator"),o=!1;try{var a=[7][s]();a.return=function(){o=!0},Array.from(a,function(){throw 2})}catch{}t.exports=function(l,c){if(!c&&!o)return!1;var u=!1;try{var h=[7],d=h[s]();d.next=function(){return{done:u=!0}},h[s]=function(){return d},l(h)}catch{}return u}},function(t,n,i){function s(M){return M&&M.__esModule?M:{default:M}}function o(M,w){if(!(M instanceof w))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=(function(){function M(w,C){for(var S=0;S<C.length;S++){var b=C[S];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(w,b.key,b)}}return function(w,C,S){return C&&M(w.prototype,C),S&&M(w,S),w}})(),l=i(55),c=s(l),u=i(56),h=s(u),d=i(57),f=s(d),_=i(58),p=s(_),g=i(59),m=s(g),x=Math.PI,y=Math.max,v=Math.min,E=(function(){function M(w,C){o(this,M),this.element=w,this.originalHTML=this.element.innerHTML;var S=document.createElement("div"),b=document.createDocumentFragment();S.setAttribute("aria-label",w.innerText),S.style.position="relative",this.container=S,this._letters=(0,h.default)(w,C),this._letters.forEach(function(Y){return b.appendChild(Y)}),S.appendChild(b),this.element.innerHTML="",this.element.appendChild(S);var D=window.getComputedStyle(this.element),N=D.fontSize,G=D.lineHeight;this._fontSize=parseFloat(N),this._lineHeight=parseFloat(G)||this._fontSize,this._metrics=this._letters.map(c.default);var V=this._metrics.reduce(function(Y,q){return Y+q.width},0);this._minRadius=V/x/2+this._lineHeight,this._dir=1,this._forceWidth=!1,this._forceHeight=!0,this._radius=this._minRadius,this._invalidate()}return a(M,[{key:"radius",value:function(w){return w!==void 0?(this._radius=y(this._minRadius,w),this._invalidate(),this):this._radius}},{key:"dir",value:function(w){return w!==void 0?(this._dir=w,this._invalidate(),this):this._dir}},{key:"forceWidth",value:function(w){return w!==void 0?(this._forceWidth=w,this._invalidate(),this):this._forceWidth}},{key:"forceHeight",value:function(w){return w!==void 0?(this._forceHeight=w,this._invalidate(),this):this._forceHeight}},{key:"refresh",value:function(){return this._invalidate()}},{key:"destroy",value:function(){return this.element.innerHTML=this.originalHTML,this}},{key:"_invalidate",value:function(){var w=this;return cancelAnimationFrame(this._raf),this._raf=requestAnimationFrame(function(){w._layout()}),this}},{key:"_layout",value:function(){var w=this,C=this._radius,S=this._dir,b=S===-1?-C+this._lineHeight:C,D="center "+b/this._fontSize+"em",N=C-this._lineHeight,G=(0,m.default)(this._metrics,N),V=G.rotations,Y=G.θ;if(this._letters.forEach(function(B,se){var U=B.style,ge=(-.5*Y+V[se])*S,_e=-.5*w._metrics[se].width/w._fontSize,we="translateX("+_e+"em) rotate("+ge+"deg)";U.position="absolute",U.bottom=S===-1?0:"auto",U.left="50%",U.transform=we,U.transformOrigin=D,U.webkitTransform=we,U.webkitTransformOrigin=D}),this._forceHeight){var q=Y>180?(0,f.default)(C,Y):(0,f.default)(N,Y)+this._lineHeight;this.container.style.height=q/this._fontSize+"em"}if(this._forceWidth){var X=(0,p.default)(C,v(180,Y));this.container.style.width=X/this._fontSize+"em"}return this}}]),M})();n.default=E},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(s){var o=s.getBoundingClientRect();return{height:o.height,left:o.left+window.pageXOffset,top:o.top+window.pageYOffset,width:o.width}}},function(t,n,i){function s(o){if(Array.isArray(o)){for(var a=0,l=Array(o.length);a<o.length;a++)l[a]=o[a];return l}return Array.from(o)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(o,a){var l=document.createElement("span"),c=o.innerText.trim();return(a?a(c):[].concat(s(c))).map(function(u){var h=l.cloneNode();return h.insertAdjacentHTML("afterbegin",u===" "?"&nbsp;":u),h})}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(28),o=(function(a){return a&&a.__esModule?a:{default:a}})(s);n.default=function(a,l){return a*(1-Math.cos((0,o.default)(l/2)))}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(28),o=(function(a){return a&&a.__esModule?a:{default:a}})(s);n.default=function(a,l){return 2*a*Math.sin((0,o.default)(l/2))}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(60),o=(function(a){return a&&a.__esModule?a:{default:a}})(s);n.default=function(a,l){return a.reduce(function(c,u){var h=u.width,d=(0,o.default)(h/l);return{θ:c.θ+d,rotations:c.rotations.concat([c.θ+d/2])}},{θ:0,rotations:[]})}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=180/Math.PI;n.default=function(o){return o*s}}])})})(hc)),hc.exports}var cx=lx();const S_=ox(cx);let Bt=null,pa=null,Dh=null,Ca=null,Rr=null,po=null,Zi=null,Ra=null,ru=!1,Su=null,Dc=null,Pa=null,Oc=0;const w_=320;function ux(){hx(),dx(),bf()}function hx(){document.body.insertAdjacentHTML("beforeend",`
    <div class="zoom-cta more-info-cta">
      <div class="zoom-cta__icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12C22 17.5228 17.5228 22 12 22C10.1786 22 8.47087 21.513 7 20.6622L2.5 22L2 21.5L3.33782 17C2.48697 15.5291 2 13.8214 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" fill="none"/>
          <path d="M12 16V12H10" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" fill="none"/>
          <path d="M12 8.01V8" stroke="currentColor" stroke-width="2" stroke-linecap="square" fill="none"/>
        </svg>
      </div>
      <div class="zoom-cta__ring">
        <span class="zoom-cta__text zoom-cta__text--more"></span>
        <span class="zoom-cta__text zoom-cta__text--hide"></span>
      </div>
    </div>
  `),Bt=document.querySelector(".more-info-cta"),Dc=Bt.querySelector(".zoom-cta__text--more"),Pa=Bt.querySelector(".zoom-cta__text--hide");const e=36;function t(n,i,s){n.textContent=i;const o=n.getBoundingClientRect().width,a=2*Math.PI*e,l=o>0?Math.round(a/o):3;n.textContent=i.repeat(l),new S_(n).radius(e+s)}t(Dc,"More Info  •  ",15),t(Pa,"Hide Info  •  ",12),Pa.style.display="none",De.set(Bt,{opacity:0,xPercent:-50,yPercent:-50,x:-200,y:-200,scale:.88})}function M_(r){!Dc||!Pa||(Dc.style.display=r?"none":"",Pa.style.display=r?"":"none",Bt==null||Bt.classList.toggle("more-info-cta--hide",r))}function dx(){document.body.insertAdjacentHTML("beforeend",`
    <div class="rpg-bubble">
      <button class="rpg-bubble__close" aria-label="Close">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="rpg-bubble__text"></div>
    </div>
  `),Ca=document.querySelector(".rpg-bubble"),Rr=Ca.querySelector(".rpg-bubble__text"),Ca.querySelector(".rpg-bubble__close").addEventListener("click",()=>{const t=Date.now();t-Oc<w_||(Oc=t,su())})}function bf(){if(!Bt)return;document.querySelectorAll(".project-element, .large-photo:not(.project-element .large-photo)").forEach(e=>{if(e.dataset.moreInfoBound)return;e.dataset.moreInfoBound="true";const t=e.classList.contains("project-element")&&e.querySelector(".large-photo")||e;fx(t,e)})}function fx(r,e){r.addEventListener("mouseenter",t=>{e.querySelector(".more-info-message")&&(xt==null||xt.classList.add("magnify-active"),r.style.cursor="pointer",Zi=e,De.set(Bt,{x:t.clientX,y:t.clientY}),De.to(Bt,{opacity:1,duration:.22,ease:"power2.out"}))}),r.addEventListener("mouseleave",()=>{r.style.cursor="",Zi=null,xt==null||xt.classList.remove("magnify-active"),Bt==null||Bt.classList.remove("pressing"),De.to(Bt,{opacity:0,duration:.12,ease:"power2.in"})}),r.addEventListener("mousedown",()=>{Zi&&(Bt==null||Bt.classList.add("pressing"))}),r.addEventListener("mouseup",()=>{Bt==null||Bt.classList.remove("pressing")}),r.addEventListener("click",t=>{if(!Zi)return;const n=Date.now();if(n-Oc<w_)return;Oc=n;const i=Zi.querySelector(".more-info-message");if(!i)return;const s=i.querySelectorAll("p");let o="";if(s.length>0?o=Array.from(s).map(a=>a.textContent.trim()).join(`

`):o=i.textContent.trim(),!!o)if(ru&&Rr.dataset.currentText===o)su();else{const a=Zi.dataset.rpgSeen==="true";mx(o,a),Zi.dataset.rpgSeen="true"}}),r.addEventListener("mousemove",t=>{Zi&&(pa={x:t.clientX,y:t.clientY},Dh||(Dh=requestAnimationFrame(px)))},{passive:!0})}function px(){Dh=null,!(!pa||!Bt)&&(De.to(Bt,{duration:1.4,ease:T_,x:pa.x,y:pa.y,overwrite:"auto"}),pa=null)}function mx(r,e=!1){if(ru=!0,Ra=Zi,Rr.dataset.currentText=r,M_(!0),po&&clearInterval(po),Rr.innerHTML="",De.to(Ca,{opacity:1,y:0,autoAlpha:1,duration:.4,ease:"power3.out"}),e)Rr.innerHTML=r.replace(/\n/g,"<br>");else{let t=0,n="";po=setInterval(()=>{t<r.length?(r.charAt(t)===`
`?n+="<br>":n+=r.charAt(t),Rr.innerHTML=n,t++):clearInterval(po)},20)}document.addEventListener("click",E_)}function su(){ru=!1,Ra=null,po&&clearInterval(po),M_(!1),De.to(Ca,{opacity:0,y:16,autoAlpha:0,duration:.3,ease:"power2.in",onComplete:()=>{Rr.innerHTML="",Rr.dataset.currentText=""}}),document.removeEventListener("click",E_)}function E_(r){!(r.target.closest(".project-element")||r.target.closest(".large-photo"))&&!r.target.closest(".rpg-bubble")&&su()}window.addEventListener("scroll",()=>{!ru||!Ra||Su||(Su=requestAnimationFrame(()=>{if(Ra){const r=Ra.getBoundingClientRect(),e=window.innerHeight||document.documentElement.clientHeight;(r.bottom<0||r.top>e)&&su()}Su=null}))},{passive:!0});De.registerPlugin(Us);const T_=Us.create("cursorEase",".14,.8,.28,.99");let xt=null,Dn=null,ma=null,Oh=null;function gx(){document.addEventListener("DOMContentLoaded",function(){if(document.body.insertAdjacentHTML("afterbegin",'<div class="cursor-element"><div class="cursor-wrapper"><div class="cursor-effect"></div><span></span></div></div>'),xt=document.querySelector(".cursor-element"),Dn=document.querySelector(".cursor-effect"),document.querySelector(".cursor-wrapper"),xt==null||xt.querySelector("span"),!xt)return;ux(),De.set(xt,{xPercent:-50,yPercent:-50});let e=!1;window.addEventListener("mousemove",t=>{ma={x:t.clientX,y:t.clientY},t.clientX,t.clientY,e||(e=!0,De.to(xt,{opacity:1,duration:.8,delay:.4,overwrite:!0})),Oh||(Oh=requestAnimationFrame(_x))},{passive:!0})})}function _x(){Oh=null,!(!ma||!xt)&&(De.to(xt,{duration:1.4,ease:T_,x:ma.x,y:ma.y,overwrite:"auto"}),ma=null)}gx();function Sf(){if(xt||(xt=document.querySelector(".cursor-element"),Dn=document.querySelector(".cursor-effect")),!xt)return;if(window.matchMedia("(pointer: coarse)").matches&&window.matchMedia("(hover: none)").matches){xt.classList.add("hidden");return}const r="a, button, code, input, select, textarea, span.email, svg.play, svg.pause",e=".skills-wrapper > div";document.body.addEventListener("mouseenter",t=>{const n=t.target;if(n.closest(".logo")&&xt.classList.add("logo"),n.closest(e)){xt.classList.add("hide");return}if(n.closest(r)){const i=n.closest(r);!i.classList.contains("active")&&!i.classList.contains("logo")&&(xt.classList.add("active","hover"),Dn==null||Dn.classList.add("active","hover"))}},!0),document.body.addEventListener("mouseleave",t=>{const n=t.target,i=t.relatedTarget;if(n.closest(".logo")&&(!i||!i.closest(".logo"))&&xt.classList.remove("logo"),n.closest(e)){(!i||!i.closest(e))&&xt.classList.remove("hide");return}const s=n.closest(r);s&&(i?i.closest(r):null)!==s&&(xt.classList.remove("active","hover"),Dn==null||Dn.classList.remove("active","hover"))},!0),document.body.addEventListener("mousedown",()=>{xt.classList.add("mouse-down")},{passive:!0}),document.body.addEventListener("mouseup",()=>{xt.classList.remove("mouse-down")},{passive:!0}),document.body.addEventListener("click",t=>{const i=t.target.closest("a:not(.active), button, input, select, textarea, span.email, svg.play, svg.pause");if(i){if(i.classList.contains("active")){t.preventDefault();return}Dn==null||Dn.classList.remove("active"),xt.classList.add("clicked"),setTimeout(()=>{xt.classList.remove("clicked");const s=document.querySelector(`${r.split(", ").map(o=>o+":hover").join(", ")}`);s&&!s.classList.contains("active")&&(xt.classList.add("active","hover"),Dn==null||Dn.classList.add("active","hover"))},800)}})}const Fh="portfolio-auth-mode",vx={letsdesign:"A",UXEngineering:"B",letscreate:"all"},A_=JSON.parse(atob("W3sic2x1ZyI6ImFtZXJpY2FuLWNoZW1pY2FsLXNvY2lldHkiLCJncm91cCI6IkIiLCJocmVmIjoiL3Byb2plY3RzL2FtZXJpY2FuLWNoZW1pY2FsLXNvY2lldHkuaHRtbCIsInRleHQiOiJBQ1MifSx7InNsdWciOiJ3YWJhc2giLCJncm91cCI6IkEiLCJocmVmIjoiL3Byb2plY3RzL3dhYmFzaC5odG1sIiwidGV4dCI6IldhYmFzaCJ9XQ==")),oo=[...A_,{slug:"scholastic",group:"all",href:"/projects/scholastic.html"},{slug:"jpplus",group:"all",href:"/projects/jpplus.html"},{slug:"rowmark",group:"all",href:"/projects/rowmark.html"},{slug:"ipi",group:"all",href:"/projects/ipi.html"}],wu={A:"/assets/documents/AdrainWolfe_Resume.pdf",B:"/assets/documents/AdrainWolfe-UIDeveloper-Resume.pdf",all:"/assets/documents/AdrainWolfe-DesignEngineer-Resume.pdf",default:"/assets/documents/AdrainWolfe_Resume.pdf"};function wf(){return sessionStorage.getItem(Fh)}function C_(r){r?sessionStorage.setItem(Fh,r):sessionStorage.removeItem(Fh)}function R_(r){const e=vx[r];return e?(C_(e),e):!1}function yx(){C_(null)}function Fc(r,e,t){return t!=="american-chemical-society"}function P_(r){return oo.filter(e=>Fc(e.group,r,e.slug))}function L_(r,e){const t=P_(e);if(t.length===0)return oo[0];const n=oo.findIndex(i=>i.slug===r);if(n===-1)return t[0];for(let i=1;i<=oo.length;i++){const s=(n+i)%oo.length,o=oo[s];if(Fc(o.group,e,o.slug))return o}return t[0]}function I_(r){return r&&wu[r]?wu[r]:wu.default}function Tp(){window.lenis&&(console.log("[portfolio-auth] Recalculating Lenis height"),window.lenis.resize()),window.ScrollTrigger&&(console.log("[portfolio-auth] Refreshing ScrollTrigger"),window.ScrollTrigger.refresh())}function Mf(r,e=!1){r===void 0&&(r=wf()),console.log(`[portfolio-auth] Applying mode: ${r||"default"}`),document.querySelectorAll("#index .projects, #works .projects").forEach(s=>{e&&s.classList.add("is-animating"),s.querySelectorAll("a[data-project]").forEach(a=>{const l=a.getAttribute("data-auth-group"),c=a.getAttribute("data-project");Fc(l,r,c)?a.style.display="":a.classList.contains("gated-project")?e?(a.setAttribute("disabled",""),setTimeout(()=>a.remove(),1250)):a.remove():a.style.display="none"}),[...A_.filter(l=>Fc(l.group,r,l.slug))].reverse().forEach(l=>{let c=s.querySelector(`a[data-project="${l.slug}"]`);c?e||c.removeAttribute("disabled"):(c=document.createElement("a"),c.href=l.href,c.setAttribute("data-project",l.slug),c.setAttribute("data-text",l.text),c.setAttribute("data-auth-group",l.group),c.className="gated-project",c.textContent=l.text,e?(c.setAttribute("disabled",""),s.prepend(c),c.offsetWidth,c.removeAttribute("disabled")):s.prepend(c))})});const n=document.querySelector(".page.project[data-current-project]");if(n){const s=n.getAttribute("data-current-project"),o=L_(s,r),a=n.querySelector(".next-project-banner a");a&&o&&(a.setAttribute("href",o.href),console.log(`[portfolio-auth] Next project: ${s} → ${o.slug}`))}const i=document.querySelector("#resume-nav-link");i&&i.setAttribute("href",I_("default")),xx(),Tp(),e&&(setTimeout(Tp,1300),setTimeout(()=>{document.querySelectorAll("#index .projects, #works .projects").forEach(s=>{s.classList.remove("is-animating")})},1350))}function xx(r){const e=document.querySelectorAll(".portfolio-auth");{e.forEach(t=>{t.style.display="none"});return}}function bx(r,e){const t=R_(r);return t?(Mf(t,!0),!0):(e&&(e.textContent="Invalid access code",e.style.display="",setTimeout(()=>{e.style.display="none"},2500)),!1)}function Sx(){return new Promise(r=>{{r(null);return}})}function wx(){}function Mx(){const r=wf();console.log(`[portfolio-auth] Initializing with mode: ${r||"default"}`),Mf(r)}const D_={init:Mx,getMode:wf,authenticate:R_,clearAuth:yx,applyMode:Mf,getVisibleProjects:P_,getNextProject:L_,getResumeUrl:I_,handlePasswordSubmit:bx,showPasswordModal:Sx,injectAuthUI:wx},Ex="/assets/jinx-T2AB0YWR.png";function Ef(){const r=document.createElement("style");if(r.textContent=`
    body::-webkit-scrollbar-thumb {
      opacity: 0.4;
    }
  `,document.head.appendChild(r),document.body.hasAttribute("data-infinite-titles-listener")||(document.body.setAttribute("data-infinite-titles-listener","true"),document.body.addEventListener("mouseover",function(e){const t=e.target.closest("span.infinite-titles");if(t&&!t.classList.contains("blip-active")){t.classList.add("blip-active"),t.addEventListener("animationend",function a(){t.classList.remove("blip-active"),t.removeEventListener("animationend",a)});const n=["UI/UX Designer + Developer","UX Engineer","Creative Technologist","Design Engineer","UI Developer","UX Designer"],i=t.textContent.trim(),s=n.filter(a=>a!==i),o=Math.floor(Math.random()*s.length);t.textContent=s[o]}})),!document.body.hasAttribute("data-cat-jinx-listener")){document.body.setAttribute("data-cat-jinx-listener","true");let e=null;const t=()=>{e=document.createElement("div"),e.className="floating-jinx";const n=document.createElement("img");n.src=Ex,n.style.width="100%",n.style.height="auto",n.style.display="block",e.appendChild(n),document.body.appendChild(e)};document.body.addEventListener("mouseover",function(n){if(n.target.closest("span.cat-jinx")){let s=!1;e||(t(),s=!0),e.style.left=`${n.clientX}px`,e.style.top=`${n.clientY}px`,s&&e.offsetWidth,e.classList.add("visible")}}),document.body.addEventListener("mousemove",function(n){n.target.closest("span.cat-jinx")&&e&&(e.style.left=`${n.clientX}px`,e.style.top=`${n.clientY}px`)}),document.body.addEventListener("mouseout",function(n){const i=n.target.closest("span.cat-jinx");if(i&&e){const s=n.relatedTarget;(!s||!i.contains(s))&&e.classList.remove("visible")}})}document.body.addEventListener("click",Tx),document.querySelectorAll("nav a").forEach(e=>{e.addEventListener("click",function(t){this.classList.contains("resume")||this.classList.contains("active")||(this.classList.add("active"),document.querySelectorAll("nav a").forEach(n=>{n!==this&&n.classList.remove("active")}))})}),document.querySelectorAll(".skills-wrapper > div").forEach(e=>{e.addEventListener("mouseleave",function(){this.classList.add("leaving"),setTimeout(()=>{this.classList.remove("leaving")},600)})}),document.querySelectorAll(".email").forEach(e=>{e.addEventListener("click",function(){const t="adrainwolfe@gmail.com";navigator.clipboard.writeText(t).then(()=>{console.log("Email copied to clipboard:",t);const n=document.querySelector(".cursor-element");n&&(n.classList.add("copied"),setTimeout(()=>{n.classList.remove("copied")},2400))}).catch(n=>{console.error("Failed to copy email: ",n)})})}),Nc(),Ax()}function Tx(r){if(r.button!==0)return;const e=r.target.closest("a");if(!e||e.id==="resume-nav-link"||e.classList.contains("resume")||e.getAttribute("href")&&e.getAttribute("href").includes("Resume")||e.hasAttribute("target")||e.getAttribute("href").startsWith("http")||e.getAttribute("href").includes("mailto:")||e.getAttribute("href").includes("tel:")||e.hasAttribute("download")||e.getAttribute("href").startsWith("#"))return;r.preventDefault();const t=e.getAttribute("href"),n=t==="/"||t==="/index.html"||t==="index.html";e.closest("nav")?(document.querySelectorAll("nav a:not(.active)").forEach(i=>{i.classList.add("on-change")}),!e.classList.contains("active")&&!n?(e.classList.add("active"),document.querySelectorAll("nav a").forEach(i=>{i!==e&&i.classList.remove("active")})):n&&document.querySelectorAll("nav a").forEach(i=>{i.classList.remove("active")}),setTimeout(()=>{document.querySelectorAll("nav a.on-change").forEach(i=>{i.classList.remove("on-change")})},240)):(e.classList.contains("logo")||n)&&document.querySelectorAll("nav a").forEach(i=>{i.classList.remove("active")}),document.body.classList.remove("menu-active"),document.querySelectorAll(".mobile-menu-toggle").forEach(i=>{i.classList.remove("active")}),console.log(`Barba navigating to: ${t}`),window.barba?window.barba.go(t):(console.warn("Barba not initialized yet, falling back to window.location"),window.location.href=t)}function Nc(){document.querySelectorAll(".mobile-menu-toggle").forEach(e=>{e.removeEventListener("click",Ap),e.addEventListener("click",Ap)})}function Ap(){document.body.classList.toggle("menu-active"),this.classList.toggle("active")}function Ax(){const r=document.querySelectorAll(".skills-wrapper h5");if(!r.length)return;function e(){r.forEach(n=>{const i=window.getComputedStyle(n),s=parseFloat(i.lineHeight)||parseFloat(i.fontSize)*1.25;n.offsetHeight>s*1.5?n.parentElement.classList.add("is-wrapped"):n.parentElement.classList.remove("is-wrapped")})}e();let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(e,150)})}let dc=window.innerWidth,Nh=window.innerHeight,Hs="error: undetected";function O_(){return Nh>dc&&document.body.classList.add("portrait"),("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&document.documentElement.classList.add("touch-device"),window.matchMedia("(pointer: coarse)").matches&&window.matchMedia("(hover: none)").matches?(Hs="touch",document.documentElement.classList.add("touch-device"),Hs):window.matchMedia("(any-pointer: fine)").matches&&window.matchMedia("(pointer: coarse)").matches?(Hs="cursorTouch",Hs):(Hs="default",Hs)}function F_(){if(dc=window.innerWidth,Nh=window.innerHeight,dc<=1024){const r=document.getElementById("stage"),e=document.querySelector("nav"),t=document.querySelector(".mobile-menu-toggle");r&&e&&r.insertBefore(e,r.firstChild),r&&t&&r.insertBefore(t,r.firstChild),document.body.classList.remove("menu-active"),t&&t.classList.remove("active"),Nc()}else{const r=document.querySelector("header"),e=document.querySelector("nav"),t=document.querySelector(".mobile-menu-toggle");r&&e&&r.appendChild(e),r&&t&&r.appendChild(t),document.body.classList.remove("menu-active"),t&&t.classList.remove("active"),Nc()}return[dc,Nh]}var Cx="1.3.14";function N_(r,e,t){return Math.max(r,Math.min(e,t))}function Rx(r,e,t){return(1-t)*r+t*e}function Px(r,e,t,n){return Rx(r,e,1-Math.exp(-t*n))}function Lx(r,e){return(r%e+e)%e}var Ix=class{constructor(){Ge(this,"isRunning",!1);Ge(this,"value",0);Ge(this,"from",0);Ge(this,"to",0);Ge(this,"currentTime",0);Ge(this,"lerp");Ge(this,"duration");Ge(this,"easing");Ge(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=N_(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=Px(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Dx(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var Ox=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Ge(this,"width",0);Ge(this,"height",0);Ge(this,"scrollHeight",0);Ge(this,"scrollWidth",0);Ge(this,"debouncedResize");Ge(this,"wrapperResizeObserver");Ge(this,"contentResizeObserver");Ge(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ge(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ge(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=Dx(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},U_=class{constructor(){Ge(this,"events",{})}emit(r,...e){var n;let t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){var t;return(t=this.events[r])!=null&&t.push(e)||(this.events[r]=[e]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>e!==i)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}},Cp=100/6,pr={passive:!1},Fx=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Ge(this,"touchStart",{x:0,y:0});Ge(this,"lastDelta",{x:0,y:0});Ge(this,"window",{width:0,height:0});Ge(this,"emitter",new U_);Ge(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ge(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ge(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ge(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Cp:n===2?this.window.width:1,s=n===1?Cp:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Ge(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,pr),this.element.addEventListener("touchstart",this.onTouchStart,pr),this.element.addEventListener("touchmove",this.onTouchMove,pr),this.element.addEventListener("touchend",this.onTouchEnd,pr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,pr),this.element.removeEventListener("touchstart",this.onTouchStart,pr),this.element.removeEventListener("touchmove",this.onTouchMove,pr),this.element.removeEventListener("touchend",this.onTouchEnd,pr)}},Rp=r=>Math.min(1,1.001-Math.pow(2,-10*r)),Nx=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d=h==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:_=1,autoResize:p=!0,prevent:g,virtualScroll:m,overscroll:x=!0,autoRaf:y=!1,anchors:v=!1,autoToggle:E=!1,allowNestedScroll:M=!1,__experimental__naiveDimensions:w=!1}={}){Ge(this,"_isScrolling",!1);Ge(this,"_isStopped",!1);Ge(this,"_isLocked",!1);Ge(this,"_preventNextNativeScrollEvent",!1);Ge(this,"_resetVelocityTimeout",null);Ge(this,"__rafID",null);Ge(this,"isTouching");Ge(this,"time",0);Ge(this,"userData",{});Ge(this,"lastVelocity",0);Ge(this,"velocity",0);Ge(this,"direction",0);Ge(this,"options");Ge(this,"targetScroll");Ge(this,"animatedScroll");Ge(this,"animate",new Ix);Ge(this,"emitter",new U_);Ge(this,"dimensions");Ge(this,"virtualScroll");Ge(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Ge(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ge(this,"onTransitionEnd",r=>{if(r.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.internalStop():this.internalStart()}});Ge(this,"onClick",r=>{const t=r.composedPath().find(n=>{var i;return n instanceof HTMLAnchorElement&&((i=n.getAttribute("href"))==null?void 0:i.includes("#"))});if(t){const n=t.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.split("#")[1]}`;this.scrollTo(s,i)}}});Ge(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ge(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(g=>{var m,x,y;return g instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(g))||((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent"))||i&&((x=g.hasAttribute)==null?void 0:x.call(g,"data-lenis-prevent-touch"))||s&&((y=g.hasAttribute)==null?void 0:y.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(g,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,p=i&&n.type==="touchend";p&&(d=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ge(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ge(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Cx,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Rp:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:_,autoResize:p,prevent:g,virtualScroll:m,overscroll:x,autoRaf:y,anchors:v,autoToggle:E,allowNestedScroll:M,__experimental__naiveDimensions:w},this.dimensions=new Ox(r,e,{autoResize:p}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Fx(t,{touchMultiplier:f,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?(d=document.querySelector(r),d||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(d=r),d){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?_.left:_.top}const f=d.getBoundingClientRect();r=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const d=r-this.animatedScroll;d>this.limit/2?r=r-this.limit:d<-this.limit/2&&(r=r+this.limit)}}else r=N_(0,r,this.limit);if(r===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),typeof i=="number"&&typeof s!="function"?s=Rp:typeof s=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(d,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),f||this.emit(),f&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??(r._lenis={});let s,o,a,l,c,u,h,d;const f=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const E=window.getComputedStyle(r);i.computedStyle=E;const M=E.overflowX,w=E.overflowY;if(s=["auto","overlay","scroll"].includes(M),o=["auto","overlay","scroll"].includes(w),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||f==="vertical"&&!o||f==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,d=r.clientHeight,a=c>h,l=u>d,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=d}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,d=i.clientHeight;if(!s&&!o||!a&&!l||f==="vertical"&&(!o||!l)||f==="horizontal"&&(!s||!a))return!1;let _;if(f==="horizontal")_="x";else if(f==="vertical")_="y";else{const E=e!==0,M=t!==0;E&&s&&a&&(_="x"),M&&o&&l&&(_="y")}if(!_)return!1;let p,g,m,x,y;if(_==="x")p=r.scrollLeft,g=c-h,m=e,x=s,y=a;else if(_==="y")p=r.scrollTop,g=u-d,m=t,x=o,y=l;else return!1;return(m>0?p<g:p>0)&&x&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Lx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Ux(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function kx(r,e,t){return e&&Ux(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var cn,fc,ei,Pr,Lr,wo,k_,rs,La,B_,ir,Si,z_,H_=function(){return cn||typeof window<"u"&&(cn=window.gsap)&&cn.registerPlugin&&cn},V_=1,mo=[],ct=[],zi=[],Ia=Date.now,Uh=function(e,t){return t},Bx=function(){var e=La.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ct),i.push.apply(i,zi),ct=n,zi=i,Uh=function(o,a){return t[o](a)}},Fr=function(e,t){return~zi.indexOf(e)&&zi[zi.indexOf(e)+1][t]},Da=function(e){return!!~B_.indexOf(e)},Sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},bn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},bl="scrollLeft",Sl="scrollTop",kh=function(){return ir&&ir.isPressed||ct.cache++},Uc=function(e,t){var n=function i(s){if(s||s===0){V_&&(ei.history.scrollRestoration="manual");var o=ir&&ir.isPressed;s=i.v=Math.round(s)||(ir&&ir.iOS?1:0),e(s),i.cacheID=ct.cache,o&&Uh("ss",s)}else(t||ct.cache!==i.cacheID||Uh("ref"))&&(i.cacheID=ct.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Pn={s:bl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Uc(function(r){return arguments.length?ei.scrollTo(r,Kt.sc()):ei.pageXOffset||Pr[bl]||Lr[bl]||wo[bl]||0})},Kt={s:Sl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Pn,sc:Uc(function(r){return arguments.length?ei.scrollTo(Pn.sc(),r):ei.pageYOffset||Pr[Sl]||Lr[Sl]||wo[Sl]||0})},On=function(e,t){return(t&&t._ctx&&t._ctx.selector||cn.utils.toArray)(e)[0]||(typeof e=="string"&&cn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},zx=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},zr=function(e,t){var n=t.s,i=t.sc;Da(e)&&(e=Pr.scrollingElement||Lr);var s=ct.indexOf(e),o=i===Kt.sc?1:2;!~s&&(s=ct.push(e)-1),ct[s+o]||Sn(e,"scroll",kh);var a=ct[s+o],l=a||(ct[s+o]=Uc(Fr(e,n),!0)||(Da(e)?i:Uc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=cn.getProperty(e,"scrollBehavior")==="smooth"),l},Bh=function(e,t,n){var i=e,s=e,o=Ia(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,p){var g=Ia();p||g-o>l?(s=i,i=_,a=o,o=g):n?i+=_:i=s+(_-s)/(g-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(_){var p=a,g=s,m=Ia();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?g:-g))/((n?m:o)-p)*1e3};return{update:u,reset:h,getVelocity:d}},Ko=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Pp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},G_=function(){La=cn.core.globals().ScrollTrigger,La&&La.core&&Bx()},W_=function(e){return cn=e||H_(),!fc&&cn&&typeof document<"u"&&document.body&&(ei=window,Pr=document,Lr=Pr.documentElement,wo=Pr.body,B_=[ei,Pr,Lr,wo],cn.utils.clamp,z_=cn.core.context||function(){},rs="onpointerenter"in wo?"pointer":"mouse",k_=Gt.isTouch=ei.matchMedia&&ei.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ei||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Si=Gt.eventTypes=("ontouchstart"in Lr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Lr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return V_=0},500),G_(),fc=1),fc};Pn.op=Kt;ct.cache=0;var Gt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){fc||W_(cn)||console.warn("Please gsap.registerPlugin(Observer)"),La||G_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,p=n.event,g=n.onDragStart,m=n.onDragEnd,x=n.onDrag,y=n.onPress,v=n.onRelease,E=n.onRight,M=n.onLeft,w=n.onUp,C=n.onDown,S=n.onChangeX,b=n.onChangeY,D=n.onChange,N=n.onToggleX,G=n.onToggleY,V=n.onHover,Y=n.onHoverEnd,q=n.onMove,X=n.ignoreCheck,B=n.isNormalizer,se=n.onGestureStart,U=n.onGestureEnd,ge=n.onWheel,_e=n.onEnable,we=n.onDisable,F=n.onClick,O=n.scrollSpeed,L=n.capture,A=n.allowClicks,j=n.lockAxis,he=n.onLockAxis;this.target=a=On(a)||Lr,this.vars=n,f&&(f=cn.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,O=O||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ei.getComputedStyle(wo).lineHeight)||22);var $,pe,ee,J,T,re,ne,z=this,H=0,k=0,ue=n.passive||!u&&n.passive!==!1,I=zr(a,Pn),R=zr(a,Kt),te=I(),le=R(),de=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Si[0]==="pointerdown",fe=Da(a),Ee=a.ownerDocument||Pr,Se=[0,0,0],Te=[0,0,0],Xe=0,be=function(){return Xe=Ia()},Me=function(Be,rt){return(z.event=Be)&&f&&zx(Be.target,f)||rt&&de&&Be.pointerType!=="touch"||X&&X(Be,rt)},qe=function(){z._vx.reset(),z._vy.reset(),pe.pause(),h&&h(z)},He=function(){var Be=z.deltaX=Pp(Se),rt=z.deltaY=Pp(Te),Pe=Math.abs(Be)>=i,et=Math.abs(rt)>=i;D&&(Pe||et)&&D(z,Be,rt,Se,Te),Pe&&(E&&z.deltaX>0&&E(z),M&&z.deltaX<0&&M(z),S&&S(z),N&&z.deltaX<0!=H<0&&N(z),H=z.deltaX,Se[0]=Se[1]=Se[2]=0),et&&(C&&z.deltaY>0&&C(z),w&&z.deltaY<0&&w(z),b&&b(z),G&&z.deltaY<0!=k<0&&G(z),k=z.deltaY,Te[0]=Te[1]=Te[2]=0),(J||ee)&&(q&&q(z),ee&&(g&&ee===1&&g(z),x&&x(z),ee=0),J=!1),re&&!(re=!1)&&he&&he(z),T&&(ge(z),T=!1),$=0},Fe=function(Be,rt,Pe){Se[Pe]+=Be,Te[Pe]+=rt,z._vx.update(Be),z._vy.update(rt),c?$||($=requestAnimationFrame(He)):He()},it=function(Be,rt){j&&!ne&&(z.axis=ne=Math.abs(Be)>Math.abs(rt)?"x":"y",re=!0),ne!=="y"&&(Se[2]+=Be,z._vx.update(Be,!0)),ne!=="x"&&(Te[2]+=rt,z._vy.update(rt,!0)),c?$||($=requestAnimationFrame(He)):He()},Je=function(Be){if(!Me(Be,1)){Be=Ko(Be,u);var rt=Be.clientX,Pe=Be.clientY,et=rt-z.x,ze=Pe-z.y,Ze=z.isDragging;z.x=rt,z.y=Pe,(Ze||(et||ze)&&(Math.abs(z.startX-rt)>=s||Math.abs(z.startY-Pe)>=s))&&(ee=Ze?2:1,Ze||(z.isDragging=!0),it(et,ze))}},dt=z.onPress=function(Oe){Me(Oe,1)||Oe&&Oe.button||(z.axis=ne=null,pe.pause(),z.isPressed=!0,Oe=Ko(Oe),H=k=0,z.startX=z.x=Oe.clientX,z.startY=z.y=Oe.clientY,z._vx.reset(),z._vy.reset(),Sn(B?a:Ee,Si[1],Je,ue,!0),z.deltaX=z.deltaY=0,y&&y(z))},W=z.onRelease=function(Oe){if(!Me(Oe,1)){bn(B?a:Ee,Si[1],Je,!0);var Be=!isNaN(z.y-z.startY),rt=z.isDragging,Pe=rt&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),et=Ko(Oe);!Pe&&Be&&(z._vx.reset(),z._vy.reset(),u&&A&&cn.delayedCall(.08,function(){if(Ia()-Xe>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(Ee.createEvent){var ze=Ee.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,ei,1,et.screenX,et.screenY,et.clientX,et.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(ze)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,h&&rt&&!B&&pe.restart(!0),ee&&He(),m&&rt&&m(z),v&&v(z,Pe)}},Ce=function(Be){return Be.touches&&Be.touches.length>1&&(z.isGesturing=!0)&&se(Be,z.isDragging)},ce=function(){return(z.isGesturing=!1)||U(z)},me=function(Be){if(!Me(Be)){var rt=I(),Pe=R();Fe((rt-te)*O,(Pe-le)*O,1),te=rt,le=Pe,h&&pe.restart(!0)}},Ae=function(Be){if(!Me(Be)){Be=Ko(Be,u),ge&&(T=!0);var rt=(Be.deltaMode===1?l:Be.deltaMode===2?ei.innerHeight:1)*_;Fe(Be.deltaX*rt,Be.deltaY*rt,0),h&&!B&&pe.restart(!0)}},Re=function(Be){if(!Me(Be)){var rt=Be.clientX,Pe=Be.clientY,et=rt-z.x,ze=Pe-z.y;z.x=rt,z.y=Pe,J=!0,h&&pe.restart(!0),(et||ze)&&it(et,ze)}},Qe=function(Be){z.event=Be,V(z)},ft=function(Be){z.event=Be,Y(z)},Ut=function(Be){return Me(Be)||Ko(Be,u)&&F(z)};pe=z._dc=cn.delayedCall(d||.25,qe).pause(),z.deltaX=z.deltaY=0,z._vx=Bh(0,50,!0),z._vy=Bh(0,50,!0),z.scrollX=I,z.scrollY=R,z.isDragging=z.isGesturing=z.isPressed=!1,z_(this),z.enable=function(Oe){return z.isEnabled||(Sn(fe?Ee:a,"scroll",kh),o.indexOf("scroll")>=0&&Sn(fe?Ee:a,"scroll",me,ue,L),o.indexOf("wheel")>=0&&Sn(a,"wheel",Ae,ue,L),(o.indexOf("touch")>=0&&k_||o.indexOf("pointer")>=0)&&(Sn(a,Si[0],dt,ue,L),Sn(Ee,Si[2],W),Sn(Ee,Si[3],W),A&&Sn(a,"click",be,!0,!0),F&&Sn(a,"click",Ut),se&&Sn(Ee,"gesturestart",Ce),U&&Sn(Ee,"gestureend",ce),V&&Sn(a,rs+"enter",Qe),Y&&Sn(a,rs+"leave",ft),q&&Sn(a,rs+"move",Re)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=J=ee=!1,z._vx.reset(),z._vy.reset(),te=I(),le=R(),Oe&&Oe.type&&dt(Oe),_e&&_e(z)),z},z.disable=function(){z.isEnabled&&(mo.filter(function(Oe){return Oe!==z&&Da(Oe.target)}).length||bn(fe?Ee:a,"scroll",kh),z.isPressed&&(z._vx.reset(),z._vy.reset(),bn(B?a:Ee,Si[1],Je,!0)),bn(fe?Ee:a,"scroll",me,L),bn(a,"wheel",Ae,L),bn(a,Si[0],dt,L),bn(Ee,Si[2],W),bn(Ee,Si[3],W),bn(a,"click",be,!0),bn(a,"click",Ut),bn(Ee,"gesturestart",Ce),bn(Ee,"gestureend",ce),bn(a,rs+"enter",Qe),bn(a,rs+"leave",ft),bn(a,rs+"move",Re),z.isEnabled=z.isPressed=z.isDragging=!1,we&&we(z))},z.kill=z.revert=function(){z.disable();var Oe=mo.indexOf(z);Oe>=0&&mo.splice(Oe,1),ir===z&&(ir=0)},mo.push(z),B&&Da(a)&&(ir=z),z.enable(p)},kx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Gt.version="3.13.0";Gt.create=function(r){return new Gt(r)};Gt.register=W_;Gt.getAll=function(){return mo.slice()};Gt.getById=function(r){return mo.filter(function(e){return e.vars.id===r})[0]};H_()&&cn.registerPlugin(Gt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ke,ao,lt,Ct,Qn,yt,Tf,kc,Za,Oa,ga,wl,fn,ou,zh,En,Lp,Ip,lo,q_,Mu,X_,Mn,Hh,$_,Y_,br,Vh,Af,Mo,Cf,Bc,Gh,Eu,Ml=1,pn=Date.now,Tu=pn(),gi=0,_a=0,Dp=function(e,t,n){var i=jn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Op=function(e,t){return t&&(!jn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Hx=function r(){return _a&&requestAnimationFrame(r)},Fp=function(){return ou=1},Np=function(){return ou=0},Li=function(e){return e},va=function(e){return Math.round(e*1e5)/1e5||0},j_=function(){return typeof window<"u"},J_=function(){return ke||j_()&&(ke=window.gsap)&&ke.registerPlugin&&ke},Cs=function(e){return!!~Tf.indexOf(e)},Q_=function(e){return(e==="Height"?Cf:lt["inner"+e])||Qn["client"+e]||yt["client"+e]},Z_=function(e){return Fr(e,"getBoundingClientRect")||(Cs(e)?function(){return vc.width=lt.innerWidth,vc.height=Cf,vc}:function(){return nr(e)})},Vx=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Fr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Q_(s):e["client"+s])||0}},Gx=function(e,t){return!t||~zi.indexOf(e)?Z_(e):function(){return vc}},Ni=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Fr(e,n))?o()-Z_(e)()[s]:Cs(e)?(Qn[n]||yt[n])-Q_(i):e[n]-e["offset"+i])},El=function(e,t){for(var n=0;n<lo.length;n+=3)(!t||~t.indexOf(lo[n+1]))&&e(lo[n],lo[n+1],lo[n+2])},jn=function(e){return typeof e=="string"},gn=function(e){return typeof e=="function"},ya=function(e){return typeof e=="number"},ss=function(e){return typeof e=="object"},ea=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Au=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Vs=Math.abs,K_="left",e0="top",Rf="right",Pf="bottom",ws="width",Ms="height",Fa="Right",Na="Left",Ua="Top",ka="Bottom",Xt="padding",ui="margin",No="Width",Lf="Height",Zt="px",hi=function(e){return lt.getComputedStyle(e)},Wx=function(e){var t=hi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Up=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},nr=function(e,t){var n=t&&hi(e)[zh]!=="matrix(1, 0, 0, 1, 0, 0)"&&ke.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},zc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},t0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},qx=function(e){return function(t){return ke.utils.snap(t0(e),t)}},If=function(e){var t=ke.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Xx=function(e){return function(t,n){return If(t0(e))(t,n.direction)}},Tl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Al=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},kp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Cl={toggleActions:"play",anticipatePin:0},Hc={top:0,left:0,center:.5,bottom:1,right:1},pc=function(e,t){if(jn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Hc?Hc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Rl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,_=Ct.createElement("div"),p=Cs(n)||Fr(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,m=p?yt:n,x=e.indexOf("start")!==-1,y=x?c:u,v="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((g||l)&&p?"fixed;":"absolute;"),(g||l||!p)&&(v+=(i===Kt?Rf:Pf)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=x,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=v,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],mc(_,0,i,x),_},mc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+No]=1,s["border"+a+No]=0,s[n.p]=t+"px",ke.set(e,s)},ot=[],Wh={},Ka,Bp=function(){return pn()-gi>34&&(Ka||(Ka=requestAnimationFrame(or)))},Gs=function(){(!Mn||!Mn.isPressed||Mn.startX>yt.clientWidth)&&(ct.cache++,Mn?Ka||(Ka=requestAnimationFrame(or)):or(),gi||Ps("scrollStart"),gi=pn())},Cu=function(){Y_=lt.innerWidth,$_=lt.innerHeight},xa=function(e){ct.cache++,(e===!0||!fn&&!X_&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!Hh||Y_!==lt.innerWidth||Math.abs(lt.innerHeight-$_)>lt.innerHeight*.25))&&kc.restart(!0)},Rs={},$x=[],n0=function r(){return rn(tt,"scrollEnd",r)||ds(!0)},Ps=function(e){return Rs[e]&&Rs[e].map(function(t){return t()})||$x},Yn=[],i0=function(e){for(var t=0;t<Yn.length;t+=5)(!e||Yn[t+4]&&Yn[t+4].query===e)&&(Yn[t].style.cssText=Yn[t+1],Yn[t].getBBox&&Yn[t].setAttribute("transform",Yn[t+2]||""),Yn[t+3].uncache=1)},Df=function(e,t){var n;for(En=0;En<ot.length;En++)n=ot[En],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Bc=!0,t&&i0(t),t||Ps("revert")},r0=function(e,t){ct.cache++,(t||!Tn)&&ct.forEach(function(n){return gn(n)&&n.cacheID++&&(n.rec=0)}),jn(e)&&(lt.history.scrollRestoration=Af=e)},Tn,Es=0,zp,Yx=function(){if(zp!==Es){var e=zp=Es;requestAnimationFrame(function(){return e===Es&&ds(!0)})}},s0=function(){yt.appendChild(Mo),Cf=!Mn&&Mo.offsetHeight||lt.innerHeight,yt.removeChild(Mo)},Hp=function(e){return Za(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ds=function(e,t){if(Qn=Ct.documentElement,yt=Ct.body,Tf=[lt,Ct,Qn,yt],gi&&!e&&!Bc){sn(tt,"scrollEnd",n0);return}s0(),Tn=tt.isRefreshing=!0,ct.forEach(function(i){return gn(i)&&++i.cacheID&&(i.rec=i())});var n=Ps("refreshInit");q_&&tt.sort(),t||Df(),ct.forEach(function(i){gn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ot.slice(0).forEach(function(i){return i.refresh()}),Bc=!1,ot.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Gh=1,Hp(!0),ot.forEach(function(i){var s=Ni(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Hp(!1),Gh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ct.forEach(function(i){gn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),r0(Af,1),kc.pause(),Es++,Tn=2,or(2),ot.forEach(function(i){return gn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Tn=tt.isRefreshing=!1,Ps("refresh")},qh=0,gc=1,Ba,or=function(e){if(e===2||!Tn&&!Bc){tt.isUpdating=!0,Ba&&Ba.update(0);var t=ot.length,n=pn(),i=n-Tu>=50,s=t&&ot[0].scroll();if(gc=qh>s?-1:1,Tn||(qh=s),i&&(gi&&!ou&&n-gi>200&&(gi=0,Ps("scrollEnd")),ga=Tu,Tu=n),gc<0){for(En=t;En-- >0;)ot[En]&&ot[En].update(0,i);gc=1}else for(En=0;En<t;En++)ot[En]&&ot[En].update(0,i);tt.isUpdating=!1}Ka=0},Xh=[K_,e0,Pf,Rf,ui+ka,ui+Fa,ui+Ua,ui+Na,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],_c=Xh.concat([ws,Ms,"boxSizing","max"+No,"max"+Lf,"position",ui,Xt,Xt+Ua,Xt+Fa,Xt+ka,Xt+Na]),jx=function(e,t,n){Eo(n);var i=e._gsap;if(i.spacerIsNative)Eo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ru=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Xh.length,o=t.style,a=e.style,l;s--;)l=Xh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Pf]=a[Rf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ws]=zc(e,Pn)+Zt,o[Ms]=zc(e,Kt)+Zt,o[Xt]=a[ui]=a[e0]=a[K_]="0",Eo(i),a[ws]=a["max"+No]=n[ws],a[Ms]=a["max"+Lf]=n[Ms],a[Xt]=n[Xt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Jx=/([A-Z])/g,Eo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||ke.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Jx,"-$1").toLowerCase())}},Pl=function(e){for(var t=_c.length,n=e.style,i=[],s=0;s<t;s++)i.push(_c[s],n[_c[s]]);return i.t=e,i},Qx=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},vc={left:0,top:0},Vp=function(e,t,n,i,s,o,a,l,c,u,h,d,f,_){gn(e)&&(e=e(l)),jn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?pc("0"+e.substr(3),n):0));var p=f?f.time():0,g,m,x;if(f&&f.seek(0),isNaN(e)||(e=+e),ya(e))f&&(e=ke.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&mc(a,n,i,!0);else{gn(t)&&(t=t(l));var y=(e||"0").split(" "),v,E,M,w;x=On(t,l)||yt,v=nr(x)||{},(!v||!v.left&&!v.top)&&hi(x).display==="none"&&(w=x.style.display,x.style.display="block",v=nr(x),w?x.style.display=w:x.style.removeProperty("display")),E=pc(y[0],v[i.d]),M=pc(y[1]||"0",n),e=v[i.p]-c[i.p]-u+E+s-M,a&&mc(a,M,i,n-M<20||a._isStart&&M>20),n-=n-M}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var C=e+n,S=o._isStart;g="scroll"+i.d2,mc(o,C,i,S&&C>20||!S&&(h?Math.max(yt[g],Qn[g]):o.parentNode[g])<=C+1),h&&(c=nr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Zt))}return f&&x&&(g=nr(x),f.seek(d),m=nr(x),f._caScrollDist=g[i.p]-m[i.p],e=e/f._caScrollDist*d),f&&f.seek(p),f?e:Math.round(e)},Zx=/(webkit|moz|length|cssText|inset)/i,Gp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===yt){e._stOrig=s.cssText,a=hi(e);for(o in a)!+o&&!Zx.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;ke.core.getCache(e).uncache=1,t.appendChild(e)}},o0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Ll=function(e,t,n){var i={};i[t.p]="+="+n,ke.set(e,i)},Wp=function(e,t){var n=zr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,_={};c=c||n();var p=o0(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return p(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){ct.cache++,o.tween&&or()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=ke.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},sn(e,"wheel",n.wheelHandler),tt.isTouch&&sn(e,"touchmove",n.wheelHandler),s},tt=(function(){function r(t,n){ao||r.register(ke)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Vh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_a){this.update=this.refresh=this.kill=Li;return}n=Up(jn(n)||ya(n)||n.nodeType?{trigger:n}:n,Cl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,_=s.pinSpacing,p=s.invalidateOnRefresh,g=s.anticipatePin,m=s.onScrubComplete,x=s.onSnapComplete,y=s.once,v=s.snap,E=s.pinReparent,M=s.pinSpacer,w=s.containerAnimation,C=s.fastScrollEnd,S=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Pn:Kt,D=!h&&h!==0,N=On(n.scroller||lt),G=ke.core.getCache(N),V=Cs(N),Y=("pinType"in n?n.pinType:Fr(N,"pinType")||V&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=D&&n.toggleActions.split(" "),B="markers"in n?n.markers:Cl.markers,se=V?0:parseFloat(hi(N)["border"+b.p2+No])||0,U=this,ge=n.onRefreshInit&&function(){return n.onRefreshInit(U)},_e=Vx(N,V,b),we=Gx(N,V),F=0,O=0,L=0,A=zr(N,b),j,he,$,pe,ee,J,T,re,ne,z,H,k,ue,I,R,te,le,de,fe,Ee,Se,Te,Xe,be,Me,qe,He,Fe,it,Je,dt,W,Ce,ce,me,Ae,Re,Qe,ft;if(U._startClamp=U._endClamp=!1,U._dir=b,g*=45,U.scroller=N,U.scroll=w?w.time.bind(w):A,pe=A(),U.vars=n,i=i||n.animation,"refreshPriority"in n&&(q_=1,n.refreshPriority===-9999&&(Ba=U)),G.tweenScroll=G.tweenScroll||{top:Wp(N,Kt),left:Wp(N,Pn)},U.tweenTo=j=G.tweenScroll[b.p],U.scrubDuration=function(Pe){Ce=ya(Pe)&&Pe,Ce?W?W.duration(Pe):W=ke.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ce,paused:!0,onComplete:function(){return m&&m(U)}}):(W&&W.progress(1).kill(),W=0)},i&&(i.vars.lazy=!1,i._initted&&!U.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),U.animation=i.pause(),i.scrollTrigger=U,U.scrubDuration(h),Je=0,l||(l=i.vars.id)),v&&((!ss(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in yt.style&&ke.set(V?[yt,Qn]:N,{scrollBehavior:"auto"}),ct.forEach(function(Pe){return gn(Pe)&&Pe.target===(V?Ct.scrollingElement||Qn:N)&&(Pe.smooth=!1)}),$=gn(v.snapTo)?v.snapTo:v.snapTo==="labels"?qx(i):v.snapTo==="labelsDirectional"?Xx(i):v.directional!==!1?function(Pe,et){return If(v.snapTo)(Pe,pn()-O<500?0:et.direction)}:ke.utils.snap(v.snapTo),ce=v.duration||{min:.1,max:2},ce=ss(ce)?Oa(ce.min,ce.max):Oa(ce,ce),me=ke.delayedCall(v.delay||Ce/2||.1,function(){var Pe=A(),et=pn()-O<500,ze=j.tween;if((et||Math.abs(U.getVelocity())<10)&&!ze&&!ou&&F!==Pe){var Ze=(Pe-J)/I,Ht=i&&!D?i.totalProgress():Ze,at=et?0:(Ht-dt)/(pn()-ga)*1e3||0,At=ke.utils.clamp(-Ze,1-Ze,Vs(at/2)*at/.185),jt=Ze+(v.inertia===!1?0:At),wt,Mt,gt=v,Wn=gt.onStart,Pt=gt.onInterrupt,yn=gt.onComplete;if(wt=$(jt,U),ya(wt)||(wt=jt),Mt=Math.max(0,Math.round(J+wt*I)),Pe<=T&&Pe>=J&&Mt!==Pe){if(ze&&!ze._initted&&ze.data<=Vs(Mt-Pe))return;v.inertia===!1&&(At=wt-Ze),j(Mt,{duration:ce(Vs(Math.max(Vs(jt-Ht),Vs(wt-Ht))*.185/at/.05||0)),ease:v.ease||"power3",data:Vs(Mt-Pe),onInterrupt:function(){return me.restart(!0)&&Pt&&Pt(U)},onComplete:function(){U.update(),F=A(),i&&!D&&(W?W.resetTo("totalProgress",wt,i._tTime/i._tDur):i.progress(wt)),Je=dt=i&&!D?i.totalProgress():U.progress,x&&x(U),yn&&yn(U)}},Pe,At*I,Mt-Pe-At*I),Wn&&Wn(U,j.tween)}}else U.isActive&&F!==Pe&&me.restart(!0)}).pause()),l&&(Wh[l]=U),d=U.trigger=On(d||f!==!0&&f),ft=d&&d._gsap&&d._gsap.stRevert,ft&&(ft=ft(U)),f=f===!0?d:On(f),jn(a)&&(a={targets:d,className:a}),f&&(_===!1||_===ui||(_=!_&&f.parentNode&&f.parentNode.style&&hi(f.parentNode).display==="flex"?!1:Xt),U.pin=f,he=ke.core.getCache(f),he.spacer?R=he.pinState:(M&&(M=On(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),he.spacerIsNative=!!M,M&&(he.spacerState=Pl(M))),he.spacer=de=M||Ct.createElement("div"),de.classList.add("pin-spacer"),l&&de.classList.add("pin-spacer-"+l),he.pinState=R=Pl(f)),n.force3D!==!1&&ke.set(f,{force3D:!0}),U.spacer=de=he.spacer,it=hi(f),be=it[_+b.os2],Ee=ke.getProperty(f),Se=ke.quickSetter(f,b.a,Zt),Ru(f,de,it),le=Pl(f)),B){k=ss(B)?Up(B,kp):kp,z=Rl("scroller-start",l,N,b,k,0),H=Rl("scroller-end",l,N,b,k,0,z),fe=z["offset"+b.op.d2];var Ut=On(Fr(N,"content")||N);re=this.markerStart=Rl("start",l,Ut,b,k,fe,0,w),ne=this.markerEnd=Rl("end",l,Ut,b,k,fe,0,w),w&&(Qe=ke.quickSetter([re,ne],b.a,Zt)),!Y&&!(zi.length&&Fr(N,"fixedMarkers")===!0)&&(Wx(V?yt:N),ke.set([z,H],{force3D:!0}),qe=ke.quickSetter(z,b.a,Zt),Fe=ke.quickSetter(H,b.a,Zt))}if(w){var Oe=w.vars.onUpdate,Be=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){U.update(0,0,1),Oe&&Oe.apply(w,Be||[])})}if(U.previous=function(){return ot[ot.indexOf(U)-1]},U.next=function(){return ot[ot.indexOf(U)+1]},U.revert=function(Pe,et){if(!et)return U.kill(!0);var ze=Pe!==!1||!U.enabled,Ze=fn;ze!==U.isReverted&&(ze&&(Ae=Math.max(A(),U.scroll.rec||0),L=U.progress,Re=i&&i.progress()),re&&[re,ne,z,H].forEach(function(Ht){return Ht.style.display=ze?"none":"block"}),ze&&(fn=U,U.update(ze)),f&&(!E||!U.isActive)&&(ze?jx(f,de,R):Ru(f,de,hi(f),Me)),ze||U.update(ze),fn=Ze,U.isReverted=ze)},U.refresh=function(Pe,et,ze,Ze){if(!((fn||!U.enabled)&&!et)){if(f&&Pe&&gi){sn(r,"scrollEnd",n0);return}!Tn&&ge&&ge(U),fn=U,j.tween&&!ze&&(j.tween.kill(),j.tween=0),W&&W.pause(),p&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(nt){return nt.vars.immediateRender&&nt.render(0,!0,!0)})),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var Ht=_e(),at=we(),At=w?w.duration():Ni(N,b),jt=I<=.01||!I,wt=0,Mt=Ze||0,gt=ss(ze)?ze.end:n.end,Wn=n.endTrigger||d,Pt=ss(ze)?ze.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),yn=U.pinnedContainer=n.pinnedContainer&&On(n.pinnedContainer,U),si=d&&Math.max(0,ot.indexOf(U))||0,Jt=si,Qt,P,Z,oe,ie,Q,xe,Le,Ue,Ne,We,Ye,Ve;for(B&&ss(ze)&&(Ye=ke.getProperty(z,b.p),Ve=ke.getProperty(H,b.p));Jt-- >0;)Q=ot[Jt],Q.end||Q.refresh(0,1)||(fn=U),xe=Q.pin,xe&&(xe===d||xe===f||xe===yn)&&!Q.isReverted&&(Ne||(Ne=[]),Ne.unshift(Q),Q.revert(!0,!0)),Q!==ot[Jt]&&(si--,Jt--);for(gn(Pt)&&(Pt=Pt(U)),Pt=Dp(Pt,"start",U),J=Vp(Pt,d,Ht,b,A(),re,z,U,at,se,Y,At,w,U._startClamp&&"_startClamp")||(f?-.001:0),gn(gt)&&(gt=gt(U)),jn(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(jn(Pt)?Pt.split(" ")[0]:"")+gt:(wt=pc(gt.substr(2),Ht),gt=jn(Pt)?Pt:(w?ke.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,J):J)+wt,Wn=d)),gt=Dp(gt,"end",U),T=Math.max(J,Vp(gt||(Wn?"100% 0":At),Wn,Ht,b,A()+wt,ne,H,U,at,se,Y,At,w,U._endClamp&&"_endClamp"))||-.001,wt=0,Jt=si;Jt--;)Q=ot[Jt],xe=Q.pin,xe&&Q.start-Q._pinPush<=J&&!w&&Q.end>0&&(Qt=Q.end-(U._startClamp?Math.max(0,Q.start):Q.start),(xe===d&&Q.start-Q._pinPush<J||xe===yn)&&isNaN(Pt)&&(wt+=Qt*(1-Q.progress)),xe===f&&(Mt+=Qt));if(J+=wt,T+=wt,U._startClamp&&(U._startClamp+=wt),U._endClamp&&!Tn&&(U._endClamp=T||-.001,T=Math.min(T,Ni(N,b))),I=T-J||(J-=.01)&&.001,jt&&(L=ke.utils.clamp(0,1,ke.utils.normalize(J,T,Ae))),U._pinPush=Mt,re&&wt&&(Qt={},Qt[b.a]="+="+wt,yn&&(Qt[b.p]="-="+A()),ke.set([re,ne],Qt)),f&&!(Gh&&U.end>=Ni(N,b)))Qt=hi(f),oe=b===Kt,Z=A(),Te=parseFloat(Ee(b.a))+Mt,!At&&T>1&&(We=(V?Ct.scrollingElement||Qn:N).style,We={style:We,value:We["overflow"+b.a.toUpperCase()]},V&&hi(yt)["overflow"+b.a.toUpperCase()]!=="scroll"&&(We.style["overflow"+b.a.toUpperCase()]="scroll")),Ru(f,de,Qt),le=Pl(f),P=nr(f,!0),Le=Y&&zr(N,oe?Pn:Kt)(),_?(Me=[_+b.os2,I+Mt+Zt],Me.t=de,Jt=_===Xt?zc(f,b)+I+Mt:0,Jt&&(Me.push(b.d,Jt+Zt),de.style.flexBasis!=="auto"&&(de.style.flexBasis=Jt+Zt)),Eo(Me),yn&&ot.forEach(function(nt){nt.pin===yn&&nt.vars.pinSpacing!==!1&&(nt._subPinOffset=!0)}),Y&&A(Ae)):(Jt=zc(f,b),Jt&&de.style.flexBasis!=="auto"&&(de.style.flexBasis=Jt+Zt)),Y&&(ie={top:P.top+(oe?Z-J:Le)+Zt,left:P.left+(oe?Le:Z-J)+Zt,boxSizing:"border-box",position:"fixed"},ie[ws]=ie["max"+No]=Math.ceil(P.width)+Zt,ie[Ms]=ie["max"+Lf]=Math.ceil(P.height)+Zt,ie[ui]=ie[ui+Ua]=ie[ui+Fa]=ie[ui+ka]=ie[ui+Na]="0",ie[Xt]=Qt[Xt],ie[Xt+Ua]=Qt[Xt+Ua],ie[Xt+Fa]=Qt[Xt+Fa],ie[Xt+ka]=Qt[Xt+ka],ie[Xt+Na]=Qt[Xt+Na],te=Qx(R,ie,E),Tn&&A(0)),i?(Ue=i._initted,Mu(1),i.render(i.duration(),!0,!0),Xe=Ee(b.a)-Te+I+Mt,He=Math.abs(I-Xe)>1,Y&&He&&te.splice(te.length-2,2),i.render(0,!0,!0),Ue||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Mu(0)):Xe=I,We&&(We.value?We.style["overflow"+b.a.toUpperCase()]=We.value:We.style.removeProperty("overflow-"+b.a));else if(d&&A()&&!w)for(P=d.parentNode;P&&P!==yt;)P._pinOffset&&(J-=P._pinOffset,T-=P._pinOffset),P=P.parentNode;Ne&&Ne.forEach(function(nt){return nt.revert(!1,!0)}),U.start=J,U.end=T,pe=ee=Tn?Ae:A(),!w&&!Tn&&(pe<Ae&&A(Ae),U.scroll.rec=0),U.revert(!1,!0),O=pn(),me&&(F=-1,me.restart(!0)),fn=0,i&&D&&(i._initted||Re)&&i.progress()!==Re&&i.progress(Re||0,!0).render(i.time(),!0,!0),(jt||L!==U.progress||w||p||i&&!i._initted)&&(i&&!D&&(i._initted||L||i.vars.immediateRender!==!1)&&i.totalProgress(w&&J<-.001&&!L?ke.utils.normalize(J,T,0):L,!0),U.progress=jt||(pe-J)/I===L?0:L),f&&_&&(de._pinOffset=Math.round(U.progress*Xe)),W&&W.invalidate(),isNaN(Ye)||(Ye-=ke.getProperty(z,b.p),Ve-=ke.getProperty(H,b.p),Ll(z,b,Ye),Ll(re,b,Ye-(Ze||0)),Ll(H,b,Ve),Ll(ne,b,Ve-(Ze||0))),jt&&!Tn&&U.update(),u&&!Tn&&!ue&&(ue=!0,u(U),ue=!1)}},U.getVelocity=function(){return(A()-ee)/(pn()-ga)*1e3||0},U.endAnimation=function(){ea(U.callbackAnimation),i&&(W?W.progress(1):i.paused()?D||ea(i,U.direction<0,1):ea(i,i.reversed()))},U.labelToScroll=function(Pe){return i&&i.labels&&(J||U.refresh()||J)+i.labels[Pe]/i.duration()*I||0},U.getTrailing=function(Pe){var et=ot.indexOf(U),ze=U.direction>0?ot.slice(0,et).reverse():ot.slice(et+1);return(jn(Pe)?ze.filter(function(Ze){return Ze.vars.preventOverlaps===Pe}):ze).filter(function(Ze){return U.direction>0?Ze.end<=J:Ze.start>=T})},U.update=function(Pe,et,ze){if(!(w&&!ze&&!Pe)){var Ze=Tn===!0?Ae:U.scroll(),Ht=Pe?0:(Ze-J)/I,at=Ht<0?0:Ht>1?1:Ht||0,At=U.progress,jt,wt,Mt,gt,Wn,Pt,yn,si;if(et&&(ee=pe,pe=w?A():Ze,v&&(dt=Je,Je=i&&!D?i.totalProgress():at)),g&&f&&!fn&&!Ml&&gi&&(!at&&J<Ze+(Ze-ee)/(pn()-ga)*g?at=1e-4:at===1&&T>Ze+(Ze-ee)/(pn()-ga)*g&&(at=.9999)),at!==At&&U.enabled){if(jt=U.isActive=!!at&&at<1,wt=!!At&&At<1,Pt=jt!==wt,Wn=Pt||!!at!=!!At,U.direction=at>At?1:-1,U.progress=at,Wn&&!fn&&(Mt=at&&!At?0:at===1?1:At===1?2:3,D&&(gt=!Pt&&X[Mt+1]!=="none"&&X[Mt+1]||X[Mt],si=i&&(gt==="complete"||gt==="reset"||gt in i))),S&&(Pt||si)&&(si||h||!i)&&(gn(S)?S(U):U.getTrailing(S).forEach(function(Z){return Z.endAnimation()})),D||(W&&!fn&&!Ml?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",at,i._tTime/i._tDur):(W.vars.totalProgress=at,W.invalidate().restart())):i&&i.totalProgress(at,!!(fn&&(O||Pe)))),f){if(Pe&&_&&(de.style[_+b.os2]=be),!Y)Se(va(Te+Xe*at));else if(Wn){if(yn=!Pe&&at>At&&T+1>Ze&&Ze+1>=Ni(N,b),E)if(!Pe&&(jt||yn)){var Jt=nr(f,!0),Qt=Ze-J;Gp(f,yt,Jt.top+(b===Kt?Qt:0)+Zt,Jt.left+(b===Kt?0:Qt)+Zt)}else Gp(f,de);Eo(jt||yn?te:le),He&&at<1&&jt||Se(Te+(at===1&&!yn?Xe:0))}}v&&!j.tween&&!fn&&!Ml&&me.restart(!0),a&&(Pt||y&&at&&(at<1||!Eu))&&Za(a.targets).forEach(function(Z){return Z.classList[jt||y?"add":"remove"](a.className)}),o&&!D&&!Pe&&o(U),Wn&&!fn?(D&&(si&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),o&&o(U)),(Pt||!Eu)&&(c&&Pt&&Au(U,c),q[Mt]&&Au(U,q[Mt]),y&&(at===1?U.kill(!1,1):q[Mt]=0),Pt||(Mt=at===1?1:3,q[Mt]&&Au(U,q[Mt]))),C&&!jt&&Math.abs(U.getVelocity())>(ya(C)?C:2500)&&(ea(U.callbackAnimation),W?W.progress(1):ea(i,gt==="reverse"?1:!at,1))):D&&o&&!fn&&o(U)}if(Fe){var P=w?Ze/w.duration()*(w._caScrollDist||0):Ze;qe(P+(z._isFlipped?1:0)),Fe(P)}Qe&&Qe(-Ze/w.duration()*(w._caScrollDist||0))}},U.enable=function(Pe,et){U.enabled||(U.enabled=!0,sn(N,"resize",xa),V||sn(N,"scroll",Gs),ge&&sn(r,"refreshInit",ge),Pe!==!1&&(U.progress=L=0,pe=ee=F=A()),et!==!1&&U.refresh())},U.getTween=function(Pe){return Pe&&j?j.tween:W},U.setPositions=function(Pe,et,ze,Ze){if(w){var Ht=w.scrollTrigger,at=w.duration(),At=Ht.end-Ht.start;Pe=Ht.start+At*Pe/at,et=Ht.start+At*et/at}U.refresh(!1,!1,{start:Op(Pe,ze&&!!U._startClamp),end:Op(et,ze&&!!U._endClamp)},Ze),U.update()},U.adjustPinSpacing=function(Pe){if(Me&&Pe){var et=Me.indexOf(b.d)+1;Me[et]=parseFloat(Me[et])+Pe+Zt,Me[1]=parseFloat(Me[1])+Pe+Zt,Eo(Me)}},U.disable=function(Pe,et){if(U.enabled&&(Pe!==!1&&U.revert(!0,!0),U.enabled=U.isActive=!1,et||W&&W.pause(),Ae=0,he&&(he.uncache=1),ge&&rn(r,"refreshInit",ge),me&&(me.pause(),j.tween&&j.tween.kill()&&(j.tween=0)),!V)){for(var ze=ot.length;ze--;)if(ot[ze].scroller===N&&ot[ze]!==U)return;rn(N,"resize",xa),V||rn(N,"scroll",Gs)}},U.kill=function(Pe,et){U.disable(Pe,et),W&&!et&&W.kill(),l&&delete Wh[l];var ze=ot.indexOf(U);ze>=0&&ot.splice(ze,1),ze===En&&gc>0&&En--,ze=0,ot.forEach(function(Ze){return Ze.scroller===U.scroller&&(ze=1)}),ze||Tn||(U.scroll.rec=0),i&&(i.scrollTrigger=null,Pe&&i.revert({kill:!1}),et||i.kill()),re&&[re,ne,z,H].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),Ba===U&&(Ba=0),f&&(he&&(he.uncache=1),ze=0,ot.forEach(function(Ze){return Ze.pin===f&&ze++}),ze||(he.spacer=0)),n.onKill&&n.onKill(U)},ot.push(U),U.enable(!1,!1),ft&&ft(U),i&&i.add&&!I){var rt=U.update;U.update=function(){U.update=rt,ct.cache++,J||T||U.refresh()},ke.delayedCall(.01,U.update),I=.01,J=T=0}else U.refresh();f&&Yx()},r.register=function(n){return ao||(ke=n||J_(),j_()&&window.document&&r.enable(),ao=_a),ao},r.defaults=function(n){if(n)for(var i in n)Cl[i]=n[i];return Cl},r.disable=function(n,i){_a=0,ot.forEach(function(o){return o[i?"kill":"disable"](n)}),rn(lt,"wheel",Gs),rn(Ct,"scroll",Gs),clearInterval(wl),rn(Ct,"touchcancel",Li),rn(yt,"touchstart",Li),Tl(rn,Ct,"pointerdown,touchstart,mousedown",Fp),Tl(rn,Ct,"pointerup,touchend,mouseup",Np),kc.kill(),El(rn);for(var s=0;s<ct.length;s+=3)Al(rn,ct[s],ct[s+1]),Al(rn,ct[s],ct[s+2])},r.enable=function(){if(lt=window,Ct=document,Qn=Ct.documentElement,yt=Ct.body,ke&&(Za=ke.utils.toArray,Oa=ke.utils.clamp,Vh=ke.core.context||Li,Mu=ke.core.suppressOverwrites||Li,Af=lt.history.scrollRestoration||"auto",qh=lt.pageYOffset||0,ke.core.globals("ScrollTrigger",r),yt)){_a=1,Mo=document.createElement("div"),Mo.style.height="100vh",Mo.style.position="absolute",s0(),Hx(),Gt.register(ke),r.isTouch=Gt.isTouch,br=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Hh=Gt.isTouch===1,sn(lt,"wheel",Gs),Tf=[lt,Ct,Qn,yt],ke.matchMedia?(r.matchMedia=function(c){var u=ke.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},ke.addEventListener("matchMediaInit",function(){return Df()}),ke.addEventListener("matchMediaRevert",function(){return i0()}),ke.addEventListener("matchMedia",function(){ds(0,1),Ps("matchMedia")}),ke.matchMedia().add("(orientation: portrait)",function(){return Cu(),Cu})):console.warn("Requires GSAP 3.11.0 or later"),Cu(),sn(Ct,"scroll",Gs);var n=yt.hasAttribute("style"),i=yt.style,s=i.borderTopStyle,o=ke.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=nr(yt),Kt.m=Math.round(a.top+Kt.sc())||0,Pn.m=Math.round(a.left+Pn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(yt.setAttribute("style",""),yt.removeAttribute("style")),wl=setInterval(Bp,250),ke.delayedCall(.5,function(){return Ml=0}),sn(Ct,"touchcancel",Li),sn(yt,"touchstart",Li),Tl(sn,Ct,"pointerdown,touchstart,mousedown",Fp),Tl(sn,Ct,"pointerup,touchend,mouseup",Np),zh=ke.utils.checkPrefix("transform"),_c.push(zh),ao=pn(),kc=ke.delayedCall(.2,ds).pause(),lo=[Ct,"visibilitychange",function(){var c=lt.innerWidth,u=lt.innerHeight;Ct.hidden?(Lp=c,Ip=u):(Lp!==c||Ip!==u)&&xa()},Ct,"DOMContentLoaded",ds,lt,"load",ds,lt,"resize",xa],El(sn),ot.forEach(function(c){return c.enable(0,1)}),l=0;l<ct.length;l+=3)Al(rn,ct[l],ct[l+1]),Al(rn,ct[l],ct[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Eu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(wl)||(wl=i)&&setInterval(Bp,i),"ignoreMobileResize"in n&&(Hh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(El(rn)||El(sn,n.autoRefreshEvents||"none"),X_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=On(n),o=ct.indexOf(s),a=Cs(s);~o&&ct.splice(o,a?6:2),i&&(a?zi.unshift(lt,i,yt,i,Qn,i):zi.unshift(s,i))},r.clearMatchMedia=function(n){ot.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(jn(n)?On(n):n).getBoundingClientRect(),a=o[s?ws:Ms]*i||0;return s?o.right-a>0&&o.left+a<lt.innerWidth:o.bottom-a>0&&o.top+a<lt.innerHeight},r.positionInViewport=function(n,i,s){jn(n)&&(n=On(n));var o=n.getBoundingClientRect(),a=o[s?ws:Ms],l=i==null?a/2:i in Hc?Hc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/lt.innerWidth:(o.top+l)/lt.innerHeight},r.killAll=function(n){if(ot.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Rs.killAll||[];Rs={},i.forEach(function(s){return s()})}},r})();tt.version="3.13.0";tt.saveStyles=function(r){return r?Za(r).forEach(function(e){if(e&&e.style){var t=Yn.indexOf(e);t>=0&&Yn.splice(t,5),Yn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ke.core.getCache(e),Vh())}}):Yn};tt.revert=function(r,e){return Df(!r,e)};tt.create=function(r,e){return new tt(r,e)};tt.refresh=function(r){return r?xa(!0):(ao||tt.register())&&ds(!0)};tt.update=function(r){return++ct.cache&&or(r===!0?2:0)};tt.clearScrollMemory=r0;tt.maxScroll=function(r,e){return Ni(r,e?Pn:Kt)};tt.getScrollFunc=function(r,e){return zr(On(r),e?Pn:Kt)};tt.getById=function(r){return Wh[r]};tt.getAll=function(){return ot.filter(function(r){return r.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!gi};tt.snapDirectional=If;tt.addEventListener=function(r,e){var t=Rs[r]||(Rs[r]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(r,e){var t=Rs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=ke.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(_){h.length||f.restart(!0),h.push(_.trigger),d.push(_),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&gn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return gn(s)&&(s=s(),sn(tt,"refresh",function(){return s=e.batchMax()})),Za(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(tt.create(c))}),t};var qp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Pu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===Qn&&r(yt,t)},Il={auto:1,scroll:1},Kx=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ke.core.getCache(s),a=pn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Il[(l=hi(s)).overflowY]||Il[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Cs(s)&&(Il[(l=hi(s)).overflowY]||Il[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},a0=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Kx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&sn(Ct,Gt.eventTypes[0],$p,!1,!0)},onDisable:function(){return rn(Ct,Gt.eventTypes[0],$p,!0)}})},eb=/(input|label|select|textarea)/i,Xp,$p=function(e){var t=eb.test(e.target.tagName);(t||Xp)&&(e._gsapAllow=!0,Xp=t)},tb=function(e){ss(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=On(e.target)||Qn,u=ke.core.globals().ScrollSmoother,h=u&&u.get(),d=br&&(e.content&&On(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=zr(c,Kt),_=zr(c,Pn),p=1,g=(Gt.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,m=0,x=gn(i)?function(){return i(a)}:function(){return i||2.8},y,v,E=a0(c,e.type,!0,s),M=function(){return v=!1},w=Li,C=Li,S=function(){l=Ni(c,Kt),C=Oa(br?1:0,l),n&&(w=Oa(0,Ni(c,Pn))),y=Es},b=function(){d._gsap.y=va(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(v){requestAnimationFrame(M);var B=va(a.deltaY/2),se=C(f.v-B);if(d&&se!==f.v+f.offset){f.offset=se-f.v;var U=va((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",d._gsap.y=U+"px",f.cacheID=ct.cache,or()}return!0}f.offset&&b(),v=!0},N,G,V,Y,q=function(){S(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return d&&ke.set(d,{y:"+=0"}),e.ignoreCheck=function(X){return br&&X.type==="touchmove"&&D()||p>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){v=!1;var X=p;p=va((lt.visualViewport&&lt.visualViewport.scale||1)/g),N.pause(),X!==p&&Pu(c,p>1.01?!0:n?!1:"x"),G=_(),V=f(),S(),y=Es},e.onRelease=e.onGestureStart=function(X,B){if(f.offset&&b(),!B)Y.restart(!0);else{ct.cache++;var se=x(),U,ge;n&&(U=_(),ge=U+se*.05*-X.velocityX/.227,se*=qp(_,U,ge,Ni(c,Pn)),N.vars.scrollX=w(ge)),U=f(),ge=U+se*.05*-X.velocityY/.227,se*=qp(f,U,ge,Ni(c,Kt)),N.vars.scrollY=C(ge),N.invalidate().duration(se).play(.01),(br&&N.vars.scrollY>=l||U>=l-1)&&ke.to({},{onUpdate:q,duration:se})}o&&o(X)},e.onWheel=function(){N._ts&&N.pause(),pn()-m>1e3&&(y=0,m=pn())},e.onChange=function(X,B,se,U,ge){if(Es!==y&&S(),B&&n&&_(w(U[2]===B?G+(X.startX-X.x):_()+B-U[1])),se){f.offset&&b();var _e=ge[2]===se,we=_e?V+X.startY-X.y:f()+se-ge[1],F=C(we);_e&&we!==F&&(V+=F-we),f(F)}(se||B)&&or()},e.onEnable=function(){Pu(c,n?!1:"x"),tt.addEventListener("refresh",q),sn(lt,"resize",q),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),E.enable()},e.onDisable=function(){Pu(c,!0),rn(lt,"resize",q),tt.removeEventListener("refresh",q),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new Gt(e),a.iOS=br,br&&!f()&&f(1),br&&ke.ticker.add(Li),Y=a._dc,N=ke.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:o0(f,f(),function(){return N.pause()})},onUpdate:or,onComplete:Y.vars.onComplete}),a};tt.sort=function(r){if(gn(r))return ot.sort(r);var e=lt.pageYOffset||0;return tt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),ot.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};tt.observe=function(r){return new Gt(r)};tt.normalizeScroll=function(r){if(typeof r>"u")return Mn;if(r===!0&&Mn)return Mn.enable();if(r===!1){Mn&&Mn.kill(),Mn=r;return}var e=r instanceof Gt?r:tb(r);return Mn&&Mn.target===e.target&&Mn.kill(),Cs(e.target)&&(Mn=e),e};tt.core={_getVelocityProp:Bh,_inputObserver:a0,_scrollers:ct,_proxies:zi,bridge:{ss:function(){gi||Ps("scrollStart"),gi=pn()},ref:function(){return fn}}};J_()&&ke.registerPlugin(tt);let An;function au(){De.registerPlugin(tt),tt.config({ignoreMobileResize:!0}),window.ScrollTrigger=tt;const r=window.matchMedia("(pointer: coarse)").matches&&window.matchMedia("(hover: none)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;return document.documentElement.classList.add("lenis-smooth"),document.body.classList.add("lenis"),An&&An.destroy(),An=new Nx({duration:r?1:1.2,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),orientation:"vertical",smoothWheel:!0,wheelMultiplier:.8,smoothTouch:!1,infinite:!1}),window.lenis=An,An.on("scroll",tt.update),window._lenisRaf&&De.ticker.remove(window._lenisRaf),window._lenisRaf=e=>{An.raf(e*1e3)},De.ticker.add(window._lenisRaf),De.ticker.lagSmoothing(0),An}function nb(){An&&(An.stop(),document.body.classList.add("lenis-stopped"))}function ib(){An&&(An.start(),document.body.classList.remove("lenis-stopped"))}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="174",rb=0,Yp=1,sb=2,l0=1,ob=2,Ki=3,Hr=0,Hn=1,Oi=2,Nr=0,To=1,jp=2,Jp=3,Qp=4,ab=5,cs=100,lb=101,cb=102,ub=103,hb=104,db=200,fb=201,pb=202,mb=203,$h=204,Yh=205,gb=206,_b=207,vb=208,yb=209,xb=210,bb=211,Sb=212,wb=213,Mb=214,jh=0,Jh=1,Qh=2,Uo=3,Zh=4,Kh=5,ed=6,td=7,c0=0,Eb=1,Tb=2,Ur=0,Ab=1,Cb=2,Rb=3,Pb=4,Lb=5,Ib=6,Db=7,u0=300,ko=301,Bo=302,nd=303,id=304,lu=306,rd=1e3,fs=1001,sd=1002,Ei=1003,Ob=1004,Dl=1005,Ui=1006,Lu=1007,Ir=1008,ur=1009,h0=1010,d0=1011,el=1012,Ff=1013,Ls=1014,rr=1015,qo=1016,Nf=1017,Uf=1018,zo=1020,f0=35902,p0=1021,m0=1022,Mi=1023,g0=1024,_0=1025,Ao=1026,Ho=1027,v0=1028,kf=1029,y0=1030,Bf=1031,zf=1033,yc=33776,xc=33777,bc=33778,Sc=33779,od=35840,ad=35841,ld=35842,cd=35843,ud=36196,hd=37492,dd=37496,fd=37808,pd=37809,md=37810,gd=37811,_d=37812,vd=37813,yd=37814,xd=37815,bd=37816,Sd=37817,wd=37818,Md=37819,Ed=37820,Td=37821,wc=36492,Ad=36494,Cd=36495,x0=36283,Rd=36284,Pd=36285,Ld=36286,Fb=3200,Nb=3201,b0=0,Ub=1,wr="",Fn="srgb",Vo="srgb-linear",Vc="linear",bt="srgb",Ws=7680,Zp=519,kb=512,Bb=513,zb=514,S0=515,Hb=516,Vb=517,Gb=518,Wb=519,Kp=35044,em="300 es",sr=2e3,Gc=2001;class Xo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Iu=Math.PI/180,Id=180/Math.PI;function $o(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function ut(r,e,t){return Math.max(e,Math.min(t,r))}function qb(r,e){return(r%e+e)%e}function Du(r,e,t){return(1-t)*r+t*e}function ta(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,i,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],p=i[0],g=i[3],m=i[6],x=i[1],y=i[4],v=i[7],E=i[2],M=i[5],w=i[8];return s[0]=o*p+a*x+l*E,s[3]=o*g+a*y+l*M,s[6]=o*m+a*v+l*w,s[1]=c*p+u*x+h*E,s[4]=c*g+u*y+h*M,s[7]=c*m+u*v+h*w,s[2]=d*p+f*x+_*E,s[5]=d*g+f*y+_*M,s[8]=d*m+f*v+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=f*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ou.makeScale(e,t)),this}rotate(e){return this.premultiply(Ou.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ou.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ou=new Ke;function w0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function tl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Xb(){const r=tl("canvas");return r.style.display="block",r}const tm={};function os(r){r in tm||(tm[r]=!0,console.warn(r))}function $b(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Yb(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jb(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nm=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),im=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jb(){const r={enabled:!0,workingColorSpace:Vo,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===bt&&(i.r=ar(i.r),i.g=ar(i.g),i.b=ar(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(i.r=Co(i.r),i.g=Co(i.g),i.b=Co(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wr?Vc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Vo]:{primaries:e,whitePoint:n,transfer:Vc,toXYZ:nm,fromXYZ:im,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:nm,fromXYZ:im,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),r}const mt=Jb();function ar(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Co(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let qs;class Qb{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=tl("canvas")),qs.width=e.width,qs.height=e.height;const n=qs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ar(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ar(t[n]/255)*255):t[n]=ar(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zb=0;class Hf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Fu(i[o].image)):s.push(Fu(i[o]))}else s=Fu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Fu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Qb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kb=0;class Vn extends Xo{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,n=fs,i=fs,s=Ui,o=Ir,a=Mi,l=ur,c=Vn.DEFAULT_ANISOTROPY,u=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=$o(),this.name="",this.source=new Hf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case fs:e.x=e.x<0?0:1;break;case sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case fs:e.y=e.y<0?0:1;break;case sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=u0;Vn.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,i=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],p=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(f+1)/2,E=(m+1)/2,M=(u+d)/4,w=(h+p)/4,C=(_+g)/4;return y>v&&y>E?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=M/n,s=w/n):v>E?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=M/i,s=C/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=w/s,i=C/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-_)*(g-_)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(h-p)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eS extends Xo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Vn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Hf(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Is extends eS{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class M0 extends Vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tS extends Vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=p;return}if(h!==p||l!==d||c!==f||u!==_){let g=1-a;const m=l*d+c*f+u*_+h*p,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const E=Math.sqrt(y),M=Math.atan2(E,m*x);g=Math.sin(g*M)/E,a=Math.sin(a*M)/E}const v=a*x;if(l=l*g+d*v,c=c*g+f*v,u=u*g+_*v,h=h*g+p*v,g===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-a*f,e[t+2]=c*_+u*f+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nu.copy(this).projectOnVector(e),this.sub(Nu)}reflect(e){return this.sub(Nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nu=new K,rm=new hl;class Ds{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yi):yi.fromBufferAttribute(s,o),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ol.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ol.copy(n.boundingBox)),Ol.applyMatrix4(e.matrixWorld),this.union(Ol)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Fl.subVectors(this.max,na),Xs.subVectors(e.a,na),$s.subVectors(e.b,na),Ys.subVectors(e.c,na),mr.subVectors($s,Xs),gr.subVectors(Ys,$s),jr.subVectors(Xs,Ys);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-jr.z,jr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,jr.z,0,-jr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-jr.y,jr.x,0];return!Uu(t,Xs,$s,Ys,Fl)||(t=[1,0,0,0,1,0,0,0,1],!Uu(t,Xs,$s,Ys,Fl))?!1:(Nl.crossVectors(mr,gr),t=[Nl.x,Nl.y,Nl.z],Uu(t,Xs,$s,Ys,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new K,new K,new K,new K,new K,new K,new K,new K],yi=new K,Ol=new Ds,Xs=new K,$s=new K,Ys=new K,mr=new K,gr=new K,jr=new K,na=new K,Fl=new K,Nl=new K,Jr=new K;function Uu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Jr.fromArray(r,s);const a=i.x*Math.abs(Jr.x)+i.y*Math.abs(Jr.y)+i.z*Math.abs(Jr.z),l=e.dot(Jr),c=t.dot(Jr),u=n.dot(Jr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const nS=new Ds,ia=new K,ku=new K;class Vf{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ia,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(ku)),this.expandByPoint(ia.copy(e.center).sub(ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new K,Bu=new K,Ul=new K,_r=new K,zu=new K,kl=new K,Hu=new K;class iS{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bu.copy(e).add(t).multiplyScalar(.5),Ul.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(Bu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ul),a=_r.dot(this.direction),l=-_r.dot(Ul),c=_r.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const p=1/u;h*=p,d*=p,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Bu).addScaledVector(Ul,d),f}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const n=$i.dot(this.direction),i=$i.dot($i)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,n,i,s){zu.subVectors(t,e),kl.subVectors(n,e),Hu.crossVectors(zu,kl);let o=this.direction.dot(Hu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_r.subVectors(this.origin,e);const l=a*this.direction.dot(kl.crossVectors(_r,kl));if(l<0)return null;const c=a*this.direction.dot(zu.cross(_r));if(c<0||l+c>o)return null;const u=-a*_r.dot(Hu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,_,p,g){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,_,p,g)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,_,p,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=_,m[11]=p,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/js.setFromMatrixColumn(e,0).length(),s=1/js.setFromMatrixColumn(e,1).length(),o=1/js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,_=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,p=c*h;t[0]=d+p*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=p+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,p=c*h;t[0]=d-p*a,t[4]=-o*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=p-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,_=a*u,p=a*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+p,t[1]=l*h,t[5]=p*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,p=a*c;t[0]=l*u,t[4]=p-d*h,t[8]=_*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+p,t[5]=o*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rS,e,sS)}lookAt(e,t,n){const i=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),vr.crossVectors(n,Xn),vr.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),vr.crossVectors(n,Xn)),vr.normalize(),Bl.crossVectors(Xn,vr),i[0]=vr.x,i[4]=Bl.x,i[8]=Xn.x,i[1]=vr.y,i[5]=Bl.y,i[9]=Xn.y,i[2]=vr.z,i[6]=Bl.z,i[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],p=n[6],g=n[10],m=n[14],x=n[3],y=n[7],v=n[11],E=n[15],M=i[0],w=i[4],C=i[8],S=i[12],b=i[1],D=i[5],N=i[9],G=i[13],V=i[2],Y=i[6],q=i[10],X=i[14],B=i[3],se=i[7],U=i[11],ge=i[15];return s[0]=o*M+a*b+l*V+c*B,s[4]=o*w+a*D+l*Y+c*se,s[8]=o*C+a*N+l*q+c*U,s[12]=o*S+a*G+l*X+c*ge,s[1]=u*M+h*b+d*V+f*B,s[5]=u*w+h*D+d*Y+f*se,s[9]=u*C+h*N+d*q+f*U,s[13]=u*S+h*G+d*X+f*ge,s[2]=_*M+p*b+g*V+m*B,s[6]=_*w+p*D+g*Y+m*se,s[10]=_*C+p*N+g*q+m*U,s[14]=_*S+p*G+g*X+m*ge,s[3]=x*M+y*b+v*V+E*B,s[7]=x*w+y*D+v*Y+E*se,s[11]=x*C+y*N+v*q+E*U,s[15]=x*S+y*G+v*X+E*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],p=e[7],g=e[11],m=e[15];return _*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+p*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+g*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],p=e[13],g=e[14],m=e[15],x=h*g*c-p*d*c+p*l*f-a*g*f-h*l*m+a*d*m,y=_*d*c-u*g*c-_*l*f+o*g*f+u*l*m-o*d*m,v=u*p*c-_*h*c+_*a*f-o*p*f-u*a*m+o*h*m,E=_*h*l-u*p*l-_*a*d+o*p*d+u*a*g-o*h*g,M=t*x+n*y+i*v+s*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=x*w,e[1]=(p*d*s-h*g*s-p*i*f+n*g*f+h*i*m-n*d*m)*w,e[2]=(a*g*s-p*l*s+p*i*c-n*g*c-a*i*m+n*l*m)*w,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*w,e[4]=y*w,e[5]=(u*g*s-_*d*s+_*i*f-t*g*f-u*i*m+t*d*m)*w,e[6]=(_*l*s-o*g*s-_*i*c+t*g*c+o*i*m-t*l*m)*w,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*w,e[8]=v*w,e[9]=(_*h*s-u*p*s-_*n*f+t*p*f+u*n*m-t*h*m)*w,e[10]=(o*p*s-_*a*s+_*n*c-t*p*c-o*n*m+t*a*m)*w,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*w,e[12]=E*w,e[13]=(u*p*i-_*h*i+_*n*d-t*p*d-u*n*g+t*h*g)*w,e[14]=(_*a*i-o*p*i-_*n*l+t*p*l+o*n*g-t*a*g)*w,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,_=s*h,p=o*u,g=o*h,m=a*h,x=l*c,y=l*u,v=l*h,E=n.x,M=n.y,w=n.z;return i[0]=(1-(p+m))*E,i[1]=(f+v)*E,i[2]=(_-y)*E,i[3]=0,i[4]=(f-v)*M,i[5]=(1-(d+m))*M,i[6]=(g+x)*M,i[7]=0,i[8]=(_+y)*w,i[9]=(g-x)*w,i[10]=(1-(d+p))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=js.set(i[0],i[1],i[2]).length();const o=js.set(i[4],i[5],i[6]).length(),a=js.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],xi.copy(this);const c=1/s,u=1/o,h=1/a;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=h,xi.elements[9]*=h,xi.elements[10]*=h,t.setFromRotationMatrix(xi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=sr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===sr)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Gc)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=sr){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*c,f=(n+i)*u;let _,p;if(a===sr)_=(o+s)*h,p=-2*h;else if(a===Gc)_=s*h,p=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=p,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const js=new K,xi=new Dt,rS=new K(0,0,0),sS=new K(1,1,1),vr=new K,Bl=new K,Xn=new K,sm=new Dt,om=new hl;class Wi{constructor(e=0,t=0,n=0,i=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class E0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oS=0;const am=new K,Js=new hl,Yi=new Dt,zl=new K,ra=new K,aS=new K,lS=new hl,lm=new K(1,0,0),cm=new K(0,1,0),um=new K(0,0,1),hm={type:"added"},cS={type:"removed"},Qs={type:"childadded",child:null},Vu={type:"childremoved",child:null};class vn extends Xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new K,t=new Wi,n=new hl,i=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Ke}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(lm,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(um,e)}translateOnAxis(e,t){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lm,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zl.copy(e):zl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(ra,zl,this.up):Yi.lookAt(zl,ra,this.up),this.quaternion.setFromRotationMatrix(Yi),i&&(Yi.extractRotation(i.matrixWorld),Js.setFromRotationMatrix(Yi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hm),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cS),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hm),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,aS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,lS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vn.DEFAULT_UP=new K(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new K,ji=new K,Gu=new K,Ji=new K,Zs=new K,Ks=new K,dm=new K,Wu=new K,qu=new K,Xu=new K,$u=new St,Yu=new St,ju=new St;class wi{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bi.subVectors(e,t),i.cross(bi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){bi.subVectors(i,t),ji.subVectors(n,t),Gu.subVectors(e,t);const o=bi.dot(bi),a=bi.dot(ji),l=bi.dot(Gu),c=ji.dot(ji),u=ji.dot(Gu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return $u.setScalar(0),Yu.setScalar(0),ju.setScalar(0),$u.fromBufferAttribute(e,t),Yu.fromBufferAttribute(e,n),ju.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector($u,s.x),o.addScaledVector(Yu,s.y),o.addScaledVector(ju,s.z),o}static isFrontFacing(e,t,n,i){return bi.subVectors(n,t),ji.subVectors(e,t),bi.cross(ji).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),bi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return wi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Zs.subVectors(i,n),Ks.subVectors(s,n),Wu.subVectors(e,n);const l=Zs.dot(Wu),c=Ks.dot(Wu);if(l<=0&&c<=0)return t.copy(n);qu.subVectors(e,i);const u=Zs.dot(qu),h=Ks.dot(qu);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Zs,o);Xu.subVectors(e,s);const f=Zs.dot(Xu),_=Ks.dot(Xu);if(_>=0&&f<=_)return t.copy(s);const p=f*c-l*_;if(p<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Ks,a);const g=u*_-f*h;if(g<=0&&h-u>=0&&f-_>=0)return dm.subVectors(s,i),a=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(dm,a);const m=1/(g+p+d);return o=p*m,a=d*m,t.copy(n).addScaledVector(Zs,o).addScaledVector(Ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Ju(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=qb(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ju(o,s,e+1/3),this.g=Ju(o,s,e),this.b=Ju(o,s,e-1/3)}return mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const n=T0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return mt.fromWorkingColorSpace(dn.copy(this),e),Math.round(ut(dn.r*255,0,255))*65536+Math.round(ut(dn.g*255,0,255))*256+Math.round(ut(dn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,s=dn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Fn){mt.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,i=dn.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(Hl);const n=Du(yr.h,Hl.h,t),i=Du(yr.s,Hl.s,t),s=Du(yr.l,Hl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const dn=new je;je.NAMES=T0;let uS=0;class dl extends Xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=To,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Yh,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==To&&(n.blending=this.blending),this.side!==Hr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$h&&(n.blendSrc=this.blendSrc),this.blendDst!==Yh&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Uo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class A0 extends dl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=c0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new K,Vl=new ye;let hS=0;class Hi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kp,this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vl.fromBufferAttribute(this,t),Vl.applyMatrix3(e),this.setXY(t,Vl.x,Vl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ta(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),i=In(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),i=In(i,this.array),s=In(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kp&&(e.usage=this.usage),e}}class C0 extends Hi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class R0 extends Hi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _i extends Hi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dS=0;const li=new Dt,Qu=new vn,eo=new K,$n=new Ds,sa=new Ds,nn=new K;class dr extends Xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(w0(e)?R0:C0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return Qu.lookAt(e),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _i(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];sa.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors($n.min,sa.min),$n.expandByPoint(nn),nn.addVectors($n.max,sa.max),$n.expandByPoint(nn)):($n.expandByPoint(sa.min),$n.expandByPoint(sa.max))}$n.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)nn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(nn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)nn.fromBufferAttribute(a,c),l&&(eo.fromBufferAttribute(e,c),nn.add(eo)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new K,l[C]=new K;const c=new K,u=new K,h=new K,d=new ye,f=new ye,_=new ye,p=new K,g=new K;function m(C,S,b){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,S),_.fromBufferAttribute(s,b),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(p.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(D),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(D),a[C].add(p),a[S].add(p),a[b].add(p),l[C].add(g),l[S].add(g),l[b].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,S=x.length;C<S;++C){const b=x[C],D=b.start,N=b.count;for(let G=D,V=D+N;G<V;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new K,v=new K,E=new K,M=new K;function w(C){E.fromBufferAttribute(i,C),M.copy(E);const S=a[C];y.copy(S),y.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(M,S);const D=v.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,S=x.length;C<S;++C){const b=x[C],D=b.start,N=b.count;for(let G=D,V=D+N;G<V;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new K,s=new K,o=new K,a=new K,l=new K,c=new K,u=new K,h=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),p=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let p=0,g=l.length;p<g;p++){a.isInterleavedBufferAttribute?f=l[p]*a.data.stride+a.offset:f=l[p]*u;for(let m=0;m<u;m++)d[_++]=c[f++]}return new Hi(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fm=new Dt,Qr=new iS,Gl=new Vf,pm=new K,Wl=new K,ql=new K,Xl=new K,Zu=new K,$l=new K,mm=new K,Yl=new K;class mi extends vn{constructor(e=new dr,t=new A0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){$l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Zu.fromBufferAttribute(h,e),o?$l.addScaledVector(Zu,u):$l.addScaledVector(Zu.sub(t),u))}t.add($l)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gl.copy(n.boundingSphere),Gl.applyMatrix4(s),Qr.copy(e.ray).recast(e.near),!(Gl.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(Gl,pm)===null||Qr.origin.distanceToSquared(pm)>(e.far-e.near)**2))&&(fm.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(fm),!(n.boundingBox!==null&&Qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,p=d.length;_<p;_++){const g=d[_],m=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,E=y;v<E;v+=3){const M=a.getX(v),w=a.getX(v+1),C=a.getX(v+2);i=jl(this,m,e,n,c,u,h,M,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),p=Math.min(a.count,f.start+f.count);for(let g=_,m=p;g<m;g+=3){const x=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);i=jl(this,o,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,p=d.length;_<p;_++){const g=d[_],m=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,E=y;v<E;v+=3){const M=v,w=v+1,C=v+2;i=jl(this,m,e,n,c,u,h,M,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),p=Math.min(l.count,f.start+f.count);for(let g=_,m=p;g<m;g+=3){const x=g,y=g+1,v=g+2;i=jl(this,o,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function fS(r,e,t,n,i,s,o,a){let l;if(e.side===Hn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Hr,a),l===null)return null;Yl.copy(a),Yl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Yl);return c<t.near||c>t.far?null:{distance:c,point:Yl.clone(),object:r}}function jl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Wl),r.getVertexPosition(l,ql),r.getVertexPosition(c,Xl);const u=fS(r,e,t,n,Wl,ql,Xl,mm);if(u){const h=new K;wi.getBarycoord(mm,Wl,ql,Xl,h),i&&(u.uv=wi.getInterpolatedAttribute(i,a,l,c,h,new ye)),s&&(u.uv1=wi.getInterpolatedAttribute(s,a,l,c,h,new ye)),o&&(u.normal=wi.getInterpolatedAttribute(o,a,l,c,h,new K),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new K,materialIndex:0};wi.getNormal(Wl,ql,Xl,d.normal),u.face=d,u.barycoord=h}return u}class fl extends dr{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new _i(c,3)),this.setAttribute("normal",new _i(u,3)),this.setAttribute("uv",new _i(h,2));function _(p,g,m,x,y,v,E,M,w,C,S){const b=v/w,D=E/C,N=v/2,G=E/2,V=M/2,Y=w+1,q=C+1;let X=0,B=0;const se=new K;for(let U=0;U<q;U++){const ge=U*D-G;for(let _e=0;_e<Y;_e++){const we=_e*b-N;se[p]=we*x,se[g]=ge*y,se[m]=V,c.push(se.x,se.y,se.z),se[p]=0,se[g]=0,se[m]=M>0?1:-1,u.push(se.x,se.y,se.z),h.push(_e/w),h.push(1-U/C),X+=1}}for(let U=0;U<C;U++)for(let ge=0;ge<w;ge++){const _e=d+ge+Y*U,we=d+ge+Y*(U+1),F=d+(ge+1)+Y*(U+1),O=d+(ge+1)+Y*U;l.push(_e,we,O),l.push(we,F,O),B+=6}a.addGroup(f,B,S),f+=B,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Go(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const n=Go(r[t]);for(const i in n)e[i]=n[i]}return e}function pS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function P0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const mS={clone:Go,merge:wn};var gS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_S=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends dl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gS,this.fragmentShader=_S,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Go(e.uniforms),this.uniformsGroups=pS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class L0 extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new K,gm=new ye,_m=new ye;class Zn extends L0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Id*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Iu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Id*2*Math.atan(Math.tan(Iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,gm,_m),t.subVectors(_m,gm)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Iu*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const to=-90,no=1;class I0 extends vn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zn(to,no,e,t);i.layers=this.layers,this.add(i);const s=new Zn(to,no,e,t);s.layers=this.layers,this.add(s);const o=new Zn(to,no,e,t);o.layers=this.layers,this.add(o);const a=new Zn(to,no,e,t);a.layers=this.layers,this.add(a);const l=new Zn(to,no,e,t);l.layers=this.layers,this.add(l);const c=new Zn(to,no,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===sr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Gf extends Vn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ko,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class D0 extends Is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fl(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:Go(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:Nr});s.uniforms.tEquirect.value=t;const o=new mi(i,s),a=t.minFilter;return t.minFilter===Ir&&(t.minFilter=Ui),new I0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class ba extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vS={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const g=t.getJointPose(p,n),m=this._getHandJoint(c,p);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ba;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class O0 extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const eh=new K,yS=new K,xS=new Ke;class as{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=eh.subVectors(n,t).cross(yS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(eh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xS.getNormalMatrix(e),i=this.coplanarPoint(eh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Vf,Jl=new K;class Wf{constructor(e=new as,t=new as,n=new as,i=new as,s=new as,o=new as){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],p=i[10],g=i[11],m=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,g-f,v-m).normalize(),n[1].setComponents(l+s,d+c,g+f,v+m).normalize(),n[2].setComponents(l+o,d+u,g+_,v+x).normalize(),n[3].setComponents(l-o,d-u,g-_,v-x).normalize(),n[4].setComponents(l-a,d-h,g-p,v-y).normalize(),t===sr)n[5].setComponents(l+a,d+h,g+p,v+y).normalize();else if(t===Gc)n[5].setComponents(a,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Jl.x=i.normal.x>0?e.max.x:e.min.x,Jl.y=i.normal.y>0?e.max.y:e.min.y,Jl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class F0 extends Vn{constructor(e,t,n,i,s,o,a,l,c,u=Ao){if(u!==Ao&&u!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ao&&(n=Ls),n===void 0&&u===Ho&&(n=zo),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ei,this.minFilter=l!==void 0?l:Ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ye:new K);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new K,i=[],s=[],o=[],a=new K,l=new Dt;for(let f=0;f<=e;f++){const _=f/e;i[f]=this.getTangentAt(_,new K)}s[0]=new K,o[0]=new K;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ut(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ut(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class qf extends qi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ye){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class bS extends qf{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Xf(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Ql=new K,th=new Xf,nh=new Xf,ih=new Xf;class SS extends qi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new K){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Ql.subVectors(i[0],i[1]).add(i[0]),c=Ql);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Ql.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Ql),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);p<1e-4&&(p=1),_<1e-4&&(_=p),g<1e-4&&(g=p),th.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,p,g),nh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,p,g),ih.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,p,g)}else this.curveType==="catmullrom"&&(th.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),nh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ih.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(th.calc(l),nh.calc(l),ih.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new K().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vm(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function wS(r,e){const t=1-r;return t*t*e}function MS(r,e){return 2*(1-r)*r*e}function ES(r,e){return r*r*e}function za(r,e,t,n){return wS(r,e)+MS(r,t)+ES(r,n)}function TS(r,e){const t=1-r;return t*t*t*e}function AS(r,e){const t=1-r;return 3*t*t*r*e}function CS(r,e){return 3*(1-r)*r*r*e}function RS(r,e){return r*r*r*e}function Ha(r,e,t,n,i){return TS(r,e)+AS(r,t)+CS(r,n)+RS(r,i)}class N0 extends qi{constructor(e=new ye,t=new ye,n=new ye,i=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ye){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ha(e,i.x,s.x,o.x,a.x),Ha(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class PS extends qi{constructor(e=new K,t=new K,n=new K,i=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new K){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ha(e,i.x,s.x,o.x,a.x),Ha(e,i.y,s.y,o.y,a.y),Ha(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class U0 extends qi{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class LS extends qi{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new K){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k0 extends qi{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(za(e,i.x,s.x,o.x),za(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class IS extends qi{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(za(e,i.x,s.x,o.x),za(e,i.y,s.y,o.y),za(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B0 extends qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(vm(a,l.x,c.x,u.x,h.x),vm(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ye().fromArray(i))}return this}}var Dd=Object.freeze({__proto__:null,ArcCurve:bS,CatmullRomCurve3:SS,CubicBezierCurve:N0,CubicBezierCurve3:PS,EllipseCurve:qf,LineCurve:U0,LineCurve3:LS,QuadraticBezierCurve:k0,QuadraticBezierCurve3:IS,SplineCurve:B0});class DS extends qi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dd[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Dd[i.type]().fromJSON(i))}return this}}class Ro extends DS{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new U0(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new k0(this.currentPoint.clone(),new ye(e,t),new ye(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new N0(this.currentPoint.clone(),new ye(e,t),new ye(n,i),new ye(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new B0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new qf(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Va extends Ro{constructor(e){super(e),this.uuid=$o(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ro().fromJSON(i))}return this}}class OS{static triangulate(e,t,n=2){const i=t&&t.length,s=i?t[0]*n:e.length;let o=z0(e,0,s,n,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,u,h,d,f,_;if(i&&(o=BS(e,t,o,n)),e.length>80*n){l=u=e[0],c=h=e[1];for(let p=n;p<s;p+=n)d=e[p],f=e[p+1],d<l&&(l=d),f<c&&(c=f),d>u&&(u=d),f>h&&(h=f);_=Math.max(u-l,h-c),_=_!==0?32767/_:0}return nl(o,a,n,l,c,_,0),a}}function z0(r,e,t,n,i){let s,o;if(i===JS(r,e,t,n)>0)for(s=e;s<t;s+=n)o=ym(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=ym(s,r[s],r[s+1],o);return o&&cu(o,o.next)&&(rl(o),o=o.next),o}function Os(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(cu(t,t.next)||Nt(t.prev,t,t.next)===0)){if(rl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function nl(r,e,t,n,i,s,o){if(!r)return;!o&&s&&WS(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?NS(r,n,i,s):FS(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),rl(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=US(Os(r),e,t),nl(r,e,t,n,i,s,2)):o===2&&kS(r,e,t,n,i,s):nl(Os(r),e,t,n,i,s,1);break}}}function FS(r){const e=r.prev,t=r,n=r.next;if(Nt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=f&&go(i,a,s,l,o,c,_.x,_.y)&&Nt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function NS(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Nt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,_=u<h?u<d?u:d:h<d?h:d,p=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,m=Od(f,_,e,t,n),x=Od(p,g,e,t,n);let y=r.prevZ,v=r.nextZ;for(;y&&y.z>=m&&v&&v.z<=x;){if(y.x>=f&&y.x<=p&&y.y>=_&&y.y<=g&&y!==i&&y!==o&&go(a,u,l,h,c,d,y.x,y.y)&&Nt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=p&&v.y>=_&&v.y<=g&&v!==i&&v!==o&&go(a,u,l,h,c,d,v.x,v.y)&&Nt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=p&&y.y>=_&&y.y<=g&&y!==i&&y!==o&&go(a,u,l,h,c,d,y.x,y.y)&&Nt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=p&&v.y>=_&&v.y<=g&&v!==i&&v!==o&&go(a,u,l,h,c,d,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function US(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!cu(i,s)&&H0(i,n,n.next,s)&&il(i,s)&&il(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),rl(n),rl(n.next),n=r=s),n=n.next}while(n!==r);return Os(n)}function kS(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$S(o,a)){let l=V0(o,a);o=Os(o,o.next),l=Os(l,l.next),nl(o,e,t,n,i,s,0),nl(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function BS(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=z0(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(XS(c));for(i.sort(zS),s=0;s<i.length;s++)t=HS(i[s],t);return t}function zS(r,e){return r.x-e.x}function HS(r,e){const t=VS(r,e);if(!t)return e;const n=V0(t,r);return Os(n,n.next),Os(t,t.next)}function VS(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&go(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),il(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&GS(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function GS(r,e){return Nt(r.prev,r,e.prev)<0&&Nt(e.next,r,r.next)<0}function WS(r,e,t,n){let i=r;do i.z===0&&(i.z=Od(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,qS(i)}function qS(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Od(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function XS(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function go(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function $S(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!YS(r,e)&&(il(r,e)&&il(e,r)&&jS(r,e)&&(Nt(r.prev,r,e.prev)||Nt(r,e.prev,e))||cu(r,e)&&Nt(r.prev,r,r.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function cu(r,e){return r.x===e.x&&r.y===e.y}function H0(r,e,t,n){const i=Kl(Nt(r,e,t)),s=Kl(Nt(r,e,n)),o=Kl(Nt(t,n,r)),a=Kl(Nt(t,n,e));return!!(i!==s&&o!==a||i===0&&Zl(r,t,e)||s===0&&Zl(r,n,e)||o===0&&Zl(t,r,n)||a===0&&Zl(t,e,n))}function Zl(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Kl(r){return r>0?1:r<0?-1:0}function YS(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&H0(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function il(r,e){return Nt(r.prev,r,r.next)<0?Nt(r,e,r.next)>=0&&Nt(r,r.prev,e)>=0:Nt(r,e,r.prev)<0||Nt(r,r.next,e)<0}function jS(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function V0(r,e){const t=new Fd(r.i,r.x,r.y),n=new Fd(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ym(r,e,t,n){const i=new Fd(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function rl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Fd(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function JS(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Ts{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Ts.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];xm(e),bm(n,e);let o=e.length;t.forEach(xm);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,bm(n,t[l]);const a=OS.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function xm(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function bm(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Wc extends dr{constructor(e=new Va([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new _i(i,3)),this.setAttribute("uv",new _i(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:QS;let y,v=!1,E,M,w,C;m&&(y=m.getSpacedPoints(u),v=!0,d=!1,E=m.computeFrenetFrames(u,!1),M=new K,w=new K,C=new K),d||(g=0,f=0,_=0,p=0);const S=a.extractPoints(c);let b=S.shape;const D=S.holes;if(!Ts.isClockWise(b)){b=b.reverse();for(let ee=0,J=D.length;ee<J;ee++){const T=D[ee];Ts.isClockWise(T)&&(D[ee]=T.reverse())}}const G=Ts.triangulateShape(b,D),V=b;for(let ee=0,J=D.length;ee<J;ee++){const T=D[ee];b=b.concat(T)}function Y(ee,J,T){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(J,T)}const q=b.length,X=G.length;function B(ee,J,T){let re,ne,z;const H=ee.x-J.x,k=ee.y-J.y,ue=T.x-ee.x,I=T.y-ee.y,R=H*H+k*k,te=H*I-k*ue;if(Math.abs(te)>Number.EPSILON){const le=Math.sqrt(R),de=Math.sqrt(ue*ue+I*I),fe=J.x-k/le,Ee=J.y+H/le,Se=T.x-I/de,Te=T.y+ue/de,Xe=((Se-fe)*I-(Te-Ee)*ue)/(H*I-k*ue);re=fe+H*Xe-ee.x,ne=Ee+k*Xe-ee.y;const be=re*re+ne*ne;if(be<=2)return new ye(re,ne);z=Math.sqrt(be/2)}else{let le=!1;H>Number.EPSILON?ue>Number.EPSILON&&(le=!0):H<-Number.EPSILON?ue<-Number.EPSILON&&(le=!0):Math.sign(k)===Math.sign(I)&&(le=!0),le?(re=-k,ne=H,z=Math.sqrt(R)):(re=H,ne=k,z=Math.sqrt(R/2))}return new ye(re/z,ne/z)}const se=[];for(let ee=0,J=V.length,T=J-1,re=ee+1;ee<J;ee++,T++,re++)T===J&&(T=0),re===J&&(re=0),se[ee]=B(V[ee],V[T],V[re]);const U=[];let ge,_e=se.concat();for(let ee=0,J=D.length;ee<J;ee++){const T=D[ee];ge=[];for(let re=0,ne=T.length,z=ne-1,H=re+1;re<ne;re++,z++,H++)z===ne&&(z=0),H===ne&&(H=0),ge[re]=B(T[re],T[z],T[H]);U.push(ge),_e=_e.concat(ge)}for(let ee=0;ee<g;ee++){const J=ee/g,T=f*Math.cos(J*Math.PI/2),re=_*Math.sin(J*Math.PI/2)+p;for(let ne=0,z=V.length;ne<z;ne++){const H=Y(V[ne],se[ne],re);A(H.x,H.y,-T)}for(let ne=0,z=D.length;ne<z;ne++){const H=D[ne];ge=U[ne];for(let k=0,ue=H.length;k<ue;k++){const I=Y(H[k],ge[k],re);A(I.x,I.y,-T)}}}const we=_+p;for(let ee=0;ee<q;ee++){const J=d?Y(b[ee],_e[ee],we):b[ee];v?(w.copy(E.normals[0]).multiplyScalar(J.x),M.copy(E.binormals[0]).multiplyScalar(J.y),C.copy(y[0]).add(w).add(M),A(C.x,C.y,C.z)):A(J.x,J.y,0)}for(let ee=1;ee<=u;ee++)for(let J=0;J<q;J++){const T=d?Y(b[J],_e[J],we):b[J];v?(w.copy(E.normals[ee]).multiplyScalar(T.x),M.copy(E.binormals[ee]).multiplyScalar(T.y),C.copy(y[ee]).add(w).add(M),A(C.x,C.y,C.z)):A(T.x,T.y,h/u*ee)}for(let ee=g-1;ee>=0;ee--){const J=ee/g,T=f*Math.cos(J*Math.PI/2),re=_*Math.sin(J*Math.PI/2)+p;for(let ne=0,z=V.length;ne<z;ne++){const H=Y(V[ne],se[ne],re);A(H.x,H.y,h+T)}for(let ne=0,z=D.length;ne<z;ne++){const H=D[ne];ge=U[ne];for(let k=0,ue=H.length;k<ue;k++){const I=Y(H[k],ge[k],re);v?A(I.x,I.y+y[u-1].y,y[u-1].x+T):A(I.x,I.y,h+T)}}}F(),O();function F(){const ee=i.length/3;if(d){let J=0,T=q*J;for(let re=0;re<X;re++){const ne=G[re];j(ne[2]+T,ne[1]+T,ne[0]+T)}J=u+g*2,T=q*J;for(let re=0;re<X;re++){const ne=G[re];j(ne[0]+T,ne[1]+T,ne[2]+T)}}else{for(let J=0;J<X;J++){const T=G[J];j(T[2],T[1],T[0])}for(let J=0;J<X;J++){const T=G[J];j(T[0]+q*u,T[1]+q*u,T[2]+q*u)}}n.addGroup(ee,i.length/3-ee,0)}function O(){const ee=i.length/3;let J=0;L(V,J),J+=V.length;for(let T=0,re=D.length;T<re;T++){const ne=D[T];L(ne,J),J+=ne.length}n.addGroup(ee,i.length/3-ee,1)}function L(ee,J){let T=ee.length;for(;--T>=0;){const re=T;let ne=T-1;ne<0&&(ne=ee.length-1);for(let z=0,H=u+g*2;z<H;z++){const k=q*z,ue=q*(z+1),I=J+re+k,R=J+ne+k,te=J+ne+ue,le=J+re+ue;he(I,R,te,le)}}}function A(ee,J,T){l.push(ee),l.push(J),l.push(T)}function j(ee,J,T){$(ee),$(J),$(T);const re=i.length/3,ne=x.generateTopUV(n,i,re-3,re-2,re-1);pe(ne[0]),pe(ne[1]),pe(ne[2])}function he(ee,J,T,re){$(ee),$(J),$(re),$(J),$(T),$(re);const ne=i.length/3,z=x.generateSideWallUV(n,i,ne-6,ne-3,ne-2,ne-1);pe(z[0]),pe(z[1]),pe(z[3]),pe(z[1]),pe(z[2]),pe(z[3])}function $(ee){i.push(l[ee*3+0]),i.push(l[ee*3+1]),i.push(l[ee*3+2])}function pe(ee){s.push(ee.x),s.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ZS(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Dd[i.type]().fromJSON(i)),new Wc(n,e.options)}}const QS={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ye(s,o),new ye(a,l),new ye(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],_=e[i*3+2],p=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ye(o,1-l),new ye(c,1-h),new ye(d,1-_),new ye(p,1-m)]:[new ye(a,1-l),new ye(u,1-h),new ye(f,1-_),new ye(g,1-m)]}};function ZS(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class pl extends dr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],_=[],p=[],g=[];for(let m=0;m<u;m++){const x=m*d-o;for(let y=0;y<c;y++){const v=y*h-s;_.push(v,-x,0),p.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const y=x+c*m,v=x+c*(m+1),E=x+1+c*(m+1),M=x+1+c*m;f.push(y,v,M),f.push(v,E,M)}this.setIndex(f),this.setAttribute("position",new _i(_,3)),this.setAttribute("normal",new _i(p,3)),this.setAttribute("uv",new _i(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.widthSegments,e.heightSegments)}}class KS extends dl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=b0,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ew extends KS{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class tw extends dl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nw extends dl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class iw{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const rw=new iw;class ml{constructor(e){this.manager=e!==void 0?e:rw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ml.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qi={};class sw extends Error{constructor(e,t){super(e),this.response=t}}class ow extends ml{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=qc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Qi[e]!==void 0){Qi[e].push({onLoad:t,onProgress:n,onError:i});return}Qi[e]=[],Qi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Qi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let p=0;const g=new ReadableStream({start(m){x();function x(){h.read().then(({done:y,value:v})=>{if(y)m.close();else{p+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:p,total:f});for(let M=0,w=u.length;M<w;M++){const C=u[M];C.onProgress&&C.onProgress(E)}m.enqueue(v),x()}},y=>{m.error(y)})}}});return new Response(g)}else throw new sw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{qc.add(e,c);const u=Qi[e];delete Qi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Qi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Qi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class aw extends ml{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=tl("img");function l(){u(),qc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class lw extends ml{constructor(e){super(e)}load(e,t,n,i){const s=new Gf;s.colorSpace=Fn;const o=new aw(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class $f extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const rh=new Dt,Sm=new K,wm=new K;class G0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wf,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sm),wm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wm),t.updateMatrixWorld(),rh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mm=new Dt,oa=new K,sh=new K;class cw extends G0{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),oa.setFromMatrixPosition(e.matrixWorld),n.position.copy(oa),sh.copy(n.position),sh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sh),n.updateMatrixWorld(),i.makeTranslation(-oa.x,-oa.y,-oa.z),Mm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mm)}}class uw extends $f{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new cw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yf extends L0{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hw extends G0{constructor(){super(new Yf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Em extends $f{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new hw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dw extends $f{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fw extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class pw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Tm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Tm(){return performance.now()}const Am=new ye;class mw{constructor(e=new ye(1/0,1/0),t=new ye(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Am.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Am).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Kr{constructor(){this.type="ShapePath",this.color=new je,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ro,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const x=[];for(let y=0,v=m.length;y<v;y++){const E=m[y],M=new Va;M.curves=E.curves,x.push(M)}return x}function n(m,x){const y=x.length;let v=!1;for(let E=y-1,M=0;M<y;E=M++){let w=x[E],C=x[M],S=C.x-w.x,b=C.y-w.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(w=x[M],S=-S,C=x[E],b=-b),m.y<w.y||m.y>C.y)continue;if(m.y===w.y){if(m.x===w.x)return!0}else{const D=b*(m.x-w.x)-S*(m.y-w.y);if(D===0)return!0;if(D<0)continue;v=!v}}else{if(m.y!==w.y)continue;if(C.x<=m.x&&m.x<=w.x||w.x<=m.x&&m.x<=C.x)return!0}}return v}const i=Ts.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Va,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],_=0,p;d[_]=void 0,f[_]=[];for(let m=0,x=s.length;m<x;m++)a=s[m],p=a.getPoints(),o=i(p),o=e?!o:o,o?(!u&&d[_]&&_++,d[_]={s:new Va,p},d[_].s.curves=a.curves,u&&_++,f[_]=[]):f[_].push({h:a,p:p[0]});if(!d[0])return t(s);if(d.length>1){let m=!1,x=0;for(let y=0,v=d.length;y<v;y++)h[y]=[];for(let y=0,v=d.length;y<v;y++){const E=f[y];for(let M=0;M<E.length;M++){const w=E[M];let C=!0;for(let S=0;S<d.length;S++)n(w.p,d[S].p)&&(y!==S&&x++,C?(C=!1,h[S].push(w)):m=!0);C&&h[y].push(w)}}x>0&&m===!1&&(f=h)}let g;for(let m=0,x=d.length;m<x;m++){l=d[m].s,c.push(l),g=f[m];for(let y=0,v=g.length;y<v;y++)l.holes.push(g[y].h)}return c}}function Cm(r,e,t,n){const i=gw(n);switch(t){case p0:return r*e;case g0:return r*e;case _0:return r*e*2;case v0:return r*e/i.components*i.byteLength;case kf:return r*e/i.components*i.byteLength;case y0:return r*e*2/i.components*i.byteLength;case Bf:return r*e*2/i.components*i.byteLength;case m0:return r*e*3/i.components*i.byteLength;case Mi:return r*e*4/i.components*i.byteLength;case zf:return r*e*4/i.components*i.byteLength;case yc:case xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bc:case Sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ad:case cd:return Math.max(r,16)*Math.max(e,8)/4;case od:case ld:return Math.max(r,8)*Math.max(e,8)/2;case ud:case hd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case dd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case md:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case gd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case _d:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case vd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case yd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case xd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case bd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case wd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Md:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Td:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case wc:case Ad:case Cd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case x0:case Rd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Pd:case Ld:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gw(r){switch(r){case ur:case h0:return{byteLength:1,components:1};case el:case d0:case qo:return{byteLength:2,components:1};case Nf:case Uf:return{byteLength:2,components:4};case Ls:case Ff:case rr:return{byteLength:4,components:1};case f0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function W0(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function _w(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],p=h[f];p.start<=_.start+_.count+1?_.count=Math.max(_.count,p.start+p.count-_.start):(++d,h[d]=p)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const p=h[f];r.bufferSubData(c,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var vw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yw=`#ifdef USE_ALPHAHASH
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
#endif`,xw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ww=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mw=`#ifdef USE_AOMAP
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
#endif`,Ew=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tw=`#ifdef USE_BATCHING
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
#endif`,Aw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lw=`#ifdef USE_IRIDESCENCE
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
#endif`,Iw=`#ifdef USE_BUMPMAP
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
#endif`,Dw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hw=`#define PI 3.141592653589793
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
} // validated`,Vw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gw=`vec3 transformedNormal = objectNormal;
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
#endif`,Ww=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$w=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yw="gl_FragColor = linearToOutputTexel( gl_FragColor );",jw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jw=`#ifdef USE_ENVMAP
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
#endif`,Qw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zw=`#ifdef USE_ENVMAP
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
#endif`,Kw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
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
}`,oM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cM=`uniform bool receiveShadow;
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
#endif`,uM=`#ifdef USE_ENVMAP
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
#endif`,hM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mM=`PhysicalMaterial material;
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
#endif`,gM=`struct PhysicalMaterial {
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
}`,_M=`
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
#endif`,vM=`#if defined( RE_IndirectDiffuse )
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
#endif`,yM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AM=`#if defined( USE_POINTS_UV )
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
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`#ifdef USE_MORPHTARGETS
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
#endif`,OM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zM=`#ifdef USE_NORMALMAP
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
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$M=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n1=`float getShadowMask() {
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
}`,i1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r1=`#ifdef USE_SKINNING
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
#endif`,s1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o1=`#ifdef USE_SKINNING
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
#endif`,a1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h1=`#ifdef USE_TRANSMISSION
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
#endif`,d1=`#ifdef USE_TRANSMISSION
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v1=`uniform sampler2D t2D;
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`#include <common>
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
}`,M1=`#if DEPTH_PACKING == 3200
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
}`,E1=`#define DISTANCE
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
}`,T1=`#define DISTANCE
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`uniform float scale;
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
}`,P1=`uniform vec3 diffuse;
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
}`,L1=`#include <common>
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
}`,I1=`uniform vec3 diffuse;
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
}`,D1=`#define LAMBERT
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
}`,O1=`#define LAMBERT
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
}`,F1=`#define MATCAP
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
}`,N1=`#define MATCAP
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
}`,U1=`#define NORMAL
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
}`,k1=`#define NORMAL
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
}`,B1=`#define PHONG
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
}`,z1=`#define PHONG
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
}`,H1=`#define STANDARD
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
}`,V1=`#define STANDARD
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
}`,G1=`#define TOON
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
}`,W1=`#define TOON
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
}`,q1=`uniform float size;
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
}`,X1=`uniform vec3 diffuse;
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
}`,$1=`#include <common>
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
}`,Y1=`uniform vec3 color;
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
}`,j1=`uniform float rotation;
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
}`,J1=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:vw,alphahash_pars_fragment:yw,alphamap_fragment:xw,alphamap_pars_fragment:bw,alphatest_fragment:Sw,alphatest_pars_fragment:ww,aomap_fragment:Mw,aomap_pars_fragment:Ew,batching_pars_vertex:Tw,batching_vertex:Aw,begin_vertex:Cw,beginnormal_vertex:Rw,bsdfs:Pw,iridescence_fragment:Lw,bumpmap_pars_fragment:Iw,clipping_planes_fragment:Dw,clipping_planes_pars_fragment:Ow,clipping_planes_pars_vertex:Fw,clipping_planes_vertex:Nw,color_fragment:Uw,color_pars_fragment:kw,color_pars_vertex:Bw,color_vertex:zw,common:Hw,cube_uv_reflection_fragment:Vw,defaultnormal_vertex:Gw,displacementmap_pars_vertex:Ww,displacementmap_vertex:qw,emissivemap_fragment:Xw,emissivemap_pars_fragment:$w,colorspace_fragment:Yw,colorspace_pars_fragment:jw,envmap_fragment:Jw,envmap_common_pars_fragment:Qw,envmap_pars_fragment:Zw,envmap_pars_vertex:Kw,envmap_physical_pars_fragment:uM,envmap_vertex:eM,fog_vertex:tM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:rM,gradientmap_pars_fragment:sM,lightmap_pars_fragment:oM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:lM,lights_pars_begin:cM,lights_toon_fragment:hM,lights_toon_pars_fragment:dM,lights_phong_fragment:fM,lights_phong_pars_fragment:pM,lights_physical_fragment:mM,lights_physical_pars_fragment:gM,lights_fragment_begin:_M,lights_fragment_maps:vM,lights_fragment_end:yM,logdepthbuf_fragment:xM,logdepthbuf_pars_fragment:bM,logdepthbuf_pars_vertex:SM,logdepthbuf_vertex:wM,map_fragment:MM,map_pars_fragment:EM,map_particle_fragment:TM,map_particle_pars_fragment:AM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:RM,morphinstance_vertex:PM,morphcolor_vertex:LM,morphnormal_vertex:IM,morphtarget_pars_vertex:DM,morphtarget_vertex:OM,normal_fragment_begin:FM,normal_fragment_maps:NM,normal_pars_fragment:UM,normal_pars_vertex:kM,normal_vertex:BM,normalmap_pars_fragment:zM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:VM,clearcoat_pars_fragment:GM,iridescence_pars_fragment:WM,opaque_fragment:qM,packing:XM,premultiplied_alpha_fragment:$M,project_vertex:YM,dithering_fragment:jM,dithering_pars_fragment:JM,roughnessmap_fragment:QM,roughnessmap_pars_fragment:ZM,shadowmap_pars_fragment:KM,shadowmap_pars_vertex:e1,shadowmap_vertex:t1,shadowmask_pars_fragment:n1,skinbase_vertex:i1,skinning_pars_vertex:r1,skinning_vertex:s1,skinnormal_vertex:o1,specularmap_fragment:a1,specularmap_pars_fragment:l1,tonemapping_fragment:c1,tonemapping_pars_fragment:u1,transmission_fragment:h1,transmission_pars_fragment:d1,uv_pars_fragment:f1,uv_pars_vertex:p1,uv_vertex:m1,worldpos_vertex:g1,background_vert:_1,background_frag:v1,backgroundCube_vert:y1,backgroundCube_frag:x1,cube_vert:b1,cube_frag:S1,depth_vert:w1,depth_frag:M1,distanceRGBA_vert:E1,distanceRGBA_frag:T1,equirect_vert:A1,equirect_frag:C1,linedashed_vert:R1,linedashed_frag:P1,meshbasic_vert:L1,meshbasic_frag:I1,meshlambert_vert:D1,meshlambert_frag:O1,meshmatcap_vert:F1,meshmatcap_frag:N1,meshnormal_vert:U1,meshnormal_frag:k1,meshphong_vert:B1,meshphong_frag:z1,meshphysical_vert:H1,meshphysical_frag:V1,meshtoon_vert:G1,meshtoon_frag:W1,points_vert:q1,points_frag:X1,shadow_vert:$1,shadow_frag:Y1,sprite_vert:j1,sprite_frag:J1},Ie={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Ii={basic:{uniforms:wn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:wn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:wn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:wn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:wn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:wn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:wn([Ie.points,Ie.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:wn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:wn([Ie.common,Ie.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:wn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:wn([Ie.sprite,Ie.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:wn([Ie.common,Ie.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:wn([Ie.lights,Ie.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ii.physical={uniforms:wn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const ec={r:0,b:0,g:0},es=new Wi,Q1=new Dt;function Z1(r,e,t,n,i,s,o){const a=new je(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function p(y){let v=!1;const E=_(y);E===null?m(a,l):E&&E.isColor&&(m(E,1),v=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===lu)?(u===void 0&&(u=new mi(new fl(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:Go(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),es.copy(v.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(es)),u.material.toneMapped=mt.getTransfer(E.colorSpace)!==bt,(h!==E||d!==E.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,f=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new mi(new pl(2,2),new hr({name:"BackgroundMaterial",uniforms:Go(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=mt.getTransfer(E.colorSpace)!==bt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(ec,P0(r)),n.buffers.color.setClear(ec.r,ec.g,ec.b,v,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:p,addToRenderList:g,dispose:x}}function K1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(b,D,N,G,V){let Y=!1;const q=h(G,N,D);s!==q&&(s=q,c(s.object)),Y=f(b,G,N,V),Y&&_(b,G,N,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(b,D,N,G),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function u(b){return r.deleteVertexArray(b)}function h(b,D,N){const G=N.wireframe===!0;let V=n[b.id];V===void 0&&(V={},n[b.id]=V);let Y=V[D.id];Y===void 0&&(Y={},V[D.id]=Y);let q=Y[G];return q===void 0&&(q=d(l()),Y[G]=q),q}function d(b){const D=[],N=[],G=[];for(let V=0;V<t;V++)D[V]=0,N[V]=0,G[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:G,object:b,attributes:{},index:null}}function f(b,D,N,G){const V=s.attributes,Y=D.attributes;let q=0;const X=N.getAttributes();for(const B in X)if(X[B].location>=0){const U=V[B];let ge=Y[B];if(ge===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor)),U===void 0||U.attribute!==ge||ge&&U.data!==ge.data)return!0;q++}return s.attributesNum!==q||s.index!==G}function _(b,D,N,G){const V={},Y=D.attributes;let q=0;const X=N.getAttributes();for(const B in X)if(X[B].location>=0){let U=Y[B];U===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(U=b.instanceColor));const ge={};ge.attribute=U,U&&U.data&&(ge.data=U.data),V[B]=ge,q++}s.attributes=V,s.attributesNum=q,s.index=G}function p(){const b=s.newAttributes;for(let D=0,N=b.length;D<N;D++)b[D]=0}function g(b){m(b,0)}function m(b,D){const N=s.newAttributes,G=s.enabledAttributes,V=s.attributeDivisors;N[b]=1,G[b]===0&&(r.enableVertexAttribArray(b),G[b]=1),V[b]!==D&&(r.vertexAttribDivisor(b,D),V[b]=D)}function x(){const b=s.newAttributes,D=s.enabledAttributes;for(let N=0,G=D.length;N<G;N++)D[N]!==b[N]&&(r.disableVertexAttribArray(N),D[N]=0)}function y(b,D,N,G,V,Y,q){q===!0?r.vertexAttribIPointer(b,D,N,V,Y):r.vertexAttribPointer(b,D,N,G,V,Y)}function v(b,D,N,G){p();const V=G.attributes,Y=N.getAttributes(),q=D.defaultAttributeValues;for(const X in Y){const B=Y[X];if(B.location>=0){let se=V[X];if(se===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){const U=se.normalized,ge=se.itemSize,_e=e.get(se);if(_e===void 0)continue;const we=_e.buffer,F=_e.type,O=_e.bytesPerElement,L=F===r.INT||F===r.UNSIGNED_INT||se.gpuType===Ff;if(se.isInterleavedBufferAttribute){const A=se.data,j=A.stride,he=se.offset;if(A.isInstancedInterleavedBuffer){for(let $=0;$<B.locationSize;$++)m(B.location+$,A.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let $=0;$<B.locationSize;$++)g(B.location+$);r.bindBuffer(r.ARRAY_BUFFER,we);for(let $=0;$<B.locationSize;$++)y(B.location+$,ge/B.locationSize,F,U,j*O,(he+ge/B.locationSize*$)*O,L)}else{if(se.isInstancedBufferAttribute){for(let A=0;A<B.locationSize;A++)m(B.location+A,se.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let A=0;A<B.locationSize;A++)g(B.location+A);r.bindBuffer(r.ARRAY_BUFFER,we);for(let A=0;A<B.locationSize;A++)y(B.location+A,ge/B.locationSize,F,U,ge*O,ge/B.locationSize*A*O,L)}}else if(q!==void 0){const U=q[X];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(B.location,U);break;case 3:r.vertexAttrib3fv(B.location,U);break;case 4:r.vertexAttrib4fv(B.location,U);break;default:r.vertexAttrib1fv(B.location,U)}}}}x()}function E(){C();for(const b in n){const D=n[b];for(const N in D){const G=D[N];for(const V in G)u(G[V].object),delete G[V];delete D[N]}delete n[b]}}function M(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const N in D){const G=D[N];for(const V in G)u(G[V].object),delete G[V];delete D[N]}delete n[b.id]}function w(b){for(const D in n){const N=n[D];if(N[b.id]===void 0)continue;const G=N[b.id];for(const V in G)u(G[V].object),delete G[V];delete N[b.id]}}function C(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:p,enableAttribute:g,disableUnusedAttributes:x}}function eE(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let p=0;p<h;p++)_+=u[p]*d[p];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Mi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ur&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==rr&&!C)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:E,maxSamples:M}}function nE(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new as,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,p=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!g)s?u(null):c();else{const x=s?0:n,y=x*4;let v=m.clippingState||null;l.value=v,v=u(_,d,y,f);for(let E=0;E!==y;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const p=h!==null?h.length:0;let g=null;if(p!==0){if(g=l.value,_!==!0||g===null){const m=f+p*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,v=f;y!==p;++y,v+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,g}}function iE(r){let e=new WeakMap;function t(o,a){return a===nd?o.mapping=ko:a===id&&(o.mapping=Bo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===nd||a===id)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new D0(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const _o=4,Rm=[.125,.215,.35,.446,.526,.582],us=20,oh=new Yf,Pm=new je;let ah=null,lh=0,ch=0,uh=!1;const ls=(1+Math.sqrt(5))/2,io=1/ls,Lm=[new K(-ls,io,0),new K(ls,io,0),new K(-io,0,ls),new K(io,0,ls),new K(0,ls,-io),new K(0,ls,io),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],rE=new K;class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=rE}=s;ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,lh,ch),this._renderer.xr.enabled=uh,e.scissorTest=!1,tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ko||e.mapping===Bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:qo,format:Mi,colorSpace:Vo,depthBuffer:!1},i=Dm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dm(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sE(s)),this._blurMaterial=oE(s,e,t)}return i}_compileMaterial(e){const t=new mi(this._lodPlanes[0],e);this._renderer.compile(t,oh)}_sceneToCubeUV(e,t,n,i,s){const l=new Zn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Pm),h.toneMapping=Ur,h.autoClear=!1;const _=new A0({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),p=new mi(new fl,_);let g=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,g=!0):(_.color.copy(Pm),g=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const v=this._cubeSize;tc(i,y*v,x>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(p,l),h.render(e,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ko||e.mapping===Bo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Om());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new mi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;tc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,oh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Lm[(i-s-1)%Lm.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new mi(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*us-1),p=s/_,g=isFinite(s)?1+Math.floor(u*p):us;g>us&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${us}`);const m=[];let x=0;for(let w=0;w<us;++w){const C=w/p,S=Math.exp(-C*C/2);m.push(S),w===0?x+=S:w<g&&(x+=2*S)}for(let w=0;w<m.length;w++)m[w]=m[w]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const v=this._sizeLods[i],E=3*v*(i>y-_o?i-y+_o:0),M=4*(this._cubeSize-v);tc(t,E,M,3*v,2*v),l.setRenderTarget(t),l.render(h,oh)}}function sE(r){const e=[],t=[],n=[];let i=r;const s=r-_o+1+Rm.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-_o?l=Rm[o-r+_o-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,p=3,g=2,m=1,x=new Float32Array(p*_*f),y=new Float32Array(g*_*f),v=new Float32Array(m*_*f);for(let M=0;M<f;M++){const w=M%3*2/3-1,C=M>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];x.set(S,p*_*M),y.set(d,g*_*M);const b=[M,M,M,M,M,M];v.set(b,m*_*M)}const E=new dr;E.setAttribute("position",new Hi(x,p)),E.setAttribute("uv",new Hi(y,g)),E.setAttribute("faceIndex",new Hi(v,m)),e.push(E),i>_o&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dm(r,e,t){const n=new Is(r,e,t);return n.texture.mapping=lu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function oE(r,e,t){const n=new Float32Array(us),i=new K(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jf(),fragmentShader:`

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
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Om(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jf(),fragmentShader:`

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
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Fm(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function jf(){return`

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
	`}function aE(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===nd||l===id,u=l===ko||l===Bo;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Im(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Im(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function lE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&os("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cE(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let p=0;if(f!==null){const x=f.array;p=f.version;for(let y=0,v=x.length;y<v;y+=3){const E=x[y+0],M=x[y+1],w=x[y+2];d.push(E,M,M,w,w,E)}}else if(_!==void 0){const x=_.array;p=_.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const E=y+0,M=y+1,w=y+2;d.push(E,M,M,w,w,E)}}else return;const g=new(w0(d)?R0:C0)(d,1);g.version=p;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function uE(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*o,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let g=0;for(let m=0;m<_;m++)g+=f[m];t.update(g,n,1)}function h(d,f,_,p){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],p[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,p,0,_);let m=0;for(let x=0;x<_;x++)m+=f[x]*p[x];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function hE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function dE(r,e,t){const n=new WeakMap,i=new St;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),p===!0&&(v=2),g===!0&&(v=3);let E=a.attributes.position.count*v,M=1;E>e.maxTextureSize&&(M=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*M*4*h),C=new M0(w,E,M,h);C.type=rr,C.needsUpdate=!0;const S=v*4;for(let D=0;D<h;D++){const N=m[D],G=x[D],V=y[D],Y=E*M*4*D;for(let q=0;q<N.count;q++){const X=q*S;_===!0&&(i.fromBufferAttribute(N,q),w[Y+X+0]=i.x,w[Y+X+1]=i.y,w[Y+X+2]=i.z,w[Y+X+3]=0),p===!0&&(i.fromBufferAttribute(G,q),w[Y+X+4]=i.x,w[Y+X+5]=i.y,w[Y+X+6]=i.z,w[Y+X+7]=0),g===!0&&(i.fromBufferAttribute(V,q),w[Y+X+8]=i.x,w[Y+X+9]=i.y,w[Y+X+10]=i.z,w[Y+X+11]=V.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new ye(E,M)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const p=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function fE(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const q0=new Vn,Nm=new F0(1,1),X0=new M0,$0=new tS,Y0=new Gf,Um=[],km=[],Bm=new Float32Array(16),zm=new Float32Array(9),Hm=new Float32Array(4);function Yo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Um[i];if(s===void 0&&(s=new Float32Array(i),Um[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function uu(r,e){let t=km[e];t===void 0&&(t=new Int32Array(e),km[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function pE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function mE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function gE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function _E(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function vE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Hm.set(n),r.uniformMatrix2fv(this.addr,!1,Hm),tn(t,n)}}function yE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;zm.set(n),r.uniformMatrix3fv(this.addr,!1,zm),tn(t,n)}}function xE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Bm.set(n),r.uniformMatrix4fv(this.addr,!1,Bm),tn(t,n)}}function bE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function SE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function wE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function ME(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function EE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function TE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function AE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function CE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function RE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Nm.compareFunction=S0,s=Nm):s=q0,t.setTexture2D(e||s,i)}function PE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$0,i)}function LE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Y0,i)}function IE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||X0,i)}function DE(r){switch(r){case 5126:return pE;case 35664:return mE;case 35665:return gE;case 35666:return _E;case 35674:return vE;case 35675:return yE;case 35676:return xE;case 5124:case 35670:return bE;case 35667:case 35671:return SE;case 35668:case 35672:return wE;case 35669:case 35673:return ME;case 5125:return EE;case 36294:return TE;case 36295:return AE;case 36296:return CE;case 35678:case 36198:case 36298:case 36306:case 35682:return RE;case 35679:case 36299:case 36307:return PE;case 35680:case 36300:case 36308:case 36293:return LE;case 36289:case 36303:case 36311:case 36292:return IE}}function OE(r,e){r.uniform1fv(this.addr,e)}function FE(r,e){const t=Yo(e,this.size,2);r.uniform2fv(this.addr,t)}function NE(r,e){const t=Yo(e,this.size,3);r.uniform3fv(this.addr,t)}function UE(r,e){const t=Yo(e,this.size,4);r.uniform4fv(this.addr,t)}function kE(r,e){const t=Yo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function BE(r,e){const t=Yo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function zE(r,e){const t=Yo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function HE(r,e){r.uniform1iv(this.addr,e)}function VE(r,e){r.uniform2iv(this.addr,e)}function GE(r,e){r.uniform3iv(this.addr,e)}function WE(r,e){r.uniform4iv(this.addr,e)}function qE(r,e){r.uniform1uiv(this.addr,e)}function XE(r,e){r.uniform2uiv(this.addr,e)}function $E(r,e){r.uniform3uiv(this.addr,e)}function YE(r,e){r.uniform4uiv(this.addr,e)}function jE(r,e,t){const n=this.cache,i=e.length,s=uu(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||q0,s[o])}function JE(r,e,t){const n=this.cache,i=e.length,s=uu(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||$0,s[o])}function QE(r,e,t){const n=this.cache,i=e.length,s=uu(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Y0,s[o])}function ZE(r,e,t){const n=this.cache,i=e.length,s=uu(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||X0,s[o])}function KE(r){switch(r){case 5126:return OE;case 35664:return FE;case 35665:return NE;case 35666:return UE;case 35674:return kE;case 35675:return BE;case 35676:return zE;case 5124:case 35670:return HE;case 35667:case 35671:return VE;case 35668:case 35672:return GE;case 35669:case 35673:return WE;case 5125:return qE;case 36294:return XE;case 36295:return $E;case 36296:return YE;case 35678:case 36198:case 36298:case 36306:case 35682:return jE;case 35679:case 36299:case 36307:return JE;case 35680:case 36300:case 36308:case 36293:return QE;case 36289:case 36303:case 36311:case 36292:return ZE}}class eT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=DE(t.type)}}class tT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KE(t.type)}}class nT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function Vm(r,e){r.seq.push(e),r.map[e.id]=e}function iT(r,e,t){const n=r.name,i=n.length;for(hh.lastIndex=0;;){const s=hh.exec(n),o=hh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Vm(t,c===void 0?new eT(a,r,e):new tT(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new nT(a),Vm(t,h)),t=h}}}class Mc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);iT(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Gm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const rT=37297;let sT=0;function oT(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Wm=new Ke;function aT(r){mt._getMatrix(Wm,mt.workingColorSpace,r);const e=`mat3( ${Wm.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(r)){case Vc:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function qm(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+oT(r.getShaderSource(e),o)}else return i}function lT(r,e){const t=aT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cT(r,e){let t;switch(e){case Ab:t="Linear";break;case Cb:t="Reinhard";break;case Rb:t="Cineon";break;case Pb:t="ACESFilmic";break;case Ib:t="AgX";break;case Db:t="Neutral";break;case Lb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new K;function uT(){mt.getLuminanceCoefficients(nc);const r=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function dT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Sa(r){return r!==""}function Xm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $m(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(r){return r.replace(pT,gT)}const mT=new Map;function gT(r,e){let t=st[e];if(t===void 0){const n=mT.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nd(t)}const _T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ym(r){return r.replace(_T,vT)}function vT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function jm(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function yT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===l0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ob?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function xT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ko:case Bo:e="ENVMAP_TYPE_CUBE";break;case lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Bo:e="ENVMAP_MODE_REFRACTION";break}return e}function ST(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case c0:e="ENVMAP_BLENDING_MULTIPLY";break;case Eb:e="ENVMAP_BLENDING_MIX";break;case Tb:e="ENVMAP_BLENDING_ADD";break}return e}function wT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function MT(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=yT(t),c=xT(t),u=bT(t),h=ST(t),d=wT(t),f=hT(t),_=dT(s),p=i.createProgram();let g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Sa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Sa).join(`
`),m.length>0&&(m+=`
`)):(g=[jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),m=[jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ur?"#define TONE_MAPPING":"",t.toneMapping!==Ur?st.tonemapping_pars_fragment:"",t.toneMapping!==Ur?cT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,lT("linearToOutputTexel",t.outputColorSpace),uT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),o=Nd(o),o=Xm(o,t),o=$m(o,t),a=Nd(a),a=Xm(a,t),a=$m(a,t),o=Ym(o),a=Ym(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+g+o,v=x+m+a,E=Gm(i,i.VERTEX_SHADER,y),M=Gm(i,i.FRAGMENT_SHADER,v);i.attachShader(p,E),i.attachShader(p,M),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function w(D){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(p).trim(),G=i.getShaderInfoLog(E).trim(),V=i.getShaderInfoLog(M).trim();let Y=!0,q=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,E,M);else{const X=qm(i,E,"vertex"),B=qm(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+X+`
`+B)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(G===""||V==="")&&(q=!1);q&&(D.diagnostics={runnable:Y,programLog:N,vertexShader:{log:G,prefix:g},fragmentShader:{log:V,prefix:m}})}i.deleteShader(E),i.deleteShader(M),C=new Mc(i,p),S=fT(i,p)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(p,rT)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=M,this}let ET=0;class TT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new AT(e),t.set(e,n)),n}}class AT{constructor(e){this.id=ET++,this.code=e,this.usedTimes=0}}function CT(r,e,t,n,i,s,o){const a=new E0,l=new TT,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,D,N,G){const V=N.fog,Y=G.geometry,q=S.isMeshStandardMaterial?N.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),B=X&&X.mapping===lu?X.image.height:null,se=_[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const U=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ge=U!==void 0?U.length:0;let _e=0;Y.morphAttributes.position!==void 0&&(_e=1),Y.morphAttributes.normal!==void 0&&(_e=2),Y.morphAttributes.color!==void 0&&(_e=3);let we,F,O,L;if(se){const Oe=Ii[se];we=Oe.vertexShader,F=Oe.fragmentShader}else we=S.vertexShader,F=S.fragmentShader,l.update(S),O=l.getVertexShaderID(S),L=l.getFragmentShaderID(S);const A=r.getRenderTarget(),j=r.state.buffers.depth.getReversed(),he=G.isInstancedMesh===!0,$=G.isBatchedMesh===!0,pe=!!S.map,ee=!!S.matcap,J=!!X,T=!!S.aoMap,re=!!S.lightMap,ne=!!S.bumpMap,z=!!S.normalMap,H=!!S.displacementMap,k=!!S.emissiveMap,ue=!!S.metalnessMap,I=!!S.roughnessMap,R=S.anisotropy>0,te=S.clearcoat>0,le=S.dispersion>0,de=S.iridescence>0,fe=S.sheen>0,Ee=S.transmission>0,Se=R&&!!S.anisotropyMap,Te=te&&!!S.clearcoatMap,Xe=te&&!!S.clearcoatNormalMap,be=te&&!!S.clearcoatRoughnessMap,Me=de&&!!S.iridescenceMap,qe=de&&!!S.iridescenceThicknessMap,He=fe&&!!S.sheenColorMap,Fe=fe&&!!S.sheenRoughnessMap,it=!!S.specularMap,Je=!!S.specularColorMap,dt=!!S.specularIntensityMap,W=Ee&&!!S.transmissionMap,Ce=Ee&&!!S.thicknessMap,ce=!!S.gradientMap,me=!!S.alphaMap,Ae=S.alphaTest>0,Re=!!S.alphaHash,Qe=!!S.extensions;let ft=Ur;S.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ft=r.toneMapping);const Ut={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:we,fragmentShader:F,defines:S.defines,customVertexShaderID:O,customFragmentShaderID:L,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:$,batchingColor:$&&G._colorsTexture!==null,instancing:he,instancingColor:he&&G.instanceColor!==null,instancingMorph:he&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:A===null?r.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Vo,alphaToCoverage:!!S.alphaToCoverage,map:pe,matcap:ee,envMap:J,envMapMode:J&&X.mapping,envMapCubeUVHeight:B,aoMap:T,lightMap:re,bumpMap:ne,normalMap:z,displacementMap:d&&H,emissiveMap:k,normalMapObjectSpace:z&&S.normalMapType===Ub,normalMapTangentSpace:z&&S.normalMapType===b0,metalnessMap:ue,roughnessMap:I,anisotropy:R,anisotropyMap:Se,clearcoat:te,clearcoatMap:Te,clearcoatNormalMap:Xe,clearcoatRoughnessMap:be,dispersion:le,iridescence:de,iridescenceMap:Me,iridescenceThicknessMap:qe,sheen:fe,sheenColorMap:He,sheenRoughnessMap:Fe,specularMap:it,specularColorMap:Je,specularIntensityMap:dt,transmission:Ee,transmissionMap:W,thicknessMap:Ce,gradientMap:ce,opaque:S.transparent===!1&&S.blending===To&&S.alphaToCoverage===!1,alphaMap:me,alphaTest:Ae,alphaHash:Re,combine:S.combine,mapUv:pe&&p(S.map.channel),aoMapUv:T&&p(S.aoMap.channel),lightMapUv:re&&p(S.lightMap.channel),bumpMapUv:ne&&p(S.bumpMap.channel),normalMapUv:z&&p(S.normalMap.channel),displacementMapUv:H&&p(S.displacementMap.channel),emissiveMapUv:k&&p(S.emissiveMap.channel),metalnessMapUv:ue&&p(S.metalnessMap.channel),roughnessMapUv:I&&p(S.roughnessMap.channel),anisotropyMapUv:Se&&p(S.anisotropyMap.channel),clearcoatMapUv:Te&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:He&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&p(S.sheenRoughnessMap.channel),specularMapUv:it&&p(S.specularMap.channel),specularColorMapUv:Je&&p(S.specularColorMap.channel),specularIntensityMapUv:dt&&p(S.specularIntensityMap.channel),transmissionMapUv:W&&p(S.transmissionMap.channel),thicknessMapUv:Ce&&p(S.thicknessMap.channel),alphaMapUv:me&&p(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(z||R),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(pe||me),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:j,skinning:G.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:_e,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:pe&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===bt,decodeVideoTextureEmissive:k&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Oi,flipSided:S.side===Hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Qe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&S.extensions.multiDraw===!0||$)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function m(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)b.push(D),b.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(x(b,S),y(b,S),b.push(r.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function y(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const b=_[S.type];let D;if(b){const N=Ii[b];D=mS.clone(N.uniforms)}else D=S.uniforms;return D}function E(S,b){let D;for(let N=0,G=u.length;N<G;N++){const V=u[N];if(V.cacheKey===b){D=V,++D.usedTimes;break}}return D===void 0&&(D=new MT(r,b,S,s),u.push(D)),D}function M(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:M,releaseShaderCache:w,programs:u,dispose:C}}function RT(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function PT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Jm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Qm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,_,p,g){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:p,group:g},r[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=p,m.group=g),e++,m}function a(h,d,f,_,p,g){const m=o(h,d,f,_,p,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(h,d,f,_,p,g){const m=o(h,d,f,_,p,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||PT),n.length>1&&n.sort(d||Jm),i.length>1&&i.sort(d||Jm)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function LT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Qm,r.set(n,[o])):i>=s.length?(o=new Qm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function IT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new je};break;case"SpotLight":t={position:new K,direction:new K,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function DT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let OT=0;function FT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function NT(r){const e=new IT,t=DT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);const i=new K,s=new Dt,o=new Dt;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,_=0,p=0,g=0,m=0,x=0,y=0,v=0,E=0,M=0,w=0;c.sort(FT);for(let S=0,b=c.length;S<b;S++){const D=c[S],N=D.color,G=D.intensity,V=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=N.r*G,h+=N.g*G,d+=N.b*G;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],G);w++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,B=t.get(D);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=D.shadow.matrix,x++}n.directional[f]=q,f++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(N).multiplyScalar(G),q.distance=V,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[p]=q;const X=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,X.updateMatrices(D),D.castShadow&&M++),n.spotLightMatrix[p]=X.matrix,D.castShadow){const B=t.get(D);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,n.spotShadow[p]=B,n.spotShadowMap[p]=Y,v++}p++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(N).multiplyScalar(G),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=q,g++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const X=D.shadow,B=t.get(D);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,B.shadowCameraNear=X.camera.near,B.shadowCameraFar=X.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=D.shadow.matrix,y++}n.point[_]=q,_++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(G),q.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[m]=q,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==p||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==E||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=p,n.rectArea.length=g,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+E-M,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,C.directionalLength=f,C.pointLength=_,C.spotLength=p,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=E,C.numLightProbes=w,n.version=OT++)}function l(c,u){let h=0,d=0,f=0,_=0,p=0;const g=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const y=c[m];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),h++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const v=n.hemi[p];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function Zm(r){const e=new NT(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function UT(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Zm(r),e.set(i,[a])):s>=o.length?(a=new Zm(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const kT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BT=`uniform sampler2D shadow_pass;
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
}`;function zT(r,e,t){let n=new Wf;const i=new ye,s=new ye,o=new St,a=new tw({depthPacking:Nb}),l=new nw,c={},u=t.maxTextureSize,h={[Hr]:Hn,[Hn]:Hr,[Oi]:Oi},d=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:kT,fragmentShader:BT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new dr;_.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new mi(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l0;let m=this.type;this.render=function(M,w,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const S=r.getRenderTarget(),b=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Nr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const G=m!==Ki&&this.type===Ki,V=m===Ki&&this.type!==Ki;for(let Y=0,q=M.length;Y<q;Y++){const X=M[Y],B=X.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const se=B.getFrameExtents();if(i.multiply(se),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/se.x),i.x=s.x*se.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/se.y),i.y=s.y*se.y,B.mapSize.y=s.y)),B.map===null||G===!0||V===!0){const ge=this.type!==Ki?{minFilter:Ei,magFilter:Ei}:{};B.map!==null&&B.map.dispose(),B.map=new Is(i.x,i.y,ge),B.map.texture.name=X.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const U=B.getViewportCount();for(let ge=0;ge<U;ge++){const _e=B.getViewport(ge);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),N.viewport(o),B.updateMatrices(X,ge),n=B.getFrustum(),v(w,C,B.camera,X,this.type)}B.isPointLightShadow!==!0&&this.type===Ki&&x(B,C),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(S,b,D)};function x(M,w){const C=e.update(p);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Is(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(w,null,C,d,p,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(w,null,C,f,p,null)}function y(M,w,C,S){let b=null;const D=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)b=D;else if(b=C.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=b.uuid,G=w.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let Y=V[G];Y===void 0&&(Y=b.clone(),V[G]=Y,w.addEventListener("dispose",E)),b=Y}if(b.visible=w.visible,b.wireframe=w.wireframe,S===Ki?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=r.properties.get(b);N.light=C}return b}function v(M,w,C,S,b){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===Ki)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const G=e.update(M),V=M.material;if(Array.isArray(V)){const Y=G.groups;for(let q=0,X=Y.length;q<X;q++){const B=Y[q],se=V[B.materialIndex];if(se&&se.visible){const U=y(M,se,S,b);M.onBeforeShadow(r,M,w,C,G,U,B),r.renderBufferDirect(C,null,G,U,M,B),M.onAfterShadow(r,M,w,C,G,U,B)}}}else if(V.visible){const Y=y(M,V,S,b);M.onBeforeShadow(r,M,w,C,G,Y,null),r.renderBufferDirect(C,null,G,Y,M,null),M.onAfterShadow(r,M,w,C,G,Y,null)}}const N=M.children;for(let G=0,V=N.length;G<V;G++)v(N[G],w,C,S,b)}function E(M){M.target.removeEventListener("dispose",E);for(const C in c){const S=c[C],b=M.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const HT={[jh]:Jh,[Qh]:ed,[Zh]:td,[Uo]:Kh,[Jh]:jh,[ed]:Qh,[td]:Zh,[Kh]:Uo};function VT(r,e){function t(){let W=!1;const Ce=new St;let ce=null;const me=new St(0,0,0,0);return{setMask:function(Ae){ce!==Ae&&!W&&(r.colorMask(Ae,Ae,Ae,Ae),ce=Ae)},setLocked:function(Ae){W=Ae},setClear:function(Ae,Re,Qe,ft,Ut){Ut===!0&&(Ae*=ft,Re*=ft,Qe*=ft),Ce.set(Ae,Re,Qe,ft),me.equals(Ce)===!1&&(r.clearColor(Ae,Re,Qe,ft),me.copy(Ce))},reset:function(){W=!1,ce=null,me.set(-1,0,0,0)}}}function n(){let W=!1,Ce=!1,ce=null,me=null,Ae=null;return{setReversed:function(Re){if(Ce!==Re){const Qe=e.get("EXT_clip_control");Ce?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const ft=Ae;Ae=null,this.setClear(ft)}Ce=Re},getReversed:function(){return Ce},setTest:function(Re){Re?A(r.DEPTH_TEST):j(r.DEPTH_TEST)},setMask:function(Re){ce!==Re&&!W&&(r.depthMask(Re),ce=Re)},setFunc:function(Re){if(Ce&&(Re=HT[Re]),me!==Re){switch(Re){case jh:r.depthFunc(r.NEVER);break;case Jh:r.depthFunc(r.ALWAYS);break;case Qh:r.depthFunc(r.LESS);break;case Uo:r.depthFunc(r.LEQUAL);break;case Zh:r.depthFunc(r.EQUAL);break;case Kh:r.depthFunc(r.GEQUAL);break;case ed:r.depthFunc(r.GREATER);break;case td:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=Re}},setLocked:function(Re){W=Re},setClear:function(Re){Ae!==Re&&(Ce&&(Re=1-Re),r.clearDepth(Re),Ae=Re)},reset:function(){W=!1,ce=null,me=null,Ae=null,Ce=!1}}}function i(){let W=!1,Ce=null,ce=null,me=null,Ae=null,Re=null,Qe=null,ft=null,Ut=null;return{setTest:function(Oe){W||(Oe?A(r.STENCIL_TEST):j(r.STENCIL_TEST))},setMask:function(Oe){Ce!==Oe&&!W&&(r.stencilMask(Oe),Ce=Oe)},setFunc:function(Oe,Be,rt){(ce!==Oe||me!==Be||Ae!==rt)&&(r.stencilFunc(Oe,Be,rt),ce=Oe,me=Be,Ae=rt)},setOp:function(Oe,Be,rt){(Re!==Oe||Qe!==Be||ft!==rt)&&(r.stencilOp(Oe,Be,rt),Re=Oe,Qe=Be,ft=rt)},setLocked:function(Oe){W=Oe},setClear:function(Oe){Ut!==Oe&&(r.clearStencil(Oe),Ut=Oe)},reset:function(){W=!1,Ce=null,ce=null,me=null,Ae=null,Re=null,Qe=null,ft=null,Ut=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,p=!1,g=null,m=null,x=null,y=null,v=null,E=null,M=null,w=new je(0,0,0),C=0,S=!1,b=null,D=null,N=null,G=null,V=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,X=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(B)[1]),q=X>=1):B.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),q=X>=2);let se=null,U={};const ge=r.getParameter(r.SCISSOR_BOX),_e=r.getParameter(r.VIEWPORT),we=new St().fromArray(ge),F=new St().fromArray(_e);function O(W,Ce,ce,me){const Ae=new Uint8Array(4),Re=r.createTexture();r.bindTexture(W,Re),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<ce;Qe++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(Ce+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return Re}const L={};L[r.TEXTURE_2D]=O(r.TEXTURE_2D,r.TEXTURE_2D,1),L[r.TEXTURE_CUBE_MAP]=O(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[r.TEXTURE_2D_ARRAY]=O(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),L[r.TEXTURE_3D]=O(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),A(r.DEPTH_TEST),o.setFunc(Uo),ne(!1),z(Yp),A(r.CULL_FACE),T(Nr);function A(W){u[W]!==!0&&(r.enable(W),u[W]=!0)}function j(W){u[W]!==!1&&(r.disable(W),u[W]=!1)}function he(W,Ce){return h[W]!==Ce?(r.bindFramebuffer(W,Ce),h[W]=Ce,W===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Ce),W===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function $(W,Ce){let ce=f,me=!1;if(W){ce=d.get(Ce),ce===void 0&&(ce=[],d.set(Ce,ce));const Ae=W.textures;if(ce.length!==Ae.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let Re=0,Qe=Ae.length;Re<Qe;Re++)ce[Re]=r.COLOR_ATTACHMENT0+Re;ce.length=Ae.length,me=!0}}else ce[0]!==r.BACK&&(ce[0]=r.BACK,me=!0);me&&r.drawBuffers(ce)}function pe(W){return _!==W?(r.useProgram(W),_=W,!0):!1}const ee={[cs]:r.FUNC_ADD,[lb]:r.FUNC_SUBTRACT,[cb]:r.FUNC_REVERSE_SUBTRACT};ee[ub]=r.MIN,ee[hb]=r.MAX;const J={[db]:r.ZERO,[fb]:r.ONE,[pb]:r.SRC_COLOR,[$h]:r.SRC_ALPHA,[xb]:r.SRC_ALPHA_SATURATE,[vb]:r.DST_COLOR,[gb]:r.DST_ALPHA,[mb]:r.ONE_MINUS_SRC_COLOR,[Yh]:r.ONE_MINUS_SRC_ALPHA,[yb]:r.ONE_MINUS_DST_COLOR,[_b]:r.ONE_MINUS_DST_ALPHA,[bb]:r.CONSTANT_COLOR,[Sb]:r.ONE_MINUS_CONSTANT_COLOR,[wb]:r.CONSTANT_ALPHA,[Mb]:r.ONE_MINUS_CONSTANT_ALPHA};function T(W,Ce,ce,me,Ae,Re,Qe,ft,Ut,Oe){if(W===Nr){p===!0&&(j(r.BLEND),p=!1);return}if(p===!1&&(A(r.BLEND),p=!0),W!==ab){if(W!==g||Oe!==S){if((m!==cs||v!==cs)&&(r.blendEquation(r.FUNC_ADD),m=cs,v=cs),Oe)switch(W){case To:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jp:r.blendFunc(r.ONE,r.ONE);break;case Jp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case To:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jp:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Jp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}x=null,y=null,E=null,M=null,w.set(0,0,0),C=0,g=W,S=Oe}return}Ae=Ae||Ce,Re=Re||ce,Qe=Qe||me,(Ce!==m||Ae!==v)&&(r.blendEquationSeparate(ee[Ce],ee[Ae]),m=Ce,v=Ae),(ce!==x||me!==y||Re!==E||Qe!==M)&&(r.blendFuncSeparate(J[ce],J[me],J[Re],J[Qe]),x=ce,y=me,E=Re,M=Qe),(ft.equals(w)===!1||Ut!==C)&&(r.blendColor(ft.r,ft.g,ft.b,Ut),w.copy(ft),C=Ut),g=W,S=!1}function re(W,Ce){W.side===Oi?j(r.CULL_FACE):A(r.CULL_FACE);let ce=W.side===Hn;Ce&&(ce=!ce),ne(ce),W.blending===To&&W.transparent===!1?T(Nr):T(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const me=W.stencilWrite;a.setTest(me),me&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),k(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?A(r.SAMPLE_ALPHA_TO_COVERAGE):j(r.SAMPLE_ALPHA_TO_COVERAGE)}function ne(W){b!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),b=W)}function z(W){W!==rb?(A(r.CULL_FACE),W!==D&&(W===Yp?r.cullFace(r.BACK):W===sb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):j(r.CULL_FACE),D=W}function H(W){W!==N&&(q&&r.lineWidth(W),N=W)}function k(W,Ce,ce){W?(A(r.POLYGON_OFFSET_FILL),(G!==Ce||V!==ce)&&(r.polygonOffset(Ce,ce),G=Ce,V=ce)):j(r.POLYGON_OFFSET_FILL)}function ue(W){W?A(r.SCISSOR_TEST):j(r.SCISSOR_TEST)}function I(W){W===void 0&&(W=r.TEXTURE0+Y-1),se!==W&&(r.activeTexture(W),se=W)}function R(W,Ce,ce){ce===void 0&&(se===null?ce=r.TEXTURE0+Y-1:ce=se);let me=U[ce];me===void 0&&(me={type:void 0,texture:void 0},U[ce]=me),(me.type!==W||me.texture!==Ce)&&(se!==ce&&(r.activeTexture(ce),se=ce),r.bindTexture(W,Ce||L[W]),me.type=W,me.texture=Ce)}function te(){const W=U[se];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function le(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Te(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function He(W){we.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),we.copy(W))}function Fe(W){F.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),F.copy(W))}function it(W,Ce){let ce=c.get(Ce);ce===void 0&&(ce=new WeakMap,c.set(Ce,ce));let me=ce.get(W);me===void 0&&(me=r.getUniformBlockIndex(Ce,W.name),ce.set(W,me))}function Je(W,Ce){const me=c.get(Ce).get(W);l.get(Ce)!==me&&(r.uniformBlockBinding(Ce,me,W.__bindingPointIndex),l.set(Ce,me))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},se=null,U={},h={},d=new WeakMap,f=[],_=null,p=!1,g=null,m=null,x=null,y=null,v=null,E=null,M=null,w=new je(0,0,0),C=0,S=!1,b=null,D=null,N=null,G=null,V=null,we.set(0,0,r.canvas.width,r.canvas.height),F.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:A,disable:j,bindFramebuffer:he,drawBuffers:$,useProgram:pe,setBlending:T,setMaterial:re,setFlipSided:ne,setCullFace:z,setLineWidth:H,setPolygonOffset:k,setScissorTest:ue,activeTexture:I,bindTexture:R,unbindTexture:te,compressedTexImage2D:le,compressedTexImage3D:de,texImage2D:Me,texImage3D:qe,updateUBOMapping:it,uniformBlockBinding:Je,texStorage2D:Xe,texStorage3D:be,texSubImage2D:fe,texSubImage3D:Ee,compressedTexSubImage2D:Se,compressedTexSubImage3D:Te,scissor:He,viewport:Fe,reset:dt}}function GT(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,R){return f?new OffscreenCanvas(I,R):tl("canvas")}function p(I,R,te){let le=1;const de=ue(I);if((de.width>te||de.height>te)&&(le=te/Math.max(de.width,de.height)),le<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const fe=Math.floor(le*de.width),Ee=Math.floor(le*de.height);h===void 0&&(h=_(fe,Ee));const Se=R?_(fe,Ee):h;return Se.width=fe,Se.height=Ee,Se.getContext("2d").drawImage(I,0,0,fe,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+fe+"x"+Ee+")."),Se}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){r.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(I,R,te,le,de=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let fe=R;if(R===r.RED&&(te===r.FLOAT&&(fe=r.R32F),te===r.HALF_FLOAT&&(fe=r.R16F),te===r.UNSIGNED_BYTE&&(fe=r.R8)),R===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(fe=r.R8UI),te===r.UNSIGNED_SHORT&&(fe=r.R16UI),te===r.UNSIGNED_INT&&(fe=r.R32UI),te===r.BYTE&&(fe=r.R8I),te===r.SHORT&&(fe=r.R16I),te===r.INT&&(fe=r.R32I)),R===r.RG&&(te===r.FLOAT&&(fe=r.RG32F),te===r.HALF_FLOAT&&(fe=r.RG16F),te===r.UNSIGNED_BYTE&&(fe=r.RG8)),R===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(fe=r.RG8UI),te===r.UNSIGNED_SHORT&&(fe=r.RG16UI),te===r.UNSIGNED_INT&&(fe=r.RG32UI),te===r.BYTE&&(fe=r.RG8I),te===r.SHORT&&(fe=r.RG16I),te===r.INT&&(fe=r.RG32I)),R===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),te===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),te===r.UNSIGNED_INT&&(fe=r.RGB32UI),te===r.BYTE&&(fe=r.RGB8I),te===r.SHORT&&(fe=r.RGB16I),te===r.INT&&(fe=r.RGB32I)),R===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),te===r.UNSIGNED_INT&&(fe=r.RGBA32UI),te===r.BYTE&&(fe=r.RGBA8I),te===r.SHORT&&(fe=r.RGBA16I),te===r.INT&&(fe=r.RGBA32I)),R===r.RGB&&te===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),R===r.RGBA){const Ee=de?Vc:mt.getTransfer(le);te===r.FLOAT&&(fe=r.RGBA32F),te===r.HALF_FLOAT&&(fe=r.RGBA16F),te===r.UNSIGNED_BYTE&&(fe=Ee===bt?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function v(I,R){let te;return I?R===null||R===Ls||R===zo?te=r.DEPTH24_STENCIL8:R===rr?te=r.DEPTH32F_STENCIL8:R===el&&(te=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Ls||R===zo?te=r.DEPTH_COMPONENT24:R===rr?te=r.DEPTH_COMPONENT32F:R===el&&(te=r.DEPTH_COMPONENT16),te}function E(I,R){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ei&&I.minFilter!==Ui?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function M(I){const R=I.target;R.removeEventListener("dispose",M),C(R),R.isVideoTexture&&u.delete(R)}function w(I){const R=I.target;R.removeEventListener("dispose",w),b(R)}function C(I){const R=n.get(I);if(R.__webglInit===void 0)return;const te=I.source,le=d.get(te);if(le){const de=le[R.__cacheKey];de.usedTimes--,de.usedTimes===0&&S(I),Object.keys(le).length===0&&d.delete(te)}n.remove(I)}function S(I){const R=n.get(I);r.deleteTexture(R.__webglTexture);const te=I.source,le=d.get(te);delete le[R.__cacheKey],o.memory.textures--}function b(I){const R=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(R.__webglFramebuffer[le]))for(let de=0;de<R.__webglFramebuffer[le].length;de++)r.deleteFramebuffer(R.__webglFramebuffer[le][de]);else r.deleteFramebuffer(R.__webglFramebuffer[le]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[le])}else{if(Array.isArray(R.__webglFramebuffer))for(let le=0;le<R.__webglFramebuffer.length;le++)r.deleteFramebuffer(R.__webglFramebuffer[le]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let le=0;le<R.__webglColorRenderbuffer.length;le++)R.__webglColorRenderbuffer[le]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[le]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const te=I.textures;for(let le=0,de=te.length;le<de;le++){const fe=n.get(te[le]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(te[le])}n.remove(I)}let D=0;function N(){D=0}function G(){const I=D;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),D+=1,I}function V(I){const R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function Y(I,R){const te=n.get(I);if(I.isVideoTexture&&H(I),I.isRenderTargetTexture===!1&&I.version>0&&te.__version!==I.version){const le=I.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(te,I,R);return}}t.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+R)}function q(I,R){const te=n.get(I);if(I.version>0&&te.__version!==I.version){F(te,I,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+R)}function X(I,R){const te=n.get(I);if(I.version>0&&te.__version!==I.version){F(te,I,R);return}t.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+R)}function B(I,R){const te=n.get(I);if(I.version>0&&te.__version!==I.version){O(te,I,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+R)}const se={[rd]:r.REPEAT,[fs]:r.CLAMP_TO_EDGE,[sd]:r.MIRRORED_REPEAT},U={[Ei]:r.NEAREST,[Ob]:r.NEAREST_MIPMAP_NEAREST,[Dl]:r.NEAREST_MIPMAP_LINEAR,[Ui]:r.LINEAR,[Lu]:r.LINEAR_MIPMAP_NEAREST,[Ir]:r.LINEAR_MIPMAP_LINEAR},ge={[kb]:r.NEVER,[Wb]:r.ALWAYS,[Bb]:r.LESS,[S0]:r.LEQUAL,[zb]:r.EQUAL,[Gb]:r.GEQUAL,[Hb]:r.GREATER,[Vb]:r.NOTEQUAL};function _e(I,R){if(R.type===rr&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Ui||R.magFilter===Lu||R.magFilter===Dl||R.magFilter===Ir||R.minFilter===Ui||R.minFilter===Lu||R.minFilter===Dl||R.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,se[R.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,se[R.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,se[R.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,U[R.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,U[R.minFilter]),R.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,ge[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ei||R.minFilter!==Dl&&R.minFilter!==Ir||R.type===rr&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function we(I,R){let te=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",M));const le=R.source;let de=d.get(le);de===void 0&&(de={},d.set(le,de));const fe=V(R);if(fe!==I.__cacheKey){de[fe]===void 0&&(de[fe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,te=!0),de[fe].usedTimes++;const Ee=de[I.__cacheKey];Ee!==void 0&&(de[I.__cacheKey].usedTimes--,Ee.usedTimes===0&&S(R)),I.__cacheKey=fe,I.__webglTexture=de[fe].texture}return te}function F(I,R,te){let le=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(le=r.TEXTURE_3D);const de=we(I,R),fe=R.source;t.bindTexture(le,I.__webglTexture,r.TEXTURE0+te);const Ee=n.get(fe);if(fe.version!==Ee.__version||de===!0){t.activeTexture(r.TEXTURE0+te);const Se=mt.getPrimaries(mt.workingColorSpace),Te=R.colorSpace===wr?null:mt.getPrimaries(R.colorSpace),Xe=R.colorSpace===wr||Se===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let be=p(R.image,!1,i.maxTextureSize);be=k(R,be);const Me=s.convert(R.format,R.colorSpace),qe=s.convert(R.type);let He=y(R.internalFormat,Me,qe,R.colorSpace,R.isVideoTexture);_e(le,R);let Fe;const it=R.mipmaps,Je=R.isVideoTexture!==!0,dt=Ee.__version===void 0||de===!0,W=fe.dataReady,Ce=E(R,be);if(R.isDepthTexture)He=v(R.format===Ho,R.type),dt&&(Je?t.texStorage2D(r.TEXTURE_2D,1,He,be.width,be.height):t.texImage2D(r.TEXTURE_2D,0,He,be.width,be.height,0,Me,qe,null));else if(R.isDataTexture)if(it.length>0){Je&&dt&&t.texStorage2D(r.TEXTURE_2D,Ce,He,it[0].width,it[0].height);for(let ce=0,me=it.length;ce<me;ce++)Fe=it[ce],Je?W&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,Fe.width,Fe.height,Me,qe,Fe.data):t.texImage2D(r.TEXTURE_2D,ce,He,Fe.width,Fe.height,0,Me,qe,Fe.data);R.generateMipmaps=!1}else Je?(dt&&t.texStorage2D(r.TEXTURE_2D,Ce,He,be.width,be.height),W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,be.width,be.height,Me,qe,be.data)):t.texImage2D(r.TEXTURE_2D,0,He,be.width,be.height,0,Me,qe,be.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Je&&dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,He,it[0].width,it[0].height,be.depth);for(let ce=0,me=it.length;ce<me;ce++)if(Fe=it[ce],R.format!==Mi)if(Me!==null)if(Je){if(W)if(R.layerUpdates.size>0){const Ae=Cm(Fe.width,Fe.height,R.format,R.type);for(const Re of R.layerUpdates){const Qe=Fe.data.subarray(Re*Ae/Fe.data.BYTES_PER_ELEMENT,(Re+1)*Ae/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,Re,Fe.width,Fe.height,1,Me,Qe)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Fe.width,Fe.height,be.depth,Me,Fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ce,He,Fe.width,Fe.height,be.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?W&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Fe.width,Fe.height,be.depth,Me,qe,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ce,He,Fe.width,Fe.height,be.depth,0,Me,qe,Fe.data)}else{Je&&dt&&t.texStorage2D(r.TEXTURE_2D,Ce,He,it[0].width,it[0].height);for(let ce=0,me=it.length;ce<me;ce++)Fe=it[ce],R.format!==Mi?Me!==null?Je?W&&t.compressedTexSubImage2D(r.TEXTURE_2D,ce,0,0,Fe.width,Fe.height,Me,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,ce,He,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?W&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,Fe.width,Fe.height,Me,qe,Fe.data):t.texImage2D(r.TEXTURE_2D,ce,He,Fe.width,Fe.height,0,Me,qe,Fe.data)}else if(R.isDataArrayTexture)if(Je){if(dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,He,be.width,be.height,be.depth),W)if(R.layerUpdates.size>0){const ce=Cm(be.width,be.height,R.format,R.type);for(const me of R.layerUpdates){const Ae=be.data.subarray(me*ce/be.data.BYTES_PER_ELEMENT,(me+1)*ce/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,be.width,be.height,1,Me,qe,Ae)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Me,qe,be.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,He,be.width,be.height,be.depth,0,Me,qe,be.data);else if(R.isData3DTexture)Je?(dt&&t.texStorage3D(r.TEXTURE_3D,Ce,He,be.width,be.height,be.depth),W&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Me,qe,be.data)):t.texImage3D(r.TEXTURE_3D,0,He,be.width,be.height,be.depth,0,Me,qe,be.data);else if(R.isFramebufferTexture){if(dt)if(Je)t.texStorage2D(r.TEXTURE_2D,Ce,He,be.width,be.height);else{let ce=be.width,me=be.height;for(let Ae=0;Ae<Ce;Ae++)t.texImage2D(r.TEXTURE_2D,Ae,He,ce,me,0,Me,qe,null),ce>>=1,me>>=1}}else if(it.length>0){if(Je&&dt){const ce=ue(it[0]);t.texStorage2D(r.TEXTURE_2D,Ce,He,ce.width,ce.height)}for(let ce=0,me=it.length;ce<me;ce++)Fe=it[ce],Je?W&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,Me,qe,Fe):t.texImage2D(r.TEXTURE_2D,ce,He,Me,qe,Fe);R.generateMipmaps=!1}else if(Je){if(dt){const ce=ue(be);t.texStorage2D(r.TEXTURE_2D,Ce,He,ce.width,ce.height)}W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,qe,be)}else t.texImage2D(r.TEXTURE_2D,0,He,Me,qe,be);g(R)&&m(le),Ee.__version=fe.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function O(I,R,te){if(R.image.length!==6)return;const le=we(I,R),de=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+te);const fe=n.get(de);if(de.version!==fe.__version||le===!0){t.activeTexture(r.TEXTURE0+te);const Ee=mt.getPrimaries(mt.workingColorSpace),Se=R.colorSpace===wr?null:mt.getPrimaries(R.colorSpace),Te=R.colorSpace===wr||Ee===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Xe=R.isCompressedTexture||R.image[0].isCompressedTexture,be=R.image[0]&&R.image[0].isDataTexture,Me=[];for(let me=0;me<6;me++)!Xe&&!be?Me[me]=p(R.image[me],!0,i.maxCubemapSize):Me[me]=be?R.image[me].image:R.image[me],Me[me]=k(R,Me[me]);const qe=Me[0],He=s.convert(R.format,R.colorSpace),Fe=s.convert(R.type),it=y(R.internalFormat,He,Fe,R.colorSpace),Je=R.isVideoTexture!==!0,dt=fe.__version===void 0||le===!0,W=de.dataReady;let Ce=E(R,qe);_e(r.TEXTURE_CUBE_MAP,R);let ce;if(Xe){Je&&dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,it,qe.width,qe.height);for(let me=0;me<6;me++){ce=Me[me].mipmaps;for(let Ae=0;Ae<ce.length;Ae++){const Re=ce[Ae];R.format!==Mi?He!==null?Je?W&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae,0,0,Re.width,Re.height,He,Re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae,it,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae,0,0,Re.width,Re.height,He,Fe,Re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae,it,Re.width,Re.height,0,He,Fe,Re.data)}}}else{if(ce=R.mipmaps,Je&&dt){ce.length>0&&Ce++;const me=ue(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,it,me.width,me.height)}for(let me=0;me<6;me++)if(be){Je?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Me[me].width,Me[me].height,He,Fe,Me[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,it,Me[me].width,Me[me].height,0,He,Fe,Me[me].data);for(let Ae=0;Ae<ce.length;Ae++){const Qe=ce[Ae].image[me].image;Je?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae+1,0,0,Qe.width,Qe.height,He,Fe,Qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae+1,it,Qe.width,Qe.height,0,He,Fe,Qe.data)}}else{Je?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,He,Fe,Me[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,it,He,Fe,Me[me]);for(let Ae=0;Ae<ce.length;Ae++){const Re=ce[Ae];Je?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae+1,0,0,He,Fe,Re.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae+1,it,He,Fe,Re.image[me])}}}g(R)&&m(r.TEXTURE_CUBE_MAP),fe.__version=de.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function L(I,R,te,le,de,fe){const Ee=s.convert(te.format,te.colorSpace),Se=s.convert(te.type),Te=y(te.internalFormat,Ee,Se,te.colorSpace),Xe=n.get(R),be=n.get(te);if(be.__renderTarget=R,!Xe.__hasExternalTextures){const Me=Math.max(1,R.width>>fe),qe=Math.max(1,R.height>>fe);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?t.texImage3D(de,fe,Te,Me,qe,R.depth,0,Ee,Se,null):t.texImage2D(de,fe,Te,Me,qe,0,Ee,Se,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),z(R)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,de,be.__webglTexture,0,ne(R)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,de,be.__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function A(I,R,te){if(r.bindRenderbuffer(r.RENDERBUFFER,I),R.depthBuffer){const le=R.depthTexture,de=le&&le.isDepthTexture?le.type:null,fe=v(R.stencilBuffer,de),Ee=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=ne(R);z(R)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,fe,R.width,R.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,fe,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,fe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,I)}else{const le=R.textures;for(let de=0;de<le.length;de++){const fe=le[de],Ee=s.convert(fe.format,fe.colorSpace),Se=s.convert(fe.type),Te=y(fe.internalFormat,Ee,Se,fe.colorSpace),Xe=ne(R);te&&z(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,Te,R.width,R.height):z(R)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xe,Te,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Te,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function j(I,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=n.get(R.depthTexture);le.__renderTarget=R,(!le.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Y(R.depthTexture,0);const de=le.__webglTexture,fe=ne(R);if(R.depthTexture.format===Ao)z(R)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,de,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,de,0);else if(R.depthTexture.format===Ho)z(R)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,de,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function he(I){const R=n.get(I),te=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){const le=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),le){const de=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,le.removeEventListener("dispose",de)};le.addEventListener("dispose",de),R.__depthDisposeCallback=de}R.__boundDepthTexture=le}if(I.depthTexture&&!R.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");j(R.__webglFramebuffer,I)}else if(te){R.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[le]),R.__webglDepthbuffer[le]===void 0)R.__webglDepthbuffer[le]=r.createRenderbuffer(),A(R.__webglDepthbuffer[le],I,!1);else{const de=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=R.__webglDepthbuffer[le];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),A(R.__webglDepthbuffer,I,!1);else{const le=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,de)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function $(I,R,te){const le=n.get(I);R!==void 0&&L(le.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&he(I)}function pe(I){const R=I.texture,te=n.get(I),le=n.get(R);I.addEventListener("dispose",w);const de=I.textures,fe=I.isWebGLCubeRenderTarget===!0,Ee=de.length>1;if(Ee||(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=R.version,o.memory.textures++),fe){te.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(R.mipmaps&&R.mipmaps.length>0){te.__webglFramebuffer[Se]=[];for(let Te=0;Te<R.mipmaps.length;Te++)te.__webglFramebuffer[Se][Te]=r.createFramebuffer()}else te.__webglFramebuffer[Se]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){te.__webglFramebuffer=[];for(let Se=0;Se<R.mipmaps.length;Se++)te.__webglFramebuffer[Se]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Ee)for(let Se=0,Te=de.length;Se<Te;Se++){const Xe=n.get(de[Se]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&z(I)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Se=0;Se<de.length;Se++){const Te=de[Se];te.__webglColorRenderbuffer[Se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[Se]);const Xe=s.convert(Te.format,Te.colorSpace),be=s.convert(Te.type),Me=y(Te.internalFormat,Xe,be,Te.colorSpace,I.isXRRenderTarget===!0),qe=ne(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,Me,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,te.__webglColorRenderbuffer[Se])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),A(te.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),_e(r.TEXTURE_CUBE_MAP,R);for(let Se=0;Se<6;Se++)if(R.mipmaps&&R.mipmaps.length>0)for(let Te=0;Te<R.mipmaps.length;Te++)L(te.__webglFramebuffer[Se][Te],I,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Te);else L(te.__webglFramebuffer[Se],I,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);g(R)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let Se=0,Te=de.length;Se<Te;Se++){const Xe=de[Se],be=n.get(Xe);t.bindTexture(r.TEXTURE_2D,be.__webglTexture),_e(r.TEXTURE_2D,Xe),L(te.__webglFramebuffer,I,Xe,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,0),g(Xe)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let Se=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Se=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Se,le.__webglTexture),_e(Se,R),R.mipmaps&&R.mipmaps.length>0)for(let Te=0;Te<R.mipmaps.length;Te++)L(te.__webglFramebuffer[Te],I,R,r.COLOR_ATTACHMENT0,Se,Te);else L(te.__webglFramebuffer,I,R,r.COLOR_ATTACHMENT0,Se,0);g(R)&&m(Se),t.unbindTexture()}I.depthBuffer&&he(I)}function ee(I){const R=I.textures;for(let te=0,le=R.length;te<le;te++){const de=R[te];if(g(de)){const fe=x(I),Ee=n.get(de).__webglTexture;t.bindTexture(fe,Ee),m(fe),t.unbindTexture()}}}const J=[],T=[];function re(I){if(I.samples>0){if(z(I)===!1){const R=I.textures,te=I.width,le=I.height;let de=r.COLOR_BUFFER_BIT;const fe=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=n.get(I),Se=R.length>1;if(Se)for(let Te=0;Te<R.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Te=0;Te<R.length;Te++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),Se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const Xe=n.get(R[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xe,0)}r.blitFramebuffer(0,0,te,le,0,0,te,le,de,r.NEAREST),l===!0&&(J.length=0,T.length=0,J.push(r.COLOR_ATTACHMENT0+Te),I.depthBuffer&&I.resolveDepthBuffer===!1&&(J.push(fe),T.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,T)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Se)for(let Te=0;Te<R.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const Xe=n.get(R[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,Xe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const R=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function ne(I){return Math.min(i.maxSamples,I.samples)}function z(I){const R=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function H(I){const R=o.render.frame;u.get(I)!==R&&(u.set(I,R),I.update())}function k(I,R){const te=I.colorSpace,le=I.format,de=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||te!==Vo&&te!==wr&&(mt.getTransfer(te)===bt?(le!==Mi||de!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),R}function ue(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=B,this.rebindTextures=$,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=L,this.useMultisampledRTT=z}function WT(r,e){function t(n,i=wr){let s;const o=mt.getTransfer(i);if(n===ur)return r.UNSIGNED_BYTE;if(n===Nf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Uf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===f0)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===h0)return r.BYTE;if(n===d0)return r.SHORT;if(n===el)return r.UNSIGNED_SHORT;if(n===Ff)return r.INT;if(n===Ls)return r.UNSIGNED_INT;if(n===rr)return r.FLOAT;if(n===qo)return r.HALF_FLOAT;if(n===p0)return r.ALPHA;if(n===m0)return r.RGB;if(n===Mi)return r.RGBA;if(n===g0)return r.LUMINANCE;if(n===_0)return r.LUMINANCE_ALPHA;if(n===Ao)return r.DEPTH_COMPONENT;if(n===Ho)return r.DEPTH_STENCIL;if(n===v0)return r.RED;if(n===kf)return r.RED_INTEGER;if(n===y0)return r.RG;if(n===Bf)return r.RG_INTEGER;if(n===zf)return r.RGBA_INTEGER;if(n===yc||n===xc||n===bc||n===Sc)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===od||n===ad||n===ld||n===cd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===od)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ad)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ld)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ud||n===hd||n===dd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ud||n===hd)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===dd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fd||n===pd||n===md||n===gd||n===_d||n===vd||n===yd||n===xd||n===bd||n===Sd||n===wd||n===Md||n===Ed||n===Td)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===md)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_d)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Md)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ed)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Td)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Ad||n===Cd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===wc)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ad)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===x0||n===Rd||n===Pd||n===Ld)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===wc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Rd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ld)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const qT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XT=`
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

}`;class $T{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Vn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hr({vertexShader:qT,fragmentShader:XT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mi(new pl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YT extends Xo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const p=new $T,g=t.getContextAttributes();let m=null,x=null;const y=[],v=[],E=new ye;let M=null;const w=new Zn;w.viewport=new St;const C=new Zn;C.viewport=new St;const S=[w,C],b=new fw;let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let O=y[F];return O===void 0&&(O=new Ku,y[F]=O),O.getTargetRaySpace()},this.getControllerGrip=function(F){let O=y[F];return O===void 0&&(O=new Ku,y[F]=O),O.getGripSpace()},this.getHand=function(F){let O=y[F];return O===void 0&&(O=new Ku,y[F]=O),O.getHandSpace()};function G(F){const O=v.indexOf(F.inputSource);if(O===-1)return;const L=y[O];L!==void 0&&(L.update(F.inputSource,F.frame,c||o),L.dispatchEvent({type:F.type,data:F.inputSource}))}function V(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Y);for(let F=0;F<y.length;F++){const O=v[F];O!==null&&(v[F]=null,y[F].disconnect(O))}D=null,N=null,p.reset(),e.setRenderTarget(m),f=null,d=null,h=null,i=null,x=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let L=null,A=null,j=null;g.depth&&(j=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,L=g.stencil?Ho:Ao,A=g.stencil?zo:Ls);const he={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(he),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Is(d.textureWidth,d.textureHeight,{format:Mi,type:ur,depthTexture:new F0(d.textureWidth,d.textureHeight,A,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const L={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,L),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Is(f.framebufferWidth,f.framebufferHeight,{format:Mi,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),we.setContext(i),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(F){for(let O=0;O<F.removed.length;O++){const L=F.removed[O],A=v.indexOf(L);A>=0&&(v[A]=null,y[A].disconnect(L))}for(let O=0;O<F.added.length;O++){const L=F.added[O];let A=v.indexOf(L);if(A===-1){for(let he=0;he<y.length;he++)if(he>=v.length){v.push(L),A=he;break}else if(v[he]===null){v[he]=L,A=he;break}if(A===-1)break}const j=y[A];j&&j.connect(L)}}const q=new K,X=new K;function B(F,O,L){q.setFromMatrixPosition(O.matrixWorld),X.setFromMatrixPosition(L.matrixWorld);const A=q.distanceTo(X),j=O.projectionMatrix.elements,he=L.projectionMatrix.elements,$=j[14]/(j[10]-1),pe=j[14]/(j[10]+1),ee=(j[9]+1)/j[5],J=(j[9]-1)/j[5],T=(j[8]-1)/j[0],re=(he[8]+1)/he[0],ne=$*T,z=$*re,H=A/(-T+re),k=H*-T;if(O.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(k),F.translateZ(H),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),j[10]===-1)F.projectionMatrix.copy(O.projectionMatrix),F.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const ue=$+H,I=pe+H,R=ne-k,te=z+(A-k),le=ee*pe/I*ue,de=J*pe/I*ue;F.projectionMatrix.makePerspective(R,te,le,de,ue,I),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function se(F,O){O===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(O.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;let O=F.near,L=F.far;p.texture!==null&&(p.depthNear>0&&(O=p.depthNear),p.depthFar>0&&(L=p.depthFar)),b.near=C.near=w.near=O,b.far=C.far=w.far=L,(D!==b.near||N!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,N=b.far),w.layers.mask=F.layers.mask|2,C.layers.mask=F.layers.mask|4,b.layers.mask=w.layers.mask|C.layers.mask;const A=F.parent,j=b.cameras;se(b,A);for(let he=0;he<j.length;he++)se(j[he],A);j.length===2?B(b,w,C):b.projectionMatrix.copy(w.projectionMatrix),U(F,b,A)};function U(F,O,L){L===null?F.matrix.copy(O.matrixWorld):(F.matrix.copy(L.matrixWorld),F.matrix.invert(),F.matrix.multiply(O.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(O.projectionMatrix),F.projectionMatrixInverse.copy(O.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Id*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(b)};let ge=null;function _e(F,O){if(u=O.getViewerPose(c||o),_=O,u!==null){const L=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let A=!1;L.length!==b.cameras.length&&(b.cameras.length=0,A=!0);for(let $=0;$<L.length;$++){const pe=L[$];let ee=null;if(f!==null)ee=f.getViewport(pe);else{const T=h.getViewSubImage(d,pe);ee=T.viewport,$===0&&(e.setRenderTargetTextures(x,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),e.setRenderTarget(x))}let J=S[$];J===void 0&&(J=new Zn,J.layers.enable($),J.viewport=new St,S[$]=J),J.matrix.fromArray(pe.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(pe.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(ee.x,ee.y,ee.width,ee.height),$===0&&(b.matrix.copy(J.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),A===!0&&b.cameras.push(J)}const j=i.enabledFeatures;if(j&&j.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const $=h.getDepthInformation(L[0]);$&&$.isValid&&$.texture&&p.init(e,$,i.renderState)}}for(let L=0;L<y.length;L++){const A=v[L],j=y[L];A!==null&&j!==void 0&&j.update(A,O,c||o)}ge&&ge(F,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),_=null}const we=new W0;we.setAnimationLoop(_e),this.setAnimationLoop=function(F){ge=F},this.dispose=function(){}}}const ts=new Wi,jT=new Dt;function JT(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,P0(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,x,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),_(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),p(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Hn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Hn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=e.get(m),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,ts.copy(v),ts.x*=-1,ts.y*=-1,ts.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),g.envMapRotation.value.setFromMatrix4(jT.makeRotationFromEuler(ts)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Hn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function p(g,m){const x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function QT(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(_(x),v=u(x),i[x.id]=v,x.addEventListener("dispose",g));const E=y.program;n.updateUBOMapping(x,E);const M=e.render.frame;s[x.id]!==M&&(d(x),s[x.id]=M)}function u(x){const y=h();x.__bindingPointIndex=y;const v=r.createBuffer(),E=x.__size,M=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,E,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],v=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let M=0,w=v.length;M<w;M++){const C=Array.isArray(v[M])?v[M]:[v[M]];for(let S=0,b=C.length;S<b;S++){const D=C[S];if(f(D,M,S,E)===!0){const N=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let Y=0;Y<G.length;Y++){const q=G[Y],X=p(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,N+V,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,V),V+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,y,v,E){const M=x.value,w=y+"_"+v;if(E[w]===void 0)return typeof M=="number"||typeof M=="boolean"?E[w]=M:E[w]=M.clone(),!0;{const C=E[w];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return E[w]=M,!0}else if(C.equals(M)===!1)return C.copy(M),!0}return!1}function _(x){const y=x.uniforms;let v=0;const E=16;for(let w=0,C=y.length;w<C;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,D=S.length;b<D;b++){const N=S[b],G=Array.isArray(N.value)?N.value:[N.value];for(let V=0,Y=G.length;V<Y;V++){const q=G[V],X=p(q),B=v%E,se=B%X.boundary,U=B+se;v+=se,U!==0&&E-U<X.storage&&(v+=E-U),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=X.storage}}}const M=v%E;return M>0&&(v+=E-M),x.__size=v,x.__cache={},this}function p(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class j0{constructor(e={}){const{canvas:t=Xb(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),p=new Int32Array(4);let g=null,m=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=Ur,this.toneMappingExposure=1;const v=this;let E=!1,M=0,w=0,C=null,S=-1,b=null;const D=new St,N=new St;let G=null;const V=new je(0);let Y=0,q=t.width,X=t.height,B=1,se=null,U=null;const ge=new St(0,0,q,X),_e=new St(0,0,q,X);let we=!1;const F=new Wf;let O=!1,L=!1;this.transmissionResolutionScale=1;const A=new Dt,j=new Dt,he=new K,$=new St,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function J(){return C===null?B:1}let T=n;function re(P,Z){return t.getContext(P,Z)}try{const P={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Of}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Re,!1),T===null){const Z="webgl2";if(T=re(Z,P),T===null)throw re(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ne,z,H,k,ue,I,R,te,le,de,fe,Ee,Se,Te,Xe,be,Me,qe,He,Fe,it,Je,dt,W;function Ce(){ne=new lE(T),ne.init(),Je=new WT(T,ne),z=new tE(T,ne,e,Je),H=new VT(T,ne),z.reverseDepthBuffer&&d&&H.buffers.depth.setReversed(!0),k=new hE(T),ue=new RT,I=new GT(T,ne,H,ue,z,Je,k),R=new iE(v),te=new aE(v),le=new _w(T),dt=new K1(T,le),de=new cE(T,le,k,dt),fe=new fE(T,de,le,k),He=new dE(T,z,I),be=new nE(ue),Ee=new CT(v,R,te,ne,z,dt,be),Se=new JT(v,ue),Te=new LT,Xe=new UT(ne),qe=new Z1(v,R,te,H,fe,f,l),Me=new zT(v,fe,z),W=new QT(T,k,z,H),Fe=new eE(T,ne,k),it=new uE(T,ne,k),k.programs=Ee.programs,v.capabilities=z,v.extensions=ne,v.properties=ue,v.renderLists=Te,v.shadowMap=Me,v.state=H,v.info=k}Ce();const ce=new YT(v,T);this.xr=ce,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const P=ne.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ne.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(q,X,!1))},this.getSize=function(P){return P.set(q,X)},this.setSize=function(P,Z,oe=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=P,X=Z,t.width=Math.floor(P*B),t.height=Math.floor(Z*B),oe===!0&&(t.style.width=P+"px",t.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(q*B,X*B).floor()},this.setDrawingBufferSize=function(P,Z,oe){q=P,X=Z,B=oe,t.width=Math.floor(P*oe),t.height=Math.floor(Z*oe),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(ge)},this.setViewport=function(P,Z,oe,ie){P.isVector4?ge.set(P.x,P.y,P.z,P.w):ge.set(P,Z,oe,ie),H.viewport(D.copy(ge).multiplyScalar(B).round())},this.getScissor=function(P){return P.copy(_e)},this.setScissor=function(P,Z,oe,ie){P.isVector4?_e.set(P.x,P.y,P.z,P.w):_e.set(P,Z,oe,ie),H.scissor(N.copy(_e).multiplyScalar(B).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(P){H.setScissorTest(we=P)},this.setOpaqueSort=function(P){se=P},this.setTransparentSort=function(P){U=P},this.getClearColor=function(P){return P.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(P=!0,Z=!0,oe=!0){let ie=0;if(P){let Q=!1;if(C!==null){const xe=C.texture.format;Q=xe===zf||xe===Bf||xe===kf}if(Q){const xe=C.texture.type,Le=xe===ur||xe===Ls||xe===el||xe===zo||xe===Nf||xe===Uf,Ue=qe.getClearColor(),Ne=qe.getClearAlpha(),We=Ue.r,Ye=Ue.g,Ve=Ue.b;Le?(_[0]=We,_[1]=Ye,_[2]=Ve,_[3]=Ne,T.clearBufferuiv(T.COLOR,0,_)):(p[0]=We,p[1]=Ye,p[2]=Ve,p[3]=Ne,T.clearBufferiv(T.COLOR,0,p))}else ie|=T.COLOR_BUFFER_BIT}Z&&(ie|=T.DEPTH_BUFFER_BIT),oe&&(ie|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),qe.dispose(),Te.dispose(),Xe.dispose(),ue.dispose(),R.dispose(),te.dispose(),fe.dispose(),dt.dispose(),W.dispose(),Ee.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Pe),ce.removeEventListener("sessionend",et),ze.stop()};function me(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const P=k.autoReset,Z=Me.enabled,oe=Me.autoUpdate,ie=Me.needsUpdate,Q=Me.type;Ce(),k.autoReset=P,Me.enabled=Z,Me.autoUpdate=oe,Me.needsUpdate=ie,Me.type=Q}function Re(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Qe(P){const Z=P.target;Z.removeEventListener("dispose",Qe),ft(Z)}function ft(P){Ut(P),ue.remove(P)}function Ut(P){const Z=ue.get(P).programs;Z!==void 0&&(Z.forEach(function(oe){Ee.releaseProgram(oe)}),P.isShaderMaterial&&Ee.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,oe,ie,Q,xe){Z===null&&(Z=pe);const Le=Q.isMesh&&Q.matrixWorld.determinant()<0,Ue=Wn(P,Z,oe,ie,Q);H.setMaterial(ie,Le);let Ne=oe.index,We=1;if(ie.wireframe===!0){if(Ne=de.getWireframeAttribute(oe),Ne===void 0)return;We=2}const Ye=oe.drawRange,Ve=oe.attributes.position;let nt=Ye.start*We,_t=(Ye.start+Ye.count)*We;xe!==null&&(nt=Math.max(nt,xe.start*We),_t=Math.min(_t,(xe.start+xe.count)*We)),Ne!==null?(nt=Math.max(nt,0),_t=Math.min(_t,Ne.count)):Ve!=null&&(nt=Math.max(nt,0),_t=Math.min(_t,Ve.count));const Wt=_t-nt;if(Wt<0||Wt===1/0)return;dt.setup(Q,ie,Ue,oe,Ne);let kt,pt=Fe;if(Ne!==null&&(kt=le.get(Ne),pt=it,pt.setIndex(kt)),Q.isMesh)ie.wireframe===!0?(H.setLineWidth(ie.wireframeLinewidth*J()),pt.setMode(T.LINES)):pt.setMode(T.TRIANGLES);else if(Q.isLine){let $e=ie.linewidth;$e===void 0&&($e=1),H.setLineWidth($e*J()),Q.isLineSegments?pt.setMode(T.LINES):Q.isLineLoop?pt.setMode(T.LINE_LOOP):pt.setMode(T.LINE_STRIP)}else Q.isPoints?pt.setMode(T.POINTS):Q.isSprite&&pt.setMode(T.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))pt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const $e=Q._multiDrawStarts,ln=Q._multiDrawCounts,vt=Q._multiDrawCount,vi=Ne?le.get(Ne).bytesPerElement:1,Bs=ue.get(ie).currentProgram.getUniforms();for(let qn=0;qn<vt;qn++)Bs.setValue(T,"_gl_DrawID",qn),pt.render($e[qn]/vi,ln[qn])}else if(Q.isInstancedMesh)pt.renderInstances(nt,Wt,Q.count);else if(oe.isInstancedBufferGeometry){const $e=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ln=Math.min(oe.instanceCount,$e);pt.renderInstances(nt,Wt,ln)}else pt.render(nt,Wt)};function Oe(P,Z,oe){P.transparent===!0&&P.side===Oi&&P.forceSinglePass===!1?(P.side=Hn,P.needsUpdate=!0,wt(P,Z,oe),P.side=Hr,P.needsUpdate=!0,wt(P,Z,oe),P.side=Oi):wt(P,Z,oe)}this.compile=function(P,Z,oe=null){oe===null&&(oe=P),m=Xe.get(oe),m.init(Z),y.push(m),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),P!==oe&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights();const ie=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const xe=Q.material;if(xe)if(Array.isArray(xe))for(let Le=0;Le<xe.length;Le++){const Ue=xe[Le];Oe(Ue,oe,Q),ie.add(Ue)}else Oe(xe,oe,Q),ie.add(xe)}),m=y.pop(),ie},this.compileAsync=function(P,Z,oe=null){const ie=this.compile(P,Z,oe);return new Promise(Q=>{function xe(){if(ie.forEach(function(Le){ue.get(Le).currentProgram.isReady()&&ie.delete(Le)}),ie.size===0){Q(P);return}setTimeout(xe,10)}ne.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Be=null;function rt(P){Be&&Be(P)}function Pe(){ze.stop()}function et(){ze.start()}const ze=new W0;ze.setAnimationLoop(rt),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(P){Be=P,ce.setAnimationLoop(P),P===null?ze.stop():ze.start()},ce.addEventListener("sessionstart",Pe),ce.addEventListener("sessionend",et),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(Z),Z=ce.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,Z,C),m=Xe.get(P,y.length),m.init(Z),y.push(m),j.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F.setFromProjectionMatrix(j),L=this.localClippingEnabled,O=be.init(this.clippingPlanes,L),g=Te.get(P,x.length),g.init(),x.push(g),ce.enabled===!0&&ce.isPresenting===!0){const xe=v.xr.getDepthSensingMesh();xe!==null&&Ze(xe,Z,-1/0,v.sortObjects)}Ze(P,Z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(se,U),ee=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ee&&qe.addToRenderList(g,P),this.info.render.frame++,O===!0&&be.beginShadows();const oe=m.state.shadowsArray;Me.render(oe,P,Z),O===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=g.opaque,Q=g.transmissive;if(m.setupLights(),Z.isArrayCamera){const xe=Z.cameras;if(Q.length>0)for(let Le=0,Ue=xe.length;Le<Ue;Le++){const Ne=xe[Le];at(ie,Q,P,Ne)}ee&&qe.render(P);for(let Le=0,Ue=xe.length;Le<Ue;Le++){const Ne=xe[Le];Ht(g,P,Ne,Ne.viewport)}}else Q.length>0&&at(ie,Q,P,Z),ee&&qe.render(P),Ht(g,P,Z);C!==null&&w===0&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(v,P,Z),dt.resetDefaultState(),S=-1,b=null,y.pop(),y.length>0?(m=y[y.length-1],O===!0&&be.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Ze(P,Z,oe,ie){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)oe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||F.intersectsSprite(P)){ie&&$.setFromMatrixPosition(P.matrixWorld).applyMatrix4(j);const Le=fe.update(P),Ue=P.material;Ue.visible&&g.push(P,Le,Ue,oe,$.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||F.intersectsObject(P))){const Le=fe.update(P),Ue=P.material;if(ie&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),$.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),$.copy(Le.boundingSphere.center)),$.applyMatrix4(P.matrixWorld).applyMatrix4(j)),Array.isArray(Ue)){const Ne=Le.groups;for(let We=0,Ye=Ne.length;We<Ye;We++){const Ve=Ne[We],nt=Ue[Ve.materialIndex];nt&&nt.visible&&g.push(P,Le,nt,oe,$.z,Ve)}}else Ue.visible&&g.push(P,Le,Ue,oe,$.z,null)}}const xe=P.children;for(let Le=0,Ue=xe.length;Le<Ue;Le++)Ze(xe[Le],Z,oe,ie)}function Ht(P,Z,oe,ie){const Q=P.opaque,xe=P.transmissive,Le=P.transparent;m.setupLightsView(oe),O===!0&&be.setGlobalState(v.clippingPlanes,oe),ie&&H.viewport(D.copy(ie)),Q.length>0&&At(Q,Z,oe),xe.length>0&&At(xe,Z,oe),Le.length>0&&At(Le,Z,oe),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function at(P,Z,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ie.id]===void 0&&(m.state.transmissionRenderTarget[ie.id]=new Is(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?qo:ur,minFilter:Ir,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const xe=m.state.transmissionRenderTarget[ie.id],Le=ie.viewport||D;xe.setSize(Le.z*v.transmissionResolutionScale,Le.w*v.transmissionResolutionScale);const Ue=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(V),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),ee&&qe.render(oe);const Ne=v.toneMapping;v.toneMapping=Ur;const We=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),m.setupLightsView(ie),O===!0&&be.setGlobalState(v.clippingPlanes,ie),At(P,oe,ie),I.updateMultisampleRenderTarget(xe),I.updateRenderTargetMipmap(xe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Ve=0,nt=Z.length;Ve<nt;Ve++){const _t=Z[Ve],Wt=_t.object,kt=_t.geometry,pt=_t.material,$e=_t.group;if(pt.side===Oi&&Wt.layers.test(ie.layers)){const ln=pt.side;pt.side=Hn,pt.needsUpdate=!0,jt(Wt,oe,ie,kt,pt,$e),pt.side=ln,pt.needsUpdate=!0,Ye=!0}}Ye===!0&&(I.updateMultisampleRenderTarget(xe),I.updateRenderTargetMipmap(xe))}v.setRenderTarget(Ue),v.setClearColor(V,Y),We!==void 0&&(ie.viewport=We),v.toneMapping=Ne}function At(P,Z,oe){const ie=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,xe=P.length;Q<xe;Q++){const Le=P[Q],Ue=Le.object,Ne=Le.geometry,We=ie===null?Le.material:ie,Ye=Le.group;Ue.layers.test(oe.layers)&&jt(Ue,Z,oe,Ne,We,Ye)}}function jt(P,Z,oe,ie,Q,xe){P.onBeforeRender(v,Z,oe,ie,Q,xe),P.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(v,Z,oe,ie,P,xe),Q.transparent===!0&&Q.side===Oi&&Q.forceSinglePass===!1?(Q.side=Hn,Q.needsUpdate=!0,v.renderBufferDirect(oe,Z,ie,Q,P,xe),Q.side=Hr,Q.needsUpdate=!0,v.renderBufferDirect(oe,Z,ie,Q,P,xe),Q.side=Oi):v.renderBufferDirect(oe,Z,ie,Q,P,xe),P.onAfterRender(v,Z,oe,ie,Q,xe)}function wt(P,Z,oe){Z.isScene!==!0&&(Z=pe);const ie=ue.get(P),Q=m.state.lights,xe=m.state.shadowsArray,Le=Q.state.version,Ue=Ee.getParameters(P,Q.state,xe,Z,oe),Ne=Ee.getProgramCacheKey(Ue);let We=ie.programs;ie.environment=P.isMeshStandardMaterial?Z.environment:null,ie.fog=Z.fog,ie.envMap=(P.isMeshStandardMaterial?te:R).get(P.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&P.envMap===null?Z.environmentRotation:P.envMapRotation,We===void 0&&(P.addEventListener("dispose",Qe),We=new Map,ie.programs=We);let Ye=We.get(Ne);if(Ye!==void 0){if(ie.currentProgram===Ye&&ie.lightsStateVersion===Le)return gt(P,Ue),Ye}else Ue.uniforms=Ee.getUniforms(P),P.onBeforeCompile(Ue,v),Ye=Ee.acquireProgram(Ue,Ne),We.set(Ne,Ye),ie.uniforms=Ue.uniforms;const Ve=ie.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ve.clippingPlanes=be.uniform),gt(P,Ue),ie.needsLights=yn(P),ie.lightsStateVersion=Le,ie.needsLights&&(Ve.ambientLightColor.value=Q.state.ambient,Ve.lightProbe.value=Q.state.probe,Ve.directionalLights.value=Q.state.directional,Ve.directionalLightShadows.value=Q.state.directionalShadow,Ve.spotLights.value=Q.state.spot,Ve.spotLightShadows.value=Q.state.spotShadow,Ve.rectAreaLights.value=Q.state.rectArea,Ve.ltc_1.value=Q.state.rectAreaLTC1,Ve.ltc_2.value=Q.state.rectAreaLTC2,Ve.pointLights.value=Q.state.point,Ve.pointLightShadows.value=Q.state.pointShadow,Ve.hemisphereLights.value=Q.state.hemi,Ve.directionalShadowMap.value=Q.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ve.spotShadowMap.value=Q.state.spotShadowMap,Ve.spotLightMatrix.value=Q.state.spotLightMatrix,Ve.spotLightMap.value=Q.state.spotLightMap,Ve.pointShadowMap.value=Q.state.pointShadowMap,Ve.pointShadowMatrix.value=Q.state.pointShadowMatrix),ie.currentProgram=Ye,ie.uniformsList=null,Ye}function Mt(P){if(P.uniformsList===null){const Z=P.currentProgram.getUniforms();P.uniformsList=Mc.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function gt(P,Z){const oe=ue.get(P);oe.outputColorSpace=Z.outputColorSpace,oe.batching=Z.batching,oe.batchingColor=Z.batchingColor,oe.instancing=Z.instancing,oe.instancingColor=Z.instancingColor,oe.instancingMorph=Z.instancingMorph,oe.skinning=Z.skinning,oe.morphTargets=Z.morphTargets,oe.morphNormals=Z.morphNormals,oe.morphColors=Z.morphColors,oe.morphTargetsCount=Z.morphTargetsCount,oe.numClippingPlanes=Z.numClippingPlanes,oe.numIntersection=Z.numClipIntersection,oe.vertexAlphas=Z.vertexAlphas,oe.vertexTangents=Z.vertexTangents,oe.toneMapping=Z.toneMapping}function Wn(P,Z,oe,ie,Q){Z.isScene!==!0&&(Z=pe),I.resetTextureUnits();const xe=Z.fog,Le=ie.isMeshStandardMaterial?Z.environment:null,Ue=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Vo,Ne=(ie.isMeshStandardMaterial?te:R).get(ie.envMap||Le),We=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Ye=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ve=!!oe.morphAttributes.position,nt=!!oe.morphAttributes.normal,_t=!!oe.morphAttributes.color;let Wt=Ur;ie.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Wt=v.toneMapping);const kt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,pt=kt!==void 0?kt.length:0,$e=ue.get(ie),ln=m.state.lights;if(O===!0&&(L===!0||P!==b)){const xn=P===b&&ie.id===S;be.setState(ie,P,xn)}let vt=!1;ie.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==ln.state.version||$e.outputColorSpace!==Ue||Q.isBatchedMesh&&$e.batching===!1||!Q.isBatchedMesh&&$e.batching===!0||Q.isBatchedMesh&&$e.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&$e.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&$e.instancing===!1||!Q.isInstancedMesh&&$e.instancing===!0||Q.isSkinnedMesh&&$e.skinning===!1||!Q.isSkinnedMesh&&$e.skinning===!0||Q.isInstancedMesh&&$e.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&$e.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&$e.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&$e.instancingMorph===!1&&Q.morphTexture!==null||$e.envMap!==Ne||ie.fog===!0&&$e.fog!==xe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==be.numPlanes||$e.numIntersection!==be.numIntersection)||$e.vertexAlphas!==We||$e.vertexTangents!==Ye||$e.morphTargets!==Ve||$e.morphNormals!==nt||$e.morphColors!==_t||$e.toneMapping!==Wt||$e.morphTargetsCount!==pt)&&(vt=!0):(vt=!0,$e.__version=ie.version);let vi=$e.currentProgram;vt===!0&&(vi=wt(ie,Z,Q));let Bs=!1,qn=!1,Jo=!1;const Lt=vi.getUniforms(),oi=$e.uniforms;if(H.useProgram(vi.program)&&(Bs=!0,qn=!0,Jo=!0),ie.id!==S&&(S=ie.id,qn=!0),Bs||b!==P){H.buffers.depth.getReversed()?(A.copy(P.projectionMatrix),Yb(A),jb(A),Lt.setValue(T,"projectionMatrix",A)):Lt.setValue(T,"projectionMatrix",P.projectionMatrix),Lt.setValue(T,"viewMatrix",P.matrixWorldInverse);const Ln=Lt.map.cameraPosition;Ln!==void 0&&Ln.setValue(T,he.setFromMatrixPosition(P.matrixWorld)),z.logarithmicDepthBuffer&&Lt.setValue(T,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Lt.setValue(T,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,qn=!0,Jo=!0)}if(Q.isSkinnedMesh){Lt.setOptional(T,Q,"bindMatrix"),Lt.setOptional(T,Q,"bindMatrixInverse");const xn=Q.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Lt.setValue(T,"boneTexture",xn.boneTexture,I))}Q.isBatchedMesh&&(Lt.setOptional(T,Q,"batchingTexture"),Lt.setValue(T,"batchingTexture",Q._matricesTexture,I),Lt.setOptional(T,Q,"batchingIdTexture"),Lt.setValue(T,"batchingIdTexture",Q._indirectTexture,I),Lt.setOptional(T,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Lt.setValue(T,"batchingColorTexture",Q._colorsTexture,I));const ai=oe.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&He.update(Q,oe,vi),(qn||$e.receiveShadow!==Q.receiveShadow)&&($e.receiveShadow=Q.receiveShadow,Lt.setValue(T,"receiveShadow",Q.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(oi.envMap.value=Ne,oi.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&Z.environment!==null&&(oi.envMapIntensity.value=Z.environmentIntensity),qn&&(Lt.setValue(T,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&Pt(oi,Jo),xe&&ie.fog===!0&&Se.refreshFogUniforms(oi,xe),Se.refreshMaterialUniforms(oi,ie,B,X,m.state.transmissionRenderTarget[P.id]),Mc.upload(T,Mt($e),oi,I)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Mc.upload(T,Mt($e),oi,I),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Lt.setValue(T,"center",Q.center),Lt.setValue(T,"modelViewMatrix",Q.modelViewMatrix),Lt.setValue(T,"normalMatrix",Q.normalMatrix),Lt.setValue(T,"modelMatrix",Q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const xn=ie.uniformsGroups;for(let Ln=0,fu=xn.length;Ln<fu;Ln++){const Xr=xn[Ln];W.update(Xr,vi),W.bind(Xr,vi)}}return vi}function Pt(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function yn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,Z,oe){ue.get(P.texture).__webglTexture=Z,ue.get(P.depthTexture).__webglTexture=oe;const ie=ue.get(P);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=oe===void 0,ie.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Z){const oe=ue.get(P);oe.__webglFramebuffer=Z,oe.__useDefaultFramebuffer=Z===void 0};const si=T.createFramebuffer();this.setRenderTarget=function(P,Z=0,oe=0){C=P,M=Z,w=oe;let ie=!0,Q=null,xe=!1,Le=!1;if(P){const Ne=ue.get(P);if(Ne.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(T.FRAMEBUFFER,null),ie=!1;else if(Ne.__webglFramebuffer===void 0)I.setupRenderTarget(P);else if(Ne.__hasExternalTextures)I.rebindTextures(P,ue.get(P.texture).__webglTexture,ue.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ve=P.depthTexture;if(Ne.__boundDepthTexture!==Ve){if(Ve!==null&&ue.has(Ve)&&(P.width!==Ve.image.width||P.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(P)}}const We=P.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Le=!0);const Ye=ue.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ye[Z])?Q=Ye[Z][oe]:Q=Ye[Z],xe=!0):P.samples>0&&I.useMultisampledRTT(P)===!1?Q=ue.get(P).__webglMultisampledFramebuffer:Array.isArray(Ye)?Q=Ye[oe]:Q=Ye,D.copy(P.viewport),N.copy(P.scissor),G=P.scissorTest}else D.copy(ge).multiplyScalar(B).floor(),N.copy(_e).multiplyScalar(B).floor(),G=we;if(oe!==0&&(Q=si),H.bindFramebuffer(T.FRAMEBUFFER,Q)&&ie&&H.drawBuffers(P,Q),H.viewport(D),H.scissor(N),H.setScissorTest(G),xe){const Ne=ue.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ne.__webglTexture,oe)}else if(Le){const Ne=ue.get(P.texture),We=Z;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ne.__webglTexture,oe,We)}else if(P!==null&&oe!==0){const Ne=ue.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ne.__webglTexture,oe)}S=-1},this.readRenderTargetPixels=function(P,Z,oe,ie,Q,xe,Le){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ue.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){H.bindFramebuffer(T.FRAMEBUFFER,Ue);try{const Ne=P.texture,We=Ne.format,Ye=Ne.type;if(!z.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-ie&&oe>=0&&oe<=P.height-Q&&T.readPixels(Z,oe,ie,Q,Je.convert(We),Je.convert(Ye),xe)}finally{const Ne=C!==null?ue.get(C).__webglFramebuffer:null;H.bindFramebuffer(T.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(P,Z,oe,ie,Q,xe,Le){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=ue.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){const Ne=P.texture,We=Ne.format,Ye=Ne.type;if(!z.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=P.width-ie&&oe>=0&&oe<=P.height-Q){H.bindFramebuffer(T.FRAMEBUFFER,Ue);const Ve=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ve),T.bufferData(T.PIXEL_PACK_BUFFER,xe.byteLength,T.STREAM_READ),T.readPixels(Z,oe,ie,Q,Je.convert(We),Je.convert(Ye),0);const nt=C!==null?ue.get(C).__webglFramebuffer:null;H.bindFramebuffer(T.FRAMEBUFFER,nt);const _t=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await $b(T,_t,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ve),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,xe),T.deleteBuffer(Ve),T.deleteSync(_t),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Z=null,oe=0){P.isTexture!==!0&&(os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,P=arguments[1]);const ie=Math.pow(2,-oe),Q=Math.floor(P.image.width*ie),xe=Math.floor(P.image.height*ie),Le=Z!==null?Z.x:0,Ue=Z!==null?Z.y:0;I.setTexture2D(P,0),T.copyTexSubImage2D(T.TEXTURE_2D,oe,0,0,Le,Ue,Q,xe),H.unbindTexture()};const Jt=T.createFramebuffer(),Qt=T.createFramebuffer();this.copyTextureToTexture=function(P,Z,oe=null,ie=null,Q=0,xe=null){P.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,P=arguments[1],Z=arguments[2],xe=arguments[3]||0,oe=null),xe===null&&(Q!==0?(os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=Q,Q=0):xe=0);let Le,Ue,Ne,We,Ye,Ve,nt,_t,Wt;const kt=P.isCompressedTexture?P.mipmaps[xe]:P.image;if(oe!==null)Le=oe.max.x-oe.min.x,Ue=oe.max.y-oe.min.y,Ne=oe.isBox3?oe.max.z-oe.min.z:1,We=oe.min.x,Ye=oe.min.y,Ve=oe.isBox3?oe.min.z:0;else{const ai=Math.pow(2,-Q);Le=Math.floor(kt.width*ai),Ue=Math.floor(kt.height*ai),P.isDataArrayTexture?Ne=kt.depth:P.isData3DTexture?Ne=Math.floor(kt.depth*ai):Ne=1,We=0,Ye=0,Ve=0}ie!==null?(nt=ie.x,_t=ie.y,Wt=ie.z):(nt=0,_t=0,Wt=0);const pt=Je.convert(Z.format),$e=Je.convert(Z.type);let ln;Z.isData3DTexture?(I.setTexture3D(Z,0),ln=T.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(I.setTexture2DArray(Z,0),ln=T.TEXTURE_2D_ARRAY):(I.setTexture2D(Z,0),ln=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,Z.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,Z.unpackAlignment);const vt=T.getParameter(T.UNPACK_ROW_LENGTH),vi=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Bs=T.getParameter(T.UNPACK_SKIP_PIXELS),qn=T.getParameter(T.UNPACK_SKIP_ROWS),Jo=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,kt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,kt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,We),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ye),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ve);const Lt=P.isDataArrayTexture||P.isData3DTexture,oi=Z.isDataArrayTexture||Z.isData3DTexture;if(P.isDepthTexture){const ai=ue.get(P),xn=ue.get(Z),Ln=ue.get(ai.__renderTarget),fu=ue.get(xn.__renderTarget);H.bindFramebuffer(T.READ_FRAMEBUFFER,Ln.__webglFramebuffer),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,fu.__webglFramebuffer);for(let Xr=0;Xr<Ne;Xr++)Lt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ue.get(P).__webglTexture,Q,Ve+Xr),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ue.get(Z).__webglTexture,xe,Wt+Xr)),T.blitFramebuffer(We,Ye,Le,Ue,nt,_t,Le,Ue,T.DEPTH_BUFFER_BIT,T.NEAREST);H.bindFramebuffer(T.READ_FRAMEBUFFER,null),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(Q!==0||P.isRenderTargetTexture||ue.has(P)){const ai=ue.get(P),xn=ue.get(Z);H.bindFramebuffer(T.READ_FRAMEBUFFER,Jt),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,Qt);for(let Ln=0;Ln<Ne;Ln++)Lt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ai.__webglTexture,Q,Ve+Ln):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ai.__webglTexture,Q),oi?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xn.__webglTexture,xe,Wt+Ln):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,xn.__webglTexture,xe),Q!==0?T.blitFramebuffer(We,Ye,Le,Ue,nt,_t,Le,Ue,T.COLOR_BUFFER_BIT,T.NEAREST):oi?T.copyTexSubImage3D(ln,xe,nt,_t,Wt+Ln,We,Ye,Le,Ue):T.copyTexSubImage2D(ln,xe,nt,_t,We,Ye,Le,Ue);H.bindFramebuffer(T.READ_FRAMEBUFFER,null),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else oi?P.isDataTexture||P.isData3DTexture?T.texSubImage3D(ln,xe,nt,_t,Wt,Le,Ue,Ne,pt,$e,kt.data):Z.isCompressedArrayTexture?T.compressedTexSubImage3D(ln,xe,nt,_t,Wt,Le,Ue,Ne,pt,kt.data):T.texSubImage3D(ln,xe,nt,_t,Wt,Le,Ue,Ne,pt,$e,kt):P.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,xe,nt,_t,Le,Ue,pt,$e,kt.data):P.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,xe,nt,_t,kt.width,kt.height,pt,kt.data):T.texSubImage2D(T.TEXTURE_2D,xe,nt,_t,Le,Ue,pt,$e,kt);T.pixelStorei(T.UNPACK_ROW_LENGTH,vt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,vi),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Bs),T.pixelStorei(T.UNPACK_SKIP_ROWS,qn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Jo),xe===0&&Z.generateMipmaps&&T.generateMipmap(ln),H.unbindTexture()},this.copyTextureToTexture3D=function(P,Z,oe=null,ie=null,Q=0){return P.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ie=arguments[1]||null,P=arguments[2],Z=arguments[3],Q=arguments[4]||0),os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Z,oe,ie,Q)},this.initRenderTarget=function(P){ue.get(P).__webglFramebuffer===void 0&&I.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?I.setTextureCube(P,0):P.isData3DTexture?I.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?I.setTexture2DArray(P,0):I.setTexture2D(P,0),H.unbindTexture()},this.resetState=function(){M=0,w=0,C=null,H.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const Km={maxFpsDesktop:null,maxFpsMobile:45};function ZT(){return typeof navigator>"u"?!1:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600}function KT(){const r=ZT()?Km.maxFpsMobile:Km.maxFpsDesktop;if(r==null||r<=0)return 0;const e=Number(r);return Number.isFinite(e)&&e>0?e:0}var eA=`varying vec2 vUv;

void main() {\r
    vUv = uv;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,tA=`varying vec2 vUv;

uniform float u_time;\r
uniform float u_timeAbsolute;\r
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

uniform float u_noiseScaleEffective;\r
uniform float u_gainEffective;\r
uniform float u_zoomEffective;\r
uniform float u_turbulenceEffective;\r
uniform vec2 u_directionEffective;\r
uniform float u_colorMix1Effective;\r
uniform float u_colorMix2Effective;\r
uniform float u_colorSpreadEffective;\r
uniform float u_colorShiftOffset;

uniform float u_circularMotionIntensity;  
uniform float u_evolutionSpeed;            
uniform float u_layerBlend;                
uniform float u_colorEvolutionSpeed;       

uniform float u_baseWeight;                
uniform float u_midWeight;                 
uniform float u_highWeight;                

uniform float u_warpScale;                 
uniform float u_flowType;                  

uniform float u_noiseType;                 
uniform float u_cellScale;                 
uniform float u_cellJitter;                

uniform float u_vignetteStrength;          
uniform float u_vignetteRadius;            
uniform float u_centerMaskStrength;        
uniform float u_centerMaskSize;            

uniform float u_detailMasking;             

uniform float u_edgeEnhance;               
uniform float u_postPosterize;             

uniform float u_iridescenceStrength;       
uniform float u_iridescenceSmoothness;     
uniform int   u_iridescenceBlendMode;      
uniform float u_fresnelStrength;           
uniform float u_specularStrength;          
uniform float u_flakeStrength;             
uniform float u_flakeScale;                

uniform float u_rippleFrequency;           
uniform float u_rippleStrength;            
uniform float u_quantizeStep;              
uniform float u_mirrorX;                   
uniform float u_mirrorY;                   

uniform float u_patternMorph;              
uniform float u_lacunarityOscillation;     
uniform float u_gainOscillation;           
uniform float u_warpFeedback;              
uniform float u_spectralBreathing;         

uniform float u_warpLayers;                
uniform float u_noiseDistortion;           
uniform float u_turbulentFbm;              
uniform float u_layerInteraction;          

uniform float u_translationScale;          

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

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v) {\r
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,\r
                       -0.577350269189626, 0.024390243902439);\r
    vec2 i  = floor(v + dot(v, C.yy) );\r
    vec2 x0 = v -   i + dot(i, C.xx);\r
    vec2 i1;\r
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\r
    vec4 x12 = x0.xyxy + C.xxzz;\r
    x12.xy -= i1;\r
    i = mod(i, 289.0);\r
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\r
    + i.x + vec3(0.0, i1.x, 1.0 ));\r
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),\r
    dot(x12.zw,x12.zw)), 0.0);\r
    m = m*m ;\r
    m = m*m ;\r
    vec3 x = 2.0 * fract(p * C.www) - 1.0;\r
    vec3 h = abs(x) - 0.5;\r
    vec3 ox = floor(x + 0.5);\r
    vec3 a0 = x - ox;\r
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\r
    vec3 g;\r
    g.x  = a0.x  * x0.x  + h.x  * x0.y;\r
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\r
    return 130.0 * dot(m, g);\r
}

float fbm(vec2 st, int octaves, float lacunarity, float gain) {\r
    float value = 0.0;\r
    float amplitude = 0.5;\r
    float frequency = 1.0;\r
    \r
    for(int i = 0; i < 8; i++) {\r
        if(i >= octaves) break;\r
        \r
        value += amplitude * snoise(st * frequency);\r
        frequency *= lacunarity;\r
        amplitude *= gain;\r
    }\r
    \r
    return value;\r
}

float fbmEnhanced(vec2 st, int octaves, float lacunarity, float gain, float turbulence) {\r
    float value = 0.0;\r
    float amplitude = 0.5;\r
    float frequency = 1.0;\r
    \r
    for(int i = 0; i < 8; i++) {\r
        if(i >= octaves) break;\r
        \r
        float n = snoise(st * frequency);\r
        n = mix(n, abs(n) * 2.0 - 1.0, turbulence);\r
        \r
        value += amplitude * n;\r
        frequency *= lacunarity;\r
        amplitude *= gain;\r
    }\r
    \r
    return value;\r
}

float fbmT1(vec2 st, float lacunarity, float gain, float turb) {\r
    float n = snoise(st);\r
    return mix(n, abs(n) * 2.0 - 1.0, turb) * 0.5;\r
}

float fbmT2(vec2 st, float lacunarity, float gain, float turb) {\r
    float n, v = 0.0, a = 0.5, f = 1.0;\r
    n = snoise(st * f); v += a * mix(n, abs(n) * 2.0 - 1.0, turb); f *= lacunarity; a *= gain;\r
    n = snoise(st * f); v += a * mix(n, abs(n) * 2.0 - 1.0, turb);\r
    return v;\r
}

float fbmT3(vec2 st, float lacunarity, float gain, float turb) {\r
    float n, v = 0.0, a = 0.5, f = 1.0;\r
    n = snoise(st * f); v += a * mix(n, abs(n) * 2.0 - 1.0, turb); f *= lacunarity; a *= gain;\r
    n = snoise(st * f); v += a * mix(n, abs(n) * 2.0 - 1.0, turb); f *= lacunarity; a *= gain;\r
    n = snoise(st * f); v += a * mix(n, abs(n) * 2.0 - 1.0, turb);\r
    return v;\r
}

float fbmTurb(vec2 st, int octaves, float lacunarity, float gain, float turb) {\r
    if (octaves <= 1) return fbmT1(st, lacunarity, gain, turb);\r
    if (octaves == 2) return fbmT2(st, lacunarity, gain, turb);\r
    return fbmT3(st, lacunarity, gain, turb);\r
}

vec2 curlNoise(vec2 p) {\r
    const float e = 0.1;\r
    float n1 = snoise(p + vec2(e, 0.0));\r
    float n2 = snoise(p - vec2(e, 0.0));\r
    float n3 = snoise(p + vec2(0.0, e));\r
    float n4 = snoise(p - vec2(0.0, e));\r
    \r
    float x = n2 - n1;\r
    float y = n4 - n3;\r
    \r
    
    return vec2(y, -x) * (1.0 / (2.0 * e)); 
}

float fastHash(vec2 p) {\r
    
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\r
}

vec2 hash2(vec2 p) {\r
    p = fract(p * vec2(443.897, 441.423));\r
    p += dot(p, p.yx + 19.19);\r
    return fract(vec2(p.x * p.y, p.x + p.y));\r
}

float worley(vec2 st, float jitter) {\r
    vec2 p = floor(st);\r
    vec2 f = fract(st);\r
    \r
    float min_dist = 1.0;  
    \r
    
    for (int y = -1; y <= 1; y++) {\r
        for (int x = -1; x <= 1; x++) {\r
            vec2 neighbor = vec2(float(x), float(y));\r
            \r
            
            vec2 point = hash2(p + neighbor);\r
            \r
            
            
            
            point = 0.5 + 0.5 * sin(mod(u_time, 600.0) * 0.2 + 6.2831 * point);\r
            \r
            
            vec2 diff = neighbor + point * jitter - f;\r
            \r
            
            float dist = length(diff);\r
            \r
            
            min_dist = min(min_dist, dist);\r
        }\r
    }\r
    \r
    return min_dist;\r
}

vec2 domainWarp(vec2 p, float time, float warpAmount, int warpOctaves) {\r
    if (u_flowType > 0.5) {\r
        
        
        vec2 t = vec2(time * 0.1);\r
        vec2 q = curlNoise(p * u_warpScale + t);\r
        \r
        
        if (warpOctaves > 1) {\r
            q += curlNoise(p * u_warpScale * 2.0 - t) * 0.5;\r
        }\r
        \r
        return p + warpAmount * q;\r
        \r
    } else {\r
        
        
        float t1 = time * 0.05;\r
        float t2 = time * 0.03;\r
        \r
        vec2 q = vec2(\r
            sin(p.x * 0.5 + t1) + sin(p.y * 0.3 + t1 * 1.3),\r
            sin(p.x * 0.3 + t2) + sin(p.y * 0.5 + t2 * 0.7)\r
        ) * 0.5;\r
        \r
        return p + warpAmount * q;\r
    }\r
}

float ridge(float n) {\r
    return 1.0 - abs(n);\r
}

float ridgedFbm(vec2 st, int octaves, float lacunarity, float gain) {\r
    float value = 0.0;\r
    float amplitude = 0.5;\r
    float frequency = 1.0;\r
    \r
    for(int i = 0; i < 8; i++) {\r
        if(i >= octaves) break;\r
        \r
        float n = ridge(snoise(st * frequency));\r
        value += amplitude * n;\r
        frequency *= lacunarity;\r
        amplitude *= gain;\r
    }\r
    \r
    return value;\r
}

float detailNoise(vec2 st, float time, float scale, float speed) {\r
    float t = mod(time, 600.0);\r
    vec2 offset = vec2(t * speed * 0.05, t * speed * 0.03);\r
    return snoise((st + offset) * scale) * 0.5 + 0.5;\r
}

float filmGrain(vec2 st, float time, float size, float speed, float grainAspectRatio, float complexity, float frameHold) {\r
    
    float t = time * speed / max(1.0, frameHold);\r
    float frame = floor(t);\r
    float interp = fract(t);\r
    \r
    
    vec2 pos = st * size;\r
    pos.x *= grainAspectRatio;\r
    vec2 cell = floor(pos);\r
    vec2 cellFract = fract(pos);\r
    \r
    
    vec2 cellHash = hash2(cell);\r
    vec2 cellOffset = (cellHash - 0.5) * 0.3;\r
    vec2 adjustedCellFract = fract(cellFract + cellOffset);\r
    \r
    
    vec2 seed1 = cell + frame * 0.1 + cellHash.x * 10.0;\r
    vec2 seed2 = cell + (frame + 1.0) * 0.1 + cellHash.y * 10.0;\r
    \r
    
    float grain1 = fastHash(seed1);\r
    float grain2 = fastHash(seed2);\r
    \r
    
    
    float microGrain1 = fastHash(seed1 * 2.7 + adjustedCellFract * 3.1);\r
    float microGrain2 = fastHash(seed2 * 2.7 + adjustedCellFract * 3.1);\r
    \r
    
    float complexityBlend = min(complexity * 0.5, 0.5);\r
    grain1 = mix(grain1, (grain1 + microGrain1) * 0.5, complexityBlend);\r
    grain2 = mix(grain2, (grain2 + microGrain2) * 0.5, complexityBlend);\r
    \r
    
    float sparkle = fract(dot(adjustedCellFract, vec2(12.9898, 78.233)) * 43758.5453);\r
    sparkle = (sparkle - 0.5) * complexity * 0.2;\r
    grain1 += sparkle;\r
    grain2 += sparkle * 0.8;\r
    \r
    
    grain1 = clamp(grain1, 0.0, 1.0);\r
    grain2 = clamp(grain2, 0.0, 1.0);\r
    \r
    
    return mix(grain1, grain2, interp);\r
}

vec3 applyGrain(vec3 base, float grain, float intensity, int mode) {\r
    
    vec3 overlay = base * (1.0 + (grain - 0.5) * intensity * 0.5);\r
    vec3 multiply = base * mix(1.0, grain, intensity);\r
    vec3 add = base + (grain - 0.5) * intensity;\r
    vec3 screen = 1.0 - (1.0 - base) * (1.0 - grain * intensity);\r
    \r
    
    
    float isMode0 = 1.0 - min(float(mode), 1.0);  
    float isMode1 = step(0.5, float(mode)) * step(float(mode), 1.5);  
    float isMode2 = step(1.5, float(mode)) * step(float(mode), 2.5);  
    float isMode3 = step(2.5, float(mode));  
    \r
    return overlay * isMode0 + multiply * isMode1 + add * isMode2 + screen * isMode3;\r
}

vec3 computeNormal(float field) {\r
  
  
  
  float dx = clamp(dFdx(field), -0.02, 0.02) * 60.0;\r
  float dy = clamp(dFdy(field), -0.02, 0.02) * 60.0;\r
  return normalize(vec3(dx, dy, 1.0));\r
}

vec3 thinFilmIridescence(vec3 normal) {\r
    const float TAU = 6.28318530718;

    
    
    float gradAngle = atan(normal.y, normal.x) / TAU; 

    
    
    float gradMag = length(normal.xy);

    
    float timePhase = u_time * 0.05;

    
    
    
    
    float _s = max(u_iridescenceSmoothness, 0.0);\r
    float cycleRate = mix(5.0, 0.3, clamp(_s, 0.0, 1.0))\r
                    - 0.3 * clamp((_s - 1.0) / 4.0, 0.0, 1.0);\r
    float opd = gradAngle + gradMag * cycleRate + timePhase;

    
    
    
    return vec3(\r
        0.5 + 0.5 * cos(opd * TAU),\r
        0.5 + 0.5 * cos(opd * TAU + TAU / 3.0),\r
        0.5 + 0.5 * cos(opd * TAU + 2.0 * TAU / 3.0)\r
    );\r
}

vec3 fresnelTint(vec3 normal, vec3 tintColor, float strength) {\r
  
  
  float f = pow(clamp(1.0 - normal.z, 0.0, 1.0), 1.5);\r
  return tintColor * f * strength;\r
}

float specularHighlight(vec3 normal, vec3 lightDir, float strength) {\r
  
  vec3 viewDir = vec3(0.0, 0.0, 1.0);\r
  vec3 halfDir = normalize(lightDir + viewDir);\r
  float NdotH = max(dot(normal, halfDir), 0.0);\r
  \r
  
  float spec = pow(NdotH, 300.0);\r
  \r
  
  
  
  float aa = fwidth(spec);\r
  float mask = smoothstep(0.05 - aa, 0.05 + aa, spec);\r
  \r
  
  
  return spec * mask * strength;\r
}

float sparkleNoise(vec2 uv) {\r
    float n = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);\r
    return n;\r
}

vec3 metallicFlakes(vec2 uv, vec3 normal, float scale, float strength, float time, vec3 baseColor, float displacement) {\r
    
    vec2 flakeUV = uv * scale;\r
    \r
    
    vec2 cell = floor(flakeUV);\r
    vec2 local = fract(flakeUV);\r
    \r
    
    vec2 randomCenter = hash2(cell) * 0.6 + 0.2;\r
    \r
    
    float dist = distance(local, randomCenter);\r
    \r
    
    float hash = sparkleNoise(cell);\r
    \r
    
    float colorHash = sparkleNoise(cell + vec2(42.7, 13.3));\r
    \r
    
    
    float probability = smoothstep(0.97, 1.0, hash);\r
    \r
    
    
    float shape = 1.0 - smoothstep(0.2, 0.8, dist);\r
    \r
    
    float light = max(dot(normal, vec3(0.0, 0.0, 1.0)), 0.0);\r
    \r
    
    
    
    float displacementFactor = smoothstep(0.2, 0.8, displacement);\r
    float prominence = 1.0 + 2.0 * displacementFactor;\r
    \r
    
    
    vec3 sparkColor = mix(baseColor * 3.0, vec3(1.5), 0.6 + colorHash * 0.4);\r
    \r
    
    return sparkColor * probability * shape * strength * light * prominence;\r
}\r

void main() {\r
    
    vec2 uv = vUv;\r
    vec2 st = (uv - 0.5) * 2.0;\r
    st.x *= u_resolution.x / u_resolution.y;\r
    \r
    
    st *= u_zoomEffective;\r
    \r
    
    
    
    
    const float LOOP_DUR   = 600.0;\r
    const float TWO_PI     = 6.28318530718;\r
    \r
    
    float tLoop   = mod(u_time, LOOP_DUR);           
    float tNorm   = tLoop / LOOP_DUR;                
    float tAngle  = tNorm * TWO_PI;                  
    \r
    
    vec2  phase   = vec2(cos(tAngle), sin(tAngle));  
    float pulse1  = sin(tAngle * 1.0);               
    float pulse2  = cos(tAngle * 1.7);               
    float pulse3  = sin(tAngle * 0.6 + 1.2);         
    
    \r
    
    if (u_mirrorX > 0.5) st.x = abs(st.x);\r
    if (u_mirrorY > 0.5) st.y = abs(st.y);\r
    \r
    
    
    if (u_rippleStrength > 0.001) {\r
        float rippleSpeed = tLoop * 2.0;\r
        st.x += sin(st.y * u_rippleFrequency + rippleSpeed) * u_rippleStrength;\r
        st.y += cos(st.x * u_rippleFrequency + rippleSpeed * 0.8) * u_rippleStrength;\r
    }\r
    \r
    
    
    
    vec2 circularMotion = vec2(\r
        sin(tLoop * 0.3) * 0.5,\r
        cos(tLoop * 0.23) * 0.5\r
    ) * u_circularMotionIntensity; 
    \r
    
    
    
    vec2 movement = (u_directionEffective * tLoop + circularMotion) * u_translationScale;\r
    st += movement;\r
    \r
    
    
    
    float evolution = tLoop * u_evolutionSpeed; 
    vec2 evolvedSt = st + vec2(\r
        sin(evolution * 0.7) * 0.3,\r
        cos(evolution * 0.5) * 0.3\r
    );\r
    \r
    
    
    vec2 warpedPos = evolvedSt * u_noiseScaleEffective;\r
    float warpTime = tLoop * u_speed;\r
    if(u_turbulenceEffective > 0.01) {\r
        warpedPos = domainWarp(warpedPos, warpTime, u_turbulenceEffective, u_warpOctaves);\r
    }\r
    \r
    
    \r
    
    
    if (u_warpLayers > 0.5) {\r
        
        warpedPos = domainWarp(warpedPos, warpTime * 0.7, u_turbulenceEffective * 0.6, 1);\r
    }\r
    if (u_warpLayers > 1.5) {\r
        
        warpedPos = domainWarp(warpedPos, warpTime * 1.3, u_turbulenceEffective * 0.3, 1);\r
    }\r
    if (u_warpLayers > 2.5) {\r
        
        warpedPos = domainWarp(warpedPos, warpTime * 2.0, u_turbulenceEffective * 0.15, 1);\r
    }\r
    \r
    
    float distortionNoise = 0.0;\r
    if (u_noiseDistortion > 0.01) {\r
        distortionNoise = snoise(warpedPos * 0.3) * u_noiseDistortion;\r
    }\r
    
    \r
    
    
    
    \r
    float morphTime = tLoop * 0.1 * u_patternMorph;\r
    \r
    
    float dynamicLacunarity = u_lacunarity;\r
    if (u_lacunarityOscillation > 0.01 && u_patternMorph > 0.01) {\r
        
        float lacOsc = sin(morphTime * 1.7) * 0.3 * u_lacunarityOscillation;\r
        dynamicLacunarity = u_lacunarity * (1.0 + lacOsc);\r
    }\r
    \r
    
    float dynamicGain = u_gainEffective;\r
    if (u_gainOscillation > 0.01 && u_patternMorph > 0.01) {\r
        
        float gainOsc = sin(morphTime * 1.3 + 1.5) * 0.4 * u_gainOscillation;\r
        dynamicGain = u_gainEffective * (1.0 + gainOsc);\r
    }\r
    \r
    
    
    if (u_warpFeedback > 0.01 && u_patternMorph > 0.01) {\r
        
        float feedbackNoise = snoise(warpedPos * 0.5 + tLoop * 0.02);\r
        \r
        
        vec2 feedbackOffset = vec2(\r
            sin(feedbackNoise * 6.28 + tLoop * 0.1),\r
            cos(feedbackNoise * 6.28 + tLoop * 0.13)\r
        ) * u_warpFeedback * u_patternMorph * 0.5;\r
        \r
        warpedPos += feedbackOffset;\r
    }\r
    
    \r
    
    float spatialLacunarity = dynamicLacunarity * (1.0 + distortionNoise * 0.3);\r
    float spatialGain = dynamicGain * (1.0 - distortionNoise * 0.2);\r
    \r
    
    
    
    \r
    
    float noiseBase = fbmT1(warpedPos, 2.0, 0.5, u_turbulentFbm);\r
    \r
    
    float noiseMid = fbmTurb(warpedPos * 2.5 + evolution * 0.15, u_octaves, spatialLacunarity, spatialGain, u_turbulentFbm);\r
    \r
    
    
    float noiseHigh = fbmTurb(warpedPos * 5.0 + evolution * 0.3 + vec2(5.2, 1.3), u_octaves, spatialLacunarity, spatialGain, u_turbulentFbm);\r
    \r
    
    
    
    if (u_detailMasking > 0.01) {\r
        float mask = smoothstep(0.3, 0.8, noiseBase);\r
        noiseHigh *= mix(1.0, mask, u_detailMasking);\r
        noiseMid *= mix(1.0, smoothstep(0.2, 0.9, noiseBase), u_detailMasking * 0.5);\r
    }

    
    
    float worleyNoise = 0.0;\r
    float worleyWeight = 0.0;\r
    \r
    if (u_noiseType > 0.01) {\r
        
        
        float cellScale = u_cellScale > 0.1 ? u_cellScale : 1.0;\r
        \r
        
        worleyNoise = worley(warpedPos * cellScale, u_cellJitter);\r
        \r
        
        worleyNoise = 1.0 - worleyNoise;\r
        \r
        
        
        worleyWeight = u_noiseType; 
    }\r
    \r
    
    
    float breatheBase = u_baseWeight;\r
    float breatheMid = u_midWeight;\r
    float breatheHigh = u_highWeight;\r
    \r
    
    if (u_spectralBreathing > 0.01 && u_patternMorph > 0.01) {\r
        float breatheTime = tLoop * 0.08;\r
        float intensity = u_spectralBreathing * u_patternMorph;\r
        \r
        
        breatheBase *= 1.0 + sin(breatheTime * 0.7) * 0.4 * intensity;\r
        breatheMid *= 1.0 + sin(breatheTime * 1.1 + 2.0) * 0.5 * intensity;\r
        breatheHigh *= 1.0 + sin(breatheTime * 1.7 + 4.0) * 0.6 * intensity;\r
    }\r
    
    \r
    
    
    float totalWeight = breatheBase + breatheMid + breatheHigh + worleyWeight + 0.001;\r
    float noise;\r
    \r
    if (u_layerInteraction > 0.01) {\r
        
        float additive = (noiseBase * breatheBase + noiseMid * breatheMid + noiseHigh * breatheHigh + worleyNoise * worleyWeight) / totalWeight;\r
        \r
        
        float baseNorm = noiseBase * 0.5 + 0.5;\r
        float midNorm = noiseMid * 0.5 + 0.5;\r
        float highNorm = noiseHigh * 0.5 + 0.5;\r
        float multiplicative = baseNorm * midNorm * highNorm * 2.0 - 0.5; 
        \r
        noise = mix(additive, multiplicative, u_layerInteraction);\r
    } else {\r
        
        noise = (noiseBase * breatheBase + noiseMid * breatheMid + noiseHigh * breatheHigh + worleyNoise * worleyWeight) / totalWeight;\r
    }\r
    
    \r
    
    if(u_ridgeAmount > 0.01) {\r
        float ridgeNoise = ridgedFbm(warpedPos, u_octaves, u_lacunarity, u_gainEffective);\r
        noise = mix(noise, ridgeNoise, u_ridgeAmount);\r
    }\r
    \r
    
    
    if(u_detailAmount > 0.01) {\r
        float detail = detailNoise(st, tLoop, u_detailScale, 1.0);\r
        noise += detail * u_detailAmount;\r
    }\r
    \r
    
    noise = noise * 0.5 + 0.5;

    
    
    float physicsNoise = noise;

    
    if (u_quantizeStep > 0.01) {\r
        float steps = mix(50.0, 2.0, u_quantizeStep); \r
        noise = floor(noise * steps) / steps;\r
    }\r
    \r
    
    if (abs(u_contrast - 1.0) > 0.01) {\r
        noise = pow(noise, 1.0 / u_contrast);\r
    }\r
    \r
    
    noise = smoothstep(0.0 - u_softness, 1.0 + u_softness, noise);\r
    \r
    
    
    float colorNoise = noise;\r
    \r
    
    float colorEvolution = fract(evolution * u_colorEvolutionSpeed);\r
    colorNoise = mix(colorNoise, fract(colorNoise + colorEvolution * 0.2), 0.4);\r
    \r
    if (abs(u_colorSpreadEffective - 0.5) > 0.01) {\r
        colorNoise = pow(colorNoise, 1.0 / (1.0 + u_colorSpreadEffective));\r
    }\r
    \r
    
    colorNoise = fract(colorNoise + u_colorShiftOffset);\r
    \r
    
    
    vec3 baseGradient;\r
    float t1 = smoothstep(0.0, 0.5, colorNoise);\r
    float t2 = smoothstep(0.5, 1.0, colorNoise);\r
    \r
    
    vec3 color1to2 = mix(u_color1, u_color2, t1);\r
    vec3 color2to3 = mix(u_color2, u_color3, t2);\r
    baseGradient = mix(color1to2, color2to3, smoothstep(0.3, 0.7, colorNoise));\r
    vec3 colorBlend = mix(\r
        mix(u_color1, u_color2, u_colorMix1Effective),\r
        u_color3,\r
        u_colorMix2Effective\r
    );\r
    baseGradient = mix(baseGradient, colorBlend, 0.5);\r
    \r
    
    vec3 separatedColors = baseGradient;\r
    if (u_colorSeparation > 0.01) {\r
        
        
        float sepPower = mix(1.0, 3.5, u_colorSeparation);\r
        \r
        
        float zone1 = smoothstep(0.0, 0.35, colorNoise) * (1.0 - smoothstep(0.2, 0.45, colorNoise));\r
        float zone2 = smoothstep(0.3, 0.5, colorNoise) * (1.0 - smoothstep(0.5, 0.7, colorNoise));\r
        float zone3 = smoothstep(0.55, 0.75, colorNoise);\r
        \r
        
        zone1 = pow(zone1, 1.0 / sepPower);\r
        zone2 = pow(zone2, 1.0 / sepPower);\r
        zone3 = pow(zone3, 1.0 / sepPower);\r
        \r
        
        float totalWeight = zone1 + zone2 + zone3 + 0.001;\r
        zone1 /= totalWeight;\r
        zone2 /= totalWeight;\r
        zone3 /= totalWeight;\r
        \r
        
        separatedColors = u_color1 * zone1 + u_color2 * zone2 + u_color3 * zone3;\r
        \r
        
        separatedColors = mix(baseGradient, separatedColors, u_colorSeparation);\r
    }\r
    \r
    
    vec3 finalColor = separatedColors;\r
    if (u_colorBands > 0.01) {\r
        
        float bands = mix(3.0, 12.0, u_colorBands); 
        float bandedNoise = floor(colorNoise * bands) / bands;\r
        \r
        
        float bandSmooth = mix(0.15, 0.02, u_colorBands); 
        float smoothBandNoise = mix(colorNoise, bandedNoise, smoothstep(0.0, bandSmooth, u_colorBands));\r
        \r
        
        float bt1 = smoothstep(0.0, 0.5, smoothBandNoise);\r
        float bt2 = smoothstep(0.5, 1.0, smoothBandNoise);\r
        vec3 bandColor1to2 = mix(u_color1, u_color2, bt1);\r
        vec3 bandColor2to3 = mix(u_color2, u_color3, bt2);\r
        vec3 bandedGradient = mix(bandColor1to2, bandColor2to3, smoothstep(0.3, 0.7, smoothBandNoise));\r
        \r
        
        finalColor = mix(separatedColors, bandedGradient, u_colorBands);\r
    }\r
    \r
    
    finalColor = mix(u_baseColor, finalColor, smoothstep(0.0, 0.3, colorNoise));\r
    \r
    
    if (abs(u_brightness - 1.0) > 0.01) {\r
        finalColor *= u_brightness;\r
    }\r
    \r
    
    if(u_grainIntensity > 0.01) {\r
        float grainAspectRatio = mix(1.0, u_resolution.x / u_resolution.y, clamp(u_grainAspect, 0.0, 1.0));\r
        float grain = filmGrain(vUv, u_timeAbsolute, u_grainSize, u_grainSpeed, grainAspectRatio, u_grainComplexity, u_grainFrameHold);\r
        finalColor = applyGrain(finalColor, grain, u_grainIntensity, u_grainBlendMode);\r
    }\r
    \r
    
    if (abs(u_exposure - 1.0) > 0.01) {\r
        finalColor *= u_exposure;\r
    }

    
    if (u_blackLevel > 0.001) {\r
        float luma = dot(finalColor, vec3(0.2126, 0.7152, 0.0722));\r
        float darkFactor = pow(clamp(1.0 - luma, 0.0, 1.0), 1.4);\r
        float attenuation = clamp(1.0 - u_blackLevel * darkFactor, 0.0, 1.0);\r
        finalColor *= attenuation;\r
    }\r
    \r
    
    
    
    
    
    
    
    
    
    bool needsNormal = u_iridescenceStrength > 0.001 || u_fresnelStrength > 0.001\r
                    || u_specularStrength > 0.001 || u_flakeStrength > 0.001;\r
    vec3 sharedNormal = needsNormal ? computeNormal(physicsNoise) : vec3(0.0, 0.0, 1.0);

    
    if (u_iridescenceStrength > 0.001) {\r
        vec3  hue     = thinFilmIridescence(sharedNormal);\r
        
        float shimmer = 0.5 + 0.5 * (1.0 - clamp(sharedNormal.z, 0.0, 1.0));\r
        float amt     = u_iridescenceStrength * shimmer;

        
        
        
        vec3 bAdd      = finalColor + (hue - 0.5) * (2.0 * amt);\r
        vec3 bScreen   = mix(finalColor, 1.0 - (1.0 - finalColor) * (1.0 - hue), amt);\r
        vec3 bOverlay  = mix(finalColor,\r
                             mix(2.0 * finalColor * hue,\r
                                 1.0 - 2.0 * (1.0 - finalColor) * (1.0 - hue),\r
                                 step(0.5, finalColor)),\r
                             amt);\r
        vec3 bMultiply = mix(finalColor, finalColor * hue * 2.0, amt);\r
        
        vec3 bSoftLight = mix(finalColor,\r
                              finalColor + (2.0 * hue - 1.0) * finalColor * (1.0 - finalColor),\r
                              amt);

        
        float m  = float(u_iridescenceBlendMode);\r
        float is0 = 1.0 - min(m, 1.0);                          
        float is1 = step(0.5, m) * step(m, 1.5);                
        float is2 = step(1.5, m) * step(m, 2.5);                
        float is3 = step(2.5, m) * step(m, 3.5);                
        float is4 = step(3.5, m);                                

        finalColor = bAdd      * is0\r
                   + bScreen   * is1\r
                   + bOverlay  * is2\r
                   + bMultiply * is3\r
                   + bSoftLight * is4;\r
    }\r
    \r
    
    if (u_fresnelStrength > 0.001) {\r
        finalColor += fresnelTint(sharedNormal, u_color2, u_fresnelStrength);\r
    }\r
    \r
    
    if (u_specularStrength > 0.001) {\r
        vec3 lightDir = normalize(vec3(-0.5, 0.5, 1.0));\r
        float spec = specularHighlight(sharedNormal, lightDir, u_specularStrength);\r
        finalColor += vec3(spec);\r
    }\r
    \r
    
    if (u_flakeStrength > 0.001) {\r
        
        float scale = u_flakeScale > 1.0 ? u_flakeScale : 80.0;\r
        vec3 flakes = metallicFlakes(evolvedSt / max(u_zoomEffective, 0.01), sharedNormal, scale, u_flakeStrength, tLoop, finalColor, physicsNoise);\r
        finalColor += flakes;\r
    }

    
    \r
    
    if (u_vignetteStrength > 0.001) {\r
        float dist = distance(vUv, vec2(0.5));\r
        float vig = smoothstep(u_vignetteRadius, u_vignetteRadius + 0.5, dist);\r
        finalColor = mix(finalColor, vec3(0.0), vig * u_vignetteStrength);\r
    }\r
    \r
    
    if (u_centerMaskStrength > 0.001) {\r
        float dist = distance(vUv, vec2(0.5));\r
        
        float mask = 1.0 - smoothstep(0.0, u_centerMaskSize, dist);\r
        
        
        finalColor = mix(finalColor, u_baseColor * u_brightness, mask * u_centerMaskStrength);\r
    }

    

    
    if (u_edgeEnhance > 0.001) {\r
        
        
        float edge = fwidth(noise) * 5.0; 
        \r
        
        finalColor += vec3(edge * u_edgeEnhance);\r
    }\r
    \r
    
    if (u_postPosterize > 0.1) {\r
        float steps = floor(u_postPosterize);\r
        finalColor = floor(finalColor * steps) / steps;\r
    }

    gl_FragColor = vec4(finalColor, 1.0);\r
}`;class nA{constructor(e="viewport",t=null){if(this.container=document.getElementById(e),!this.container){console.error(`Container #${e} not found`);return}if(!this.isWebGLAvailable()){console.warn("WebGL not supported, falling back to CSS"),this.applyFallback();return}this.scene=null,this.camera=null,this.renderer=null,this.material=null,this.mesh=null,this.animationId=null,this.clock=new pw,this.performanceMonitor=t,this.qualityLevel="high",this.lastQualityChange=0,this.uniformsDirty={time:!0,modulation:!0,colors:!1,noise:!1,grain:!1},this._modulationCache={modTime:0,turbCycle:0,zoomCycle:0,angle:0,cosA:1,sinA:0,c1:.5,c2:.5,noiseCycle:0,gainCycle:0,spreadCycle:0,modNoiseScale:.5,modGain:.35,modZoom:.3,modTurbulence:.2,modDirX:.5,modDirY:.3,modColorMix1:.5,modColorMix2:.5,modColorSpread:.66,colorShift:0},this._lastModulationUpdate=0,this._modulationUpdateInterval=16,this.LOOP_DUR=600,this.accumulatedTime=0,this.accumulatedModulationTime=0,this.accumulatedRotation=0,this.accumulatedAbsoluteTime=0,this._resizeDebounceTimer=null,this._lastCapDrawAt=0,this.render=this.render.bind(this),this.handleResize=this.handleResize.bind(this),this.handleVisibilityChange=this.handleVisibilityChange.bind(this),this.init()}_getTargetPixelRatio(){const e=window.devicePixelRatio||1;return/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?Math.min(e,1.5):Math.min(e,2)}isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}applyFallback(){this.container.style.background=`
      linear-gradient(135deg, 
        #ADFFF5 0%, 
        #DEC1FF 50%, 
        #9367FF 100%
      )
    `}init(){this.scene=new O0,this.camera=new Yf(-1,1,1,-1,0,1),this.renderer=new j0({antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,precision:"highp"});const e=this._getTargetPixelRatio();this.renderer.setPixelRatio(e),this.renderer.setSize(window.innerWidth,window.innerHeight),console.log(`BackgroundRenderer: pixel ratio set to ${e.toFixed(2)} (device: ${(window.devicePixelRatio||1).toFixed(2)})`);const t=this.renderer.domElement;t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100vw",t.style.height="100%",t.style.zIndex="-1",t.style.pointerEvents="none",t.classList.add("bg-shader-canvas"),this.container.appendChild(t),this.material=new hr({vertexShader:eA,fragmentShader:tA,uniforms:{u_time:{value:0},u_timeAbsolute:{value:0},u_resolution:{value:new ye(this.renderer.domElement.width,this.renderer.domElement.height)},u_color1:{value:new je(8454128)},u_color2:{value:new je(5123034)},u_color3:{value:new je(2150293)},u_baseColor:{value:new je(3054335)},u_zoom:{value:.1},u_noiseScale:{value:1.6},u_octaves:{value:2},u_lacunarity:{value:1.5},u_gain:{value:.35},u_turbulence:{value:1.2},u_warpOctaves:{value:1},u_ridgeAmount:{value:0},u_detailScale:{value:1},u_detailAmount:{value:0},u_speed:{value:.04},u_directionX:{value:.5},u_directionY:{value:.3},u_modulationSpeed:{value:.28},u_modulationIntensity:{value:12},u_turbulenceModulation:{value:0},u_zoomModulation:{value:0},u_colorModulation:{value:0},u_rotationModulation:{value:.01},u_softness:{value:.2},u_contrast:{value:.75},u_brightness:{value:1.5},u_exposure:{value:1},u_blackLevel:{value:0},u_colorMix1:{value:.5},u_colorMix2:{value:.5},u_colorSpread:{value:.66},u_colorSeparation:{value:.3},u_colorBands:{value:0},u_noiseScaleModulation:{value:0},u_gainModulation:{value:0},u_colorSpreadModulation:{value:0},u_colorShiftModulation:{value:0},u_noiseScaleEffective:{value:.5},u_gainEffective:{value:.35},u_zoomEffective:{value:.3},u_turbulenceEffective:{value:.2},u_directionEffective:{value:new ye(.5,.3)},u_colorMix1Effective:{value:.5},u_colorMix2Effective:{value:.5},u_colorSpreadEffective:{value:.66},u_colorShiftOffset:{value:0},u_circularMotionIntensity:{value:.3},u_evolutionSpeed:{value:.15},u_layerBlend:{value:.3},u_colorEvolutionSpeed:{value:.1},u_baseWeight:{value:1.2},u_midWeight:{value:.7},u_highWeight:{value:.25},u_warpScale:{value:1},u_flowType:{value:0},u_noiseType:{value:0},u_cellScale:{value:2},u_cellJitter:{value:1},u_vignetteStrength:{value:.12},u_vignetteRadius:{value:.12},u_centerMaskStrength:{value:0},u_centerMaskSize:{value:.5},u_detailMasking:{value:0},u_edgeEnhance:{value:0},u_postPosterize:{value:0},u_iridescenceStrength:{value:.3},u_iridescenceSmoothness:{value:5},u_iridescenceBlendMode:{value:1},u_fresnelStrength:{value:250},u_specularStrength:{value:.44},u_flakeStrength:{value:0},u_flakeScale:{value:1600},u_rippleFrequency:{value:23.8},u_rippleStrength:{value:.1},u_quantizeStep:{value:0},u_mirrorX:{value:0},u_mirrorY:{value:0},u_patternMorph:{value:0},u_lacunarityOscillation:{value:.5},u_gainOscillation:{value:.3},u_warpFeedback:{value:.2},u_spectralBreathing:{value:.4},u_warpLayers:{value:0},u_noiseDistortion:{value:0},u_turbulentFbm:{value:0},u_layerInteraction:{value:0},u_translationScale:{value:0},u_grainIntensity:{value:.26},u_grainSpeed:{value:20},u_grainSize:{value:2100},u_grainBlendMode:{value:2},u_grainAspect:{value:1},u_grainComplexity:{value:1},u_grainFrameHold:{value:1}},extensions:{derivatives:!0},transparent:!1}),this.baseQualitySettings={modulationIntensity:this.material.uniforms.u_modulationIntensity.value,colorModulation:this.material.uniforms.u_colorModulation.value,grainComplexity:this.material.uniforms.u_grainComplexity.value,grainIntensity:this.material.uniforms.u_grainIntensity.value},this.applyQualitySettings(this.qualityLevel),this.updateModulationUniforms(0);const n=new pl(2,2);this.mesh=new mi(n,this.material),this.scene.add(this.mesh),this.setupEventListeners(),this.setupTouchPrevention(),console.log("BackgroundRenderer initialized successfully")}setupEventListeners(){window.addEventListener("resize",this.handleResize),document.addEventListener("visibilitychange",this.handleVisibilityChange)}handleResize(){this.renderer&&(clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=setTimeout(()=>{if(!this.renderer)return;const e=this._getTargetPixelRatio(),t=this.renderer.domElement,n=Math.floor(window.innerWidth*e),i=Math.floor(window.innerHeight*e);t.width===n&&t.height===i&&this.renderer.getPixelRatio()===e||(this.renderer.setPixelRatio(e),this.material&&this.material.uniforms.u_resolution&&this.material.uniforms.u_resolution.value.set(t.width,t.height))},150))}handleVisibilityChange(){document.hidden?this.pause():this.resume()}setupTouchPrevention(){const e=this.renderer.domElement;["touchstart","touchmove","touchend","touchcancel"].forEach(t=>{e.addEventListener(t,n=>{console.log("canvas preventDefault fired"),n.preventDefault()},{passive:!1})})}updateUniforms(){if(!this.material)return;const e=this.clock.getDelta(),t=this.material.uniforms.u_speed.value;this.accumulatedTime+=e*t,this.accumulatedTime>this.LOOP_DUR&&(this.accumulatedTime-=this.LOOP_DUR),this.updateModulationUniforms(e),this.accumulatedAbsoluteTime+=e,this.accumulatedAbsoluteTime>this.LOOP_DUR&&(this.accumulatedAbsoluteTime-=this.LOOP_DUR),this.material.uniforms.u_time.value=this.accumulatedTime,this.material.uniforms.u_timeAbsolute.value=this.accumulatedAbsoluteTime}updateModulationUniforms(e){if(!this.material)return;const t=this.material.uniforms,n=this._modulationCache,i=performance.now(),s=i-this._lastModulationUpdate>=this._modulationUpdateInterval,o=t.u_modulationSpeed.value,a=t.u_modulationIntensity.value;if(this.accumulatedModulationTime+=e*o,this.accumulatedModulationTime>this.LOOP_DUR&&(this.accumulatedModulationTime-=this.LOOP_DUR),o<1e-5){t.u_noiseScaleEffective.value=t.u_noiseScale.value,t.u_gainEffective.value=t.u_gain.value,t.u_zoomEffective.value=t.u_zoom.value,t.u_turbulenceEffective.value=t.u_turbulence.value,t.u_directionEffective.value.set(t.u_directionX.value,t.u_directionY.value),t.u_colorMix1Effective.value=t.u_colorMix1.value,t.u_colorMix2Effective.value=t.u_colorMix2.value,t.u_colorSpreadEffective.value=t.u_colorSpread.value,t.u_colorShiftOffset.value=0;return}if(s){this._lastModulationUpdate=i;const l=t.u_noiseScale.value,c=t.u_gain.value,u=t.u_zoom.value,h=t.u_turbulence.value,d=t.u_directionX.value,f=t.u_directionY.value,_=t.u_colorMix1.value,p=t.u_colorMix2.value,g=t.u_colorSpread.value;n.modTime=this.accumulatedModulationTime*.2,n.modTurbulence=h;const m=t.u_turbulenceModulation.value;if(m>.01){n.turbCycle=Math.sin(n.modTime*1.5)*.5+.5;const S=m*.8*a;n.modTurbulence=h+(n.turbCycle-.5)*S,n.modTurbulence<0&&(n.modTurbulence=0)}n.modZoom=u;const x=t.u_zoomModulation.value;if(x>.01){n.zoomCycle=Math.sin(n.modTime*.8)*.5+.5;const S=x*.2*a;n.modZoom=u*(1+(n.zoomCycle-.5)*S)}n.modDirX=d,n.modDirY=f;const y=t.u_rotationModulation.value;if(y>.01){const S=y*1.5*a,b=e*o*.2;this.accumulatedRotation+=b*S*.5;const D=6.28318530718;this.accumulatedRotation>D?this.accumulatedRotation-=D:this.accumulatedRotation<-D&&(this.accumulatedRotation+=D),n.angle=this.accumulatedRotation,n.cosA=Math.cos(n.angle),n.sinA=Math.sin(n.angle),n.modDirX=d*n.cosA-f*n.sinA,n.modDirY=d*n.sinA+f*n.cosA}n.modColorMix1=_,n.modColorMix2=p;const v=t.u_colorModulation.value;if(v>.01){n.c1=Math.sin(n.modTime*1.1)*.5+.5,n.c2=Math.cos(n.modTime*.7)*.5+.5;const S=v*.8*a;n.modColorMix1=_+(n.c1-.5)*S,n.modColorMix2=p+(n.c2-.5)*S,n.modColorMix1<0&&(n.modColorMix1=0),n.modColorMix1>1&&(n.modColorMix1=1),n.modColorMix2<0&&(n.modColorMix2=0),n.modColorMix2>1&&(n.modColorMix2=1)}n.colorShift=0;const E=t.u_colorShiftModulation.value;E>.01&&(n.colorShift=Math.sin(n.modTime*.5)*E*.5*a),n.modNoiseScale=l;const M=t.u_noiseScaleModulation.value;if(M>.01){n.noiseCycle=Math.sin(n.modTime*.6)*.5+.5;const S=M*.2*a;n.modNoiseScale=l*(1+(n.noiseCycle-.5)*S)}n.modGain=c;const w=t.u_gainModulation.value;if(w>.01){n.gainCycle=Math.cos(n.modTime*.9)*.5+.5;const S=w*.3*a;n.modGain=c+(n.gainCycle-.5)*S,n.modGain<.1&&(n.modGain=.1),n.modGain>.9&&(n.modGain=.9)}n.modColorSpread=g;const C=t.u_colorSpreadModulation.value;if(C>.01){n.spreadCycle=Math.sin(n.modTime*.75)*.5+.5;const S=C*.3*a;n.modColorSpread=g+(n.spreadCycle-.5)*S,n.modColorSpread<0&&(n.modColorSpread=0),n.modColorSpread>1&&(n.modColorSpread=1)}}t.u_noiseScaleEffective.value=n.modNoiseScale,t.u_gainEffective.value=n.modGain,t.u_zoomEffective.value=n.modZoom,t.u_turbulenceEffective.value=n.modTurbulence,t.u_directionEffective.value.set(n.modDirX,n.modDirY),t.u_colorMix1Effective.value=n.modColorMix1,t.u_colorMix2Effective.value=n.modColorMix2,t.u_colorSpreadEffective.value=n.modColorSpread,t.u_colorShiftOffset.value=n.colorShift,this.qualityLevel==="high"&&this.baseQualitySettings&&(this.baseQualitySettings.modulationIntensity=a)}setAdaptiveQualityManager(e){this.adaptiveQualityManager=e}render(){if(!this.renderer||!this.scene||!this.camera)return;this.animationId=requestAnimationFrame(this.render),this.adaptiveQualityManager&&this.adaptiveQualityManager.tick();const e=KT(),t=performance.now();if(e>0){const n=1e3/e;if(this._lastCapDrawAt>0&&t-this._lastCapDrawAt<n)return;this._lastCapDrawAt=t}this.updateUniforms(),this.renderer.render(this.scene,this.camera),this.performanceMonitor&&this.performanceMonitor.update()}start(){if(!this.renderer){console.warn("Renderer not initialized, cannot start");return}console.log("Starting background renderer"),this.clock.start(),this.render()}pause(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}resume(){!this.animationId&&this.renderer&&this.render()}stop(){this.pause(),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)),this.material&&this.material.dispose(),this.mesh&&this.mesh.geometry&&this.mesh.geometry.dispose(),window.removeEventListener("resize",this.handleResize),document.removeEventListener("visibilitychange",this.handleVisibilityChange),clearTimeout(this._resizeDebounceTimer),console.log("BackgroundRenderer stopped and cleaned up")}getMaterial(){return this.material}getCanvas(){return this.renderer?this.renderer.domElement:null}setQuality(e){if(!["low","medium","high","ultra"].includes(e)){console.warn(`Invalid quality level: ${e}`);return}if(this.qualityLevel===e)return;const t=typeof performance<"u"?performance.now():Date.now();if(this.lastQualityChange&&t-this.lastQualityChange<2e3){console.log(`Quality change throttled to avoid rapid adjustments (current: ${this.qualityLevel})`);return}if(this.lastQualityChange=t,this.qualityLevel=e,console.log(`Background quality set to: ${e}`),this.renderer){const n=this._getTargetPixelRatio(),i=this.renderer.domElement,s=Math.floor(window.innerWidth*n),o=Math.floor(window.innerHeight*n);(i.width!==s||i.height!==o||this.renderer.getPixelRatio()!==n)&&(this.renderer.setPixelRatio(n),console.log(`Pixel ratio set to: ${n.toFixed(2)} (quality: ${e})`))}this.applyQualitySettings(e),this.updateModulationUniforms(0)}applyQualitySettings(e){if(!this.material)return;const t=this.material.uniforms;switch(e){case"low":t.u_octaves&&(t.u_octaves.value=2),t.u_warpOctaves&&(t.u_warpOctaves.value=1),t.u_detailAmount&&(t.u_detailAmount.value=0),t.u_modulationIntensity&&(t.u_modulationIntensity.value=Math.min(this.baseQualitySettings.modulationIntensity*.5,t.u_modulationIntensity.value)),t.u_colorModulation&&(t.u_colorModulation.value=Math.min(this.baseQualitySettings.colorModulation*.7,t.u_colorModulation.value)),t.u_grainComplexity&&(t.u_grainComplexity.value=Math.min(this.baseQualitySettings.grainComplexity*.55,t.u_grainComplexity.value)),t.u_grainIntensity&&(t.u_grainIntensity.value=Math.min(this.baseQualitySettings.grainIntensity*.85,t.u_grainIntensity.value)),t.u_grainFrameHold&&(t.u_grainFrameHold.value=1),console.log("Applied low quality: 2 octaves, 1 warp octave, no detail");break;case"medium":t.u_octaves&&(t.u_octaves.value=2),t.u_warpOctaves&&(t.u_warpOctaves.value=1),t.u_detailAmount&&(t.u_detailAmount.value=.05),t.u_modulationIntensity&&(t.u_modulationIntensity.value=Math.min(this.baseQualitySettings.modulationIntensity*.7,t.u_modulationIntensity.value)),t.u_colorModulation&&(t.u_colorModulation.value=Math.min(this.baseQualitySettings.colorModulation*.8,t.u_colorModulation.value)),t.u_grainComplexity&&(t.u_grainComplexity.value=Math.min(this.baseQualitySettings.grainComplexity*.75,t.u_grainComplexity.value)),t.u_grainIntensity&&(t.u_grainIntensity.value=Math.min(this.baseQualitySettings.grainIntensity*.95,t.u_grainIntensity.value)),t.u_grainFrameHold&&(t.u_grainFrameHold.value=1.5),console.log("Applied medium quality: 2 octaves, 1 warp octave, reduced detail");break;case"high":t.u_octaves&&(t.u_octaves.value=3),t.u_warpOctaves&&(t.u_warpOctaves.value=2),t.u_detailAmount&&(t.u_detailAmount.value=.1),t.u_modulationIntensity&&(t.u_modulationIntensity.value=this.baseQualitySettings.modulationIntensity),t.u_colorModulation&&(t.u_colorModulation.value=this.baseQualitySettings.colorModulation),t.u_grainComplexity&&(t.u_grainComplexity.value=this.baseQualitySettings.grainComplexity),t.u_grainIntensity&&(t.u_grainIntensity.value=this.baseQualitySettings.grainIntensity),t.u_grainFrameHold&&(t.u_grainFrameHold.value=2),console.log("Applied high quality: 3 octaves, 2 warp octaves, optimized detail, grain hold 2.0");break;case"ultra":t.u_octaves&&(t.u_octaves.value=2),t.u_warpOctaves&&(t.u_warpOctaves.value=1),t.u_detailAmount&&(t.u_detailAmount.value=0),t.u_modulationIntensity&&(t.u_modulationIntensity.value=this.baseQualitySettings.modulationIntensity*.8),t.u_colorModulation&&(t.u_colorModulation.value=this.baseQualitySettings.colorModulation*.9),t.u_grainComplexity&&(t.u_grainComplexity.value=this.baseQualitySettings.grainComplexity*.85),t.u_grainIntensity&&(t.u_grainIntensity.value=this.baseQualitySettings.grainIntensity),t.u_grainFrameHold&&(t.u_grainFrameHold.value=3),console.log("Applied ultra quality: 2 octaves, 1 warp octave, no detail, grain hold 3.0 (240fps optimized)");break}}getPixelRatio(){return this.renderer?this.renderer.getPixelRatio():1}getQuality(){return this.qualityLevel}getPerformanceMonitor(){return this.performanceMonitor}setTargetFps(e){this.frameRateController&&(this.frameRateController.setTargetFps(e),this.material&&this.material.uniforms.u_grainFrameHold&&(e>=240?this.material.uniforms.u_grainFrameHold.value=3:e>=165?this.material.uniforms.u_grainFrameHold.value=2.5:e>=120?this.material.uniforms.u_grainFrameHold.value=2:e>=90?this.material.uniforms.u_grainFrameHold.value=1.5:this.material.uniforms.u_grainFrameHold.value=1,console.log(`Grain frame hold set to ${this.material.uniforms.u_grainFrameHold.value} for ${e}fps target`)))}getTargetFps(){return this.frameRateController?this.frameRateController.getTargetFps():60}getFrameRateMetrics(){return this.frameRateController?this.frameRateController.getMetrics():null}setQualityUltra(){if(!this.material)return;const e=this.material.uniforms;if(e.u_octaves&&(e.u_octaves.value=2),e.u_warpOctaves&&(e.u_warpOctaves.value=1),e.u_detailAmount&&(e.u_detailAmount.value=0),e.u_modulationIntensity&&(e.u_modulationIntensity.value=this.baseQualitySettings.modulationIntensity*.8),e.u_colorModulation&&(e.u_colorModulation.value=this.baseQualitySettings.colorModulation*.9),e.u_grainComplexity&&(e.u_grainComplexity.value=this.baseQualitySettings.grainComplexity*.85),e.u_grainIntensity&&(e.u_grainIntensity.value=this.baseQualitySettings.grainIntensity),e.u_grainFrameHold&&(e.u_grainFrameHold.value=3),this.renderer){const t=this._getTargetPixelRatio(),n=this.renderer.domElement,i=Math.floor(window.innerWidth*t),s=Math.floor(window.innerHeight*t);(n.width!==i||n.height!==s||this.renderer.getPixelRatio()!==t)&&this.renderer.setPixelRatio(t)}this.qualityLevel="ultra",console.log(`Applied ultra quality: 2 octaves, 1 warp octave, grain hold 3.0, pixel ratio ${this._getTargetPixelRatio().toFixed(2)}`)}}class iA{constructor(e){if(this.material=e,!this.material){console.error("ShaderController: No material provided");return}}updateUniform(e,t){if(!this.material||!this.material.uniforms[e]){console.warn(`Uniform ${e} not found`);return}const n=this.material.uniforms[e];if(n.value instanceof je){if(t instanceof je)n.value.copy(t);else{const i=new je(t);n.value.copy(i)}return}t instanceof ye&&n.value instanceof ye?n.value.copy(t):n.value=t}updateUniforms(e){Object.keys(e).forEach(t=>{this.updateUniform(t,e[t])})}transitionTo(e,t=7){if(!this.material)return;if(t<=0){console.log(`🎨 ShaderController: Instant update (duration=${t}), applying ${Object.keys(e).length} uniforms`),e.u_color2!==void 0&&console.log(`🎨 ShaderController: Setting u_color2 to ${typeof e.u_color2=="number"?"0x"+e.u_color2.toString(16):e.u_color2}`),Object.keys(e).forEach(i=>{this.updateUniform(i,e[i])}),this.material.uniforms.u_color2&&console.log(`🎨 ShaderController: u_color2 is now #${this.material.uniforms.u_color2.value.getHexString()}`);return}const n=t>=1?"power1.inOut":"power2.inOut";Object.keys(e).forEach(i=>{const s=this.material.uniforms[i];if(!s){console.warn(`Uniform ${i} not found for transition`);return}const o=e[i];if(s.value instanceof je){const a=new je(o);De.killTweensOf(s.value),De.to(s.value,{r:a.r,g:a.g,b:a.b,duration:t,ease:n})}else typeof s.value=="number"?(De.killTweensOf(s),De.to(s,{value:o,duration:t,ease:n})):s.value&&typeof s.value.x=="number"&&typeof s.value.y=="number"&&(De.killTweensOf(s.value),De.to(s.value,{x:o.x!==void 0?o.x:s.value.x,y:o.y!==void 0?o.y:s.value.y,duration:t,ease:n}))})}getUniform(e){return!this.material||!this.material.uniforms[e]?null:this.material.uniforms[e].value}getAllUniforms(){if(!this.material)return{};const e={};return Object.keys(this.material.uniforms).forEach(t=>{e[t]=this.material.uniforms[t].value}),e}}const sl={default:{name:"Default Fog",description:"Soft, billowing fog with gentle movement",parameters:{u_zoom:.1,u_noiseScale:1.6,u_octaves:2,u_lacunarity:1.5,u_gain:.5,u_turbulence:1.2,u_warpOctaves:2,u_ridgeAmount:0,u_detailScale:1,u_detailAmount:0,u_speed:.04,u_directionX:.5,u_directionY:.3,u_modulationSpeed:.28,u_modulationIntensity:12,u_turbulenceModulation:2,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:.01,u_noiseScaleModulation:0,u_gainModulation:0,u_colorSpreadModulation:0,u_colorShiftModulation:0,u_softness:.2,u_contrast:.75,u_brightness:1.25,u_exposure:1,u_blackLevel:0,u_colorMix1:.5,u_colorMix2:.5,u_colorSpread:.66,u_colorSeparation:.3,u_colorBands:0,u_grainIntensity:.26,u_grainSpeed:20,u_grainSize:2100,u_grainBlendMode:2,u_grainAspect:1,u_grainComplexity:1,u_circularMotionIntensity:.3,u_evolutionSpeed:.15,u_layerBlend:.3,u_colorEvolutionSpeed:.1,u_rippleFrequency:23.8,u_rippleStrength:.128,u_quantizeStep:0,u_mirrorX:0,u_mirrorY:0,u_patternMorph:0,u_lacunarityOscillation:.5,u_gainOscillation:.3,u_warpFeedback:.2,u_spectralBreathing:.4,u_warpLayers:0,u_noiseDistortion:0,u_turbulentFbm:0,u_layerInteraction:0,u_translationScale:0,u_iridescenceStrength:.3,u_iridescenceSmoothness:5,u_iridescenceBlendMode:1,u_fresnelStrength:250,u_specularStrength:7.5,u_flakeStrength:0,u_flakeScale:1600,u_baseWeight:.3,u_midWeight:1,u_highWeight:.68,u_vignetteStrength:.12,u_vignetteRadius:.12}},dreamyFog:{name:"Dreamy Fog",description:"Very soft, ethereal fog with minimal detail",parameters:{u_zoom:.4,u_noiseScale:1.5,u_octaves:3,u_lacunarity:2,u_gain:.6,u_turbulence:.3,u_warpOctaves:2,u_ridgeAmount:0,u_detailScale:6,u_detailAmount:.1,u_speed:.15,u_directionX:.3,u_directionY:.4,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.7,u_contrast:.8,u_brightness:1.1,u_exposure:1,u_blackLevel:0,u_colorMix1:.6,u_colorMix2:.6,u_colorSpread:.7,u_colorSeparation:.6,u_colorBands:0,u_grainIntensity:.05,u_grainSpeed:.8,u_grainSize:120,u_grainBlendMode:0,u_grainAspect:0,u_grainComplexity:.6,u_circularMotionIntensity:.2,u_evolutionSpeed:.1,u_layerBlend:.2,u_colorEvolutionSpeed:.05}},denseFog:{name:"Dense Fog",description:"Thick, heavy fog with more defined shapes",parameters:{u_zoom:.6,u_noiseScale:2.5,u_octaves:3,u_lacunarity:2.1,u_gain:.4,u_turbulence:.6,u_warpOctaves:2,u_ridgeAmount:.15,u_detailScale:10,u_detailAmount:.2,u_speed:.18,u_directionX:.4,u_directionY:.2,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.35,u_contrast:1.2,u_brightness:.95,u_exposure:1,u_blackLevel:0,u_colorMix1:.4,u_colorMix2:.4,u_colorSpread:.3,u_colorSeparation:.8,u_colorBands:0,u_grainIntensity:.12,u_grainSpeed:1.2,u_grainSize:180,u_grainBlendMode:1,u_grainAspect:0,u_grainComplexity:.6}},wispyClouds:{name:"Wispy Clouds",description:"Fast, streaky clouds with sharp edges",parameters:{u_zoom:.7,u_noiseScale:3,u_octaves:3,u_lacunarity:2.3,u_gain:.45,u_turbulence:.4,u_warpOctaves:2,u_ridgeAmount:.4,u_detailScale:12,u_detailAmount:.25,u_speed:.5,u_directionX:.8,u_directionY:.2,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.25,u_contrast:1.3,u_brightness:1,u_exposure:1,u_blackLevel:0,u_colorMix1:.5,u_colorMix2:.5,u_colorSpread:.4,u_colorSeparation:.65,u_colorBands:0,u_grainIntensity:.15,u_grainSpeed:2,u_grainSize:200,u_grainBlendMode:0,u_grainAspect:0,u_grainComplexity:.6}},liquidFlow:{name:"Liquid Flow",description:"Liquid-like appearance with strong distortion",parameters:{u_zoom:.8,u_noiseScale:2.2,u_octaves:3,u_lacunarity:2.2,u_gain:.5,u_turbulence:1.2,u_warpOctaves:2,u_ridgeAmount:0,u_detailScale:9,u_detailAmount:.2,u_speed:.35,u_directionX:.6,u_directionY:.5,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.4,u_contrast:1.1,u_brightness:1,u_exposure:1,u_blackLevel:0,u_colorMix1:.5,u_colorMix2:.5,u_colorSpread:.6,u_colorSeparation:.5,u_colorBands:0,u_grainIntensity:.06,u_grainSpeed:.8,u_grainSize:140,u_grainBlendMode:0,u_grainAspect:0,u_grainComplexity:.6}},turbulent:{name:"Turbulent Energy",description:"Chaotic, energetic flow with high distortion",parameters:{u_zoom:1,u_noiseScale:2.8,u_octaves:3,u_lacunarity:2.4,u_gain:.45,u_turbulence:1.5,u_warpOctaves:2,u_ridgeAmount:.2,u_detailScale:15,u_detailAmount:.3,u_speed:.6,u_directionX:.7,u_directionY:.6,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.3,u_contrast:1.4,u_brightness:.98,u_exposure:1,u_blackLevel:0,u_colorMix1:.4,u_colorMix2:.6,u_colorSpread:.5,u_colorSeparation:.75,u_colorBands:0,u_grainIntensity:.18,u_grainSpeed:3,u_grainSize:220,u_grainBlendMode:2,u_grainAspect:0,u_grainComplexity:.6,u_circularMotionIntensity:.7,u_evolutionSpeed:.4,u_layerBlend:.7,u_colorEvolutionSpeed:.3}},calmWaves:{name:"Calm Waves",description:"Gentle, wave-like undulations",parameters:{u_zoom:.3,u_noiseScale:1.8,u_octaves:3,u_lacunarity:2,u_gain:.55,u_turbulence:.7,u_warpOctaves:3,u_ridgeAmount:0,u_detailScale:7,u_detailAmount:.12,u_speed:.2,u_directionX:.2,u_directionY:.5,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.6,u_contrast:.9,u_brightness:1.05,u_exposure:1,u_blackLevel:0,u_colorMix1:.6,u_colorMix2:.5,u_colorSpread:.65,u_colorSeparation:.5,u_colorBands:0,u_grainIntensity:.04,u_grainSpeed:.6,u_grainSize:100,u_grainBlendMode:3,u_grainAspect:0,u_grainComplexity:.6,u_circularMotionIntensity:.2,u_evolutionSpeed:.1,u_layerBlend:.2,u_colorEvolutionSpeed:.05}},mountainRidges:{name:"Mountain Ridges",description:"Sharp, ridge-like features",parameters:{u_zoom:.6,u_noiseScale:2.5,u_octaves:3,u_lacunarity:2.2,u_gain:.4,u_turbulence:.5,u_warpOctaves:2,u_ridgeAmount:.8,u_detailScale:10,u_detailAmount:.18,u_speed:.15,u_directionX:.3,u_directionY:.2,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.2,u_contrast:1.5,u_brightness:.95,u_exposure:1,u_blackLevel:0,u_colorMix1:.45,u_colorMix2:.45,u_colorSpread:.35,u_colorSeparation:.8,u_colorBands:0,u_grainIntensity:.1,u_grainSpeed:1,u_grainSize:160,u_grainBlendMode:1,u_grainAspect:0,u_grainComplexity:.6,u_circularMotionIntensity:.3,u_evolutionSpeed:.12,u_layerBlend:.25,u_colorEvolutionSpeed:.08}},about:{name:"About Page",description:"Custom About Me background",parameters:{u_zoom:.1,u_noiseScale:.5,u_octaves:8,u_lacunarity:1,u_gain:.4,u_turbulence:.1,u_warpOctaves:3,u_ridgeAmount:0,u_detailScale:1,u_detailAmount:0,u_speed:.003,u_directionX:.2,u_directionY:-.7,u_modulationSpeed:.4,u_modulationIntensity:12,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:.01,u_noiseScaleModulation:0,u_gainModulation:0,u_colorSpreadModulation:0,u_colorShiftModulation:0,u_softness:0,u_contrast:.5,u_brightness:1.5,u_exposure:1,u_blackLevel:0,u_colorMix1:.64,u_colorMix2:.5,u_colorSpread:.6,u_colorSeparation:.4,u_colorBands:0,u_grainIntensity:.56,u_grainSpeed:30,u_grainSize:2100,u_grainBlendMode:2,u_grainAspect:1,u_grainComplexity:1,u_circularMotionIntensity:.3,u_evolutionSpeed:.15,u_layerBlend:.3,u_colorEvolutionSpeed:.1,u_baseWeight:.65,u_midWeight:0,u_highWeight:.3,u_warpScale:1.2,u_flowType:1,u_noiseType:0,u_cellScale:7,u_cellJitter:0,u_vignetteStrength:.12,u_vignetteRadius:.12,u_centerMaskStrength:0,u_centerMaskSize:.3,u_detailMasking:0,u_edgeEnhance:0,u_postPosterize:0,u_iridescenceStrength:0,u_iridescenceSmoothness:1,u_fresnelStrength:2,u_specularStrength:0,u_flakeStrength:0,u_flakeScale:200,u_rippleFrequency:2.9,u_rippleStrength:.3,u_quantizeStep:0,u_mirrorX:0,u_mirrorY:0,u_warpLayers:1,u_noiseDistortion:.32,u_turbulentFbm:.4,u_layerInteraction:.24,u_patternMorph:1,u_lacunarityOscillation:.72,u_gainOscillation:0,u_warpFeedback:0,u_spectralBreathing:1,u_translationScale:1}}};function rA(){return Object.keys(sl)}const aa={u_color1:{folder:"🎨 Colors",label:"Highlight",type:"color"},u_color2:{folder:"🎨 Colors",label:"Midtone",type:"color"},u_color3:{folder:"🎨 Colors",label:"Lowlight",type:"color"},u_baseColor:{folder:"🎨 Colors",label:"Base Color",type:"color"},u_zoom:{folder:"🌫️ Noise Parameters",label:"Zoom",min:.1,max:5,step:.1},u_noiseScale:{folder:"🌫️ Noise Parameters",label:"Noise Scale",min:.5,max:10,step:.1},u_octaves:{folder:"🌫️ Noise Parameters",label:"Octaves",min:1,max:8,step:1},u_lacunarity:{folder:"🌫️ Noise Parameters",label:"Lacunarity",min:1,max:12,step:.1},u_gain:{folder:"🌫️ Noise Parameters",label:"Gain",min:.1,max:1,step:.05},u_turbulence:{folder:"🌫️ Noise Parameters",label:"Turbulence",min:0,max:2,step:.05},u_warpOctaves:{folder:"🌫️ Noise Parameters",label:"Warp Octaves",min:1,max:5,step:1},u_ridgeAmount:{folder:"🌫️ Noise Parameters",label:"Ridge Amount",min:0,max:1,step:.05},u_detailScale:{folder:"🌫️ Noise Parameters",label:"Detail Scale",min:1,max:20,step:.5},u_detailAmount:{folder:"🌫️ Noise Parameters",label:"Detail Amount",min:0,max:1,step:.05},u_baseWeight:{folder:"🌈 Spectral Separation",label:"Base (Low Freq)",min:0,max:2,step:.05},u_midWeight:{folder:"🌈 Spectral Separation",label:"Mid (Std Detail)",min:0,max:2,step:.05},u_highWeight:{folder:"🌈 Spectral Separation",label:"High (Fine Detail)",min:0,max:2,step:.05},u_flowType:{folder:"🌀 Flow & Warp",label:"Curl Noise (Fluid)",type:"boolean"},u_warpScale:{folder:"🌀 Flow & Warp",label:"Warp Scale",min:.1,max:5,step:.1},u_turbulence_flow:{folder:"🌀 Flow & Warp",label:"Warp Strength",uniform:"u_turbulence",min:0,max:2,step:.05},u_noiseType:{folder:"🕸️ Texture & Structure",label:"Cellular Noise (Worley)",type:"boolean"},u_cellScale:{folder:"🕸️ Texture & Structure",label:"Cell Scale",min:.5,max:10,step:.1},u_cellJitter:{folder:"🕸️ Texture & Structure",label:"Cell Randomness",min:0,max:2,step:.05},u_vignetteStrength:{folder:"🖼️ Composition & Masking",label:"Vignette Darken",min:0,max:1,step:.01},u_vignetteRadius:{folder:"🖼️ Composition & Masking",label:"Vignette Radius",min:0,max:1,step:.01},u_centerMaskStrength:{folder:"🖼️ Composition & Masking",label:"Center Clarity",min:0,max:1,step:.01},u_centerMaskSize:{folder:"🖼️ Composition & Masking",label:"Center Size",min:0,max:1,step:.01},u_detailMasking:{folder:"🖼️ Composition & Masking",label:"Detail Clumping",min:0,max:1,step:.01},u_edgeEnhance:{folder:"✨ Stylization & VFX",label:"Edge Glow",min:0,max:10,step:.1},u_postPosterize:{folder:"✨ Stylization & VFX",label:"Posterize Steps",min:0,max:32,step:1},u_iridescenceStrength:{folder:"💧 Liquid Metal & Oil",label:"Oil Slick (Iridescence)",min:0,max:1,step:.01},u_iridescenceSmoothness:{folder:"💧 Liquid Metal & Oil",label:"Oil Slick Smoothness",min:0,max:5,step:.01},u_iridescenceBlendMode:{folder:"💧 Liquid Metal & Oil",label:"Oil Slick Blend Mode",type:"select",options:{Add:0,Screen:1,Overlay:2,Multiply:3,"Soft Light":4}},u_fresnelStrength:{folder:"💧 Liquid Metal & Oil",label:"Metallic Edge (Fresnel)",min:0,max:250,step:.1},u_specularStrength:{folder:"💧 Liquid Metal & Oil",label:"Glossy Clear-Coat (Specular)",min:0,max:2,step:.001},u_flakeStrength:{folder:"💧 Liquid Metal & Oil",label:"Glitter (M. Flakes)",min:0,max:5,step:.01},u_flakeScale:{folder:"💧 Liquid Metal & Oil",label:"Glitter Size",min:100,max:1e4,step:10},u_speed:{folder:"⚡ Animation",label:"Speed",min:1e-4,max:.25,step:1e-4},u_directionX:{folder:"⚡ Animation",label:"Direction X",min:-1,max:1,step:.05},u_directionY:{folder:"⚡ Animation",label:"Direction Y",min:-1,max:1,step:.05},u_translationScale:{folder:"⚡ Animation",label:"Translation Scale",min:0,max:1,step:.01},u_modulationSpeed:{folder:"🌊 Organic Modulation",label:"Global Speed",min:1e-4,max:1,step:1e-4},u_modulationIntensity:{folder:"🌊 Organic Modulation",label:"Intensity",min:0,max:50,step:.01},u_turbulenceModulation:{folder:"🌊 Organic Modulation",label:"Turbulence Breathing",min:0,max:10,step:.01},u_zoomModulation:{folder:"🌊 Organic Modulation",label:"Zoom Pulsing",min:0,max:10,step:.01},u_colorModulation:{folder:"🌊 Organic Modulation",label:"Color Shifting",min:0,max:10,step:.01},u_rotationModulation:{folder:"🌊 Organic Modulation",label:"Flow Rotation",min:0,max:10,step:.01},u_noiseScaleModulation:{folder:"🌊 Organic Modulation",label:"Noise Scale Pulse",min:0,max:10,step:.01},u_gainModulation:{folder:"🌊 Organic Modulation",label:"Gain Modulation",min:0,max:10,step:.01},u_colorSpreadModulation:{folder:"🌊 Organic Modulation",label:"Color Spread Flux",min:0,max:10,step:.01},u_colorShiftModulation:{folder:"🌊 Organic Modulation",label:"Palette Shift",min:0,max:10,step:.01},u_rippleStrength:{folder:"🎭 Artistic Controls",label:"Ripple Strength",min:0,max:.5,step:.001},u_rippleFrequency:{folder:"🎭 Artistic Controls",label:"Ripple Freq",min:0,max:50,step:.1},u_quantizeStep:{folder:"🎭 Artistic Controls",label:"Topography Strength",min:0,max:1,step:.01},u_mirrorX:{folder:"🎭 Artistic Controls",label:"Mirror X",type:"boolean"},u_mirrorY:{folder:"🎭 Artistic Controls",label:"Mirror Y",type:"boolean"},u_warpLayers:{folder:"🧱 Base Complexity",label:"Warp Layers",min:0,max:3,step:1},u_noiseDistortion:{folder:"🧱 Base Complexity",label:"Noise Distortion",min:0,max:1,step:.01},u_turbulentFbm:{folder:"🧱 Base Complexity",label:"Turbulent FBM",min:0,max:1,step:.01},u_layerInteraction:{folder:"🧱 Base Complexity",label:"Layer Interaction",min:0,max:1,step:.01},u_patternMorph:{folder:"🌀 Pattern Morphing",label:"Master Intensity",min:0,max:1,step:.01},u_lacunarityOscillation:{folder:"🌀 Pattern Morphing",label:"Lacunarity Osc",min:0,max:1,step:.01},u_gainOscillation:{folder:"🌀 Pattern Morphing",label:"Gain Osc",min:0,max:1,step:.01},u_warpFeedback:{folder:"🌀 Pattern Morphing",label:"Warp Feedback",min:0,max:1,step:.01},u_spectralBreathing:{folder:"🌀 Pattern Morphing",label:"Spectral Breathing",min:0,max:1,step:.01},u_grainIntensity:{folder:"🎬 Film Grain",label:"Intensity",min:0,max:1,step:.01},u_grainSpeed:{folder:"🎬 Film Grain",label:"Speed",min:0,max:100,step:.01},u_grainSize:{folder:"🎬 Film Grain",label:"Size",min:10,max:2500,step:1},u_grainBlendMode:{folder:"🎬 Film Grain",label:"Blend Mode",type:"select",options:{Overlay:0,Multiply:1,Add:2,Screen:3}},u_grainAspect:{folder:"🎬 Film Grain",label:"Square Amount",min:0,max:1,step:.01},u_grainComplexity:{folder:"🎬 Film Grain",label:"Complexity",min:0,max:1,step:.01},u_softness:{folder:"✨ Visual Quality",label:"Softness",min:0,max:1,step:.01},u_contrast:{folder:"✨ Visual Quality",label:"Contrast",min:.5,max:2,step:.05},u_brightness:{folder:"✨ Visual Quality",label:"Brightness",min:.5,max:1.5,step:.05},u_exposure:{folder:"✨ Visual Quality",label:"Exposure",min:.5,max:2,step:.05},u_blackLevel:{folder:"✨ Visual Quality",label:"Black Level",min:0,max:1,step:.01},u_colorMix1:{folder:"🎨 Color Mixing",label:"Mix 1 (Hi/Mid)",min:0,max:1,step:.01},u_colorMix2:{folder:"🎨 Color Mixing",label:"Mix 2 (Result/Low)",min:0,max:1,step:.01},u_colorSpread:{folder:"🎨 Color Mixing",label:"Color Spread",min:0,max:1,step:.01},u_colorSeparation:{folder:"🎨 Color Mixing",label:"Color Separation",min:0,max:1,step:.01},u_colorBands:{folder:"🎨 Color Mixing",label:"Color Bands",min:0,max:1,step:.01}};class sA{constructor(e){this.shaderController=e,this.currentPage=null,this.pageConfigs=this.initializePageConfigs()}initializePageConfigs(){const e=()=>({type:"custom",description:"Renderer base defaults",parameters:{u_zoom:.1,u_noiseScale:1.6,u_octaves:2,u_lacunarity:1.5,u_gain:.35,u_turbulence:1.2,u_warpOctaves:2,u_ridgeAmount:0,u_detailScale:1,u_detailAmount:0,u_speed:.04,u_directionX:.5,u_directionY:.3,u_modulationSpeed:.4,u_modulationIntensity:12,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:.01,u_noiseScaleModulation:0,u_gainModulation:0,u_colorSpreadModulation:0,u_colorShiftModulation:0,u_softness:.2,u_contrast:.75,u_brightness:1.5,u_exposure:1,u_blackLevel:0,u_colorMix1:.5,u_colorMix2:.5,u_colorSpread:.66,u_colorSeparation:.3,u_colorBands:0,u_grainIntensity:.26,u_grainSpeed:30,u_grainSize:2100,u_grainBlendMode:2,u_grainAspect:1,u_grainComplexity:1,u_circularMotionIntensity:.3,u_evolutionSpeed:.15,u_layerBlend:.3,u_colorEvolutionSpeed:.1,u_baseWeight:1.2,u_midWeight:.7,u_highWeight:.25,u_warpScale:1,u_flowType:0,u_noiseType:0,u_cellScale:2,u_cellJitter:1,u_vignetteStrength:.12,u_vignetteRadius:.12,u_centerMaskStrength:0,u_centerMaskSize:.3,u_detailMasking:0,u_edgeEnhance:0,u_postPosterize:0,u_iridescenceStrength:.3,u_iridescenceSmoothness:5,u_iridescenceBlendMode:1,u_fresnelStrength:250,u_specularStrength:.44,u_flakeStrength:0,u_flakeScale:1600,u_rippleFrequency:23.8,u_mirrorX:0,u_mirrorY:0,u_patternMorph:0,u_lacunarityOscillation:.5,u_gainOscillation:.3,u_warpFeedback:.2,u_spectralBreathing:.4,u_warpLayers:0,u_noiseDistortion:0,u_turbulentFbm:0,u_layerInteraction:0,u_translationScale:0}});return{index:e(),about:{type:"preset",preset:"about",description:"About page - Faster, zoomed fog"},works:e(),contact:e(),labs:e(),resume:e(),scholastic:e(),"american-chemical-society":e(),jpplus:e(),rowmark:e(),aave:e(),ipi:e(),wabash:e(),"bright-future":e(),healpool:e(),rentaru:e(),default:e()}}getConfig(e){const t=this.pageConfigs[e]||this.pageConfigs.default,n=sl.default.parameters,i={u_grainIntensity:n.u_grainIntensity,u_grainSpeed:n.u_grainSpeed,u_grainSize:n.u_grainSize,u_grainBlendMode:n.u_grainBlendMode,u_grainAspect:n.u_grainAspect,u_grainComplexity:n.u_grainComplexity};if(t.type==="preset"){const s=sl[t.preset];return s?{...{...n,...s.parameters},...i}:(console.warn(`Preset "${t.preset}" not found, using default`),{...n})}else if(t.type==="custom")return{...{...n,...t.parameters},...i};return{...n}}transitionToPage(e,t=7){console.log(`ConfigManager: Transitioning to "${e}" page`);const n=this.getConfig(e),i={default:{u_color1:8454128,u_color2:5123034,u_color3:2150293,u_baseColor:3054335},about:{u_color1:14972187,u_color2:12343550,u_color3:1580724,u_baseColor:16766208}},s=e==="about"?i.about:i.default,o={u_color1:s.u_color1,u_color2:s.u_color2,u_color3:s.u_color3,u_baseColor:s.u_baseColor};Object.keys(n).forEach(a=>{a.startsWith("u_")&&!["u_color1","u_color2","u_color3","u_baseColor"].includes(a)&&(o[a]=n[a])}),this.shaderController.transitionTo(o,t),this.currentPage=e,console.log(`ConfigManager: Applied "${e}" configuration with Mid Tone color ${e==="about"?"#8218c9":"#4e2bda"}`)}shouldTransition(e){if(!this.currentPage)return!0;const t=this.pageConfigs[this.currentPage]||this.pageConfigs.default,n=this.pageConfigs[e]||this.pageConfigs.default;if(t.type==="preset"&&n.type==="preset")return t.preset!==n.preset;if(t.type!==n.type)return!0;if(t.type==="custom"&&n.type==="custom"){const i=this.getConfig(this.currentPage),s=this.getConfig(e),a=["u_zoom","u_speed","u_modulationSpeed","u_modulationIntensity","u_turbulenceModulation","u_brightness","u_contrast"].every(u=>i[u]===s[u]),l=this.currentPage==="about"?8526025:5123034;return!a||l!==(e==="about"?8526025:5123034)}return!0}setPageConfig(e,t){this.pageConfigs[e]=t,console.log(`ConfigManager: Updated config for "${e}"`)}getAllConfigs(){return{...this.pageConfigs}}getCurrentPage(){return this.currentPage}resetToDefault(e=4){this.transitionToPage("default",e)}}function oA(r){return new sA(r)}class aA{constructor(e=!1){this.enabled=e,this.fps=0,this.frameCount=0,this.lastFpsUpdate=performance.now(),this._histLen=60,this._fpsHist=new Float32Array(this._histLen),this._histIdx=0,this._histCount=0,this.lowFpsThreshold=30,this.statsElement=null,this.onLowPerformance=null,this.adaptiveQualityManager=null,this.renderer=null,this._cachedGrainHold=1,this._cachedPixelRatio=1,this.enabled&&this.createStatsDisplay()}createStatsDisplay(){if(this.statsElement)return;this.statsElement=document.createElement("div"),this.statsElement.id="bg-performance-stats",this.statsElement.style.cssText=`
      position: fixed;
      bottom: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.85);
      color: #0f0;
      padding: 12px 16px;
      font-family: 'Courier New', monospace;
      font-size: 11px;
      border-radius: 6px;
      z-index: 9999;
      pointer-events: none;
      line-height: 1.5;
      min-width: 280px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(0, 255, 0, 0.3);
    `,this.statsElement.innerHTML=`
      <div style="font-weight: bold; margin-bottom: 6px; font-size: 12px; color: #0ff;">
        ⚡ Background Shader Performance
      </div>
      
      <div style="margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.1);">
        <div id="stats-fps-main" style="font-weight: bold;">FPS: -- / --</div>
        <div id="stats-fps-detail" style="color: #aaa; font-size: 10px;">Avg: -- | Min: -- | Dropped: 0</div>
      </div>

      <div style="margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.1);">
        <div style="color: #888; font-size: 10px;">TIMING</div>
        <div id="stats-timing">Frame: --ms</div>
        <div id="stats-timing-target" style="font-size: 10px; color: #aaa;">Target: --ms</div>
      </div>

      <div style="margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.1);">
        <div style="color: #888; font-size: 10px;">DISPLAY</div>
        <div id="stats-refresh">Refresh: --Hz</div>
        <div id="stats-pixel-ratio" style="font-size: 10px; color: #aaa;">Pixel Ratio: --</div>
      </div>

      <div style="margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.1);">
        <div style="color: #888; font-size: 10px;">QUALITY</div>
        <div id="stats-quality">Tier: --</div>
        <div id="stats-grain" style="font-size: 10px; color: #aaa;">Grain Hold: --</div>
      </div>

      <div>
        <div style="color: #888; font-size: 10px;">ADAPTIVE</div>
        <div id="stats-adaptive" style="font-size: 10px;">
          <span id="stats-upgrade">▲ Upgrade</span> | <span id="stats-downgrade">▼ Downgrade</span>
        </div>
      </div>

      <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.1);">
        <button id="stats-remove-canvas" style="
          width: 100%;
          padding: 5px 0;
          background: rgba(255,60,60,0.15);
          border: 1px solid rgba(255,60,60,0.4);
          border-radius: 4px;
          color: #ff6060;
          font-family: 'Courier New', monospace;
          font-size: 10px;
          font-weight: bold;
          cursor: pointer;
          letter-spacing: 0.05em;
        ">✕ Remove Canvas</button>
      </div>
    `,document.body.appendChild(this.statsElement),this._statsDom={fpsMain:this.statsElement.querySelector("#stats-fps-main"),fpsDetail:this.statsElement.querySelector("#stats-fps-detail"),timing:this.statsElement.querySelector("#stats-timing"),timingTarget:this.statsElement.querySelector("#stats-timing-target"),refresh:this.statsElement.querySelector("#stats-refresh"),pixelRatio:this.statsElement.querySelector("#stats-pixel-ratio"),quality:this.statsElement.querySelector("#stats-quality"),grain:this.statsElement.querySelector("#stats-grain"),upgrade:this.statsElement.querySelector("#stats-upgrade"),downgrade:this.statsElement.querySelector("#stats-downgrade")};const e=this.statsElement.querySelector("#stats-remove-canvas");e&&(e.style.pointerEvents="auto",e.addEventListener("click",()=>{if(this.renderer&&typeof this.renderer.stop=="function")this.renderer.stop(),e.textContent="✓ Renderer stopped";else{const t=document.querySelectorAll("canvas");t.forEach(n=>n.remove()),e.textContent=`✓ Removed ${t.length} canvas`}e.style.color="#22c55e",e.style.borderColor="rgba(34,197,94,0.4)",e.style.background="rgba(34,197,94,0.1)",e.disabled=!0}))}update(){if(!this.enabled)return;const e=performance.now();if(this.frameCount++,e>=this.lastFpsUpdate+500){const t=e-this.lastFpsUpdate;this.fps=Math.round(this.frameCount*1e3/t),this.frameCount=0,this.lastFpsUpdate=e,this._fpsHist[this._histIdx]=this.fps,this._histIdx=(this._histIdx+1)%this._histLen,this._histCount<this._histLen&&this._histCount++,this.fps<this.lowFpsThreshold&&this.onLowPerformance&&this.onLowPerformance(this.fps),this.updateDisplay()}}updateDisplay(){var m,x,y;if(!this.statsElement||!this._statsDom)return;const e=this._statsDom,t=this._histCount;let n=0,i=1/0;for(let v=0;v<t;v++){const E=this._fpsHist[v];n+=E,E<i&&(i=E)}const s=t>0?Math.round(n/t):0;i===1/0&&(i=0);const o=this.fps;let a=60,l=60,c="high",u=!1,h=!1;if(this.adaptiveQualityManager){const v=this.adaptiveQualityManager.getStatus();l=v.detectedRefreshRate,a=l,c=v.currentQuality,u=v.canUpgrade,h=v.canDowngrade}let d=0;if(t>1){let v=0;for(let w=0;w<t;w++){const C=this._fpsHist[w]-s;v+=C*C}const E=Math.sqrt(v/t),M=o>0?1e3/o:0;d=s>0?E/s*M:0}const f=o>0?1e3/o:0,_=(o/a*100).toFixed(0),p=o>=a*.95?"#0f0":o>=a*.85?"#ff0":"#f00";if(this.renderer){this.renderer.getPixelRatio&&(this._cachedPixelRatio=this.renderer.getPixelRatio());const v=(x=(m=this.renderer).getMaterial)==null?void 0:x.call(m);(y=v==null?void 0:v.uniforms)!=null&&y.u_grainFrameHold&&(this._cachedGrainHold=v.uniforms.u_grainFrameHold.value)}e.fpsMain.textContent=`FPS: ${o} / ${a} (${_}%)`,e.fpsMain.style.color=p,e.fpsDetail.textContent=`Avg: ${s} | Min: ${i} | Dropped: 0`,e.timing.textContent=`Frame: ${f.toFixed(2)}ms ±${d.toFixed(2)}ms`,e.timingTarget.textContent=`Target: ${(1e3/a).toFixed(2)}ms`,e.refresh.textContent=`Refresh: ${l}Hz`;const g=(window.devicePixelRatio||1).toFixed(2);e.pixelRatio.textContent=`Render PR: ${this._cachedPixelRatio.toFixed(2)} (device: ${g})`,e.quality.textContent=`Tier: ${c.toUpperCase()}`,e.grain.textContent=`Grain Hold: ${this._cachedGrainHold.toFixed(1)}x`,e.upgrade.style.color=u?"#0f0":"#555",e.downgrade.style.color=h?"#f90":"#555"}getAverageFps(){const e=this._histCount;if(e===0)return 0;let t=0;for(let n=0;n<e;n++)t+=this._fpsHist[n];return Math.round(t/e)}getMinFps(){const e=this._histCount;if(e===0)return 0;let t=1/0;for(let n=0;n<e;n++)this._fpsHist[n]<t&&(t=this._fpsHist[n]);return t===1/0?0:t}getFps(){return this.fps}getMetrics(){return{currentFps:this.fps,averageFps:this.getAverageFps(),minFps:this.getMinFps(),isLowPerformance:this.fps<this.lowFpsThreshold}}setAdaptiveQualityManager(e){this.adaptiveQualityManager=e}setRenderer(e){this.renderer=e}enable(){this.enabled||(this.enabled=!0,this.createStatsDisplay(),console.log("PerformanceMonitor: Enabled"))}disable(){this.enabled&&(this.enabled=!1,this.statsElement&&(this.statsElement.remove(),this.statsElement=null),console.log("PerformanceMonitor: Disabled"))}toggle(){this.enabled?this.disable():this.enable()}isEnabled(){return this.enabled}setLowPerformanceCallback(e){this.onLowPerformance=e}reset(){this.fps=0,this.frameCount=0,this._fpsHist.fill(0),this._histIdx=0,this._histCount=0,this.lastFpsUpdate=performance.now()}destroy(){this.statsElement&&(this.statsElement.remove(),this.statsElement=null),this.enabled=!1,this.onLowPerformance=null}static isDev(){return window.location.hostname==="localhost"||window.location.search.includes("debug=true")||window.location.search.includes("stats=true")}}function lA(r=!1){return new aA(r)}let ic=null;class cA{constructor(){this.samples=[],this.maxSamples=60,this.detecting=!1,this.result=null,this._rafId=null}async detect(){return ic||new Promise(e=>{this.samples=[],this.detecting=!0,this.result=null;let t=performance.now(),n=0;const i=s=>{if(!this.detecting){e(this.result||{refreshRate:60,confidence:0,frameTime:16.67});return}const o=s-t;n>0&&o>0&&o<100&&this.samples.push(o),t=s,n++,this.samples.length<this.maxSamples?this._rafId=requestAnimationFrame(i):(this.detecting=!1,this._rafId=null,this.result=this.analyzeFrameTimes(),ic=this.result,e(this.result))};this._rafId=requestAnimationFrame(i)})}analyzeFrameTimes(){if(this.samples.length===0)return{refreshRate:60,confidence:0,frameTime:16.67};const e=[...this.samples].sort((f,_)=>f-_),t=e[Math.floor(e.length/2)],n=this.samples.length;let i=0;for(let f=0;f<n;f++)i+=this.samples[f];const s=i/n;let o=0;for(let f=0;f<n;f++){const _=this.samples[f]-s;o+=_*_}const a=Math.sqrt(o/n),l=[{hz:240,minTime:3.8,maxTime:4.5},{hz:165,minTime:5.8,maxTime:6.3},{hz:144,minTime:6.6,maxTime:7.2},{hz:120,minTime:8,maxTime:8.7},{hz:90,minTime:10.8,maxTime:11.5},{hz:60,minTime:16,maxTime:17.5}];let c=60,u=16.67;for(const f of l)if(t>=f.minTime&&t<=f.maxTime){c=f.hz,u=1e3/f.hz;break}const d=Math.max(0,Math.min(1,1-a/2));return console.log(`RefreshRateDetector: ${c}Hz (median: ${t.toFixed(2)}ms, stdDev: ${a.toFixed(2)}ms, confidence: ${(d*100).toFixed(0)}%)`),{refreshRate:c,confidence:d,frameTime:u,median:t,stdDev:a,rawHz:1e3/t}}async detectQuick(){return this.detect()}getLastResult(){return this.result||ic||{refreshRate:60,confidence:0,frameTime:16.67}}isDetecting(){return this.detecting}cancel(){this.detecting=!1,this._rafId!==null&&(cancelAnimationFrame(this._rafId),this._rafId=null)}}async function uA(){return new cA().detect()}class hA{constructor(e,t){this.renderer=e,this.performanceMonitor=t,this.detectedRefreshRate=60,this.targetFps=60,this.currentQuality="high",this._fpsHistLen=120,this._fpsHistBuf=new Float32Array(this._fpsHistLen),this._fpsHistIdx=0,this._fpsHistCount=0,this.lastQualityDowngrade=0,this.lastQualityUpgrade=0,this.downgradeThreshold=.85,this.severeDowngradeThreshold=.7,this.upgradeThreshold=1.15,this.downgradeCooldown=3e3,this.upgradeCooldown=1e4,this.qualityFpsCombinations=[{quality:"ultra",fps:240,minRefreshRate:240},{quality:"ultra",fps:165,minRefreshRate:165},{quality:"high",fps:165,minRefreshRate:165},{quality:"high",fps:120,minRefreshRate:120},{quality:"high",fps:90,minRefreshRate:90},{quality:"high",fps:60,minRefreshRate:60},{quality:"medium",fps:60,minRefreshRate:60},{quality:"low",fps:60,minRefreshRate:60}],this.currentCombinationIndex=5}async initialize(){console.log("AdaptiveQualityManager: Initializing...");try{const e=await uA();this.detectedRefreshRate=e.refreshRate,console.log(`AdaptiveQualityManager: Detected ${this.detectedRefreshRate}Hz display (confidence: ${(e.confidence*100).toFixed(0)}%)`)}catch{console.warn("AdaptiveQualityManager: Failed to detect refresh rate, defaulting to 60Hz"),this.detectedRefreshRate=60}this.selectInitialQualityFps(),this.applySettings(),this.startMonitoring(),console.log(`AdaptiveQualityManager: Initialized with ${this.currentQuality} quality at ${this.targetFps}fps`)}selectInitialQualityFps(){if(window.innerWidth<1024||/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1){this.currentCombinationIndex=6,this.currentQuality="medium",this.targetFps=60,console.log("AdaptiveQualityManager: Mobile device detected — starting at medium quality");return}for(let t=0;t<this.qualityFpsCombinations.length;t++){const n=this.qualityFpsCombinations[t];if(this.detectedRefreshRate>=n.minRefreshRate){this.currentCombinationIndex=t,this.currentQuality=n.quality,this.targetFps=n.fps;break}}}applySettings(){this.renderer&&(this.currentQuality==="ultra"?this.renderer.setQualityUltra():this.renderer.setQuality(this.currentQuality),this.renderer.setTargetFps(this.targetFps),console.log(`AdaptiveQualityManager: Applied ${this.currentQuality} quality @ ${this.targetFps}fps`))}startMonitoring(){this._lastPerformanceCheck=0,this._performanceCheckInterval=500,this._monitoringActive=!0}stopMonitoring(){this._monitoringActive=!1}tick(){if(!this._monitoringActive)return;const e=performance.now();e-this._lastPerformanceCheck>=this._performanceCheckInterval&&(this._lastPerformanceCheck=e,this.checkPerformance(e))}checkPerformance(e){if(!this.performanceMonitor)return;const t=this.performanceMonitor.getFps();if(t<=0||(this._fpsHistBuf[this._fpsHistIdx]=t,this._fpsHistIdx=(this._fpsHistIdx+1)%this._fpsHistLen,this._fpsHistCount<this._fpsHistLen&&this._fpsHistCount++,this._fpsHistCount<30))return;let n=0;for(let o=0;o<this._fpsHistCount;o++)n+=this._fpsHistBuf[o];const s=n/this._fpsHistCount/this.targetFps;s<this.severeDowngradeThreshold?e-this.lastQualityDowngrade>1e3&&(this.downgradeQuality(),this.lastQualityDowngrade=e):s<this.downgradeThreshold?e-this.lastQualityDowngrade>this.downgradeCooldown&&(this.downgradeQuality(),this.lastQualityDowngrade=e):s>this.upgradeThreshold&&e-this.lastQualityUpgrade>this.upgradeCooldown&&e-this.lastQualityDowngrade>this.upgradeCooldown*2&&(this.upgradeQuality(),this.lastQualityUpgrade=e)}downgradeQuality(){if(this.currentCombinationIndex>=this.qualityFpsCombinations.length-1){console.log("AdaptiveQualityManager: Already at lowest quality/FPS");return}const e=this.qualityFpsCombinations[this.currentCombinationIndex];this.currentCombinationIndex++;const t=this.qualityFpsCombinations[this.currentCombinationIndex];this.currentQuality=t.quality,this.targetFps=t.fps,console.log(`AdaptiveQualityManager: Downgrading ${e.quality}@${e.fps}fps → ${t.quality}@${t.fps}fps`),this.applySettings(),this._fpsHistIdx=0,this._fpsHistCount=0}upgradeQuality(){if(this.currentCombinationIndex<=0){console.log("AdaptiveQualityManager: Already at highest quality/FPS");return}const e=this.qualityFpsCombinations[this.currentCombinationIndex];this.currentCombinationIndex--;const t=this.qualityFpsCombinations[this.currentCombinationIndex];if(t.fps>this.detectedRefreshRate){console.log(`AdaptiveQualityManager: Cannot upgrade to ${t.fps}fps (display is ${this.detectedRefreshRate}Hz)`),this.currentCombinationIndex++;return}this.currentQuality=t.quality,this.targetFps=t.fps,console.log(`AdaptiveQualityManager: Upgrading ${e.quality}@${e.fps}fps → ${t.quality}@${t.fps}fps`),this.applySettings(),this._fpsHistIdx=0,this._fpsHistCount=0}getStatus(){let e=0;if(this._fpsHistCount>0){let t=0;for(let n=0;n<this._fpsHistCount;n++)t+=this._fpsHistBuf[n];e=Math.round(t/this._fpsHistCount)}return{detectedRefreshRate:this.detectedRefreshRate,currentQuality:this.currentQuality,targetFps:this.targetFps,averageFps:e,canUpgrade:this.currentCombinationIndex>0,canDowngrade:this.currentCombinationIndex<this.qualityFpsCombinations.length-1}}manualSetQualityFps(e,t){this.currentQuality=e,this.targetFps=t,this.applySettings(),this._fpsHistIdx=0,this._fpsHistCount=0,console.log(`AdaptiveQualityManager: Manual override to ${e}@${t}fps`)}}function dA(r,e){return new hA(r,e)}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */let jo=class Ec{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),Ec.nextNameID=Ec.nextNameID||0,this.$name.id=`lil-gui-name-${++Ec.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},fA=class extends jo{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Ud(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const pA={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Ud,toHexString:Ud},ol={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},mA={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,e,t=1){const n=ol.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return ol.toHexString(i)}},gA={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=ol.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return ol.toHexString(i)}},_A=[pA,ol,mA,gA];function vA(r){return _A.find(e=>e.match(r))}let yA=class extends jo{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=vA(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Ud(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},dh=class extends jo{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},xA=class extends jo{constructor(e,t,n,i,s,o){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},s=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,l,c,u,h;const d=5,f=x=>{a=x.clientX,l=c=x.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",p)},_=x=>{if(o){const y=x.clientX-a,v=x.clientY-l;Math.abs(v)>d?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&p()}if(!o){const y=x.clientY-c;h-=y*this._step*this._arrowKeyMultiplier(x),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=x.clientY},p=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",p)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(m,x,y,v,E)=>(m-x)/(y-x)*(E-v)+v,t=m=>{const x=this.$slider.getBoundingClientRect();let y=e(m,x.left,x.right,this._min,this._max);this._snapClampSetValue(y)},n=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=m=>{t(m.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),o=!1},u=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=m=>{if(o){const x=m.touches[0].clientX-a,y=m.touches[0].clientY-l;Math.abs(x)>Math.abs(y)?c(m):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else m.preventDefault(),t(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),_=400;let p;const g=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const y=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},bA=class extends jo{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},SA=class extends jo{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}};var wA=`.lil-gui {
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
}`;function MA(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let eg=!1,EA=class J0{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!eg&&a&&(MA(wA),eg=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new bA(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new xA(this,e,t,n,i,s);case"boolean":return new fA(this,e,t);case"string":return new SA(this,e,t);case"function":return new dh(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new yA(this,e,t,n)}addFolder(e){const t=new J0({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof dh||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof dh)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};class kd{constructor(e){var t;if(this.backgroundManager=e,this.shaderController=e.getShaderController(),this.material=(t=e.getRenderer())==null?void 0:t.getMaterial(),!this.material){console.warn("DevGUI: Material not available");return}this.gui=null,this.folders={},this.params=this.createParamsProxy(),this.init()}static isDev(){return window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("debug=true")}createParamsProxy(){const e=this.material.uniforms,t={};return Object.entries(aa).forEach(([n,i])=>{const s=i.uniform||n,o=e[s];o&&(i.type==="color"?t[n]="#"+o.value.getHexString():i.type==="boolean"?t[n]=o.value>.5:t[n]=o.value)}),t}init(){this.gui=new EA({title:"🎨 Background Shader Controls",width:320}),this.gui.domElement.style.position="fixed",this.gui.domElement.style.top="10px",this.gui.domElement.style.right="10px",this.gui.domElement.style.zIndex="10000",this.buildGUI(),this.addPresetsFolder(),this.addPageConfigsFolder(),this.addPerformanceFolder(),this.addUtilitiesFolder(),this.addKeyboardShortcut(),this.startLiveSync(),console.log('🎨 DevGUI initialized - Press "G" to toggle')}buildGUI(){Object.entries(aa).forEach(([e,t])=>{let n=this.folders[t.folder];n||(n=this.gui.addFolder(t.folder),n.close(),this.folders[t.folder]=n);const i=t.uniform||e;let s;t.type==="color"?(s=n.addColor(this.params,e),s.onChange(o=>{this.shaderController.updateUniform(i,new je(o))})):t.type==="select"?(s=n.add(this.params,e,t.options),s.onChange(o=>{this.shaderController.updateUniform(i,o)})):t.type==="boolean"?(s=n.add(this.params,e),s.onChange(o=>{this.shaderController.updateUniform(i,o?1:0)})):(s=n.add(this.params,e,t.min,t.max,t.step),s.onChange(o=>{this.shaderController.updateUniform(i,o)})),t.label&&s.name(t.label)})}startLiveSync(){this._liveSyncRafId=null,this._lastSyncTime=0;const e=100,t=n=>{if(this.gui){if(this.gui._hidden){this._liveSyncRafId=requestAnimationFrame(t);return}n-this._lastSyncTime>=e&&(this._lastSyncTime=n,this.updateGUIFromUniforms()),this._liveSyncRafId=requestAnimationFrame(t)}};this._liveSyncRafId=requestAnimationFrame(t)}updateGUIFromUniforms(){const e=this.material.uniforms;Object.entries(aa).forEach(([t,n])=>{const i=n.uniform||t,s=e[i];s&&(n.type==="color"?this.params[t]="#"+s.value.getHexString():n.type==="boolean"?this.params[t]=s.value>.5:this.params[t]=s.value)}),this.gui.controllers.forEach(t=>t.updateDisplay()),Object.values(this.folders).forEach(t=>{t.controllers.forEach(n=>n.updateDisplay())})}addPresetsFolder(){const e=this.gui.addFolder("💾 Presets");this.folders.presets=e;const t=rA(),n={};t.forEach(i=>{const s=sl[i];n[s.name]=()=>{this.loadPreset(i)}}),Object.keys(n).forEach(i=>{e.add(n,i)}),e.close()}addPageConfigsFolder(){const e=this.gui.addFolder("📄 Page Configs");this.folders.pageConfigs=e;const t=this.backgroundManager.getConfigManager();if(!t){console.warn("ConfigManager not available");return}const n=t.getAllConfigs(),i=Object.keys(n).sort(),s={testPage:t.getCurrentPage()||"index"};e.add(s,"testPage",i).name("Test Page Config").onChange(c=>{console.log(`Testing page config: ${c}`),t.transitionToPage(c,.8),setTimeout(()=>{this.updateGUIFromUniforms()},850)});const o={current:t.getCurrentPage()||"none"},a=e.add(o,"current").name("Current Page").disable();this._pageIntervalId=setInterval(()=>{const c=t.getCurrentPage();c&&(o.current=c,a.updateDisplay())},500);const l={"Show All Configs":()=>{console.log("=== Page Configurations ==="),Object.entries(n).forEach(([c,u])=>{console.log(`${c}: ${u.description||u.type}`),u.type==="preset"&&console.log(`  - Uses preset: "${u.preset}"`)}),console.log("===========================")}};e.add(l,"Show All Configs"),e.close()}addPerformanceFolder(){const e=this.gui.addFolder("⚡ Performance");this.folders.performance=e;const t=this.backgroundManager.getPerformanceMonitor(),n=this.backgroundManager.getRenderer(),i={quality:n?n.getQuality():"high"};if(e.add(i,"quality",["low","medium","high"]).name("Quality Level").onChange(o=>{this.backgroundManager.setQuality(o)}),t){const o={fps:0,avgFps:0,minFps:0},a=e.add(o,"fps",0,120).name("Current FPS").disable();e.add(o,"avgFps",0,120).name("Average FPS").disable(),e.add(o,"minFps",0,120).name("Min FPS").disable();let l=null;this._statsIntervalId=setInterval(()=>{const u=t.getMetrics();o.fps=u.currentFps,o.avgFps=u.averageFps,o.minFps=u.minFps,l||(l=a.domElement.querySelector("input")),l&&(l.style.color=u.currentFps<30?"#ff0000":u.currentFps<45?"#ffff00":"#00ff00")},500);const c={"Toggle Stats Overlay":()=>{t.toggle()},"Reset Stats":()=>{t.reset(),console.log("Performance stats reset")}};e.add(c,"Toggle Stats Overlay"),e.add(c,"Reset Stats")}const s={devicePixelRatio:window.devicePixelRatio.toFixed(2),rendererPixelRatio:n&&n.renderer?n.renderer.getPixelRatio().toFixed(2):"0"};e.add(s,"devicePixelRatio").name("Device Pixel Ratio").disable(),e.add(s,"rendererPixelRatio").name("Renderer Pixel Ratio").disable(),e.close()}addUtilitiesFolder(){const e=this.gui.addFolder("🛠️ Utilities");this.folders.utilities=e;const t={"Export Config":()=>this.exportConfig(),"Import Config":()=>this.importConfig(),"Reset to Default":()=>this.loadPreset("default"),"Copy Colors":()=>this.copyColors(),"Randomize Colors":()=>this.randomizeColors(),"Randomize Noise":()=>this.randomizeNoise(),"Randomize Color Mixing":()=>this.randomizeColorMixing()};Object.keys(t).forEach(n=>{e.add(t,n)}),e.open()}loadPreset(e){const t=sl[e];if(!t){console.warn(`Preset "${e}" not found`);return}console.log(`Loading preset: ${t.name}`);const n={},i=t.parameters;Object.entries(aa).forEach(([s,o])=>{const a=o.uniform||s;i[a]!==void 0&&(n[a]=i[a])}),this.shaderController.transitionTo(n,.6),setTimeout(()=>{this.updateGUIFromUniforms()},650)}exportConfig(){const e=this.material.uniforms,t={};Object.entries(aa).forEach(([i,s])=>{const o=s.uniform||i,a=e[o];a&&(s.type==="color"?t[o]="#"+a.value.getHexString():t[o]=a.value)});const n=JSON.stringify(t,null,2);navigator.clipboard.writeText(n).then(()=>{console.log("✅ Configuration exported to clipboard!"),alert("Configuration copied to clipboard!")}).catch(i=>{console.error("Failed to copy:",i),console.log("Configuration JSON:",n),alert("Check console for configuration JSON")})}importConfig(){const e=prompt("Paste configuration JSON:");if(e)try{const t=JSON.parse(e),n={};Object.entries(t).forEach(([i,s])=>{typeof s=="string"&&s.startsWith("#")?n[i]=new je(s):n[i]=s}),this.shaderController.updateUniforms(n),this.updateGUIFromUniforms(),console.log("✅ Configuration imported successfully!"),alert("Configuration imported!")}catch(t){console.error("Failed to import configuration:",t),alert("Invalid JSON format")}}copyColors(){const e=this.material.uniforms,t={highlight:"#"+e.u_color1.value.getHexString(),midtone:"#"+e.u_color2.value.getHexString(),lowlight:"#"+e.u_color3.value.getHexString(),base:"#"+e.u_baseColor.value.getHexString()},n=JSON.stringify(t,null,2);navigator.clipboard.writeText(n).then(()=>{console.log("✅ Colors copied!",t),alert("Colors copied to clipboard!")})}randomizeColors(){const e=()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),t={highlight:e(),midtone:e(),lowlight:e(),base:e()};this.shaderController.transitionTo({u_color1:new je(t.highlight),u_color2:new je(t.midtone),u_color3:new je(t.lowlight),u_baseColor:new je(t.base)},.6),setTimeout(()=>{this.updateGUIFromUniforms()},650),console.log("🎨 Randomized colors:",t)}randomizeNoise(){const e={u_zoom:Math.random()*1.5+.2,u_noiseScale:Math.random()*4+.5,u_octaves:Math.floor(Math.random()*3)+2,u_lacunarity:Math.random()*2+1.5,u_gain:Math.random()*.6+.3,u_turbulence:Math.random()*1,u_warpOctaves:Math.floor(Math.random()*3)+1,u_ridgeAmount:Math.random()*.8,u_detailScale:Math.random()*8+4,u_detailAmount:Math.random()*.3};this.shaderController.transitionTo(e,.6),setTimeout(()=>{this.updateGUIFromUniforms()},650),console.log("🌫️ Randomized noise:",e)}randomizeColorMixing(){const e={u_colorMix1:Math.random(),u_colorMix2:Math.random(),u_colorSpread:Math.random(),u_colorSeparation:Math.random()*.6+.4,u_colorBands:Math.random()*.5};this.shaderController.transitionTo(e,.6),setTimeout(()=>{this.updateGUIFromUniforms()},650),console.log("🎨 Randomized color mixing:",e)}addKeyboardShortcut(){document.addEventListener("keydown",e=>{if(e.key==="g"||e.key==="G"){if(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")return;this.gui._hidden?this.gui.show():this.gui.hide()}})}destroy(){cancelAnimationFrame(this._liveSyncRafId),this._liveSyncRafId=null,clearInterval(this._pageIntervalId),clearInterval(this._statsIntervalId),this._pageIntervalId=null,this._statsIntervalId=null,this.gui&&(this.gui.destroy(),this.gui=null)}}function TA(r){return kd.isDev()?(console.log("DevGUI: Initializing..."),new kd(r)):(console.log("DevGUI: Not in development mode, skipping GUI"),null)}function AA(r){return null}class CA{constructor(){this.renderer=null,this.shaderController=null,this.configManager=null,this.performanceMonitor=null,this.adaptiveQualityManager=null,this.devGUI=null,this.isInitialized=!1}init(e="viewport"){console.log("Initializing custom shader background...");const t=this.detectInitialPageNamespace(),n=window.location.hostname==="localhost"||window.location.search.includes("debug=true");this.performanceMonitor=lA(n),this.renderer=new nA(e,this.performanceMonitor);const i=this.renderer.getMaterial();return i?(this.shaderController=new iA(i),this.configManager=oA(this.shaderController),t&&this.configManager&&(console.log(`🎨 Initial namespace detected: "${t}"`),console.log(`🎨 Color BEFORE transitionToPage: u_color2 = #${i.uniforms.u_color2.value.getHexString()}`),this.configManager.transitionToPage(t,0),console.log(`🎨 Color AFTER transitionToPage: u_color2 = #${i.uniforms.u_color2.value.getHexString()}`),console.log(`Applied initial background configuration for "${t}" page`)),this.adaptiveQualityManager=dA(this.renderer,this.performanceMonitor),this.renderer.setAdaptiveQualityManager(this.adaptiveQualityManager),this.performanceMonitor&&(this.performanceMonitor.setRenderer(this.renderer),this.performanceMonitor.setAdaptiveQualityManager(this.adaptiveQualityManager)),this.adaptiveQualityManager.initialize().then(()=>{console.log("AdaptiveQualityManager: System ready")}).catch(s=>{console.warn("AdaptiveQualityManager: Initialization failed, using defaults",s)}),this.isInitialized=!0,console.log("Background system initialized successfully")):console.warn("Background system initialization incomplete (fallback mode)"),this.renderer&&this.renderer.start(),this.devGUI=TA(this),this.shaderSync=AA(),this.setupDevModeSecret(),this}detectInitialPageNamespace(){const e=document.querySelector("[data-barba='container']");if(e){const i=e.getAttribute("data-barba-namespace");if(i)return i.toLowerCase()}const t=document.querySelector("main > div");if(t){const i=t.dataset.barbaNamespace;if(i)return i.toLowerCase()}const n=window.location.pathname.toLowerCase();if(n.includes("/about"))return"about";if(n.includes("/works"))return"works";if(n.includes("/contact"))return"contact";if(n.includes("/resume"))return"resume";if(n.includes("/lab"))return"labs";if(n.includes("/projects/")){const i=n.match(/\/projects\/([^\/]+)/);if(i)return i[1]}return"index"}fadeOut(e=.4){var n;const t=(n=this.renderer)==null?void 0:n.getCanvas();t&&(t.style.transition=`opacity ${e}s ease`,t.style.opacity="0")}fadeIn(e=.6,t=1){var i;const n=(i=this.renderer)==null?void 0:i.getCanvas();n&&(n.style.transition=`opacity ${e}s ease`,n.style.opacity=t.toString())}transitionToPage(e,t=7){var a;if(!this.configManager){console.warn("ConfigManager not initialized"),this.fadeIn(t);return}if(!this.configManager.shouldTransition(e)){console.log(`No transition needed for ${e} - same config`),this.fadeIn(t);return}const n=(a=this.renderer)==null?void 0:a.getCanvas();if(!n){this.configManager.transitionToPage(e,t);return}const i=t*.3,s=t*.3,o=i*.5;n.style.transition=`opacity ${i}s ease-in`,n.style.opacity="0.15",setTimeout(()=>{this.configManager.transitionToPage(e,t)},o*1e3),setTimeout(()=>{n.style.transition=`opacity ${s}s ease-out`,n.style.opacity="1"},(i+t*.4)*1e3)}transitionToPageWithFade(e,t=.3,n=.4){return new Promise(i=>{var o;if(!this.configManager){console.warn("ConfigManager not initialized"),i();return}if(!this.configManager.shouldTransition(e)){console.log(`No transition needed for ${e} - same config`),i();return}const s=(o=this.renderer)==null?void 0:o.getCanvas();if(!s){this.configManager.transitionToPage(e,0),i();return}console.log(`Background fade transition to "${e}": fade out → instant change → fade in`),s.style.transition=`opacity ${t}s ease-out`,s.style.opacity="0",setTimeout(()=>{this.configManager.transitionToPage(e,0),setTimeout(()=>{s.style.transition=`opacity ${n}s ease-in`,s.style.opacity="1",setTimeout(()=>{i()},n*1e3)},50)},t*1e3)})}getShaderController(){return this.shaderController}getRenderer(){return this.renderer}getConfigManager(){return this.configManager}getPerformanceMonitor(){return this.performanceMonitor}getDevGUI(){return this.devGUI}setQuality(e){this.renderer&&this.renderer.setQuality(e)}getQuality(){return this.renderer?this.renderer.getQuality():"high"}getAdaptiveQualityManager(){return this.adaptiveQualityManager}setTargetFps(e){this.renderer&&this.renderer.setTargetFps(e)}getTargetFps(){return this.renderer?this.renderer.getTargetFps():60}getFrameRateMetrics(){return this.renderer?this.renderer.getFrameRateMetrics():null}getAdaptiveStatus(){return this.adaptiveQualityManager?this.adaptiveQualityManager.getStatus():null}destroy(){this.devGUI&&this.devGUI.destroy(),this.renderer&&this.renderer.stop(),this.isInitialized=!1,console.log("Background system destroyed")}setupDevModeSecret(){let e="";const t="devmode";window.addEventListener("keydown",n=>{n.target.tagName==="INPUT"||n.target.tagName==="TEXTAREA"||n.key&&n.key.length===1&&/[a-z]/i.test(n.key)&&(e+=n.key.toLowerCase(),e.length>t.length&&(e=e.slice(-t.length)),e===t&&(this.toggleDevMode(),e=""))})}toggleDevMode(){if(console.log("🔓 Dev mode triggered!"),this.performanceMonitor&&this.performanceMonitor.toggle(),this.devGUI)this.devGUI.gui._hidden?this.devGUI.gui.show():this.devGUI.gui.hide();else try{this.devGUI=new kd(this)}catch(e){console.error("Could not init DevGUI",e)}}}const ps=new CA;typeof window<"u"&&(window.location.hostname==="localhost"||window.location.search.includes("debug=true"))&&(window.backgroundManager=ps,console.log("🎨 Background manager exposed to window.backgroundManager for debugging"),console.log("   Try: backgroundManager.setTargetFps(240)"),console.log("   Try: backgroundManager.getAdaptiveStatus()"),console.log("   Try: backgroundManager.getFrameRateMetrics()"));De.registerPlugin(tt);const RA=400;function PA(){return Number.isFinite(window.fadeRevealStaggerMs)?window.fadeRevealStaggerMs:RA}function Jf(){LA();const r=De.utils.toArray(".fade-reveal").filter(o=>o.tagName.toLowerCase()!=="nav");if(r.length===0)return;const e=document.querySelector("#loading-splash"),t=window.innerHeight||document.documentElement.clientHeight,n=r.map(o=>o.getBoundingClientRect()),i=PA()/1e3;let s=0;tt.getAll().forEach(o=>{r.includes(o.trigger)&&o.kill()}),r.forEach((o,a)=>{tt.create({trigger:o,start:"top 85%",onEnter:()=>fh(o),markers:!1}),tt.create({trigger:o,start:"top 100%",onLeaveBack:()=>IA(o),markers:!1});const l=n[a],c=l.top<t&&l.bottom>0;if(!e&&c){const u=o.dataset.revealDelay;if(u!==void 0)fh(o,parseFloat(u)/1e3);else{const h=s*i;s++,fh(o,h)}}})}function LA(){document.querySelectorAll(".splitting-rows").forEach(n=>{n.classList.add("fade-reveal"),n.setAttribute("data-reveal-type","splitting-rows")}),document.querySelectorAll(".splitting, [data-splitting].scroll-reveal").forEach(n=>{n.classList.contains("splitting-rows")||(n.classList.add("fade-reveal"),n.setAttribute("data-reveal-type","splitting"))}),document.querySelectorAll("h1, h2, h3").forEach(n=>{!n.classList.contains("fade-reveal")&&!n.closest("nav")&&!n.classList.contains("titles-wrapper")&&(n.classList.add("fade-reveal"),n.setAttribute("data-reveal-type","heading"))})}function fh(r,e){if(De.killTweensOf(r),r.style.removeProperty("transition"),r.classList.contains("active"))return;r.style.removeProperty("opacity");const t=r.dataset.revealDelay,n=t!==void 0?parseFloat(t)/1e3:e;n!==void 0&&(r.style.transitionDelay=`${n}s`,r.addEventListener("transitionend",function s(){r.style.removeProperty("transition-delay"),r.removeEventListener("transitionend",s)}));const i=r.getAttribute("data-reveal-type");(i==="splitting-rows"||i==="splitting")&&r.classList.add("reveal"),r.classList.add("active"),r.style.pointerEvents="auto"}function IA(r){r.classList.contains("active")&&(De.killTweensOf(r),r.getAttribute("data-reveal-type"),r.style.transition="none",De.to(r,{opacity:0,duration:.8,ease:"power2.in",overwrite:"auto",onComplete:()=>{r.classList.remove("active","reveal"),r.style.removeProperty("opacity"),r.style.removeProperty("transition"),r.style.pointerEvents="none"}}))}function Q0(){console.log("Setting up video autoplay on scroll");const r=De.utils.toArray("video");if(r.length===0){console.log("No video elements found");return}console.log(`Found ${r.length} video elements`),r.forEach((e,t)=>{tt.create({trigger:e,start:"top 90%",end:"bottom 10%",toggleClass:"in-viewport",onEnter:()=>{const n=e.currentTime;setTimeout(()=>{e.paused||e.ended?(e.currentTime=0,e.play(),e.parentNode.classList.remove("paused"),e.parentNode.classList.add("playing"),console.log(`Started playing video[${t}]`)):n===e.currentTime&&(e.currentTime=0,e.play(),e.parentNode.classList.remove("paused"),e.parentNode.classList.add("playing"),console.log(`Restarted stuck video[${t}]`))},1250)},markers:!1,once:!1})})}function Z0(){console.log("Setting up auto-scroll containers");const r=De.utils.toArray(".auto-scroll");if(r.length===0){console.log("No auto-scroll containers found");return}console.log(`Found ${r.length} auto-scroll containers`),r.forEach((e,t)=>{const n=e.querySelector(".scroll-content");if(!n){console.warn(`Auto-scroll container ${t} is missing .scroll-content child element`);return}let i=n.clientHeight-e.clientHeight;if(i<=0){console.log(`Auto-scroll container ${t} has no scrollable content`);return}let s=De.to(n,{y:-i,duration:8,ease:"cubic-bezier(0.68, -0.55, 0.27, 1.55)",paused:!0});tt.create({trigger:e,start:"top center",end:"bottom center",onEnter:()=>{console.log(`Starting auto-scroll for container ${t}`),s.restart()},onEnterBack:()=>s.restart(),markers:!1})})}(function(){function r(){for(var n=arguments.length,i=0;i<n;i++){var s=i<0||arguments.length<=i?void 0:arguments[i];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var n=this.parentNode,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];var a=s.length;if(n)for(a||n.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?n.insertBefore(this.previousSibling,l):n.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=r,DocumentFragment.prototype.append=r),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function DA(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function tg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ng(r,e,t){return e&&tg(r.prototype,e),t&&tg(r,t),r}function OA(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function ig(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function rg(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ig(Object(t),!0).forEach(function(n){OA(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ig(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function K0(r,e){return NA(r)||kA(r,e)||ev(r,e)||zA()}function Cn(r){return FA(r)||UA(r)||ev(r)||BA()}function FA(r){if(Array.isArray(r))return Bd(r)}function NA(r){if(Array.isArray(r))return r}function UA(r){if(typeof Symbol<"u"&&Symbol.iterator in Object(r))return Array.from(r)}function kA(r,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var t=[],n=!0,i=!1,s=void 0;try{for(var o=r[Symbol.iterator](),a;!(n=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));n=!0);}catch(l){i=!0,s=l}finally{try{!n&&o.return!=null&&o.return()}finally{if(i)throw s}}return t}}function ev(r,e){if(r){if(typeof r=="string")return Bd(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Bd(r,e)}}function Bd(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function BA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ms(r,e){return Object.getOwnPropertyNames(Object(r)).reduce(function(t,n){var i=Object.getOwnPropertyDescriptor(Object(r),n),s=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(t,n,s||i)},{})}function gl(r){return typeof r=="string"}function Qf(r){return Array.isArray(r)}function rc(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=ms(r),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(gl(t)||Qf(t)?String(t):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(r.position)),e}function Zf(r){var e=gl(r)||Qf(r)?String(r):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function hu(r){return r!==null&&typeof r=="object"}function HA(r){return hu(r)&&/^(1|3|11)$/.test(r.nodeType)}function VA(r){return typeof r=="number"&&r>-1&&r%1===0}function GA(r){return hu(r)&&VA(r.length)}function Fs(r){return Qf(r)?r:r==null?[]:GA(r)?Array.prototype.slice.call(r):[r]}function sg(r){var e=r;return gl(r)&&(/^(#[a-z]\w+)$/.test(r.trim())?e=document.getElementById(r.trim().slice(1)):e=document.querySelectorAll(r)),Fs(e).reduce(function(t,n){return[].concat(Cn(t),Cn(Fs(n).filter(HA)))},[])}var WA=Object.entries,Xc="_splittype",Ti={},qA=0;function ki(r,e,t){if(!hu(r))return console.warn("[data.set] owner is not an object"),null;var n=r[Xc]||(r[Xc]=++qA),i=Ti[n]||(Ti[n]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(Ti[n]=rg(rg({},i),e)):e!==void 0&&(i[e]=t),t}function gs(r,e){var t=hu(r)?r[Xc]:null,n=t&&Ti[t]||{};return n}function tv(r){var e=r&&r[Xc];e&&(delete r[e],delete Ti[e])}function XA(){Object.keys(Ti).forEach(function(r){delete Ti[r]})}function $A(){WA(Ti).forEach(function(r){var e=K0(r,2),t=e[0],n=e[1],i=n.isRoot,s=n.isSplit;(!i||!s)&&(Ti[t]=null,delete Ti[t])})}function YA(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=r?String(r):"";return t.trim().replace(/\s+/g," ").split(e)}var Kf="\\ud800-\\udfff",nv="\\u0300-\\u036f\\ufe20-\\ufe23",iv="\\u20d0-\\u20f0",rv="\\ufe0e\\ufe0f",jA="[".concat(Kf,"]"),zd="[".concat(nv).concat(iv,"]"),Hd="\\ud83c[\\udffb-\\udfff]",JA="(?:".concat(zd,"|").concat(Hd,")"),sv="[^".concat(Kf,"]"),ov="(?:\\ud83c[\\udde6-\\uddff]){2}",av="[\\ud800-\\udbff][\\udc00-\\udfff]",lv="\\u200d",cv="".concat(JA,"?"),uv="[".concat(rv,"]?"),QA="(?:"+lv+"(?:"+[sv,ov,av].join("|")+")"+uv+cv+")*",ZA=uv+cv+QA,KA="(?:".concat(["".concat(sv).concat(zd,"?"),zd,ov,av,jA].join("|"),`
)`),eC=RegExp("".concat(Hd,"(?=").concat(Hd,")|").concat(KA).concat(ZA),"g"),tC=[lv,Kf,nv,iv,rv],nC=RegExp("[".concat(tC.join(""),"]"));function iC(r){return r.split("")}function hv(r){return nC.test(r)}function rC(r){return r.match(eC)||[]}function sC(r){return hv(r)?rC(r):iC(r)}function oC(r){return r==null?"":String(r)}function aC(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r=oC(r),r&&gl(r)&&!e&&hv(r)?sC(r):r.split(e)}function Vd(r,e){var t=document.createElement(r);return e&&Object.keys(e).forEach(function(n){var i=e[n],s=gl(i)?i.trim():i;s===null||s===""||(n==="children"?t.append.apply(t,Cn(Fs(s))):t.setAttribute(n,s))}),t}var ep={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function lC(r,e){e=ms(ep,e);var t=Zf(e.types),n=e.tagName,i=r.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(i)&&s.append(" "),o=YA(i).reduce(function(l,c,u,h){var d,f;return t.chars&&(f=aC(c).map(function(_){var p=Vd(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:_});return ki(p,"isChar",!0),a=[].concat(Cn(a),[p]),p})),t.words||t.lines?(d=Vd(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?f:c}),ki(d,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(d)):f.forEach(function(_){s.appendChild(_)}),u<h.length-1&&s.append(" "),t.words?l.concat(d):l},[]),/\s$/.test(i)&&s.append(" "),r.replaceWith(s),{words:o,chars:a}}function dv(r,e){var t=r.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(t))return n;if(t===3&&/\S/.test(r.nodeValue))return lC(r,e);var i=Fs(r.childNodes);if(i.length&&(ki(r,"isSplit",!0),!gs(r).isRoot)){r.style.display="inline-block",r.style.position="relative";var s=r.nextSibling,o=r.previousSibling,a=r.textContent||"",l=s?s.textContent:" ",c=o?o.textContent:" ";ki(r,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(c)})}return i.reduce(function(u,h){var d=dv(h,e),f=d.words,_=d.chars;return{words:[].concat(Cn(u.words),Cn(f)),chars:[].concat(Cn(u.chars),Cn(_))}},n)}function cC(r,e,t,n){if(!t.absolute)return{top:e?r.offsetTop:null};var i=r.offsetParent,s=K0(n,2),o=s[0],a=s[1],l=0,c=0;if(i&&i!==document.body){var u=i.getBoundingClientRect();l=u.x+o,c=u.y+a}var h=r.getBoundingClientRect(),d=h.width,f=h.height,_=h.x,p=h.y,g=p+a-c,m=_+o-l;return{width:d,height:f,top:g,left:m}}function fv(r){gs(r).isWord?(tv(r),r.replaceWith.apply(r,Cn(r.childNodes))):Fs(r.children).forEach(function(e){return fv(e)})}var uC=function(){return document.createDocumentFragment()};function hC(r,e,t){var n=Zf(e.types),i=e.tagName,s=r.getElementsByTagName("*"),o=[],a=[],l=null,c,u,h,d=[],f=r.parentElement,_=r.nextElementSibling,p=uC(),g=window.getComputedStyle(r),m=g.textAlign,x=parseFloat(g.fontSize),y=x*.2;return e.absolute&&(h={left:r.offsetLeft,top:r.offsetTop,width:r.offsetWidth},u=r.offsetWidth,c=r.offsetHeight,ki(r,{cssWidth:r.style.width,cssHeight:r.style.height})),Fs(s).forEach(function(v){var E=v.parentElement===r,M=cC(v,E,e,t),w=M.width,C=M.height,S=M.top,b=M.left;/^br$/i.test(v.nodeName)||(n.lines&&E&&((l===null||S-l>=y)&&(l=S,o.push(a=[])),a.push(v)),e.absolute&&ki(v,{top:S,left:b,width:w,height:C}))}),f&&f.removeChild(r),n.lines&&(d=o.map(function(v){var E=Vd(i,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(m,"; width: 100%;")});ki(E,"isLine",!0);var M={height:0,top:1e4};return p.appendChild(E),v.forEach(function(w,C,S){var b=gs(w),D=b.isWordEnd,N=b.top,G=b.height,V=S[C+1];M.height=Math.max(M.height,G),M.top=Math.min(M.top,N),E.appendChild(w),D&&gs(V).isWordStart&&E.append(" ")}),e.absolute&&ki(E,{height:M.height,top:M.top}),E}),n.words||fv(p),r.replaceChildren(p)),e.absolute&&(r.style.width="".concat(r.style.width||u,"px"),r.style.height="".concat(c,"px"),Fs(s).forEach(function(v){var E=gs(v),M=E.isLine,w=E.top,C=E.left,S=E.width,b=E.height,D=gs(v.parentElement),N=!M&&D.isLine;v.style.top="".concat(N?w-D.top:w,"px"),v.style.left=M?"".concat(h.left,"px"):"".concat(C-(N?h.left:0),"px"),v.style.height="".concat(b,"px"),v.style.width=M?"".concat(h.width,"px"):"".concat(S,"px"),v.style.position="absolute"})),f&&(_?f.insertBefore(r,_):f.appendChild(r)),d}var ro=ms(ep,{}),Gd=(function(){ng(r,null,[{key:"clearData",value:function(){XA()}},{key:"setDefaults",value:function(t){return ro=ms(ro,rc(t)),ep}},{key:"revert",value:function(t){sg(t).forEach(function(n){var i=gs(n),s=i.isSplit,o=i.html,a=i.cssWidth,l=i.cssHeight;s&&(n.innerHTML=o,n.style.width=a||"",n.style.height=l||"",tv(n))})}},{key:"create",value:function(t,n){return new r(t,n)}},{key:"data",get:function(){return Ti}},{key:"defaults",get:function(){return ro},set:function(t){ro=ms(ro,rc(t))}}]);function r(e,t){DA(this,r),this.isSplit=!1,this.settings=ms(ro,rc(t)),this.elements=sg(e),this.split()}return ng(r,[{key:"split",value:function(t){var n=this;this.revert(),this.elements.forEach(function(o){ki(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var i=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=ms(this.settings,rc(t)));var s=Zf(this.settings.types);s.none||(this.elements.forEach(function(o){ki(o,"isRoot",!0);var a=dv(o,n.settings),l=a.words,c=a.chars;n.words=[].concat(Cn(n.words),Cn(l)),n.chars=[].concat(Cn(n.chars),Cn(c))}),this.elements.forEach(function(o){if(s.lines||n.settings.absolute){var a=hC(o,n.settings,i);n.lines=[].concat(Cn(n.lines),Cn(a))}}),this.isSplit=!0,window.scrollTo(i[0],i[1]),$A())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),r.revert(this.elements)}}]),r})();function Wd(r){r.splitType&&r.splitType.revert(),r.querySelectorAll(".char").forEach(t=>{t.parentNode&&t.parentNode.removeChild(t)})}function qd(){console.log("Running splitText: centralizing all text splitting");const r=document.querySelectorAll("[data-splitting], h1, h2");if(console.log(`Found ${r.length} elements for character splitting`),r.forEach(e=>{Wd(e);const t=e.classList.contains("title");t&&(e.setAttribute("data-position",e.style.position||""),e.setAttribute("data-display",e.style.display||""));const n=new Gd(e,{types:"words, chars",tagName:"span"});e.splitType=n,n.chars&&n.chars.forEach((i,s)=>{i.setAttribute("data-char",i.textContent),i.setAttribute("data-index",s),i.style.setProperty("--char-index",s),i.style.color="transparent",i.style.visibility="visible",i.id||(i.id=`char-${Math.random().toString(36).substring(2,9)}`)}),t&&e.parentElement.classList.contains("titles-wrapper")&&(e.style.position="absolute",e.style.display="block")}),document.querySelector(".splitting-rows")){const e=document.querySelectorAll(".splitting-rows");console.log(`Found ${e.length} elements for line splitting`),e.forEach(t=>{Wd(t),t.classList.remove("reveal");const n=new Gd(t,{types:"lines",tagName:"span",linesClass:"line"});t.splitType=n,n.lines&&n.lines.forEach((i,s)=>{i.setAttribute("data-line-index",s),i.setAttribute("data-text",i.textContent),i.style.opacity="0",setTimeout(()=>{i.style.opacity=""},50)})})}}function dC(r,e){let t;return function(...i){const s=()=>{clearTimeout(t),r(...i)};clearTimeout(t),t=setTimeout(s,e)}}function fC(){const r=document.querySelectorAll(".splitting-rows");r.length!==0&&(console.log(`Recalculating split-lines after resize for ${r.length} elements`),r.forEach(e=>{const t=e.classList.contains("reveal")||e.classList.contains("active");Wd(e);const n=new Gd(e,{types:"lines",tagName:"span",linesClass:"line"});e.splitType=n,n.lines&&n.lines.forEach((i,s)=>{i.setAttribute("data-line-index",s),i.setAttribute("data-text",i.textContent),t?(i.style.animation="none",i.style.opacity="1"):(i.style.opacity="0",setTimeout(()=>{!e.classList.contains("reveal")&&!e.classList.contains("active")?i.style.opacity="0":i.style.opacity=""},50))}),t&&e.classList.add("reveal","active")}))}typeof window<"u"&&window.addEventListener("resize",dC(fC,32));function tp(r="unknown"){const e=document.querySelector("h2.titles-wrapper");if(!e)return;if(!(document.querySelector("#loading-splash")!==null)&&(window.barbaTransitionActive||window.animationController&&!window.animationController.canRunAnimations())){if((r.match(/-retry/g)||[]).length>5)return;setTimeout(()=>tp(r+"-retry"),100);return}pC();const n=typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=document.querySelectorAll("h2.titles-wrapper .title");if(!i||i.length===0)return;i.forEach(o=>{o.style.position="absolute",o.style.display="block",o.classList.remove("active"),o.classList.add("hidden"),$c(o.querySelectorAll(".char"))});const s=i[0];s&&(s.classList.remove("hidden"),s.classList.add("active"),setTimeout(()=>{const o=s.querySelectorAll(".char");o.length>0&&pv(o),n||mC(e,i)},300))}function $c(r){if(!(!r||r.length===0))for(let e=0;e<r.length;e++){const t=r[e];t.classList.remove("reveal-char"),t.setAttribute("data-reset","true"),t._animDelayApplied||(t.style.animationDelay=`${e*40}ms`,t._animDelayApplied=!0)}}function pv(r){!r||r.length===0||($c(r),requestAnimationFrame(()=>{for(let e=0;e<r.length;e++){const t=r[e];t.removeAttribute("data-reset"),t.classList.add("reveal-char")}}))}function pC(){window.titleAnimationInterval&&(clearInterval(window.titleAnimationInterval),window.titleAnimationInterval=null),window.titleAnimationObserver&&(window.titleAnimationObserver.disconnect(),window.titleAnimationObserver=null),window.titleVisibilityHandler&&(document.removeEventListener("visibilitychange",window.titleVisibilityHandler),window.titleVisibilityHandler=null)}function mC(r,e){if(window.titleAnimationInterval)return;let t=0,n=!0,i=!document.hidden;const s=()=>{if(!n||!i)return;const l=e[t];l&&(l.classList.add("hidden"),l.classList.remove("active"),setTimeout(()=>{$c(l.querySelectorAll(".char")),t=(t+1)%e.length;const c=e[t];c&&($c(c.querySelectorAll(".char")),setTimeout(()=>{c.classList.remove("hidden"),c.classList.add("active"),setTimeout(()=>{pv(c.querySelectorAll(".char"))},300)},100))},400))},o=()=>{window.titleAnimationInterval||(window.titleAnimationInterval=setInterval(s,5e3))},a=()=>{window.titleAnimationInterval&&(clearInterval(window.titleAnimationInterval),window.titleAnimationInterval=null)};"IntersectionObserver"in window&&(window.titleAnimationObserver=new IntersectionObserver(l=>{n=l[0].isIntersecting,n&&i?o():a()},{rootMargin:"100px",threshold:0}),window.titleAnimationObserver.observe(r)),window.titleVisibilityHandler=()=>{i=!document.hidden,n&&i?o():a()},document.addEventListener("visibilitychange",window.titleVisibilityHandler),n&&i&&o()}function Yc(){if(console.log("revealH1Characters called"),document.querySelector("#loading-splash")!==null)console.log("Initial page load - running H1 animations immediately");else if(window.barbaTransitionActive||window.animationController&&!window.animationController.canRunAnimations()){console.log("SKIPPING H1 ANIMATION - Transition still active, will retry later"),setTimeout(Yc,100);return}console.log("RUNNING H1 ANIMATIONS - transition completed or initial load");const e=document.querySelectorAll("h1");if(e.length===0){console.warn("No H1 elements found to animate");return}console.log(`Found ${e.length} H1 elements to animate`);const t=document.querySelector("#index")!==null;e.forEach(n=>{const i=n.querySelectorAll(".char");if(i.length>0)if(console.log(`Animating ${i.length} characters in H1`),i.forEach(s=>{s.classList.remove("reveal-char"),s.style.visibility="visible",s.style.color="transparent"}),n.style.opacity="1",n.style.pointerEvents="auto",t){console.log("Running homepage-specific H1 character animations"),i.forEach((o,a)=>{De.killTweensOf(o),o.classList.remove("reveal-char");const l=a<3?56*(a+1):56+a*44;setTimeout(()=>{o.classList.add("reveal-char")},l)});const s=n.parentElement;s&&De.fromTo(s,{filter:"brightness(1.08)"},{filter:"brightness(1)",duration:.6,yoyo:!0,repeat:1,ease:"sine.inOut",onComplete:()=>De.set(s,{clearProps:"filter"})})}else i.forEach((s,o)=>{setTimeout(()=>{s.classList.add("reveal-char")},63+o*63)});else console.warn("H1 element doesn't have .char elements. Make sure splitText() was called first.")})}function jc(){if(console.log("animateDataSplittingChars called"),document.querySelector("#loading-splash")!==null)console.log("Initial page load - running data-splitting animations immediately");else if(window.barbaTransitionActive||window.animationController&&!window.animationController.canRunAnimations()){console.log("SKIPPING DATA-SPLITTING ANIMATION - Transition still active, will retry later"),setTimeout(jc,100);return}console.log("RUNNING DATA-SPLITTING ANIMATIONS - transition completed or initial load");const e=document.querySelectorAll("[data-splitting]:not(.titles-wrapper):not(.titles-wrapper *):not(h1):not(.splitting-rows)");if(e.length===0){console.log("No data-splitting elements found to animate");return}console.log(`Found ${e.length} data-splitting elements to animate`),e.forEach(t=>{const n=t.querySelectorAll(".char");n.length>0?(t.style.opacity="1",t.style.pointerEvents="auto",n.forEach(i=>{i.classList.remove("reveal-char"),i.style.visibility="visible",i.style.color="transparent"}),n.forEach((i,s)=>{setTimeout(()=>{i.classList.add("reveal-char")},s*25)})):console.warn("Element with data-splitting doesn't have .char elements. Make sure splitText() was called first.")})}function mv(){window._circleTextScrollHandler&&(window.removeEventListener("scroll",window._circleTextScrollHandler),window._circleTextScrollHandler=null),setTimeout(()=>{requestAnimationFrame(()=>{const r=document.querySelectorAll(".circular-text");if(!r.length)return;r.forEach(t=>{new S_(t).radius(120),t.style.opacity="1",t.style.pointerEvents="auto"});const e=r[0];window._circleTextScrollHandler=function(){e.style.transform=`rotate(${window.scrollY*-.15}deg)`},window.addEventListener("scroll",window._circleTextScrollHandler,{passive:!0})})},300)}const Jc=document.createElement("style");Jc.id="geo-restriction-style";Jc.innerHTML=`
  #resume-nav-link,
  [data-project="scholastic"],
  [data-project="wabash"] {
    display: none !important;
  }
`;document.head?document.head.appendChild(Jc):document.addEventListener("DOMContentLoaded",()=>{document.head.appendChild(Jc)});function ph(){const r=document.getElementById("resume-nav-link");r&&(r.href="/assets/documents/AdrainWolfe-UIDev-Resume.pdf",r.style.display="block"),document.querySelectorAll('[data-project="scholastic"]').forEach(o=>o.style.display="none"),document.querySelectorAll('[data-project="wabash"]').forEach(o=>o.style.display="none"),document.querySelectorAll("#index .projects, #works .projects").forEach(o=>{let a=o.querySelector('[data-project="american-chemical-society"]');a?a.style.display="":(a=document.createElement("a"),a.href="/projects/american-chemical-society.html",a.setAttribute("data-project","american-chemical-society"),a.setAttribute("data-text","ACS"),a.setAttribute("data-auth-group","B"),a.className="gated-project",a.textContent="ACS",o.prepend(a))});const i=document.querySelector(".project-aspects");if(i){const o=Array.from(i.querySelectorAll("div span")).find(a=>a.textContent.trim()==="2024-2026");o&&(o.textContent="2023-2026")}const s=document.querySelector(".page.project[data-current-project]");if(s){const o=s.getAttribute("data-current-project"),a=s.querySelector(".next-project-banner a");a&&(o==="american-chemical-society"?a.setAttribute("href","/projects/jpplus.html"):o==="ipi"&&a.setAttribute("href","/projects/american-chemical-society.html"))}}let sc=null,la=null;function gv(){if(la!==null){if(la)ph();else{const r=document.getElementById("geo-restriction-style");r&&r.remove()}return Promise.resolve(la)}return sc?sc.then(r=>{if(r)ph();else{const e=document.getElementById("geo-restriction-style");e&&e.remove()}return r}):(sc=fetch("https://ipapi.co/json/").then(r=>r.json()).then(r=>{const e=String(r.city||"").trim().toLowerCase(),t=String(r.region_code||"").trim().toUpperCase(),n=String(r.region||"").trim().toLowerCase(),i=String(r.country_code||r.country||"").trim().toUpperCase(),s=String(r.country_name||"").trim().toLowerCase(),o=Number(r.latitude),a=Number(r.longitude),l=new Set(["washington","arlington","alexandria","falls church","fairfax","annandale","springfield","mclean","tysons","tysons corner","vienna","reston","herndon","sterling","dulles","ashburn","leesburg","chantilly","centreville","manassas","woodbridge","stafford","fredericksburg","quantico","bethesda","chevy chase","silver spring","takoma park","kensington","wheaton","rockville","gaithersburg","germantown","potomac","college park","hyattsville","greenbelt","laurel","bowie","largo","capitol heights","oxon hill","fort washington","waldorf","upper marlboro","baltimore","columbia","ellicott city","towson","catonsville","glen burnie","hanover","linthicum","annapolis","frederick","hagerstown","martinsburg","charles town"]),c=t==="DC"||e==="washington",u=["DC","MD","VA","WV"].includes(t)&&l.has(e),h=(i==="NG"||s==="nigeria")&&(e==="lagos"||n==="lagos");function d(m,x,y,v){const M=D=>D*(Math.PI/180),w=M(y-m),C=M(v-x),S=Math.sin(w/2)**2+Math.cos(M(m))*Math.cos(M(y))*Math.sin(C/2)**2;return 3958.8*(2*Math.atan2(Math.sqrt(S),Math.sqrt(1-S)))}const p=Number.isFinite(o)&&Number.isFinite(a)&&d(38.9072,-77.0369,o,a)<=75,g=c||u||p||h;if(la=g,g)ph();else{const m=document.getElementById("geo-restriction-style");m&&m.remove()}return g}).catch(r=>{console.error("Error:",r),la=!1;const e=document.getElementById("geo-restriction-style");return e&&e.remove(),!1}),sc)}function gC(){document.querySelectorAll(".fade-in").forEach(e=>{e.addEventListener("animationend",()=>{e.classList.add("has-faded-in")},{once:!0})})}const _C=Fn;class Qc extends ml{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){const s=this,o=new ow(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this;function n(F,O){if(F.nodeType!==1)return;const L=v(F);let A=!1,j=null;switch(F.nodeName){case"svg":O=_(F,O);break;case"style":s(F);break;case"g":O=_(F,O);break;case"path":O=_(F,O),F.hasAttribute("d")&&(j=i(F));break;case"rect":O=_(F,O),j=l(F);break;case"polygon":O=_(F,O),j=c(F);break;case"polyline":O=_(F,O),j=u(F);break;case"circle":O=_(F,O),j=h(F);break;case"ellipse":O=_(F,O),j=d(F);break;case"line":O=_(F,O),j=f(F);break;case"defs":A=!0;break;case"use":O=_(F,O);const pe=(F.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),ee=F.viewportElement.getElementById(pe);ee?n(ee,O):console.warn("SVGLoader: 'use node' references non-existent node id: "+pe);break}j&&(O.fill!==void 0&&O.fill!=="none"&&j.color.setStyle(O.fill,_C),M(j,ge),N.push(j),j.userData={node:F,style:O});const he=F.childNodes;for(let $=0;$<he.length;$++){const pe=he[$];A&&pe.nodeName!=="style"&&pe.nodeName!=="defs"||n(pe,O)}L&&(V.pop(),V.length>0?ge.copy(V[V.length-1]):ge.identity())}function i(F){const O=new Kr,L=new ye,A=new ye,j=new ye;let he=!0,$=!1;const pe=F.getAttribute("d");if(pe===""||pe==="none")return null;const ee=pe.match(/[a-df-z][^a-df-z]*/ig);for(let J=0,T=ee.length;J<T;J++){const re=ee[J],ne=re.charAt(0),z=re.slice(1).trim();he===!0&&($=!0,he=!1);let H;switch(ne){case"M":H=g(z);for(let k=0,ue=H.length;k<ue;k+=2)L.x=H[k+0],L.y=H[k+1],A.x=L.x,A.y=L.y,k===0?O.moveTo(L.x,L.y):O.lineTo(L.x,L.y),k===0&&j.copy(L);break;case"H":H=g(z);for(let k=0,ue=H.length;k<ue;k++)L.x=H[k],A.x=L.x,A.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&j.copy(L);break;case"V":H=g(z);for(let k=0,ue=H.length;k<ue;k++)L.y=H[k],A.x=L.x,A.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&j.copy(L);break;case"L":H=g(z);for(let k=0,ue=H.length;k<ue;k+=2)L.x=H[k+0],L.y=H[k+1],A.x=L.x,A.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&j.copy(L);break;case"C":H=g(z);for(let k=0,ue=H.length;k<ue;k+=6)O.bezierCurveTo(H[k+0],H[k+1],H[k+2],H[k+3],H[k+4],H[k+5]),A.x=H[k+2],A.y=H[k+3],L.x=H[k+4],L.y=H[k+5],k===0&&$===!0&&j.copy(L);break;case"S":H=g(z);for(let k=0,ue=H.length;k<ue;k+=4)O.bezierCurveTo(p(L.x,A.x),p(L.y,A.y),H[k+0],H[k+1],H[k+2],H[k+3]),A.x=H[k+0],A.y=H[k+1],L.x=H[k+2],L.y=H[k+3],k===0&&$===!0&&j.copy(L);break;case"Q":H=g(z);for(let k=0,ue=H.length;k<ue;k+=4)O.quadraticCurveTo(H[k+0],H[k+1],H[k+2],H[k+3]),A.x=H[k+0],A.y=H[k+1],L.x=H[k+2],L.y=H[k+3],k===0&&$===!0&&j.copy(L);break;case"T":H=g(z);for(let k=0,ue=H.length;k<ue;k+=2){const I=p(L.x,A.x),R=p(L.y,A.y);O.quadraticCurveTo(I,R,H[k+0],H[k+1]),A.x=I,A.y=R,L.x=H[k+0],L.y=H[k+1],k===0&&$===!0&&j.copy(L)}break;case"A":H=g(z,[3,4],7);for(let k=0,ue=H.length;k<ue;k+=7){if(H[k+5]==L.x&&H[k+6]==L.y)continue;const I=L.clone();L.x=H[k+5],L.y=H[k+6],A.x=L.x,A.y=L.y,o(O,H[k],H[k+1],H[k+2],H[k+3],H[k+4],I,L),k===0&&$===!0&&j.copy(L)}break;case"m":H=g(z);for(let k=0,ue=H.length;k<ue;k+=2)L.x+=H[k+0],L.y+=H[k+1],A.x=L.x,A.y=L.y,k===0?O.moveTo(L.x,L.y):O.lineTo(L.x,L.y),k===0&&j.copy(L);break;case"h":H=g(z);for(let k=0,ue=H.length;k<ue;k++)L.x+=H[k],A.x=L.x,A.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&j.copy(L);break;case"v":H=g(z);for(let k=0,ue=H.length;k<ue;k++)L.y+=H[k],A.x=L.x,A.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&j.copy(L);break;case"l":H=g(z);for(let k=0,ue=H.length;k<ue;k+=2)L.x+=H[k+0],L.y+=H[k+1],A.x=L.x,A.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&j.copy(L);break;case"c":H=g(z);for(let k=0,ue=H.length;k<ue;k+=6)O.bezierCurveTo(L.x+H[k+0],L.y+H[k+1],L.x+H[k+2],L.y+H[k+3],L.x+H[k+4],L.y+H[k+5]),A.x=L.x+H[k+2],A.y=L.y+H[k+3],L.x+=H[k+4],L.y+=H[k+5],k===0&&$===!0&&j.copy(L);break;case"s":H=g(z);for(let k=0,ue=H.length;k<ue;k+=4)O.bezierCurveTo(p(L.x,A.x),p(L.y,A.y),L.x+H[k+0],L.y+H[k+1],L.x+H[k+2],L.y+H[k+3]),A.x=L.x+H[k+0],A.y=L.y+H[k+1],L.x+=H[k+2],L.y+=H[k+3],k===0&&$===!0&&j.copy(L);break;case"q":H=g(z);for(let k=0,ue=H.length;k<ue;k+=4)O.quadraticCurveTo(L.x+H[k+0],L.y+H[k+1],L.x+H[k+2],L.y+H[k+3]),A.x=L.x+H[k+0],A.y=L.y+H[k+1],L.x+=H[k+2],L.y+=H[k+3],k===0&&$===!0&&j.copy(L);break;case"t":H=g(z);for(let k=0,ue=H.length;k<ue;k+=2){const I=p(L.x,A.x),R=p(L.y,A.y);O.quadraticCurveTo(I,R,L.x+H[k+0],L.y+H[k+1]),A.x=I,A.y=R,L.x=L.x+H[k+0],L.y=L.y+H[k+1],k===0&&$===!0&&j.copy(L)}break;case"a":H=g(z,[3,4],7);for(let k=0,ue=H.length;k<ue;k+=7){if(H[k+5]==0&&H[k+6]==0)continue;const I=L.clone();L.x+=H[k+5],L.y+=H[k+6],A.x=L.x,A.y=L.y,o(O,H[k],H[k+1],H[k+2],H[k+3],H[k+4],I,L),k===0&&$===!0&&j.copy(L)}break;case"Z":case"z":O.currentPath.autoClose=!0,O.currentPath.curves.length>0&&(L.copy(j),O.currentPath.currentPoint.copy(L),he=!0);break;default:console.warn(re)}$=!1}return O}function s(F){if(!(!F.sheet||!F.sheet.cssRules||!F.sheet.cssRules.length))for(let O=0;O<F.sheet.cssRules.length;O++){const L=F.sheet.cssRules[O];if(L.type!==1)continue;const A=L.selectorText.split(/,/gm).filter(Boolean).map(j=>j.trim());for(let j=0;j<A.length;j++){const he=Object.fromEntries(Object.entries(L.style).filter(([,$])=>$!==""));G[A[j]]=Object.assign(G[A[j]]||{},he)}}}function o(F,O,L,A,j,he,$,pe){if(O==0||L==0){F.lineTo(pe.x,pe.y);return}A=A*Math.PI/180,O=Math.abs(O),L=Math.abs(L);const ee=($.x-pe.x)/2,J=($.y-pe.y)/2,T=Math.cos(A)*ee+Math.sin(A)*J,re=-Math.sin(A)*ee+Math.cos(A)*J;let ne=O*O,z=L*L;const H=T*T,k=re*re,ue=H/ne+k/z;if(ue>1){const Xe=Math.sqrt(ue);O=Xe*O,L=Xe*L,ne=O*O,z=L*L}const I=ne*k+z*H,R=(ne*z-I)/I;let te=Math.sqrt(Math.max(0,R));j===he&&(te=-te);const le=te*O*re/L,de=-te*L*T/O,fe=Math.cos(A)*le-Math.sin(A)*de+($.x+pe.x)/2,Ee=Math.sin(A)*le+Math.cos(A)*de+($.y+pe.y)/2,Se=a(1,0,(T-le)/O,(re-de)/L),Te=a((T-le)/O,(re-de)/L,(-T-le)/O,(-re-de)/L)%(Math.PI*2);F.currentPath.absellipse(fe,Ee,O,L,Se,Se+Te,he===0,A)}function a(F,O,L,A){const j=F*L+O*A,he=Math.sqrt(F*F+O*O)*Math.sqrt(L*L+A*A);let $=Math.acos(Math.max(-1,Math.min(1,j/he)));return F*A-O*L<0&&($=-$),$}function l(F){const O=y(F.getAttribute("x")||0),L=y(F.getAttribute("y")||0),A=y(F.getAttribute("rx")||F.getAttribute("ry")||0),j=y(F.getAttribute("ry")||F.getAttribute("rx")||0),he=y(F.getAttribute("width")),$=y(F.getAttribute("height")),pe=1-.551915024494,ee=new Kr;return ee.moveTo(O+A,L),ee.lineTo(O+he-A,L),(A!==0||j!==0)&&ee.bezierCurveTo(O+he-A*pe,L,O+he,L+j*pe,O+he,L+j),ee.lineTo(O+he,L+$-j),(A!==0||j!==0)&&ee.bezierCurveTo(O+he,L+$-j*pe,O+he-A*pe,L+$,O+he-A,L+$),ee.lineTo(O+A,L+$),(A!==0||j!==0)&&ee.bezierCurveTo(O+A*pe,L+$,O,L+$-j*pe,O,L+$-j),ee.lineTo(O,L+j),(A!==0||j!==0)&&ee.bezierCurveTo(O,L+j*pe,O+A*pe,L,O+A,L),ee}function c(F){function O(he,$,pe){const ee=y($),J=y(pe);j===0?A.moveTo(ee,J):A.lineTo(ee,J),j++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new Kr;let j=0;return F.getAttribute("points").replace(L,O),A.currentPath.autoClose=!0,A}function u(F){function O(he,$,pe){const ee=y($),J=y(pe);j===0?A.moveTo(ee,J):A.lineTo(ee,J),j++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new Kr;let j=0;return F.getAttribute("points").replace(L,O),A.currentPath.autoClose=!1,A}function h(F){const O=y(F.getAttribute("cx")||0),L=y(F.getAttribute("cy")||0),A=y(F.getAttribute("r")||0),j=new Ro;j.absarc(O,L,A,0,Math.PI*2);const he=new Kr;return he.subPaths.push(j),he}function d(F){const O=y(F.getAttribute("cx")||0),L=y(F.getAttribute("cy")||0),A=y(F.getAttribute("rx")||0),j=y(F.getAttribute("ry")||0),he=new Ro;he.absellipse(O,L,A,j,0,Math.PI*2);const $=new Kr;return $.subPaths.push(he),$}function f(F){const O=y(F.getAttribute("x1")||0),L=y(F.getAttribute("y1")||0),A=y(F.getAttribute("x2")||0),j=y(F.getAttribute("y2")||0),he=new Kr;return he.moveTo(O,L),he.lineTo(A,j),he.currentPath.autoClose=!1,he}function _(F,O){O=Object.assign({},O);let L={};if(F.hasAttribute("class")){const $=F.getAttribute("class").split(/\s/).filter(Boolean).map(pe=>pe.trim());for(let pe=0;pe<$.length;pe++)L=Object.assign(L,G["."+$[pe]])}F.hasAttribute("id")&&(L=Object.assign(L,G["#"+F.getAttribute("id")]));function A($,pe,ee){ee===void 0&&(ee=function(T){return T.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),T}),F.hasAttribute($)&&(O[pe]=ee(F.getAttribute($))),L[$]&&(O[pe]=ee(L[$])),F.style&&F.style[$]!==""&&(O[pe]=ee(F.style[$]))}function j($){return Math.max(0,Math.min(1,y($)))}function he($){return Math.max(0,y($))}return A("fill","fill"),A("fill-opacity","fillOpacity",j),A("fill-rule","fillRule"),A("opacity","opacity",j),A("stroke","stroke"),A("stroke-opacity","strokeOpacity",j),A("stroke-width","strokeWidth",he),A("stroke-linejoin","strokeLineJoin"),A("stroke-linecap","strokeLineCap"),A("stroke-miterlimit","strokeMiterLimit",he),A("visibility","visibility"),O}function p(F,O){return F-(O-F)}function g(F,O,L){if(typeof F!="string")throw new TypeError("Invalid input: "+typeof F);const A={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},j=0,he=1,$=2,pe=3;let ee=j,J=!0,T="",re="";const ne=[];function z(I,R,te){const le=new SyntaxError('Unexpected character "'+I+'" at index '+R+".");throw le.partial=te,le}function H(){T!==""&&(re===""?ne.push(Number(T)):ne.push(Number(T)*Math.pow(10,Number(re)))),T="",re=""}let k;const ue=F.length;for(let I=0;I<ue;I++){if(k=F[I],Array.isArray(O)&&O.includes(ne.length%L)&&A.FLAGS.test(k)){ee=he,T=k,H();continue}if(ee===j){if(A.WHITESPACE.test(k))continue;if(A.DIGIT.test(k)||A.SIGN.test(k)){ee=he,T=k;continue}if(A.POINT.test(k)){ee=$,T=k;continue}A.COMMA.test(k)&&(J&&z(k,I,ne),J=!0)}if(ee===he){if(A.DIGIT.test(k)){T+=k;continue}if(A.POINT.test(k)){T+=k,ee=$;continue}if(A.EXP.test(k)){ee=pe;continue}A.SIGN.test(k)&&T.length===1&&A.SIGN.test(T[0])&&z(k,I,ne)}if(ee===$){if(A.DIGIT.test(k)){T+=k;continue}if(A.EXP.test(k)){ee=pe;continue}A.POINT.test(k)&&T[T.length-1]==="."&&z(k,I,ne)}if(ee===pe){if(A.DIGIT.test(k)){re+=k;continue}if(A.SIGN.test(k)){if(re===""){re+=k;continue}re.length===1&&A.SIGN.test(re)&&z(k,I,ne)}}A.WHITESPACE.test(k)?(H(),ee=j,J=!1):A.COMMA.test(k)?(H(),ee=j,J=!0):A.SIGN.test(k)?(H(),ee=he,T=k):A.POINT.test(k)?(H(),ee=$,T=k):z(k,I,ne)}return H(),ne}const m=["mm","cm","in","pt","pc","px"],x={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(F){let O="px";if(typeof F=="string"||F instanceof String)for(let A=0,j=m.length;A<j;A++){const he=m[A];if(F.endsWith(he)){O=he,F=F.substring(0,F.length-he.length);break}}let L;return O==="px"&&t.defaultUnit!=="px"?L=x.in[t.defaultUnit]/t.defaultDPI:(L=x[O][t.defaultUnit],L<0&&(L=x[O].in*t.defaultDPI)),L*parseFloat(F)}function v(F){if(!(F.hasAttribute("transform")||F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))))return null;const O=E(F);return V.length>0&&O.premultiply(V[V.length-1]),ge.copy(O),V.push(O),O}function E(F){const O=new Ke,L=Y;if(F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))){const A=y(F.getAttribute("x")),j=y(F.getAttribute("y"));O.translate(A,j)}if(F.hasAttribute("transform")){const A=F.getAttribute("transform").split(")");for(let j=A.length-1;j>=0;j--){const he=A[j].trim();if(he==="")continue;const $=he.indexOf("("),pe=he.length;if($>0&&$<pe){const ee=he.slice(0,$),J=g(he.slice($+1));switch(L.identity(),ee){case"translate":if(J.length>=1){const T=J[0];let re=0;J.length>=2&&(re=J[1]),L.translate(T,re)}break;case"rotate":if(J.length>=1){let T=0,re=0,ne=0;T=J[0]*Math.PI/180,J.length>=3&&(re=J[1],ne=J[2]),q.makeTranslation(-re,-ne),X.makeRotation(T),B.multiplyMatrices(X,q),q.makeTranslation(re,ne),L.multiplyMatrices(q,B)}break;case"scale":if(J.length>=1){const T=J[0];let re=T;J.length>=2&&(re=J[1]),L.scale(T,re)}break;case"skewX":J.length===1&&L.set(1,Math.tan(J[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":J.length===1&&L.set(1,0,0,Math.tan(J[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":J.length===6&&L.set(J[0],J[2],J[4],J[1],J[3],J[5],0,0,1);break}}O.premultiply(L)}}return O}function M(F,O){function L($){U.set($.x,$.y,1).applyMatrix3(O),$.set(U.x,U.y)}function A($){const pe=$.xRadius,ee=$.yRadius,J=Math.cos($.aRotation),T=Math.sin($.aRotation),re=new K(pe*J,pe*T,0),ne=new K(-ee*T,ee*J,0),z=re.applyMatrix3(O),H=ne.applyMatrix3(O),k=Y.set(z.x,H.x,0,z.y,H.y,0,0,0,1),ue=q.copy(k).invert(),te=X.copy(ue).transpose().multiply(ue).elements,le=D(te[0],te[1],te[4]),de=Math.sqrt(le.rt1),fe=Math.sqrt(le.rt2);if($.xRadius=1/de,$.yRadius=1/fe,$.aRotation=Math.atan2(le.sn,le.cs),!(($.aEndAngle-$.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Se=q.set(de,0,0,0,fe,0,0,0,1),Te=X.set(le.cs,le.sn,0,-le.sn,le.cs,0,0,0,1),Xe=Se.multiply(Te).multiply(k),be=Me=>{const{x:qe,y:He}=new K(Math.cos(Me),Math.sin(Me),0).applyMatrix3(Xe);return Math.atan2(He,qe)};$.aStartAngle=be($.aStartAngle),$.aEndAngle=be($.aEndAngle),w(O)&&($.aClockwise=!$.aClockwise)}}function j($){const pe=S(O),ee=b(O);$.xRadius*=pe,$.yRadius*=ee;const J=pe>Number.EPSILON?Math.atan2(O.elements[1],O.elements[0]):Math.atan2(-O.elements[3],O.elements[4]);$.aRotation+=J,w(O)&&($.aStartAngle*=-1,$.aEndAngle*=-1,$.aClockwise=!$.aClockwise)}const he=F.subPaths;for(let $=0,pe=he.length;$<pe;$++){const J=he[$].curves;for(let T=0;T<J.length;T++){const re=J[T];re.isLineCurve?(L(re.v1),L(re.v2)):re.isCubicBezierCurve?(L(re.v0),L(re.v1),L(re.v2),L(re.v3)):re.isQuadraticBezierCurve?(L(re.v0),L(re.v1),L(re.v2)):re.isEllipseCurve&&(se.set(re.aX,re.aY),L(se),re.aX=se.x,re.aY=se.y,C(O)?A(re):j(re))}}}function w(F){const O=F.elements;return O[0]*O[4]-O[1]*O[3]<0}function C(F){const O=F.elements,L=O[0]*O[3]+O[1]*O[4];if(L===0)return!1;const A=S(F),j=b(F);return Math.abs(L/(A*j))>Number.EPSILON}function S(F){const O=F.elements;return Math.sqrt(O[0]*O[0]+O[1]*O[1])}function b(F){const O=F.elements;return Math.sqrt(O[3]*O[3]+O[4]*O[4])}function D(F,O,L){let A,j,he,$,pe;const ee=F+L,J=F-L,T=Math.sqrt(J*J+4*O*O);return ee>0?(A=.5*(ee+T),pe=1/A,j=F*pe*L-O*pe*O):ee<0?j=.5*(ee-T):(A=.5*T,j=-.5*T),J>0?he=J+T:he=J-T,Math.abs(he)>2*Math.abs(O)?(pe=-2*O/he,$=1/Math.sqrt(1+pe*pe),he=pe*$):Math.abs(O)===0?(he=1,$=0):(pe=-.5*he/O,he=1/Math.sqrt(1+pe*pe),$=pe*he),J>0&&(pe=he,he=-$,$=pe),{rt1:A,rt2:j,cs:he,sn:$}}const N=[],G={},V=[],Y=new Ke,q=new Ke,X=new Ke,B=new Ke,se=new ye,U=new K,ge=new Ke,_e=new DOMParser().parseFromString(e,"image/svg+xml");return n(_e.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:N,xml:_e.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function s(p,g,m,x){const y=p.x,v=g.x,E=m.x,M=x.x,w=p.y,C=g.y,S=m.y,b=x.y,D=(M-E)*(w-S)-(b-S)*(y-E),N=(v-y)*(w-S)-(C-w)*(y-E),G=(b-S)*(v-y)-(M-E)*(C-w),V=D/G,Y=N/G;if(G===0&&D!==0||V<=0||V>=1||Y<0||Y>1)return null;if(D===0&&G===0){for(let q=0;q<2;q++)if(o(q===0?m:x,p,g),i.loc==n.ORIGIN){const X=q===0?m:x;return{x:X.x,y:X.y,t:i.t}}else if(i.loc==n.BETWEEN){const X=+(y+i.t*(v-y)).toPrecision(10),B=+(w+i.t*(C-w)).toPrecision(10);return{x:X,y:B,t:i.t}}return null}else{for(let B=0;B<2;B++)if(o(B===0?m:x,p,g),i.loc==n.ORIGIN){const se=B===0?m:x;return{x:se.x,y:se.y,t:i.t}}const q=+(y+V*(v-y)).toPrecision(10),X=+(w+V*(C-w)).toPrecision(10);return{x:q,y:X,t:V}}}function o(p,g,m){const x=m.x-g.x,y=m.y-g.y,v=p.x-g.x,E=p.y-g.y,M=x*E-v*y;if(p.x===g.x&&p.y===g.y){i.loc=n.ORIGIN,i.t=0;return}if(p.x===m.x&&p.y===m.y){i.loc=n.DESTINATION,i.t=1;return}if(M<-Number.EPSILON){i.loc=n.LEFT;return}if(M>Number.EPSILON){i.loc=n.RIGHT;return}if(x*v<0||y*E<0){i.loc=n.BEHIND;return}if(Math.sqrt(x*x+y*y)<Math.sqrt(v*v+E*E)){i.loc=n.BEYOND;return}let w;x!==0?w=v/x:w=E/y,i.loc=n.BETWEEN,i.t=w}function a(p,g){const m=[],x=[];for(let y=1;y<p.length;y++){const v=p[y-1],E=p[y];for(let M=1;M<g.length;M++){const w=g[M-1],C=g[M],S=s(v,E,w,C);S!==null&&m.find(b=>b.t<=S.t+Number.EPSILON&&b.t>=S.t-Number.EPSILON)===void 0&&(m.push(S),x.push(new ye(S.x,S.y)))}}return x}function l(p,g,m){const x=new ye;g.getCenter(x);const y=[];return m.forEach(v=>{v.boundingBox.containsPoint(x)&&a(p,v.points).forEach(M=>{y.push({identifier:v.identifier,isCW:v.isCW,point:M})})}),y.sort((v,E)=>v.point.x-E.point.x),y}function c(p,g,m,x,y){(y==null||y==="")&&(y="nonzero");const v=new ye;p.boundingBox.getCenter(v);const E=[new ye(m,v.y),new ye(x,v.y)],M=l(E,p.boundingBox,g);M.sort((N,G)=>N.point.x-G.point.x);const w=[],C=[];M.forEach(N=>{N.identifier===p.identifier?w.push(N):C.push(N)});const S=w[0].point.x,b=[];let D=0;for(;D<C.length&&C[D].point.x<S;)b.length>0&&b[b.length-1]===C[D].identifier?b.pop():b.push(C[D].identifier),D++;if(b.push(p.identifier),y==="evenodd"){const N=b.length%2===0,G=b[b.length-2];return{identifier:p.identifier,isHole:N,for:G}}else if(y==="nonzero"){let N=!0,G=null,V=null;for(let Y=0;Y<b.length;Y++){const q=b[Y];N?(V=g[q].isCW,N=!1,G=q):V!==g[q].isCW&&(V=g[q].isCW,N=!0)}return{identifier:p.identifier,isHole:N,for:G}}else console.warn('fill-rule: "'+y+'" is currently not implemented.')}let u=999999999,h=-999999999,d=e.subPaths.map(p=>{const g=p.getPoints();let m=-999999999,x=999999999,y=-999999999,v=999999999;for(let E=0;E<g.length;E++){const M=g[E];M.y>m&&(m=M.y),M.y<x&&(x=M.y),M.x>y&&(y=M.x),M.x<v&&(v=M.x)}return h<=y&&(h=y+1),u>=v&&(u=v-1),{curves:p.curves,points:g,isCW:Ts.isClockWise(g),identifier:-1,boundingBox:new mw(new ye(v,x),new ye(y,m))}});d=d.filter(p=>p.points.length>1);for(let p=0;p<d.length;p++)d[p].identifier=p;const f=d.map(p=>c(p,d,u,h,e.userData?e.userData.style.fillRule:void 0)),_=[];return d.forEach(p=>{if(!f[p.identifier].isHole){const m=new Va;m.curves=p.curves,f.filter(y=>y.isHole&&y.for===p.identifier).forEach(y=>{const v=d[y.identifier],E=new Ro;E.curves=v.curves,m.holes.push(E)}),_.push(m)}}),_}static getStrokeStyle(e,t,n,i,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(e,t,n,i){const s=[],o=[],a=[];if(Qc.pointsToStrokeWithBuffers(e,t,n,i,s,o,a)===0)return null;const l=new dr;return l.setAttribute("position",new _i(s,3)),l.setAttribute("normal",new _i(o,3)),l.setAttribute("uv",new _i(a,2)),l}static pointsToStrokeWithBuffers(e,t,n,i,s,o,a,l){const c=new ye,u=new ye,h=new ye,d=new ye,f=new ye,_=new ye,p=new ye,g=new ye,m=new ye,x=new ye,y=new ye,v=new ye,E=new ye,M=new ye,w=new ye,C=new ye,S=new ye;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,e=J(e);const b=e.length;if(b<2)return 0;const D=e[0].equals(e[b-1]);let N,G=e[0],V;const Y=t.strokeWidth/2,q=1/(b-1);let X=0,B,se,U,ge,_e=!1,we=0,F=l*3,O=l*2;L(e[0],e[1],c).multiplyScalar(Y),g.copy(e[0]).sub(c),m.copy(e[0]).add(c),x.copy(g),y.copy(m);for(let T=1;T<b;T++){N=e[T],T===b-1?D?V=e[1]:V=void 0:V=e[T+1];const re=c;if(L(G,N,re),h.copy(re).multiplyScalar(Y),v.copy(N).sub(h),E.copy(N).add(h),B=X+q,se=!1,V!==void 0){L(N,V,u),h.copy(u).multiplyScalar(Y),M.copy(N).sub(h),w.copy(N).add(h),U=!0,h.subVectors(V,G),re.dot(h)<0&&(U=!1),T===1&&(_e=U),h.subVectors(V,N),h.normalize();const ne=Math.abs(re.dot(h));if(ne>Number.EPSILON){const z=Y/ne;h.multiplyScalar(-z),d.subVectors(N,G),f.copy(d).setLength(z).add(h),C.copy(f).negate();const H=f.length(),k=d.length();d.divideScalar(k),_.subVectors(V,N);const ue=_.length();switch(_.divideScalar(ue),d.dot(C)<k&&_.dot(C)<ue&&(se=!0),S.copy(f).add(N),C.add(N),ge=!1,se?U?(w.copy(C),E.copy(C)):(M.copy(C),v.copy(C)):he(),t.strokeLineJoin){case"bevel":$(U,se,B);break;case"round":pe(U,se),U?j(N,v,M,B,0):j(N,w,E,B,1);break;case"miter":case"miter-clip":default:const I=Y*t.strokeMiterLimit/H;if(I<1)if(t.strokeLineJoin!=="miter-clip"){$(U,se,B);break}else pe(U,se),U?(_.subVectors(S,v).multiplyScalar(I).add(v),p.subVectors(S,M).multiplyScalar(I).add(M),A(v,B,0),A(_,B,0),A(N,B,.5),A(N,B,.5),A(_,B,0),A(p,B,0),A(N,B,.5),A(p,B,0),A(M,B,0)):(_.subVectors(S,E).multiplyScalar(I).add(E),p.subVectors(S,w).multiplyScalar(I).add(w),A(E,B,1),A(_,B,1),A(N,B,.5),A(N,B,.5),A(_,B,1),A(p,B,1),A(N,B,.5),A(p,B,1),A(w,B,1));else se?(U?(A(m,X,1),A(g,X,0),A(S,B,0),A(m,X,1),A(S,B,0),A(C,B,1)):(A(m,X,1),A(g,X,0),A(S,B,1),A(g,X,0),A(C,B,0),A(S,B,1)),U?M.copy(S):w.copy(S)):U?(A(v,B,0),A(S,B,0),A(N,B,.5),A(N,B,.5),A(S,B,0),A(M,B,0)):(A(E,B,1),A(S,B,1),A(N,B,.5),A(N,B,.5),A(S,B,1),A(w,B,1)),ge=!0;break}}else he()}else he();!D&&T===b-1&&ee(e[0],x,y,U,!0,X),X=B,G=N,g.copy(M),m.copy(w)}if(!D)ee(N,v,E,U,!1,B);else if(se&&s){let T=S,re=C;_e!==U&&(T=C,re=S),U?(ge||_e)&&(re.toArray(s,0),re.toArray(s,9),ge&&T.toArray(s,3)):(ge||!_e)&&(re.toArray(s,3),re.toArray(s,9),ge&&T.toArray(s,0))}return we;function L(T,re,ne){return ne.subVectors(re,T),ne.set(-ne.y,ne.x).normalize()}function A(T,re,ne){s&&(s[F]=T.x,s[F+1]=T.y,s[F+2]=0,o&&(o[F]=0,o[F+1]=0,o[F+2]=1),F+=3,a&&(a[O]=re,a[O+1]=ne,O+=2)),we+=3}function j(T,re,ne,z,H){c.copy(re).sub(T).normalize(),u.copy(ne).sub(T).normalize();let k=Math.PI;const ue=c.dot(u);Math.abs(ue)<1&&(k=Math.abs(Math.acos(ue))),k/=n,h.copy(re);for(let I=0,R=n-1;I<R;I++)d.copy(h).rotateAround(T,k),A(h,z,H),A(d,z,H),A(T,z,.5),h.copy(d);A(d,z,H),A(ne,z,H),A(T,z,.5)}function he(){A(m,X,1),A(g,X,0),A(v,B,0),A(m,X,1),A(v,B,0),A(E,B,1)}function $(T,re,ne){re?T?(A(m,X,1),A(g,X,0),A(v,B,0),A(m,X,1),A(v,B,0),A(C,B,1),A(v,ne,0),A(M,ne,0),A(C,ne,.5)):(A(m,X,1),A(g,X,0),A(E,B,1),A(g,X,0),A(C,B,0),A(E,B,1),A(E,ne,1),A(C,ne,0),A(w,ne,1)):T?(A(v,ne,0),A(M,ne,0),A(N,ne,.5)):(A(E,ne,1),A(w,ne,0),A(N,ne,.5))}function pe(T,re){re&&(T?(A(m,X,1),A(g,X,0),A(v,B,0),A(m,X,1),A(v,B,0),A(C,B,1),A(v,X,0),A(N,B,.5),A(C,B,1),A(N,B,.5),A(M,X,0),A(C,B,1)):(A(m,X,1),A(g,X,0),A(E,B,1),A(g,X,0),A(C,B,0),A(E,B,1),A(E,X,1),A(C,B,0),A(N,B,.5),A(N,B,.5),A(C,B,0),A(w,X,1)))}function ee(T,re,ne,z,H,k){switch(t.strokeLineCap){case"round":H?j(T,ne,re,k,.5):j(T,re,ne,k,.5);break;case"square":if(H)c.subVectors(re,T),u.set(c.y,-c.x),h.addVectors(c,u).add(T),d.subVectors(u,c).add(T),z?(h.toArray(s,3),d.toArray(s,0),d.toArray(s,9)):(h.toArray(s,3),a[7]===1?d.toArray(s,9):h.toArray(s,9),d.toArray(s,0));else{c.subVectors(ne,T),u.set(c.y,-c.x),h.addVectors(c,u).add(T),d.subVectors(u,c).add(T);const ue=s.length;z?(h.toArray(s,ue-3),d.toArray(s,ue-6),d.toArray(s,ue-12)):(d.toArray(s,ue-6),h.toArray(s,ue-3),d.toArray(s,ue-12))}break}}function J(T){let re=!1;for(let z=1,H=T.length-1;z<H;z++)if(T[z].distanceTo(T[z+1])<i){re=!0;break}if(!re)return T;const ne=[];ne.push(T[0]);for(let z=1,H=T.length-1;z<H;z++)T[z].distanceTo(T[z+1])>=i&&ne.push(T[z]);return ne.push(T[T.length-1]),ne}}}function vC(r){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function vo(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),s=Math.round(r.b),o=r.a,a=Math.round(r.h),l=r.s.toFixed(1),c=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=r.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+o+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var og=Array.prototype.forEach,ca=Array.prototype.slice,ve={BREAK:{},extend:function(e){return this.each(ca.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(t[i])||(e[i]=t[i])}).bind(this))},this),e},defaults:function(e){return this.each(ca.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(e[i])&&(e[i]=t[i])}).bind(this))},this),e},compose:function(){var e=ca.call(arguments);return function(){for(var t=ca.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(og&&e.forEach&&e.forEach===og)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,s=void 0;for(i=0,s=e.length;i<s;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var s=this,o=arguments;function a(){i=null,n||e.apply(s,o)}var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():ca.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:(function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e})(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},yC=[{litmus:ve.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:vo},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:vo},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:vo},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:vo}}},{litmus:ve.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:ve.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:ve.isObject,conversions:{RGBA_OBJ:{read:function(e){return ve.isNumber(e.r)&&ve.isNumber(e.g)&&ve.isNumber(e.b)&&ve.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return ve.isNumber(e.r)&&ve.isNumber(e.g)&&ve.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return ve.isNumber(e.h)&&ve.isNumber(e.s)&&ve.isNumber(e.v)&&ve.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return ve.isNumber(e.h)&&ve.isNumber(e.s)&&ve.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],ua=void 0,oc=void 0,Xd=function(){oc=!1;var e=arguments.length>1?ve.toArray(arguments):arguments[0];return ve.each(yC,function(t){if(t.litmus(e))return ve.each(t.conversions,function(n,i){if(ua=n.read(e),oc===!1&&ua!==!1)return oc=ua,ua.conversionName=i,ua.conversion=n,ve.BREAK}),ve.BREAK}),oc},ag=void 0,Zc={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-s*t),l=n*(1-(1-s)*t),c=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),s=Math.max(e,t,n),o=s-i,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-n)/o:t===s?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(ag=t*8)|e&~(255<<ag)}},xC=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ai=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Ci=(function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}})(),Vr=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:r(s,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},Wr=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},qr=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},on=(function(){function r(){if(Ai(this,r),this.__state=Xd.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Ci(r,[{key:"toString",value:function(){return vo(this)}},{key:"toHexString",value:function(){return vo(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r})();function np(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(on.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(on.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function ip(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(on.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(on.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}on.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=Zc.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")ve.extend(r.__state,Zc.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};on.recalculateHSV=function(r){var e=Zc.rgb_to_hsv(r.r,r.g,r.b);ve.extend(r.__state,{s:e.s,v:e.v}),ve.isNaN(e.h)?ve.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};on.COMPONENTS=["r","g","b","h","s","v","hex","a"];np(on.prototype,"r",2);np(on.prototype,"g",1);np(on.prototype,"b",0);ip(on.prototype,"h");ip(on.prototype,"s");ip(on.prototype,"v");Object.defineProperty(on.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(on.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Zc.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var ks=(function(){function r(e,t){Ai(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Ci(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r})(),bC={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},_v={};ve.each(bC,function(r,e){ve.each(r,function(t){_v[t]=e})});var SC=/(\d+(\.\d+)?)px/;function Ri(r){if(r==="0"||ve.isUndefined(r))return 0;var e=r.match(SC);return ve.isNull(e)?0:parseFloat(e[1])}var ae={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,s=t;ve.isUndefined(s)&&(s=!0),ve.isUndefined(i)&&(i=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var s=n||{},o=_v[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=a.initKeyboardEvent||a.initKeyEvent;ve.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}ve.defaults(a,i),e.dispatchEvent(a)},bind:function(e,t,n,i){var s=i||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),ae},unbind:function(e,t,n,i){var s=i||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),ae},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return ae},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return ae},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Ri(t["border-left-width"])+Ri(t["border-right-width"])+Ri(t["padding-left"])+Ri(t["padding-right"])+Ri(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Ri(t["border-top-width"])+Ri(t["border-bottom-width"])+Ri(t["padding-top"])+Ri(t["padding-bottom"])+Ri(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},vv=(function(r){Wr(e,r);function e(t,n){Ai(this,e);var i=qr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return ae.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Ci(e,[{key:"setValue",value:function(n){var i=Vr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Vr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(ks),wC=(function(r){Wr(e,r);function e(t,n,i){Ai(this,e);var s=qr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=s;if(s.__select=document.createElement("select"),ve.isArray(o)){var l={};ve.each(o,function(c){l[c]=c}),o=l}return ve.each(o,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),a.__select.appendChild(h)}),s.updateDisplay(),ae.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),s.domElement.appendChild(s.__select),s}return Ci(e,[{key:"setValue",value:function(n){var i=Vr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return ae.isActive(this.__select)?this:(this.__select.value=this.getValue(),Vr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e})(ks),MC=(function(r){Wr(e,r);function e(t,n){Ai(this,e);var i=qr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),ae.bind(i.__input,"keyup",o),ae.bind(i.__input,"change",o),ae.bind(i.__input,"blur",a),ae.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Ci(e,[{key:"updateDisplay",value:function(){return ae.isActive(this.__input)||(this.__input.value=this.getValue()),Vr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(ks);function lg(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var yv=(function(r){Wr(e,r);function e(t,n,i){Ai(this,e);var s=qr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,ve.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=lg(s.__impliedStep),s}return Ci(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Vr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=lg(n),this}}]),e})(ks);function EC(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var Kc=(function(r){Wr(e,r);function e(t,n,i){Ai(this,e);var s=qr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var _=parseFloat(o.__input.value);ve.isNaN(_)||o.setValue(_)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function u(){c()}function h(_){var p=a-_.clientY;o.setValue(o.getValue()+p*o.__impliedStep),a=_.clientY}function d(){ae.unbind(window,"mousemove",h),ae.unbind(window,"mouseup",d),c()}function f(_){ae.bind(window,"mousemove",h),ae.bind(window,"mouseup",d),a=_.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),ae.bind(s.__input,"change",l),ae.bind(s.__input,"blur",u),ae.bind(s.__input,"mousedown",f),ae.bind(s.__input,"keydown",function(_){_.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Ci(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():EC(this.getValue(),this.__precision),Vr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(yv);function cg(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var $d=(function(r){Wr(e,r);function e(t,n,i,s,o){Ai(this,e);var a=qr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),ae.bind(a.__background,"mousedown",c),ae.bind(a.__background,"touchstart",d),ae.addClass(a.__background,"slider"),ae.addClass(a.__foreground,"slider-fg");function c(p){document.activeElement.blur(),ae.bind(window,"mousemove",u),ae.bind(window,"mouseup",h),u(p)}function u(p){p.preventDefault();var g=l.__background.getBoundingClientRect();return l.setValue(cg(p.clientX,g.left,g.right,l.__min,l.__max)),!1}function h(){ae.unbind(window,"mousemove",u),ae.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(p){p.touches.length===1&&(ae.bind(window,"touchmove",f),ae.bind(window,"touchend",_),f(p))}function f(p){var g=p.touches[0].clientX,m=l.__background.getBoundingClientRect();l.setValue(cg(g,m.left,m.right,l.__min,l.__max))}function _(){ae.unbind(window,"touchmove",f),ae.unbind(window,"touchend",_),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Ci(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Vr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(yv),xv=(function(r){Wr(e,r);function e(t,n,i){Ai(this,e);var s=qr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,ae.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),ae.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Ci(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e})(ks),Yd=(function(r){Wr(e,r);function e(t,n){Ai(this,e);var i=qr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new on(i.getValue()),i.__temp=new on(0);var s=i;i.domElement=document.createElement("div"),ae.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",ae.bind(i.__input,"keydown",function(p){p.keyCode===13&&h.call(this)}),ae.bind(i.__input,"blur",h),ae.bind(i.__selector,"mousedown",function(){ae.addClass(this,"drag").bind(window,"mouseup",function(){ae.removeClass(s.__selector,"drag")})}),ae.bind(i.__selector,"touchstart",function(){ae.addClass(this,"drag").bind(window,"touchend",function(){ae.removeClass(s.__selector,"drag")})});var o=document.createElement("div");ve.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),ve.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),ve.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),ve.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),ve.extend(o.style,{width:"100%",height:"100%",background:"none"}),ug(o,"top","rgba(0,0,0,0)","#000"),ve.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),AC(i.__hue_field),ve.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),ae.bind(i.__saturation_field,"mousedown",a),ae.bind(i.__saturation_field,"touchstart",a),ae.bind(i.__field_knob,"mousedown",a),ae.bind(i.__field_knob,"touchstart",a),ae.bind(i.__hue_field,"mousedown",l),ae.bind(i.__hue_field,"touchstart",l);function a(p){f(p),ae.bind(window,"mousemove",f),ae.bind(window,"touchmove",f),ae.bind(window,"mouseup",c),ae.bind(window,"touchend",c)}function l(p){_(p),ae.bind(window,"mousemove",_),ae.bind(window,"touchmove",_),ae.bind(window,"mouseup",u),ae.bind(window,"touchend",u)}function c(){ae.unbind(window,"mousemove",f),ae.unbind(window,"touchmove",f),ae.unbind(window,"mouseup",c),ae.unbind(window,"touchend",c),d()}function u(){ae.unbind(window,"mousemove",_),ae.unbind(window,"touchmove",_),ae.unbind(window,"mouseup",u),ae.unbind(window,"touchend",u),d()}function h(){var p=Xd(this.value);p!==!1?(s.__color.__state=p,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function f(p){p.type.indexOf("touch")===-1&&p.preventDefault();var g=s.__saturation_field.getBoundingClientRect(),m=p.touches&&p.touches[0]||p,x=m.clientX,y=m.clientY,v=(x-g.left)/(g.right-g.left),E=1-(y-g.top)/(g.bottom-g.top);return E>1?E=1:E<0&&(E=0),v>1?v=1:v<0&&(v=0),s.__color.v=E,s.__color.s=v,s.setValue(s.__color.toOriginal()),!1}function _(p){p.type.indexOf("touch")===-1&&p.preventDefault();var g=s.__hue_field.getBoundingClientRect(),m=p.touches&&p.touches[0]||p,x=m.clientY,y=1-(x-g.top)/(g.bottom-g.top);return y>1?y=1:y<0&&(y=0),s.__color.h=y*360,s.setValue(s.__color.toOriginal()),!1}return i}return Ci(e,[{key:"updateDisplay",value:function(){var n=Xd(this.getValue());if(n!==!1){var i=!1;ve.each(on.COMPONENTS,function(a){if(!ve.isUndefined(n[a])&&!ve.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&ve.extend(this.__color.__state,n)}ve.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;ve.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,ug(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),ve.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e})(ks),TC=["-moz-","-o-","-webkit-","-ms-",""];function ug(r,e,t,n){r.style.background="",ve.each(TC,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function AC(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var CC={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},RC=`<div id="dg-save" class="dg dialogue">

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

</div>`,PC=function(e,t){var n=e[t];return ve.isArray(arguments[2])||ve.isObject(arguments[2])?new wC(e,t,arguments[2]):ve.isNumber(n)?ve.isNumber(arguments[2])&&ve.isNumber(arguments[3])?ve.isNumber(arguments[4])?new $d(e,t,arguments[2],arguments[3],arguments[4]):new $d(e,t,arguments[2],arguments[3]):ve.isNumber(arguments[4])?new Kc(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Kc(e,t,{min:arguments[2],max:arguments[3]}):ve.isString(n)?new MC(e,t):ve.isFunction(n)?new xv(e,t,""):ve.isBoolean(n)?new vv(e,t):null};function LC(r){setTimeout(r,1e3/60)}var IC=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||LC,DC=(function(){function r(){Ai(this,r),this.backgroundElement=document.createElement("div"),ve.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),ae.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),ve.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;ae.bind(this.backgroundElement,"click",function(){e.hide()})}return Ci(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),ve.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",ae.unbind(t.domElement,"webkitTransitionEnd",i),ae.unbind(t.domElement,"transitionend",i),ae.unbind(t.domElement,"oTransitionEnd",i)};ae.bind(this.domElement,"webkitTransitionEnd",n),ae.bind(this.domElement,"transitionend",n),ae.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-ae.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-ae.getHeight(this.domElement)/2+"px"}}]),r})(),OC=vC(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);CC.inject(OC);var hg="dg",dg=72,fg=20,al="Default",wa=(function(){try{return!!window.localStorage}catch{return!1}})(),Ga=void 0,pg=!0,co=void 0,mh=!1,bv=[],Rt=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),ae.addClass(this.domElement,hg),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=ve.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=ve.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),ve.isUndefined(n.load)?n.load={preset:al}:n.preset&&(n.load.preset=n.preset),ve.isUndefined(n.parent)&&n.hideable&&bv.push(this),n.resizable=ve.isUndefined(n.parent)&&n.resizable,n.autoPlace&&ve.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=wa&&localStorage.getItem(uo(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(d){t.parent?t.getRoot().preset=d:n.load.preset=d,kC(this),t.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,Qd(t,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?ae.addClass(t.__ul,r.CLASS_CLOSED):ae.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(d){wa&&(i=d,d?ae.bind(window,"unload",s):ae.unbind(window,"unload",s),localStorage.setItem(uo(t,"isLocal"),d))}}}),ve.isUndefined(n.parent)){if(this.closed=n.closed||!1,ae.addClass(this.domElement,r.CLASS_MAIN),ae.makeSelectable(this.domElement,!1),wa&&i){t.useLocalStorage=!0;var a=localStorage.getItem(uo(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,ae.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(ae.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(ae.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),ae.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);ae.addClass(l,"controller-name"),o=rp(t,l);var c=function(d){return d.preventDefault(),t.closed=!t.closed,!1};ae.addClass(this.__ul,r.CLASS_CLOSED),ae.addClass(o,"title"),ae.bind(o,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(ve.isUndefined(n.parent)&&(pg&&(co=document.createElement("div"),ae.addClass(co,hg),ae.addClass(co,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(co),pg=!1),co.appendChild(this.domElement),ae.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||Qd(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},ae.bind(window,"resize",this.__resizeHandler),ae.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),ae.bind(this.__ul,"transitionend",this.__resizeHandler),ae.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&UC(this),s=function(){wa&&localStorage.getItem(uo(t,"isLocal"))==="true"&&localStorage.setItem(uo(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var h=t.getRoot();h.width+=1,ve.defer(function(){h.width-=1})}n.parent||u()};Rt.toggleHide=function(){mh=!mh,ve.each(bv,function(r){r.domElement.style.display=mh?"none":""})};Rt.CLASS_AUTO_PLACE="a";Rt.CLASS_AUTO_PLACE_CONTAINER="ac";Rt.CLASS_MAIN="main";Rt.CLASS_CONTROLLER_ROW="cr";Rt.CLASS_TOO_TALL="taller-than-window";Rt.CLASS_CLOSED="closed";Rt.CLASS_CLOSE_BUTTON="close-button";Rt.CLASS_CLOSE_TOP="close-top";Rt.CLASS_CLOSE_BOTTOM="close-bottom";Rt.CLASS_DRAG="drag";Rt.DEFAULT_WIDTH=245;Rt.TEXT_CLOSED="Close Controls";Rt.TEXT_OPEN="Open Controls";Rt._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===dg||r.keyCode===dg)&&Rt.toggleHide()};ae.bind(window,"keydown",Rt._keydownHandler,!1);ve.extend(Rt.prototype,{add:function(e,t){return Wa(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Wa(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;ve.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&co.removeChild(this.domElement);var e=this;ve.each(this.__folders,function(t){e.removeFolder(t)}),ae.unbind(window,"keydown",Rt._keydownHandler,!1),mg(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new Rt(t);this.__folders[e]=n;var i=rp(this,n.domElement);return ae.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],mg(e);var t=this;ve.each(e.__folders,function(n){e.removeFolder(n)}),ve.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=ae.getOffset(e.__ul).top,n=0;ve.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=ae.getHeight(i))}),window.innerHeight-t-fg<n?(ae.addClass(e.domElement,Rt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-fg+"px"):(ae.removeClass(e.domElement,Rt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&ve.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:ve.debounce(function(){this.onResize()},50),remember:function(){if(ve.isUndefined(Ga)&&(Ga=new DC,Ga.domElement.innerHTML=RC),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;ve.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&NC(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Qd(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=ac(this)),e.folders={},ve.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=ac(this),jd(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[al]=ac(this,!0)),this.load.remembered[e]=ac(this),this.preset=e,Jd(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){ve.each(this.__controllers,function(t){this.getRoot().load.remembered?Sv(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),ve.each(this.__folders,function(t){t.revert(t)}),e||jd(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&wv(this.__listening)},updateDisplay:function(){ve.each(this.__controllers,function(e){e.updateDisplay()}),ve.each(this.__folders,function(e){e.updateDisplay()})}});function rp(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function mg(r){ae.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&ae.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function jd(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function FC(r,e,t){if(t.__li=e,t.__gui=r,ve.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Wa(r,t.object,t.property,{before:a,factoryArgs:[ve.toArray(arguments)]})}if(ve.isArray(o)||ve.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),Wa(r,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof $d){var n=new Kc(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});ve.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=n[s];t[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),ae.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Kc){var i=function(o){if(ve.isNumber(t.__min)&&ve.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Wa(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=ve.compose(i,t.min),t.max=ve.compose(i,t.max)}else t instanceof vv?(ae.bind(e,"click",function(){ae.fakeEvent(t.__checkbox,"click")}),ae.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof xv?(ae.bind(e,"click",function(){ae.fakeEvent(t.__button,"click")}),ae.bind(e,"mouseover",function(){ae.addClass(t.__button,"hover")}),ae.bind(e,"mouseout",function(){ae.removeClass(t.__button,"hover")})):t instanceof Yd&&(ae.addClass(e,"color"),t.updateDisplay=ve.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=ve.compose(function(s){return r.getRoot().__preset_select&&t.isModified()&&jd(r.getRoot(),!0),s},t.setValue)}function Sv(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[r.preset])o=s[r.preset];else if(s[al])o=s[al];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}function Wa(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new Yd(e,t);else{var s=[e,t].concat(n.factoryArgs);i=PC.apply(r,s)}n.before instanceof ks&&(n.before=n.before.__li),Sv(r,i),ae.addClass(i.domElement,"c");var o=document.createElement("span");ae.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=rp(r,a,n.before);return ae.addClass(l,Rt.CLASS_CONTROLLER_ROW),i instanceof Yd?ae.addClass(l,"color"):ae.addClass(l,xC(i.getValue())),FC(r,l,i),r.__controllers.push(i),i}function uo(r,e){return document.location.href+"."+e}function Jd(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function gg(r,e){e.style.display=r.useLocalStorage?"block":"none"}function NC(r){var e=r.__save_row=document.createElement("li");ae.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),ae.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",ae.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",ae.addClass(n,"button"),ae.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",ae.addClass(i,"button"),ae.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",ae.addClass(s,"button"),ae.addClass(s,"revert");var o=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?ve.each(r.load.remembered,function(h,d){Jd(r,d,d===r.preset)}):Jd(r,al,!1),ae.bind(o,"change",function(){for(var h=0;h<r.__preset_select.length;h++)r.__preset_select[h].innerHTML=r.__preset_select[h].value;r.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(s),wa){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(uo(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),gg(r,a),ae.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,gg(r,a)})}var u=document.getElementById("dg-new-constructor");ae.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Ga.hide()}),ae.bind(t,"click",function(){u.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),Ga.show(),u.focus(),u.select()}),ae.bind(n,"click",function(){r.save()}),ae.bind(i,"click",function(){var h=prompt("Enter a new preset name.");h&&r.saveAs(h)}),ae.bind(s,"click",function(){r.revert()})}function UC(r){var e=void 0;r.__resize_handle=document.createElement("div"),ve.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),r.width+=e-s.clientX,r.onResize(),e=s.clientX,!1}function n(){ae.removeClass(r.__closeButton,Rt.CLASS_DRAG),ae.unbind(window,"mousemove",t),ae.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),e=s.clientX,ae.addClass(r.__closeButton,Rt.CLASS_DRAG),ae.bind(window,"mousemove",t),ae.bind(window,"mouseup",n),!1}ae.bind(r.__resize_handle,"mousedown",i),ae.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function Qd(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function ac(r,e){var t={};return ve.each(r.__rememberedObjects,function(n,i){var s={},o=r.__rememberedObjectIndecesToControllers[i];ve.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),t[i]=s}),t}function kC(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function wv(r){r.length!==0&&IC.call(window,function(){wv(r)}),ve.each(r,function(e){e.updateDisplay()})}var BC=Rt;function zC(){console.log("Initializing 3D extruded logo");let r=null;const e=document.querySelector("#loading-splash .logo-wrapper");if(!e){console.error("Logo wrapper not found");return}const t=186,n=71;let i=null;function s(){console.log("Setting up fallback SVG animation");const _e=document.createElement("img");_e.src="src/assets/logo/NewLogo.svg",_e.alt="Logo",_e.width=t,_e.height=n,_e.classList.add("fallback-animated"),e.appendChild(_e);const we=document.createElement("style");return we.textContent=`
      .fallback-animated {
        animation: pulse 2s infinite ease-in-out;
      }
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
    `,document.head.appendChild(we),i=function(){e.contains(_e)&&e.removeChild(_e),document.head.contains(we)&&document.head.removeChild(we)},{dispose:()=>{i&&i()}}}let o;try{o=new j0({alpha:!0,antialias:!0,physicallyCorrectLights:!0}),o.setClearColor(0,0),console.log("WebGL renderer created successfully")}catch(_e){return console.error("Failed to create WebGL renderer:",_e),s()}const a=new O0,l=new lw().load(["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApD5fRAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=="]);a.environment=l,a.background=null;const c=new Zn(40,t/n,.1,1e3);c.position.z=200;const u=new ew({color:16777215,metalness:.8,roughness:.365,transmission:.98,thickness:4,transparent:!0,opacity:.85,side:Oi,clearcoat:1,clearcoatRoughness:1,envMapIntensity:1.2,ior:2.25,premultipliedAlpha:!0}),h=new D0(256,{encoding:void 0,generateMipmaps:!0,minFilter:Ir});h.texture.type=qo;const d=new I0(1,1e3,h);a.add(d),u.envMap=h.texture;const f=new ba,_={depth:12,bevelEnabled:!0,bevelThickness:2,bevelSize:1.5,bevelSegments:5};a.add(f);const p={camera:{positionZ:294,fov:20},logo:{scale:.8,rotationX:.3,rotationY:0,rotationZ:0,positionX:0,positionY:0,positionZ:0,extrudeDepth:16,bobbing:!0,bobbingSpeed:.5,bobbingAmount:9.3,rotationSpeed:0,oscillateX:!0,oscillateXSpeed:.85,oscillateXMin:-.23,oscillateXMax:.27,oscillateY:!0,oscillateYSpeed:.9,oscillateYMin:-.15,oscillateYMax:.45},colors:{material:"#ffffff",ambient:"#ffffff",directional:"#93d8ff",point:"#ffffff",back:"#aaaaff"},lighting:{ambientIntensity:.3,directionalIntensity:.8,pointIntensity:.7,backIntensity:.5},glass:{metalness:.8,roughness:.365,transmission:.98,thickness:4,opacity:.85,clearcoat:1,clearcoatRoughness:1,ior:2.25,envMapIntensity:1.2},resetCamera:function(){this.camera.positionZ=294,this.camera.fov=20,E()},resetLogo:function(){this.logo.scale=.8,this.logo.rotationX=.3,this.logo.rotationY=0,this.logo.rotationZ=0,this.logo.positionX=-22,this.logo.positionY=0,this.logo.positionZ=0,this.logo.rotationSpeed=0,this.logo.oscillateX=!0,this.logo.oscillateXSpeed=.5,this.logo.oscillateXMin=-.23,this.logo.oscillateXMax=.3,this.logo.oscillateY=!0,this.logo.oscillateYSpeed=.3,this.logo.oscillateYMin=-.1,this.logo.oscillateYMax=.15,M()},resetGlass:function(){this.glass.metalness=.8,this.glass.roughness=.365,this.glass.transmission=.98,this.glass.thickness=4,this.glass.opacity=.85,this.glass.clearcoat=1,this.glass.clearcoatRoughness=1,this.glass.ior=2.25,this.glass.envMapIntensity=1.2,C(),u.needsUpdate=!0,console.log("Glass material reset to:",this.glass)}};o.setSize(t,n),o.setPixelRatio(window.devicePixelRatio);const g=o.domElement;g.classList.add("extruded-logo"),g.style.width="100%",e.appendChild(g);const m=new dw(16777215,.3);a.add(m);const x=new Em(9689343,.9);x.position.set(1,1,2).normalize(),a.add(x);const y=new uw(16777215,.8,500);y.position.set(50,50,100),a.add(y);const v=new Em(11184895,.5);v.position.set(-1,-1,-1).normalize(),a.add(v);function E(){c.position.z=p.camera.positionZ,c.fov=p.camera.fov,c.updateProjectionMatrix()}function M(){f&&(f.scale.set(p.logo.scale,p.logo.scale,p.logo.scale),f.rotation.x=p.logo.rotationX,f.rotation.z=p.logo.rotationZ,f.position.x=p.logo.positionX,f.position.y=p.logo.positionY,f.position.z=p.logo.positionZ)}function w(){m.color.set(p.colors.ambient),m.intensity=p.lighting.ambientIntensity,x.color.set(p.colors.directional),x.intensity=p.lighting.directionalIntensity,y.color.set(p.colors.point),y.intensity=p.lighting.pointIntensity,v.color.set(p.colors.back),v.intensity=p.lighting.backIntensity,u.color.set(p.colors.material)}function C(){u.metalness=p.glass.metalness,u.roughness=p.glass.roughness,u.transmission=p.glass.transmission,u.thickness=p.glass.thickness,u.opacity=p.glass.opacity,u.clearcoat=p.glass.clearcoat,u.clearcoatRoughness=p.glass.clearcoatRoughness,u.ior=p.glass.ior,u.envMapIntensity=p.glass.envMapIntensity}function S(){console.log("Creating logo from direct path data");const _e="M32.5 0L0 70.5H44V57.5H23L42.5 12.5L67.5 70.5H85L108.5 19.5L132 70.5H152.5L186 0H141.5V12.5H162L142.5 56.5L117.5 0H100L76.5 54.5L52.5 0H32.5Z";try{const F=new Qc().parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${_e}"/></svg>`);if(console.log("SVG Parser result:",F),F&&F.paths&&F.paths.length>0){console.log(`Found ${F.paths.length} paths in SVG`);const O=[];_.depth=p.logo.extrudeDepth,C(),F.paths.forEach((j,he)=>{const $=j.toShapes(!0);console.log(`Path ${he} generated ${$.length} shapes`),$.forEach((pe,ee)=>{const J=new Wc(pe,_);O.push(J);const T=new mi(J,u);T.scale.set(.9,-.9,.9),f.add(T)})});const L=new Ds;f.traverse(j=>{j.isMesh&&(j.geometry.computeBoundingBox(),L.expandByObject(j))});const A=new K;L.getCenter(A),f.children.forEach(j=>{j.isMesh&&(j.position.x-=A.x,j.position.y-=A.y)}),M(),C(),N(),B()}else return console.error("Parsed SVG has no paths"),s()}catch(we){return console.error("Error creating shape from path data:",we),s()}}function b(_e,we=0){if(we>=_e.length)return console.error("Failed to load SVG from all paths, falling back to direct path data"),S();const F=_e[we];console.log(`Trying to load SVG from: ${F}`),fetch(F).then(O=>{if(!O.ok)throw new Error(`Network response was not ok: ${O.statusText}`);return O.text()}).then(O=>{console.log("SVG content retrieved:",O.substring(0,200)+"...");const A=new Qc().parse(O);console.log("SVG parsed result:",A),A.paths&&A.paths.length>0?(console.log(`Loaded ${A.paths.length} paths successfully`),D(A)):(console.error("SVG was loaded but no paths were found, trying direct path data approach"),S())}).catch(O=>{console.warn(`Error loading/parsing SVG from ${F}:`,O),b(_e,we+1)})}function D(_e){if(!_e.paths||_e.paths.length===0)return console.error("No paths found in SVG data, trying direct path data approach"),S();console.log(`Processing SVG with ${_e.paths.length} paths`);const we=.9;if(_.depth=p.logo.extrudeDepth,C(),_e.paths.forEach((L,A)=>{console.log(`Processing path ${A+1}/${_e.paths.length}`);const j=L.toShapes(!0);if(!j||j.length===0){console.warn(`No shapes in path ${A+1}`);return}console.log(`Path ${A+1} has ${j.length} shapes`),j.forEach((he,$)=>{const pe=new Wc(he,_),ee=new mi(pe,u);ee.scale.set(we,-we,we),f.add(ee),console.log(`Added shape ${$+1} for path ${A+1}`)})}),f.children.length===0)return console.error("No meshes were created from the SVG, trying direct path data approach"),S();console.log(`Created ${f.children.length} total meshes for the logo`);const F=new Ds;f.traverse(L=>{L.isMesh&&(L.geometry.computeBoundingBox(),F.expandByObject(L))});const O=new K;F.getCenter(O),f.children.forEach(L=>{L.isMesh&&(L.position.x-=O.x,L.position.y-=O.y)}),M(),console.log("Applying initial glass material settings:",p.glass),C(),u.envMapIntensity=p.glass.envMapIntensity,u.needsUpdate=!0,N(),B()}function N(){try{r=new BC({autoPlace:!0});const _e=document.createElement("style");_e.textContent=`
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
      `,document.head.appendChild(_e);const we=r.addFolder("Camera");we.add(p.camera,"positionZ",50,500).onChange(E),we.add(p.camera,"fov",20,80).onChange(E),we.add(p,"resetCamera"),we.open();const F=r.addFolder("Logo");F.add(p.logo,"scale",.5,2).onChange(M),F.add(p.logo,"rotationX",-1,1).onChange(M),F.add(p.logo,"rotationZ",-1,1).onChange(M),F.add(p.logo,"positionX",-50,50).onChange(M),F.add(p.logo,"positionY",-50,50).onChange(M),F.add(p.logo,"positionZ",-50,50).onChange(M),F.add(p.logo,"extrudeDepth",1,30).onChange(he=>{console.log("To apply extrude depth change, please refresh the page")}),F.add(p.logo,"rotationSpeed",0,.02),F.add(p.logo,"bobbing"),F.add(p.logo,"bobbingSpeed",.1,5),F.add(p.logo,"bobbingAmount",0,10);const O=F.addFolder("X Rotation Oscillation");O.add(p.logo,"oscillateX"),O.add(p.logo,"oscillateXSpeed",.1,2),O.add(p.logo,"oscillateXMin",-1,0),O.add(p.logo,"oscillateXMax",0,1),O.open();const L=F.addFolder("Y Rotation Oscillation");L.add(p.logo,"oscillateY"),L.add(p.logo,"oscillateYSpeed",.1,2),L.add(p.logo,"oscillateYMin",-1,0),L.add(p.logo,"oscillateYMax",0,1),L.open(),F.add(p,"resetLogo"),F.open();const A=r.addFolder("Glass Material");A.add(p.glass,"metalness",0,1).onChange(C),A.add(p.glass,"roughness",0,1).onChange(C),A.add(p.glass,"transmission",0,1).onChange(C),A.add(p.glass,"thickness",0,5).onChange(C),A.add(p.glass,"opacity",0,1).onChange(C),A.add(p.glass,"clearcoat",0,1).onChange(C),A.add(p.glass,"clearcoatRoughness",0,1).onChange(C),A.add(p.glass,"ior",1,2.333).step(.01).onChange(C),A.add(p.glass,"envMapIntensity",0,3).onChange(C),A.add(p,"resetGlass"),A.open();const j=r.addFolder("Colors & Lighting");j.addColor(p.colors,"material").onChange(w),j.addColor(p.colors,"ambient").onChange(w),j.addColor(p.colors,"directional").onChange(w),j.addColor(p.colors,"point").onChange(w),j.addColor(p.colors,"back").onChange(w),j.add(p.lighting,"ambientIntensity",0,1).onChange(w),j.add(p.lighting,"directionalIntensity",0,1).onChange(w),j.add(p.lighting,"pointIntensity",0,1).onChange(w),j.add(p.lighting,"backIntensity",0,1).onChange(w),p.exportSettings=function(){const he=JSON.stringify(p,null,2);console.log("Current settings:",he);const $=new Blob([he],{type:"application/json"}),pe=URL.createObjectURL($),ee=document.createElement("a");ee.href=pe,ee.download="logo3d-settings.json",ee.click(),URL.revokeObjectURL(pe)},r.add(p,"exportSettings").name("Export Settings")}catch(_e){console.error("Failed to initialize GUI controls:",_e)}}const G=["/src/assets/logo/NewLogo.svg","src/assets/logo/NewLogo.svg","../assets/logo/NewLogo.svg","/assets/logo/NewLogo.svg","assets/logo/NewLogo.svg"];u.envMapIntensity=p.glass.envMapIntensity,setTimeout(()=>{b(G)},100);let V=null;function Y(){if(!f||f.children.length===0)return;V=Date.now()*.001;const _e=(p.logo.oscillateYMin+p.logo.oscillateYMax)/2,we=(p.logo.oscillateXMin+p.logo.oscillateXMax)/2;f.rotation.y=_e,f.rotation.x=we,f.position.y=p.logo.positionY,y.position.x=0,y.position.z=80}let q=null,X=!1;function B(){if(!X){if(q=requestAnimationFrame(B),f&&f.children.length>0){V===null&&Y();const _e=10,O=(Date.now()*.001-V)%_e/_e;if(p.logo.oscillateY){const L=(Math.sin(O*Math.PI*2*p.logo.oscillateYSpeed)+1)/2,A=p.logo.oscillateYMax-p.logo.oscillateYMin;f.rotation.y=p.logo.oscillateYMin+L*A}else f.rotation.y+=p.logo.rotationSpeed;if(p.logo.oscillateX){const L=(Math.sin(O*Math.PI*2*p.logo.oscillateXSpeed)+1)/2,A=p.logo.oscillateXMax-p.logo.oscillateXMin;f.rotation.x=p.logo.oscillateXMin+L*A}else f.rotation.x=p.logo.rotationX;if(p.logo.bobbing){const L=Math.sin(O*Math.PI*2*p.logo.bobbingSpeed);f.position.y=L*p.logo.bobbingAmount+p.logo.positionY}y.position.x=Math.sin(O*Math.PI*2)*80,y.position.z=Math.cos(O*Math.PI*2)*80,Math.random()>.9&&(f.visible=!1,d.update(o,a),f.visible=!0),B.firstFrame&&(u.envMapIntensity=p.glass.envMapIntensity,u.needsUpdate=!0,B.firstFrame=!1,console.log("First animation frame - applied envMapIntensity:",p.glass.envMapIntensity),se())}o.render(a,c)}}function se(){console.log("3D logo ready for display"),g&&g.classList.add("logo-animation-ready");const _e=new CustomEvent("logo3d-ready");document.dispatchEvent(_e)}B.firstFrame=!0;const U=()=>{const _e=e.clientWidth,we=e.clientHeight||_e*(n/t);c.aspect=_e/we,c.updateProjectionMatrix(),o.setSize(_e,we)};U();const ge=document.createElement("style");return ge.textContent=`
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
  `,document.head.appendChild(ge),window.addEventListener("resize",U),{dispose:()=>{console.log("Disposing 3D logo"),X=!0,q!==null&&(cancelAnimationFrame(q),q=null),e&&g&&e.contains(g)&&e.removeChild(g),i&&i(),document.head.contains(ge)&&document.head.removeChild(ge),r&&r.destroy(),f&&f.traverse(_e=>{_e.geometry&&_e.geometry.dispose(),_e.material&&(Array.isArray(_e.material)?_e.material.forEach(we=>we.dispose()):_e.material.dispose())}),window.removeEventListener("resize",U),o&&o.dispose()}}}class HC{constructor(){this.cache=new Map,this.priorities=new Map,this.stats={images:0,videos:0,cached:0}}discoverAssets(e){const t=typeof e=="string"?this._parseHTML(e):e,n={critical:[],high:[],low:[]};return t.querySelectorAll("img").forEach((o,a)=>{const l=o.getAttribute("src")||o.dataset.src;if(!l)return;const c=this._determinePriority(o,a);n[c].push({type:"image",url:l,element:o})}),t.querySelectorAll("video source, video[src]").forEach((o,a)=>{var u;const l=o.getAttribute("src")||((u=o.querySelector("source"))==null?void 0:u.getAttribute("src"));if(!l)return;const c=this._determinePriority(o,a);n[c].push({type:"video",url:l,element:o})}),n}_determinePriority(e,t){return t===0&&e.closest(".large-photo, .large-video")?"critical":e.getAttribute("loading")==="lazy"||t>5?"low":"high"}async preload(e){const t=e.critical.map(s=>this._loadAsset(s)),n=e.high.map(s=>this._loadAsset(s));await Promise.all(t),Promise.all(n);const i=()=>e.low.forEach(s=>this._loadAsset(s));return typeof requestIdleCallback=="function"?requestIdleCallback(i,{timeout:3e3}):setTimeout(i,2e3),{critical:t.length,high:n.length}}_loadAsset(e){if(this.cache.has(e.url))return this.cache.get(e.url);const t=e.type==="image"?this._loadImage(e.url):this._loadVideo(e.url);return this.cache.set(e.url,t),t}_loadImage(e){return new Promise((t,n)=>{const i=new Image;i.onload=()=>{this.stats.images++,t(e)},i.onerror=()=>{console.warn(`Failed to preload image: ${e}`),t(e)},i.src=e})}_loadVideo(e){return new Promise(t=>{const n=document.createElement("video");n.preload="metadata",n.onloadedmetadata=()=>{this.stats.videos++,t(e)},n.onerror=()=>{console.warn(`Failed to preload video: ${e}`),t(e)},n.src=e,n.load()})}_parseHTML(e){const t=document.createElement("div");return t.innerHTML=e,t}}const Wo=new HC;async function VC(){console.log("Starting page preloading...");const r=["/index.html","/works.html","/about.html","/contact.html"],e=window.location.pathname,t=window.location.origin,n=r.filter(o=>{const a=o.replace("/index.html","/").replace(".html",""),l=e.replace("/index.html","/").replace(".html","");return a!==l}).map(async o=>{try{const a=new URL(o,t).href;console.log(`Preloading: ${a}`);const l=await fetch(a);if(l.ok){const c=await l.text(),u=document.createElement("div");u.innerHTML=c;const h=u.querySelector('[data-barba="container"]');if(h&&window.barba&&window.barba.cache){const d=Wo.discoverAssets(h),f=Wo.preload(d);window.barba.cache.set(a,{html:c,container:h,mediaReady:f});const _=a.replace(".html","");_!==a&&window.barba.cache.set(_,{html:c,container:h,mediaReady:f}),console.log(`Successfully cached HTML and started media preload: ${o}`),f.then(()=>{console.log(`Media preloaded for: ${o}`)}).catch(p=>{console.warn(`Media preload warning for ${o}:`,p)})}return{path:o,status:"success"}}else if(l.status===404&&o==="/index.html"){console.log("Trying to load homepage at root path");const c=await fetch("/");if(c.ok){const u=await c.text();return window.barba&&window.barba.cache&&window.barba.cache.set(new URL("/",t).href,{html:u,container}),{path:"/",status:"success"}}}else return console.warn(`Failed to preload ${o}: ${l.status}`),{path:o,status:"failed"}}catch(a){return console.warn(`Error preloading ${o}:`,a),{path:o,status:"error",error:a}}}),i=await Promise.all(n),s=i.filter(o=>o.status==="success").length;return console.log(`Preloading complete: ${s}/${i.length} pages cached`),i}function GC(){window.animationController?(window.animationController.initialPageLoad=!0,window.animationController.transitionComplete=!0):(console.log("Initializing animation controller for loading screen"),window.animationController={transitionComplete:!0,transitionCompletedAt:0,pendingAnimations:[],initialPageLoad:!0,canRunAnimations(){return!0},queueAnimation(t,n="unnamed"){console.log(`Loading screen: running animation ${n} immediately`),t()},processPendingAnimations(){}}),gh(),WC();let r=null;var e=setInterval(function(){const t=document.querySelector(".load-bar-inner");if(t){clearInterval(e);const s=document.querySelector("#loading-splash");t.classList.add("loading"),r=zC();const o=VC(),a=document.querySelector('[data-barba="container"]');if(a){console.log("Starting media preload for current page");const c=Wo.discoverAssets(a);Wo.preload(c)}document.addEventListener("logo3d-ready",function c(){console.log("Logo3D ready event received"),document.removeEventListener("logo3d-ready",c);const u=document.querySelector("#loading-splash .logo-wrapper");u&&u.classList.add("logo-ready")});const l=document.createElement("style");l.textContent=`
        #loading-splash .logo-wrapper {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        #loading-splash .logo-wrapper.logo-ready {
          opacity: 1;
        }
      `,document.head.appendChild(l);var n=setInterval(function(){t.classList.contains("loading")&&(clearInterval(n),qd(),t.addEventListener("animationend",()=>{s.classList.add("loaded"),document.querySelectorAll("#loading-splash .char").forEach(u=>u.classList.add("reveal-char")),window.scrollTo(0,0),o.then(()=>{console.log("Page preloading finished, continuing with initialization"),setTimeout(async function(){document.body.classList.add("loaded");const u=document.querySelector("[data-barba='container']"),h=document.querySelector("main .page");if(u){const g=u.querySelector(".self-image");g&&(u.insertAdjacentElement("afterend",g),De.set(g,{opacity:0}),De.to(g,{opacity:1,duration:2.5,delay:.8,ease:"power2.inOut"}))}const d=h?h.children:[];await gv(),gh();const f=De.timeline();f.set(u,{visibility:"visible",opacity:1,immediateRender:!0}),f.set(h,{opacity:0,immediateRender:!0}),d.length>0&&f.set(d,{opacity:0,immediateRender:!0}),f.call(()=>{gC()}),console.log("Loading screen: splitting text"),qd(),h&&De.set(h,{opacity:0,pointerEvents:"none"});const _="h1, h2, [data-splitting], .splitting-rows, .titles-wrapper, .fade-reveal";d.length>0&&Array.from(d).forEach(g=>{g.matches(_)?De.set(g,{opacity:0,pointerEvents:"auto",visibility:"visible"}):De.set(g,{opacity:0,pointerEvents:"auto",visibility:"visible"})}),f.call(()=>{window.animationController&&(window.animationController.initialPageLoad=!0,window.animationController.transitionComplete=!0),window.barbaTransitionActive!==void 0&&(window.barbaTransitionActive=!1),h&&De.set(h,{opacity:1,pointerEvents:"auto"}),Yc()}),f.call(()=>{window.animationController&&(window.animationController.initialPageLoad=!0),jc()},null,null,"+=0.2"),d.length>0&&f.call(()=>{const g=Array.from(d).filter(m=>!m.matches("h1, h2, [data-splitting], .splitting-rows, .titles-wrapper, .fade-reveal"));g.length>0&&De.to(g,{opacity:1,duration:.35,ease:"power2.out",stagger:.06})},null,null,"+=0.1"),f.call(()=>{mv()},null,null,"+=0.1"),document.querySelector("main .page#index")&&f.call(()=>{window.titleAnimationInterval&&(clearInterval(window.titleAnimationInterval),window.titleAnimationInterval=null),window.animationController&&(window.animationController.initialPageLoad=!0),tp("loading-screen.js")},null,null,"+=0.3"),f.call(()=>{bf(),Q0(),Z0(),au();const g=()=>{window.ScrollTrigger&&window.ScrollTrigger.refresh(),window.lenis&&window.lenis.resize()};typeof requestIdleCallback=="function"?requestIdleCallback(g,{timeout:1e3}):setTimeout(g,500)},null,null,"+=0.2"),setTimeout(function(){document.body.classList.remove("loaded")},400)},400)})}))},50),i=setInterval(function(){s.classList.contains("loaded")&&(clearInterval(i),s.addEventListener("animationend",()=>{setTimeout(function(){r&&typeof r.dispose=="function"&&(r.dispose(),r=null),s.remove(),document.querySelectorAll("#loading-splash .char").forEach(h=>h.classList.remove("reveal-char")),gh(),document.querySelectorAll(".splitting-rows:not(.reveal)").forEach(h=>{console.log("Final fix for missed splitting-rows element"),h.classList.add("reveal")}),window.animationController&&(console.log("Loading complete - setting initialPageLoad to false for future transitions"),window.animationController.initialPageLoad=!1),Jf();const u=()=>{window.ScrollTrigger&&window.ScrollTrigger.refresh()};typeof requestIdleCallback=="function"?requestIdleCallback(u,{timeout:1500}):setTimeout(u,600)},500)}))},50)}},100)}function gh(){const r=document.querySelector("[data-barba='container']");r&&De.set(r,{visibility:"visible",opacity:1})}function WC(){var n;const r=document.querySelector("[data-barba='container']"),e=r?r.getAttribute("data-barba-namespace"):null;console.log("Loading-screen: initializing background for namespace:",e);const t=(n=ps.getRenderer())==null?void 0:n.getCanvas();t&&(t.style.opacity="1.0")}let _g=window.innerWidth;function qC(){let r;window.addEventListener("resize",function(){clearTimeout(r),r=setTimeout(XC,400)})}function XC(){var e;const r=window.innerWidth;Math.abs(r-_g)<10||(document.body.classList.add("resizing"),_g=window.innerWidth,F_(),O_(),Sf(),Jf(),window.matchMedia("(pointer: coarse)").matches&&window.matchMedia("(hover: none)").matches&&((e=document.querySelector(".cursor-element"))==null||e.classList.add("hidden"),document.documentElement.classList.add("touch-device")),setTimeout(function(){au(),document.body.classList.remove("resizing")},1e3))}function $C(){if(window.matchMedia("(pointer: coarse)").matches||document.querySelector(".custom-scrollbar"))return;const r=document.createElement("div");r.className="custom-scrollbar";const e=document.createElement("div");e.className="custom-scrollbar-thumb",r.appendChild(e),document.body.appendChild(r);let t=!1,n=!1,i=!1,s=null,o=null,a=0,l=0,c=document.documentElement.scrollHeight,u=window.innerHeight;const h=()=>window.lenis?window.lenis.scroll:window.scrollY,d=()=>Math.min(Math.max(u/c*u,40),256),f=()=>{const v=c>u;if(r.classList.toggle("custom-scrollbar--scrollable",v),!v)return;const E=d();e.style.height=`${E}px`;const M=c-u,w=u-E,C=M>0?Math.min(h()/M,1):0;e.style.transform=`translateY(${C*w}px)`},_=()=>{t||n||i?r.classList.add("custom-scrollbar--visible"):r.classList.remove("custom-scrollbar--visible")},p=()=>{o&&(cancelAnimationFrame(o),o=null)},g=()=>{p();const v=()=>{f(),t||i?o=requestAnimationFrame(v):o=null};o=requestAnimationFrame(v)},m=()=>{t=!0,_(),g(),clearTimeout(s),s=setTimeout(()=>{t=!1,_(),p(),f()},800)};window.addEventListener("wheel",m,{passive:!0}),window.addEventListener("scroll",m,{passive:!0});const x=48;window.addEventListener("mousemove",v=>{if(i){const M=c-u,w=u-d(),C=v.clientY-a,S=Math.max(0,Math.min(l+C/w*M,M));window.lenis?window.lenis.scrollTo(S,{immediate:!0}):window.scrollTo({top:S});return}const E=window.innerWidth-v.clientX<=x;E!==n&&(n=E,_())},{passive:!0}),e.addEventListener("mousedown",v=>{i=!0,a=v.clientY,l=h(),document.body.style.userSelect="none",r.classList.add("custom-scrollbar--visible"),g(),v.preventDefault()}),window.addEventListener("mouseup",()=>{i&&(i=!1,document.body.style.userSelect="",clearTimeout(s),s=setTimeout(()=>{t=!1,_(),p()},800))});const y=()=>{u=window.innerHeight,c=document.documentElement.scrollHeight,f()};window.addEventListener("resize",y,{passive:!0}),new ResizeObserver(y).observe(document.body),setTimeout(f,100)}function YC(){jC(),ps.init("viewport"),JC(),QC(),ZC(),GC(),Nc(),qC()}function jC(){const r=document.querySelector("[data-barba='container']");r&&(r.style.opacity="1",r.style.visibility="visible");const e=document.querySelector("main .page");if(e){e.style.opacity="1";const t=e.children;for(let n=0;n<t.length;n++)t[n].style.opacity="1"}}function JC(){Ef(),document.getElementById("stage").style.display="block",document.getElementById("stage").style.background="none"}function QC(){O_(),F_(),Sf(),au(),$C()}function ZC(){var n,i,s,o;const r=document.querySelector("main > div");if(!r)return;const e=r.dataset.barbaNamespace,t=r.querySelector(".page");if(t){De.set(t,{opacity:0,y:30});const a=Array.from(t.children).filter(c=>!c.classList.contains("self-image"));a.length>0&&De.set(a,{opacity:0,y:30});const l=De.timeline({delay:.2});l.to(t,{opacity:1,y:0,duration:.4,ease:"power2.out"}),a.length>0&&l.to(a,{opacity:1,y:0,duration:.5,stagger:.08,ease:"power2.out"},"-=0.2")}e==="about"?(document.documentElement.classList.add("about"),(n=document.querySelector("nav a.about"))==null||n.classList.add("active")):e==="works"?(i=document.querySelector("nav a.works"))==null||i.classList.add("active"):e==="labs"?(s=document.querySelector("nav a.labs"))==null||s.classList.add("active"):e==="contact"&&((o=document.querySelector("nav a.contact"))==null||o.classList.add("active"))}function KC(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,typeof(i=(function(s,o){if(typeof s!="object"||s===null)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var l=a.call(s,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)})(n.key))=="symbol"?i:String(i),n)}var i}function sp(r,e,t){return e&&KC(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Bi(){return Bi=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Bi.apply(this,arguments)}function du(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,ll(r,e)}function Zd(r){return Zd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Zd(r)}function ll(r,e){return ll=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},ll(r,e)}function eR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Kd(r,e,t){return Kd=eR()?Reflect.construct.bind():function(n,i,s){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return s&&ll(a,s.prototype),a},Kd.apply(null,arguments)}function ef(r){var e=typeof Map=="function"?new Map:void 0;return ef=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return Kd(t,arguments,Zd(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ll(n,t)},ef(r)}function tR(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}var Mr,nR=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(Mr||(Mr={}));var vg=Mr.off,_s=(function(){function r(t){this.t=void 0,this.t=t}r.getLevel=function(){return vg},r.setLevel=function(t){return vg=Mr[t]};var e=r.prototype;return e.error=function(){this.i(console.error,Mr.error,[].slice.call(arguments))},e.warn=function(){this.i(console.warn,Mr.warning,[].slice.call(arguments))},e.info=function(){this.i(console.info,Mr.info,[].slice.call(arguments))},e.debug=function(){this.i(console.log,Mr.debug,[].slice.call(arguments))},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r})();function so(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function yg(r){return r&&r.sensitive?"":"i"}var Vi={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},vs=new((function(){function r(){this.o=Vi,this.u=void 0,this.h={after:null,before:null,parent:null}}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},e.addContainer=function(t,n){var i=this.getContainer()||this.h.before;i?this.l(t,i):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},e.getSibling=function(){return this.h},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){var t=[].slice.call(arguments).length;if(t===0)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],t===1)return n.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(n,i.firstChild);for(var s,o=document.createElement("a"),a=1;a<t;a++)o.href=arguments[a],n.href=s=o.href;return i.removeChild(n),s},e.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},e.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},r})()),iR=(function(){function r(){this.p=void 0,this.m=[],this.P=-1}var e=r.prototype;return e.init=function(t,n){this.p="barba";var i={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(i);var s={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,o=s.index;n=this.g(this.P-o),this.replace(s.states),this.P=o}else this.add(t,n);return n},e.add=function(t,n,i,s){var o=i??this.R(n),a={data:s??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(o){case"push":this.P=this.size,this.m.push(a);break;case"replace":this.set(this.P,a)}var l={from:this.p,index:this.P,states:[].concat(this.m)};switch(o){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.store=function(t,n){var i=n||this.P,s=this.get(i);s.data=Bi({},s.data,t),this.set(i,s);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},e.update=function(t,n){var i=n||this.P,s=Bi({},this.get(i),t);this.set(i,s)},e.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},e.clear=function(){this.m=[],this.P=-1},e.replace=function(t){this.m=t},e.get=function(t){return this.m[t]},e.set=function(t,n){return this.m[t]=n},e.R=function(t){var n="push",i=t,s=Vi.prefix+"-"+Vi.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},sp(r,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),r})(),Mv=new iR,eu=function(r,e){try{var t=(function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=vs.toElement(n.html);i.namespace=vs.getNamespace(s),i.container=vs.getContainer(s),i.url=n.url,i.html=n.html,Mv.update({ns:i.namespace});var o=vs.toDocument(n.html);document.title=o.title}})})();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},Ev=function r(e,t,n){return e instanceof RegExp?(function(i,s){if(!s)return i;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,l=o.exec(i.source);l;)s.push({name:l[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),l=o.exec(i.source);return i})(e,t):Array.isArray(e)?(function(i,s,o){var a=i.map(function(l){return r(l,s,o).source});return new RegExp("(?:".concat(a.join("|"),")"),yg(o))})(e,t,n):(function(i,s,o){return(function(a,l,c){c===void 0&&(c={});for(var u=c.strict,h=u!==void 0&&u,d=c.start,f=d===void 0||d,_=c.end,p=_===void 0||_,g=c.encode,m=g===void 0?function(q){return q}:g,x=c.delimiter,y=x===void 0?"/#?":x,v=c.endsWith,E="[".concat(so(v===void 0?"":v),"]|$"),M="[".concat(so(y),"]"),w=f?"^":"",C=0,S=a;C<S.length;C++){var b=S[C];if(typeof b=="string")w+=so(m(b));else{var D=so(m(b.prefix)),N=so(m(b.suffix));if(b.pattern)if(l&&l.push(b),D||N)if(b.modifier==="+"||b.modifier==="*"){var G=b.modifier==="*"?"?":"";w+="(?:".concat(D,"((?:").concat(b.pattern,")(?:").concat(N).concat(D,"(?:").concat(b.pattern,"))*)").concat(N,")").concat(G)}else w+="(?:".concat(D,"(").concat(b.pattern,")").concat(N,")").concat(b.modifier);else w+=b.modifier==="+"||b.modifier==="*"?"((?:".concat(b.pattern,")").concat(b.modifier,")"):"(".concat(b.pattern,")").concat(b.modifier);else w+="(?:".concat(D).concat(N,")").concat(b.modifier)}}if(p)h||(w+="".concat(M,"?")),w+=c.endsWith?"(?=".concat(E,")"):"$";else{var V=a[a.length-1],Y=typeof V=="string"?M.indexOf(V[V.length-1])>-1:V===void 0;h||(w+="(?:".concat(M,"(?=").concat(E,"))?")),Y||(w+="(?=".concat(M,"|").concat(E,")"))}return new RegExp(w,yg(c))})((function(a,l){l===void 0&&(l={});for(var c=(function(N){for(var G=[],V=0;V<N.length;){var Y=N[V];if(Y!=="*"&&Y!=="+"&&Y!=="?")if(Y!=="\\")if(Y!=="{")if(Y!=="}")if(Y!==":")if(Y!=="(")G.push({type:"CHAR",index:V,value:N[V++]});else{var q=1,X="";if(N[se=V+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(se));for(;se<N.length;)if(N[se]!=="\\"){if(N[se]===")"){if(--q==0){se++;break}}else if(N[se]==="("&&(q++,N[se+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(se));X+=N[se++]}else X+=N[se++]+N[se++];if(q)throw new TypeError("Unbalanced pattern at ".concat(V));if(!X)throw new TypeError("Missing pattern at ".concat(V));G.push({type:"PATTERN",index:V,value:X}),V=se}else{for(var B="",se=V+1;se<N.length;){var U=N.charCodeAt(se);if(!(U>=48&&U<=57||U>=65&&U<=90||U>=97&&U<=122||U===95))break;B+=N[se++]}if(!B)throw new TypeError("Missing parameter name at ".concat(V));G.push({type:"NAME",index:V,value:B}),V=se}else G.push({type:"CLOSE",index:V,value:N[V++]});else G.push({type:"OPEN",index:V,value:N[V++]});else G.push({type:"ESCAPED_CHAR",index:V++,value:N[V++]});else G.push({type:"MODIFIER",index:V,value:N[V++]})}return G.push({type:"END",index:V,value:""}),G})(a),u=l.prefixes,h=u===void 0?"./":u,d="[^".concat(so(l.delimiter||"/#?"),"]+?"),f=[],_=0,p=0,g="",m=function(N){if(p<c.length&&c[p].type===N)return c[p++].value},x=function(N){var G=m(N);if(G!==void 0)return G;var V=c[p],Y=V.index;throw new TypeError("Unexpected ".concat(V.type," at ").concat(Y,", expected ").concat(N))},y=function(){for(var N,G="";N=m("CHAR")||m("ESCAPED_CHAR");)G+=N;return G};p<c.length;){var v=m("CHAR"),E=m("NAME"),M=m("PATTERN");if(E||M)h.indexOf(C=v||"")===-1&&(g+=C,C=""),g&&(f.push(g),g=""),f.push({name:E||_++,prefix:C,suffix:"",pattern:M||d,modifier:m("MODIFIER")||""});else{var w=v||m("ESCAPED_CHAR");if(w)g+=w;else if(g&&(f.push(g),g=""),m("OPEN")){var C=y(),S=m("NAME")||"",b=m("PATTERN")||"",D=y();x("CLOSE"),f.push({name:S||(b?_++:""),pattern:S&&!b?d:b,prefix:C,suffix:D,modifier:m("MODIFIER")||""})}else x("END")}}return f})(i,o),s,o)})(e,t,n)},rR={__proto__:null,update:eu,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:Ev},Tv=function(){return window.location.origin},cl=function(r){return r===void 0&&(r=window.location.href),Er(r).port},Er=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(Tv(),""),o={},a=s.indexOf("#");a>=0&&(i=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=Av(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:o}},Av=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},tf=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},sR={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(r,e){return e===void 0&&(e=document.baseURI),new URL(r,e).href},getOrigin:Tv,getPort:cl,getPath:function(r){return r===void 0&&(r=window.location.href),Er(r).path},getQuery:function(r,e){return e===void 0&&(e=!1),e?JSON.stringify(Er(r).query):Er(r).query},getHash:function(r){return Er(r).hash},parse:Er,parseQuery:Av,clean:tf};function oR(r,e,t,n,i){return e===void 0&&(e=2e3),new Promise(function(s,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(a.status===200){var l=a.responseURL!==""&&a.responseURL!==r?a.responseURL:r;s({html:a.responseText,url:Bi({href:l},Er(l))}),n.update(r,{status:"fulfilled",target:l})}else if(a.status){var c={status:a.status,statusText:a.statusText};t(r,c),o(c),n.update(r,{status:"rejected"})}}},a.ontimeout=function(){var l=new Error("Timeout error ["+e+"]");t(r,l),o(l),n.update(r,{status:"rejected"})},a.onerror=function(){var l=new Error("Fetch error");t(r,l),o(l),n.update(r,{status:"rejected"})},a.open("GET",r),a.timeout=e,a.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),a.setRequestHeader("x-barba","yes"),i.all().forEach(function(l,c){a.setRequestHeader(c,l)}),a.send()})}function aR(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"}function yo(r,e){return e===void 0&&(e={}),function(){var t=arguments,n=!1,i=new Promise(function(s,o){e.async=function(){return n=!0,function(l,c){l?o(l):s(c)}};var a=r.apply(e,[].slice.call(t));n||(aR(a)?a.then(s,o):s(a))});return i}}var Sr=new((function(r){function e(){var n;return(n=r.call(this)||this).logger=new _s("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}du(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:s})})})},t.do=function(n){var i=arguments,s=this;if(this.registered.has(n)){var o=Promise.resolve();return this.registered.get(n).forEach(function(a){o=o.then(function(){return yo(a.fn,a.ctx).apply(void 0,[].slice.call(i,1))})}),o.catch(function(a){s.logger.debug("Hook error ["+n+"]"),s.logger.error(a)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e})(nR)),Cv=(function(){function r(e){if(this.k=void 0,this.O=[],typeof e=="boolean")this.k=e;else{var t=Array.isArray(e)?e:[e];this.O=t.map(function(n){return Ev(n)})}}return r.prototype.checkHref=function(e){if(typeof this.k=="boolean")return this.k;var t=Er(e).path;return this.O.some(function(n){return n.exec(t)!==null})},r})(),lR=(function(r){function e(n){var i;return(i=r.call(this,n)||this).T=new Map,i}du(e,r);var t=e.prototype;return t.set=function(n,i,s,o,a){return this.T.set(n,{action:s,request:i,status:o,target:a??n}),{action:s,request:i,status:o,target:a}},t.get=function(n){return this.T.get(n)},t.getRequest=function(n){return this.T.get(n).request},t.getAction=function(n){return this.T.get(n).action},t.getStatus=function(n){return this.T.get(n).status},t.getTarget=function(n){return this.T.get(n).target},t.has=function(n){return!this.checkHref(n)&&this.T.has(n)},t.delete=function(n){return this.T.delete(n)},t.update=function(n,i){var s=Bi({},this.T.get(n),i);return this.T.set(n,s),s},e})(Cv),cR=(function(){function r(){this.A=new Map}var e=r.prototype;return e.set=function(t,n){return this.A.set(t,n),{name:n}},e.get=function(t){return this.A.get(t)},e.all=function(){return this.A},e.has=function(t){return this.A.has(t)},e.delete=function(t){return this.A.delete(t)},e.clear=function(){return this.A.clear()},r})(),uR=function(){return!window.history.pushState},hR=function(r){return!r.el||!r.href},dR=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},fR=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},pR=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},mR=function(r){var e=r.el;return e.port!==void 0&&cl()!==cl(e.href)},gR=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},_R=function(r){return r.el.hasAttribute(Vi.prefix+"-"+Vi.prevent)},vR=function(r){return!!r.el.closest("["+Vi.prefix+"-"+Vi.prevent+'="all"]')},yR=function(r){var e=r.href;return tf(e)===tf()&&cl(e)===cl()},xR=(function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}du(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",uR),this.add("exists",hR),this.add("newTab",dR),this.add("blank",fR),this.add("corsDomain",pR),this.add("corsPort",mR),this.add("download",gR),this.add("preventSelf",_R),this.add("preventAll",vR),this.add("sameUrl",yR,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,o){return this.tests.get(n)({el:i,event:s,href:o})},t.checkLink=function(n,i,s){var o=this;return this.suite.some(function(a){return o.run(a,n,i,s)})},e})(Cv),_h=(function(r){function e(t,n){var i;return n===void 0&&(n="Barba error"),(i=r.call.apply(r,[this].concat([].slice.call(arguments,2)))||this).error=void 0,i.label=void 0,i.error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(tR(i),e),i.name="BarbaError",i}return du(e,r),e})(ef(Error)),bR=(function(){function r(t){t===void 0&&(t=[]),this.logger=new _s("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){t==="rule"?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(d){return d.name&&d.name==="self"}:function(d){return!d.name||d.name!=="self"});var o=new Map,a=s.find(function(d){var f=!0,_={};return n.self&&d.name==="self"?(o.set(d,_),!0):(i.j.reverse().forEach(function(p){f&&(f=i.M(d,p,t,_),d.from&&d.to&&(f=i.M(d,p,t,_,"from")&&i.M(d,p,t,_,"to")),d.from&&!d.to&&(f=i.M(d,p,t,_,"from")),!d.from&&d.to&&(f=i.M(d,p,t,_,"to")))}),o.set(d,_),f)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var u,h=[a];Object.keys(l).length>0&&h.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(h))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.M=function(t,n,i,s,o){var a=!0,l=!1,c=t,u=n.name,h=u,d=u,f=u,_=o?c[o]:c,p=o==="to"?i.next:i.current;if(o?_&&_[u]:_[u]){switch(n.type){case"strings":default:var g=Array.isArray(_[h])?_[h]:[_[h]];p[h]&&g.indexOf(p[h])!==-1&&(l=!0),g.indexOf(p[h])===-1&&(a=!1);break;case"object":var m=Array.isArray(_[d])?_[d]:[_[d]];p[d]?(p[d].name&&m.indexOf(p[d].name)!==-1&&(l=!0),m.indexOf(p[d].name)===-1&&(a=!1)):a=!1;break;case"function":_[f](i)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][u]=c[o][u]):s[u]=c[u])}return a},e.S=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.N=function(t){var n=this;t.priority=0;var i=0;return this.j.forEach(function(s,o){i+=n.S(t,s.name,o+1)}),t.priority=i,t},r})();function ha(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}var SR=(function(){function r(t){t===void 0&&(t=[]),this.logger=new _s("@barba/core"),this.store=void 0,this.C=!1,this.store=new bR(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){o.C=!1},o=this,a=i||{};o.C=!0;var l=ha(function(){return Promise.resolve(o.L("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.L("afterOnce",n,a)).then(function(){})})})},function(c){o.C=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,o=t.wrapper;try{var a=function(d){l.C=!1},l=this,c=i||{},u=c.sync===!0||!1;l.C=!0;var h=ha(function(){function d(){return Promise.resolve(l.L("before",n,c)).then(function(){function _(g){return Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.L("after",n,c)).then(function(){})})}var p=(function(){if(u)return ha(function(){return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),l.enter(n,c)])).then(function(){return Promise.resolve(l.L("afterLeave",n,c)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})})},function(y){if(l.H(y))throw new _h(y,"Transition error [sync]")});var g=function(y){return ha(function(){var v=(function(){if(m!==!1)return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(l.enter(n,c,m)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})();if(v&&v.then)return v.then(function(){})},function(v){if(l.H(v))throw new _h(v,"Transition error [before/after/enter]")})},m=!1,x=ha(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),eu(s,n)]).then(function(y){return y[0]})).then(function(y){return m=y,Promise.resolve(l.L("afterLeave",n,c)).then(function(){})})})},function(y){if(l.H(y))throw new _h(y,"Transition error [before/after/leave]")});return x&&x.then?x.then(g):g()})();return p&&p.then?p.then(_):_()})}var f=(function(){if(u)return Promise.resolve(eu(s,n)).then(function(){})})();return f&&f.then?f.then(d):d()},function(d){throw l.C=!1,d.name&&d.name==="BarbaError"?(l.logger.debug(d.label),l.logger.error(d.error),d):(l.logger.debug("Transition error [page]"),l.logger.error(d),d)});return Promise.resolve(h&&h.then?h.then(a):a())}catch(d){return Promise.reject(d)}},e.once=function(t,n){try{return Promise.resolve(Sr.do("once",t,n)).then(function(){return n.once?yo(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(Sr.do("leave",t,n)).then(function(){return n.leave?yo(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(Sr.do("enter",t,n)).then(function(){return n.enter?yo(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return vs.addContainer(t.next.container,n),Sr.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return vs.removeContainer(t.current.container),Sr.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.L=function(t,n,i){try{return Promise.resolve(Sr.do(t,n,i)).then(function(){return i[t]?yo(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},sp(r,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r})(),wR=(function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){Sr[n](t._(n))}))}return r.prototype._=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?yo(s[e],s)(n):Promise.resolve()}},r})();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var MR={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},ns=new((function(){function r(){this.version="2.10.3",this.schemaPage=MR,this.Logger=_s,this.logger=new _s("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=Sr,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=vs,this.helpers=rR,this.history=Mv,this.request=oR,this.url=sR,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?Vi:l,u=n.requestError,h=n.timeout,d=h===void 0?2e3:h,f=n.cacheIgnore,_=f!==void 0&&f,p=n.cacheFirstPage,g=p!==void 0&&p,m=n.prefetchIgnore,x=m!==void 0&&m,y=n.preventRunning,v=y!==void 0&&y,E=n.prevent,M=E===void 0?null:E,w=n.debug,C=n.logLevel;if(_s.setLevel((w!==void 0&&w)===!0?"debug":C===void 0?"off":C),this.logger.info(this.version),Object.keys(c).forEach(function(D){Vi[D]&&(Vi[D]=c[D])}),this.B=u,this.timeout=d,this.cacheIgnore=_,this.cacheFirstPage=g,this.prefetchIgnore=x,this.preventRunning=v,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var S=this.data.current;if(!S.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new lR(_),this.headers=new cR,this.prevent=new xR(x),this.transitions=new SR(s),this.views=new wR(a),M!==null){if(typeof M!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",M)}this.history.init(S.url.href,S.namespace),g&&this.cache.set(S.url.href,Promise.resolve({html:S.html,url:S.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(D){return D.init()});var b=this.data;b.trigger="barba",b.next=b.current,b.current=Bi({},this.schemaPage),this.hooks.do("ready",b),this.once(b),this.I()},e.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,i??void 0,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=(function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}})();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i,s){try{var o,a=function(){var h=l.data;return Promise.resolve(l.hooks.do("page",h)).then(function(){var d=(function(f,_){try{var p=(g=l.transitions.get(h,{once:!1,self:s}),Promise.resolve(l.transitions.doPage({data:h,page:o,transition:g,wrapper:l.q})).then(function(){l.I()}))}catch{return _()}var g;return p&&p.then?p.then(void 0,_):p})(0,function(){_s.getLevel()===0&&l.force(h.next.url.href)});if(d&&d.then)return d.then(function(){})})},l=this;if(l.data.next.url=Bi({href:t},l.url.parse(t)),l.data.trigger=n,l.data.event=i,l.cache.has(t))o=l.cache.update(t,{action:"click"}).request;else{var c=l.request(t,l.timeout,l.onRequestError.bind(l,n),l.cache,l.headers);c.then(function(h){h.url.href!==t&&l.history.add(h.url.href,n,"replace")}),o=l.cache.set(t,c,"click","pending").request}var u=(function(){if(l.transitions.shouldWait)return Promise.resolve(eu(o,l.data)).then(function(){})})();return Promise.resolve(u&&u.then?u.then(a):a())}catch(h){return Promise.reject(h)}},e.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),i=n[0],s=n[1],o=this.cache.getAction(i);return this.cache.delete(i),this.B&&this.B(t,o,i,s)===!1||o==="click"&&this.force(i),!1},e.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(i){n.logger.error(i)}),"prefetch","pending")},e.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},e.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},e.U=function(t){var n=this,i=this.W(t);if(i){var s=this.url.getAbsoluteHref(this.dom.getHref(i));this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i),this.cache,this.headers).catch(function(o){n.logger.error(o)}),"enter","pending")}},e.$=function(t){var n=this.W(t);if(n){if(this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(n),n,t)}},e.X=function(t){this.go(this.url.getHref(),"popstate",t)},e.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:Bi({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:Bi({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},sp(r,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),r})());De.registerPlugin(Us);const Rv={leave(r){return new Promise(e=>{De.killTweensOf(r),De.set(r,{visibility:"visible",opacity:1,pointerEvents:"none",immediateRender:!0}),De.to(r,{opacity:0,duration:.25,ease:"power1.out",onComplete:()=>{De.set(r,{visibility:"hidden",opacity:0}),e()}})})},enter(r){return new Promise(e=>{De.killTweensOf(r);const t=r.querySelector(".page"),n=t?Array.from(t.children):[];De.set(r,{opacity:0,y:0,visibility:"visible",pointerEvents:"none"}),t&&De.set(t,{opacity:0,visibility:"visible",pointerEvents:"none"}),n.length>0&&De.set(n,{opacity:0,visibility:"visible",pointerEvents:"none"}),De.timeline({defaults:{ease:"power2.out"},onComplete:()=>{t&&De.set(t,{pointerEvents:"auto"}),n.length>0&&De.set(n,{pointerEvents:"auto"}),De.set(r,{pointerEvents:"auto"}),e()}}).to(r,{opacity:1,duration:.28})})}};class ER{constructor(){this.elements=new Map,this.resizeObserver=null,this.mutationObserver=null,this.isInitialized=!1,this.config={viewportFillPercent:92,minFontSize:8,maxFontSize:800,debounceDelay:20},this.init()}init(){this.isInitialized||(window.ResizeObserver&&(this._containerWidths=new WeakMap,this.resizeObserver=new ResizeObserver(e=>{window.requestAnimationFrame(()=>{e.forEach(t=>{const n=t.contentRect.width,i=this._containerWidths.get(t.target)||0;Math.abs(n-i)>1&&(this._containerWidths.set(t.target,n),this.recalculateElementsInContainer(t.target))})})})),this.mutationObserver=new MutationObserver(e=>{e.forEach(t=>{t.addedNodes.forEach(n=>{n.nodeType===Node.ELEMENT_NODE&&this.scanForElements(n)})})}),this.mutationObserver.observe(document.body,{childList:!0,subtree:!0}),this.lastWindowWidth=window.innerWidth,this.resizeHandler=this.debounce(()=>{const e=window.innerWidth;Math.abs(e-this.lastWindowWidth)>5&&(this.lastWindowWidth=e,this.recalculateAll())},this.config.debounceDelay),window.addEventListener("resize",this.resizeHandler),this.scanForElements(document.body),document.fonts&&document.fonts.ready.then(()=>{this.recalculateAll()}),this.isInitialized=!0)}debounce(e,t=this.config.debounceDelay){let n;return(...i)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,i),t)}}scanForElements(e){var i,s;const t=e.querySelectorAll?e.querySelectorAll(".fill-container"):[],n=e.querySelectorAll?e.querySelectorAll(".fill-viewport"):[];(i=e.classList)!=null&&i.contains("fill-container")&&this.registerElement(e,"container"),(s=e.classList)!=null&&s.contains("fill-viewport")&&this.registerElement(e,"viewport"),t.forEach(o=>this.registerElement(o,"container")),n.forEach(o=>this.registerElement(o,"viewport"))}registerElement(e,t){if(this.elements.has(e))return;const n={mode:t,minFontSize:this.config.minFontSize,maxFontSize:this.config.maxFontSize};if(this.elements.set(e,n),t==="container"&&this.resizeObserver){const i=this.getReliableParent(e);i&&this.resizeObserver.observe(i)}this.calculateFontSize(e,n)}getReliableParent(e){let t=e.parentElement;for(;t&&t!==document.body;){if(window.getComputedStyle(t),t.clientWidth>0)return t;t=t.parentElement}return document.body}getTargetWidth(e,t){if(t==="viewport")return window.innerWidth*this.config.viewportFillPercent/100;{let n=e.parentElement;for(;n&&n!==document.body&&!(n.clientWidth>0);)n=n.parentElement;(!n||n===document.body)&&(n=document.body);const i=window.getComputedStyle(n),s=window.getComputedStyle(e),o=n.clientWidth,a=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight);let l=o-a;const c=parseFloat(s.borderLeftWidth)+parseFloat(s.borderRightWidth),u=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight);return l-=c+u,Math.max(0,l)}}createMeasurer(e){const t=document.createElement("span");t.textContent=(e.textContent||e.innerText||"").trim();const n=window.getComputedStyle(e);return Object.assign(t.style,{position:"absolute",visibility:"hidden",whiteSpace:"nowrap",top:"-9999px",left:"-9999px",fontFamily:n.fontFamily,fontWeight:n.fontWeight,fontStyle:n.fontStyle,letterSpacing:n.letterSpacing,textTransform:n.textTransform,fontVariant:n.fontVariant,fontStretch:n.fontStretch,fontFeatureSettings:n.fontFeatureSettings,wordSpacing:n.wordSpacing}),t}calculateFontSize(e,t){if(!(e.textContent||e.innerText||"").trim())return;const i=this.getTargetWidth(e,t.mode);if(i<=0)return;const s=e.style.fontSize,o=e.style.whiteSpace,a=e.style.overflow,l=e.style.maxWidth,c=e.style.width;e.style.whiteSpace="nowrap",e.style.overflow="visible",e.style.maxWidth="none",e.style.width="max-content";const u=100;e.style.fontSize=`${u}px`;const h=e.scrollWidth;if(h===0){e.style.fontSize=s,e.style.whiteSpace=o,e.style.overflow=a,e.style.maxWidth=l,e.style.width=c;return}const d=i/h;let f=Math.max(t.minFontSize,Math.min(t.maxFontSize,u*d));e.style.fontSize=`${f}px`;const _=e.scrollWidth;if(Math.abs(_-i)>.5){const p=i/_;f=Math.max(t.minFontSize,Math.min(t.maxFontSize,f*p))}if(e.style.overflow=a,e.style.maxWidth=l,e.style.width=c,t.mode==="viewport"){const p=f/window.innerWidth*100;e.style.fontSize=`${p}vw`}else e.style.fontSize=`${f}px`;e.style.whiteSpace="nowrap",t.mode==="viewport"&&(e.style.display="block",e.style.width="100%",e.style.textAlign="center")}recalculateElementsInContainer(e){this.elements.forEach((t,n)=>{t.mode==="container"&&(e===n||e.contains(n))&&this.calculateFontSize(n,t)})}recalculateAll(){this.elements.forEach((e,t)=>{document.contains(t)?this.calculateFontSize(t,e):this.elements.delete(t)})}fill(e,t="container"){const n=typeof e=="string"?document.querySelector(e):e;if(!n){console.warn("TextFill: Element not found");return}n.classList.add(t==="viewport"?"fill-viewport":"fill-container"),this.registerElement(n,t)}remove(e){const t=typeof e=="string"?document.querySelector(e):e;!t||!this.elements.has(t)||(this.elements.get(t),t.style.fontSize="",t.style.whiteSpace="",t.style.display="",t.style.width="",t.style.textAlign="",t.classList.remove("fill-container","fill-viewport"),this.elements.delete(t))}refresh(){this.lastWindowWidth=window.innerWidth,this.scanForElements(document.body),this.recalculateAll()}setViewportFillPercent(e){this.config.viewportFillPercent=Math.max(0,Math.min(100,e)),this.recalculateAll()}destroy(){this.resizeObserver&&this.resizeObserver.disconnect(),this.mutationObserver&&this.mutationObserver.disconnect(),window.removeEventListener("resize",this.resizeHandler),this.elements.forEach((e,t)=>{this.remove(t)}),this.elements.clear(),this.isInitialized=!1}}const TR=new ER;function AR(){return TR.refresh()}function CR(){window.barba=ns,IR(),window.barbaTransitionActive=!1,window.animationController={transitionComplete:!0,transitionCompletedAt:0,pendingAnimations:[],initialPageLoad:!0,completeTransition(){this.transitionComplete=!0,this.transitionCompletedAt=Date.now(),console.log("TRANSITION MARKED COMPLETE at",this.transitionCompletedAt),setTimeout(()=>{this.processPendingAnimations()},100)},resetForTransition(){this.initialPageLoad=!1,this.transitionComplete=!1,this.transitionCompletedAt=0,this.pendingAnimations=[],console.log("TRANSITION RESET - animations will be queued until complete")},canRunAnimations(){return this.initialPageLoad?!0:this.transitionComplete?Date.now()-this.transitionCompletedAt>=80:!1},queueAnimation(e,t="unnamed"){console.log(`Queuing animation: ${t}`),this.canRunAnimations()?(console.log(`Running animation immediately: ${t}`),e()):(console.log(`Adding ${t} to pending queue`),this.pendingAnimations.push({fn:e,label:t}))},processPendingAnimations(){if(!this.canRunAnimations()){console.log("Cannot process animations yet - transition not complete");return}console.log(`Processing ${this.pendingAnimations.length} pending animations`),this.pendingAnimations.forEach((e,t)=>{setTimeout(()=>{console.log(`Running queued animation: ${e.label}`),e.fn()},t*50)}),this.pendingAnimations=[]}};const r=document.createElement("style");r.textContent=`
    body.barba-transition {
      overflow: hidden !important;
    }
  `,document.head.appendChild(r),ns.hooks.before(e=>{console.log("Barba transition starting",e.trigger),document.body.classList.add("barba-transition"),e.next.container&&De.set(e.next.container,{opacity:0,visibility:"hidden"})}),ns.hooks.beforeLeave(e=>{console.log("Barba beforeLeave: preparing transition"),window.titleAnimationInterval&&(clearInterval(window.titleAnimationInterval),window.titleAnimationInterval=null),window.titleAnimationObserver&&(window.titleAnimationObserver.disconnect(),window.titleAnimationObserver=null),window.titleVisibilityHandler&&(document.removeEventListener("visibilitychange",window.titleVisibilityHandler),window.titleVisibilityHandler=null),De.set(e.current.container,{visibility:"visible",opacity:1})}),ns.hooks.nextAdded(e=>{console.log("Barba nextAdded: preparing next container"),De.set(e.next.container,{opacity:0,visibility:"hidden"})}),ns.hooks.beforeEnter(e=>{console.log("Barba beforeEnter: container added to DOM"),e.next.namespace==="about"?document.documentElement.classList.add("about"):document.documentElement.classList.remove("about");const t=e.next.container.querySelector(".page");t&&De.set(t,{opacity:0,visibility:"visible",immediateRender:!0});const n=e.next.container.querySelectorAll(".page, .page > *");De.set(n,{opacity:0,pointerEvents:"none",immediateRender:!0}),e.next.container.querySelectorAll(".circular-text").forEach(s=>{s.style.opacity="0",s.style.pointerEvents="none"}),e.current.container&&e.current.container.classList.add("barba-old-container")}),ns.hooks.after(e=>{document.body.classList.remove("barba-transition"),e.next.container&&e.next.container.classList.remove("barba-container-next"),document.querySelectorAll(".barba-old-container").forEach(t=>{t.classList.remove("barba-old-container")}),gv()}),ns.init({preventRunning:!0,transitions:[{name:"fade-transition",leave(e){return RR(e)},enter(e){return PR(e)},afterEnter(e){return LR(e)}}],views:[{namespace:"index",beforeEnter(){}},{namespace:"about",beforeEnter(e){const t=e.next.container,n=t.querySelector(".self-image");n&&(t.insertAdjacentElement("afterend",n),De.killTweensOf(n),De.set(n,{opacity:0}),De.to(n,{opacity:1,duration:2.5,delay:.8,ease:"power2.inOut"}),n.style.removeProperty("pointer-events"))},beforeLeave(){document.querySelectorAll("#viewport > .self-image").forEach(t=>t.remove())}},{namespace:"works",beforeEnter(){}},{namespace:"contact",beforeEnter(){}},{namespace:"labs",beforeEnter(){}},{namespace:"resume",beforeEnter(){}},{namespace:"american-chemical-society",beforeEnter(){}},{namespace:"scholastic",beforeEnter(){}},{namespace:"jpplus",beforeEnter(){}},{namespace:"rowmark",beforeEnter(){}},{namespace:"aave",beforeEnter(){}},{namespace:"ipi",beforeEnter(){}},{namespace:"wabash",beforeEnter(){}},{namespace:"bright-future",beforeEnter(){}},{namespace:"healpool",beforeEnter(){}},{namespace:"rentaru",beforeEnter(){}}]})}function RR(r){return new Promise(e=>{window.animationController.resetForTransition(),window.barbaTransitionActive=!0,document.body.classList.contains("menu-active")&&setTimeout(function(){document.body.classList.remove("menu-active"),document.querySelectorAll(".mobile-menu-toggle").forEach(t=>{t.classList.remove("active")})},240),nb(),Rv.leave(r.current.container).then(e)})}function PR(r){return new Promise(async e=>{(()=>{An&&(An.stop(),An.scrollTo(0,{immediate:!0,force:!0}),requestAnimationFrame(()=>An.scrollTo(0,{immediate:!0,force:!0}))),window.scrollTo({top:0,left:0,behavior:"instant"}),document.documentElement.scrollTop=0,document.body.scrollTop=0})();const n=document.querySelector(".barba-old-container");n&&De.set(n,{visibility:"hidden",opacity:0,display:"none"}),window.barbaTransitionActive=!0;let i;const s=r.next.url.href;let o=null;if(window.barba&&window.barba.cache&&(o=window.barba.cache.get(s)),o&&o.mediaReady)console.log("Waiting for preloaded media from cache..."),i=o.mediaReady;else{console.log("No cached media found, discovering and loading now...");const a=Wo.discoverAssets(r.next.container);i=Wo.preload(a)}await i,console.log("Media ready! proceeding with transition"),Rv.enter(r.next.container).then(()=>{var u;console.log("BARBA PAGE TRANSITION COMPLETE - Now safe to run animations");const a=r.next.namespace,l=r.current.namespace;console.log(`Checking background transition from "${l}" to "${a}"`),((u=ps.getConfigManager())==null?void 0:u.shouldTransition(a))?(console.log(`Background mode change detected - applying fade transition to "${a}"`),ps.transitionToPageWithFade(a,.3,.4).then(()=>{console.log(`Background transition to "${a}" complete`)})):(console.log(`Same background mode - skipping fade transition for "${a}"`),ps.getConfigManager()&&(ps.getConfigManager().currentPage=a)),window.animationController.completeTransition(),window.barbaTransitionActive=!1,e()})})}function LR(r){console.log("Barba afterEnter: preparing animations"),D_.applyMode(),document.querySelectorAll(".barba-old-container").forEach(l=>{De.set(l,{visibility:"hidden",opacity:0,display:"none"})}),xg();const t=r.next.namespace==="index",i=r.next.container.querySelector(".page"),s=i?Array.from(i.children):[];i&&De.set(i,{opacity:1,pointerEvents:"auto"});const o="h1, h2, [data-splitting], .splitting-rows, .titles-wrapper, .fade-reveal",a=[];return s.length>0&&s.forEach(l=>{l.matches(o)?De.set(l,{opacity:0,pointerEvents:"auto",visibility:"visible"}):(De.set(l,{opacity:0,pointerEvents:"auto",visibility:"visible"}),a.push(l))}),window.animationController.queueAnimation(()=>{console.log("Preparing text splitting"),qd()},"splitText-preparation"),a.length>0&&window.animationController.queueAnimation(()=>{De.to(a,{opacity:1,duration:.35,ease:"power2.out",stagger:.06})},"base-content-fade"),t?(window.animationController.queueAnimation(()=>{console.log("Running H1 character reveals (homepage focus)"),Yc()},"homepage-h1-reveal"),window.animationController.queueAnimation(()=>{console.log("Running data-splitting animations"),jc()},"data-splitting"),window.animationController.queueAnimation(()=>{console.log("Starting title rotation (homepage)"),tp("barba-transition")},"title-rotation")):(window.animationController.queueAnimation(()=>{console.log("Running H1 character reveals"),Yc()},"h1-reveal"),window.animationController.queueAnimation(()=>{console.log("Running data-splitting animations"),jc()},"data-splitting")),window.animationController.queueAnimation(()=>{console.log("Setting up circle text"),mv()},"circle-text"),window.animationController.queueAnimation(()=>{console.log("Setting up scroll-based reveals"),Jf(),bf(),Q0(),Z0()},"scroll-animations"),window.animationController.queueAnimation(()=>{console.log("Setting up page-specific event handlers"),Ef(),au(),ib(),console.log("Scroll re-enabled after animations"),setTimeout(()=>{window.ScrollTrigger&&(window.ScrollTrigger.refresh(),console.log("ScrollTrigger refreshed after transition")),AR(),window.lenis&&(window.lenis.resize(),console.log("Lenis resized after transition"))},100);const l=r.next.container.querySelectorAll("img"),c=Array.from(l).map(h=>h.complete?Promise.resolve():new Promise(d=>{h.addEventListener("load",d,{once:!0}),h.addEventListener("error",d,{once:!0})}));Promise.all(c).then(()=>{console.log("All images loaded, final scroll recalculation"),window.ScrollTrigger&&window.ScrollTrigger.refresh(),window.lenis&&window.lenis.resize()});const u=r.next.container.querySelector(".page");if(u&&window.ResizeObserver){let h,d=u.clientWidth,f=u.clientHeight;const _=new ResizeObserver(p=>{clearTimeout(h),h=setTimeout(()=>{const g=u.clientWidth,m=u.clientHeight,x=Math.abs(g-d)>5,y=Math.abs(m-f)>150;(x||y)&&(console.log("Content size changed significantly, updating scroll calculations"),d=g,f=m,window.ScrollTrigger&&window.ScrollTrigger.refresh(),window.lenis&&window.lenis.resize())},150)});_.observe(u),r.next.container._resizeObserver=_}Sf(),xg(),document.querySelectorAll(".splitting-rows:not(.reveal)").forEach(h=>{console.log("Final fix for missed splitting-rows element"),h.classList.add("reveal")})},"final-setup"),window.animationController.processPendingAnimations(),Promise.resolve()}function IR(){const r=new Set,e=i=>!(!i||!i.href||i.origin!==window.location.origin||i.href===window.location.href||i.hash&&i.href.replace(i.hash,"")===window.location.href.replace(window.location.hash,"")||r.has(i.href)),t=i=>{r.add(i),fetch(i,{credentials:"include"}).catch(()=>{r.delete(i)})},n=i=>{const s=i.target.closest("a[href]");e(s)&&(requestIdleCallback?requestIdleCallback(()=>t(s.href),{timeout:200}):setTimeout(()=>t(s.href),32))};["mouseover","focusin","touchstart"].forEach(i=>{document.addEventListener(i,n,{passive:!0})})}function xg(){console.log("Barba transition: ensuring containers are visible");const r=document.querySelector("[data-barba='container']");r&&De.set(r,{visibility:"visible",opacity:1})}function DR(){if(document.querySelectorAll("video").length>0){let t=function(n){const i=n.closest(".large-video");!n.paused&&!n.ended?(i.classList.add("playing"),i.classList.remove("paused")):(i.classList.remove("playing"),i.classList.add("paused"))};var e=t;document.querySelectorAll("svg.pause").forEach(n=>{n.addEventListener("click",function(){const i=this.parentElement.querySelector("video");i.paused?i.play():i.pause(),t(i)})}),document.querySelectorAll("svg.play").forEach(n=>{n.addEventListener("click",function(){const i=this.parentElement.querySelector("video");i.paused&&i.play(),t(i)})})}}history.scrollRestoration&&(history.scrollRestoration="manual");window.addEventListener("beforeunload",()=>{window.scrollTo(0,0)});window.scrollTo(0,0);document.addEventListener("DOMContentLoaded",OR);function OR(){window.scrollTo(0,0),window.location.hash&&history.replaceState(null,document.title,window.location.pathname+window.location.search);let r=!0;const e=()=>{r&&(window.scrollTo(0,0),window.lenis&&window.lenis.scrollTo(0,{immediate:!0}))};window.addEventListener("scroll",e,{passive:!1}),window.addEventListener("load",()=>{setTimeout(()=>{r=!1,window.removeEventListener("scroll",e)},100)}),YC(),CR(),Ef(),DR(),D_.init()}
