(self.webpackChunk=self.webpackChunk||[]).push([[7708],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),g=i,h=m["".concat(l,".").concat(g)]||m[g]||p[g]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2969:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(9603),i=n(120),o=(n(7378),n(5318)),a=["components"],s={title:"Publish blog"},l=void 0,c={unversionedId:"contributing/blog",id:"contributing/blog",isDocsHomePage:!1,title:"Publish blog",description:"Tricks",source:"@site/docs/contributing/blog.md",sourceDirName:"contributing",slug:"/contributing/blog",permalink:"/docs/contributing/blog",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/contributing/blog.md",version:"current",lastUpdatedBy:"remember00000",lastUpdatedAt:1627371849,formattedLastUpdatedAt:"7/27/2021",frontMatter:{title:"Publish blog"},sidebar:"docs",previous:{title:"Create pull requests",permalink:"/docs/contributing/pulls"},next:{title:"Write code",permalink:"/docs/contributing/coding"}},u=[{value:"Tricks",id:"tricks",children:[{value:"Hide A Post",id:"hide-a-post",children:[]},{value:"List on https://wechaty.js.org/news/",id:"list-on-httpswechatyjsorgnews",children:[]},{value:"Show Big Picture",id:"show-big-picture",children:[]}]},{value:"Minimizing images",id:"minimizing-images",children:[]},{value:"Submit Blog Post",id:"submit-blog-post",children:[]},{value:"Support",id:"support",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tricks"},"Tricks"),(0,o.kt)("h3",{id:"hide-a-post"},"Hide A Post"),(0,o.kt)("p",null,"If you do not want to list your post on the website,\nyou can add a ",(0,o.kt)("inlineCode",{parentName:"p"},"published: false")," to the front matter YAML."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"published: false\n")),(0,o.kt)("h3",{id:"list-on-httpswechatyjsorgnews"},"List on ",(0,o.kt)("a",{parentName:"h3",href:"https://wechaty.js.org/news/"},"https://wechaty.js.org/news/")),(0,o.kt)("p",null,"If a post has a tag named ",(0,o.kt)("inlineCode",{parentName:"p"},"news"),"\nthen it will be shown at ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/news/"},"https://wechaty.js.org/news/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"tags:\n  - news\n")),(0,o.kt)("p",null,"All posts will be showed at ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/blog/"},"https://wechaty.js.org/blog/")),(0,o.kt)("h3",{id:"show-big-picture"},"Show Big Picture"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"tags:\n  - sticky\n")),(0,o.kt)("h2",{id:"minimizing-images"},"Minimizing images"),(0,o.kt)("p",null,"Optimize image compression where possible."),(0,o.kt)("p",null,"Our limitation for an image is:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"file size maximum 1MB"),(0,o.kt)("li",{parentName:"ol"},"file resolution maximum 1920x1080")),(0,o.kt)("p",null,"For image files, use ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts/fit-image.sh"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./scripts/fit-image.sh jekyll/assets/2021/03-your-blog-folder/\n")),(0,o.kt)("p",null,"This is based on ImageMagick."),(0,o.kt)("h2",{id:"submit-blog-post"},"Submit Blog Post"),(0,o.kt)("p",null,"Submit your blog by creating a Pull Request at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org/tree/master/jekyll/_posts"},"https://github.com/wechaty/wechaty.js.org/tree/master/jekyll/_posts")),(0,o.kt)("p",null,"Please make sure the CI turns green, and if the CI fail, you need to check the error messages and fix all the problems before we can continue processing it."),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}m.isMDXComponent=!0}}]);