"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[73720],{5806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=t(85893),o=t(11151);const r={title:"coredns"},c=void 0,i={id:"faq/coredns",title:"coredns",description:"1. \u8fb9\u7f18\u8282\u70b9\u6c60\u4e2d\uff0c\u8de8\u8282\u70b9\u7684Pod\u95f4\u901a\u8fc7PodIP\u53ef\u4ee5\u8bbf\u95ee\uff0c\u4f46\u662f\u901a\u8fc7service\u65e0\u6cd5\u8bbf\u95ee",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3/faq/coredns.md",sourceDirName:"faq",slug:"/faq/coredns",permalink:"/zh/docs/v1.3/faq/coredns",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq/coredns.md",tags:[],version:"v1.3",lastUpdatedBy:"LofiSu",lastUpdatedAt:172404878e4,frontMatter:{title:"coredns"},sidebar:"docs",previous:{title:"yurt-tunnel",permalink:"/zh/docs/v1.3/faq/yurt-tunnel"},next:{title:"prometheus",permalink:"/zh/docs/v1.3/faq/prometheus"}},d={},l=[];function u(e){const n={code:"code",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"** 1. \u8fb9\u7f18\u8282\u70b9\u6c60\u4e2d\uff0c\u8de8\u8282\u70b9\u7684Pod\u95f4\u901a\u8fc7PodIP\u53ef\u4ee5\u8bbf\u95ee\uff0c\u4f46\u662f\u901a\u8fc7service\u65e0\u6cd5\u8bbf\u95ee**"}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\u901a\u8fc7podIP\u53ef\u4ee5\u8bbf\u95ee\uff0c\u8bf4\u660e\u8de8\u8282\u70b9\u7684\u5bb9\u5668\u7f51\u7edc(\u5982flannel\u7684vxlan)\u662f\u6b63\u5e38\u7684\uff0c\u7136\u540e\u662fservice\u4e0d\u80fd\u8bbf\u95ee\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u5982\u4e0b\u6765\u5206\u6790\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5728pod\u7684net namespace\u5185\uff0c\u76f4\u63a5\u8bbf\u95eeservice clusterIP\u662f\u5426\u53ef\u8fbe"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u4e0d\u53ef\u8fbe\uff0c\u8bf4\u660ekube-proxy\u5bf9service\u7684\u540e\u7aef\u5b9e\u4f8b\u914d\u7f6e\u53ef\u80fd\u51fa\u95ee\u9898\uff0c\u4e00\u822c\u662fservice topology\u7684\u95ee\u9898\uff0c\u5206\u6790\u53ef\u4ee5\u53c2\u7167\u95ee\u9898\u3010\u8fb9\u7f18\u8282\u70b9\u4e0a\uff0cService topology\u80fd\u529b\u672a\u751f\u6548\u3011"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u901a\u8fc7service clusterIP\u53ef\u8fbe\uff0c\u8bf4\u660e\u662f\u57df\u540d\u89e3\u6790\u7684\u95ee\u9898\u3002\u53ef\u4ee5\u6309\u4e0b\u9762\u65b9\u6cd5\u5206\u6790\uff1a"}),"\n",(0,s.jsx)(n.li,{children:"\u8fdb\u5165pod\u7684net\u548cmount namespace\uff0c\u67e5\u770b/etc/resolv.conf \u6587\u4ef6\u5185\u5bb9\uff0c\u770bdns nameserver\u5730\u5740\uff0c\u4e00\u822c\u662fkube-dns service\u7684clusterIP"}),"\n",(0,s.jsxs)(n.li,{children:["\u6267\u884c\u547d\u4ee4\uff1a",(0,s.jsx)(n.code,{children:"dig @{dns nameserver} {service name}"})," \u53d1\u73b0\u4e0d\u901a"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6267\u884c\u547d\u4ee4\uff1a ",(0,s.jsx)(n.code,{children:"dig @{coreDNS pod ip} {service name}"})," \u53ef\u4ee5\u901a"]}),"\n",(0,s.jsx)(n.li,{children:"\u8bf4\u660e\u662fkubed-dns service\u7684\u670d\u52a1\u62d3\u6251\u8def\u7531\u9009\u62e9\u6ca1\u6709\u751f\u6548\uff0c\u53ef\u4ee5\u53c2\u7167Yurthub\u95ee\u9898\u3010\u8fb9\u7f18\u8282\u70b9\u4e0a\uff0cService topology\u80fd\u529b\u672a\u751f\u6548\u3011"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var s=t(67294);const o={},r=s.createContext(o);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);