(function(global, undefined) {
	//-------------------------------------
	//-- Bundle starter kit
	//-------------------------------------
	
	/* jshint ignore:start */
	var nwayo     = global.nwayo;
	var jQuery    = nwayo.vendor.jQuery;
	var $         = nwayo.vendor.jQuery;
	var $Global   = nwayo.vendor.jQuery_Global;
	var Modernizr = nwayo.vendor.Modernizr;
	var _         = nwayo.vendor._;
	var app       = global.POUEL = global.POUEL || {};
	
	app.tmpl = app.tmpl || {}
	
	var __ = {
		shortcut:    function(type,value) { return '[data-'+type+'="'+value+'"]'; },
		action:      function() { return __.shortcut('action', arguments[0]); },
		component:   function() { return __.shortcut('component', arguments[0]); },
		placeholder: function() { return __.shortcut('placeholder', arguments[0]); },
		field:       function() { return __.shortcut('field', arguments[0]); },
		showfor:     function() { return __.shortcut('showfor', arguments[0]); }
	};
	/* jshint ignore:end */
	

	//-------------------------------------
	//-- Main
	//-------------------------------------
	(function() {
		/* jshint strict:false */
	
		this.jQuery = $;
		﻿(function(n,t,i){"use strict";function it(n,t){t&&t.onError&&t.onError(n)===!1||(this.name="JsRender Error",this.message=n||"JsRender error")}function o(n,t){var i;n=n||{};for(i in t)n[i]=t[i];return n}function ct(n,t,i){return(!k.rTag||arguments.length)&&(a=n?n.charAt(0):a,v=n?n.charAt(1):v,f=t?t.charAt(0):f,h=t?t.charAt(1):h,w=i||w,n="\\"+a+"(\\"+w+")?\\"+v,t="\\"+f+"\\"+h,l="(?:(?:(\\w+(?=[\\/\\s\\"+f+"]))|(?:(\\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\\*)))\\s*((?:[^\\"+f+"]|\\"+f+"(?!\\"+h+"))*?)",k.rTag=l+")",l=new RegExp(n+l+"(\\/)?|(?:\\/(\\w+)))"+t,"g"),et=new RegExp("<.*>|([^\\\\]|^)[{}]|"+n+".*"+t)),[a,v,f,h,w]}function ei(n,t){t||(t=n,n=i);var e,f,o,u,r=this,s=!t||t==="root";if(n){if(u=r.type===t?r:i,!u)if(e=r.views,r._.useKey){for(f in e)if(u=e[f].get(n,t))break}else for(f=0,o=e.length;!u&&f<o;f++)u=e[f].get(n,t)}else if(s)while(r.parent.parent)u=r=r.parent;else while(r&&!u)u=r.type===t?r:i,r=r.parent;return u}function lt(){var n=this.get("item");return n?n.index:i}function oi(n){var r,u=this,t=(u.ctx||{})[n];return t=t===i?u.getRsc("helpers",n):t,t&&typeof t=="function"&&(r=function(){return t.apply(u,arguments)},o(r,t)),r||t}function si(n,t,u){var h,f,s,e=+u===u&&u,o=t.linkCtx;return e&&(u=(e=t.tmpl.bnds[e-1])(t.data,t,r)),s=u.args[0],(n||e)&&(f=o&&o.tag||{_:{inline:!o},tagName:n+":",flow:!0,_is:"tag"},f._.bnd=e,o&&(o.tag=f,f.linkCtx=o,u.ctx=c(u.ctx,o.view.ctx)),f.tagCtx=u,u.view=t,f.ctx=u.ctx||{},delete u.ctx,t._.tag=f,n=n!=="true"&&n,n&&((h=t.getRsc("converters",n))||p("Unknown converter: {{"+n+":"))&&(f.depends=h.depends,s=h.apply(f,u.args)),s=e&&t._.onRender?t._.onRender(s,t,e):s,t._.tag=i),s}function hi(n,t){for(var e=this,u=r[n],f=u&&u[t];f===i&&e;)u=e.tmpl[n],f=u&&u[t],e=e.parent;return f}function ci(n,t,u,f){var ft,s,et,nt,k,l,tt,it,h,d,y,ot,v,ut,w="",g=+f===f&&f,a=t.linkCtx||0,b=t.ctx,st=u||t.tmpl,ht=t._;for(n._is==="tag"&&(s=n,n=s.tagName),g&&(f=(ot=st.bnds[g-1])(t.data,t,r)),tt=f.length,s=s||a.tag,l=0;l<tt;l++)h=f[l],y=h.tmpl,y=h.content=y&&st.tmpls[y-1],u=h.props.tmpl,l||u&&s||(v=t.getRsc("tags",n)||p("Unknown tag: {{"+n+"}}")),u=u||(s?s._def:v).template||y,u=""+u===u?t.getRsc("templates",u)||e(u):u,o(h,{tmpl:u,render:rt,index:l,view:t,ctx:c(h.ctx,b)}),s||(v._ctr?(s=new v._ctr,ut=!!s.init,s.attr=s.attr||v.attr||i):s={render:v.render},s._={inline:!a},a&&(a.attr=s.attr=a.attr||s.attr,a.tag=s,s.linkCtx=a),(s._.bnd=ot||a)&&(s._.arrVws={}),s.tagName=n,s.parent=k=b&&b.tag,s._is="tag",s._def=v),ht.tag=s,h.tag=s,s.tagCtxs=f,s.flow||(d=h.ctx=h.ctx||{},et=s.parents=d.parentTags=b&&c(d.parentTags,b.parentTags)||{},k&&(et[k.tagName]=k),d.tag=s);for(s.rendering={},l=0;l<tt;l++)h=s.tagCtx=f[l],s.ctx=h.ctx,!l&&ut&&(s.init(h,a,s.ctx),ut=i),(ft=s.render)&&(it=ft.apply(s,h.args)),w+=it!==i?it:h.tmpl?h.render():"";return delete s.rendering,s.tagCtx=s.tagCtxs[0],s.ctx=s.tagCtx.ctx,s._.inline&&(nt=s.attr)&&nt!=="html"&&(w=nt==="text"?wt.html(w):""),g&&t._.onRender?t._.onRender(w,t,g):w}function b(n,t,r,u,f,e,o,s){var c,l,a,y=t==="array",v={key:0,useKey:y?0:1,id:""+fi++,onRender:s,bnds:{}},h={data:u,tmpl:f,content:o,views:y?[]:{},parent:r,ctx:n,type:t,get:ei,getIndex:lt,getRsc:hi,hlp:oi,_:v,_is:"view"};return r&&(c=r.views,l=r._,l.useKey?(c[v.key="_"+l.useKey++]=h,a=l.tag,v.bnd=y&&(!a||!!a._.bnd&&a)):c.splice(v.key=h.index=e!==i?e:c.length,0,h),h.ctx=n||r.ctx),h}function li(n){var t,i,r,u,f;for(t in y)if(u=y[t],(f=u.compile)&&(i=n[t+"s"]))for(r in i)i[r]=f(r,i[r],n,t,u)}function ai(n,t,i){var u,r;return typeof t=="function"?t={depends:t.depends,render:t}:((r=t.template)&&(t.template=""+r===r?e[r]||e(r):r),t.init!==!1&&(u=t._ctr=function(){},(u.prototype=t).constructor=u)),i&&(t._parentTmpl=i),t}function at(r,u,f,o,s,h){function v(i){if(""+i===i||i.nodeType>0){try{a=i.nodeType>0?i:!et.test(i)&&t&&t(n.document).find(i)[0]}catch(u){}return a&&(i=a.getAttribute(ht),r=r||i,i=e[i],i||(r=r||"_"+ui++,a.setAttribute(ht,r),i=e[r]=at(r,a.innerHTML,f,o,s,h))),i}}var l,a;return u=u||"",l=v(u),h=h||(u.markup?u:{}),h.tmplName=r,f&&(h._parentTmpl=f),!l&&u.markup&&(l=v(u.markup))&&l.fn&&(l.debug!==u.debug||l.allowCode!==u.allowCode)&&(l=l.markup),l!==i?(r&&!f&&(tt[r]=function(){return u.render.apply(u,arguments)}),l.fn||u.fn?l.fn&&(u=r&&r!==l.tmplName?c(h,l):l):(u=vt(l,h),ut(l,u)),li(h),u):void 0}function vt(n,t){var i,f=d.wrapMap||{},r=o({markup:n,tmpls:[],links:{},tags:{},bnds:[],_is:"template",render:rt},t);return t.htmlTag||(i=ii.exec(n),r.htmlTag=i?i[1].toLowerCase():""),i=f[r.htmlTag],i&&i!==f.div&&(r.markup=u.trim(r.markup),r._elCnt=!0),r}function vi(n,t){function u(e,o,s){var l,h,a,c;if(e&&""+e!==e&&!e.nodeType&&!e.markup){for(a in e)u(a,e[a],o);return r}return o===i&&(o=e,e=i),e&&""+e!==e&&(s=o,o=e,e=i),c=s?s[f]=s[f]||{}:u,h=t.compile,(l=k.onBeforeStoreItem)&&(h=l(c,e,o,h)||h),e?o===null?delete c[e]:c[e]=h?o=h(e,o,s,n,t):o:o=h(i,o),o&&(o._is=n),(l=k.onStoreItem)&&l(c,e,o,h),o}var f=n+"s";r[f]=u,y[n]=t}function rt(n,t,f,o,s,h){var w,ut,nt,v,tt,it,rt,k,y,ft,d,et,a,l=this,ot=!l.attr||l.attr==="html",g="";if(o===!0&&(rt=!0,o=0),l.tag?(k=l,l=l.tag,ft=l._,et=l.tagName,a=k.tmpl,t=c(t,l.ctx),y=k.content,k.props.link===!1&&(t=t||{},t.link=!1),f=f||k.view,n=n===i?f:n):a=l.jquery&&(l[0]||p('Unknown template: "'+l.selector+'"'))||l,a&&(!f&&n&&n._is==="view"&&(f=n),f&&(y=y||f.content,h=h||f._.onRender,n===f&&(n=f.data,s=!0),t=c(t,f.ctx)),f&&f.data!==i||((t=t||{}).root=n),a.fn||(a=e[a]||e(a)),a)){if(h=(t&&t.link)!==!1&&ot&&h,d=h,h===!0&&(d=i,h=f._.onRender),u.isArray(n)&&!s)for(v=rt?f:o!==i&&f||b(t,"array",f,n,a,o,y,h),w=0,ut=n.length;w<ut;w++)nt=n[w],tt=b(t,"item",v,nt,a,(o||0)+w,y,h),it=a.fn(nt,tt,r),g+=v._.onRender?v._.onRender(it,tt):it;else v=rt?f:b(t,et||"data",f,n,a,o,y,h),ft&&!l.flow&&(v.tag=l),g+=a.fn(n,v,r);return d?d(g,v):g}return""}function p(n){throw new r.sub.Error(n);}function s(n){p("Syntax error\n"+n)}function ut(n,t,i,r){function v(t){t-=f,t&&h.push(n.substr(f,t).replace(nt,"\\n"))}function c(t){t&&s('Unmatched or missing tag: "{{/'+t+'}}" in template:\n'+n)}function y(e,l,y,w,b,k,d,g,tt,it,rt,ut){k&&(b=":",w="html"),it=it||i;var at,st,ht=l&&[],ot="",et="",ct="",lt=!it&&!b&&!d;y=y||b,v(ut),f=ut+e.length,g?p&&h.push(["*","\n"+tt.replace(dt,"$1")+"\n"]):y?(y==="else"&&(ti.test(tt)&&s('for "{{else if expr}}" use "{{else expr}}"'),ht=u[6],u[7]=n.substring(u[7],ut),u=o.pop(),h=u[3],lt=!0),tt&&(tt=tt.replace(nt," "),ot=ft(tt,ht,t).replace(ni,function(n,t,i){return t?ct+=i+",":et+=i+",",""})),et=et.slice(0,-1),ot=ot.slice(0,-1),at=et&&et.indexOf("noerror:true")+1&&et||"",a=[y,w||!!r||"",ot,lt&&[],'params:"'+tt+'",props:{'+et+"}"+(ct?",ctx:{"+ct.slice(0,-1)+"}":""),at,ht||0],h.push(a),lt&&(o.push(u),u=a,u[7]=f)):rt&&(st=u[0],c(rt!==st&&st!=="else"&&rt),u[7]=n.substring(u[7],ut),u=o.pop()),c(!u&&rt),h=u[3]}var a,p=t&&t.allowCode,e=[],f=0,o=[],h=e,u=[,,,e];return n=n.replace(gt,"\\$&"),c(o[0]&&o[0][3].pop()[0]),n.replace(l,y),v(n.length),(f=e[e.length-1])&&c(""+f!==f&&+f[7]===f[7]&&f[0]),yt(e,i?n:t,i)}function yt(n,i,r){var c,f,e,l,a,y,st,ht,ct,lt,ft,p,o,et,v,tt,w,it,at,b,pt,wt,ot,rt,k,h=0,u="",g="",ut={},bt=n.length;for(""+i===i?(v=r?'data-link="'+i.replace(nt," ").slice(1,-1)+'"':i,i=0):(v=i.tmplName||"unnamed",i.allowCode&&(ut.allowCode=!0),i.debug&&(ut.debug=!0),p=i.bnds,et=i.tmpls),c=0;c<bt;c++)if(f=n[c],""+f===f)u+='\nret+="'+f+'";';else if(e=f[0],e==="*")u+=""+f[1];else{if(l=f[1],a=f[2],it=f[3],y=f[4],g=f[5],at=f[7],(wt=e==="else")||(h=0,p&&(o=f[6])&&(h=p.push(o))),(ot=e===":")?(l&&(e=l==="html"?">":l+e),g&&(rt="prm"+c,g="try{var "+rt+"=["+a+"][0];}catch(e){"+rt+'="";}\n',a=rt)):(it&&(tt=vt(at,ut),tt.tmplName=v+"/"+e,yt(it,tt),et.push(tt)),wt||(w=e,pt=u,u=""),b=n[c+1],b=b&&b[0]==="else"),y+=",args:["+a+"]}",ot&&o||l&&e!==">"){if(k=new Function("data,view,j,u"," // "+v+" "+h+" "+e+"\n"+g+"return {"+y+";"),k.paths=o,k._ctxs=e,r)return k;ft=1}if(u+=ot?"\n"+(o?"":g)+(r?"return ":"ret+=")+(ft?(ft=0,lt=!0,'c("'+l+'",view,'+(o?(p[h-1]=k,h):"{"+y)+");"):e===">"?(ht=!0,"h("+a+");"):(ct=!0,"(v="+a+")!="+(r?"=":"")+'u?v:"";')):(st=!0,"{tmpl:"+(it?et.length:"0")+","+y+","),w&&!b){if(u="["+u.slice(0,-1)+"]",(r||o)&&(u=new Function("data,view,j,u"," // "+v+" "+h+" "+w+"\nreturn "+u+";"),o&&((p[h-1]=u).paths=o),u._ctxs=e,r))return u;u=pt+'\nret+=t("'+w+'",view,this,'+(h||u)+");",o=0,w=0}}u="// "+v+"\nvar j=j||"+(t?"jQuery.":"js")+"views"+(ct?",v":"")+(st?",t=j._tag":"")+(lt?",c=j._cnvt":"")+(ht?",h=j.converters.html":"")+(r?";\n":',ret="";\n')+(d.tryCatch?"try{\n":"")+(ut.debug?"debugger;":"")+u+(r?"\n":"\nreturn ret;\n")+(d.tryCatch?"\n}catch(e){return j._err(e);}":"");try{u=new Function("data,view,j,u",u)}catch(kt){s("Compiled template code:\n\n"+u,kt)}return i&&(i.fn=u),u}function ft(n,t,i){function w(w,b,k,d,g,nt,tt,it,rt,et,ot,st,ht,ct,lt,at,vt,yt,pt){function kt(n,i,r,u,f,e,o){if(i&&(t&&!l&&t.push(d),i!==".")){var s=(r?'view.hlp("'+r+'")':u?"view":"data")+(o?(f?"."+f:r?"":u?"":"."+i)+(e||""):(o=r?"":u?f||"":i,""));return s=s+(o?"."+o:""),s.slice(0,9)==="view.data"?s.slice(5):s}return n}var wt;if(g=g||"",k=k||b||ot,d=d||it,rt=rt||at||"",nt)s(n);else return t&&lt&&(wt=y[r],pt.length-2>yt-wt&&(wt=pt.slice(wt,yt+1),lt=v+":"+wt+f,lt=p[lt]=p[lt]||ut(a+lt+h,i,!0),lt.paths||ft(wt,lt.paths=[],i),t.push({_jsvOb:lt}))),o?(o=!st,o?w:'"'):e?(e=!ht,e?w:'"'):(k?(r++,y[r]=yt++,k):"")+(vt?r?"":c?(c=l=!1,"\b"):",":tt?(r&&s(n),c=d,l=d.charAt(0)==="~","\b"+d+":"):d?d.split("^").join(".").replace(bt,kt)+(rt?(u[++r]=!0,d.charAt(0)!=="."&&(y[r]=yt),rt):g):g?g:ct?(u[r--]=!1,ct)+(rt?(u[++r]=!0,rt):""):et?(u[r]||s(n),","):b?"":(o=st,e=ht,'"'))}var c,l,p=i.links,u={},y={0:-1},r=0,e=!1,o=!1;return(n+" ").replace(kt,w)}function c(n,t){return n&&n!==t?t?o(o({},t),n):n:t&&o({},t)}function pt(n){return st[n]||(st[n]="&#"+n.charCodeAt(0)+";")}if((!t||!t.views)&&!n.jsviews){var u,g,l,et,a="{",v="{",f="}",h="}",w="^",bt=/^(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,kt=/(\()(?=\s*\()|(?:([([])\s*)?(?:([#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*!:?\/]|(=))\s*|([#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*\.|\s*\^)|[)\]])([([]?))|(\s+)/g,nt=/\s*\n/g,dt=/\\(['"])/g,gt=/['"\\]/g,ni=/\x08(~)?([^\x08]+)\x08/g,ti=/^if\s/,ii=/<(\w+)[>\s]/,ot=/[\x00`><"'&]/g,ri=ot,ui=0,fi=0,st={"&":"&amp;","<":"&lt;",">":"&gt;","\x00":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;"},ht="data-jsv-tmpl",tt={},y={template:{compile:at},tag:{compile:ai},helper:{},converter:{}},r={jsviews:"v1.0.0-beta",render:tt,settings:{delimiters:ct,debugMode:!0,tryCatch:!0},sub:{View:b,Error:it,tmplFn:ut,parse:ft,extend:o,error:p,syntaxError:s},_cnvt:si,_tag:ci,_err:function(n){return d.debugMode?"Error: "+(n.message||n)+". ":""}};(it.prototype=new Error).constructor=it,lt.depends=function(){return[this.get("item"),"index"]};for(g in y)vi(g,y[g]);var e=r.templates,wt=r.converters,pi=r.helpers,yi=r.tags,k=r.sub,d=r.settings;t?(u=t,u.fn.render=rt):(u=n.jsviews={},u.isArray=Array&&Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"}),u.render=tt,u.views=r,u.templates=e=r.templates,yi({"else":function(){},"if":{render:function(n){var t=this;return t.rendering.done||!n&&(arguments.length||!t.tagCtx.index)?"":(t.rendering.done=!0,t.selected=t.tagCtx.index,t.tagCtx.render())},onUpdate:function(n,t,i){for(var r,f,u=0;(r=this.tagCtxs[u])&&r.args.length;u++)if(r=r.args[0],f=!r!=!i[u].args[0],!!r||f)return f;return!1},flow:!0},"for":{render:function(n){var t=this,f=t.tagCtx,e=!arguments.length,r="",o=e||0;return t.rendering.done||(e?r=i:n!==i&&(r+=f.render(n),o+=u.isArray(n)?n.length:1),(t.rendering.done=o)&&(t.selected=f.index)),r},onArrayChange:function(n,t){var i,u=this,r=t.change;if(this.tagCtxs[1]&&(r==="insert"&&n.target.length===t.items.length||r==="remove"&&!n.target.length||r==="refresh"&&!t.oldItems.length!=!n.target.length))this.refresh();else for(i in u._.arrVws)i=u._.arrVws[i],i.data===n.target&&i._.onArrayChange.apply(i,arguments);n.done=!0},flow:!0},include:{flow:!0},"*":{render:function(n){return n},flow:!0}}),wt({html:function(n){return n!=i?String(n).replace(ri,pt):""},attr:function(n){return n!=i?String(n).replace(ot,pt):n===null?null:""},url:function(n){return n!=i?encodeURI(String(n)):n===null?null:""}}),ct()}})(this,this.jQuery);
		//JsRender v1.0.0-beta: http://jsviews.com
		
	
		this.jQuery = $Global;
	
		/* jshint strict:true */
	})();
		
	
	app.tmpl.common_patate = $.templates('common_patate', 'PATATE3');
		
	
	app.tmpl.common_pouel = $.templates('common_pouel', 'POUEL2');

	// [gulp-nwayo-include] -- Skipping 'common/templates/patate', already included.

	// [gulp-nwayo-include] -- Skipping 'common/templates/pouel', already included.

	
	(function(){
		'use strict';
	
		var local = {};
	
	
		/*- Cache data -------------------------------------------------------------------*/
		local.cache = function() {
	
			// env
			app.env = {};
	
			app.env.culture = kafe.env('culture');
			app.env.lang    = kafe.env('lang');
			app.env.page    = kafe.env('page');
			app.env.tmpl    = kafe.env('tmpl');
	
			//app.env.isUniquePage = (app.env.page == 'UID');
			//app.env.isTypePage   = _.contains(app.env.tmpl, 'TYPE-ID');
			//app.env.isOneOfThese = !!_.intersection(app.env.tmpl, ['ID1', 'ID2']).length;
	
	
			// dom
			app.dom = {};
			app.dom.window     = $(global);
			app.dom.document   = $(document);
			app.dom.body       = $('body');
			//app.dom.header     = $('.header');
			//app.dom.content    = $('.content');
			//app.dom.lateralCol = $('.lateral-col') || undefined;
			//app.dom.footer     = $('.footer');
	
	
			// path
			app.path = {};
	
			app.path.root  = '/nwayo/';
			app.path.builds = app.path.root+'builds/';
			app.path.images = app.path.builds+'images/';
			app.path.stubs  = app.path.root+'stubs/';
	
	
			// tmpl
			/**
			app.tmpl = window.nwayo_jshtml;
			kafe.fn.deleteVar('window.nwayo_jshtml');
	
			$('script[type="text/x-jsrender"]').each(function () {
				var id = $(this).attr('id');
				app.tmpl[id.substring(7)] = $.templates('#'+id);
			});
			/**/
	
	
			// colorbox default params
			/**
			kafe.ext.colorbox.setParams({
				close:      (app.env.lang == 'en') ? 'Close' : 'Fermer',
				opacity:     0.7,
				transition: 'elastic'
				// if popup is hash triggered
				// onClosed: function () { window.location = '#/'; }
			});
			/**/
		};
	
	
		/*- Bind events -------------------------------------------------------------------*/
		local.bind = function() {
	
			app.dom.body
	
				// external links
				.on('click', 'a[data-external="true"]', function() {
					$(this).attr('target', '_blank');
				})
	
				// anchors
				/**
				.on('click', 'a[data-anchor="true"]', function(e) {
					e.preventDefault();
					$.scrollTo($(this).attr('href'), (Modernizr.touch) ? 0 : 500, {offset:{top:-15}});
				})
				/**/
			;
	
	
			// input mask
			/**
			$('input[data-mask]').each(function() {
				var
					$this = $(this),
					mask  = $this.data('mask')
				;
	
				switch (mask) {
					case 'phone':       $this.inputmask('(999) 999-9999'); break;
					case 'phone-ext':   $this.inputmask('(999) 999-9999 [ext: 99999]'); break;
					case 'date':        $this.inputmask('yyyy-mm-dd'); break;
					case 'time':        $this.inputmask('hh:mm:ss'); break;
					case 'postalcode':  $this.inputmask('A9A 9A9'); break;
					case 'numeric':     $this.inputmask('non-negative-decimal', {radixPoint:',', digits:2 }); break;
					case 'numeric-int': $this.inputmask('9', {repeat:6, greedy:false }); break;
					default:            $this.inputmask(mask); break;
				}
			});
			/**/
		};
	
	
		/*- To execute on start -------------------------------------------------------------------*/
		local.start = function() {
	
			// svg replacement
			if(!Modernizr.svg) {
				$('img[src*="svg"]').attr('src', function() {
					return $(this).attr('src').replace('.svg', '.png');
				});
			}
	
			// web font loader
			/**
			WebFont.load({
				custom:       { families: ['FontName1','FontName2','FontName3'] },
				loading:      function() { app.dom.body.trigger('WebFont:loading'); },
				active:       function() { app.dom.body.trigger('WebFont:active'); },
				inactive:     function() { app.dom.body.trigger('WebFont:inactive'); },
				fontloading:  function(familyName, fvd) { app.dom.body.trigger('WebFont:loading_font'); },
				fontactive:   function(familyName, fvd) { app.dom.body.trigger('WebFont:active_font'); },
				fontinactive: function(familyName, fvd) { app.dom.body.trigger('WebFont:inactive_font'); }
			});
	
			// fonts loaded
			app.dom.body.on('WebFont:active', function() {
	
			});
			/**/
	
	
			// addthis
			/**
			window.addthis_config = { ui_language: app.env.lang };
			window.addthis.init();
			/**/
	
		};
	
	
		$(function() {
			local.cache();
			local.bind();
			local.start();
		});
	
	})();
	

	// [gulp-include] -- Skipping common/scripts/main, already included.

	//-------------------------------------
	//-- Utils
	//-------------------------------------
	
	//= **require ''
	
	(function(){
		'use strict';
	
		app.utils = {};
	
		/*- Do something -------------------------------------------------------------------*/
		app.utils.something = function() {
	
		};
	
	
	})();
	

	//-------------------------------------
	//-- Variant
	//-------------------------------------
	
	//= **require ''
	
	(function(){
		'use strict';
	
		var local = {};
	
		local.dssd = '';
	
		/*- Home -------------------------------------------------------------------*/
		/**
		local.initHome = function() {
			if (app.env.isHome) {
	
			}
		};
		/**/
	
		/*- Lateral Column -------------------------------------------------------------------*/
		/**
		local.initLateralcolumn = function() {
			if (app.dom.lateralCol.length) {
	
			}
		};
		/**/
	
	
		$(function() {
			//local.initHome();
			//local.initLateralcolumn();
		});
	
	})();
	


/* global window */
})(typeof window !== 'undefined' ? window : this);