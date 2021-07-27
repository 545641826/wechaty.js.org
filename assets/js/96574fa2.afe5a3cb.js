(self.webpackChunk=self.webpackChunk||[]).push([[1085],{5318:function(t,e,o){"use strict";o.d(e,{Zo:function(){return c},kt:function(){return d}});var n=o(7378);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var u=n.createContext({}),s=function(t){var e=n.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},c=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),g=s(o),d=r,h=g["".concat(u,".").concat(d)]||g[d]||p[d]||l;return o?n.createElement(h,a(a({ref:e},c),{},{components:o})):n.createElement(h,a({ref:e},c))}));function d(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=o.length,a=new Array(l);a[0]=g;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,a[1]=i;for(var s=2;s<l;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},978:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return g}});var n=o(9603),r=o(120),l=(o(7378),o(5318)),a=["components"],i={title:"Running on Google Cloud Shell"},u=void 0,s={unversionedId:"quick-start/running-on-google-cloud-shell",id:"quick-start/running-on-google-cloud-shell",isDocsHomePage:!1,title:"Running on Google Cloud Shell",description:"To get you started with Wechaty, this tutorial will guide you how to run the Ding Dong bot from the Wechaty Getting Started GitHub repository directly on the browser using Google Cloud Shell environment. It provides a step-by-step tutorial for running the bot along with an IDE.",source:"@site/docs/quick-start/running-on-google-cloud-shell.md",sourceDirName:"quick-start",slug:"/quick-start/running-on-google-cloud-shell",permalink:"/docs/quick-start/running-on-google-cloud-shell",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/quick-start/running-on-google-cloud-shell.md",version:"current",lastUpdatedBy:"remember00000",lastUpdatedAt:1627371849,formattedLastUpdatedAt:"7/27/2021",frontMatter:{title:"Running on Google Cloud Shell"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/getting-started/"},next:{title:"Running on Gitpod",permalink:"/docs/quick-start/running-on-gitpod"}},c=[],p={toc:c};function g(t){var e=t.components,i=(0,r.Z)(t,a);return(0,l.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To get you started with Wechaty, this tutorial will guide you how to run the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/blob/master/examples/ding-dong-bot.ts"},"Ding Dong bot")," from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting Started")," GitHub repository directly on the browser using ",(0,l.kt)("strong",{parentName:"p"},"Google Cloud Shell")," environment. It provides a step-by-step tutorial for running the bot along with an IDE."),(0,l.kt)("p",null,"You can follow the steps below to get started smoothly."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Open")," the Google Cloud Shell environment by clicking the button:"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://ssh.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https%3A%2F%2Fgithub.com%2Fwechaty%2Fwechaty-getting-started&cloudshell_open_in_editor=examples/ding-dong-bot.ts&cloudshell_workspace=.&cloudshell_tutorial=examples/tutorials/google-cloud-shell-tutorial.md"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%F0%9F%92%BB%20Google%20Cloud%20Shell-%3C%2F%3E-blue",alt:"Google Cloud Shell badge"})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Sign In")," with a Google account. If already signed in then you will directly land on step 3.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Trust")," the git repository and click ",(0,l.kt)("strong",{parentName:"p"},"Confirm"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Google Cloud Shell: Trust repo",src:o(4386).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Wait for the cloud shell provisioning to complete."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Google Cloud Shell: Wait for provisioning",src:o(7038).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After that you will see the ",(0,l.kt)("strong",{parentName:"p"},"Cloud Shell Editor"),", on the right panel is your step-by-step ",(0,l.kt)("strong",{parentName:"p"},"guide"),", and on the bottom you have the ",(0,l.kt)("strong",{parentName:"p"},"terminal window"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Google Cloud Shell: Editor",src:o(3464).Z})))),(0,l.kt)("p",null,"Now, you can follow the tutorial inside the cloud shell."),(0,l.kt)("p",null,"First it tells you about what Wechaty is, and then it guides you to run the Wechaty Ding Dong Bot and connect it with either ",(0,l.kt)("strong",{parentName:"p"},"WeChat")," or ",(0,l.kt)("strong",{parentName:"p"},"WhatsApp"),". It also has a section where you have to implement a new functionality in the bot and thereby giving you a better understanding how Wechaty bots work under the hood."),(0,l.kt)("p",null,"After completing this tutorial, you can continue and learn how to ",(0,l.kt)("a",{parentName:"p",href:"/docs/getting-started/running-locally"},"run Wechaty locally")," on your system."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Learn more about Google Cloud Shell Tutorials for Wechaty from this ",(0,l.kt)("a",{parentName:"p",href:"https://wechaty.js.org/2021/02/20/google-cloud-shell-tutorials/"},"blog post"),".")))}g.isMDXComponent=!0},3464:function(t,e,o){"use strict";e.Z=o.p+"assets/images/cloud_shell_editor-9a19f98387d46d1c8bf32248b37f9c44.webp"},4386:function(t,e,o){"use strict";e.Z=o.p+"assets/images/trust_the_repo-2b1f230d80a7b05778af966bbb131261.webp"},7038:function(t,e,o){"use strict";e.Z=o.p+"assets/images/wait_for_provisioning_to_complete-6a53e55fdf11ff5a375cc50e03839dae.webp"}}]);