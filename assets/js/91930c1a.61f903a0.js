(self.webpackChunk=self.webpackChunk||[]).push([[7377],{5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return d}});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(a),d=n,m=h["".concat(o,".").concat(d)]||h[d]||c[d]||p;return a?r.createElement(m,i(i({ref:t},l),{},{components:a})):r.createElement(m,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<p;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},517:function(e,t,a){"use strict";var r=a(7378);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},4535:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(7378),n=a(4956);var p=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(8944),s="tabItem_c0e5",o="tabItemActive_28AG";var u=37,l=39;var c=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,c=e.values,h=e.groupId,d=e.className,m=p(),f=m.tabGroupChoices,v=m.setTabGroupChoices,y=(0,r.useState)(n),w=y[0],b=y[1],g=r.Children.toArray(e.children),k=[];if(null!=h){var P=f[h];null!=P&&P!==w&&c.some((function(e){return e.value===P}))&&b(P)}var N=function(e){var t=e.currentTarget,a=k.indexOf(t),r=c[a].value;b(r),null!=h&&(v(h,r),setTimeout((function(){var e,a,r,n,p,i,s,u;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,p=e.right,i=window,s=i.innerHeight,u=i.innerWidth,a>=0&&p<=u&&n<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case l:var r=k.indexOf(e.target)+1;a=k[r]||k[0];break;case u:var n=k.indexOf(e.target)-1;a=k[n]||k[k.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},c.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:O,onFocus:N,onClick:N},a)}))),t?(0,r.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},4956:function(e,t,a){"use strict";var r=(0,a(7378).createContext)(void 0);t.Z=r},2029:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return m}});var r=a(9603),n=a(120),p=(a(7378),a(5318)),i=a(4535),s=a(517),o=["components"],u={title:"Puppet Provider: Whatsapp",sidebar_label:"Whatsapp"},l=void 0,c={unversionedId:"puppet-providers/whatsapp",id:"puppet-providers/whatsapp",isDocsHomePage:!1,title:"Puppet Provider: Whatsapp",description:"Wechaty Puppet Whatsapp",source:"@site/docs/puppet-providers/whatsapp.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/whatsapp",permalink:"/docs/puppet-providers/whatsapp",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/whatsapp.md",version:"current",lastUpdatedBy:"remember00000",lastUpdatedAt:1627371849,formattedLastUpdatedAt:"7/27/2021",frontMatter:{title:"Puppet Provider: Whatsapp",sidebar_label:"Whatsapp"},sidebar:"docs",previous:{title:"WeChat",permalink:"/docs/puppet-providers/wechat"},next:{title:"Official Account",permalink:"/docs/puppet-providers/official-account"}},h=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Roadmap",id:"roadmap",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],d={toc:h};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"whatsapp"},(0,p.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Whatsapp-blueviolet",alt:"Wechaty Puppet Whatsapp"}))),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-whatsapp/HEAD/docs/images/wechaty-puppet-whatsapp.png",alt:"Wechaty Puppet Whatsapp"})),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-whatsapp"},(0,p.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-whatsapp.svg",alt:"NPM Version"})),"\n",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-whatsapp?activeTab=versions"},(0,p.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-whatsapp/next.svg",alt:"npm (tag)"}))),(0,p.kt)("p",null,"WhatsApp is the most popular Instance Messaging service in many parts of the world. With the WhatsApp Wechaty Puppet Provider, you can reach more than 1.5 billion WhatsApp users. You can send notifications, have two-way conversations, by building chatbots. If you're trying to reach and better converse with users in the west world, you need to consider using WhatsApp."),(0,p.kt)("p",null,"The WhatsApp Wechaty Puppet Provider is now available in alpha stage, to allow developers to start building and prototyping in your developing environments."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Repo: ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-whatsapp"},"https://github.com/wechaty/wechaty-puppet-whatsapp")),(0,p.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-whatsapp/issues"},"https://github.com/wechaty/wechaty-puppet-whatsapp/issues"))),(0,p.kt)("h2",{id:"features"},"Features"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"Send & receive messages")),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,p.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-whatsapp\nexport WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n"))),(0,p.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-whatsapp\nexport WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n"))),(0,p.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-whatsapp\nset WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n")))),(0,p.kt)("h2",{id:"roadmap"},"Roadmap"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"to be added")),(0,p.kt)("h2",{id:"history"},"History"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/15/publishment-of-wechaty-whatapp-puppet/"},"Wechaty Puppet Whatsapp Has been Published, Shan, Feb 15, 2021"))),(0,p.kt)("h2",{id:"maintainers"},"Maintainers"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/univerone"},"@univerone"))))}m.isMDXComponent=!0},8944:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);