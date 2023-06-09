"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[9174],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u4ecb\u7ecd"},i=void 0,l={unversionedId:"installation/summary",id:"version-v1.2/installation/summary",title:"\u4ecb\u7ecd",description:"OpenYurt\u96c6\u7fa4\u5b89\u88c5\u5206\u62102\u4e2a\u90e8\u5206\uff0c\u5206\u522b\u4e3a\u5b89\u88c5OpenYurt\u7ba1\u63a7\u7ec4\u4ef6\u548c\u8282\u70b9\u63a5\u5165\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/installation/summary.md",sourceDirName:"installation",slug:"/installation/summary",permalink:"/zh/docs/v1.2/installation/summary",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/summary.md",tags:[],version:"v1.2",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1679553864,formattedLastUpdatedAt:"2023\u5e743\u670823\u65e5",frontMatter:{title:"\u4ecb\u7ecd"},sidebar:"version-v1.2/docs",previous:{title:"\u8d44\u6e90\u548c\u7cfb\u7edf\u9700\u6c42",permalink:"/zh/docs/v1.2/usage-conditions/resource-and-system-requirements"},next:{title:"\u5728Kubernetes\u4e0a\u5b89\u88c5",permalink:"/zh/docs/v1.2/installation/manually-setup"}},u={},p=[{value:"Part 1: \u5b89\u88c5OpenYurt\u7ba1\u63a7\u7ec4\u4ef6",id:"part-1-\u5b89\u88c5openyurt\u7ba1\u63a7\u7ec4\u4ef6",level:3},{value:"Part 2: \u8282\u70b9\u63a5\u5165",id:"part-2-\u8282\u70b9\u63a5\u5165",level:3}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OpenYurt\u96c6\u7fa4\u5b89\u88c5\u5206\u62102\u4e2a\u90e8\u5206\uff0c\u5206\u522b\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"\u5b89\u88c5OpenYurt\u7ba1\u63a7\u7ec4\u4ef6"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"\u8282\u70b9\u63a5\u5165"),"\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\u4e00\u4e9b\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u9047\u5230\u7684\u95ee\u9898\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"em",href:"/zh/docs/v1.2/faq/yurthub"},"FAQ"),"\u3002"))),(0,a.kt)("h3",{id:"part-1-\u5b89\u88c5openyurt\u7ba1\u63a7\u7ec4\u4ef6"},"Part 1: \u5b89\u88c5OpenYurt\u7ba1\u63a7\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u76ee\u524d\u6211\u4eec\u5efa\u8bae\u7528\u6237\u5728Kubernetes\u4e0a\u624b\u52a8\u5b89\u88c5OpenYurt\u7ba1\u63a7\u7ec4\u4ef6\uff0c\u5728\u540e\u7eed\u7248\u672c\u4e2d\u6211\u4eec\u4e5f\u5c06\u652f\u6301\u66f4\u591a\u7684\u5b89\u88c5\u65b9\u6848\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/zh/docs/v1.2/installation/manually-setup"},"\u5728Kubernetes\u4e0a\u5b89\u88c5OpenYurt\u7ba1\u63a7\u7ec4\u4ef6")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63a8\u8350\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u5148\u51c6\u5907\u4e00\u4e2a\u751f\u4ea7\u53ef\u7528\u7684Kubernetes\u96c6\u7fa4, \u7136\u540e\u624b\u52a8\u5b89\u88c5\u5404\u4e2aOpenYurt\u7ba1\u63a7\u7ec4\u4ef6")))),(0,a.kt)("h3",{id:"part-2-\u8282\u70b9\u63a5\u5165"},"Part 2: ",(0,a.kt)("a",{parentName:"h3",href:"/zh/docs/v1.2/installation/yurtadm-join"},"\u8282\u70b9\u63a5\u5165")),(0,a.kt)("p",null,"\u793e\u533a\u7528\u6237\u53ef\u4ee5",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/v1.2/installation/yurtadm-join#1-%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E6%8A%8A%E8%8A%82%E7%82%B9%E5%8A%A0%E5%85%A5%E9%9B%86%E7%BE%A4"},"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"a"},"yurtadm join"),"\u547d\u4ee4"),"\u4ece\u96f6\u5f00\u59cb\u5c06\u8282\u70b9\u52a0\u5165\u5230OpenYurt\u96c6\u7fa4\u4e2d\uff0c\u6216\u8005\u5728\u5b58\u91cf\u7684K8s\u5de5\u4f5c\u8282\u70b9\u4e0a",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/v1.2/installation/yurtadm-join#2-%E5%9C%A8%E5%AD%98%E9%87%8F%E7%9A%84k8s%E8%8A%82%E7%82%B9%E4%B8%8A%E5%AE%89%E8%A3%85openyurt-node%E7%BB%84%E4%BB%B6"},"\u624b\u52a8\u5b89\u88c5OpenYurt\u8282\u70b9\u7ec4\u4ef6"),"\u6765\u5b9e\u73b0\u8282\u70b9\u63a5\u5165\u3002"))}c.isMDXComponent=!0}}]);