(this.webpackJsonp=this.webpackJsonp||[]).push([[1],{341:function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"e",(function(){return l})),a.d(e,"f",(function(){return c})),a.d(e,"h",(function(){return u})),a.d(e,"a",(function(){return d})),a.d(e,"d",(function(){return p})),a.d(e,"j",(function(){return h})),a.d(e,"k",(function(){return f})),a.d(e,"b",(function(){return m})),a.d(e,"i",(function(){return g})),a.d(e,"g",(function(){return v}));a(19),a(52),a(101),a(106),a(110),a(48),a(33),a(346),a(47),a(351),a(53);var i=/#.*$/,n=/\.(md|html)$/,r=/\/$/,s=/^(https?:|mailto:|tel:)|(.*\.pdf$)/;function o(t){return decodeURI(t).replace(i,"").replace(n,"")}function l(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function d(t){if(l(t))return t;var e=t.match(i),a=e?e[0]:"",n=o(t);return r.test(n)?t:n+".html"+a}function p(t,e){if(-1!==e.indexOf("http"))return!1;var a=t.hash,n=function(t){if(!t)return"";var e=t.match(i);return e?e[0]:void 0}(e);return(!n||a===n)&&o(t.path)===o(e)}function h(t,e,a){a&&(e=function(t,e,a){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var n=e.split("/");a&&n[n.length-1]||n.pop();for(var r=t.replace(/^\//,"").split("/"),s=0;s<r.length;s++){var o=r[s];".."===o?n.pop():"."!==o&&n.push(o)}""!==n[0]&&n.unshift("");return n.join("/")}(e,a));for(var i=o(e),n=0;n<t.length;n++)if(o(t[n].path)===i)return Object.assign({},t[n],{type:"page",path:d(e)});return console.log(t,e),console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,a,i){var n=a.pages,r=a.themeConfig,s=i&&r.locales&&r.locales[i]||r;if("auto"===(t.frontmatter.sidebar||s.sidebar||r.sidebar))return function(t){var e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=s.sidebar||r.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var a in e)if(0===(i=t.path,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(a))return{base:a,config:e[a]};var i;return{}}(e,o),c=l.base,u=l.config;return u?u.map((function(t){return function t(e,a,i,n){if("string"==typeof e)return h(a,e,i);if(Array.isArray(e))return Object.assign(h(a,e[0],i),{title:e[1]});n&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var r=e.children||[];return{type:"group",title:e.title,children:r.map((function(e){return t(e,a,i,!0)})),collapsable:!1!==e.collapsable}}(t,n,c)})):[]}return[]}function m(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function v(){return!(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)&&!/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))}},349:function(t,e,a){"use strict";a(19),a(350),a(189);var i=a(359),n=a(360),r=(a(390),a(27)),s=Object(r.a)({},(function(t,e){var a=e._c;return a("svg",{staticClass:"icon download",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"download",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",x:"0px",y:"0px",width:"12",height:"12"}},[a("path",{attrs:{fill:"currentColor",d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}})])}),[],!0,null,null,null).exports,o={components:{NewsletterForm:i.a,SocialButtons:n.a,DownloadLink:s}},l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("b-container",[a("b-row",[a("b-col",{staticClass:"outbound-negative-space-fix mt-8 mt-sm-0",attrs:{cols:"12",sm:"6",xl:"4"}},[a("h6",{staticClass:"mb-3"},[t._v("Quick Links")]),t._v(" "),a("b-nav",{attrs:{vertical:""}},[a("li",[a("a",{attrs:{href:"https://forum.tagion.org/t/tagion-faq",target:"_blank",rel:"noopener noreferrer nofollow"},on:{click:function(e){return t.$analytics.triggerEvent({category:"Exploration",action:"FAQVisit",fields:{placement:"Footer"}})}}},[t._v("\n              FAQ\n              "),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{target:"_blank",href:"https://forum.tagion.org/"}},[t._v("Official Forum\n              "),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tagion/resources/raw/master/whitepaper/tagion-whitepaper.pdf"},on:{click:function(e){return t.$analytics.triggerEvent({category:"Exploration",action:"WhitepaperDownload",fields:{placement:"Footer"}})}}},[t._v("Whitepaper\n              "),a("DownloadLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tagion/resources/raw/master/technical-paper/tagion-technical-paper.pdf"},on:{click:function(e){return t.$analytics.triggerEvent({category:"Exploration",action:"TechpaperDownload",fields:{placement:"Footer"}})}}},[t._v("\n              Technical Paper\n              "),a("DownloadLink")],1)])])],1),t._v(" "),a("b-col",{staticClass:"mt-8 mt-sm-0 mt-xl-0 outbound-negative-space-fix"},[a("h6",{staticClass:"mb-3"},[t._v("Contact")]),t._v(" "),a("b-nav",{attrs:{vertical:""}},[a("li",[a("a",{attrs:{href:"mailto:info@tagion.org"}},[t._v("\n              info@tagion.org\n              "),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"mailto:support@tagion.org"}},[t._v("\n              support@tagion.org\n              "),a("OutboundLink")],1)])])],1),t._v(" "),a("b-col",{staticClass:"col-newsletter mt-8 mt-xl-0 outbound-negative-space-fix",attrs:{cols:"12",xl:"4"}},[a("h6",{staticClass:"mb-3"},[t._v("Communication Channels")]),t._v(" "),a("social-buttons",{staticClass:"mb-3 mt-3",attrs:{dark:""}}),t._v(" "),a("p",{staticClass:"mb-1"},[a("small",[t._v("By joining, you agree with our "),a("router-link",{attrs:{to:"/meta/privacy-policy"}},[a("u",[t._v("Privacy Policy")])]),t._v(".")],1)]),t._v(" "),a("newsletter-form",{staticClass:"footer-newsletter"})],1)],1),t._v(" "),a("b-row",{staticClass:"mt-10 align-items-md-center"},[a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"d-flex align-items-start"},[a("img",{staticClass:"footer__logo",attrs:{src:"/logo.svg",alt:"Tagion Logo"}}),t._v(" "),a("ul",{staticClass:"list-inline list-group-transparent list-group-flush list-group-borderless mb-0 text-muted"},[a("li",{staticClass:"list-inline-item pl-0 pr-4 my-1"},[t._v("© Tagion, 2020. All rights reserved.")]),t._v(" "),a("li",{staticClass:"list-inline-item pl-0 pr-4 my-1"},[a("router-link",{attrs:{to:"/meta/privacy-policy"}},[t._v("Privacy Policy")])],1),t._v(" "),a("li",{staticClass:"list-inline-item pl-0 pr-4 my-1"},[a("router-link",{attrs:{to:"/meta/cookie-policy"}},[t._v("Cookie Policy")])],1),t._v(" "),a("li",{staticClass:"list-inline-item pl-0 pr-4 my-1"},[a("router-link",{attrs:{to:"/meta/terms-of-use"}},[t._v("Terms of Use")])],1)])])])],1)],1)],1)}),[],!1,null,null,null).exports,c=(a(48),a(341)),u=(a(188),a(49),a(33),a(346),a(352),{components:{DownloadLink:s},props:{item:{required:!0}},computed:{link:function(){return Object(c.a)(this.item.link)},isDownload:function(){return"download"==this.item.kind},isSeparator:function(){return this.link.match(/sep.\.html/)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:c.e,isMailto:c.f,isTel:c.h}}),d={components:{NavLink:Object(r.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isSeparator?a("li",{staticClass:"nav-separator"}):t.isExternal(t.link)?a("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)||t.isDownload?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)||t.isDownload?null:"noopener noreferrer nofollow"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isDownload?t.isDownload?a("DownloadLink"):t._e():a("OutboundLink")],1):a("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports},computed:{nav:function(){return this.$site.themeConfig.nav||[]},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(c.i)(t),{items:(t.items||[]).map(c.i)})}))}},methods:{linkClasses:function(t){var e={};return t.showOnly&&(e["menu-item--show-only-".concat(t.showOnly)]=!0),t.hideOnly&&(e["menu-item--hide-only-".concat(t.hideOnly)]=!0),e},isActive:c.d}},p=Object(r.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.userLinks.length?a("b-nav",t._l(t.userLinks,(function(e){return a("li",{key:e.link,class:t.linkClasses(e)},[a("NavLink",{attrs:{item:e}})],1)})),0):t._e()}),[],!1,null,null,null).exports,h={components:{NavLinks:p}},f=Object(r.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header header--static",attrs:{id:"header"}},[e("b-container",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"header__logo-wrapper"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"header__logo",attrs:{src:"/logo-tagion.svg",alt:"Tagion Logo"}})]),this._v(" "),e("NavLinks",{staticClass:"header__nav d-none d-lg-flex"})],1)])],1)}),[],!1,null,null,null).exports,m=(a(101),a(384)),g=a(389);var v={components:{SidebarGroup:m.a,SidebarLink:g.a,NavLinks:p},props:["items"],data:function(){return{openGroupIndex:0}},computed:{isWhitepaper:function(){return-1!==this.$route.fullPath.indexOf("/whitepaper/")}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{handleNavClick:function(t){"A"===t.target.tagName&&this.$emit("close-sidebar")},refreshIndex:function(){var t=function(t,e,a){if(!e)return-1;for(var i=0;i<e.length;i++){var n=e[i];if("group"===n.type&&n.children.some((function(e){return Object(c.d)(t,e.path)})))return i}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(c.d)(this.$route,t.path)}}},b={props:["sidebarItems"],data:function(){return{isSidebarOpen:!1,darkMode:!1,pageLoaded:!1}},components:{Footer:l,HeaderStatic:f,Sidebar:Object(r.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[a("div",{staticClass:"sidebar__inner",on:{click:t.handleNavClick}},[a("NavLinks",{staticClass:"d-flex d-lg-none"}),t._v(" "),t._t("top"),t._v(" "),t.items&&t.items.length?a("b-nav",{staticClass:"sidebar-links",attrs:{vertical:""}},[t.isWhitepaper?a("li",{staticClass:"pt-0"},[a("small",[a("a",{ref:"noopener noreferrer nofollow",attrs:{href:"/tagionwhitepaper.pdf",target:"_blank"}},[t._v("\n            Download Whitepaper\n            "),a("OutboundLink")],1)])]):t._e(),t._v(" "),t.isWhitepaper?a("li",{staticClass:"mb-3 pt-1"},[a("small",[a("a",{ref:"noopener noreferrer nofollow",attrs:{href:"/tagiontechpaper.pdf",target:"_blank"}},[t._v("\n            Download Technical Paper\n            "),a("OutboundLink")],1)])]):t._e(),t._v(" "),t._l(t.items,(function(e,i){return a("li",{key:i},["group"===e.type?a("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){return t.toggleGroup(i)}}}):a("SidebarLink",{attrs:{item:e}})],1)}))],2):t._e(),t._v(" "),t._t("bottom")],2)])}),[],!1,null,null,null).exports,SidebarButton:Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[a("div",{staticClass:"icon menu-icon"},[a("svg",{staticClass:"menu-icon__bottom",attrs:{viewBox:"0 0 926.23699 573.74994",version:"1.1",x:"0px",y:"0px",width:"15",height:"15"}},[a("g",{attrs:{transform:"translate(904.92214,-879.1482)"}},[a("path",{attrs:{d:"\n        m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n        -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n        0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n        -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n        -174.68583 0.6895,0 26.281,25.03215 56.8701,\n        55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n        -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n        -104.0616 -231.873,-231.248 z\n      "}})])]),t._v(" "),a("svg",{staticClass:"menu-icon__top",attrs:{viewBox:"0 0 926.23699 573.74994",version:"1.1",x:"0px",y:"0px",width:"15",height:"15"}},[a("g",{attrs:{transform:"translate(904.92214,-879.1482)"}},[a("path",{attrs:{d:"\n        m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n        -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n        0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n        -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n        -174.68583 0.6895,0 26.281,25.03215 56.8701,\n        55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n        -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n        -104.0616 -231.873,-231.248 z\n      "}})])])]),t._v(" "),a("div",{staticClass:"layout-sidebar-button__text"},[t._v("\n    Menu\n  ")])])}),[],!1,null,null,null).exports,CookiesNotification:a(441).default},mounted:function(){this.$analytics.recordUtm(this.$route),this.$analytics.init(),this.pageLoaded=!0;var t=this.$route.hash;t&&this.$scrollTo(t),localStorage&&(this.darkMode=localStorage.getItem("dark-mode")||!1)},updated:function(){this.$analytics.init()},computed:{isLanding:function(){return"Home"===this.$page.title},isRelaunch:function(){return"/relaunch.html"===this.$page.path},posts:function(){var t=this;return this.$site.pages.filter((function(e){return e.path.endsWith(".html")&&e.path.startsWith(t.$page.path)}))},showSidebar:function(){return this.$page.frontmatter.sidebar},contentClasses:function(){return{"content-block":this.isLanding,page:!this.isLanding}},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{home:this.isLanding,"has-sidebar":this.showSidebar,"sidebar-open":this.isSidebarOpen,"dark-mode":"true"===this.darkMode,preload:!this.pageLoaded},t]}},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},closeSidebar:function(){this.isSidebarOpen=!1},toggleMode:function(){this.darkMode="true"===this.darkMode?"false":"true",localStorage&&localStorage.setItem("dark-mode",this.darkMode)}}},_=(a(391),Object(r.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-page",class:t.pageClasses,attrs:{id:"wrapper"}},[a("div",{staticClass:"layout-header"},[a("HeaderStatic",{class:{home:t.isLanding},on:{"toggle-sidebar":t.toggleSidebar,"toggle-mode":t.toggleMode}})],1),t._v(" "),a("div",{staticClass:"layout-body"},[t._t("root-content",[a("b-container",{staticClass:"d-flex"},[a("div",{staticClass:"layout-content"},[a("main",{class:t.contentClasses},[t._t("default")],2)])])]),t._v(" "),a("div",{staticClass:"layout-sidebar"},[a("Sidebar",{staticClass:"layout-sidebar__inner",attrs:{items:t.sidebarItems},on:{"close-sidebar":t.closeSidebar}})],1)],2),t._v(" "),a("div",{staticClass:"layout-footer-nav"},[t._t("footer-pagenav")],2),t._v(" "),a("div",{staticClass:"layout-footer"},[a("Footer",{class:{home:t.isLanding}})],1),t._v(" "),a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.toggleSidebar()}}}),t._v(" "),a("cookies-notification")],1)}),[],!1,null,null,null));e.a=_.exports},359:function(t,e,a){"use strict";a(105);var i=a(68),n={props:{dark:{type:Boolean}},data:function(){return{email:"",emailProgress:!1,emailSent:!1,emailError:"",formAction:void 0,startTypeRecorded:!1}},computed:{inputDisabled:function(){return this.emailSent||this.emailProgress},validation:function(){return this.email?this.validateEmail(this.email):null}},methods:{validateEmail:function(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())},onInput:function(t){this.email=t,t?this.validateEmail(t)?(this.setFormAction(),this.emailError=""):(this.setFormAction(!0),this.emailError="Please, enter valid email address."):(this.setFormAction(!0),this.emailError=""),this.startTypeRecorded||(this.$analytics.triggerEvent({category:"Newsletter",action:"StartRegistration"}),this.startTypeRecorded=!0)},onSubmit:function(t){var e=this;return Object(i.a)(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.validation?(e.setFormAction(),(i=e.$refs["newsletter-form"])&&(e.$analytics.triggerEvent({category:"Newsletter",action:"CompleteRegistration",fields:{email:e.email,currency:"USD",value:1}}),i.submit())):(t.preventDefault(),e.setFormAction(!0),e.emailError="Please, enter valid email address.");case 1:case"end":return a.stop()}}),a)})))()},setFormAction:function(t){this.formAction=t?"":"https://tagion.us5.list-manage.com/subscribe/post?u=374351fbb938dd675075d28ae&amp;id=f736a9c5ae"}}},r=a(27),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form",{ref:"newsletter-form",staticClass:"t-form",class:{"t-form--dark":!!t.dark},attrs:{novalidate:!0,validated:t.validation,action:t.formAction,method:t.formAction?"post":"",target:t.formAction?"_blank":""},on:{submit:[function(e){return e.preventDefault(),t.onSubmit(e)},function(e){return e.preventDefault(),t.onSubmit(e)}],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(e)}}},[a("b-input-group",{attrs:{size:"sm",pill:""}},[a("b-input",{staticClass:"email-field",attrs:{type:"email",value:t.email,disabled:t.inputDisabled,name:"EMAIL",placeholder:"Your Email","aria-label":"Your Email",state:t.validation,required:""},on:{input:function(e){return t.onInput(e)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("b-button",{class:{disabled:t.inputDisabled},attrs:{variant:"primary",type:t.inputDisabled?"":"submit",disabled:t.inputDisabled,"aria-label":"Subscribe"}},[t.emailProgress?a("span",[a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v(" "),a("span",{staticClass:"d-none d-md-inline"},[t._v("Subscribing...")])]):a("span",[a("span",{},[t._v("Join Newsletter")])])])],1)],1),t._v(" "),t.emailSent?t._e():a("b-form-text",{attrs:{"text-variant":"danger"}},[t._v(t._s(t.emailError)+" ")]),t._v(" "),t.emailSent?a("b-form-text",{attrs:{"text-variant":"success"}},[t._v("Verification code is sent to your email.")]):t._e()],1)],1)}),[],!1,null,null,null);e.a=s.exports},360:function(t,e,a){"use strict";var i={props:{dark:{type:Boolean,default:!1}}},n=a(27),r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"social-buttons",class:{"social-buttons--dark":!!t.dark}},[a("li",[a("a",{staticClass:"social-buttons__button",attrs:{href:"https://t.me/tagion",title:"Tagion Telegram Channel",target:"_blank"},on:{click:function(e){return t.$analytics.triggerEvent({category:"Exploration",action:"SocialButtonClick_Telegram"})}}},[a("svg",{staticClass:"svg-inline--fa fa-telegram-plane fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"telegram-plane",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[a("path",{attrs:{fill:"currentColor",d:"M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"}})])]),t._v(" "),a("a",{staticClass:"social-buttons__button",attrs:{href:"https://www.reddit.com/r/Tagion/",title:"Tagion Subreddit",target:"_blank"},on:{click:function(e){return t.$analytics.triggerEvent({category:"Exploration",action:"SocialButtonClick_Subreddit"})}}},[a("svg",{staticClass:"svg-inline--fa fa-reddit-alien fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"reddit-alien",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"}})])]),t._v(" "),a("div",{staticClass:"social-buttons__divider"}),t._v(" "),a("a",{staticClass:"social-buttons__button",attrs:{href:"https://twitter.com/tagionTeam",title:"Tagion Twitter Feed",target:"_blank"},on:{click:function(e){return t.$analytics.triggerEvent({category:"Exploration",action:"SocialButtonClick_Twitter"})}}},[a("svg",{staticClass:"svg-inline--fa fa-twitter fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"twitter",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])]),t._v(" "),a("a",{staticClass:"social-buttons__button",attrs:{href:"https://www.facebook.com/tagionTeam",title:"Tagion Facebook Page",target:"_blank"},on:{click:function(e){return t.$analytics.triggerEvent({category:"Exploration",action:"SocialButtonClick_Facebook"})}}},[a("svg",{staticClass:"svg-inline--fa fa-facebook-f fa-w-10",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[a("path",{attrs:{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])]),t._v(" "),a("a",{staticClass:"social-buttons__button",attrs:{href:"https://www.linkedin.com/company/33286266",title:"Tagion LinkedIn Page",target:"_blank"},on:{click:function(e){return t.$analytics.triggerEvent({category:"Exploration",action:"SocialButtonClick_LinkedIn"})}}},[a("svg",{staticClass:"svg-inline--fa fa-linkedin-in fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin-in",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[a("path",{attrs:{fill:"currentColor",d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}})])]),t._v(" "),a("a",{staticClass:"social-buttons__button",attrs:{href:"https://medium.com/tagion",title:"Tagion Medium Publication",target:"_blank"},on:{click:function(e){return t.$analytics.triggerEvent({category:"Exploration",action:"SocialButtonClick_Medium"})}}},[a("svg",{staticClass:"svg-inline--fa fa-medium-m fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"medium-m",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"}})])]),t._v(" "),a("a",{staticClass:"social-buttons__button",attrs:{href:"https://github.com/tagion",title:"Tagion GitHub",target:"_blank"},on:{click:function(e){return t.$analytics.triggerEvent({category:"Exploration",action:"SocialButtonClick_GitHub"})}}},[a("svg",{staticClass:"svg-inline--fa fa-github fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"}},[a("path",{attrs:{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}})])])])])}),[],!1,null,null,null);e.a=r.exports},364:function(t,e,a){},365:function(t,e,a){},384:function(t,e,a){"use strict";var i=a(341),n={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=a(27),s={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null).exports},beforeCreate:function(){this.$options.components.SidebarLinks=a(442).default},methods:{isActive:i.d}},o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?a("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[a("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?a("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):a("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[a("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?a("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),a("DropdownTransition",[t.open||!t.collapsable?a("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null);e.a=o.exports},389:function(t,e,a){"use strict";a(48),a(188);var i=a(341);function n(t,e,a,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},a)}function r(t,e,a,s,o){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.d)(s,a+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[n(t,a+"#"+e.slug,e.title,c),r(t,e.children,a,s,o,l+1)])})))}var s={functional:!0,props:["item"],render:function(t,e){var a=e.parent,s=a.$page,o=a.$site,l=a.$route,c=e.props.item,u=Object(i.d)(l,c.path),d="auto"===c.type?u||c.children.some((function(t){return Object(i.d)(l,c.basePath+"#"+t.slug)})):u,p=n(t,c.path,c.title||c.path,d),h=null!=s.frontmatter.sidebarDepth?s.frontmatter.sidebarDepth:o.themeConfig.sidebarDepth,f=null==h?1:h,m=!!o.themeConfig.displayAllHeaders;return"auto"===c.type?[p,r(t,c.children,c.basePath,l,f)]:(d||m)&&c.headers&&!i.c.test(c.path)?[p,r(t,Object(i.b)(c.headers),c.path,l,f)]:p}},o=a(27),l=Object(o.a)(s,void 0,void 0,!1,null,null,null);e.a=l.exports},390:function(t,e,a){"use strict";var i=a(364);a.n(i).a},391:function(t,e,a){"use strict";var i=a(365);a.n(i).a},441:function(t,e,a){"use strict";a.r(e);a(344);var i={data:function(){return{privacySeen:!0}},mounted:function(){var t=this;setTimeout((function(){t.privacySeen=t.$privacy.isAccepted()}),1e3)},methods:{accept:function(){this.$privacy.accept(),this.$analytics.init(),this.privacySeen=!0}}},n=a(27),r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"t-cookies-alert-overlay",class:{"t-cookies-alert-overlay--shown":!t.privacySeen}}),t._v(" "),a("div",{staticClass:"container t-cookies-alert",class:{"t-cookies-alert--shown":!t.privacySeen}},[a("div",{staticClass:"alert shadow-sm t-cookies-alert__block",attrs:{role:"alert"}},[a("b-row",[a("b-col",{staticClass:"mb-4 mb-lg-0",attrs:{cols:"12",lg:"10"}},[a("p",{staticClass:"mb-0 t-cookies-alert__text"},[a("strong",[t._v("Our privacy policy has been updated.")]),t._v(" "),a("br"),t._v("By continuing to use the site or closing this banner, you agree with our privacy policy and use of cookies.\n            "),a("br"),t._v("To find out more and learn how to change your choices, please go to our\n            "),a("u",[a("router-link",{attrs:{to:"/meta/privacy-policy"}},[t._v("privacy policy")])],1),t._v(".\n          ")])]),t._v(" "),a("b-col",{staticClass:"text-right d-flex justify-content-end align-items-end",attrs:{cols:"12",lg:"2"}},[a("div",{},[a("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button","aria-label":"Accept cookies policy and close"},on:{click:function(e){return t.accept()}}},[t._v("Accept")])])])],1)],1)])])}),[],!1,null,null,null);e.default=r.exports},442:function(t,e,a){"use strict";a.r(e);a(188);var i=a(384),n=a(389),r=a(341);var s={name:"SidebarLinks",components:{SidebarGroup:i.a,SidebarLink:n.a},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var a=0;a<e.length;a++){var i=e[a];if("group"===i.type&&i.children.some((function(e){return"page"===e.type&&Object(r.d)(t,e.path)})))return a}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.d)(this.$route,t.regularPath)}}},o=a(27),l=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.items&&t.items.length?a("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return a("li",{key:i},["group"===e.type?a("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):a("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=l.exports}}]);