(self.webpackChunk=self.webpackChunk||[]).push([[7948],{5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return m}});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},u=Object.keys(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,u=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,d=h["".concat(p,".").concat(m)]||h[m]||s[m]||u;return a?r.createElement(d,i(i({ref:t},l),{},{components:a})):r.createElement(d,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=a.length,i=new Array(u);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<u;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},517:function(e,t,a){"use strict";var r=a(7378);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},4535:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(7378),n=a(4956);var u=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(8944),o="tabItem_c0e5",p="tabItemActive_28AG";var c=37,l=39;var s=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,s=e.values,h=e.groupId,m=e.className,d=u(),f=d.tabGroupChoices,v=d.setTabGroupChoices,y=(0,r.useState)(n),w=y[0],b=y[1],g=r.Children.toArray(e.children),k=[];if(null!=h){var P=f[h];null!=P&&P!==w&&s.some((function(e){return e.value===P}))&&b(P)}var N=function(e){var t=e.currentTarget,a=k.indexOf(t),r=s[a].value;b(r),null!=h&&(v(h,r),setTimeout((function(){var e,a,r,n,u,i,o,c;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,u=e.right,i=window,o=i.innerHeight,c=i.innerWidth,a>=0&&u<=c&&n<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case l:var r=k.indexOf(e.target)+1;a=k[r]||k[0];break;case c:var n=k.indexOf(e.target)-1;a=k[n]||k[k.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},s.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":w===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:O,onFocus:N,onClick:N},a)}))),t?(0,r.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},4956:function(e,t,a){"use strict";var r=(0,a(7378).createContext)(void 0);t.Z=r},6734:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return h},default:function(){return d}});var r=a(9603),n=a(120),u=(a(7378),a(5318)),i=a(4535),o=a(517),p=["components"],c={title:"Puppet Provider: WeChat4U",sidebar_label:"WeChat4U"},l=void 0,s={unversionedId:"puppet-providers/wechat4u",id:"puppet-providers/wechat4u",isDocsHomePage:!1,title:"Puppet Provider: WeChat4U",description:"Wechaty Puppet WeChat4U",source:"@site/docs/puppet-providers/wechat4u.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/wechat4u",permalink:"/docs/puppet-providers/wechat4u",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/wechat4u.md",version:"current",lastUpdatedBy:"remember00000",lastUpdatedAt:1627371849,formattedLastUpdatedAt:"7/27/2021",frontMatter:{title:"Puppet Provider: WeChat4U",sidebar_label:"WeChat4U"},sidebar:"docs",previous:{title:"PadLocal",permalink:"/docs/puppet-providers/padlocal"},next:{title:"Service",permalink:"/docs/puppet-providers/service"}},h=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Roadmap",id:"roadmap",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],m={toc:h};function d(e){var t=e.components,a=(0,n.Z)(e,p);return(0,u.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"wechat4u"},(0,u.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-WeChat4U-blueviolet",alt:"Wechaty Puppet WeChat4U"}))),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-wechat4u/HEAD/docs/images/wechat4u-logo.png",alt:"Wechaty Puppet WeChat4U"})),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-wechat4u"},(0,u.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-wechat4u.svg",alt:"NPM Version"})),"\n",(0,u.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-wechat4u?activeTab=versions"},(0,u.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-wechat4u/next.svg",alt:"npm (tag)"}))),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Repo: ",(0,u.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-wechat4u"},"https://github.com/wechaty/wechaty-puppet-wechat4u")),(0,u.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,u.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-wechat4u/issues"},"https://github.com/wechaty/wechaty-puppet-wechat4u/issues"))),(0,u.kt)("h2",{id:"features"},"Features"),(0,u.kt)("p",null,"This is a full-featured Wechaty Puppet."),(0,u.kt)("h2",{id:"usage"},"Usage"),(0,u.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat4u\nexport WECHATY_PUPPET=wechaty-puppet-wechat4u\nnpm start\n"))),(0,u.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat4u\nexport WECHATY_PUPPET=wechaty-puppet-wechat4u\nnpm start\n"))),(0,u.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat4u\nset WECHATY_PUPPET=wechaty-puppet-wechat4u\nnpm start\n")))),(0,u.kt)("h2",{id:"roadmap"},"Roadmap"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"to be added")),(0,u.kt)("h2",{id:"history"},"History"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2018/07/12/wechaty-new-release-version-0.18/"},"Wechaty New Release Version v0.18: SLOC from 27,630 to 7,817, Huan, Jul 12, 2018"))),(0,u.kt)("h2",{id:"maintainers"},"Maintainers"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/huan"},"@huan"))))}d.isMDXComponent=!0},8944:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);