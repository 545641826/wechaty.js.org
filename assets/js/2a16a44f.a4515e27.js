(self.webpackChunk=self.webpackChunk||[]).push([[6667],{5318:function(t,e,n){"use strict";n.d(e,{Zo:function(){return l},kt:function(){return d}});var r=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),g=c(n),d=a,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||o;return n?r.createElement(m,i(i({ref:e},l),{},{components:n})):r.createElement(m,i({ref:e},l))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=g;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4978:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return g}});var r=n(9603),a=n(120),o=(n(7378),n(5318)),i=["components"],p={title:"Running on Gitpod"},s=void 0,c={unversionedId:"quick-start/running-on-gitpod",id:"quick-start/running-on-gitpod",isDocsHomePage:!1,title:"Running on Gitpod",description:"If you are total beginner to wechaty this tutorial will guide you how to run the Ding Dong bot from the Wechaty Getting Started GitHub repository directly on the browser using Gitpod.",source:"@site/docs/quick-start/running-on-gitpod.md",sourceDirName:"quick-start",slug:"/quick-start/running-on-gitpod",permalink:"/docs/quick-start/running-on-gitpod",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/quick-start/running-on-gitpod.md",version:"current",lastUpdatedBy:"remember00000",lastUpdatedAt:1627371849,formattedLastUpdatedAt:"7/27/2021",frontMatter:{title:"Running on Gitpod"},sidebar:"docs",previous:{title:"Running on Google Cloud Shell",permalink:"/docs/quick-start/running-on-google-cloud-shell"},next:{title:"Running locally",permalink:"/docs/getting-started/running-locally"}},l=[],u={toc:l};function g(t){var e=t.components,p=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,p,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are total beginner to wechaty this tutorial will guide you how to run the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/blob/master/examples/ding-dong-bot.ts"},"Ding Dong bot")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting Started")," GitHub repository directly on the browser using ",(0,o.kt)("a",{parentName:"p",href:"https://gitpod.io/#https://github.com/wechaty/wechaty-getting-started"},"Gitpod"),"."),(0,o.kt)("p",null,"Gitpod is an online and open source platform for automated and ready-to-code development environments."),(0,o.kt)("p",null,"Follow the steps below to get started:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Click")," the button below to access a complete setup of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/blob/master/examples/ding-dong-bot.ts"},"Wechaty Getting Started")," ",(0,o.kt)("strong",{parentName:"p"},"ding-dong BOT")," project on gitpod."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://gitpod.io/#https://github.com/wechaty/wechaty-getting-started"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod",alt:"gitpod-link"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you have never used gitpod before, you will be required to login using your gitHub account."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"sign in",src:n(5835).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After logging in with your github account, you have to create a workspace by clicking on ",(0,o.kt)("strong",{parentName:"p"},"New Workspace")," button."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"create-workspace",src:n(834).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"As the workspace loads, within no time it runs the ding dong bot."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"loaded",src:n(928).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scan the generated QR code using ",(0,o.kt)("strong",{parentName:"p"},"Wechat"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For scanning the QR code with another puppet, quit the running code in terminal using ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl C")," and run the command given below for using whatsapp."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"npm run start:whatsapp:web\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scan the generated QR code using ",(0,o.kt)("strong",{parentName:"p"},"WhatsApp web")," and test it with whatsapp. If it recieves a message ding, it replies with a dong as shown below."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"output",src:n(1417).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The code for the ding-dong-bot is given inside ",(0,o.kt)("inlineCode",{parentName:"p"},"examples/ding-dong-bot.ts"),". You can play more with the bot by editting ",(0,o.kt)("inlineCode",{parentName:"p"},"onMessage")," function."))))}g.isMDXComponent=!0},834:function(t,e,n){"use strict";e.Z=n.p+"assets/images/create-workspace-fe015103fd5a36aab64a8d2746a60062.webp"},1417:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ding-dong-output-55327c20aa978645f662d4213132490f.webp"},928:function(t,e,n){"use strict";e.Z=n.p+"assets/images/gitpod-loaded-af80d9e00abe8b8ac40f8ea5adb175e7.webp"},5835:function(t,e,n){"use strict";e.Z=n.p+"assets/images/gitpod-signin-79d375add7001ca2bb8608601abc1426.webp"}}]);