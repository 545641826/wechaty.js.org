(self.webpackChunk=self.webpackChunk||[]).push([[7101],{5318:function(t,e,r){"use strict";r.d(e,{Zo:function(){return h},kt:function(){return g}});var n=r(7378);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},h=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,h=i(t,["components","mdxType","originalType","parentName"]),u=c(r),g=a,y=u["".concat(l,".").concat(g)]||u[g]||s[g]||o;return r?n.createElement(y,p(p({ref:e},h),{},{components:r})):n.createElement(y,p({ref:e},h))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8990:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var n=r(9603),a=r(120),o=(r(7378),r(5318)),p=["components"],i={slug:"/polyglot/php/",title:"PHP Wechaty",sidebar_label:"PHP"},l=void 0,c={unversionedId:"polyglot/php/overview",id:"polyglot/php/overview",isDocsHomePage:!1,title:"PHP Wechaty",description:"PHP Wechaty",source:"@site/docs/polyglot/php/overview.md",sourceDirName:"polyglot/php",slug:"/polyglot/php/",permalink:"/docs/polyglot/php/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/php/overview.md",version:"current",lastUpdatedBy:"remember00000",lastUpdatedAt:1627371849,formattedLastUpdatedAt:"7/27/2021",frontMatter:{slug:"/polyglot/php/",title:"PHP Wechaty",sidebar_label:"PHP"},sidebar:"docs",previous:{title:"Scala",permalink:"/docs/polyglot/scala/"},next:{title:".NET",permalink:"/docs/polyglot/dotnet/"}},h=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],s={toc:h};function u(t){var e=t.components,r=(0,a.Z)(t,p);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/php-wechaty"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-PHP-7de",alt:"PHP Wechaty"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub Repo ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/php-wechaty"},"https://github.com/wechaty/php-wechaty")),(0,o.kt)("li",{parentName:"ul"},"Getting Started Template Repo ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/php-wechaty-getting-started"},"https://github.com/wechaty/php-wechaty-getting-started"))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Template Repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/php-wechaty-getting-started"},"https://github.com/wechaty/php-wechaty-getting-started")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/php-wechaty-getting-started.git\ncd php-wechaty-getting-started\nmake install\nmake bot\n")),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("p",null,"Read blogs with the ",(0,o.kt)("inlineCode",{parentName:"p"},"php")," tag at ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/tags.html#php"},"https://wechaty.js.org/tags.html#php")),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/php-wechaty/"},"PHP Wechaty, @zhangchunsheng, Aug 5, 2020"))),(0,o.kt)("h2",{id:"maintainers"},"Maintainers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zhangchunsheng"},"@zhangchunsheng"))))}u.isMDXComponent=!0}}]);