!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t){void 0!==e&&void 0!==t&&e.exports===t&&(e.exports="ui.router"),function(e,t,r){"use strict";function n(e,t){return H(new(H(function(){},{prototype:e})),t)}function a(e){return G(arguments,function(t){t!==e&&G(t,function(t,r){e.hasOwnProperty(r)||(e[r]=t)})}),e}function i(e,t){var r=[];for(var n in e.path){if(e.path[n]!==t.path[n])break;r.push(e.path[n])}return r}function o(e){if(Object.keys)return Object.keys(e);var t=[];return G(e,function(e,r){t.push(r)}),t}function u(e,t){if(Array.prototype.indexOf)return e.indexOf(t,Number(arguments[2])||0);var r=e.length>>>0,n=Number(arguments[2])||0;for(n=n<0?Math.ceil(n):Math.floor(n),n<0&&(n+=r);n<r;n++)if(n in e&&e[n]===t)return n;return-1}function s(e,t,r,n){var a,s=i(r,n),l={},c=[];for(var f in s)if(s[f]&&s[f].params&&(a=o(s[f].params),a.length))for(var p in a)u(c,a[p])>=0||(c.push(a[p]),l[a[p]]=e[a[p]]);return H({},l,t)}function l(e,t,r){if(!r){r=[];for(var n in e)r.push(n)}for(var a=0;a<r.length;a++){var i=r[a];if(e[i]!=t[i])return!1}return!0}function c(e,t){var r={};return G(e,function(e){r[e]=t[e]}),r}function f(e){var t={};return G(Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1)),function(r){r in e&&(t[r]=e[r])}),t}function p(e){var t={},r=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var n in e)u(r,n)==-1&&(t[n]=e[n]);return t}function h(e,t){var r=L(e),n=r?[]:{};return G(e,function(e,a){t(e,a)&&(n[r?n.length:a]=e)}),n}function d(e,t){var r=L(e)?[]:{};return G(e,function(e,n){r[n]=t(e,n)}),r}function v(e){return e.then(r,function(){})&&e}function m(e,t){var n=1,i=2,s={},l=[],c=s,f=H(e.when(s),{$$promises:s,$$values:s});this.study=function(s){function h(e,r){if(y[r]!==i){if(g.push(r),y[r]===n)throw g.splice(0,u(g,r)),new Error("Cyclic dependency: "+g.join(" -> "));if(y[r]=n,U(e))$.push(r,[function(){return t.get(e)}],l);else{var a=t.annotate(e);G(a,function(e){e!==r&&s.hasOwnProperty(e)&&h(s[e],e)}),$.push(r,e,a)}g.pop(),y[r]=i}}function d(e){return z(e)&&e.then&&e.$$promises}if(!z(s))throw new Error("'invocables' must be an object");var m=o(s||{}),$=[],g=[],y={};return G(s,h),s=g=y=null,function(n,i,o){function u(){--b||(S||a(w,i.$$values),g.$$values=w,g.$$promises=g.$$promises||!0,delete g.$$inheritedValues,h.resolve(w))}function s(e){g.$$failure=e,h.reject(e)}function l(r,a,i){function l(e){f.reject(e),s(e)}function c(){if(!D(g.$$failure))try{f.resolve(t.invoke(a,o,w)),f.promise.then(function(e){w[r]=e,u()},l)}catch(e){l(e)}}var f=e.defer(),p=0;G(i,function(e){y.hasOwnProperty(e)&&!n.hasOwnProperty(e)&&(p++,y[e].then(function(t){w[e]=t,--p||c()},l))}),p||c(),y[r]=v(f.promise)}if(d(n)&&o===r&&(o=i,i=n,n=null),n){if(!z(n))throw new Error("'locals' must be an object")}else n=c;if(i){if(!d(i))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else i=f;var h=e.defer(),g=v(h.promise),y=g.$$promises={},w=H({},n),b=1+$.length/3,S=!1;if(v(g),D(i.$$failure))return s(i.$$failure),g;i.$$inheritedValues&&a(w,p(i.$$inheritedValues,m)),H(y,i.$$promises),i.$$values?(S=a(w,p(i.$$values,m)),g.$$inheritedValues=p(i.$$values,m),u()):(i.$$inheritedValues&&(g.$$inheritedValues=p(i.$$inheritedValues,m)),i.then(u,s));for(var x=0,E=$.length;x<E;x+=3)n.hasOwnProperty($[x])?u():l($[x],$[x+1],$[x+2]);return g}},this.resolve=function(e,t,r,n){return this.study(e)(t,r,n)}}function $(){var e=t.version.minor<3;this.shouldUnsafelyUseHttp=function(t){e=!!t},this.$get=["$http","$templateCache","$injector",function(t,r,n){return new g(t,r,n,e)}]}function g(e,t,r,n){this.fromConfig=function(e,t,r){return D(e.template)?this.fromString(e.template,t):D(e.templateUrl)?this.fromUrl(e.templateUrl,t):D(e.templateProvider)?this.fromProvider(e.templateProvider,t,r):null},this.fromString=function(e,t){return T(e)?e(t):e},this.fromUrl=function(a,i){return T(a)&&(a=a(i)),null==a?null:n?e.get(a,{cache:t,headers:{Accept:"text/html"}}).then(function(e){return e.data}):r.get("$templateRequest")(a)},this.fromProvider=function(e,t,n){return r.invoke(e,null,n||{params:t})}}function y(e,t,a){function i(t,r,n,a){if(m.push(t),d[t])return d[t];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(t))throw new Error("Invalid parameter name '"+t+"' in pattern '"+e+"'");if(v[t])throw new Error("Duplicate parameter name '"+t+"' in pattern '"+e+"'");return v[t]=new K.Param(t,r,n,a),v[t]}function o(e,t,r,n){var a=["",""],i=e.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!t)return i;switch(r){case!1:a=["(",")"+(n?"?":"")];break;case!0:i=i.replace(/\/$/,""),a=["(?:/(",")|/)?"];break;default:a=["("+r+"|",")?"]}return i+a[0]+t+a[1]}function u(a,i){var o,u,s,l,c;return o=a[2]||a[3],c=t.params[o],s=e.substring(p,a.index),u=i?a[4]:a[4]||("*"==a[1]?".*":null),u&&(l=K.type(u)||n(K.type("string"),{pattern:new RegExp(u,t.caseInsensitive?"i":r)})),{id:o,regexp:u,segment:s,type:l,cfg:c}}t=H({params:{}},z(t)?t:{});var s,l=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,c=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f="^",p=0,h=this.segments=[],d=a?a.params:{},v=this.params=a?a.params.$$new():new K.ParamSet,m=[];this.source=e;for(var $,g,y;(s=l.exec(e))&&($=u(s,!1),!($.segment.indexOf("?")>=0));)g=i($.id,$.type,$.cfg,"path"),f+=o($.segment,g.type.pattern.source,g.squash,g.isOptional),h.push($.segment),p=l.lastIndex;y=e.substring(p);var w=y.indexOf("?");if(w>=0){var b=this.sourceSearch=y.substring(w);if(y=y.substring(0,w),this.sourcePath=e.substring(0,p+w),b.length>0)for(p=0;s=c.exec(b);)$=u(s,!0),g=i($.id,$.type,$.cfg,"search"),p=l.lastIndex}else this.sourcePath=e,this.sourceSearch="";f+=o(y)+(t.strict===!1?"/?":"")+"$",h.push(y),this.regexp=new RegExp(f,t.caseInsensitive?"i":r),this.prefix=h[0],this.$$paramNames=m}function w(e){H(this,e)}function b(){function e(e){return null!=e?e.toString().replace(/(~|\/)/g,function(e){return{"~":"~~","/":"~2F"}[e]}):e}function a(e){return null!=e?e.toString().replace(/(~~|~2F)/g,function(e){return{"~~":"~","~2F":"/"}[e]}):e}function i(){return{strict:v,caseInsensitive:p}}function s(e){return T(e)||L(e)&&T(e[e.length-1])}function l(){for(;S.length;){var e=S.shift();if(e.pattern)throw new Error("You cannot override a type's .pattern at runtime.");t.extend($[e.name],f.invoke(e.def))}}function c(e){H(this,e||{})}K=this;var f,p=!1,v=!0,m=!1,$={},g=!0,S=[],x={string:{encode:e,decode:a,is:function(e){return null==e||!D(e)||"string"==typeof e},pattern:/[^\/]*/},int:{encode:e,decode:function(e){return parseInt(e,10)},is:function(e){return e!==r&&null!==e&&this.decode(e.toString())===e},pattern:/\d+/},bool:{encode:function(e){return e?1:0},decode:function(e){return 0!==parseInt(e,10)},is:function(e){return e===!0||e===!1},pattern:/0|1/},date:{encode:function(e){return this.is(e)?[e.getFullYear(),("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2)].join("-"):r},decode:function(e){if(this.is(e))return e;var t=this.capture.exec(e);return t?new Date(t[1],t[2]-1,t[3]):r},is:function(e){return e instanceof Date&&!isNaN(e.valueOf())},equals:function(e,t){return this.is(e)&&this.is(t)&&e.toISOString()===t.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:t.toJson,decode:t.fromJson,is:t.isObject,equals:t.equals,pattern:/[^\/]*/},any:{encode:t.identity,decode:t.identity,equals:t.equals,pattern:/.*/}};b.$$getDefaultValue=function(e){if(!s(e.value))return e.value;if(!f)throw new Error("Injectable functions cannot be called at configuration time");return f.invoke(e.value)},this.caseInsensitive=function(e){return D(e)&&(p=e),p},this.strictMode=function(e){return D(e)&&(v=e),v},this.defaultSquashPolicy=function(e){if(!D(e))return m;if(e!==!0&&e!==!1&&!U(e))throw new Error("Invalid squash policy: "+e+". Valid policies: false, true, arbitrary-string");return m=e,e},this.compile=function(e,t){return new y(e,H(i(),t))},this.isMatcher=function(e){if(!z(e))return!1;var t=!0;return G(y.prototype,function(r,n){T(r)&&(t=t&&D(e[n])&&T(e[n]))}),t},this.type=function(e,t,r){if(!D(t))return $[e];if($.hasOwnProperty(e))throw new Error("A type named '"+e+"' has already been defined.");return $[e]=new w(H({name:e},t)),r&&(S.push({name:e,def:r}),g||l()),this},G(x,function(e,t){$[t]=new w(H({name:t},e))}),$=n($,{}),this.$get=["$injector",function(e){return f=e,g=!1,l(),G(x,function(e,t){$[t]||($[t]=new w(e))}),this}],this.Param=function(e,n,a,i){function l(e){var t=z(e)?o(e):[];return u(t,"value")===-1&&u(t,"type")===-1&&u(t,"squash")===-1&&u(t,"array")===-1&&(e={value:e}),e.$$fn=s(e.value)?e.value:function(){return e.value},e}function c(r,n,a){if(r.type&&n)throw new Error("Param '"+e+"' has two type configurations.");return n?n:r.type?t.isString(r.type)?$[r.type]:r.type instanceof w?r.type:new w(r.type):"config"===a?$.any:$.string}function p(){return H({array:"search"===i&&"auto"},e.match(/\[\]$/)?{array:!0}:{},a).array}function v(e,t){var r=e.squash;if(!t||r===!1)return!1;if(!D(r)||null==r)return m;if(r===!0||U(r))return r;throw new Error("Invalid squash policy: '"+r+"'. Valid policies: false, true, or arbitrary string")}function g(e,t,n,a){var i,o,s=[{from:"",to:n||t?r:""},{from:null,to:n||t?r:""}];return i=L(e.replace)?e.replace:[],U(a)&&i.push({from:a,to:r}),o=d(i,function(e){return e.from}),h(s,function(e){return u(o,e.from)===-1}).concat(i)}function y(){if(!f)throw new Error("Injectable functions cannot be called at configuration time");var e=f.invoke(a.$$fn);if(null!==e&&e!==r&&!x.type.is(e))throw new Error("Default value ("+e+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return e}function b(e){function t(e){return function(t){return t.from===e}}function r(e){var r=d(h(x.replace,t(e)),function(e){return e.to});return r.length?r[0]:e}return e=r(e),D(e)?x.type.$normalize(e):y()}function S(){return"{Param:"+e+" "+n+" squash: '"+j+"' optional: "+P+"}"}var x=this;a=l(a),n=c(a,n,i);var E=p();n=E?n.$asArray(E,"search"===i):n,"string"!==n.name||E||"path"!==i||a.value!==r||(a.value="");var P=a.value!==r,j=v(a,P);H(this,{id:e,type:n,location:i,array:E,squash:j,replace:g(a,E,P,j),isOptional:P,value:b,dynamic:r,config:a,toString:S})},c.prototype={$$new:function(){return n(this,H(new c,{$$parent:this}))},$$keys:function(){for(var e=[],t=[],r=this,n=o(c.prototype);r;)t.push(r),r=r.$$parent;return t.reverse(),G(t,function(t){G(o(t),function(t){u(e,t)===-1&&u(n,t)===-1&&e.push(t)})}),e},$$values:function(e){var t={},r=this;return G(r.$$keys(),function(n){t[n]=r[n].value(e&&e[n])}),t},$$equals:function(e,t){var r=!0,n=this;return G(n.$$keys(),function(a){var i=e&&e[a],o=t&&t[a];n[a].type.equals(i,o)||(r=!1)}),r},$$validates:function(e){var n,a,i,o,u,s=this.$$keys();for(n=0;n<s.length&&(a=this[s[n]],(i=e[s[n]])!==r&&null!==i||!a.isOptional);n++){if(o=a.type.$normalize(i),!a.type.is(o))return!1;if(u=a.type.encode(o),t.isString(u)&&!a.type.pattern.exec(u))return!1}return!0},$$parent:r},this.ParamSet=c}function S(e,n){function a(e){var t=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);return null!=t?t[1].replace(/\\(.)/g,"$1"):""}function i(e,t){return e.replace(/\$(\$|\d{1,2})/,function(e,r){return t["$"===r?0:Number(r)]})}function o(e,t,r){if(!r)return!1;var n=e.invoke(t,t,{$match:r});return!D(n)||n}function u(n,a,i,o,u){function p(e,t,r){return"/"===m?e:t?m.slice(0,-1)+e:r?m.slice(1)+e:e}function h(e){function t(e){var t=e(i,n);return!!t&&(U(t)&&n.replace().url(t),!0)}if(!e||!e.defaultPrevented){v&&n.url();v=r;var a,o=l.length;for(a=0;a<o;a++)if(t(l[a]))return;c&&t(c)}}function d(){return s=s||a.$on("$locationChangeSuccess",h)}var v,m=o.baseHref(),$=n.url();return f||d(),{sync:function(){h()},listen:function(){return d()},update:function(e){if(e)return void($=n.url());n.url()!==$&&(n.url($),n.replace())},push:function(e,t,a){var i=e.format(t||{});null!==i&&t&&t["#"]&&(i+="#"+t["#"]),n.url(i),v=a&&a.$$avoidResync?n.url():r,a&&a.replace&&n.replace()},href:function(r,a,i){if(!r.validates(a))return null;var o=e.html5Mode();t.isObject(o)&&(o=o.enabled),o=o&&u.history;var s=r.format(a);if(i=i||{},o||null===s||(s="#"+e.hashPrefix()+s),null!==s&&a&&a["#"]&&(s+="#"+a["#"]),s=p(s,o,i.absolute),!i.absolute||!s)return s;var l=!o&&s?"/":"",c=n.port();return c=80===c||443===c?"":":"+c,[n.protocol(),"://",n.host(),c,l,s].join("")}}}var s,l=[],c=null,f=!1;this.rule=function(e){if(!T(e))throw new Error("'rule' must be a function");return l.push(e),this},this.otherwise=function(e){if(U(e)){var t=e;e=function(){return t}}else if(!T(e))throw new Error("'rule' must be a function");return c=e,this},this.when=function(e,t){var r,u=U(t);if(U(e)&&(e=n.compile(e)),!u&&!T(t)&&!L(t))throw new Error("invalid 'handler' in when()");var s={matcher:function(e,t){return u&&(r=n.compile(t),t=["$match",function(e){return r.format(e)}]),H(function(r,n){return o(r,t,e.exec(n.path(),n.search()))},{prefix:U(e.prefix)?e.prefix:""})},regex:function(e,t){if(e.global||e.sticky)throw new Error("when() RegExp must not be global or sticky");return u&&(r=t,t=["$match",function(e){return i(r,e)}]),H(function(r,n){return o(r,t,e.exec(n.path()))},{prefix:a(e)})}},l={matcher:n.isMatcher(e),regex:e instanceof RegExp};for(var c in l)if(l[c])return this.rule(s[c](e,t));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(e){e===r&&(e=!0),f=e},this.$get=u,u.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function x(e,a){function i(e){return 0===e.indexOf(".")||0===e.indexOf("^")}function p(e,t){if(!e)return r;var n=U(e),a=n?e:e.name;if(i(a)){if(!t)throw new Error("No reference point given for path '"+a+"'");t=p(t);for(var o=a.split("."),u=0,s=o.length,l=t;u<s;u++)if(""!==o[u]||0!==u){if("^"!==o[u])break;if(!l.parent)throw new Error("Path '"+a+"' not valid for state '"+t.name+"'");l=l.parent}else l=t;o=o.slice(u).join("."),a=l.name+(l.name&&o?".":"")+o}var c=j[a];return!c||!n&&(n||c!==e&&c.self!==e)?r:c}function h(e,t){k[e]||(k[e]=[]),k[e].push(t)}function m(e){for(var t=k[e]||[];t.length;)$(t.shift())}function $(t){t=n(t,{self:t,resolve:t.resolve||{},toString:function(){return this.name}});var r=t.name;if(!U(r)||r.indexOf("@")>=0)throw new Error("State must have a valid name");if(j.hasOwnProperty(r))throw new Error("State '"+r+"' is already defined");var a=r.indexOf(".")!==-1?r.substring(0,r.lastIndexOf(".")):U(t.parent)?t.parent:z(t.parent)&&U(t.parent.name)?t.parent.name:"";if(a&&!j[a])return h(a,t.self);for(var i in C)T(C[i])&&(t[i]=C[i](t,C.$delegates[i]));return j[r]=t,!t[A]&&t.url&&e.when(t.url,["$match","$stateParams",function(e,r){P.$current.navigable==t&&l(e,r)||P.transitionTo(t,e,{inherit:!0,location:!1})}]),m(r),t}function g(e){return e.indexOf("*")>-1}function y(e){for(var t=e.split("."),r=P.$current.name.split("."),n=0,a=t.length;n<a;n++)"*"===t[n]&&(r[n]="*");return"**"===t[0]&&(r=r.slice(u(r,t[1])),r.unshift("**")),"**"===t[t.length-1]&&(r.splice(u(r,t[t.length-2])+1,Number.MAX_VALUE),r.push("**")),t.length==r.length&&r.join("")===t.join("")}function w(e,t){return U(e)&&!D(t)?C[e]:T(t)&&U(e)?(C[e]&&!C.$delegates[e]&&(C.$delegates[e]=C[e]),C[e]=t,this):this}function b(e,t){return z(e)?t=e:t.name=e,$(t),this}function S(e,a,i,u,l,f,h,m,$){function w(t,r,n,i){var o=e.$broadcast("$stateNotFound",t,r,n);if(o.defaultPrevented)return h.update(),O;if(!o.retry)return null;if(i.$retry)return h.update(),I;var u=P.transition=a.when(o.retry);return u.then(function(){return u!==P.transition?(e.$broadcast("$stateChangeCancel",t.to,t.toParams,r,n),k):(t.options.$retry=!0,P.transitionTo(t.to,t.toParams,t.options))},function(){return O}),h.update(),u}function b(e,r,n,o,s,f){function p(){var r=[];return G(e.views,function(n,a){var o=n.resolve&&n.resolve!==e.resolve?n.resolve:{};o.$template=[function(){return i.load(a,{view:n,locals:s.globals,params:h,notify:f.notify})||""}],r.push(l.resolve(o,s.globals,s.resolve,e).then(function(r){if(T(n.controllerProvider)||L(n.controllerProvider)){var i=t.extend({},o,s.globals);r.$$controller=u.invoke(n.controllerProvider,null,i)}else r.$$controller=n.controller;r.$$state=e,r.$$controllerAs=n.controllerAs,r.$$resolveAs=n.resolveAs,s[a]=r}))}),a.all(r).then(function(){return s.globals})}var h=n?r:c(e.params.$$keys(),r),d={$stateParams:h};s.resolve=l.resolve(e.resolve,d,s.resolve,e);var v=[s.resolve.then(function(e){s.globals=e})];return o&&v.push(o),a.all(v).then(p).then(function(e){return s})}var S=new Error("transition superseded"),k=v(a.reject(S)),C=v(a.reject(new Error("transition prevented"))),O=v(a.reject(new Error("transition aborted"))),I=v(a.reject(new Error("transition failed")));return E.locals={resolve:null,globals:{$stateParams:{}}},P={params:{},current:E.self,$current:E,transition:null},P.reload=function(e){return P.transitionTo(P.current,f,{reload:e||!0,inherit:!1,notify:!0})},P.go=function(e,t,r){return P.transitionTo(e,t,H({inherit:!0,relative:P.$current},r))},P.transitionTo=function(t,r,i){r=r||{},i=H({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},i||{});var o,l=P.$current,d=P.params,m=l.path,$=p(t,i.relative),g=r["#"];if(!D($)){var y={to:t,toParams:r,options:i},j=w(y,l.self,d,i);if(j)return j;if(t=y.to,r=y.toParams,i=y.options,$=p(t,i.relative),!D($)){if(!i.relative)throw new Error("No such state '"+t+"'");throw new Error("Could not resolve '"+t+"' from state '"+i.relative+"'")}}if($[A])throw new Error("Cannot transition to abstract state '"+t+"'");if(i.inherit&&(r=s(f,r||{},P.$current,$)),!$.params.$$validates(r))return I;r=$.params.$$values(r),t=$;var O=t.path,q=0,M=O[q],V=E.locals,_=[];if(i.reload){if(U(i.reload)||z(i.reload)){if(z(i.reload)&&!i.reload.name)throw new Error("Invalid reload state object");var F=i.reload===!0?m[0]:p(i.reload);if(i.reload&&!F)throw new Error("No such reload state '"+(U(i.reload)?i.reload:i.reload.name)+"'");for(;M&&M===m[q]&&M!==F;)V=_[q]=M.locals,q++,M=O[q]}}else for(;M&&M===m[q]&&M.ownParams.$$equals(r,d);)V=_[q]=M.locals,q++,M=O[q];if(x(t,r,l,d,V,i))return g&&(r["#"]=g),P.params=r,Y(P.params,f),Y(c(t.params.$$keys(),f),t.locals.globals.$stateParams),i.location&&t.navigable&&t.navigable.url&&(h.push(t.navigable.url,r,{$$avoidResync:!0,replace:"replace"===i.location}),h.update(!0)),P.transition=null,a.when(P.current);if(r=c(t.params.$$keys(),r||{}),g&&(r["#"]=g),i.notify&&e.$broadcast("$stateChangeStart",t.self,r,l.self,d,i).defaultPrevented)return e.$broadcast("$stateChangeCancel",t.self,r,l.self,d),null==P.transition&&h.update(),C;for(var R=a.when(V),N=q;N<O.length;N++,M=O[N])V=_[N]=n(V),R=b(M,r,M===t,R,V,i);var T=P.transition=R.then(function(){var n,a,o;if(P.transition!==T)return e.$broadcast("$stateChangeCancel",t.self,r,l.self,d),k;for(n=m.length-1;n>=q;n--)o=m[n],o.self.onExit&&u.invoke(o.self.onExit,o.self,o.locals.globals),o.locals=null;for(n=q;n<O.length;n++)a=O[n],a.locals=_[n],a.self.onEnter&&u.invoke(a.self.onEnter,a.self,a.locals.globals);return P.transition!==T?(e.$broadcast("$stateChangeCancel",t.self,r,l.self,d),k):(P.$current=t,P.current=t.self,P.params=r,Y(P.params,f),P.transition=null,i.location&&t.navigable&&h.push(t.navigable.url,t.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===i.location}),i.notify&&e.$broadcast("$stateChangeSuccess",t.self,r,l.self,d),h.update(!0),P.current)}).then(null,function(n){return n===S?k:P.transition!==T?(e.$broadcast("$stateChangeCancel",t.self,r,l.self,d),k):(P.transition=null,o=e.$broadcast("$stateChangeError",t.self,r,l.self,d,n),o.defaultPrevented||h.update(),a.reject(n))});return v(T),T},P.is=function(e,t,n){n=H({relative:P.$current},n||{});var a=p(e,n.relative);return D(a)?P.$current===a&&(!t||o(t).reduce(function(e,r){var n=a.params[r];return e&&!n||n.type.equals(f[r],t[r])},!0)):r},P.includes=function(e,t,n){if(n=H({relative:P.$current},n||{}),U(e)&&g(e)){if(!y(e))return!1;e=P.$current.name}var a=p(e,n.relative);if(!D(a))return r;if(!D(P.$current.includes[a.name]))return!1;if(!t)return!0;for(var i=o(t),u=0;u<i.length;u++){var s=i[u],l=a.params[s];if(l&&!l.type.equals(f[s],t[s]))return!1}return o(t).reduce(function(e,r){var n=a.params[r];return e&&!n||n.type.equals(f[r],t[r])},!0)},P.href=function(e,t,n){n=H({lossy:!0,inherit:!0,absolute:!1,relative:P.$current},n||{});var a=p(e,n.relative);if(!D(a))return null;n.inherit&&(t=s(f,t||{},P.$current,a));var i=a&&n.lossy?a.navigable:a;return i&&i.url!==r&&null!==i.url?h.href(i.url,c(a.params.$$keys().concat("#"),t||{}),{absolute:n.absolute}):null},P.get=function(e,t){if(0===arguments.length)return d(o(j),function(e){return j[e].self});var r=p(e,t||P.$current);return r&&r.self?r.self:null},P}function x(e,t,r,n,a,i){function o(e,t,r){function n(t){return"search"!=e.params[t].location}var a=e.params.$$keys().filter(n),i=f.apply({},[e.params].concat(a));return new K.ParamSet(i).$$equals(t,r)}if(!i.reload&&e===r&&(a===r.locals||e.self.reloadOnSearch===!1&&o(r,n,t)))return!0}var E,P,j={},k={},A="abstract",C={parent:function(e){if(D(e.parent)&&e.parent)return p(e.parent);var t=/^(.+)\.[^.]+$/.exec(e.name);return t?p(t[1]):E},data:function(e){return e.parent&&e.parent.data&&(e.data=e.self.data=n(e.parent.data,e.data)),e.data},url:function(e){var t=e.url,r={params:e.params||{}};if(U(t))return"^"==t.charAt(0)?a.compile(t.substring(1),r):(e.parent.navigable||E).url.concat(t,r);if(!t||a.isMatcher(t))return t;throw new Error("Invalid url '"+t+"' in state '"+e+"'")},navigable:function(e){return e.url?e:e.parent?e.parent.navigable:null},ownParams:function(e){var t=e.url&&e.url.params||new K.ParamSet;return G(e.params||{},function(e,r){t[r]||(t[r]=new K.Param(r,null,e,"config"))}),t},params:function(e){var t=f(e.ownParams,e.ownParams.$$keys());return e.parent&&e.parent.params?H(e.parent.params.$$new(),t):new K.ParamSet},views:function(e){var t={};return G(D(e.views)?e.views:{"":e},function(r,n){n.indexOf("@")<0&&(n+="@"+e.parent.name),r.resolveAs=r.resolveAs||e.resolveAs||"$resolve",t[n]=r}),t},path:function(e){return e.parent?e.parent.path.concat(e):[]},includes:function(e){var t=e.parent?H({},e.parent.includes):{};return t[e.name]=!0,t},$delegates:{}};E=$({name:"",url:"^",views:null,abstract:!0}),E.navigable=null,this.decorator=w,this.state=b,this.$get=S,S.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function E(){function e(e,t){return{load:function(e,r){var n;return r=H({template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}},r),r.view&&(n=t.fromConfig(r.view,r.params,r.locals)),n}}}this.$get=e,e.$inject=["$rootScope","$templateFactory"]}function P(){var e=!1;this.useAnchorScroll=function(){e=!0},this.$get=["$anchorScroll","$timeout",function(t,r){return e?t:function(e){return r(function(){e[0].scrollIntoView()},0,!1)}}]}function j(e,r,n,a,i){function o(){return r.has?function(e){return r.has(e)?r.get(e):null}:function(e){try{return r.get(e)}catch(e){return null}}}function u(e,r){var n=function(){return{enter:function(e,t,r){t.after(e),r()},leave:function(e,t){e.remove(),t()}}};if(c)return{enter:function(e,r,n){t.version.minor>2?c.enter(e,null,r).then(n):c.enter(e,null,r,n)},leave:function(e,r){t.version.minor>2?c.leave(e).then(r):c.leave(e,r)}};if(l){var a=l&&l(r,e);return{enter:function(e,t,r){a.enter(e,null,t),r()},leave:function(e,t){a.leave(e),t()}}}return n()}var s=o(),l=s("$animator"),c=s("$animate");return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(r,o,s){return function(r,o,l){function c(){if(p&&(p.remove(),p=null),d&&(d.$destroy(),d=null),h){var e=h.data("$uiViewAnim");g.leave(h,function(){e.$$animLeave.resolve(),p=null}),p=h,h=null}}function f(u){var f,p=A(r,l,o,a),y=p&&e.$current&&e.$current.locals[p];if(u||y!==v){f=r.$new(),v=e.$current.locals[p],f.$emit("$viewContentLoading",p);h=s(f,function(e){var a=i.defer(),u=i.defer(),s={$animEnter:a.promise,$animLeave:u.promise,$$animLeave:u};e.data("$uiViewAnim",s),g.enter(e,o,function(){a.resolve(),d&&d.$emit("$viewContentAnimationEnded"),(t.isDefined($)&&!$||r.$eval($))&&n(e)}),c()}),d=f,d.$emit("$viewContentLoaded",p),d.$eval(m)}}var p,h,d,v,m=l.onload||"",$=l.autoscroll,g=u(l,r);o.inheritedData("$uiView");r.$on("$stateChangeSuccess",function(){f(!1)}),f(!0)}}}}function k(e,r,n,a){return{restrict:"ECA",priority:-400,compile:function(i){var o=i.html();return i.empty?i.empty():i[0].innerHTML=null,function(i,u,s){var l=n.$current,c=A(i,s,u,a),f=l&&l.locals[c];if(!f)return u.html(o),void e(u.contents())(i);u.data("$uiView",{name:c,state:f.$$state}),u.html(f.$template?f.$template:o);var p=t.extend({},f);i[f.$$resolveAs]=p;var h=e(u.contents());if(f.$$controller){f.$scope=i,f.$element=u;var d=r(f.$$controller,f);f.$$controllerAs&&(i[f.$$controllerAs]=d,i[f.$$controllerAs][f.$$resolveAs]=p),T(d.$onInit)&&d.$onInit(),u.data("$ngControllerController",d),u.children().data("$ngControllerController",d)}h(i)}}}}function A(e,t,r,n){var a=n(t.uiView||t.name||"")(e),i=r.inheritedData("$uiView");return a.indexOf("@")>=0?a:a+"@"+(i?i.state.name:"")}function C(e,t){var r,n=e.match(/^\s*({[^}]*})\s*$/);if(n&&(e=t+"("+n[1]+")"),!(r=e.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/))||4!==r.length)throw new Error("Invalid state ref '"+e+"'");return{state:r[1],paramExpr:r[3]||null}}function O(e){var t=e.parent().inheritedData("$uiView");if(t&&t.state&&t.state.name)return t.state}function I(e){var t="[object SVGAnimatedString]"===Object.prototype.toString.call(e.prop("href")),r="FORM"===e[0].nodeName;return{attr:r?"action":t?"xlink:href":"href",isAnchor:"A"===e.prop("tagName").toUpperCase(),clickable:!r}}function q(e,t,r,n,a){return function(i){var o=i.which||i.button,u=a();if(!(o>1||i.ctrlKey||i.metaKey||i.shiftKey||e.attr("target"))){var s=r(function(){t.go(u.state,u.params,u.options)});i.preventDefault();var l=n.isAnchor&&!u.href?1:0;i.preventDefault=function(){l--<=0&&r.cancel(s)}}}}function M(e,t){return{relative:O(e)||t.$current,inherit:!0}}function V(e,r){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,a,i,o){var u,s=C(i.uiSref,e.current.name),l={state:s.state,href:null,params:null},c=I(a),f=o[1]||o[0],p=null;l.options=H(M(a,e),i.uiSrefOpts?n.$eval(i.uiSrefOpts):{});var h=function(r){r&&(l.params=t.copy(r)),l.href=e.href(s.state,l.params,l.options),p&&p(),f&&(p=f.$$addStateInfo(s.state,l.params)),null!==l.href&&i.$set(c.attr,l.href)};s.paramExpr&&(n.$watch(s.paramExpr,function(e){e!==l.params&&h(e)},!0),l.params=t.copy(n.$eval(s.paramExpr))),h(),c.clickable&&(u=q(a,e,r,c,function(){return l}),a[a.on?"on":"bind"]("click",u),n.$on("$destroy",function(){a[a.off?"off":"unbind"]("click",u)}))}}}function _(e,t){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(r,n,a,i){function o(t){p.state=t[0],p.params=t[1],p.options=t[2],p.href=e.href(p.state,p.params,p.options),h&&h(),l&&(h=l.$$addStateInfo(p.state,p.params)),p.href&&a.$set(s.attr,p.href)}var u,s=I(n),l=i[1]||i[0],c=[a.uiState,a.uiStateParams||null,a.uiStateOpts||null],f="["+c.map(function(e){return e||"null"}).join(", ")+"]",p={state:null,params:null,options:null,href:null},h=null;r.$watch(f,o,!0),o(r.$eval(f)),s.clickable&&(u=q(n,e,t,s,function(){return p}),n[n.on?"on":"bind"]("click",u),r.$on("$destroy",function(){n[n.off?"off":"unbind"]("click",u)}))}}}function F(e,t,r){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(t,n,a,i){function o(t,r,a){var i=e.get(t,O(n)),o=u(t,r),s={state:i||{name:t},params:r,hash:o};return v.push(s),m[o]=a,function(){var e=v.indexOf(s);e!==-1&&v.splice(e,1)}}function u(e,r){if(!U(e))throw new Error("state should be a string");return z(r)?e+J(r):(r=t.$eval(r),z(r)?e+J(r):e)}function s(){for(var e=0;e<v.length;e++)f(v[e].state,v[e].params)?l(n,m[v[e].hash]):c(n,m[v[e].hash]),p(v[e].state,v[e].params)?l(n,h):c(n,h)}function l(e,t){i(function(){e.addClass(t)})}function c(e,t){e.removeClass(t)}function f(t,r){return e.includes(t.name,r)}function p(t,r){return e.is(t.name,r)}var h,d,v=[],m={};h=r(a.uiSrefActiveEq||"",!1)(t);try{d=t.$eval(a.uiSrefActive)}catch(e){}d=d||r(a.uiSrefActive||"",!1)(t),z(d)&&G(d,function(r,n){if(U(r)){var a=C(r,e.current.name);o(a.state,t.$eval(a.paramExpr),n)}}),this.$$addStateInfo=function(e,t){if(!(z(d)&&v.length>0)){var r=o(e,t,d);return s(),r}},t.$on("$stateChangeSuccess",s),s()}]}}function R(e){var t=function(t,r){return e.is(t,r)};return t.$stateful=!0,t}function N(e){var t=function(t,r,n){return e.includes(t,r,n)};return t.$stateful=!0,t}var D=t.isDefined,T=t.isFunction,U=t.isString,z=t.isObject,L=t.isArray,G=t.forEach,H=t.extend,Y=t.copy,J=t.toJson;t.module("ui.router.util",["ng"]),t.module("ui.router.router",["ui.router.util"]),t.module("ui.router.state",["ui.router.router","ui.router.util"]),t.module("ui.router",["ui.router.state"]),t.module("ui.router.compat",["ui.router"]),m.$inject=["$q","$injector"],t.module("ui.router.util").service("$resolve",m),t.module("ui.router.util").provider("$templateFactory",$);var K;y.prototype.concat=function(e,t){var r={caseInsensitive:K.caseInsensitive(),strict:K.strictMode(),squash:K.defaultSquashPolicy()};return new y(this.sourcePath+e+this.sourceSearch,H(r,t),this)},y.prototype.toString=function(){return this.source},y.prototype.exec=function(e,t){function r(e){function t(e){return e.split("").reverse().join("")}function r(e){return e.replace(/\\-/g,"-")}return d(d(t(e).split(/-(?!\\)/),t),r).reverse()}var n=this.regexp.exec(e);if(!n)return null;t=t||{};var a,i,o,u=this.parameters(),s=u.length,l=this.segments.length-1,c={};if(l!==n.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var f,p;for(a=0;a<l;a++){for(o=u[a],f=this.params[o],p=n[a+1],i=0;i<f.replace.length;i++)f.replace[i].from===p&&(p=f.replace[i].to);p&&f.array===!0&&(p=r(p)),D(p)&&(p=f.type.decode(p)),c[o]=f.value(p)}for(;a<s;a++){for(o=u[a],c[o]=this.params[o].value(t[o]),f=this.params[o],p=t[o],i=0;i<f.replace.length;i++)f.replace[i].from===p&&(p=f.replace[i].to);D(p)&&(p=f.type.decode(p)),c[o]=f.value(p)}return c},y.prototype.parameters=function(e){return D(e)?this.params[e]||null:this.$$paramNames},y.prototype.validates=function(e){return this.params.$$validates(e)},y.prototype.format=function(e){function t(e){return encodeURIComponent(e).replace(/-/g,function(e){return"%5C%"+e.charCodeAt(0).toString(16).toUpperCase()})}e=e||{};var r=this.segments,n=this.parameters(),a=this.params;if(!this.validates(e))return null;var i,o=!1,u=r.length-1,s=n.length,l=r[0];for(i=0;i<s;i++){var c=i<u,f=n[i],p=a[f],h=p.value(e[f]),v=p.isOptional&&p.type.equals(p.value(),h),m=!!v&&p.squash,$=p.type.encode(h);if(c){var g=r[i+1],y=i+1===u;if(m===!1)null!=$&&(l+=L($)?d($,t).join("-"):encodeURIComponent($)),l+=g;else if(m===!0){var w=l.match(/\/$/)?/\/?(.*)/:/(.*)/;l+=g.match(w)[1]}else U(m)&&(l+=m+g);y&&p.squash===!0&&"/"===l.slice(-1)&&(l=l.slice(0,-1))}else{if(null==$||v&&m!==!1)continue;if(L($)||($=[$]),0===$.length)continue;$=d($,encodeURIComponent).join("&"+f+"="),l+=(o?"&":"?")+f+"="+$,o=!0}}return l},w.prototype.is=function(e,t){return!0},w.prototype.encode=function(e,t){return e},w.prototype.decode=function(e,t){return e},w.prototype.equals=function(e,t){return e==t},w.prototype.$subPattern=function(){var e=this.pattern.toString();return e.substr(1,e.length-2)},w.prototype.pattern=/.*/,w.prototype.toString=function(){return"{Type:"+this.name+"}"},w.prototype.$normalize=function(e){return this.is(e)?e:this.decode(e)},w.prototype.$asArray=function(e,t){function n(e,t){function n(e,t){return function(){return e[t].apply(e,arguments)}}function a(e){return L(e)?e:D(e)?[e]:[]}function i(e){switch(e.length){case 0:return r;case 1:return"auto"===t?e[0]:e;default:return e}}function o(e){return!e}function u(e,t){return function(r){if(L(r)&&0===r.length)return r;r=a(r);var n=d(r,e);return t===!0?0===h(n,o).length:i(n)}}function s(e){return function(t,r){var n=a(t),i=a(r);if(n.length!==i.length)return!1;for(var o=0;o<n.length;o++)if(!e(n[o],i[o]))return!1;return!0}}this.encode=u(n(e,"encode")),this.decode=u(n(e,"decode")),this.is=u(n(e,"is"),!0),this.equals=s(n(e,"equals")),this.pattern=e.pattern,this.$normalize=u(n(e,"$normalize")),this.name=e.name,this.$arrayMode=t}if(!e)return this;if("auto"===e&&!t)throw new Error("'auto' array mode is for query parameters only");return new n(this,e)},t.module("ui.router.util").provider("$urlMatcherFactory",b),t.module("ui.router.util").run(["$urlMatcherFactory",function(e){}]),S.$inject=["$locationProvider","$urlMatcherFactoryProvider"],t.module("ui.router.router").provider("$urlRouter",S),x.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],t.module("ui.router.state").factory("$stateParams",function(){return{}}).constant("$state.runtime",{autoinject:!0}).provider("$state",x).run(["$injector",function(e){e.get("$state.runtime").autoinject&&e.get("$state")}]),E.$inject=[],t.module("ui.router.state").provider("$view",E),t.module("ui.router.state").provider("$uiViewScroll",P),j.$inject=["$state","$injector","$uiViewScroll","$interpolate","$q"],k.$inject=["$compile","$controller","$state","$interpolate"],t.module("ui.router.state").directive("uiView",j),t.module("ui.router.state").directive("uiView",k),V.$inject=["$state","$timeout"],_.$inject=["$state","$timeout"],F.$inject=["$state","$stateParams","$interpolate"],t.module("ui.router.state").directive("uiSref",V).directive("uiSrefActive",F).directive("uiSrefActiveEq",F).directive("uiState",_),R.$inject=["$state"],N.$inject=["$state"],t.module("ui.router.state").filter("isState",R).filter("includedByState",N)}(window,window.angular)},function(e,t,r){"use strict";function n(e,t){this.location=e,this.mainService=t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,n.prototype.isActive=function(e){return this.mainService.getClass(this.location,e)}},function(e,t,r){"use strict";function n(){"ngInject";this.getClass=function(e,t){return e.path().substr(0,t.length)===t?"active":""}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){t.otherwise("/front-end"),e.state("resume-cv",{url:"/resume-cv",template:"<resume-cv></resume-cv>"}).state("todoList",{url:"/computer-graphics",template:"<computer-graphics></computer-graphics>"}).state("front-end",{url:"/front-end",template:"<front-end></front-end>"})}},function(e,t){e.exports="<div class=wrapper> <span>cg</span> </div> "},function(e,t){e.exports='<div id=carouselExampleIndicators class="carousel slide" data-ride=carousel> <ol class=carousel-indicators> <li data-target=#carouselExampleIndicators data-slide-to=0 class=active></li> <li data-target=#carouselExampleIndicators data-slide-to=1></li> <li data-target=#carouselExampleIndicators data-slide-to=2></li> <li data-target=#carouselExampleIndicators data-slide-to=3></li> <li data-target=#carouselExampleIndicators data-slide-to=4></li> </ol> <div class=carousel-inner role=listbox> <figure class="carousel-item active"> <img class="d-block img-fluid" ng-src=img/Awesome_Site.jpg alt="First slide"> <figcaption class="carousel-caption d-none d-md-block"> <h3 class=heading><a href=https://siarheidrozd.github.io/css-framework/ target=_blank>Framework</a></h3> <p class=description> <span>css-framework(bootstrap plus sass)</span> </p> </figcaption> </figure> <figure class=carousel-item> <img class="d-block img-fluid" ng-src=img/HTML-CSS_Final_Task.jpg alt="Second slide"> <figcaption class="carousel-caption d-none d-md-block"> <h3 class=heading><a href=https://siarheidrozd.github.io/css-final-task/ target=_blank>Final task</a></h3> <p class=description> <span>Pure CSS and HTML layout</span> </p> </figcaption> </figure> <figure class=carousel-item> <img class="d-block img-fluid" ng-src=img/Responsive.jpg alt=...> <figcaption class="carousel-caption d-none d-md-block"> <h3 class=heading> <a href=https://siarheidrozd.github.io/html-css-responsive/ target=_blank>Responsive</a> </h3> <p class=description> <span>dummy text</span> </p> </figcaption> </figure> <figure class=carousel-item> <img class="d-block img-fluid" ng-src=img/Simple_Game.jpg alt=...> <figcaption class="carousel-caption d-none d-md-block"> <h3 class=heading> <a href=https://siarheidrozd.github.io/simpleGame/ target=_blank>Simple Game</a> </h3> <p class=description> <span>use chrome for better experience</span> </p> </figcaption> </figure> <figure class=carousel-item> <img class="d-block img-fluid" ng-src=img/YouTube.jpg alt=...> <figcaption class="carousel-caption d-none d-md-block"> <h3 class=heading> <a href=https://siarheidrozd.github.io/Search-Youtube/ target=_blank>YouTube Searcher</a> </h3> <p class=description> <span>dummy text</span> </p> </figcaption> </figure> </div> <div class=wall></div> <a class=carousel-control-prev href=#carouselExampleIndicators role=button data-slide=prev> <span class=carousel-control-prev-icon aria-hidden=true></span> <span class=sr-only>Previous</span> </a> <a class=carousel-control-next href=#carouselExampleIndicators role=button data-slide=next> <span class=carousel-control-next-icon aria-hidden=true></span> <span class=sr-only>Next</span> </a> </div> '},function(e,t){e.exports="<div class=wrapper> <span>resume</span> </div>"},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),i=n(a),o=r(1),u=n(o),s=r(2),l=n(s);r(0);var c=angular.module("Portfolio",["ui.router"]).config(i.default).service("mainService",l.default).controller("mainController",["$location","mainService",u.default]).directive("mainPart",function(){return{restrict:"AE",controller:"mainController",controllerAs:"main"}}).directive("frontEnd",function(){return{restrict:"AE",template:r(5)}}).directive("resumeCv",function(){return{restrict:"AE",template:r(6)}}).directive("computerGraphics",function(){return{restrict:"AE",template:r(4)}});r(0),t.default=c}]);