/*!
 * Piwik - Web Analytics
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://piwik.org/free-software/bsd/ Simplified BSD (also in js/LICENSE.txt)
 */
if(typeof JSON2!=="object"){JSON2={}}(function(){function d(f){return f<10?"0"+f:f}function l(n,m){var f=Object.prototype.toString.apply(n);if(f==="[object Date]"){return isFinite(n.valueOf())?n.getUTCFullYear()+"-"+d(n.getUTCMonth()+1)+"-"+d(n.getUTCDate())+"T"+d(n.getUTCHours())+":"+d(n.getUTCMinutes())+":"+d(n.getUTCSeconds())+"Z":null}if(f==="[object String]"||f==="[object Number]"||f==="[object Boolean]"){return n.valueOf()}if(f!=="[object Array]"&&typeof n.toJSON==="function"){return n.toJSON(m)}return n}var c=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),e='\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',i=new RegExp("["+e,"g"),j,b,k={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;
function a(f){i.lastIndex=0;return i.test(f)?'"'+f.replace(i,function(m){var n=k[m];return typeof n==="string"?n:"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function g(s,p){var n,m,t,f,q=j,o,r=p[s];if(r&&typeof r==="object"){r=l(r,s)}if(typeof h==="function"){r=h.call(p,s,r)}switch(typeof r){case"string":return a(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r){return"null"}j+=b;o=[];if(Object.prototype.toString.apply(r)==="[object Array]"){f=r.length;for(n=0;n<f;n+=1){o[n]=g(n,r)||"null"}t=o.length===0?"[]":j?"[\n"+j+o.join(",\n"+j)+"\n"+q+"]":"["+o.join(",")+"]";j=q;return t}if(h&&typeof h==="object"){f=h.length;for(n=0;n<f;n+=1){if(typeof h[n]==="string"){m=h[n];t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}else{for(m in r){if(Object.prototype.hasOwnProperty.call(r,m)){t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}t=o.length===0?"{}":j?"{\n"+j+o.join(",\n"+j)+"\n"+q+"}":"{"+o.join(",")+"}";j=q;
return t}}if(typeof JSON2.stringify!=="function"){JSON2.stringify=function(o,m,n){var f;j="";b="";if(typeof n==="number"){for(f=0;f<n;f+=1){b+=" "}}else{if(typeof n==="string"){b=n}}h=m;if(m&&typeof m!=="function"&&(typeof m!=="object"||typeof m.length!=="number")){throw new Error("JSON2.stringify")}return g("",{"":o})}}if(typeof JSON2.parse!=="function"){JSON2.parse=function(o,f){var n;function m(s,r){var q,p,t=s[r];if(t&&typeof t==="object"){for(q in t){if(Object.prototype.hasOwnProperty.call(t,q)){p=m(t,q);if(p!==undefined){t[q]=p}else{delete t[q]}}}}return f.call(s,r,t)}o=String(o);c.lastIndex=0;if(c.test(o)){o=o.replace(c,function(p){return"\\u"+("0000"+p.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){n=eval("("+o+")");
return typeof f==="function"?m({"":n},""):n}throw new SyntaxError("JSON2.parse")}}}());if(typeof _paq!=="object"){_paq=[]}if(typeof Piwik!=="object"){Piwik=(function(){var h,a={},q=document,d=navigator,D=screen,A=window,e=A.performance||A.mozPerformance||A.msPerformance||A.webkitPerformance,m=false,y=[],j=A.encodeURIComponent,z=A.decodeURIComponent,f=unescape,E,p,c;function s(P){var O=typeof P;return O!=="undefined"}function n(O){return typeof O==="function"}function C(O){return typeof O==="object"}function k(O){return typeof O==="string"||O instanceof String}function J(){var O,Q,P;for(O=0;O<arguments.length;O+=1){P=arguments[O];Q=P.shift();if(k(Q)){E[Q].apply(E,P)}else{Q.apply(E,P)}}}function M(R,Q,P,O){if(R.addEventListener){R.addEventListener(Q,P,O);return true}if(R.attachEvent){return R.attachEvent("on"+Q,P)}R["on"+Q]=P}function H(P,S){var O="",R,Q;for(R in a){if(Object.prototype.hasOwnProperty.call(a,R)){Q=a[R][P];if(n(Q)){O+=Q(S)}}}return O}function K(){var O;H("unload");if(h){do{O=new Date()
}while(O.getTimeAlias()<h)}}function I(){var O;if(!m){m=true;H("load");for(O=0;O<y.length;O++){y[O]()}}return true}function l(){var P;if(q.addEventListener){M(q,"DOMContentLoaded",function O(){q.removeEventListener("DOMContentLoaded",O,false);I()})}else{if(q.attachEvent){q.attachEvent("onreadystatechange",function O(){if(q.readyState==="complete"){q.detachEvent("onreadystatechange",O);I()}});if(q.documentElement.doScroll&&A===A.top){(function O(){if(!m){try{q.documentElement.doScroll("left")}catch(Q){setTimeout(O,0);return}I()}}())}}}if((new RegExp("WebKit")).test(d.userAgent)){P=setInterval(function(){if(m||/loaded|complete/.test(q.readyState)){clearInterval(P);I()}},10)}M(A,"load",I,false)}function g(Q,P){var O=q.createElement("script");O.type="text/javascript";O.src=Q;if(O.readyState){O.onreadystatechange=function(){var R=this.readyState;if(R==="loaded"||R==="complete"){O.onreadystatechange=null;P()}}}else{O.onload=P}q.getElementsByTagName("head")[0].appendChild(O)}function t(){var O="";
try{O=A.top.document.referrer}catch(Q){if(A.parent){try{O=A.parent.document.referrer}catch(P){O=""}}}if(O===""){O=q.referrer}return O}function i(O){var Q=new RegExp("^([a-z]+):"),P=Q.exec(O);return P?P[1]:null}function b(O){var Q=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),P=Q.exec(O);return P?P[1]:O}function B(Q,P){var O="[\\?&#]"+P+"=([^&#]*)";var S=new RegExp(O);var R=S.exec(Q);return R?z(R[1]):""}function o(O){return f(j(O))}function L(ae){var Q=function(aj,W){return(aj<<W)|(aj>>>(32-W))},af=function(al){var aj="",ak,W;for(ak=7;ak>=0;ak--){W=(al>>>(ak*4))&15;aj+=W.toString(16)}return aj},T,ah,ag,P=[],Y=1732584193,V=4023233417,U=2562383102,S=271733878,R=3285377520,ad,ac,ab,aa,Z,ai,O,X=[];ae=o(ae);O=ae.length;for(ah=0;ah<O-3;ah+=4){ag=ae.charCodeAt(ah)<<24|ae.charCodeAt(ah+1)<<16|ae.charCodeAt(ah+2)<<8|ae.charCodeAt(ah+3);X.push(ag)}switch(O&3){case 0:ah=2147483648;break;case 1:ah=ae.charCodeAt(O-1)<<24|8388608;break;case 2:ah=ae.charCodeAt(O-2)<<24|ae.charCodeAt(O-1)<<16|32768;
break;case 3:ah=ae.charCodeAt(O-3)<<24|ae.charCodeAt(O-2)<<16|ae.charCodeAt(O-1)<<8|128;break}X.push(ah);while((X.length&15)!==14){X.push(0)}X.push(O>>>29);X.push((O<<3)&4294967295);for(T=0;T<X.length;T+=16){for(ah=0;ah<16;ah++){P[ah]=X[T+ah]}for(ah=16;ah<=79;ah++){P[ah]=Q(P[ah-3]^P[ah-8]^P[ah-14]^P[ah-16],1)}ad=Y;ac=V;ab=U;aa=S;Z=R;for(ah=0;ah<=19;ah++){ai=(Q(ad,5)+((ac&ab)|(~ac&aa))+Z+P[ah]+1518500249)&4294967295;Z=aa;aa=ab;ab=Q(ac,30);ac=ad;ad=ai}for(ah=20;ah<=39;ah++){ai=(Q(ad,5)+(ac^ab^aa)+Z+P[ah]+1859775393)&4294967295;Z=aa;aa=ab;ab=Q(ac,30);ac=ad;ad=ai}for(ah=40;ah<=59;ah++){ai=(Q(ad,5)+((ac&ab)|(ac&aa)|(ab&aa))+Z+P[ah]+2400959708)&4294967295;Z=aa;aa=ab;ab=Q(ac,30);ac=ad;ad=ai}for(ah=60;ah<=79;ah++){ai=(Q(ad,5)+(ac^ab^aa)+Z+P[ah]+3395469782)&4294967295;Z=aa;aa=ab;ab=Q(ac,30);ac=ad;ad=ai}Y=(Y+ad)&4294967295;V=(V+ac)&4294967295;U=(U+ab)&4294967295;S=(S+aa)&4294967295;R=(R+Z)&4294967295}ai=af(Y)+af(V)+af(U)+af(S)+af(R);return ai.toLowerCase()}function G(Q,O,P){if(Q==="translate.googleusercontent.com"){if(P===""){P=O
}O=B(O,"u");Q=b(O)}else{if(Q==="cc.bingj.com"||Q==="webcache.googleusercontent.com"||Q.slice(0,5)==="74.6."){O=q.links[0].href;Q=b(O)}}return[Q,O,P]}function u(P){var O=P.length;if(P.charAt(--O)==="."){P=P.slice(0,O)}if(P.slice(0,2)==="*."){P=P.slice(1)}return P}function N(P){P=P&&P.text?P.text:P;if(!k(P)){var O=q.getElementsByTagName("title");if(O&&s(O[0])){P=O[0].text}}return P}function w(O,P){if(P){return P}if(O.slice(-9)==="piwik.php"){O=O.slice(0,O.length-9)}return O}function v(S){var O="Piwik_Overlay";var V=new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idsite=([0-9]+)&period=([^&]+)&date=([^&]+)$");var Q=V.exec(q.referrer);if(Q){var R=Q[1];if(R!==String(S)){return false}var U=Q[2],P=Q[3];A.name=O+"###"+U+"###"+P}var T=A.name.split("###");return T.length===3&&T[0]===O}function F(P,U,R){var T=A.name.split("###"),S=T[1],O=T[2],Q=w(P,U);g(Q+"plugins/Overlay/client/client.js?v=1",function(){Piwik_Overlay_Client.initialize(Q,R,S,O)})}function x(am,aN){var U=G(q.domain,A.location.href,t()),a7=u(U[0]),bl=U[1],aU=U[2],aS="GET",S=am||"",aj="",aP="",bb=aN||"",aE,au=q.title,aw="7z|aac|apk|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|docx?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|pptx?|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xlsx?|xml|z|zip",aQ=[a7],X=[],aI=[],al=[],aO=500,Y,an,Z,ab,ay=["pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],at=["pk_kwd","piwik_kwd","utm_term"],bj="_pk_",ae,bk,ac=false,be,aA,aD,ai=63072000000,ak=1800000,aF=15768000000,aB=true,ap=0,W=false,aJ={},T={},bf=200,a0={},bc={},aX=false,aV=false,aT,aK,af,ax=L,aW,aC;
function a2(bu,br,bq,bt,bp,bs){if(ac){return}var bo;if(bq){bo=new Date();bo.setTime(bo.getTime()+bq)}q.cookie=bu+"="+j(br)+(bq?";expires="+bo.toGMTString():"")+";path="+(bt||"/")+(bp?";domain="+bp:"")+(bs?";secure":"")}function ah(bq){if(ac){return 0}var bo=new RegExp("(^|;)[ ]*"+bq+"=([^;]*)"),bp=bo.exec(q.cookie);return bp?z(bp[2]):0}function bg(bo){var bp;if(Z){bp=new RegExp("#.*");return bo.replace(bp,"")}return bo}function a6(bq,bo){var br=i(bo),bp;if(br){return bo}if(bo.slice(0,1)==="/"){return i(bq)+"://"+b(bq)+bo}bq=bg(bq);bp=bq.indexOf("?");if(bp>=0){bq=bq.slice(0,bp)}bp=bq.lastIndexOf("/");if(bp!==bq.length-1){bq=bq.slice(0,bp+1)}return bq+bo}function aR(br){var bp,bo,bq;for(bp=0;bp<aQ.length;bp++){bo=u(aQ[bp].toLowerCase());if(br===bo){return true}if(bo.slice(0,1)==="."){if(br===bo.slice(1)){return true}bq=br.length-bo.length;if((bq>0)&&(br.slice(bq)===bo)){return true}}}return false}function bn(bo){var bp=new Image(1,1);bp.onload=function(){p=0};bp.src=S+(S.indexOf("?")<0?"?":"&")+bo
}function a3(bo){try{var bq=A.XMLHttpRequest?new A.XMLHttpRequest():A.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;bq.open("POST",S,true);bq.onreadystatechange=function(){if(this.readyState===4&&this.status!==200){bn(bo)}};bq.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");bq.send(bo)}catch(bp){bn(bo)}}function az(bq,bp){var bo=new Date();if(!be){if(aS==="POST"){a3(bq)}else{bn(bq)}h=bo.getTime()+bp}}function a1(bo){return bj+bo+"."+bb+"."+aW}function V(){if(ac){return"0"}if(!s(d.cookieEnabled)){var bo=a1("testcookie");a2(bo,"1");return ah(bo)==="1"?"1":"0"}return d.cookieEnabled?"1":"0"}function aL(){aW=ax((ae||a7)+(bk||"/")).slice(0,4)}function ag(){var bp=a1("cvar"),bo=ah(bp);if(bo.length){bo=JSON2.parse(bo);if(C(bo)){return bo}}return{}}function R(){if(W===false){W=ag()}}function ba(){var bo=new Date();aT=bo.getTime()}function ad(bs,bp,bo,br,bq,bt){a2(a1("id"),bs+"."+bp+"."+bo+"."+br+"."+bq+"."+bt,ai,bk,ae)}function Q(){var bp=new Date(),bo=Math.round(bp.getTime()/1000),br=ah(a1("id")),bq;
if(br){bq=br.split(".");bq.unshift("0")}else{if(!aC){aC=ax((d.userAgent||"")+(d.platform||"")+JSON2.stringify(bc)+bo).slice(0,16)}bq=["1",aC,bo,0,bo,"",""]}return bq}function O(){var bo=ah(a1("ref"));if(bo.length){try{bo=JSON2.parse(bo);if(C(bo)){return bo}}catch(bp){}}return["","",0,""]}function P(){var bo=ac;ac=false;a2(a1("id"),"",-86400,bk,ae);a2(a1("ses"),"",-86400,bk,ae);a2(a1("cvar"),"",-86400,bk,ae);a2(a1("ref"),"",-86400,bk,ae);ac=bo}function av(bq,bN,bO,br){var bL,bp=new Date(),by=Math.round(bp.getTime()/1000),bQ,bM,bt,bE,bI,bx,bG,bu,bK,bs=1024,bR,bB,bH=W,bz=a1("ses"),bA=a1("ref"),bS=a1("cvar"),bF=Q(),bD=ah(bz),bJ=O(),bP=aE||bl,bv,bo;if(ac){P()}if(be){return""}bQ=bF[0];bM=bF[1];bE=bF[2];bt=bF[3];bI=bF[4];bx=bF[5];if(!s(bF[6])){bF[6]=""}bG=bF[6];if(!s(br)){br=""}var bC=q.characterSet||q.charset;if(!bC||bC.toLowerCase()==="utf-8"){bC=null}bv=bJ[0];bo=bJ[1];bu=bJ[2];bK=bJ[3];if(!bD){bt++;bx=bI;if(!aD||!bv.length){for(bL in ay){if(Object.prototype.hasOwnProperty.call(ay,bL)){bv=B(bP,ay[bL]);
if(bv.length){break}}}for(bL in at){if(Object.prototype.hasOwnProperty.call(at,bL)){bo=B(bP,at[bL]);if(bo.length){break}}}}bR=b(aU);bB=bK.length?b(bK):"";if(bR.length&&!aR(bR)&&(!aD||!bB.length||aR(bB))){bK=aU}if(bK.length||bv.length){bu=by;bJ=[bv,bo,bu,bg(bK.slice(0,bs))];a2(bA,JSON2.stringify(bJ),aF,bk,ae)}}bq+="&idsite="+bb+"&rec=1&r="+String(Math.random()).slice(2,8)+"&h="+bp.getHours()+"&m="+bp.getMinutes()+"&s="+bp.getSeconds()+"&url="+j(bg(bP))+(aU.length?"&urlref="+j(bg(aU)):"")+"&_id="+bM+"&_idts="+bE+"&_idvc="+bt+"&_idn="+bQ+(bv.length?"&_rcn="+j(bv):"")+(bo.length?"&_rck="+j(bo):"")+"&_refts="+bu+"&_viewts="+bx+(String(bG).length?"&_ects="+bG:"")+(String(bK).length?"&_ref="+j(bg(bK.slice(0,bs))):"")+(bC?"&cs="+j(bC):"");for(bL in bc){if(Object.prototype.hasOwnProperty.call(bc,bL)){bq+="&"+bL+"="+bc[bL]}}if(bN){bq+="&data="+j(JSON2.stringify(bN))}else{if(ab){bq+="&data="+j(JSON2.stringify(ab))}}function bw(bT,bU){var bV=JSON2.stringify(bT);if(bV.length>2){return"&"+bU+"="+j(bV)
}return""}bq+=bw(aJ,"cvar");bq+=bw(T,"e_cvar");if(W){bq+=bw(W,"_cvar");for(bL in bH){if(Object.prototype.hasOwnProperty.call(bH,bL)){if(W[bL][0]===""||W[bL][1]===""){delete W[bL]}}}a2(bS,JSON2.stringify(W),ak,bk,ae)}if(aB){if(ap){bq+="&gt_ms="+ap}else{if(e&&e.timing&&e.timing.requestStart&&e.timing.responseEnd){bq+="&gt_ms="+(e.timing.responseEnd-e.timing.requestStart)}}}ad(bM,bE,bt,by,bx,s(br)&&String(br).length?br:bG);a2(bz,"*",ak,bk,ae);bq+=H(bO);if(aP.length){bq+="&"+aP}return bq}function a5(br,bq,bv,bs,bo,by){var bt="idgoal=0",bu,bp=new Date(),bw=[],bx;if(String(br).length){bt+="&ec_id="+j(br);bu=Math.round(bp.getTime()/1000)}bt+="&revenue="+bq;if(String(bv).length){bt+="&ec_st="+bv}if(String(bs).length){bt+="&ec_tx="+bs}if(String(bo).length){bt+="&ec_sh="+bo}if(String(by).length){bt+="&ec_dt="+by}if(a0){for(bx in a0){if(Object.prototype.hasOwnProperty.call(a0,bx)){if(!s(a0[bx][1])){a0[bx][1]=""}if(!s(a0[bx][2])){a0[bx][2]=""}if(!s(a0[bx][3])||String(a0[bx][3]).length===0){a0[bx][3]=0
}if(!s(a0[bx][4])||String(a0[bx][4]).length===0){a0[bx][4]=1}bw.push(a0[bx])}}bt+="&ec_items="+j(JSON2.stringify(bw))}bt=av(bt,ab,"ecommerce",bu);az(bt,aO)}function a4(bo,bs,br,bq,bp,bt){if(String(bo).length&&s(bs)){a5(bo,bs,br,bq,bp,bt)}}function bi(bo){if(s(bo)){a5("",bo,"","","","")}}function aH(br,bs){var bo=new Date(),bq=av("action_name="+j(N(br||au)),bs,"log");az(bq,aO);if(Y&&an&&!aV){aV=true;M(q,"click",ba);M(q,"mouseup",ba);M(q,"mousedown",ba);M(q,"mousemove",ba);M(q,"mousewheel",ba);M(A,"DOMMouseScroll",ba);M(A,"scroll",ba);M(q,"keypress",ba);M(q,"keydown",ba);M(q,"keyup",ba);M(A,"resize",ba);M(A,"focus",ba);M(A,"blur",ba);aT=bo.getTime();setTimeout(function bp(){var bt;bo=new Date();if((aT+an)>bo.getTime()){if(Y<bo.getTime()){bt=av("ping=1",bs,"ping");az(bt,aO)}setTimeout(bp,an)}},an)}}function aa(bq,bs,bo,br,bt){if(String(bq).length===0||String(bs).length===0){return false}var bp=av("e_c="+j(bq)+"&e_a="+j(bs)+(s(bo)?"&e_n="+j(bo):"")+(s(br)?"&e_v="+j(br):""),bt,"event");az(bp,aO)
}function ar(bo,br,bp,bs){var bq=av("search="+j(bo)+(br?"&search_cat="+j(br):"")+(s(bp)?"&search_count="+bp:""),bs,"sitesearch");az(bq,aO)}function aM(bo,br,bq){var bp=av("idgoal="+bo+(br?"&revenue="+br:""),bq,"goal");az(bp,aO)}function a9(bp,bo,br){var bq=av(bo+"="+j(bg(bp)),br,"link");az(bq,aO)}function bd(bp,bo){if(bp!==""){return bp+bo.charAt(0).toUpperCase()+bo.slice(1)}return bo}function aq(bt){var bs,bo,br=["","webkit","ms","moz"],bq;if(!aA){for(bo=0;bo<br.length;bo++){bq=br[bo];if(Object.prototype.hasOwnProperty.call(q,bd(bq,"hidden"))){if(q[bd(bq,"visibilityState")]==="prerender"){bs=true}break}}}if(bs){M(q,bq+"visibilitychange",function bp(){q.removeEventListener(bq+"visibilitychange",bp,false);bt()});return}bt()}function ao(bq,bp){var br,bo="(^| )(piwik[_-]"+bp;if(bq){for(br=0;br<bq.length;br++){bo+="|"+bq[br]}}bo+=")( |$)";return new RegExp(bo)}function a8(br,bo,bs){var bq=ao(aI,"download"),bp=ao(al,"link"),bt=new RegExp("\\.("+aw+")([?&#]|$)","i");return bp.test(br)?"link":(bq.test(br)||bt.test(bo)?"download":(bs?0:"link"))
}function aZ(bt){var br,bp,bo;br=bt.parentNode;while(br!==null&&s(br)){bp=bt.tagName.toUpperCase();if(bp==="A"||bp==="AREA"){break}bt=br;br=bt.parentNode}if(s(bt.href)){var bu=bt.hostname||b(bt.href),bv=bu.toLowerCase(),bq=bt.href.replace(bu,bv),bs=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");if(!bs.test(bq)){bo=a8(bt.className,bq,aR(bv));if(bo){bq=f(bq);a9(bq,bo)}}}}function bm(bo){var bp,bq;bo=bo||A.event;bp=bo.which||bo.button;bq=bo.target||bo.srcElement;if(bo.type==="click"){if(bq){aZ(bq)}}else{if(bo.type==="mousedown"){if((bp===1||bp===2)&&bq){aK=bp;af=bq}else{aK=af=null}}else{if(bo.type==="mouseup"){if(bp===aK&&bq===af){aZ(bq)}aK=af=null}}}}function aY(bp,bo){if(bo){M(bp,"mouseup",bm,false);M(bp,"mousedown",bm,false)}else{M(bp,"click",bm,false)}}function aG(bp){if(!aX){aX=true;var bq,bo=ao(X,"ignore"),br=q.links;if(br){for(bq=0;bq<br.length;bq++){if(!bo.test(br[bq].className)){aY(br[bq],bp)}}}}}function bh(){var bp,bq,br={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},bo=(new RegExp("Mac OS X.*Safari/")).test(d.userAgent)?A.devicePixelRatio||1:1;
if(!((new RegExp("MSIE")).test(d.userAgent))){if(d.mimeTypes&&d.mimeTypes.length){for(bp in br){if(Object.prototype.hasOwnProperty.call(br,bp)){bq=d.mimeTypes[br[bp]];bc[bp]=(bq&&bq.enabledPlugin)?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&s(d.javaEnabled)&&d.javaEnabled()){bc.java="1"}if(n(A.GearsFactory)){bc.gears="1"}bc.cookie=V()}bc.res=D.width*bo+"x"+D.height*bo}bh();aL();return{getVisitorId:function(){return(Q())[1]},getVisitorInfo:function(){return Q()},getAttributionInfo:function(){return O()},getAttributionCampaignName:function(){return O()[0]},getAttributionCampaignKeyword:function(){return O()[1]},getAttributionReferrerTimestamp:function(){return O()[2]},getAttributionReferrerUrl:function(){return O()[3]},setTrackerUrl:function(bo){S=bo},setSiteId:function(bo){bb=bo},setCustomData:function(bo,bp){if(C(bo)){ab=bo}else{if(!ab){ab=[]}ab[bo]=bp}},appendToTrackingUrl:function(bo){aP=bo},getCustomData:function(){return ab},setCustomVariable:function(bp,bo,bs,bq){var br;
if(!s(bq)){bq="visit"}if(bp>0){bo=s(bo)&&!k(bo)?String(bo):bo;bs=s(bs)&&!k(bs)?String(bs):bs;br=[bo.slice(0,bf),bs.slice(0,bf)];if(bq==="visit"||bq===2){R();W[bp]=br}else{if(bq==="page"||bq===3){aJ[bp]=br}else{if(bq==="event"){T[bp]=br}}}}},getCustomVariable:function(bp,bq){var bo;if(!s(bq)){bq="visit"}if(bq==="page"||bq===3){bo=aJ[bp]}else{if(bq==="event"){bo=T[bp]}else{if(bq==="visit"||bq===2){R();bo=W[bp]}}}if(!s(bo)||(bo&&bo[0]==="")){return false}return bo},deleteCustomVariable:function(bo,bp){if(this.getCustomVariable(bo,bp)){this.setCustomVariable(bo,"","",bp)}},setLinkTrackingTimer:function(bo){aO=bo},setDownloadExtensions:function(bo){aw=bo},addDownloadExtensions:function(bo){aw+="|"+bo},setDomains:function(bo){aQ=k(bo)?[bo]:bo;aQ.push(a7)},setIgnoreClasses:function(bo){X=k(bo)?[bo]:bo},setRequestMethod:function(bo){aS=bo||"GET"},setReferrerUrl:function(bo){aU=bo},setCustomUrl:function(bo){aE=a6(bl,bo)},setDocumentTitle:function(bo){au=bo},setAPIUrl:function(bo){aj=bo},setDownloadClasses:function(bo){aI=k(bo)?[bo]:bo
},setLinkClasses:function(bo){al=k(bo)?[bo]:bo},setCampaignNameKey:function(bo){ay=k(bo)?[bo]:bo},setCampaignKeywordKey:function(bo){at=k(bo)?[bo]:bo},discardHashTag:function(bo){Z=bo},setCookieNamePrefix:function(bo){bj=bo;W=ag()},setCookieDomain:function(bo){ae=u(bo);aL()},setCookiePath:function(bo){bk=bo;aL()},setVisitorCookieTimeout:function(bo){ai=bo*1000},setSessionCookieTimeout:function(bo){ak=bo*1000},setReferralCookieTimeout:function(bo){aF=bo*1000},setConversionAttributionFirstReferrer:function(bo){aD=bo},disableCookies:function(){ac=true;bc.cookie="0"},deleteCookies:function(){P()},setDoNotTrack:function(bp){var bo=d.doNotTrack||d.msDoNotTrack;be=bp&&(bo==="yes"||bo==="1");if(be){this.disableCookies()}},addListener:function(bp,bo){aY(bp,bo)},enableLinkTracking:function(bo){if(m){aG(bo)}else{y.push(function(){aG(bo)})}},disablePerformanceTracking:function(){aB=false},setGenerationTimeMs:function(bo){ap=parseInt(bo,10)},setHeartBeatTimer:function(bq,bp){var bo=new Date();Y=bo.getTime()+bq*1000;
an=bp*1000},killFrame:function(){if(A.location!==A.top.location){A.top.location=A.location}},redirectFile:function(bo){if(A.location.protocol==="file:"){A.location=bo}},setCountPreRendered:function(bo){aA=bo},trackGoal:function(bo,bq,bp){aq(function(){aM(bo,bq,bp)})},trackLink:function(bp,bo,bq){aq(function(){a9(bp,bo,bq)})},trackPageView:function(bo,bp){if(v(bb)){aq(function(){F(S,aj,bb)})}else{aq(function(){aH(bo,bp)})}},trackEvent:function(bp,br,bo,bq){aq(function(){aa(bp,br,bo,bq)})},trackSiteSearch:function(bo,bq,bp){aq(function(){ar(bo,bq,bp)})},setEcommerceView:function(br,bo,bq,bp){if(!s(bq)||!bq.length){bq=""}else{if(bq instanceof Array){bq=JSON2.stringify(bq)}}aJ[5]=["_pkc",bq];if(s(bp)&&String(bp).length){aJ[2]=["_pkp",bp]}if((!s(br)||!br.length)&&(!s(bo)||!bo.length)){return}if(s(br)&&br.length){aJ[3]=["_pks",br]}if(!s(bo)||!bo.length){bo=""}aJ[4]=["_pkn",bo]},addEcommerceItem:function(bs,bo,bq,bp,br){if(bs.length){a0[bs]=[bs,bo,bq,bp,br]}},trackEcommerceOrder:function(bo,bs,br,bq,bp,bt){a4(bo,bs,br,bq,bp,bt)
},trackEcommerceCartUpdate:function(bo){bi(bo)}}}function r(){return{push:J}}M(A,"beforeunload",K,false);l();Date.prototype.getTimeAlias=Date.prototype.getTime;E=new x();for(p=0;p<_paq.length;p++){if(_paq[p][0]==="setTrackerUrl"||_paq[p][0]==="setSiteId"){J(_paq[p]);delete _paq[p]}}for(p=0;p<_paq.length;p++){if(_paq[p]){J(_paq[p])}}_paq=new r();c={addPlugin:function(O,P){a[O]=P},getTracker:function(O,P){return new x(O,P)},getAsyncTracker:function(){return E}};if(typeof define==="function"&&define.amd){define("piwik",[],function(){return c})}return c}())}if(typeof piwik_log!=="function"){piwik_log=function(b,f,d,g){function a(h){try{return eval("piwik_"+h)}catch(i){}return}var c,e=Piwik.getTracker(d,f);e.setDocumentTitle(b);e.setCustomData(g);c=a("tracker_pause");if(c){e.setLinkTrackingTimer(c)}c=a("download_extensions");if(c){e.setDownloadExtensions(c)}c=a("hosts_alias");if(c){e.setDomains(c)}c=a("ignore_classes");if(c){e.setIgnoreClasses(c)}e.trackPageView();if(a("install_tracker")){piwik_track=function(i,k,j,h){e.setSiteId(k);
e.setTrackerUrl(j);e.trackLink(i,h)};e.enableLinkTracking()}}};