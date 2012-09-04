(function(t,n){function _(e){var t=e instanceof Array?[]:{};for(i in e){if(i==="clone")continue;e[i]&&typeof e[i]=="object"&&!Array.isArray(e[i])&&!e[i].nodeType?t[i]=_(e[i]):t[i]=e[i]}return t}function D(e,t,n,r){var i=[];for(var s in e)e[s][t]===n&&(r?i[b](_(e[s])):i[b](e[s]));return i.length?i:!1}function P(e,t){return Qt(M[y].random()*(t-e+1))+e}function H(){W=r[p]("canvas"),W[o]=q*U,W[u]=R*U,X=W.getContext("2d")}function B(){var e=0;for(var t=0;t<Z[m];t++)e+=Z[t].priority;var n=P(0,e-1);for(var t=0;t<Z[m];t++){if(n<Z[t].priority)return t;n-=Z[t].priority}return!1}function j(e,t){e.health-=t}function F(e,t){var n=e%t;return(e-n)/t}function I(e){for(var t=0;t<et.length;t++)et[t][s]===e&&et.splice(t,1)}function nt(){var e=r[v](".container");for(var t=0;t<e[m];t++)at(e[t],"click",it)}function rt(e){e.preventDefault()}function it(e){rt(e);var t=this;!t[E].contains("expensive")&&!ht()&&(Q=t[d]("span").innerText,sn(D(tt,s,Q)[0].cost))}function st(e){rt(e);if(ht()&&dt())if(e.which===2)Wt();else{var t=new qt(pt());Y[$.y][$.x]=t,Q="",on(),Zt()}dt()===null&&e.which===2&&(It().x!==$.x||It().y!==$.y)&&zt($.x,$.y)}function ot(e){$.x=e.pageX-W.offsetLeft,$.y=e.pageY-W.offsetTop,$.x=F($.x,U),$.y=F($.y,U)}function ut(){J="black",dt()&&ht()?J="green":dt()===x?J="blue":dt()||(J="red")}function at(e,t,n){ft(e,t,n),e.addEventListener(t,n,!0)}function ft(e,t,n){e.removeEventListener(t,n)}function lt(){var e=$.x*32,t=$.y*32;X.strokeStyle=J,X.lineWidth=2,X.strokeRect(e,t,32,32),X.strokeStyle="#FFF",X.strokeRect(e-2,t-2,36,36)}function ct(){var e=Ft().health,t=["money"],n="<li>",i="</li>",s="<code>",o="</code>",u=[];u[b]("Base Health: "+s+JSON.stringify(e)+o);for(var a=0;a<t[m];a++)typeof this[t[a]]=="function"?u[b](t[a]+": "+s+JSON.stringify(this[t[a]]())+o):u[b](t[a]+": "+s+JSON.stringify(this[t[a]])+o);r[p]("data")[h]="<ul>"+n+u.join(i+n)+i+"</ul>"}function ht(){return pt()?!0:!1}function pt(){return Q===x?!1:D(tt,s,Q)[0]}function dt(){var e=G[$.y][$.x];if(Y[$.y][$.x]!==0)return x;if(!ht())return!0;var t=D(et,"y",$.y);if(t[m]&&D(t,"x",$.x)[m])return!1;var t=D(et,"targetY",$.y);if(t[m]&&D(t,"targetX",$.x)[m])return!1;var n=wt($.x,$.y);return Zt(n)?pt().is==="terrain"?!0:e.is===N?!0:pt().is==="trap"&&e.is==="fast"?!0:!1:!1}function vt(){r[p](T)[h]=""}function mt(){r[p](T).children[m]>0&&vt();var e=[];for(var t=0;t<tt[m];t++){var n=tt[t],i=a+">"+n[s]+c,o=a+" class='cost'>$"+n[k]+c,u="<img src='"+n.image[C]+"'>",d=f+" class='container' title='"+n.is+": "+n[s]+" ($"+n[k]+")"+"'>"+u+i+o+l;e[b](""+d+"")}r[p](T)[h]=e.join(""),nt()}function gt(e,t){for(var n=0;n<t;n++){G[n]=G[n]||[],Y[n]=Y[n]||[];for(var r=0;r<e;r++){var i=B(),s=new xt(Z[i],"imageList");s.x=r,s.y=n,s.pos={"x":r,"y":n},G[n][r]=s,Y[n][r]=0}}var o=new qt(tt[0]);return o.x=P(e/2-1,t/2+1),o.y=P(e/2-1,t/2+1),Y[o.x][o.y]=o,[G,Y]}function yt(){for(var e=0;e<G[m];e++)for(var t=0;t<G[e][m];t++)X.drawImage(G[e][t].image,t*32,e*32)}function bt(){for(var e=0;e<G[m];e++)for(var t=0;t<G[e][m];t++)typeof Y[e][t]=="object"&&Dt(Y[e][t],t,e)}function wt(e,t){var r=[];for(var i=0;i<G.length;i++){r[i]=r[i]||[];for(var o=0;o<G[i].length;o++){var u=G[i][o];Y[i][o]&&Y[i][o][s]!=="base"&&(u.speed=0),r[i][o]=u}}return e!==n&&t!==n&&(r[t][e]=xt(Z[r[t][e].id],"imageList"),r[t][e].speed=0),r}function Et(e,t,n,r,i,s,o){var u,a,f=[],l=[];for(var c=0;c<e;c++)f[b](P(0,t-1,e)),l[b](P(0,t-1,e));for(u=0;u<e;u++)a=P(n,r),X.fillStyle=w+Kt(a/i)+","+Kt(a/s)+","+Kt(a/o)+")",X.fillRect(f[u],l[u],1,1)}function St(e,t,n,r,i,s){var a=[];W[o]=32,W[u]=32;for(var f=0;f<3;f++){num=P(i[0][1],i[0][2]),X.fillStyle=w+Kt(num/i[0][3])+","+Kt(num/i[0][4])+","+Kt(num/i[0][5])+")",X.fillRect(0,0,s,s);for(var l=0;l<i[m];l++)Et(i[l][0],s,i[l][1],i[l][2],i[l][3],i[l][4],i[l][5]);var c=new Image;c[C]=W[S](),a[b](c),X.clearRect(0,0,W[o],W[u])}var h=V;return V++,W[o]=q*s,W[u]=R*s,{"name":e,"is":t,"imageList":a,"images":a[m],"priority":n,"id":h,"speed":r}}function xt(e,t){for(var n in e)n===t?this.image=e[t][P(0,e.images-1)]:this[n]=e[n];return this}function Tt(){Z[b](St("grass",N,7,1,[[1024,175,230,1.3,1,2],[50,200,245,1,1.3,1.5],[100,125,175,2,1,2]],32)),Z[b](St("darkGrass",N,7,1,[[1024,150,205,1.3,1,2],[50,175,220,1,1.3,1.5],[100,100,150,2,1,2]],32)),Z[b](St("road","speed",4,.5,[[1024,0,0,1,1,1],[600,0,50,1,1,1]],32)),Z[b](St("water","slow",3,1.5,[[1024,100,200,1.5,1.5,1],[600,100,200,1.5,1.5,1]],32))}function Ct(){Nt=requestAnimationFrame(Ct),kt()}function kt(){X.clearRect(0,0,W[o],W[u]),yt(),ut(),lt(),Jt(),Yt(),bt(),ct()}function Lt(){r[p]("loading")[E].add("hidden")}function At(){for(i=0;i<et[m];i++){var t=et[i];for(e=0;e<t.path.length;e++){var n=t.path[e];X.beginPath(),X.fillStyle="rgba(100,100,100,0.5)",X.fillRect(n.x*U,n.y*U,U,U),X.fill()}}}function Ot(){for(i=0;i<et[m];i++){var t=et[i],n=wt($.x,$.y),r=It(),s=tn.search(n,n[t.y][t.x],n[r.y][r.x]);for(e=0;e<s.length;e++){var o=s[e];X.beginPath(),X.fillStyle="rgba(0,255,0,0.5)",X.fillRect(o.x*U,o.y*U,U,U),X.fill()}}}function Mt(){var e=[["base","special",1e4,1e3,15,25,255,0,0],["turret","basic",100,10,10,20,200,0,0]];for(var t=0;t<e[m];t++)tt[b](_t(e[t][0],e[t][1],e[t][2],e[t][3],e[t][4],e[t][5],e[t][6],e[t][7],e[t][8]))}function _t(e,t,n,r,i,s,a,f,l){var c=P(i,s),h=P(i,s)+Kt(c/1.5),p=P(i-3,s-3);W[o]=32,W[u]=32,X.clearRect(0,0,W[o],W[u]),jt(0,0,c,h,p,a,l,f);var d=new Image;return d[C]=W[S](),W[o]=q*U,W[u]=R*U,{"name":e,"is":t,"cost":n,"health":r,"fullHealth":r,"color":[a,l,f],"image":d,"width":c,"height":h,"depth":p}}function Dt(e,t,n){e.x=t,e.y=n,jt(U*t+(z-e[o]/2),U*n-e[u]+z,e[o],e[u],e.depth,e[A][0],e[A][1],e[A][2])}function Pt(e){return e-50<0?e:e-50}function Ht(e,t,n,r,i,s,o){X.beginPath(),X.rect(e,t,n,r),X.fillStyle=w+i+","+s+","+o+")",X.fill()}function Bt(){var e=new Image;e[C]=W[S](),images[b](e)}function jt(e,t,n,r,i,s,o,u){Ht(e,t+i/2,n,r,s,u,o),Ht(e,t,n,i,Pt(s),Pt(u),Pt(o))}function Ft(){for(var e=0;e<Y[m];e++)for(var t=0;t<Y[e][m];t++)if(Y[e][t][s]==="base")return Y[e][t];return!1}function It(){for(var e=0;e<Y[m];e++)for(var t=0;t<Y[e][m];t++)if(Y[e][t][s]==="base")return{"x":t,"y":e};return!1}function qt(e,t){var n=Object.create(null);for(var r in e)n[r]=e[r];return n}function Rt(e){j(Ft(),e.health)}function Ut(e,t){Y[t][e]=0}function zt(e,t){var n=Y[t][e];rn(n.cost*(n.health/n.fullHealth)/2),Ut(e,t)}function Wt(){var e=pt().cost;Q="",rn(e)}function Xt(){var e=[];et[b]($t("Scoot","normal","FFF000",12,1,125,e)),Zt()}function Vt(e,t,n){for(var r=0;r<n[m];r++)if(n[r][0]===e&&n[r][1]===t)return!1;return!0}function $t(e,t,n,r,i,s,o){var u=P(0,3),a=0,f=0;do if(u===0||u===2)a=P(0,q-1),u===2&&(f=q-1);else if(u===1||u===3)f=P(0,R-1),u===1&&(a=R-1);while(!Vt(a,f,o));o[b]([a,f]);var l=U/60*i;return{"name":e,"type":t,"color":n,"size":r,"speed":l,"health":s,"targetX":null,"targetY":null,"path":null,"x":a,"y":f,"pixelX":Gt(a,r),"pixelY":Gt(f,r),"pathIndex":0}}function Jt(){if(et[m])for(i=0;i<et[m];i++){var e=et[i];X.beginPath(),X.fillStyle=e[A],X.fillRect(e.pixelX,e.pixelY,e.size,e.size),X.fill()}}function Kt(e){return M[y].round(e)}function Qt(e){return M[y][g](e)}function Gt(e,t){return Kt(e*U+z-t/2)}function Yt(){for(var e=0;e<et.length;e++){var t=et[e];if(t.pathIndex<t[N][m]){var n=t[N][t.pathIndex];t.x=F(t.pixelX+t.size/2,U),t.y=F(t.pixelY+t.size/2,U),t.targetX=n.x,t.targetY=n.y;var r=G[t.y][t.x],i=t[O]/r[O],o=Gt(t.targetX,t.size),u=Gt(t.targetY,t.size);Kt(t.pixelX)<o?t.pixelX+i>o?t.pixelX=o:t.pixelX+=i:Kt(t.pixelY)<u?t.pixelY+i>u?t.pixelY=u:t.pixelY+=i:Kt(t.pixelX)>o?t.pixelX-i<o?t.pixelX=o:t.pixelX-=i:Kt(t.pixelY)>u&&(t.pixelY-i<u?t.pixelY=u:t.pixelY-=i),Kt(t.pixelX)===Gt(t.targetX,t.size)&&Kt(t.pixelY)===Gt(t.targetY,t.size)&&t.pathIndex++}var a=It();t.x===a.x&&t.y===a.y&&(Rt(t),I(t[s]))}}function Zt(e){var t=[];for(var n=0;n<et.length;n++){var r=e||wt(),i=et[n],s=It(),o=tn.search(r,r[i.y][i.x],r[s.y][s.x]);e?t[b](!!o.length):(i.path=o,i.targetX=o[0].x,i.targetY=o[0].y,i.pathIndex=0)}return e&&t.indexOf(!1)>-1?!1:!0}function en(){cancelAnimationFrame(Nt)}function nn(e){this.content=[],this.scoreFunction=e}function rn(e){K+=e,on()}function sn(e){K-=e,on()}function on(){var e=r[v](".container");for(var t=0;t<e[m];t++){e[t][E].remove("expensive"),e[t][E].remove("building");var n=e[t][d](".cost").innerText.substring(1);parseInt(n,10)>K&&e[t][E].add("expensive"),pt()&&e[t][E].add("building")}}var r=t.document,s="name",o="width",u="height",a="<span",f="<div",l="</div>",c="</span>",h="innerHTML",p="getElementById",d="querySelector",v=d+"All",m="length",g="floor",y="Math",b="push",w="rgb(",E="classList",S="toDataURL",x=null,T="towers",N="path",C="src",k="cost",L="next",A="color",O="speed",M=t;(function(){var e=0,t=["ms","moz","webkit","o"];for(var n=0;n<t[m]&&!M.requestAnimationFrame;++n)M.requestAnimationFrame=M[t[n]+"RequestAnimationFrame"],M.cancelAnimationFrame=M[t[n]+"CancelAnimationFrame"]||M[t[n]+"CancelRequestAnimationFrame"];M.requestAnimationFrame||(M.requestAnimationFrame=function(t,n){var r=(new Date).getTime(),i=M[y].max(0,16-(r-e)),s=M.setTimeout(function(){t(r+i)},i);return e=r+i,s}),M.cancelAnimationFrame||(M.cancelAnimationFrame=function(e){clearTimeout(e)})})(),M.addEventListener("DOMContentLoaded",function(){H(),Tt(),Mt(),mt();var e=gt(q,R);G=e[0],Y=e[1],rn(500),Xt(),Ct(),Lt()});var q=20,R=20,U=32,z=U/2,W,X,V=0,$={"x":0,"y":0},J="black",K=0,Q=x,G=[],Y=[],Z=[],et=[],tt=[];M.addEventListener("DOMContentLoaded",function(){at(W,"mousemove",ot),at(W,"mousedown",st),at(W,"contextmenu",rt)},!0);var Nt=null,tn={"init":function(e){for(var t=0,n=e[m];t<n;t++)for(var r=0,i=e[r][m];r<i;r++){var s=e[t][r];s.f=0,s.g=0,s.h=0,s[k]=s[O],s.visited=!1,s.closed=!1,s.parent=x}},"heap":function(){return new nn(function(e){return e.f})},"search":function(e,t,n){tn.init(e),heuristic=tn.manhattan;var r=tn.heap();r[b](t);while(r.size()>0){var i=r.pop();if(i===n){var s=i,o=[];while(s.parent)o[b](s),s=s.parent;return o.reverse()}i.closed=!0;var u=tn.neighbors(e,i);for(var a=0,f=u[m];a<f;a++){var l=u[a];if(l.closed||l[O]===0)continue;var c=i.g+l[k],h=l.visited;if(!h||c<l.g)l.visited=!0,l.parent=i,l.h=l.h||heuristic(l.pos,n.pos),l.g=c,l.f=l.g+l.h,h?r.rescoreElement(l):r[b](l)}}return[]},"manhattan":function(e,t){var n=M[y].abs(t.x-e.x),r=M[y].abs(t.y-e.y);return n+r},"neighbors":function(e,t){var n=[],r=t.x,i=t.y;return e[i-1]&&e[i-1][r]&&n[b](e[i-1][r]),e[i+1]&&e[i+1][r]&&n[b](e[i+1][r]),e[i]&&e[i][r-1]&&n[b](e[i][r-1]),e[i]&&e[i][r+1]&&n[b](e[i][r+1]),n}};nn.prototype={"push":function(e){this.content[b](e),this.sinkDown(this.content[m]-1)},"pop":function(){var e=this.content[0],t=this.content.pop();return this.content[m]>0&&(this.content[0]=t,this.bubbleUp(0)),e},"size":function(){return this.content[m]},"rescoreElement":function(e){this.sinkDown(this.content.indexOf(e))},"sinkDown":function(e){var t=this.content[e];while(e>0){var n=(e+1>>1)-1,r=this.content[n];if(!(this.scoreFunction(t)<this.scoreFunction(r)))break;this.content[n]=t,this.content[e]=r,e=n}},"bubbleUp":function(e){var t=this.content[m],n=this.content[e],r=this.scoreFunction(n);for(;;){var i=e+1<<1,s=i-1,o=x;if(s<t){var u=this.content[s],a=this.scoreFunction(u);a<r&&(o=s)}if(i<t){var f=this.content[i],l=this.scoreFunction(f);l<(o===x?r:a)&&(o=i)}if(o===x)break;this.content[e]=this.content[o],this.content[o]=n,e=o}}};var K=0})(window)