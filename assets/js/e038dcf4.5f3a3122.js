(self.webpackChunk=self.webpackChunk||[]).push([[9685],{5318:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return h}});var r=n(7378);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,c=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),f=u(n),h=o,y=f["".concat(i,".").concat(h)]||f[h]||l[h]||c;return n?r.createElement(y,a(a({ref:e},p),{},{components:n})):r.createElement(y,a({ref:e},p))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var c=n.length,a=new Array(c);a[0]=f;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9826:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(9603),o=n(120),c=(n(7378),n(5318)),a=["components"],s={},i=void 0,u={unversionedId:"polyglot/php/transclusions/shortest-chatbot",id:"polyglot/php/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`php",source:"@site/docs/polyglot/php/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/php/transclusions",slug:"/polyglot/php/transclusions/shortest-chatbot",permalink:"/docs/polyglot/php/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/php/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"remember00000",lastUpdatedAt:1627371849,formattedLastUpdatedAt:"7/27/2021",frontMatter:{}},p=[],l={toc:p};function f(t){var e=t.components,n=(0,o.Z)(t,a);return(0,c.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-php"},'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.js.org/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n')))}f.isMDXComponent=!0}}]);