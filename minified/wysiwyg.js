(function(i,p,a,d){var c=function(z,y,w){var x;return function(){if(x){if(!w){return}clearTimeout(x)}var B=this,A=arguments;x=setTimeout(function(){x=null;z.apply(B,A)},y)}};var q=function(x,z,y,w){if(x.addEventListener){x.addEventListener(z,y,w?true:false)}else{if(x.attachEvent){x.attachEvent("on"+z,y)}else{if(x!=i){x["on"+z]=y}}}};var s=function(x,z,y,w){if(x.removeEventListener){x.removeEventListener(z,y,w?true:false)}else{if(x.detachEvent){x.detachEvent("on"+z,y)}else{if(x!=i){x["on"+z]=null}}}};var v=function(y,z,x,w){if(p.createEvent){var A=p.createEvent("Event");A.initEvent(z,x!==d?x:true,w!==d?w:false);y.dispatchEvent(A)}else{if(p.createEventObject){var A=p.createEventObject();y.fireEvent("on"+z,A)}else{if(typeof(y["on"+z])=="function"){y["on"+z]()}}}};var t=function(w){if(w.preventDefault){w.preventDefault()}else{w.returnValue=false}if(w.stopPropagation){w.stopPropagation()}else{w.cancelBubble=true}return false};var n=typeof(Node)!="undefined"?Node.ELEMENT_NODE:1;var f=typeof(Node)!="undefined"?Node.TEXT_NODE:3;var l=function(w,x){var y=x;while(y){if(y===w){return true}y=y.parentNode}return false};var b=function(x,w){if(x.firstChild){return x.firstChild}while(x){if(x==w){return null}if(x.nextSibling){return x.nextSibling}x=x.parentNode}return null};var o=function(w){if(i.getSelection){var x=i.getSelection();if(x.rangeCount>0){return x.getRangeAt(0)}}else{if(p.selection){var x=p.selection;return x.createRange()}}return null};var k=function(w,y){if(!y){return}if(i.getSelection){var x=i.getSelection();x.removeAllRanges();x.addRange(y)}else{if(p.selection){y.select()}}};var g=function(){if(i.getSelection){var y=i.getSelection();if(!y.rangeCount){return false}var w=y.getRangeAt(0).cloneRange();if(w.getBoundingClientRect){var x=w.getBoundingClientRect();if(!x||(x.left==0&&x.top==0&&x.right==0&&x.bottom==0)){return false}return{left:parseInt(x.left),top:parseInt(x.top),width:parseInt(x.right-x.left),height:parseInt(x.bottom-x.top)}}}else{if(p.selection){var y=p.selection;if(y.type!="Control"){var w=y.createRange();return{left:w.boundingLeft,top:w.boundingTop,width:w.boundingWidth,height:w.boundingHeight}}}}return false};var h=function(x){if(i.getSelection){var z=i.getSelection();if(z.isCollapsed){return true}return false}else{if(p.selection){var z=p.selection;if(z.type=="Text"){var y=p.selection.createRange();var w=p.body.createTextRange();w.moveToElementText(x);w.setEndPoint("EndToStart",y);return y.htmlText.length==0}if(z.type=="Control"){return false}}}return true};var j=function(z){if(i.getSelection){var x=i.getSelection();if(!x.rangeCount){return[]}var w=[];for(var B=0;B<x.rangeCount;++B){var C=x.getRangeAt(B),y=C.startContainer,D=C.endContainer;while(y){if(y!=z){var E=false;if(x.containsNode){E=x.containsNode(y,true)}else{var A=p.createRange();A.selectNodeContents(y);for(var B=0;B<x.rangeCount;++B){var C=x.getRangeAt(B);if(C.compareBoundaryPoints(C.START_TO_START,A)<=0&&C.compareBoundaryPoints(C.END_TO_END,A)>=0){E=true;break}}}if(E){w.push(y)}}y=b(y,y==D?D:z)}}if(w.length==0&&l(z,x.focusNode)&&x.focusNode!=z){w.push(x.focusNode)}return w}else{if(p.selection){var x=p.selection;if(x.type=="Text"){var w=[];var C=x.createRange(),y=z;while(y){if(y!=z&&y.nodeType==n){var A=C.duplicate();A.moveToElementText(y);if(C.inRange(A)){w.push(y)}}y=b(y,z)}if(w.length==0&&l(z,p.activeElement)&&p.activeElement!=z){w.push(p.activeElement)}return w}if(x.type=="Control"){var w=[];var C=x.createRange();for(var B=0;B<C.length;++B){w.push(C(B))}return w}}}return[]};var e=function(){if(i.getSelection){var x=i.getSelection();if(!x.isCollapsed){x.collapseToEnd()}}else{if(p.selection){var x=p.selection;if(x.type!="Control"){var w=x.createRange();w.collapse(false);w.select()}}}};var r=function(x){if(h(x)){return null}if(i.getSelection){var C=i.getSelection();if(C.rangeCount){var y=p.createElement("div"),w=C.rangeCount;for(var A=0;A<w;++A){var B=C.getRangeAt(A).cloneContents();y.appendChild(B)}return y.innerHTML}}else{if(p.selection){var C=p.selection;if(C.type=="Text"){var z=C.createRange();return z.htmlText}}}return null};var m=function(w,A){if(i.getSelection){var z=i.getSelection();
if(l(w,z.anchorNode)&&l(w,z.focusNode)){return true}if(!A){return false}var x=p.createRange();x.selectNodeContents(w);x.collapse(false);z.removeAllRanges();z.addRange(x)}else{if(p.selection){var z=p.selection;if(z.type=="Control"){var x=z.createRange();if(x.length!=0&&l(w,x(0))){return true}}else{var y=p.body.createTextRange();y.moveToElementText(w);var x=z.createRange();if(y.inRange(x)){return true}}if(!A){return false}var x=p.body.createTextRange();x.moveToElementText(w);x.setEndPoint("StartToEnd",x);x.select()}}return true};var u=function(A,C){if(i.getSelection){var x=i.getSelection();if(x.getRangeAt&&x.rangeCount){var D=x.getRangeAt(0);var y=p.createElement("div");y.innerHTML=C;var E=p.createDocumentFragment(),z,w;while((z=y.firstChild)){w=E.appendChild(z)}if(l(A,D.commonAncestorContainer)){D.deleteContents();D.insertNode(E)}else{A.appendChild(E)}if(w){D=D.cloneRange();D.setStartAfter(w);D.collapse(true);x.removeAllRanges();x.addRange(D)}}}else{if(p.selection){var x=p.selection;if(x.type!="Control"){var B=x.createRange();B.collapse(true);var D=x.createRange();if(l(A,D.parentElement())){D.pasteHTML(C)}else{var F=p.body.createTextRange();F.moveToElementText(A);F.collapse(false);F.select();F.pasteHTML(C)}D=x.createRange();D.setEndPoint("StartToEnd",B);D.select()}}}};i.wysiwyg=function(L){L=L||{};var x=L.element||null;var ae=L.onkeypress||null;var ad=L.onselection||null;var y=L.onplaceholder||null;var A=L.hijackcontextmenu||false;var K=x.nodeName=="TEXTAREA"||x.nodeName=="INPUT";if(K){var S="contentEditable" in p.body;if(S){var w=a.userAgent.match(/(?:iPad|iPhone|Android).* AppleWebKit\/([^ ]+)/);if(w&&420<=parseInt(w[1])&&parseInt(w[1])<534){S=false}}if(!S){var Z=x;var E=function(af){return af.replace(/<br[ \/]*>\n?/gi,"<br>\n")};Z.value=E(Z.value);var C=function(){return this};var P=function(){return null};return{legacy:true,getElement:function(){return Z},getHTML:function(){return Z.value},setHTML:function(af){Z.value=E(af);return this},getSelectedHTML:P,sync:C,collapseSelection:C,openPopup:P,closePopup:C,removeFormat:C,bold:C,italic:C,underline:C,strikethrough:C,forecolor:C,highlight:C,fontName:C,fontSize:C,subscript:C,superscript:C,align:C,format:C,indent:C,insertLink:C,insertImage:C,insertHTML:C,insertList:C}}}var Z=null,T=null;if(K){Z=x;Z.style.display="none";T=p.createElement("DIV");T.innerHTML=Z.value;var H=Z.parentNode,O=Z.nextSibling;if(O){H.insertBefore(T,O)}else{H.appendChild(T)}}else{T=x}T.setAttribute("contentEditable","true");var B=(p.all&&!p.addEventListener)?p:i;var M=null;if(K){var U=T.innerHTML;M=function(){var af=T.innerHTML;if(af==U){return}Z.value=af;U=af;v(Z,"change",false)}}var ab;if(y){var G=false;ab=function(){var ah=true;var af=T;while(af){af=b(af,T);if(!af){}else{if(af.nodeType==n){if(af.nodeName=="IMG"){ah=false;break}}else{if(af.nodeType==f){var ag=af.nodeValue;if(ag&&ag.search(/[^\s]/)!=-1){ah=false;break}}}}}if(G!=ah){y(ah);G=ah}};ab()}var Y=null,R=null,z=null;if(ad){R=function(ai,ag,aq){var an=h(T);var ah=j(T);var ap=(ai===null||ag===null)?null:{left:ai,top:ag,width:0,height:0};var af=g();if(af){ap=af}if(ap){if(T.getBoundingClientRect){var ar=T.getBoundingClientRect();ap.left-=parseInt(ar.left);ap.top-=parseInt(ar.top)}else{var al=T,ak=0,aj=0,am=false;do{ak+=al.offsetLeft?parseInt(al.offsetLeft):0;aj+=al.offsetTop?parseInt(al.offsetTop):0;if(al.style.position=="fixed"){am=true}}while(al=al.offsetParent);ap.left-=ak-(am?0:i.pageXOffset);ap.top-=aj-(am?0:i.pageYOffset)}if(ap.left<0){ap.left=0}if(ap.top<0){ap.top=0}if(ap.width>T.offsetWidth){ap.width=T.offsetWidth}if(ap.height>T.offsetHeight){ap.height=T.offsetHeight}}else{if(ah.length){for(var ao=0;ao<ah.length;++ao){var al=ah[ao];if(al.nodeType!=n){continue}ap={left:al.offsetLeft,top:al.offsetTop,width:al.offsetWidth,height:al.offsetHeight};break}}}ad(an,ap,ah,aq)};z=c(R,1)}var I=null;var ac=function(ag){if(!ag){var ag=i.event}var af=ag.target||ag.srcElement;if(af.nodeType==f){af=af.parentNode}if(l(I,af)){return}N()};var X=function(){if(I){return I}q(B,"mousedown",ac,true);I=p.createElement("DIV");var ag=T.parentNode,af=T.nextSibling;if(af){ag.insertBefore(I,af)
}else{ag.appendChild(I)}return I};var N=function(){if(!I){return}I.parentNode.removeChild(I);I=null;s(B,"mousedown",ac,true)};q(T,"focus",function(){if(Z){v(Z,"focus",false)}});q(T,"blur",function(){if(M){M()}if(Z){v(Z,"blur",false)}});var J=null;if(ab||M){var D=M?c(M,250,true):null;var W=function(af){if(ab){ab()}if(D){D()}};J=c(W,1);q(T,"input",J);q(T,"DOMNodeInserted",J);q(T,"DOMNodeRemoved",J);q(T,"DOMSubtreeModified",J);q(T,"DOMCharacterDataModified",J);q(T,"propertychange",J);q(T,"textInput",J);q(T,"paste",J);q(T,"cut",J);q(T,"drop",J)}var aa=function(ai,af){if(!ai){var ai=i.event}var ag=0;if(ai.keyCode){ag=ai.keyCode}else{if(ai.which){ag=ai.which}}var ah=ai.charCode;if(af==1&&ae){var aj=ae(ag,ah?String(String):String.fromCharCode(ag),ai.shiftKey||false,ai.altKey||false,ai.ctrlKey||false,ai.metaKey||false);if(aj===false){return t(ai)}}if(af==2||af==3){Y=null;if(z){z(null,null,false)}}if(af==2&&J){switch(ag){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:break;default:J();break}}};q(T,"keydown",function(af){return aa(af,1)});q(T,"keypress",function(af){return aa(af,2)});q(T,"keyup",function(af){return aa(af,3)});var F=function(ai,af){if(!ai){var ai=i.event}var ah=null,ag=null;if(ai.clientX&&ai.clientY){ah=ai.clientX;ag=ai.clientY}else{if(ai.pageX&&ai.pageY){ah=ai.pageX-i.pageXOffset;ag=ai.pageY-i.pageYOffset}}if(ai.which&&ai.which==3){af=true}else{if(ai.button&&ai.button==2){af=true}}s(B,"mouseup",F);Y=null;if(!A&&af){return}if(z){z(ah,ag,af)}};q(T,"mousedown",function(af){s(B,"mouseup",F);q(B,"mouseup",F)});q(T,"mouseup",function(af){F(af);if(J){J()}});q(T,"dblclick",function(af){F(af)});q(T,"selectionchange",function(af){F(af)});if(A){q(T,"contextmenu",function(af){F(af,true);return t(af)})}var V=function(ak,aj,ah){k(T,Y);if(!m(T,ah)){return false}if(i.getSelection){try{if(p.queryCommandSupported&&!p.queryCommandSupported(ak)){return false}return p.execCommand(ak,false,aj)}catch(ai){}}else{if(p.selection){var ag=p.selection;if(ag.type!="None"){var af=ag.createRange();try{if(!af.queryCommandEnabled(ak)){return false}return af.execCommand(ak,false,aj)}catch(ai){}}}}return false};var Q=function(af){if(J){J()}if(af){e();Y=null}else{if(Y){Y=o(T)}}};return{getElement:function(){return T},getHTML:function(){return T.innerHTML},setHTML:function(af){T.innerHTML=af;Q(true);return this},getSelectedHTML:function(){k(T,Y);if(!m(T)){return null}return r(T)},sync:function(){if(M){M()}return this},collapseSelection:function(){e();Y=null;return this},openPopup:function(){if(!Y){Y=o(T)}return X()},closePopup:function(){N();return this},removeFormat:function(){V("removeFormat");V("unlink");Q();return this},bold:function(){V("bold");Q();return this},italic:function(){V("italic");Q();return this},underline:function(){V("underline");Q();return this},strikethrough:function(){V("strikeThrough");Q();return this},forecolor:function(af){V("foreColor",af);Q();return this},highlight:function(af){if(!V("hiliteColor",af)){V("backColor",af)}Q();return this},fontName:function(af){V("fontName",af);Q();return this},fontSize:function(af){V("fontSize",af);Q();return this},subscript:function(){V("subscript");Q();return this},superscript:function(){V("superscript");Q();return this},align:function(af){if(af=="left"){V("justifyLeft")}else{if(af=="center"){V("justifyCenter")}else{if(af=="right"){V("justifyRight")}else{if(af=="justify"){V("justifyFull")}}}}Q();return this},format:function(af){V("formatBlock",af);Q();return this},indent:function(af){V(af?"outdent":"indent");Q();return this},insertLink:function(af){V("createLink",af);Q(true);return this},insertImage:function(af){V("insertImage",af,true);Q(true);return this},insertHTML:function(af){if(!V("insertHTML",af,true)){k(T,Y);m(T,true);u(T,af)}Q(true);return this},insertList:function(af){V(af?"insertOrderedList":"insertUnorderedList");Q();return this}}}})(window,document,navigator);