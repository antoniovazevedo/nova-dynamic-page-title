!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){e.exports=t(1)},function(e,r){function t(e){var r=Nova.config.resources.filter(function(r){return r.uriKey==e});return r=void 0!=r[0]?r[0]:null}var n=null,a=0;Nova.booting(function(e,r,o){var u=document.title;r.afterEach(function(e,r,o){var i=t(e.params.resourceName),l=null;void 0!==e.params.relatedResourceName&&(l=t(e.params.relatedResourceName));var c=e.params.resourceName,s=e.name;0===s.indexOf("custom-")&&(s=s.substr(7)),i&&(c="index"==s?i.label:"detail"==s?i.singularLabel+" #"+e.params.resourceId:"edit-attached"==s?"Editar "+i.singularLabel+" - > "+l.singularLabel:"edit"==s?"Editar "+i.singularLabel+" #"+e.params.resourceId:_.startCase(e.name)+" "+i.singularLabel),document.title=c?c+" | "+u:u,a||(n=setInterval(function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e=void 0!==e&&e?e:document.title;var r=!1;a++;var t=document.getElementById("inner-content").querySelector("h1");t&&void 0!==t.innerText&&t.innerText.trim().length&&(document.title=t.innerText.replace("← / ","").trim()+" | "+e,r=!0),(r||a>10)&&(clearInterval(n),a=0)}(u)},1e3)),"function"==typeof o&&o()})})}]);