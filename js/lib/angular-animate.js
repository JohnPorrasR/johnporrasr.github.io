/*
 AngularJS v1.5.0-beta.2
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,w,Sa){'use strict';function wa(a,b,c){if(!a)throw ngMinErr("areq",b||"?",c||"required");return a}function xa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;W(a)&&(a=a.join(" "));W(b)&&(b=b.join(" "));return a+" "+b}function Ia(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function S(a,b,c){var d="";a=W(a)?a:a&&J(a)&&a.length?a.split(/\s+/):[];r(a,function(a,t){a&&0<a.length&&(d+=0<t?" ":"",d+=c?b+a:a+b)});return d}function Ja(a){if(a instanceof I)switch(a.length){case 0:return[];
case 1:if(1===a[0].nodeType)return a;break;default:return I(ma(a))}if(1===a.nodeType)return I(a)}function ma(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Ka(a,b,c){r(b,function(b){a.addClass(b,c)})}function La(a,b,c){r(b,function(b){a.removeClass(b,c)})}function M(a){return function(b,c){c.addClass&&(Ka(a,b,c.addClass),c.addClass=null);c.removeClass&&(La(a,b,c.removeClass),c.removeClass=null)}}function ia(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
L;a.domOperation=function(){a.$$domOperationFired=!0;b();b=L};a.$$prepared=!0}return a}function da(a,b){ya(a,b);za(a,b)}function ya(a,b){b.from&&(a.css(b.from),b.from=null)}function za(a,b){b.to&&(a.css(b.to),b.to=null)}function P(a,b,c){var d=(b.addClass||"")+" "+(c.addClass||""),e=(b.removeClass||"")+" "+(c.removeClass||"");a=Ma(a.attr("class"),d,e);c.preparationClasses&&(b.preparationClasses=X(c.preparationClasses,b.preparationClasses),delete c.preparationClasses);d=b.domOperation!==L?b.domOperation:
null;Aa(b,c);d&&(b.domOperation=d);b.addClass=a.addClass?a.addClass:null;b.removeClass=a.removeClass?a.removeClass:null;return b}function Ma(a,b,c){function d(a){J(a)&&(a=a.split(" "));var b={};r(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);r(b,function(a,b){e[b]=1});c=d(c);r(c,function(a,b){e[b]=1===e[b]?null:-1});var t={addClass:"",removeClass:""};r(e,function(b,c){var e,d;1===b?(e="addClass",d=!a[c]):-1===b&&(e="removeClass",d=a[c]);d&&(t[e].length&&(t[e]+=" "),t[e]+=c)});
return t}function B(a){return a instanceof w.element?a[0]:a}function Na(a,b,c){var d="";b&&(d=S(b,"ng-",!0));c.addClass&&(d=X(d,S(c.addClass,"-add")));c.removeClass&&(d=X(d,S(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function ja(a,b){var c=b?"-"+b+"s":"";ea(a,[fa,c]);return[fa,c]}function na(a,b){var c=b?"paused":"",d=T+"PlayState";ea(a,[d,c]);return[d,c]}function ea(a,b){a.style[b[0]]=b[1]}function X(a,b){return a?b?a+" "+b:a:b}function Ba(a,b,c){var d=Object.create(null),
e=a.getComputedStyle(b)||{};r(c,function(a,b){var c=e[a];if(c){var l=c.charAt(0);if("-"===l||"+"===l||0<=l)c=Oa(c);0===c&&(c=null);d[b]=c}});return d}function Oa(a){var b=0;a=a.split(/\s*,\s*/);r(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function oa(a){return 0===a||null!=a}function Ca(a,b){var c=N,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function Da(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},
count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ea(a,b,c){r(c,function(c){a[c]=U(a[c])?a[c]:b.style.getPropertyValue(c)})}var L=w.noop,Aa=w.extend,I=w.element,r=w.forEach,W=w.isArray,J=w.isString,pa=w.isObject,qa=w.isUndefined,U=w.isDefined,Fa=w.isFunction,ra=w.isElement,N,sa,T,ta;qa(H.ontransitionend)&&U(H.onwebkittransitionend)?(N="WebkitTransition",sa="webkitTransitionEnd transitionend"):
(N="transition",sa="transitionend");qa(H.onanimationend)&&U(H.onwebkitanimationend)?(T="WebkitAnimation",ta="webkitAnimationEnd animationend"):(T="animation",ta="animationend");var ka=T+"Delay",ua=T+"Duration",fa=N+"Delay";H=N+"Duration";var Pa={transitionDuration:H,transitionDelay:fa,transitionProperty:N+"Property",animationDuration:ua,animationDelay:ka,animationIterationCount:T+"IterationCount"},Qa={transitionDuration:H,transitionDelay:fa,animationDuration:ua,animationDelay:ka};w.module("ngAnimate",
[]).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,e,t,h){var g,l;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){g&&a.leave(g);l&&(l.$destroy(),l=null);if(e||0===e)l=b.$new(),h(l,function(b){g=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",[function(){return function(a,b,c){a=c.ngAnimateChildren;w.isString(a)&&0===a.length?b.data("$$ngAnimateChildren",!0):c.$observe("ngAnimateChildren",
function(a){b.data("$$ngAnimateChildren","on"===a||"true"===a)})}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),h=0;h<b.length;h++)b[h]();e||a(function(){e||c()})}}var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).factory("$$AnimateRunner",["$q","$sniffer","$$animateAsyncRun",function(a,b,c){function d(a){this.setHost(a);this._doneCallbacks=[];this._runInAnimationFrame=
c();this._state=0}d.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};d.all=function(a,b){function c(h){l=l&&h;++d===a.length&&b(l)}var d=0,l=!0;r(a,function(a){a.done(c)})};d.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:L,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},
then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._runInAnimationFrame(function(){b._resolve(a)}))},
_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return d}]).factory("$$animateAsyncRun",["$$rAF",function(a){function b(b){c.push(b);1<c.length||a(function(){for(var a=0;a<c.length;a++)c[a]();c=[]})}var c=[];return function(){var a=!1;b(function(){a=!0});return function(c){a?c():b(c)}}}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a,b,c,r){return d[a].some(function(a){return a(b,c,r)})}function c(a,
b){a=a||{};var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var d=this.rules={skip:[],cancel:[],join:[]};d.join.push(function(a,b,d){return!b.structural&&c(b.options)});d.skip.push(function(a,b,d){return!b.structural&&!c(b.options)});d.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});d.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});d.cancel.push(function(a,b,c){return c.structural&&b.structural});d.cancel.push(function(a,
b,c){return 2===c.state&&b.structural});d.cancel.push(function(a,b,c){a=b.options;c=c.options;return a.addClass&&a.addClass===c.removeClass||a.removeClass&&a.removeClass===c.addClass});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(d,t,h,g,l,s,$,w,Q,C){function D(){var a=!1;return function(b){a?b():t.$$postDigest(function(){a=!0;b()})}}function Y(a,b,c){var f=B(b),d=B(a),m=[];(a=v[c])&&r(a,
function(a){a.node.contains(f)?m.push(a.callback):"leave"===c&&a.node.contains(d)&&m.push(a.callback)});return m}function n(a,f,k){function m(b,c,f,v){Q(function(){var b=Y(l,a,c);b.length&&d(function(){r(b,function(b){b(a,f,v)})})});b.progress(c,f,v)}function v(b){var c=a,f=k;f.preparationClasses&&(c.removeClass(f.preparationClasses),f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),f.activeClasses=null);Ha(a,k);da(a,k);k.domOperation();h.complete(!b)}var z,l;if(a=Ja(a))z=
B(a),l=a.parent();k=ia(k);var h=new $,Q=D();W(k.addClass)&&(k.addClass=k.addClass.join(" "));k.addClass&&!J(k.addClass)&&(k.addClass=null);W(k.removeClass)&&(k.removeClass=k.removeClass.join(" "));k.removeClass&&!J(k.removeClass)&&(k.removeClass=null);k.from&&!pa(k.from)&&(k.from=null);k.to&&!pa(k.to)&&(k.to=null);if(!z)return v(),h;var y=[z.className,k.addClass,k.removeClass].join(" ");if(!Ra(y))return v(),h;var n=0<=["enter","move","leave"].indexOf(f),g=!G||F.get(z),y=!g&&p.get(z)||{},C=!!y.state;
g||C&&1==y.state||(g=!la(a,l,f));if(g)return v(),h;n&&x(a);g={structural:n,element:a,event:f,close:v,options:k,runner:h};if(C){if(b("skip",a,g,y)){if(2===y.state)return v(),h;P(a,y.options,k);return y.runner}if(b("cancel",a,g,y))if(2===y.state)y.runner.end();else if(y.structural)y.close();else return P(a,y.options,g.options),y.runner;else if(b("join",a,g,y))if(2===y.state)P(a,k,{});else return Na(a,n?f:null,k),f=g.event=y.event,k=P(a,y.options,g.options),y.runner}else P(a,k,{});(C=g.structural)||
(C="animate"===g.event&&0<Object.keys(g.options.to||{}).length||c(g.options));if(!C)return v(),A(a),h;var w=(y.counter||0)+1;g.counter=w;u(a,1,g);t.$$postDigest(function(){var b=p.get(z),d=!b,b=b||{},e=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||c(b.options));if(d||b.counter!==w||!e){d&&(Ha(a,k),da(a,k));if(d||n&&b.event!==f)k.domOperation(),h.end();e||A(a)}else f=!b.structural&&c(b.options,!0)?"setClass":b.event,u(a,2),b=s(a,f,b.options),b.done(function(b){v(!b);(b=p.get(z))&&
b.counter===w&&A(B(a));m(h,f,"close",{})}),h.setHost(b),m(h,f,"start",{})});return h}function x(a){a=B(a).querySelectorAll("[data-ng-animate]");r(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=p.get(a);switch(b){case 2:c.runner.end();case 1:c&&p.remove(a)}})}function A(a){a=B(a);a.removeAttribute("data-ng-animate");p.remove(a)}function f(a,b){return B(a)===B(b)}function la(a,b,c){c=I(g[0].body);var d=f(a,c)||"HTML"===a[0].nodeName,v=f(a,h),m=!1,A;for((a=a.data("$ngAnimatePin"))&&
(b=a);b&&b.length;){v||(v=f(b,h));a=b[0];if(1!==a.nodeType)break;var u=p.get(a)||{};m||(m=u.structural||F.get(a));if(qa(A)||!0===A)a=b.data("$$ngAnimateChildren"),U(a)&&(A=a);if(m&&!1===A)break;v||(v=f(b,h),v||(a=b.data("$ngAnimatePin"))&&(b=a));d||(d=f(b,c));b=b.parent()}return(!m||A)&&v&&d}function u(a,b,c){c=c||{};c.state=b;a=B(a);a.setAttribute("data-ng-animate",b);c=(b=p.get(a))?Aa(b,c):c;p.put(a,c)}var p=new l,F=new l,G=null,z=t.$watch(function(){return 0===w.totalPendingRequests},function(a){a&&
(z(),t.$$postDigest(function(){t.$$postDigest(function(){null===G&&(G=!0)})}))}),v={},m=a.classNameFilter(),Ra=m?function(a){return m.test(a)}:function(){return!0},Ha=M(Q);return{on:function(a,b,c){b=ma(b);v[a]=v[a]||[];v[a].push({node:b,callback:c})},off:function(a,b,c){function f(a,b,c){var d=ma(b);return a.filter(function(a){return!(a.node===d&&(!c||a.callback===c))})}var d=v[a];d&&(v[a]=1===arguments.length?null:f(d,b,c))},pin:function(a,b){wa(ra(a),"element","not an element");wa(ra(b),"parentElement",
"not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return n(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!G;else if(ra(a)){var f=B(a),d=F.get(f);1===c?b=!d:(b=!!b)?d&&F.remove(f):F.put(f,!0)}else b=G=!!a;return b}}}]}]).provider("$$animation",["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}var c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",
function(a,e,t,h,g,l){function s(a){function b(a){if(a.processed)return a;a.processed=!0;var f=a.domNode,d=f.parentNode;e.put(f,a);for(var u;d;){if(u=e.get(d)){u.processed||(u=b(u));break}d=d.parentNode}(u||c).children.push(a);return a}var c={children:[]},d,e=new g;for(d=0;d<a.length;d++){var h=a[d];e.put(h.domNode,a[d]={domNode:h.domNode,fn:h.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var p=0,
e=[];for(d=0;d<c.length;d++){var h=c[d];0>=a&&(a=p,p=0,b.push(e),e=[]);e.push(h.fn);h.children.forEach(function(a){p++;c.push(a)});a--}e.length&&b.push(e);return b}(c)}var $=[],w=M(a);return function(g,C,D){function Y(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];r(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function n(a){var b=[],c={};r(a,function(a,f){var d=B(a.element),v=0<=["enter","move"].indexOf(a.event),
d=a.structural?Y(d):[];if(d.length){var p=v?"to":"from";r(d,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][p]={animationID:f,element:I(a)}})}else b.push(a)});var f={},d={};r(c,function(c,p){var e=c.from,A=c.to;if(e&&A){var g=a[e.animationID],h=a[A.animationID],u=e.animationID.toString();if(!d[u]){var z=d[u]={structural:!0,beforeStart:function(){g.beforeStart();h.beforeStart()},close:function(){g.close();h.close()},classes:x(g.classes,h.classes),from:g,to:h,anchors:[]};z.classes.length?
b.push(z):(b.push(g),b.push(h))}d[u].anchors.push({out:e.element,"in":A.element})}else e=e?e.animationID:A.animationID,A=e.toString(),f[A]||(f[A]=!0,b.push(a[e]))});return b}function x(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var f=a[d];if("ng-"!==f.substring(0,3))for(var e=0;e<b.length;e++)if(f===b[e]){c.push(f);break}}return c.join(" ")}function A(a){for(var b=c.length-1;0<=b;b--){var d=c[b];if(t.has(d)&&(d=t.get(d)(a)))return d}}function f(a,c){a.from&&a.to?(b(a.from.element).setHost(c),
b(a.to.element).setHost(c)):b(a.element).setHost(c)}function la(){var a=b(g);!a||"leave"===C&&D.$$domOperationFired||a.end()}function u(b){g.off("$destroy",la);g.removeData("$$animationRunner");w(g,D);da(g,D);D.domOperation();z&&a.removeClass(g,z);g.removeClass("ng-animate");F.complete(!b)}D=ia(D);var p=0<=["enter","move","leave"].indexOf(C),F=new h({end:function(){u()},cancel:function(){u(!0)}});if(!c.length)return u(),F;g.data("$$animationRunner",F);var G=xa(g.attr("class"),xa(D.addClass,D.removeClass)),
z=D.tempClasses;z&&(G+=" "+z,D.tempClasses=null);$.push({element:g,classes:G,event:C,structural:p,options:D,beforeStart:function(){g.addClass("ng-animate");z&&a.addClass(g,z)},close:u});g.on("$destroy",la);if(1<$.length)return F;e.$$postDigest(function(){var a=[];r($,function(c){b(c.element)?a.push(c):c.close()});$.length=0;var c=n(a),d=[];r(c,function(a){d.push({domNode:B(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var c,d=a.close;if(b(a.anchors?a.from.element||a.to.element:a.element)){var e=
A(a);e&&(c=e.start)}c?(c=c(),c.done(function(a){d(!a)}),f(a,c)):d()}})});l(s(d))});return F}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Da(),c=Da();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$animate",function(a,e,t,h,g,l,s,w){function Ga(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++n))+"-"+a.getAttribute("class")+"-"+b}function Q(g,f,h,u){var p;0<b.count(h)&&(p=c.get(h),p||(f=
S(f,"-stagger"),e.addClass(g,f),p=Ba(a,g,u),p.animationDuration=Math.max(p.animationDuration,0),p.transitionDuration=Math.max(p.transitionDuration,0),e.removeClass(g,f),c.put(h,p)));return p||{}}function C(a){x.push(a);s.waitUntilQuiet(function(){b.flush();c.flush();for(var a=g(),d=0;d<x.length;d++)x[d](a);x.length=0})}function D(c,f,e){f=b.get(e);f||(f=Ba(a,c,Pa),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=
e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var Y=M(e),n=0,x=[];return function(a,c){function d(){p()}function g(){p(!0)}function p(b){if(!(ga||va&&k)){ga=!0;k=!1;c.$$skipPreparationClasses||e.removeClass(a,Z);e.removeClass(a,X);na(m,!1);ja(m,!1);r(x,function(a){m.style[a[0]]=""});Y(a,c);da(a,c);Object.keys(v).length&&r(v,function(a,b){a?m.style.setProperty(b,a):m.style.removeProperty(b)});if(c.onDone)c.onDone();H&&H.complete(!b)}}
function F(a){q.blockTransition&&ja(m,a);q.blockKeyframeAnimation&&na(m,!!a)}function G(){H=new t({end:d,cancel:g});C(L);p();return{$$willAnimate:!1,start:function(){return H},end:d}}function z(){function b(){if(!ga){F(!1);r(x,function(a){m.style[a[0]]=a[1]});Y(a,c);e.addClass(a,X);if(q.recalculateTimingStyles){ha=m.className+" "+Z;aa=Ga(m,ha);E=D(m,ha,aa);V=E.maxDelay;J=Math.max(V,0);K=E.maxDuration;if(0===K){p();return}q.hasTransitions=0<E.transitionDuration;q.hasAnimations=0<E.animationDuration}q.applyAnimationDelay&&
(V="boolean"!==typeof c.delay&&oa(c.delay)?parseFloat(c.delay):V,J=Math.max(V,0),E.animationDelay=V,ca=[ka,V+"s"],x.push(ca),m.style[ca[0]]=ca[1]);M=1E3*J;y=1E3*K;if(c.easing){var l,k=c.easing;q.hasTransitions&&(l=N+"TimingFunction",x.push([l,k]),m.style[l]=k);q.hasAnimations&&(l=T+"TimingFunction",x.push([l,k]),m.style[l]=k)}E.transitionDuration&&u.push(sa);E.animationDuration&&u.push(ta);z=Date.now();var n=M+1.5*y;l=z+n;var k=a.data("$$animateCss")||[],s=!0;if(k.length){var G=k[0];(s=l>G.expectedEndTime)?
h.cancel(G.timer):k.push(p)}s&&(n=h(d,n,!1),k[0]={timer:n,expectedEndTime:l},k.push(p),a.data("$$animateCss",k));a.on(u.join(" "),g);c.to&&(c.cleanupStyles&&Ea(v,m,Object.keys(c.to)),za(a,c))}}function d(){var b=a.data("$$animateCss");if(b){for(var c=1;c<b.length;c++)b[c]();a.removeData("$$animateCss")}}function g(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-z,0)>=M&&b>=K&&(va=!0,p())}if(!ga)if(m.parentNode){var z,
u=[],l=function(a){if(va)k&&a&&(k=!1,p());else if(k=!a,E.animationDuration)if(a=na(m,k),k)x.push(a);else{var b=x,c=b.indexOf(a);0<=a&&b.splice(c,1)}},n=0<U&&(E.transitionDuration&&0===R.transitionDuration||E.animationDuration&&0===R.animationDuration)&&Math.max(R.animationDelay,R.transitionDelay);n?h(b,Math.floor(n*U*1E3),!1):b();I.resume=function(){l(!0)};I.pause=function(){l(!1)}}else p()}var v={},m=B(a);if(!m||!m.parentNode||!w.enabled())return G();c=ia(c);var x=[],s=a.attr("class"),n=Ia(c),ga,
k,va,H,I,J,M,K,y;if(0===c.duration||!l.animations&&!l.transitions)return G();var ba=c.event&&W(c.event)?c.event.join(" "):c.event,P="",O="";ba&&c.structural?P=S(ba,"ng-",!0):ba&&(P=ba);c.addClass&&(O+=S(c.addClass,"-add"));c.removeClass&&(O.length&&(O+=" "),O+=S(c.removeClass,"-remove"));c.applyClassesEarly&&O.length&&Y(a,c);var Z=[P,O].join(" ").trim(),ha=s+" "+Z,X=S(Z,"-active"),s=n.to&&0<Object.keys(n.to).length;if(!(0<(c.keyframeStyle||"").length||s||Z))return G();var aa,R;0<c.stagger?(n=parseFloat(c.stagger),
R={transitionDelay:n,animationDelay:n,transitionDuration:0,animationDuration:0}):(aa=Ga(m,ha),R=Q(m,Z,aa,Qa));c.$$skipPreparationClasses||e.addClass(a,Z);c.transitionStyle&&(n=[N,c.transitionStyle],ea(m,n),x.push(n));0<=c.duration&&(n=0<m.style[N].length,n=Ca(c.duration,n),ea(m,n),x.push(n));c.keyframeStyle&&(n=[T,c.keyframeStyle],ea(m,n),x.push(n));var U=R?0<=c.staggerIndex?c.staggerIndex:b.count(aa):0;(ba=0===U)&&!c.skipBlocking&&ja(m,9999);var E=D(m,ha,aa),V=E.maxDelay;J=Math.max(V,0);K=E.maxDuration;
var q={};q.hasTransitions=0<E.transitionDuration;q.hasAnimations=0<E.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==E.transitionProperty;q.applyTransitionDuration=s&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=c.duration&&q.hasAnimations;q.applyTransitionDelay=oa(c.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=oa(c.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<O.length;if(q.applyTransitionDuration||
q.applyAnimationDuration)K=c.duration?parseFloat(c.duration):K,q.applyTransitionDuration&&(q.hasTransitions=!0,E.transitionDuration=K,n=0<m.style[N+"Property"].length,x.push(Ca(K,n))),q.applyAnimationDuration&&(q.hasAnimations=!0,E.animationDuration=K,x.push([ua,K+"s"]));if(0===K&&!q.recalculateTimingStyles)return G();if(null!=c.delay){var ca=parseFloat(c.delay);q.applyTransitionDelay&&x.push([fa,ca+"s"]);q.applyAnimationDelay&&x.push([ka,ca+"s"])}null==c.duration&&0<E.transitionDuration&&(q.recalculateTimingStyles=
q.recalculateTimingStyles||ba);M=1E3*J;y=1E3*K;c.skipBlocking||(q.blockTransition=0<E.transitionDuration,q.blockKeyframeAnimation=0<E.animationDuration&&0<R.animationDelay&&0===R.animationDuration);c.from&&(c.cleanupStyles&&Ea(v,m,Object.keys(c.from)),ya(a,c));q.blockTransition||q.blockKeyframeAnimation?F(K):c.skipBlocking||ja(m,!1);return{$$willAnimate:!0,end:d,start:function(){if(!ga)return I={end:d,cancel:g,resume:null,pause:null},H=new t(I),C(z),H}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",
function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,t,h,g){function l(a){return a.replace(/\bng-\S+\b/g,"")}function s(a,b){J(a)&&(a=a.split(" "));J(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function w(c,e,g){function h(a){var b={},c=B(a).getBoundingClientRect();r(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=
C.scrollTop;break;case "left":d+=C.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function f(){var c=l(g.attr("class")||""),d=s(c,p),c=s(p,c),d=a(u,{to:h(g),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function t(){u.remove();e.removeClass("ng-animate-shim");g.removeClass("ng-animate-shim")}var u=I(B(e).cloneNode(!0)),p=l(u.attr("class")||"");e.addClass("ng-animate-shim");g.addClass("ng-animate-shim");u.addClass("ng-anchor");D.append(u);var F;c=
function(){var c=a(u,{addClass:"ng-anchor-out",delay:!0,from:h(e)});return c.$$willAnimate?c:null}();if(!c&&(F=f(),!F))return t();var G=c||F;return{start:function(){function a(){c&&c.end()}var b,c=G.start();c.done(function(){c=null;if(!F&&(F=f()))return c=F.start(),c.done(function(){c=null;t();b.complete()}),c;t();b.complete()});return b=new d({end:a,cancel:a})}}}function H(a,b,c,e){var g=Q(a,L),h=Q(b,L),l=[];r(e,function(a){(a=w(c,a.out,a["in"]))&&l.push(a)});if(g||h||0!==l.length)return{start:function(){function a(){r(b,
function(a){a.end()})}var b=[];g&&b.push(g.start());h&&b.push(h.start());r(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function Q(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=X(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!t.animations&&!t.transitions)return L;var C=g[0].body;
c=B(e);var D=I(c.parentNode&&11===c.parentNode.nodeType||C.contains(c)?c:C);M(h);return function(a){return a.from&&a.to?H(a.from,a.to,a.classes,a.anchors):Q(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=W(c)?c:c.split(" ");for(var d=[],e={},s=0;s<c.length;s++){var r=c[s],t=a.$$registeredAnimations[r];t&&!e[r]&&(d.push(b.get(t)),e[r]=!0)}return d}var t=M(d);return function(a,b,d,s){function w(){s.domOperation();
t(a,s)}function H(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,D,J,f];break;case "addClass":b=[b,D,f];break;case "removeClass":b=[b,J,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Fa(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Fa(a))return a;return L}function B(a,b,d,e,f){var g=[];r(e,function(e){var h=e[f];h&&g.push(function(){var e,f,g=!1,k=function(a){g||(g=!0,(f||L)(a),e.complete(!a))};e=new c({end:function(){k()},cancel:function(){k(!0)}});
f=H(h,a,b,d,function(a){k(!1===a)});return e})});return g}function C(a,b,d,e,f){var g=B(a,b,d,e,f);if(0===g.length){var h,l;"beforeSetClass"===f?(h=B(a,"removeClass",d,e,"beforeRemoveClass"),l=B(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=B(a,"removeClass",d,e,"removeClass"),l=B(a,"addClass",d,e,"addClass"));h&&(g=g.concat(h));l&&(g=g.concat(l))}if(0!==g.length)return function(a){var b=[];g.length&&r(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){r(b,function(b){a?
b.cancel():b.end()})}}}3===arguments.length&&pa(d)&&(s=d,d=null);s=ia(s);d||(d=a.attr("class")||"",s.addClass&&(d+=" "+s.addClass),s.removeClass&&(d+=" "+s.removeClass));var D=s.addClass,J=s.removeClass,n=e(d),x,A;if(n.length){var f,I;"leave"==b?(I="leave",f="afterLeave"):(I="before"+b.charAt(0).toUpperCase()+b.substr(1),f=b);"enter"!==b&&"move"!==b&&(x=C(a,b,s,n,I));A=C(a,b,s,n,f)}if(x||A)return{start:function(){function b(c){f=!0;w();da(a,s);g.complete(c)}var d,e=[];x&&e.push(function(a){d=x(a)});
e.length?e.push(function(a){w();a(!0)}):w();A&&e.push(function(a){d=A(a)});var f=!1,g=new c({end:function(){f||((d||L)(void 0),b(void 0))},cancel:function(){f||((d||L)(!0),b(!0))}});c.chain(e,b);return g}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),h=d(a.to);if(b||h)return{start:function(){function a(){return function(){r(d,
function(a){a.end()})}}var d=[];b&&d.push(b.start());h&&d.push(h.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map
