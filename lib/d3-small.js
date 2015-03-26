!function(){function t(t){return t&&(t.ownerDocument||t.document||t).documentElement}function n(t){return t&&(t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView)}function e(t,n){if(n in t)return n;n=n.charAt(0).toUpperCase()+n.slice(1);for(var e=0,r=tn.length;r>e;++e){var i=tn[e]+n;if(i in t)return i}}function r(t){return Zt(t,an),t}function i(t){return"function"==typeof t?t:function(){return nn(t,this)}}function a(t){return"function"==typeof t?t:function(){return en(t,this)}}function u(t,n){function e(){this.removeAttribute(t)}function r(){this.removeAttributeNS(t.space,t.local)}function i(){this.setAttribute(t,n)}function a(){this.setAttributeNS(t.space,t.local,n)}function u(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}function o(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}return t=Ft.ns.qualify(t),null==n?t.local?r:e:"function"==typeof n?t.local?o:u:t.local?a:i}function o(t){return t.trim().replace(/\s+/g," ")}function s(t){return new RegExp("(?:^|\\s+)"+Ft.requote(t)+"(?:\\s+|$)","g")}function l(t){return(t+"").trim().split(/^|\s+/)}function c(t,n){function e(){for(var e=-1;++e<i;)t[e](this,n)}function r(){for(var e=-1,r=n.apply(this,arguments);++e<i;)t[e](this,r)}t=l(t).map(h);var i=t.length;return"function"==typeof n?r:e}function h(t){var n=s(t);return function(e,r){if(i=e.classList)return r?i.add(t):i.remove(t);var i=e.getAttribute("class")||"";r?(n.lastIndex=0,n.test(i)||e.setAttribute("class",o(i+" "+t))):e.setAttribute("class",o(i.replace(n," ")))}}function f(t,n,e){function r(){this.style.removeProperty(t)}function i(){this.style.setProperty(t,n,e)}function a(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}return null==n?r:"function"==typeof n?a:i}function p(t,n){function e(){delete this[t]}function r(){this[t]=n}function i(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}return null==n?e:"function"==typeof n?i:r}function g(t){function n(){var n=this.ownerDocument,e=this.namespaceURI;return e?n.createElementNS(e,t):n.createElement(t)}function e(){return this.ownerDocument.createElementNS(t.space,t.local)}return"function"==typeof t?t:(t=Ft.ns.qualify(t)).local?e:n}function d(){var t=this.parentNode;t&&t.removeChild(this)}function v(t,n){for(var e in n)Object.defineProperty(t.prototype,e,{value:n[e],enumerable:!1})}function m(){this._=Object.create(null)}function _(t){return(t+="")===sn||t[0]===ln?ln+t:t}function y(t){return(t+="")[0]===ln?t.slice(1):t}function w(t){return _(t)in this._}function b(t){return(t=_(t))in this._&&delete this._[t]}function x(){var t=[];for(var n in this._)t.push(y(n));return t}function M(){var t=0;for(var n in this._)++t;return t}function k(){for(var t in this._)return!1;return!0}function A(){this._=Object.create(null)}function N(t){return{__data__:t}}function S(t){return function(){return rn(this,t)}}function E(t,n){return n>t?-1:t>n?1:t>=n?0:0/0}function q(t){return arguments.length||(t=E),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function P(){}function z(){}function T(t){function n(){for(var n,r=e,i=-1,a=r.length;++i<a;)(n=r[i].on)&&n.apply(this,arguments);return t}var e=[],r=new m;return n.on=function(n,i){var a,u=r.get(n);return arguments.length<2?u&&u.on:(u&&(u.on=null,e=e.slice(0,a=e.indexOf(u)).concat(e.slice(a+1)),r.remove(n)),i&&e.push(r.set(n,{on:i})),t)},n}function C(){for(var t,n=Ft.event;t=n.sourceEvent;)n=t;return n}function D(t,n,e){function r(){var n=this[u];n&&(this.removeEventListener(t,n,n.$),delete this[u])}function i(){var i=s(n,Ht(arguments));r.call(this),this.addEventListener(t,this[u]=i,i.$=e),i._=n}function a(){var n,e=new RegExp("^__on([^.]+)"+Ft.requote(t)+"$");for(var r in this)if(n=r.match(e)){var i=this[r];this.removeEventListener(n[1],i,i.$),delete this[r]}}var u="__on"+t,o=t.indexOf("."),s=L;o>0&&(t=t.slice(0,o));var l=cn.get(t);return l&&(t=l,s=O),o?n?i:r:n?P:a}function L(t,n){return function(e){var r=Ft.event;Ft.event=e,n[0]=this.__data__;try{t.apply(this,n)}finally{Ft.event=r}}}function O(t,n){var e=L(t,n);return function(t){var n=this,r=t.relatedTarget;r&&(r===n||8&r.compareDocumentPosition(n))||e.call(n,t)}}function V(t,n){for(var e=0,r=t.length;r>e;e++)for(var i,a=t[e],u=0,o=a.length;o>u;u++)(i=a[u])&&n(i,u,e);return t}function j(t){return Zt(t,hn),t}function I(t){var n,e;return function(r,i,a){var u,o=t[a].update,s=o.length;for(a!=e&&(e=a,n=0),i>=n&&(n=i+1);!(u=o[n])&&++n<s;);return u}}function X(t){for(var n=1;t*n%1;)n*=10;return n}function $(){return!0}function F(){var t=R(),n=H()-t;n>24?(isFinite(n)&&(clearTimeout(vn),vn=setTimeout(F,n)),dn=0):(dn=1,_n(F))}function R(){var t=Date.now();for(mn=pn;mn;)t>=mn.t&&(mn.f=mn.c(t-mn.t)),mn=mn.n;return t}function H(){for(var t,n=pn,e=1/0;n;)n.f?n=t?t.n=n.n:pn=n.n:(n.t<e&&(e=n.t),n=(t=n).n);return gn=t,e}function Y(t){return function(){var n,e;(n=this[t])&&(e=n[n.active])&&(--n.count?delete n[n.active]:delete this[t],n.active+=.5,e.event&&e.event.interrupt.call(this,this.__data__,e.index))}}function B(t,n,e){return Zt(t,xn),t.namespace=n,t.id=e,t}function G(){}function U(t,n,e){return this instanceof U?(this.h=+t,this.s=+n,void(this.l=+e)):arguments.length<2?t instanceof U?new U(t.h,t.s,t.l):ot(""+t,st,U):new U(t,n,e)}function K(t,n,e){function r(t){return t>360?t-=360:0>t&&(t+=360),60>t?a+(u-a)*t/60:180>t?u:240>t?a+(u-a)*(240-t)/60:a}function i(t){return Math.round(255*r(t))}var a,u;return t=isNaN(t)?0:(t%=360)<0?t+360:t,n=isNaN(n)?0:0>n?0:n>1?1:n,e=0>e?0:e>1?1:e,u=.5>=e?e*(1+n):e+n-e*n,a=2*e-u,new it(i(t+120),i(t),i(t-120))}function W(t,n,e){return this instanceof W?(this.h=+t,this.c=+n,void(this.l=+e)):arguments.length<2?t instanceof W?new W(t.h,t.c,t.l):t instanceof Q?tt(t.l,t.a,t.b):tt((t=lt((t=Ft.rgb(t)).r,t.g,t.b)).l,t.a,t.b):new W(t,n,e)}function J(t,n,e){return isNaN(t)&&(t=0),isNaN(n)&&(n=0),new Q(e,Math.cos(t*=En)*n,Math.sin(t)*n)}function Q(t,n,e){return this instanceof Q?(this.l=+t,this.a=+n,void(this.b=+e)):arguments.length<2?t instanceof Q?new Q(t.l,t.a,t.b):t instanceof W?J(t.h,t.c,t.l):lt((t=it(t)).r,t.g,t.b):new Q(t,n,e)}function Z(t,n,e){var r=(t+16)/116,i=r+n/500,a=r-e/200;return i=nt(i)*Tn,r=nt(r)*Cn,a=nt(a)*Dn,new it(rt(3.2404542*i-1.5371385*r-.4985314*a),rt(-.969266*i+1.8760108*r+.041556*a),rt(.0556434*i-.2040259*r+1.0572252*a))}function tt(t,n,e){return t>0?new W(Math.atan2(e,n)*qn,Math.sqrt(n*n+e*e),t):new W(0/0,0/0,t)}function nt(t){return t>.206893034?t*t*t:(t-4/29)/7.787037}function et(t){return t>.008856?Math.pow(t,1/3):7.787037*t+4/29}function rt(t){return Math.round(255*(.00304>=t?12.92*t:1.055*Math.pow(t,1/2.4)-.055))}function it(t,n,e){return this instanceof it?(this.r=~~t,this.g=~~n,void(this.b=~~e)):arguments.length<2?t instanceof it?new it(t.r,t.g,t.b):ot(""+t,it,K):new it(t,n,e)}function at(t){return new it(t>>16,t>>8&255,255&t)}function ut(t){return 16>t?"0"+Math.max(0,t).toString(16):Math.min(255,t).toString(16)}function ot(t,n,e){var r,i,a,u=0,o=0,s=0;if(r=/([a-z]+)\((.*)\)/i.exec(t))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return n(ht(i[0]),ht(i[1]),ht(i[2]))}return(a=Vn.get(t.toLowerCase()))?n(a.r,a.g,a.b):(null==t||"#"!==t.charAt(0)||isNaN(a=parseInt(t.slice(1),16))||(4===t.length?(u=(3840&a)>>4,u=u>>4|u,o=240&a,o=o>>4|o,s=15&a,s=s<<4|s):7===t.length&&(u=(16711680&a)>>16,o=(65280&a)>>8,s=255&a)),n(u,o,s))}function st(t,n,e){var r,i,a=Math.min(t/=255,n/=255,e/=255),u=Math.max(t,n,e),o=u-a,s=(u+a)/2;return o?(i=.5>s?o/(u+a):o/(2-u-a),r=t==u?(n-e)/o+(e>n?6:0):n==u?(e-t)/o+2:(t-n)/o+4,r*=60):(r=0/0,i=s>0&&1>s?0:r),new U(r,i,s)}function lt(t,n,e){t=ct(t),n=ct(n),e=ct(e);var r=et((.4124564*t+.3575761*n+.1804375*e)/Tn),i=et((.2126729*t+.7151522*n+.072175*e)/Cn),a=et((.0193339*t+.119192*n+.9503041*e)/Dn);return Q(116*i-16,500*(r-i),200*(i-a))}function ct(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function ht(t){var n=parseFloat(t);return"%"===t.charAt(t.length-1)?Math.round(2.55*n):n}function ft(t,n){t=Ft.rgb(t),n=Ft.rgb(n);var e=t.r,r=t.g,i=t.b,a=n.r-e,u=n.g-r,o=n.b-i;return function(t){return"#"+ut(Math.round(e+a*t))+ut(Math.round(r+u*t))+ut(Math.round(i+o*t))}}function pt(t,n){var e,r={},i={};for(e in t)e in n?r[e]=mt(t[e],n[e]):i[e]=t[e];for(e in n)e in t||(i[e]=n[e]);return function(t){for(e in r)i[e]=r[e](t);return i}}function gt(t,n){var e,r=[],i=[],a=t.length,u=n.length,o=Math.min(t.length,n.length);for(e=0;o>e;++e)r.push(mt(t[e],n[e]));for(;a>e;++e)i[e]=t[e];for(;u>e;++e)i[e]=n[e];return function(t){for(e=0;o>e;++e)i[e]=r[e](t);return i}}function dt(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function vt(t,n){var e,r,i,a=jn.lastIndex=In.lastIndex=0,u=-1,o=[],s=[];for(t+="",n+="";(e=jn.exec(t))&&(r=In.exec(n));)(i=r.index)>a&&(i=n.slice(a,i),o[u]?o[u]+=i:o[++u]=i),(e=e[0])===(r=r[0])?o[u]?o[u]+=r:o[++u]=r:(o[++u]=null,s.push({i:u,x:dt(e,r)})),a=In.lastIndex;return a<n.length&&(i=n.slice(a),o[u]?o[u]+=i:o[++u]=i),o.length<2?s[0]?(n=s[0].x,function(t){return n(t)+""}):function(){return n}:(n=s.length,function(t){for(var e,r=0;n>r;++r)o[(e=s[r]).i]=e.x(t);return o.join("")})}function mt(t,n){for(var e,r=Ft.interpolators.length;--r>=0&&!(e=Ft.interpolators[r](t,n)););return e}function _t(t){var n=[t.a,t.b],e=[t.c,t.d],r=wt(n),i=yt(n,e),a=wt(bt(e,n,-i))||0;n[0]*e[1]<e[0]*n[1]&&(n[0]*=-1,n[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(n[1],n[0]):Math.atan2(-e[0],e[1]))*qn,this.translate=[t.e,t.f],this.scale=[r,a],this.skew=a?Math.atan2(i,a)*qn:0}function yt(t,n){return t[0]*n[0]+t[1]*n[1]}function wt(t){var n=Math.sqrt(yt(t,t));return n&&(t[0]/=n,t[1]/=n),n}function bt(t,n,e){return t[0]+=e*n[0],t[1]+=e*n[1],t}function xt(t,n){var e,r=[],i=[],a=Ft.transform(t),u=Ft.transform(n),o=a.translate,s=u.translate,l=a.rotate,c=u.rotate,h=a.skew,f=u.skew,p=a.scale,g=u.scale;return o[0]!=s[0]||o[1]!=s[1]?(r.push("translate(",null,",",null,")"),i.push({i:1,x:dt(o[0],s[0])},{i:3,x:dt(o[1],s[1])})):r.push(s[0]||s[1]?"translate("+s+")":""),l!=c?(l-c>180?c+=360:c-l>180&&(l+=360),i.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:dt(l,c)})):c&&r.push(r.pop()+"rotate("+c+")"),h!=f?i.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:dt(h,f)}):f&&r.push(r.pop()+"skewX("+f+")"),p[0]!=g[0]||p[1]!=g[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),i.push({i:e-4,x:dt(p[0],g[0])},{i:e-2,x:dt(p[1],g[1])})):(1!=g[0]||1!=g[1])&&r.push(r.pop()+"scale("+g+")"),e=i.length,function(t){for(var n,a=-1;++a<e;)r[(n=i[a]).i]=n.x(t);return r.join("")}}function Mt(t,n,e,r){var i=t.id,a=t.namespace;return V(t,"function"==typeof e?function(t,u,o){t[a][i].tween.set(n,r(e.call(t,t.__data__,u,o)))}:(e=r(e),function(t){t[a][i].tween.set(n,e)}))}function kt(t){return null==t&&(t=""),function(){this.textContent=t}}function At(t){return t}function Nt(t){return function(n){return 0>=n?0:n>=1?1:t(n)}}function St(t){return function(n){return 1-t(1-n)}}function Et(t){return function(n){return.5*(.5>n?t(2*n):2-t(2-2*n))}}function qt(t){return t*t}function Pt(t){return t*t*t}function zt(t){if(0>=t)return 0;if(t>=1)return 1;var n=t*t,e=n*t;return 4*(.5>t?e:3*(t-n)+e-.75)}function Tt(t){return function(n){return Math.pow(n,t)}}function Ct(t){return 1-Math.cos(t*Sn)}function Dt(t){return Math.pow(2,10*(t-1))}function Lt(t){return 1-Math.sqrt(1-t*t)}function Ot(t,n){var e;return arguments.length<2&&(n=.45),arguments.length?e=n/Nn*Math.asin(1/t):(t=1,e=n/4),function(r){return 1+t*Math.pow(2,-10*r)*Math.sin((r-e)*Nn/n)}}function Vt(t){return t||(t=1.70158),function(n){return n*n*((t+1)*n-t)}}function jt(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}function It(t){return null==t?"__transition__":"__transition_"+t+"__"}function Xt(t,n,e,r,i){var a=t[e]||(t[e]={active:0,count:0}),u=a[r];if(!u){var o=i.time;u=a[r]={tween:new m,time:o,delay:i.delay,duration:i.duration,ease:i.ease,index:n},i=null,++a.count,Ft.timer(function(i){function s(e){if(a.active>r)return c();var i=a[a.active];i&&(--a.count,delete a[a.active],i.event&&i.event.interrupt.call(t,t.__data__,i.index)),a.active=r,u.event&&u.event.start.call(t,t.__data__,n),u.tween.forEach(function(e,r){(r=r.call(t,t.__data__,n))&&d.push(r)}),f=u.ease,h=u.duration,Ft.timer(function(){return g.c=l(e||1)?$:l,1},0,o)}function l(e){if(a.active!==r)return 1;for(var i=e/h,o=f(i),s=d.length;s>0;)d[--s].call(t,o);return i>=1?(u.event&&u.event.end.call(t,t.__data__,n),c()):void 0}function c(){return--a.count?delete a[r]:delete t[e],1}var h,f,p=u.delay,g=mn,d=[];return g.t=p+o,i>=p?s(i-p):void(g.c=s)},0,o)}}function $t(t,e){e.changedTouches&&(e=e.changedTouches[0]);var r=t.ownerSVGElement||t;if(r.createSVGPoint){var i=r.createSVGPoint();if(0>Hn){var a=n(t);if(a.scrollX||a.scrollY){r=Ft.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=r[0][0].getScreenCTM();Hn=!(u.f||u.e),r.remove()}}return Hn?(i.x=e.pageX,i.y=e.pageY):(i.x=e.clientX,i.y=e.clientY),i=i.matrixTransform(t.getScreenCTM().inverse()),[i.x,i.y]}var o=t.getBoundingClientRect();return[e.clientX-o.left-t.clientLeft,e.clientY-o.top-t.clientTop]}var Ft={version:"3.5.5"},Rt=[].slice,Ht=function(t){return Rt.call(t)},Yt=this.document;if(Yt)try{Ht(Yt.documentElement.childNodes)[0].nodeType}catch(Bt){Ht=function(t){for(var n=t.length,e=new Array(n);n--;)e[n]=t[n];return e}}if(Date.now||(Date.now=function(){return+new Date}),Yt)try{Yt.createElement("DIV").style.setProperty("opacity",0,"")}catch(Gt){var Ut=this.Element.prototype,Kt=Ut.setAttribute,Wt=Ut.setAttributeNS,Jt=this.CSSStyleDeclaration.prototype,Qt=Jt.setProperty;Ut.setAttribute=function(t,n){Kt.call(this,t,n+"")},Ut.setAttributeNS=function(t,n,e){Wt.call(this,t,n,e+"")},Jt.setProperty=function(t,n,e){Qt.call(this,t,n+"",e)}}var Zt={}.__proto__?function(t,n){t.__proto__=n}:function(t,n){for(var e in n)t[e]=n[e]},tn=["webkit","ms","moz","Moz","o","O"],nn=function(t,n){return n.querySelector(t)},en=function(t,n){return n.querySelectorAll(t)},rn=function(t,n){var r=t.matches||t[e(t,"matchesSelector")];return(rn=function(t,n){return r.call(t,n)})(t,n)};"function"==typeof Sizzle&&(nn=function(t,n){return Sizzle(t,n)[0]||null},en=Sizzle,rn=Sizzle.matchesSelector),Ft.selection=function(){return Ft.select(Yt.documentElement)};var an=Ft.selection.prototype=[];an.select=function(t){var n,e,a,u,o=[];t=i(t);for(var s=-1,l=this.length;++s<l;){o.push(n=[]),n.parentNode=(a=this[s]).parentNode;for(var c=-1,h=a.length;++c<h;)(u=a[c])?(n.push(e=t.call(u,u.__data__,c,s)),e&&"__data__"in u&&(e.__data__=u.__data__)):n.push(null)}return r(o)},an.selectAll=function(t){var n,e,i=[];t=a(t);for(var u=-1,o=this.length;++u<o;)for(var s=this[u],l=-1,c=s.length;++l<c;)(e=s[l])&&(i.push(n=Ht(t.call(e,e.__data__,l,u))),n.parentNode=e);return r(i)};var un={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};Ft.ns={prefix:un,qualify:function(t){var n=t.indexOf(":"),e=t;return n>=0&&(e=t.slice(0,n),t=t.slice(n+1)),un.hasOwnProperty(e)?{space:un[e],local:t}:t}},an.attr=function(t,n){if(arguments.length<2){if("string"==typeof t){var e=this.node();return t=Ft.ns.qualify(t),t.local?e.getAttributeNS(t.space,t.local):e.getAttribute(t)}for(n in t)this.each(u(n,t[n]));return this}return this.each(u(t,n))},Ft.requote=function(t){return t.replace(on,"\\$&")};var on=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;an.classed=function(t,n){if(arguments.length<2){if("string"==typeof t){var e=this.node(),r=(t=l(t)).length,i=-1;if(n=e.classList){for(;++i<r;)if(!n.contains(t[i]))return!1}else for(n=e.getAttribute("class");++i<r;)if(!s(t[i]).test(n))return!1;return!0}for(n in t)this.each(c(n,t[n]));return this}return this.each(c(t,n))},an.style=function(t,e,r){var i=arguments.length;if(3>i){if("string"!=typeof t){2>i&&(e="");for(r in t)this.each(f(r,t[r],e));return this}if(2>i){var a=this.node();return n(a).getComputedStyle(a,null).getPropertyValue(t)}r=""}return this.each(f(t,e,r))},an.property=function(t,n){if(arguments.length<2){if("string"==typeof t)return this.node()[t];for(n in t)this.each(p(n,t[n]));return this}return this.each(p(t,n))},an.text=function(t){return arguments.length?this.each("function"==typeof t?function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}:null==t?function(){this.textContent=""}:function(){this.textContent=t}):this.node().textContent},an.html=function(t){return arguments.length?this.each("function"==typeof t?function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}:null==t?function(){this.innerHTML=""}:function(){this.innerHTML=t}):this.node().innerHTML},an.append=function(t){return t=g(t),this.select(function(){return this.appendChild(t.apply(this,arguments))})},an.insert=function(t,n){return t=g(t),n=i(n),this.select(function(){return this.insertBefore(t.apply(this,arguments),n.apply(this,arguments)||null)})},an.remove=function(){return this.each(d)},Ft.map=function(t,n){var e=new m;if(t instanceof m)t.forEach(function(t,n){e.set(t,n)});else if(Array.isArray(t)){var r,i=-1,a=t.length;if(1===arguments.length)for(;++i<a;)e.set(i,t[i]);else for(;++i<a;)e.set(n.call(t,r=t[i],i),r)}else for(var u in t)e.set(u,t[u]);return e};var sn="__proto__",ln="\x00";v(m,{has:w,get:function(t){return this._[_(t)]},set:function(t,n){return this._[_(t)]=n},remove:b,keys:x,values:function(){var t=[];for(var n in this._)t.push(this._[n]);return t},entries:function(){var t=[];for(var n in this._)t.push({key:y(n),value:this._[n]});return t},size:M,empty:k,forEach:function(t){for(var n in this._)t.call(this,y(n),this._[n])}}),Ft.set=function(t){var n=new A;if(t)for(var e=0,r=t.length;r>e;++e)n.add(t[e]);return n},v(A,{has:w,add:function(t){return this._[_(t+="")]=!0,t},remove:b,values:x,size:M,empty:k,forEach:function(t){for(var n in this._)t.call(this,y(n))}}),an.data=function(t,n){function e(t,e){var r,i,a,u=t.length,o=e.length,h=Math.min(u,o),f=new Array(o),p=new Array(o),g=new Array(u);if(n){var d,v=new m,_=new Array(u);for(r=-1;++r<u;)v.has(d=n.call(i=t[r],i.__data__,r))?g[r]=i:v.set(d,i),_[r]=d;for(r=-1;++r<o;)(i=v.get(d=n.call(e,a=e[r],r)))?i!==!0&&(f[r]=i,i.__data__=a):p[r]=N(a),v.set(d,!0);for(r=-1;++r<u;)v.get(_[r])!==!0&&(g[r]=t[r])}else{for(r=-1;++r<h;)i=t[r],a=e[r],i?(i.__data__=a,f[r]=i):p[r]=N(a);for(;o>r;++r)p[r]=N(e[r]);for(;u>r;++r)g[r]=t[r]}p.update=f,p.parentNode=f.parentNode=g.parentNode=t.parentNode,s.push(p),l.push(f),c.push(g)}var i,a,u=-1,o=this.length;if(!arguments.length){for(t=new Array(o=(i=this[0]).length);++u<o;)(a=i[u])&&(t[u]=a.__data__);return t}var s=j([]),l=r([]),c=r([]);if("function"==typeof t)for(;++u<o;)e(i=this[u],t.call(i,i.parentNode.__data__,u));else for(;++u<o;)e(i=this[u],t);return l.enter=function(){return s},l.exit=function(){return c},l},an.datum=function(t){return arguments.length?this.property("__data__",t):this.property("__data__")},an.filter=function(t){var n,e,i,a=[];"function"!=typeof t&&(t=S(t));for(var u=0,o=this.length;o>u;u++){a.push(n=[]),n.parentNode=(e=this[u]).parentNode;for(var s=0,l=e.length;l>s;s++)(i=e[s])&&t.call(i,i.__data__,s,u)&&n.push(i)}return r(a)},an.order=function(){for(var t=-1,n=this.length;++t<n;)for(var e,r=this[t],i=r.length-1,a=r[i];--i>=0;)(e=r[i])&&(a&&a!==e.nextSibling&&a.parentNode.insertBefore(e,a),a=e);return this},Ft.ascending=E,an.sort=function(t){t=q.apply(this,arguments);for(var n=-1,e=this.length;++n<e;)this[n].sort(t);return this.order()},Ft.dispatch=function(){for(var t=new z,n=-1,e=arguments.length;++n<e;)t[arguments[n]]=T(t);return t},z.prototype.on=function(t,n){var e=t.indexOf("."),r="";if(e>=0&&(r=t.slice(e+1),t=t.slice(0,e)),t)return arguments.length<2?this[t].on(r):this[t].on(r,n);if(2===arguments.length){if(null==n)for(t in this)this.hasOwnProperty(t)&&this[t].on(r,null);return this}},Ft.event=null,an.on=function(t,n,e){var r=arguments.length;if(3>r){if("string"!=typeof t){2>r&&(n=!1);for(e in t)this.each(D(e,t[e],n));return this}if(2>r)return(r=this.node()["__on"+t])&&r._;e=!1}return this.each(D(t,n,e))};var cn=Ft.map({mouseenter:"mouseover",mouseleave:"mouseout"});Yt&&cn.forEach(function(t){"on"+t in Yt&&cn.remove(t)}),an.each=function(t){return V(this,function(n,e,r){t.call(n,n.__data__,e,r)})},an.call=function(t){var n=Ht(arguments);return t.apply(n[0]=this,n),this},an.empty=function(){return!this.node()},an.node=function(){for(var t=0,n=this.length;n>t;t++)for(var e=this[t],r=0,i=e.length;i>r;r++){var a=e[r];if(a)return a}return null},an.size=function(){var t=0;return V(this,function(){++t}),t};var hn=[];Ft.selection.enter=j,Ft.selection.enter.prototype=hn,hn.append=an.append,hn.empty=an.empty,hn.node=an.node,hn.call=an.call,hn.size=an.size,hn.select=function(t){for(var n,e,i,a,u,o=[],s=-1,l=this.length;++s<l;){i=(a=this[s]).update,o.push(n=[]),n.parentNode=a.parentNode;for(var c=-1,h=a.length;++c<h;)(u=a[c])?(n.push(i[c]=e=t.call(a.parentNode,u.__data__,c,s)),e.__data__=u.__data__):n.push(null)}return r(o)},hn.insert=function(t,n){return arguments.length<2&&(n=I(this)),an.insert.call(this,t,n)},Ft.select=function(n){var e;return"string"==typeof n?(e=[nn(n,Yt)],e.parentNode=Yt.documentElement):(e=[n],e.parentNode=t(n)),r([e])},Ft.selectAll=function(t){var n;return"string"==typeof t?(n=Ht(en(t,Yt)),n.parentNode=Yt.documentElement):(n=t,n.parentNode=null),r([n])};var fn=Math.abs;Ft.range=function(t,n,e){if(arguments.length<3&&(e=1,arguments.length<2&&(n=t,t=0)),(n-t)/e===1/0)throw new Error("infinite range");var r,i=[],a=X(fn(e)),u=-1;if(t*=a,n*=a,e*=a,0>e)for(;(r=t+e*++u)>n;)i.push(r/a);else for(;(r=t+e*++u)<n;)i.push(r/a);return i};var pn,gn,dn,vn,mn,_n=this[e(this,"requestAnimationFrame")]||function(t){setTimeout(t,17)};Ft.timer=function(t,n,e){var r=arguments.length;2>r&&(n=0),3>r&&(e=Date.now());var i=e+n,a={c:t,t:i,f:!1,n:null};gn?gn.n=a:pn=a,gn=a,dn||(vn=clearTimeout(vn),dn=1,_n(F))},Ft.timer.flush=function(){R(),H()},an.transition=function(t){for(var n,e,r=yn||++Mn,i=It(t),a=[],u=wn||{time:Date.now(),ease:zt,delay:0,duration:250},o=-1,s=this.length;++o<s;){a.push(n=[]);for(var l=this[o],c=-1,h=l.length;++c<h;)(e=l[c])&&Xt(e,c,i,r,u),n.push(e)}return B(a,i,r)},an.interrupt=function(t){return this.each(null==t?bn:Y(It(t)))};var yn,wn,bn=Y(It()),xn=[],Mn=0;xn.call=an.call,xn.empty=an.empty,xn.node=an.node,xn.size=an.size,Ft.transition=function(t,n){return t&&t.transition?yn?t.transition(n):t:Ft.selection().transition(t)},Ft.transition.prototype=xn,xn.select=function(t){var n,e,r,a=this.id,u=this.namespace,o=[];t=i(t);for(var s=-1,l=this.length;++s<l;){o.push(n=[]);for(var c=this[s],h=-1,f=c.length;++h<f;)(r=c[h])&&(e=t.call(r,r.__data__,h,s))?("__data__"in r&&(e.__data__=r.__data__),Xt(e,h,u,a,r[u][a]),n.push(e)):n.push(null)}return B(o,u,a)},xn.selectAll=function(t){var n,e,r,i,u,o=this.id,s=this.namespace,l=[];t=a(t);for(var c=-1,h=this.length;++c<h;)for(var f=this[c],p=-1,g=f.length;++p<g;)if(r=f[p]){u=r[s][o],e=t.call(r,r.__data__,p,c),l.push(n=[]);for(var d=-1,v=e.length;++d<v;)(i=e[d])&&Xt(i,d,s,o,u),n.push(i)}return B(l,s,o)},xn.filter=function(t){var n,e,r,i=[];"function"!=typeof t&&(t=S(t));for(var a=0,u=this.length;u>a;a++){i.push(n=[]);for(var e=this[a],o=0,s=e.length;s>o;o++)(r=e[o])&&t.call(r,r.__data__,o,a)&&n.push(r)}return B(i,this.namespace,this.id)},Ft.color=G,G.prototype.toString=function(){return this.rgb()+""},Ft.hsl=U;var kn=U.prototype=new G;kn.brighter=function(t){return t=Math.pow(.7,arguments.length?t:1),new U(this.h,this.s,this.l/t)},kn.darker=function(t){return t=Math.pow(.7,arguments.length?t:1),new U(this.h,this.s,t*this.l)},kn.rgb=function(){return K(this.h,this.s,this.l)};var An=Math.PI,Nn=2*An,Sn=An/2,En=An/180,qn=180/An;Ft.hcl=W;var Pn=W.prototype=new G;Pn.brighter=function(t){return new W(this.h,this.c,Math.min(100,this.l+zn*(arguments.length?t:1)))},Pn.darker=function(t){return new W(this.h,this.c,Math.max(0,this.l-zn*(arguments.length?t:1)))},Pn.rgb=function(){return J(this.h,this.c,this.l).rgb()},Ft.lab=Q;var zn=18,Tn=.95047,Cn=1,Dn=1.08883,Ln=Q.prototype=new G;Ln.brighter=function(t){return new Q(Math.min(100,this.l+zn*(arguments.length?t:1)),this.a,this.b)},Ln.darker=function(t){return new Q(Math.max(0,this.l-zn*(arguments.length?t:1)),this.a,this.b)},Ln.rgb=function(){return Z(this.l,this.a,this.b)},Ft.rgb=it;var On=it.prototype=new G;On.brighter=function(t){t=Math.pow(.7,arguments.length?t:1);var n=this.r,e=this.g,r=this.b,i=30;return n||e||r?(n&&i>n&&(n=i),e&&i>e&&(e=i),r&&i>r&&(r=i),new it(Math.min(255,n/t),Math.min(255,e/t),Math.min(255,r/t))):new it(i,i,i)},On.darker=function(t){return t=Math.pow(.7,arguments.length?t:1),new it(t*this.r,t*this.g,t*this.b)},On.hsl=function(){return st(this.r,this.g,this.b)},On.toString=function(){return"#"+ut(this.r)+ut(this.g)+ut(this.b)};var Vn=Ft.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Vn.forEach(function(t,n){Vn.set(t,at(n))}),Ft.interpolateRgb=ft,Ft.interpolateObject=pt,Ft.interpolateArray=gt,Ft.interpolateNumber=dt,Ft.interpolateString=vt;var jn=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,In=new RegExp(jn.source,"g");Ft.interpolate=mt,Ft.interpolators=[function(t,n){var e=typeof n;return("string"===e?Vn.has(n)||/^(#|rgb\(|hsl\()/.test(n)?ft:vt:n instanceof G?ft:Array.isArray(n)?gt:"object"===e&&isNaN(n)?pt:dt)(t,n)}],Ft.transform=function(t){var n=Yt.createElementNS(Ft.ns.prefix.svg,"g");return(Ft.transform=function(t){if(null!=t){n.setAttribute("transform",t);var e=n.transform.baseVal.consolidate()}return new _t(e?e.matrix:Xn)})(t)},_t.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var Xn={a:1,b:0,c:0,d:1,e:0,f:0};Ft.interpolateTransform=xt,xn.tween=function(t,n){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(t):V(this,null==n?function(n){n[r][e].tween.remove(t)}:function(i){i[r][e].tween.set(t,n)})},xn.attr=function(t,n){function e(){this.removeAttribute(o)}function r(){this.removeAttributeNS(o.space,o.local)}function i(t){return null==t?e:(t+="",function(){var n,e=this.getAttribute(o);return e!==t&&(n=u(e,t),function(t){this.setAttribute(o,n(t))})})}function a(t){return null==t?r:(t+="",function(){var n,e=this.getAttributeNS(o.space,o.local);return e!==t&&(n=u(e,t),function(t){this.setAttributeNS(o.space,o.local,n(t))})})}if(arguments.length<2){for(n in t)this.attr(n,t[n]);return this}var u="transform"==t?xt:mt,o=Ft.ns.qualify(t);return Mt(this,"attr."+t,n,o.local?a:i)},xn.attrTween=function(t,n){function e(t,e){var r=n.call(this,t,e,this.getAttribute(i));return r&&function(t){this.setAttribute(i,r(t))}}function r(t,e){var r=n.call(this,t,e,this.getAttributeNS(i.space,i.local));return r&&function(t){this.setAttributeNS(i.space,i.local,r(t))}}var i=Ft.ns.qualify(t);return this.tween("attr."+t,i.local?r:e)},xn.style=function(t,e,r){function i(){this.style.removeProperty(t)}function a(e){return null==e?i:(e+="",function(){var i,a=n(this).getComputedStyle(this,null).getPropertyValue(t);return a!==e&&(i=mt(a,e),function(n){this.style.setProperty(t,i(n),r)})})}var u=arguments.length;if(3>u){if("string"!=typeof t){2>u&&(e="");for(r in t)this.style(r,t[r],e);return this}r=""}return Mt(this,"style."+t,e,a)},xn.styleTween=function(t,e,r){function i(i,a){var u=e.call(this,i,a,n(this).getComputedStyle(this,null).getPropertyValue(t));return u&&function(n){this.style.setProperty(t,u(n),r)}}return arguments.length<3&&(r=""),this.tween("style."+t,i)},xn.text=function(t){return Mt(this,"text",t,kt)},xn.remove=function(){var t=this.namespace;return this.each("end.transition",function(){var n;this[t].count<2&&(n=this.parentNode)&&n.removeChild(this)})};var $n=function(){return At},Fn=Ft.map({linear:$n,poly:Tt,quad:function(){return qt},cubic:function(){return Pt},sin:function(){return Ct},exp:function(){return Dt},circle:function(){return Lt},elastic:Ot,back:Vt,bounce:function(){return jt}}),Rn=Ft.map({"in":At,out:St,"in-out":Et,"out-in":function(t){return Et(St(t))}});Ft.ease=function(t){var n=t.indexOf("-"),e=n>=0?t.slice(0,n):t,r=n>=0?t.slice(n+1):"in";return e=Fn.get(e)||$n,r=Rn.get(r)||At,Nt(r(e.apply(null,Rt.call(arguments,1))))},xn.ease=function(t){var n=this.id,e=this.namespace;return arguments.length<1?this.node()[e][n].ease:("function"!=typeof t&&(t=Ft.ease.apply(Ft,arguments)),V(this,function(r){r[e][n].ease=t}))},xn.delay=function(t){var n=this.id,e=this.namespace;return arguments.length<1?this.node()[e][n].delay:V(this,"function"==typeof t?function(r,i,a){r[e][n].delay=+t.call(r,r.__data__,i,a)}:(t=+t,function(r){r[e][n].delay=t}))},xn.duration=function(t){var n=this.id,e=this.namespace;return arguments.length<1?this.node()[e][n].duration:V(this,"function"==typeof t?function(r,i,a){r[e][n].duration=Math.max(1,t.call(r,r.__data__,i,a))}:(t=Math.max(1,t),function(r){r[e][n].duration=t}))},xn.each=function(t,n){var e=this.id,r=this.namespace;if(arguments.length<2){var i=wn,a=yn;try{yn=e,V(this,function(n,i,a){wn=n[r][e],t.call(n,n.__data__,i,a)})}finally{wn=i,yn=a}}else V(this,function(i){var a=i[r][e];(a.event||(a.event=Ft.dispatch("start","end","interrupt"))).on(t,n)});return this},xn.transition=function(){for(var t,n,e,r,i=this.id,a=++Mn,u=this.namespace,o=[],s=0,l=this.length;l>s;s++){
o.push(t=[]);for(var n=this[s],c=0,h=n.length;h>c;c++)(e=n[c])&&(r=e[u][i],Xt(e,c,u,a,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),t.push(e)}return B(o,u,a)},Ft.mouse=function(t){return $t(t,C())};var Hn=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;"function"==typeof define&&define.amd?define(Ft):"object"==typeof module&&module.exports&&(module.exports=Ft),this.d3=Ft}();