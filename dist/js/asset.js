!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){e.exports=t(1)},function(e,r){function t(e){var r=Nova.config.resources.filter(function(r){return r.uriKey==e});return r=void 0!=r[0]?r[0]:null}var n=null,a=0;function o(){var e=!1;a++;var r=document.getElementById("inner-content").querySelector("h1");r&&void 0!==r.innerText&&r.innerText.trim().length&&(document.title=r.innerText.replace("← / ","").trim()+" | "+originalTitle,e=!0),(e||a>10)&&(clearInterval(n),a=0)}Nova.booting(function(e,r,i){var u=document.title;r.afterEach(function(e,r,i){var l=t(e.params.resourceName),c=null;void 0!==e.params.relatedResourceName&&(c=t(e.params.relatedResourceName));var s=e.params.resourceName,d=e.name;0===d.indexOf("custom-")&&(d=d.substr(7)),a||(n=setInterval(function(){o()},1e3)),l&&(s="index"==d?l.label:"detail"==d?l.singularLabel+" #"+e.params.resourceId:"edit-attached"==d?"Editar "+l.singularLabel+" - > "+c.singularLabel:"edit"==d?"Editar "+l.singularLabel+" #"+e.params.resourceId:_.startCase(e.name)+" "+l.singularLabel),document.title=s?s+" | "+u:u,"function"==typeof i&&i()})})}]);