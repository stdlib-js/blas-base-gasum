"use strict";var y=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var p=y(function(E,g){
var o=require('@stdlib/math-base-special-abs/dist'),q=6;function O(i,e,t,c){var u,r,n,a,f,v;if(u=e.data,r=e.accessors[0],n=0,a=c,t===0)return n=o(r(u,a)*i),n;if(t===1){if(f=i%q,f>0)for(v=0;v<f;v++)n+=o(r(u,a)),a+=t;if(i<q)return n;for(v=f;v<i;v+=q)n+=o(r(u,a))+o(r(u,a+1))+o(r(u,a+2))+o(r(u,a+3))+o(r(u,a+4))+o(r(u,a+5)),a+=q;return n}for(v=0;v<i;v++)n+=o(r(u,a)),a+=t;return n}g.exports=O
});var b=y(function(F,l){
var s=require('@stdlib/math-base-special-abs/dist'),P=require('@stdlib/array-base-arraylike2object/dist'),R=p(),m=6;function h(i,e,t,c){var u,r,n,a,f;if(u=0,i<=0)return u;if(f=P(e),f.accessorProtocol)return R(i,f,t,c);if(r=c,t===0)return u=s(e[r]*i),u;if(t===1){if(n=i%m,n>0)for(a=0;a<n;a++)u+=s(e[r]),r+=t;if(i<m)return u;for(a=n;a<i;a+=m)u+=s(e[r])+s(e[r+1])+s(e[r+2])+s(e[r+3])+s(e[r+4])+s(e[r+5]),r+=m;return u}for(a=0;a<i;a++)u+=s(e[r]),r+=t;return u}l.exports=h
});var j=y(function(G,M){
var w=require('@stdlib/strided-base-stride2offset/dist'),z=b();function A(i,e,t){return z(i,e,t,w(i,t))}M.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=j(),C=b();B(k,"ndarray",C);module.exports=k;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
