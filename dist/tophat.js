!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){b.exports=function(a,b){var c=b||document;if(c.createStyleSheet)c.createStyleSheet().cssText=a;else{var d=c.getElementsByTagName("head")[0],e=c.createElement("style");e.type="text/css",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(c.createTextNode(a)),d.appendChild(e)}},b.exports.byUrl=function(a){if(document.createStyleSheet)document.createStyleSheet(a);else{var b=document.getElementsByTagName("head")[0],c=document.createElement("link");c.rel="stylesheet",c.href=a,b.appendChild(c)}}},{}],2:[function(a,b){function c(){var a={},b=d();if(b)for(len=e.length,i=0;len>i;i++){var c=e[i],g=b.getAttribute("data-"+c);g&&""!==g&&(a[c]=g)}a.evidence&&(a.service="evidence");var h=f[a.environment]||"https://"+(a.environment?a.environment+"-":"")+"accounts.nice.org.uk";return a.accountsUrl=h+"/tophat",a}function d(){var a=document.currentScript;if(a)return a;var b,c,d=document.getElementsByTagName("script");for(c=d.length,b=0;c>b;b++)if(d[b].src.indexOf("/tophat.js")||d[b].src.indexOf("/tophat.dev.js"))return d[b]}var e=["service","evidence","environment","timestamp","search","typeaheadtype","typeaheadsource","internal"],f={local:"http://nice.sts.local"};b.exports=c},{}],3:[function(a,b){var c='@font-face{font-family:"NICE.Glyphs";src:url(//cdn.nice.org.uk/V3/Content/nice-glyphs/NICE.Glyphs.eot?#iefix&v=1.3) format(\'embedded-opentype\'),url(//cdn.nice.org.uk/V3/Content/nice-glyphs/NICE.Glyphs.woff?v=1.3) format(\'woff\'),url(//cdn.nice.org.uk/V3/Content/nice-glyphs/NICE.Glyphs.ttf?v=13) format(\'truetype\'),url(//cdn.nice.org.uk/V3/Content/nice-glyphs/NICE.Glyphs.svg#fontawesomeregular?v=1.3) format(\'svg\');font-weight:400;font-style:normal}.nice-tophat{min-height:60px;*position:relative;*z-index:2001;font-family:Lato,"Helvetica Neue",Helvetica,Arial,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:14px;font-weight:400;line-height:24px;-moz-box-shadow:0 0 6px 0 rgba(0,0,0,.2);box-shadow:0 0 6px 0 rgba(0,0,0,.2)}.nice-tophat .tophat-inner{width:95.74468085%;max-width:1170px;margin:0 auto}.nice-tophat .menu{position:relative;left:0;display:block;float:right;margin:0 0 0 12px;padding:0;list-style:none}.nice-tophat .menu li{float:left}.nice-tophat a{display:block;padding:6px 12px;color:#fff;text-decoration:none;font-weight:400}.nice-tophat a:focus,.nice-tophat a:hover,.nice-tophat a:active{color:#fff;text-decoration:none}.layout-fill .nice-tophat .tophat-inner{width:auto;max-width:100%;margin:0 12px}.nice-tophat .logo,.nice-tophat .icon-search,.nice-tophat .profile-avatar,.nice-tophat [class^=service-logo-]{font-style:normal;font-family:"NICE.Glyphs";speak:none;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased}.nice-tophat .logo,.nice-tophat .partner-logo{float:left;display:block;padding:6px 24px;margin-left:-24px;font-size:0;line-height:0}.nice-tophat .logo{border-left:0}.nice-tophat .logo small{display:none}.nice-tophat .logo:before{content:"\\e01a\\e01b";font-size:48px;line-height:48px;letter-spacing:-.6em}.nice-tophat .profile-avatar,.nice-tophat .service-logo{float:left;position:relative;width:40px;height:40px;line-height:40px;vertical-align:-35%;margin-left:-48px;font-style:normal}.nice-tophat .profile-avatar,.nice-tophat [class^=service-logo-]{color:#fff;text-align:center;position:absolute;width:100%;height:100%;font-size:20px;line-height:inherit;vertical-align:baseline;speak:none;*line-height:40px}.nice-tophat .profile-avatar:before,.nice-tophat [class^=service-logo-]:before{display:inline-block;height:40px;width:40px}.nice-tophat .profile-avatar{float:none;position:relative;margin-left:0}.nice-tophat .service-logo-pathways:before{content:"\\e005"}.nice-tophat .service-logo-standards:before{content:"\\e002"}.nice-tophat .service-logo-guidance:before{content:"\\e00e"}.nice-tophat .service-logo-evidence:before{content:"\\e017"}.nice-tophat .icon-search:before,.nice-tophat .service-logo-search:before{content:"\\e004"}.nice-tophat .profile-avatar:before{content:"\\e01f"}.nice-tophat .service-logo-base{color:#333;font-size:40px;*line-height:40px}.nice-tophat .service-logo-base:before{content:"\\e019"}.nice-internal{min-height:50px;width:100%}.nice-internal .logo,.nice-internal .logo:hover,.nice-internal .logo:focus,.nice-internal .logo:active{color:#263238}.nice-internal .logo small{font-family:Lato,"Helvetica Neue",Helvetica,Arial,sans-serif;display:inline-block;font-size:28px;line-height:36px;vertical-align:top}.nice-internal .logo:before{float:left;margin-top:2px;font-size:32px;line-height:36px;content:"\\e01a";letter-spacing:-12px}.nice-services,.nice-evidence,.nice-profile,.nice-global{*zoom:1}.nice-services:before,.nice-evidence:before,.nice-profile:before,.nice-global:before,.nice-services:after,.nice-evidence:after,.nice-profile:after,.nice-global:after{display:table;content:"";line-height:0}.nice-services:after,.nice-evidence:after,.nice-profile:after,.nice-global:after{clear:both}.nice-services{background-color:#333}.nice-services a:hover [class^=service-logo-],.nice-services a:focus [class^=service-logo-],.nice-services a:active [class^=service-logo-],.nice-services .active [class^=service-logo-]{color:#000}.nice-services a:hover .service-logo-base,.nice-services a:focus .service-logo-base,.nice-services a:active .service-logo-base,.nice-services .active .service-logo-base{color:#FFC100}.nice-services .menu a{width:70px;padding:10px 0 10px 60px;line-height:20px;border-left:1px solid #343c41}.nice-services .menu a:hover,.nice-services .menu a:focus,.nice-services .menu a:active{background-color:#234e5b}.nice-services .active a,.nice-services .active a:hover,.nice-services .active a:focus,.nice-services .active a:active{background-color:#316e80}.nice-services .menu-anonymous a,.nice-services .menu-profile a{width:auto;text-align:center;padding:12px}.nice-services .menu-anonymous a{line-height:40px;padding:10px 12px}.nice-services .menu-profile .menu-label,.nice-services .menu-guidance .menu-label{line-height:40px}.nice-services .menu-profile .profile-avatar{display:inline-block;width:36px;height:36px;line-height:40px}.nice-services .menu-pathways a{width:65px}.nice-services .menu-standards a{width:95px}.nice-services .menu-search{display:none}.nice-internal .nice-services{background:#fff}.nice-internal .nice-services a{color:#263238;border-left:none;padding-top:5px;padding-bottom:5px}.nice-internal .nice-services .menu a:hover,.nice-internal .nice-services .menu a:focus,.nice-internal .nice-services .menu a:active{color:#263238;background:0 0}.nice-internal .nice-services .active a,.nice-internal .nice-services .active a:hover,.nice-internal .nice-services .active a:focus,.nice-internal .nice-services .active a:active{color:#263238;background:0 0}.menu-profile-open .menu-profile a,.menu-search-open .menu-search a,.menu-evidence-open .menu-evidence a,.menu-profile-open .menu-profile a:hover,.menu-search-open .menu-search a:hover,.menu-evidence-open .menu-evidence a:hover,.menu-profile-open .menu-profile a:focus,.menu-search-open .menu-search a:focus,.menu-evidence-open .menu-evidence a:focus,.menu-profile-open .menu-profile a:active,.menu-search-open .menu-search a:active,.menu-evidence-open .menu-evidence a:active{background-color:#316e80}.menu-profile-open .menu-profile [class^=service-logo-],.menu-search-open .menu-search [class^=service-logo-],.menu-evidence-open .menu-evidence [class^=service-logo-]{color:#000}.menu-profile-open .menu-profile .service-logo-base,.menu-search-open .menu-search .service-logo-base,.menu-evidence-open .menu-evidence .service-logo-base,.menu-profile-open .menu-profile .service-logo-base,.menu-search-open .menu-search .service-logo-base,.menu-evidence-open .menu-evidence .service-logo-base,.menu-profile-open .menu-profile .service-logo-base,.menu-search-open .menu-search .service-logo-base,.menu-evidence-open .menu-evidence .service-logo-base{color:#FFC100}.nice-profile,.nice-evidence{background:#316e80;display:none}.nice-profile .menu,.nice-evidence .menu{border-right:1px solid #2d6475}.nice-profile a,.nice-evidence a{padding-left:12px;padding-right:12px;border-left:1px solid #2d6475}.nice-profile a:hover,.nice-evidence a:hover,.nice-profile a:focus,.nice-evidence a:focus,.nice-profile a:active,.nice-evidence a:active{background-color:#387e92}.nice-profile .active a:hover,.nice-evidence .active a:hover,.nice-profile .active a:focus,.nice-evidence .active a:focus,.nice-profile .active a:active,.nice-evidence .active a:active,.nice-profile .active a,.nice-evidence .active a{color:#000;background-color:#ffc100}.menu-profile-open .nice-profile,.menu-evidence-open .nice-evidence{display:block}.nice-profile{position:absolute;z-index:2003;width:250px;padding:6px 0;left:50%;margin-left:340px}.nice-profile a{border-left:0;border-top:1px solid #2d6475}.nice-profile li:first-child a{border-top:0}.nice-tophat .nice-profile .menu,.nice-tophat .nice-profile li{float:none;display:block;margin-left:0;border-right:0}.nice-internal .profile-avatar{color:#263238}.nice-internal .menu-profile a,.nice-internal .menu-profile a:hover,.nice-internal .menu-profile a:focus,.nice-internal .menu-profile a:active{background:0 0}.nice-internal .nice-profile{background-color:#37474f}.nice-internal .nice-profile li a{border-top-color:#37474f}.nice-internal .nice-profile li a,.nice-internal .nice-profile li a:hover,.nice-internal .nice-profile li a:focus,.nice-internal .nice-profile li a:active{color:#fff}.nice-internal .nice-profile li a:hover{background-color:internalEvidenceHoverBackgroundColor}.nice-internal .profile-container.open{background:#f5f5f5}.nice-global{background:#eff1f3}.nice-global a{font-size:16px;color:#000;padding:19px 12px 20px}.nice-global a:hover,.nice-global a:focus,.nice-global a:active{color:#000;background:rgba(255,255,255,.4);padding-bottom:16px;border-bottom:4px solid #ffc100}.nice-global .active a,.nice-global .active a:hover,.nice-global .active a:focus,.nice-global .active a:active{background:rgba(255,255,255,.6);padding-bottom:16px;border-bottom:4px solid #ffc100}.nice-global .icon-search{font-size:24px}.nice-internal .nice-global a{padding-top:9px;padding-bottom:10px}.nice-internal .nice-global a:hover,.nice-internal .nice-global a:focus,.nice-internal .nice-global a:active{padding-bottom:8px;border-bottom-width:2px}.nice-internal .nice-global .active a,.nice-internal .nice-global .active a:hover,.nice-internal .nice-global .active a:focus,.nice-internal .nice-global .active a:active{padding-bottom:8px;border-bottom-width:2px}.nice-partner .partner-logo{float:left;display:block;margin:12px 0 0 -24px}.nice-partner .partner-logo:hover,.nice-partner .partner-logo:focus,.nice-partner .partner-logo:active{background:0 0;padding-bottom:0;border-bottom:none}.nice-partner .partner-logo img{height:72px}.nice-partner .partner-brand{display:block;font-size:24px;line-height:36px;margin:0 0 -6px;padding:12px 0 0;color:#888}.nice-partner .partner-brand small{float:right;margin:-10px 10px 0 0}.nice-partner .publication-date{float:right;font-size:16px;margin-top:-4px;margin-right:12px;color:#666}.nice-search{float:left;position:relative;width:40%;margin:12px 0}.nice-search .controls{margin-right:40px}.nice-search input{display:block;width:100%;padding:0 12px;margin:0;height:36px;font-family:Lato,"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;line-height:1;color:#333;border:1px solid #ccc;vertical-align:middle;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-appearance:textfield}.nice-search input:focus{outline:0}.nice-search button{display:inline-block;color:#fff;background:#1167b7;overflow:hidden;position:absolute;height:38px;width:38px;margin:0;padding:0;top:0;right:0;border:1px solid #1167b7;font-size:0;line-height:normal}@media (max-width:1180px){.nice-profile{left:auto;right:12px;margin-left:0}}@media (max-width:1059px){.nice-tophat .logo:before{content:"\\e01a"}}@media (max-width:979px){.nice-tophat .tophat-inner{width:auto;max-width:100%;margin:0 12px}.menu-profile-open .nice-profile,.menu-evidence-open .nice-evidence{display:block}.nice-search{width:100%}.nice-partner .controls{margin-left:110px}.nice-global{position:relative}.nice-global .menu,.nice-global .partner-brand{display:none;visibility:hidden;speak:none}.nice-partner .partner-logo{position:absolute;top:12px;left:12px;padding:0;margin:0;z-index:2002}.nice-partner .partner-logo img{height:38px}}@media (max-width:797px){.nice-tophat{min-height:48px;background:rgba(0,0,0,.075);padding-bottom:2px;margin-bottom:-2px}.nice-tophat .logo{padding:0 0 0 24px}.nice-tophat .logo:before{font-size:38px}.nice-tophat .logo small{display:none}.nice-services .menu{margin-right:-12px}.nice-services .menu a{width:auto;padding:6px}.nice-services .profile-avatar,.nice-services .service-logo{float:none;margin-left:0;display:inline-block}.nice-services .menu-search{display:block}.nice-services .menu-label{display:none;visibility:hidden}.nice-services .menu-profile a{padding:8px 12px}.nice-services .anon a{padding:6px 12px}.nice-services .anon .menu-label{display:block;visibility:visible}.nice-global{display:none}.menu-search-open .nice-global{display:block}}@media (max-width:499px){.nice-profile,.nice-evidence{position:absolute;width:100%;z-index:2003}.nice-profile a,.nice-evidence a{border-left:0;border-top:1px solid #2d6475}.nice-profile li:first-child a,.nice-evidence li:first-child a{border-top:0}.menu-profile-open .nice-profile{padding:0;left:0;margin-left:0}.nice-tophat .nice-profile .menu,.nice-tophat .nice-evidence .menu,.nice-tophat .nice-profile li,.nice-tophat .nice-evidence li{float:none;display:block;margin-left:0;border-right:0}.nice-services .menu a{padding:4px 1px}.nice-services .menu .menu-profile a{padding:6px 1px}.nice-services .menu .anon a{padding:4px 6px}}';a("/Users/matt/Documents/branches/NICE.Tophat/node_modules/cssify")(c),b.exports=c},{"/Users/matt/Documents/branches/NICE.Tophat/node_modules/cssify":1}],4:[function(a,b){function c(a,b,c,e){s=a.addEventListener?"addEventListener":"attachEvent",t=a.addEventListener?"":"on",e.internal&&(v+=" nice-internal"),d(a,b),l(a,b,"load")}function d(a,b){k(b,"click",m(b,f)),k(a,"click",m(b,g)),k(b,"click",m(b,e))}function e(a){for(var b=a.target||a.srcElement;!n(b);){if(~b.className.indexOf("nice-tophat")){b=void 0;break}b=b.parentNode}if(b){var c=(q(a).preventDefault(),b.href||b.getElementsByTagName("a")[0].href),d="tophat",e=u.find(b,"menu-label")[0]||b,f=e.textContent||e.innerText||e.innerHTML,g=window.location.href;switch(b.className){case"menu-evidence":f+=~this.className.indexOf("menu-evidence-open")?" expanded":" collapased";break;case"menu-profile":f="Your Profile"+(~this.className.indexOf("menu-profile-open")?" expanded":" collapased")}h(d,f,g,function(){window.location.href=c})}}function f(a){for(var b=a.target||a.srcElement;o(b);){if(~b.className.indexOf("nice-tophat")){b=void 0;break}b=b.parentNode}var c=!(b&&!~b.className.indexOf("nice-tophat"));if(!c){{q(a).preventDefault()}this.activeElement=p(this,b,this.activeElement)}}function g(a){for(var b=a.target||a.srcElement,c=!1;b;){if(b.className&&~b.className.indexOf("nice-tophat")){c=!0;break}b=b.parentNode}c||(this.className=v,r=void 0)}function h(a,b,c,d){return window._gaq&&"function"==typeof window._gaq.push?i(a,b,c,d):"function"==typeof window.ga?j(a,b,c,d):void(console&&console.log&&d&&d())}function i(a,b,c,d){var e=["_trackEvent",a,b,c];window._gaq.push(e),d&&window.setTimeout(d,50)}function j(a,b,c,d){var e={category:a,action:b,label:c};d&&(e.hitCallback=d),window.ga("send","event",e)}function k(a,b,c){a[s](t+b,c,!0)}function l(a,b,c,d){var e;if(a.createEventObject){if(e=a.createEventObject(),d)for(var f in d)e[param]=d[param];return b.fireEvent("on"+c,e)}e=a.createEvent("HTMLEvents"),e.initEvent(c,!0,!0,d),b.dispatchEvent(e)}function m(a,b){return function(c){b.call(a,c)}}function n(a){var b=a&&"li"===a.nodeName.toLowerCase()&&!!~a.className.indexOf("menu-");return b}function o(a){var b=a&&!~a.className.indexOf("menu-evidence")&&!~a.className.indexOf("menu-search")&&!~a.className.indexOf("menu-profile");return b}function p(a,b){return a.className=v+" "+b.className.replace(" active","")+"-open",b}function q(a){var b=a.stopPropagation,c=a.preventDefault;return a.stopPropagation=function(){return b?b.call(a):a.cancelBubble=!0,a},a.preventDefault=function(){return c?c.call(a):a.returnValue=!1,a},a}var r,s,t,u=a("./tophat.utils"),v="nice-tophat";b.exports=c},{"./tophat.utils":24}],5:[function(a,b){b.exports='<div class="nice-evidence" id="nice-evidence"><div class="tophat-inner"><ul class="menu">{{menu}}</ul></div></div>'},{}],6:[function(a,b){function c(a,b,c){if(!c.internal){f.appendElement(f.create(i),f.find(b,"menu")[0]);var e=d(g,"beta"===c.environment),j=f.create(h.replace("{{menu}}",e));if(c.evidence){var k=f.find(j,"evidence-"+c.evidence)[0];k.className=k.className+" active"}return j}}function d(a,b){var c=[];for(var d in a){var f=a[d];c.push(e(d,f,b))}return c.join("")}function e(a,b,c){var d=j.replace(/{{id}}/gi,a).replace(/{{label}}/gi,b.label).replace(/{{title}}/gi,b.title).replace(/{{href}}/gi,(c?b.beta:void 0)||b.href);return d}var f=a("./tophat.utils"),g=a("./tophat.evidence.links"),h=a("./tophat.evidence.html"),i=a("./tophat.evidence.service.html"),j=a("./tophat.evidence.links.html");b.exports=c},{"./tophat.evidence.html":5,"./tophat.evidence.links":8,"./tophat.evidence.links.html":7,"./tophat.evidence.service.html":9,"./tophat.utils":24}],7:[function(a,b){b.exports='<li class="evidence-{{id}}"><a href="{{href}}" title="{{title}}">{{label}}</a></li>'},{}],8:[function(a,b){b.exports={bnf:{href:"http://evidence.nhs.uk/formulary/bnf/current",beta:"http://beta.evidence.nhs.uk/formulary/bnf/current",label:"BNF",title:"British National Formulary"},bnfc:{href:"http://evidence.nhs.uk/formulary/bnfc/current",beta:"http://beta.evidence.nhs.uk/formulary/bnfc/current",label:"BNFC",title:"British National Formulary for Children"},cks:{href:"http://cks.nice.org.uk",beta:"http://beta.cks.nice.org.uk",label:"CKS",title:"Clinical Knowledge Summaries"},journals:{href:"http://evidence.nhs.uk/about-evidence-services/journals-and-databases",label:"Journals and databases",title:"Journals and databases"},search:{href:"http://evidence.nhs.uk",label:"Evidence search",title:"Evidence search"}}},{}],9:[function(a,b){b.exports='<li class="menu-evidence"><a href="#nice-evidence"><i class="service-logo"><i class="service-logo-base"></i> <i class="service-logo-evidence"></i></i> <span class="menu-label">Evidence services</span></a></li>'},{}],10:[function(a,b){b.exports='<div class="nice-global" id="nice-global"><div class="tophat-inner"></div></div>'},{}],11:[function(a,b){function c(a){var b=d.find(a,"nice-global")[0];return b||(b=d.create(e)),b}var d=a("./tophat.utils"),e=a("./tophat.global.html");b.exports=c},{"./tophat.global.html":10,"./tophat.utils":24}],12:[function(a){function b(a,b){var c=d.find(e,a)[0];return c||(c=d.create('<div class="'+a+'"/>')),c.className=a+(b.internal?" nice-internal":""),c}function c(a,b,c,f,h){if(d.appendElement(b,a),c&&d.appendElement(c,a),f&&d.appendElement(f,a),h.service){var i="menu-"+h.service,j=d.find(a,i)[0];j.className+=" active",a.className+=" "+i+"-open"}d.prependElement(g,e)}a("./tophat.css");var d=a("./tophat.utils"),e=document.body,f=a("./tophat.config.js")(),g=b("nice-tophat",f),h=a("./tophat.services")(g,f),i=a("./tophat.evidence")(g,h,f);a("./tophat.profile")(g,h,f);{var j=a("./tophat.global")(g);a("./tophat.search")(j,h,f)}c(g,h,i,j,f),a("./tophat.events")(document,g,h,f)},{"./tophat.config.js":2,"./tophat.css":3,"./tophat.events":4,"./tophat.evidence":6,"./tophat.global":11,"./tophat.profile":14,"./tophat.search":18,"./tophat.services":21,"./tophat.utils":24}],13:[function(a,b){b.exports='<div class="nice-profile" id="nice-profile"><div class="tophat-inner"><ul class="menu">{{menu}}</ul></div></div>'},{}],14:[function(a,b){function c(a,b,c){"none"!==c.profile&&(i.appendElement(i.create(l),i.find(b,"menu")[0]),j.get(c.accountsUrl,function(b){return b?void d(a,b):disableProfile(a)}))}function d(a,b){return b.display_name?e(a,b):void f(a,b)}function e(a,b){var c=i.find(a,"menu-profile")[0],d=c.getElementsByTagName("a")[0];d.setAttribute("title",b.display_name),i.appendElement(i.create('<span class="caret"/>'),d);var e=g(b.links),f=i.create(k.replace("{{menu}}",e));i.insertBeforeElement(f,a.lastChild)}function f(a,b){var c=i.find(a,"menu-profile")[0],d=c.getElementsByTagName("a")[0];c.className="menu-anonymous",d.href=b.links["Sign in"],d.innerHTML="Sign in"}function g(a){var b=[];for(var c in a){var d=a[c];b.push(h(c,d))}return b.join("")}function h(a,b){var c=m.replace(/{{label}}/gi,a).replace(/{{href}}/gi,b);return c}var i=a("./tophat.utils"),j=a("./tophat.xhr"),k=a("./tophat.profile.html"),l=a("./tophat.profile.service.html"),m=a("./tophat.profile.links.html");b.exports=c},{"./tophat.profile.html":13,"./tophat.profile.links.html":15,"./tophat.profile.service.html":16,"./tophat.utils":24,"./tophat.xhr":25}],15:[function(a,b){b.exports='<li><a href="{{href}}">{{label}}</a></li>'},{}],16:[function(a,b){b.exports='<li class="menu-profile"><a href="#nice-profile"><span class="profile-avatar"></span></a></li>'},{}],17:[function(a,b){b.exports='<form class="nice-search" method="{{method}}" action="{{action}}" data-track="search"><div class="controls"><input name="q" autocomplete="off" spellcheck="false" placeholder="Search..." maxlength="250" data-provide="typeahead" data-source-type="{{typeaheadtype}}" data-source="{{typeaheadsource}}"> <button type="submit"><i class="icon-search"></i> <span class="menu-label">Search</span></button></div></form>'},{}],18:[function(a,b){function c(a,b,c){if(c.search){e.appendElement(e.create(g),e.find(b,"menu")[0]);var h=f.replace("{{method}}","post").replace("{{action}}",c.search).replace("{{typeaheadtype}}",c.typeaheadtype).replace("{{typeaheadsource}}",c.typeaheadsource),i=e.create(h);return d(a,i),i}}function d(a,b){var c=e.find(a,"menu")[0];return c?e.insertBeforeElement(b,c):void e.appendElement(b,a.firstChild)}var e=a("./tophat.utils"),f=a("./tophat.search.html"),g=a("./tophat.search.service.html");b.exports=c},{"./tophat.search.html":17,"./tophat.search.service.html":19,"./tophat.utils":24}],19:[function(a,b){b.exports='<li class="menu-search"><a href="#nice-global"><i class="service-logo"><i class="service-logo-base"></i> <i class="service-logo-search"></i></i> <span class="menu-label">Search</span></a></li>'},{}],20:[function(a,b){b.exports='<div class="nice-services"><div class="tophat-inner"><a href="{{homelink}}" class="logo">NICE <small>National Institute of<br>Health and Care Excellence</small></a><ul class="menu">{{menu}}</ul></div></div>'},{}],21:[function(a,b){function c(a,b){g(a);var c="";return b.internal||(c=e(i,"beta"===b.environment)),d(c,b)}function d(a,b){var c=j.replace("{{menu}}",a).replace("{{homelink}}",b.home||"http://www.nice.org.uk"),d=h.create(c);return b.internal&&(h.find(d,"logo")[0].getElementsByTagName("small")[0].innerHTML=b.internal),d}function e(a,b){var c=[];for(var d in a){var e=a[d];c.push(f(d,e,b))}return c.join("")}function f(a,b,c){var d=k.replace(/{{id}}/gi,a).replace(/{{label}}/gi,b.label).replace(/{{title}}/gi,b.title).replace(/{{href}}/gi,(c?b.beta:void 0)||b.href);return d}function g(a){var b=h.find(a,"nice-services")[0];b&&b.parentNode.removeChild(b)}var h=a("./tophat.utils"),i=a("./tophat.services.links"),j=a("./tophat.services.html"),k=a("./tophat.services.links.html");b.exports=c},{"./tophat.services.html":20,"./tophat.services.links":23,"./tophat.services.links.html":22,"./tophat.utils":24}],22:[function(a,b){b.exports='<li class="menu-{{id}}"><a href="{{href}}"><i class="service-logo"><i class="service-logo-base"></i> <i class="service-logo-{{id}}"></i></i> <span class="menu-label">{{label}}</span></a></li>'},{}],23:[function(a,b){b.exports={pathways:{href:"http://pathways.nice.org.uk",label:"NICE Pathways"},guidance:{href:"http://nice.org.uk/Guidance",label:"Guidance"},standards:{href:"http://nice.org.uk/standards-and-indicators",label:"Standards and&nbsp;indicators"}}},{}],24:[function(a,b){var c={};c.find=function(a,b){function d(a,b){return a.getElementsByClassName(b)}function e(a,b){var c,d,e,f=a,g=[];if(a.querySelectorAll)return a.querySelectorAll("."+b);if(a.evaluate)for(d=".//*[contains(concat(' ', @class, ' '), ' "+b+" ')]",c=a.evaluate(d,f,null,0,null);e=c.iterateNext();)g.push(e);else{c=a.getElementsByTagName("*"),d=new RegExp("(^|\\s)"+b+"(\\s|$)");var h=c.length;for(e=0;h>e;e++)d.test(c[e].className)&&g.push(c[e])}return g}var f=document.getElementsByClassName?d:e;return c.find=f,f(a,b)},c.create=function(a){if(!~a.indexOf("<"))return document.createElement(a);var b=document.createElement("div");return b.innerHTML=a,b.firstChild},c.prependElement=function(a,b){b.insertBefore(a,b.firstChild)},c.insertBeforeElement=function(a,b){var c=b.parentNode;c.insertBefore(a,b)},c.appendElement=function(a,b){b.appendChild(a)},b.exports=c},{}],25:[function(a,b){var c={};c.get=function(a,b){var c=document.getElementsByTagName("head")[0]||document.documentElement,d=document.createElement("script");d.src=a+"?"+Math.floor(1e10*Math.random());var e=!1;d.onload=d.onreadystatechange=function(){e||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(e=!0,b(window._na),d.onload=d.onreadystatechange=null,c&&d.parentNode&&c.removeChild(d))},c.insertBefore(d,c.firstChild)},b.exports=c},{}]},{},[12]);
//# sourceMappingURL=tophat.map