"use strict";var y=function(i,u){return function(){return u||i((u={exports:{}}).exports,u),u.exports}};var p=y(function(E,g){
var o=require('@stdlib/math-base-special-abs/dist'),q=6;function O(i,u,n,c){var e,r,t,a,f,v;if(e=u.data,r=u.accessors[0],t=0,a=c,n===0)return t=o(r(e,a)*i),t;if(n===1){if(f=i%q,f>0)for(v=0;v<f;v++)t+=o(r(e,a)),a+=n;if(i<q)return t;for(v=f;v<i;v+=q)t+=o(r(e,a))+o(r(e,a+1))+o(r(e,a+2))+o(r(e,a+3))+o(r(e,a+4))+o(r(e,a+5)),a+=q;return t}for(v=0;v<i;v++)t+=o(r(e,a)),a+=n;return t}g.exports=O
});var b=y(function(F,l){
var s=require('@stdlib/math-base-special-abs/dist'),P=require('@stdlib/array-base-arraylike2object/dist'),R=p(),m=6;function h(i,u,n,c){var e,r,t,a,f;if(e=0,i<=0)return e;if(f=P(u),f.accessorProtocol)return R(i,f,n,c);if(r=c,n===0)return e=s(u[r]*i),e;if(n===1){if(t=i%m,t>0)for(a=0;a<t;a++)e+=s(u[r]),r+=n;if(i<m)return e;for(a=t;a<i;a+=m)e+=s(u[r])+s(u[r+1])+s(u[r+2])+s(u[r+3])+s(u[r+4])+s(u[r+5]),r+=m;return e}for(a=0;a<i;a++)e+=s(u[r]),r+=n;return e}l.exports=h
});var j=y(function(G,M){
var w=require('@stdlib/strided-base-stride2offset/dist'),z=b();function A(i,u,n){return z(i,u,n,w(i,n))}M.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=j(),C=b();B(k,"ndarray",C);module.exports=k;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
