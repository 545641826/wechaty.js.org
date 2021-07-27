(self.webpackChunk=self.webpackChunk||[]).push([[356],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(p,".").concat(d)]||h[d]||l[d]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4174:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var a=n(9603),o=n(120),r=(n(7378),n(5318)),i=["components"],s={title:"Advice for new contributors"},p=void 0,u={unversionedId:"contributing/new-contributors",id:"contributing/new-contributors",isDocsHomePage:!1,title:"Advice for new contributors",description:"New contributor and not sure what to do? Want to help but just don't know how",source:"@site/docs/contributing/new-contributors.md",sourceDirName:"contributing",slug:"/contributing/new-contributors",permalink:"/docs/contributing/new-contributors",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/contributing/new-contributors.md",version:"current",lastUpdatedBy:"remember00000",lastUpdatedAt:1627371849,formattedLastUpdatedAt:"7/27/2021",frontMatter:{title:"Advice for new contributors"},sidebar:"docs",previous:{title:"Contributing to Wechaty",permalink:"/docs/contributing/"},next:{title:"Write documentation",permalink:"/docs/contributing/documentation"}},c=[{value:"First steps",id:"first-steps",children:[]},{value:"Guidelines",id:"guidelines",children:[]},{value:"FAQ",id:"faq",children:[]},{value:"Special Thanks",id:"special-thanks",children:[]}],l={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"New contributor and not sure what to do? Want to help but just don't know how\nto get started? This is the section for you."),(0,r.kt)("p",null,"This page contains more general advice on ways you can contribute to Wechaty,\nand how to approach that."),(0,r.kt)("p",null,"If you are looking for a reference on the details of making code contributions,\nsee the ",(0,r.kt)("a",{parentName:"p",href:"/docs/contributing/coding"},"Writing code")," documentation."),(0,r.kt)("h2",{id:"first-steps"},"First steps"),(0,r.kt)("p",null,"Start with these steps to discover Wechaty's development process."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Triage issues")),(0,r.kt)("p",{parentName:"li"},"If an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues?q=is%3Aopen+is%3Aissue"},"open issue"),"\nreports a bug, try and reproduce it.\nIf you can reproduce it and it seems valid,\nmake a note that you confirmed the bug\nand accept the ticket. Make sure the ticket is filed under the correct\ncomponent area. Consider writing a patch that adds a test for the bug's\nbehavior, even if you don't fix the bug itself.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Look for issues that are accepted and review patches to build familiarity\nwith the codebase and the process")),(0,r.kt)("p",{parentName:"li"},"Mark the appropriate flags if a patch needs docs or tests.\nRun the tests and make sure they pass.\nWhere possible and relevant, try them out on your environment.\nLeave comments and feedback!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Keep old patches up to date")),(0,r.kt)("p",{parentName:"li"},"Oftentimes the codebase will change between a patch being submitted and the\ntime it gets reviewed. Make sure it still applies cleanly and functions as\nexpected. Updating a patch is both useful and important!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Write some documentation")),(0,r.kt)("p",{parentName:"li"},"Wechaty's documentation is great but it can always be improved. Did you find\na typo? Do you think that something should be clarified? Go ahead and\nsuggest a documentation patch! See also the guide on ",(0,r.kt)("a",{parentName:"p",href:"/docs/contributing/documentation"},"writing documentation"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sign the Contributor License Agreement")),(0,r.kt)("p",{parentName:"li"},"The code that you write belongs to you or your employer. If your\ncontribution is more than one or two lines of code, you need to sign the\n",(0,r.kt)("a",{parentName:"p",href:"https://cla-assistant.io/wechaty/wechaty"},"CLA"),". See the\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Contributor_License_Agreement"},"Contributor License Agreement"),"\nfor a more thorough explanation."))),(0,r.kt)("h2",{id:"guidelines"},"Guidelines"),(0,r.kt)("p",null,"As a newcomer on a large project, it's easy to experience frustration. Here's\nsome advice to make your work on Wechaty more useful and rewarding."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pick a subject area that you care about, that you are familiar with, or\nthat you want to learn about")),(0,r.kt)("p",{parentName:"li"},"You don't already have to be an expert on the area you want to work on; you\nbecome an expert through your ongoing contributions to the code.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Analyze issues' context and history")),(0,r.kt)("p",{parentName:"li"},"Issue isn't an absolute; the context is just as important as the words.\nWhen reading Issue, you need to take into account who says things, and when\nthey were said. Support for an idea two years ago doesn't necessarily mean\nthat the idea will still have support. You also need to pay attention to who\n",(0,r.kt)("em",{parentName:"p"},"hasn't")," spoken -- for example, if an experienced contributor hasn't been\nrecently involved in a discussion, then a ticket may not have the support\nrequired to get into Wechaty.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start small")),(0,r.kt)("p",{parentName:"li"},"It's easier to get feedback on a little issue than on a big one. See the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/search?q=org%3Awechaty+label%3A%22good+first+issue%22&type=issues"},"good first issue"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"If you're going to engage in a big task, make sure that your idea has\nsupport first")),(0,r.kt)("p",{parentName:"li"},"This means getting someone else to confirm that a bug is real before you fix\nthe issue, and ensuring that there's consensus on a proposed feature before\nyou go implementing it.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Be bold! Leave feedback!")),(0,r.kt)("p",{parentName:"li"},'Sometimes it can be scary to put your opinion out to the world and say "this\nticket is correct" or "this patch needs work", but it\'s the only way the\nproject moves forward. The contributions of the broad Wechaty community\nultimately have a much greater impact than that of any one person. We can\'t\ndo it without ',(0,r.kt)("strong",{parentName:"p"},"you"),"!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Err on the side of caution when marking things Ready For Check-in")),(0,r.kt)("p",{parentName:"li"},"If you're really not certain if a ticket is ready, don't mark it as\nsuch. Leave a comment instead, letting others know your thoughts.  If you're\nmostly certain, but not completely certain, you might also try asking on Gitter\nto see if someone else can confirm your suspicions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Wait for feedback, and respond to feedback that you receive")),(0,r.kt)("p",{parentName:"li"},"Focus on one or two issues, see them through from start to finish, and\nrepeat. The shotgun approach of taking on lots of issues and letting some\nfall by the wayside ends up doing more harm than good.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Be rigorous")),(0,r.kt)("p",{parentName:"li"},'When we say "must have docs and tests", we mean it. If a patch\ndoesn\'t have docs and tests, there had better be a good reason. Arguments\nlike "I couldn\'t find any existing tests of this feature" don\'t carry much\nweight--while it may be true, that means you have the extra-important job of\nwriting the very first tests for that feature, not that you get a pass from\nwriting tests altogether.'))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"This issue I care about has been ignored for days/weeks/months! What can\nI do to get it committed?")),(0,r.kt)("p",{parentName:"li"},"First off, it's not personal. Wechaty is entirely developed by volunteers\n(except the Wechaty fellow), and sometimes folks just don't have time. The\nbest thing to do is to send a gentle reminder to the Wechaty maillist\nasking for review on the issue, or to bring it up in the\n",(0,r.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"Gitter channel"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"I'm sure my issue is absolutely 100% perfect, can I mark it as RFC\nmyself?")),(0,r.kt)("p",{parentName:"li"},"Short answer: No. It's always better to get another set of eyes on a\nticket. If you're having trouble getting that second set of eyes, see\nquestion 1, above."))),(0,r.kt)("h2",{id:"special-thanks"},"Special Thanks"),(0,r.kt)("p",null,"I have to credit Django doc authors, because this documentation page is inspired by, and mostly copy/pasted from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/django/django/blob/main/docs/internals/contributing/new-contributors.txt"},"Django contributing docs")))}h.isMDXComponent=!0}}]);