"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[871],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"coredns"},c=void 0,i={unversionedId:"faq/coredns",id:"version-v1.2/faq/coredns",title:"coredns",description:"1. \u8fb9\u7f18\u8282\u70b9\u6c60\u4e2d\uff0c\u8de8\u8282\u70b9\u7684Pod\u95f4\u901a\u8fc7PodIP\u53ef\u4ee5\u8bbf\u95ee\uff0c\u4f46\u662f\u901a\u8fc7service\u65e0\u6cd5\u8bbf\u95ee",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/faq/coredns.md",sourceDirName:"faq",slug:"/faq/coredns",permalink:"/zh/docs/faq/coredns",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq/coredns.md",tags:[],version:"v1.2",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1679553864,formattedLastUpdatedAt:"2023\u5e743\u670823\u65e5",frontMatter:{title:"coredns"},sidebar:"version-v1.2/docs",previous:{title:"yurt-tunnel",permalink:"/zh/docs/faq/yurt-tunnel"},next:{title:"prometheus",permalink:"/zh/docs/faq/prometheus"}},l={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," 1. \u8fb9\u7f18\u8282\u70b9\u6c60\u4e2d\uff0c\u8de8\u8282\u70b9\u7684Pod\u95f4\u901a\u8fc7PodIP\u53ef\u4ee5\u8bbf\u95ee\uff0c\u4f46\u662f\u901a\u8fc7service\u65e0\u6cd5\u8bbf\u95ee")),(0,o.kt)("p",null,"\u9996\u5148\u901a\u8fc7podIP\u53ef\u4ee5\u8bbf\u95ee\uff0c\u8bf4\u660e\u8de8\u8282\u70b9\u7684\u5bb9\u5668\u7f51\u7edc(\u5982flannel\u7684vxlan)\u662f\u6b63\u5e38\u7684\uff0c\u7136\u540e\u662fservice\u4e0d\u80fd\u8bbf\u95ee\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u5982\u4e0b\u6765\u5206\u6790\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728pod\u7684net namespace\u5185\uff0c\u76f4\u63a5\u8bbf\u95eeservice clusterIP\u662f\u5426\u53ef\u8fbe"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u53ef\u8fbe\uff0c\u8bf4\u660ekube-proxy\u5bf9service\u7684\u540e\u7aef\u5b9e\u4f8b\u914d\u7f6e\u53ef\u80fd\u51fa\u95ee\u9898\uff0c\u4e00\u822c\u662fservice topology\u7684\u95ee\u9898\uff0c\u5206\u6790\u53ef\u4ee5\u53c2\u7167\u95ee\u9898\u3010\u8fb9\u7f18\u8282\u70b9\u4e0a\uff0cService topology\u80fd\u529b\u672a\u751f\u6548\u3011"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u901a\u8fc7service clusterIP\u53ef\u8fbe\uff0c\u8bf4\u660e\u662f\u57df\u540d\u89e3\u6790\u7684\u95ee\u9898\u3002\u53ef\u4ee5\u6309\u4e0b\u9762\u65b9\u6cd5\u5206\u6790\uff1a"),(0,o.kt)("li",{parentName:"ul"},"\u8fdb\u5165pod\u7684net\u548cmount namespace\uff0c\u67e5\u770b/etc/resolv.conf \u6587\u4ef6\u5185\u5bb9\uff0c\u770bdns nameserver\u5730\u5740\uff0c\u4e00\u822c\u662fkube-dns service\u7684clusterIP"),(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c\u547d\u4ee4\uff1adig @{dns nameserver} {service name} \u53d1\u73b0\u4e0d\u901a"),(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c\u547d\u4ee4\uff1a dig @{coreDNS pod ip} {service name} \u53ef\u4ee5\u901a"),(0,o.kt)("li",{parentName:"ul"},"\u8bf4\u660e\u662fkubed-dns service\u7684\u670d\u52a1\u62d3\u6251\u8def\u7531\u9009\u62e9\u6ca1\u6709\u751f\u6548\uff0c\u53ef\u4ee5\u53c2\u7167Yurthub\u95ee\u9898\u3010\u8fb9\u7f18\u8282\u70b9\u4e0a\uff0cService topology\u80fd\u529b\u672a\u751f\u6548\u3011")))}u.isMDXComponent=!0}}]);