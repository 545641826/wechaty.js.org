(self.webpackChunk=self.webpackChunk||[]).push([[252],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1989:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(9603),o=n(120),i=(n(7378),n(5318)),a=["components"],c={title:"Write code"},s=void 0,u={unversionedId:"contributing/coding",id:"contributing/coding",isDocsHomePage:!1,title:"Write code",description:"So you'd like to write some code to improve Wechaty? Awesome! There are several",source:"@site/docs/contributing/coding.md",sourceDirName:"contributing",slug:"/contributing/coding",permalink:"/docs/contributing/coding",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/contributing/coding.md",version:"current",lastUpdatedBy:"remember00000",lastUpdatedAt:1627371849,formattedLastUpdatedAt:"7/27/2021",frontMatter:{title:"Write code"},sidebar:"docs",previous:{title:"Publish blog",permalink:"/docs/contributing/blog"},next:{title:"Working with git",permalink:"/docs/contributing/git"}},p=[{value:"Special Thanks",id:"special-thanks",children:[]}],l={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So you'd like to write some code to improve Wechaty? Awesome! There are several\nways you can help Wechaty's development:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/issues"},"Report bugs")," in GitHub issues.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Join the ",(0,i.kt)("em",{parentName:"p"},"wechaty")," mailing list and share your ideas for how to\nimprove Wechaty. We're always open to suggestions. You can also interact on\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"Wechaty Gitter channel"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/git"},"Working with git")," for new and/or fixed behavior. If\nyou're looking for a way to get started contributing to Wechaty read the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/"},"Contributing to Wechaty")," tutorial and have a look at the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/search?q=org%3Awechaty+label%3A%22good+first+issue%22&type=issues"},"good first issues"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/documentation"},"Improve the documentation")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/testing"},"write unit tests"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/issues"},"Triage issues and review pull requests")," created by\nother users.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/new-contributors"},"Advice for new contributors")," to help you\nget orientated in the development process."))),(0,i.kt)("p",null,"Browse the following sections to find out how to give your code patches the\nbest chances to be included in Wechaty core:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/contributing/pulls"},"Committing code")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/contributing/coding"},"Writing code")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/contributing/git"},"Working with Git"))),(0,i.kt)("h2",{id:"special-thanks"},"Special Thanks"),(0,i.kt)("p",null,"I have to credit Django doc authors, because this documentation page is inspired by, and mostly copy/pasted from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/django/django/blob/main/docs/internals/contributing/writing-code/index.txt"},"Django contributing docs")))}d.isMDXComponent=!0}}]);