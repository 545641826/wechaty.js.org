(self.webpackChunk=self.webpackChunk||[]).push([[3152],{5318:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return d}});var o=n(7378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),c=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(h,a(a({ref:e},u),{},{components:n})):o.createElement(h,a({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8252:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var o=n(9603),r=n(120),i=(n(7378),n(5318)),a=["components"],s={title:"Motivation",description:"Motivation: What problems does Wechaty try to solve?"},l=void 0,c={unversionedId:"explainations/motivations",id:"explainations/motivations",isDocsHomePage:!1,title:"Motivation",description:"Motivation: What problems does Wechaty try to solve?",source:"@site/docs/explainations/motivations.md",sourceDirName:"explainations",slug:"/explainations/motivations",permalink:"/docs/explainations/motivations",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/explainations/motivations.md",version:"current",lastUpdatedBy:"remember00000",lastUpdatedAt:1627371849,formattedLastUpdatedAt:"7/27/2021",frontMatter:{title:"Motivation",description:"Motivation: What problems does Wechaty try to solve?"},sidebar:"docs",previous:{title:"RPA",permalink:"/docs/explainations/rpa"},next:{title:"Concepts",permalink:"/docs/explainations/concepts"}},u=[{value:"Connecting ChatBots",id:"connecting-chatbots",children:[]},{value:"The Creator&#39;s Story",id:"the-creators-story",children:[]},{value:"Mission",id:"mission",children:[]}],p={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As the requirements for Conversational applications such as chatbot have become increasingly complicated, ",(0,i.kt)("strong",{parentName:"p"},"we need to focus on our business instead of the code itself"),"."),(0,i.kt)("h2",{id:"connecting-chatbots"},"Connecting ChatBots"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wechaty is a Last-mile technology for bringing chatbot to end-users."),(0,i.kt)("li",{parentName:"ul"},"Wechaty is a ChatBot Framework for Business.")),(0,i.kt)("p",null,"Wechaty is designed to help you straightforward implement your chatbot business logic and keep focus, without the care about any unrelated complex dirty underwater works."),(0,i.kt)("h2",{id:"the-creators-story"},"The Creator's Story"),(0,i.kt)("p",null,"In 2017 ..."),(0,i.kt)("p",null,"Huan's daily life/work depends on too much chat on wechat."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Almost 14,000 wechat friends in May 2014, before wechat restricts a total number of friends to 5,000."),(0,i.kt)("li",{parentName:"ul"},"Almost 400 wechat rooms, and most of them have more than 400 members.")),(0,i.kt)("p",null,"Can you imagine that? He was dying..."),(0,i.kt)("p",null,"So a tireless bot working for me 24x7 on wechat, monitoring/filtering the most important message is badly needed. For example, it highlights discussion which contains the KEYWORDS which he want to follow up(especially in a noisy room). ;-)"),(0,i.kt)("p",null,"At last, It's built for huan's personal study purpose of Automatically Testing."),(0,i.kt)("h2",{id:"mission"},"Mission"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Our Mission: Make it easy to build a WeChat Chatbot for developers.")))}m.isMDXComponent=!0}}]);