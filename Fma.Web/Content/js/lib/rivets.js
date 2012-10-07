﻿// rivets.js
// version: 0.3.8
// author: Michael Richards
// license: MIT
(function(){var a,b,c,d,e,f,g,h,i,j=function(a,b){return function(){return a.apply(b,arguments)}},k=[].slice,l=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};a={},String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),a.Binding=function(){function h(c,f,h,i,k){this.el=c,this.type=f,this.model=h,this.keypath=i,this.options=k!=null?k:{},this.unbind=j(this.unbind,this),this.bind=j(this.bind,this),this.publish=j(this.publish,this),this.sync=j(this.sync,this),this.set=j(this.set,this),this.formattedValue=j(this.formattedValue,this),this.isBidirectional=j(this.isBidirectional,this),this.routine=function(){switch(this.options.special){case"event":return e(this.type);case"class":return d(this.type);case"iteration":return g(this.type);default:return a.routines[this.type]||b(this.type)}}.call(this),this.formatters=this.options.formatters||[]}return h.prototype.isBidirectional=function(){var a;return(a=this.type)==="value"||a==="checked"||a==="unchecked"},h.prototype.formattedValue=function(b){var c,d,e,f,g,h,i,j;h=this.formatters;for(f=0,g=h.length;f<g;f++)d=h[f],c=d.split(/\s+/),e=c.shift(),b=this.model[e]instanceof Function?(i=this.model)[e].apply(i,[b].concat(k.call(c))):a.formatters[e]?(j=a.formatters)[e].apply(j,[b].concat(k.call(c))):void 0;return b},h.prototype.set=function(a){return a=a instanceof Function&&this.options.special!=="event"?this.formattedValue(a.call(this.model)):this.formattedValue(a),this.options.special==="event"?(this.routine(this.el,a,this.currentListener),this.currentListener=a):this.options.special==="iteration"?this.routine(this.el,a,this):this.routine(this.el,a)},h.prototype.sync=function(){return this.set(this.options.bypass?this.model[this.keypath]:a.config.adapter.read(this.model,this.keypath))},h.prototype.publish=function(){return a.config.adapter.publish(this.model,this.keypath,f(this.el))},h.prototype.bind=function(){var b,d,e,f,g,h,i;this.options.bypass?this.sync():(a.config.adapter.subscribe(this.model,this.keypath,this.sync),a.config.preloadData&&this.sync());if((h=this.options.dependencies)!=null?h.length:void 0){i=this.options.dependencies;for(f=0,g=i.length;f<g;f++)b=i[f],/^\./.test(b)?(e=this.model,d=b.substr(1)):(b=b.split("."),e=this.view.models[b.shift()],d=b.join(".")),a.config.adapter.subscribe(e,d,this.sync)}if(this.isBidirectional())return c(this.el,"change",this.publish)},h.prototype.unbind=function(){var b,c,d,e,f;if(!this.options.bypass){a.config.adapter.unsubscribe(this.model,this.keypath,this.sync);if((e=this.options.dependencies)!=null?e.length:void 0){f=this.options.dependencies;for(c=0,d=f.length;c<d;c++)b=f[c],a.config.adapter.unsubscribe(this.model,b,this.sync)}if(this.isBidirectional())return this.el.removeEventListener("change",this.publish)}},h}(),a.View=function(){function b(a,b){this.els=a,this.models=b,this.publish=j(this.publish,this),this.sync=j(this.sync,this),this.unbind=j(this.unbind,this),this.bind=j(this.bind,this),this.select=j(this.select,this),this.build=j(this.build,this),this.bindingRegExp=j(this.bindingRegExp,this),this.els.jquery||this.els instanceof Array||(this.els=[this.els]),this.build()}return b.prototype.bindingRegExp=function(){var b;return b=a.config.prefix,b?new RegExp("^data-"+b+"-"):/^data-/},b.prototype.build=function(){var b,c,d,e,f,g,h,i,j,k,m,n,o,p,q,r=this;this.bindings=[],j=[],g=null,b=this.bindingRegExp(),e=/^on-/,c=/^class-/,f=/^each-/,i=function(d){var h,i,k,m,n,o,p,q,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J;if(l.call(j,d)<0){H=d.attributes;for(z=0,D=H.length;z<D;z++){i=H[z];if(b.test(i.name)){y=i.name.replace(b,"");if(f.test(y)&&!r.models[y.replace(f,"")]){I=d.getElementsByTagName("*");for(A=0,E=I.length;A<E;A++)s=I[A],j.push(s);g=[i]}}}J=g||d.attributes;for(B=0,F=J.length;B<F;B++){i=J[B];if(b.test(i.name)){t={},y=i.name.replace(b,""),w=function(){var a,b,c,d;c=i.value.split("|"),d=[];for(a=0,b=c.length;a<b;a++)v=c[a],d.push(v.trim());return d}(),m=function(){var a,b,c,d;c=w.shift().split("<"),d=[];for(a=0,b=c.length;a<b;a++)n=c[a],d.push(n.trim());return d}(),u=m.shift(),x=u.split(/\.|:/),t.formatters=w,q=r.models[x.shift()],t.bypass=u.indexOf(":")!==-1,p=x.join(".");if(q){if(o=m.shift())t.dependencies=o.split(/\s+/);e.test(y)&&(y=y.replace(e,""),t.special="event"),c.test(y)&&(y=y.replace(c,""),t.special="class"),f.test(y)&&(y=y.replace(f,""),t.special="iteration"),k=new a.Binding(d,y,q,p,t),k.view=r,r.bindings.push(k)}}if(g){for(C=0,G=g.length;C<G;C++)h=g[C],d.removeAttribute(h.name);g=null}}}},p=this.els;for(k=0,n=p.length;k<n;k++){d=p[k],i(d),q=d.getElementsByTagName("*");for(m=0,o=q.length;m<o;m++)h=q[m],i(h)}},b.prototype.select=function(a){var b,c,d,e,f;e=this.bindings,f=[];for(c=0,d=e.length;c<d;c++)b=e[c],a(b)&&f.push(b);return f},b.prototype.bind=function(){var a,b,c,d,e;d=this.bindings,e=[];for(b=0,c=d.length;b<c;b++)a=d[b],e.push(a.bind());return e},b.prototype.unbind=function(){var a,b,c,d,e;d=this.bindings,e=[];for(b=0,c=d.length;b<c;b++)a=d[b],e.push(a.unbind());return e},b.prototype.sync=function(){var a,b,c,d,e;d=this.bindings,e=[];for(b=0,c=d.length;b<c;b++)a=d[b],e.push(a.sync());return e},b.prototype.publish=function(){var a,b,c,d,e;d=this.select(function(a){return a.isBidirectional()}),e=[];for(b=0,c=d.length;b<c;b++)a=d[b],e.push(a.publish());return e},b}(),c=function(a,b,c){return window.jQuery!=null?(a=jQuery(a),a.on!=null?a.on(b,c):a.bind(b,c)):window.addEventListener!=null?a.addEventListener(b,c,!1):(b="on"+b,a.attachEvent(b,c))},i=function(a,b,c){return window.jQuery!=null?(a=jQuery(a),a.off!=null?a.off(b,c):a.unbind(b,c)):window.removeEventListener?a.removeEventListener(b,c,!1):(b="on"+b,a.detachEvent(b,c))},f=function(a){switch(a.type){case"checkbox":return a.checked;default:return a.value}},e=function(a){return function(b,d,e){d&&c(b,a,d);if(e)return i(b,a,e)}},d=function(a){return function(b,c){var d,e;d=" "+b.className+" ",e=d.indexOf(" "+a+" ")!==-1;if(!c===e)return b.className=c?""+b.className+" "+a:d.replace(" "+a+" "," ").trim()}},g=function(a){return function(b,c,d){var e,f,g,i,j,k,l,m,n,o,p,q,r,s;if(d.iterated!=null){q=d.iterated;for(m=0,o=q.length;m<o;m++)i=q[m],i.view.unbind(),i.el.parentNode.removeChild(i.el)}else d.marker=document.createComment(" rivets: each-"+a+" "),b.parentNode.insertBefore(d.marker,b),b.parentNode.removeChild(b);d.iterated=[],s=[];for(n=0,p=c.length;n<p;n++){f=c[n],e={},r=d.view.models;for(k in r)j=r[k],e[k]=j;e[a]=f,g=b.cloneNode(!0),l=d.iterated[d.iterated.length-1]||d.marker,d.marker.parentNode.insertBefore(g,l.nextSibling),s.push(d.iterated.push({el:g,view:h.bind(g,e)}))}return s}},b=function(a){return function(b,c){return c?b.setAttribute(a,c):b.removeAttribute(a)}},a.routines={enabled:function(a,b){return a.disabled=!b},disabled:function(a,b){return a.disabled=!!b},checked:function(a,b){return a.type==="radio"?a.checked=a.value===b:a.checked=!!b},unchecked:function(a,b){return a.type==="radio"?a.checked=a.value!==b:a.checked=!b},show:function(a,b){return a.style.display=b?"":"none"},hide:function(a,b){return a.style.display=b?"none":""},html:function(a,b){return a.innerHTML=b!=null?b:""},value:function(a,b){return a.value=b!=null?b:""},text:function(a,b){return a.innerText!=null?a.innerText=b!=null?b:"":a.textContent=b!=null?b:""}},a.config={preloadData:!0},a.formatters={},h={routines:a.routines,formatters:a.formatters,config:a.config,configure:function(b){var c,d;b==null&&(b={});for(c in b)d=b[c],a.config[c]=d},bind:function(b,c){var d;return c==null&&(c={}),d=new a.View(b,c),d.bind(),d}},typeof module!="undefined"&&module!==null?module.exports=h:this.rivets=h}).call(this);