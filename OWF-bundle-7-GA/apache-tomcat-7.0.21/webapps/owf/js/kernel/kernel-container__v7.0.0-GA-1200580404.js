var Ozone=Ozone||{};Ozone.eventing=Ozone.eventing||{};Ozone.eventing.priv=Ozone.eventing.priv||{};if(typeof JSON==="undefined"){JSON=gadgets.json}(function(p){var e=[];function i(){return !(typeof window.postMessage==="function"||typeof window.postMessage==="object")}function m(o){return JSON.stringify(o)}function l(u,w,t,o){var v=a(t);if(typeof u==="undefined"){u={id:w,inContainer:true,containerName:"kernel",containerVersion:"1.0",containerUrl:b(),relayUrl:t}}else{u.id=w;u.inContainer=true;u.containerName="kernel";u.containerVersion="1.0";u.containerUrl=b();u.relayUrl=t}return u}function b(){var o=window.location.pathname.lastIndexOf("/");var t=window.location.pathname.substr(0,o);if(window.location.port!="80"&&window.location.port!="443"){return window.location.protocol+"//"+window.location.hostname+":"+window.location.port+t}else{return window.location.protocol+"//"+window.location.hostname+t}}function q(){return b()+"/rpc_relay.html"}var f=0;function g(){f++;return b()+"/blank.html?id="+f}function a(t){var v=t.indexOf("//");var u=t.indexOf("/",v+2);var o=t.indexOf("/",u+1);var w=t.substring(0,o+1)+"rpc_relay.html";return w}function k(o){return null}function h(o){return(typeof o=="undefined"||o==null)}function c(t,o,F,u,C,B,E){var w=E||document;var D=w.createElement("span");F.appendChild(D);p[o].iframeId='{"id":"'+o+'"}';var z=m(u).replace(/"/g,"&quot;");var A=p[o].iframeId.replace(/"/g,"&quot;");var v='<iframe id="'+A+'" name="'+z+'" src="javascript:\'<html></html>\'" style="width:'+C+";height:"+B+';border:0px;" ></iframe>';D.innerHTML=v;w.getElementById(p[o].iframeId).src=t}function d(u,t,v,B,C,z,x){var o=document.createElement("div");document.body.appendChild(o);if(h(C)){C="transparent"}if(h(z)){z="100"}if(h(x)){x="100"}p[t].iframeId='{"id":"'+t+'"}';var y=m(v).replace(/"/g,"&quot;");var A=p[t].iframeId.replace(/"/g,"&quot;");var w='<iframe id="'+A+'"';w+=' name="'+y+'"';w+=" src=\"javascript:'<html></html>'\"";if(i()){w+=" ALLOWTRANSPARENCY=true FRAMEBORDER=0 "}w+=' style="position: absolute;';w+="top: 0px;left: 0px;width: 100%;height: 100%;";w+="border: 0px;x-index: 7500;frameBorder: 0";w+="background-color: "+C+";";w+="filter alpha(opacity="+x+")";w+='"></iframe>';o.innerHTML=w;document.getElementById(p[t].iframeId).src=u}function r(o){o=o||{};Ozone.eventing.rpc.init({getIframeId:p.getIframeId});p.priv.container_init=function(B,z,A){p.rpc.priv.clientToldUsFunctionsHandler(B,z,A);if(!o.dontInitEventing){var v=JSON.parse(z).relayUrl;var y=JSON.parse(z).useMultiPartMessagesForIFPC;var x=JSON.parse(B).id;gadgets.rpc.setRelayUrl(p.getIframeId(x),v,false,y);gadgets.rpc.setAuthToken(p.getIframeId(x),0);var w='{"id":"'+window.name+'"}';gadgets.rpc.call(p.getIframeId(x),"after_container_init",null,window.name,w)}};gadgets.rpc.register("container_init",function(x,v,w){p.priv.container_init(x,v,w)});function t(){return e}gadgets.rpc.register("LIST_WIDGETS",t);if(!o.dontInitAdditionalFeatures){if(gadgets.pubsubrouter!=null){gadgets.pubsubrouter.init(function(v){return v},{onRoute:function(v,w,y,x){return false}})}if(Ozone.dragAndDrop!=null&&Ozone.dragAndDrop.WidgetDragAndDropContainer!=null){var u=new Ozone.dragAndDrop.WidgetDragAndDropContainer({eventingContainer:gadgets.pubsubrouter})}}}function s(w,z,u,t,B,v){p[z]={};p[z].callback=function(){};p[z].sendMessage=function(x,y){gadgets.rpc.call(p.getIframeId(z),"DIRECT_MESSAGEL_CLIENT",y,x)};u=(typeof u=="string")?document.getElementById(u):u;var A=q();var o=k();t=t||"100%";B=B||"100%";v=l(v,z,A,o);c(w,z,u,v,t,B);gadgets.rpc.setRelayUrl(p.getIframeId(z),a(w));e.push({id:z,name:z,url:w});if(typeof ready=="function"){ready.call(this,p[z])}return p[z]}function j(t,w,B,x,v,u,A){var y={};y.sendMessage=function(C,D){gadgets.rpc.call(p.getIframeId(w),"DIRECT_MESSAGEL_CLIENT",D,C)};p[w]=y;var z=q();var o=k();u=l(u,w,z,o);d(t,w,u,B,x,v);gadgets.rpc.setRelayUrl(p.getIframeId(w),a(t));e.push({id:w,url:t});if(typeof A=="function"){A.call(this,p[w])}return y}function n(t,z,u,F,o,A,C,w,D){var B={};B.sendMessage=function(G,H){gadgets.rpc.call(p.getIframeId(z),"DIRECT_MESSAGEL_CLIENT",H,G)};if(h(u)){u=100}if(h(F)){F=100}if(h(o)){o=0}if(h(A)){A=0}var x="width="+u+",height="+F+",resizable="+o+",scrollbars="+A;if(h(C)){C=g()}var E=window.open(C,"_blank",x);if(typeof window.parent._childWindows==="undefined"){window.parent._childWindows=[]}window.parent._childWindows.push(E);function y(){var H=E.document.getElementsByTagName("body")[0];var I=q();var G=k();w=l(w,z,I,G);c(t,z,H,w,"100%","100%",E.document);gadgets.rpc.setRelayUrl(p.getIframeId(z),a(t));if(typeof D=="function"){D.call(this)}}function v(){setTimeout(y,1000)}if(E.addEventListener){E.addEventListener("load",y,false)}else{if(window.attachEvent){v()}}p[z]=B;e.push({id:z,url:t});return B}p.createWidget=s;p.createWindowWidget=n;p.createDialogWidget=j;p.initializeContainer=r;p.getIframeId=function(o){return p[o].iframeId}})(Ozone.eventing);