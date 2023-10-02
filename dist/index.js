"use strict";var c=function(u,a){return function(){return a||u((a={exports:{}}).exports,a),a.exports}};var p=c(function(j,q){
var t=require('@stdlib/math-base-special-abs/dist'),m=6;function M(u,a,n){var i,e,r;if(i=0,u<=0||n<=0)return i;if(n===1){if(e=u%m,e>0)for(r=0;r<e;r++)i+=t(a[r]);if(u<m)return i;for(r=e;r<u;r+=m)i+=t(a[r])+t(a[r+1])+t(a[r+2])+t(a[r+3])+t(a[r+4])+t(a[r+5]);return i}for(u*=n,r=0;r<u;r+=n)i+=t(a[r]);return i}q.exports=M
});var b=c(function(k,y){
var v=require('@stdlib/math-base-special-abs/dist'),s=6;function l(u,a,n,i){var e,r,o,f;if(e=0,u<=0)return e;if(r=i,n===1){if(o=u%s,o>0)for(f=0;f<o;f++)e+=v(a[r]),r+=n;if(u<s)return e;for(f=o;f<u;f+=s)e+=v(a[r])+v(a[r+1])+v(a[r+2])+v(a[r+3])+v(a[r+4])+v(a[r+5]),r+=s;return e}for(f=0;f<u;f++)e+=v(a[r]),r+=n;return e}y.exports=l
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=p(),R=b();O(g,"ndarray",R);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
