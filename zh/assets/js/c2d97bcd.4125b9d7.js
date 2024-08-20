"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[99310],{93524:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=o(85893),r=o(11151);const s={title:"\u8282\u70b9\u81ea\u6cbb"},a=void 0,l={id:"user-manuals/autonomy/node-autonomy",title:"\u8282\u70b9\u81ea\u6cbb",description:"1. \u80cc\u666f\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.6.0/user-manuals/autonomy/node-autonomy.md",sourceDirName:"user-manuals/autonomy",slug:"/user-manuals/autonomy/node-autonomy",permalink:"/zh/docs/v0.6.0/user-manuals/autonomy/node-autonomy",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/autonomy/node-autonomy.md",tags:[],version:"v0.6.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1724188058e3,frontMatter:{title:"\u8282\u70b9\u81ea\u6cbb"},sidebar:"docs",previous:{title:"YurtDeviceController",permalink:"/zh/docs/v0.6.0/core-concepts/yurt-device-controller"},next:{title:"\u8fb9\u7f18Pod\u7f51\u7edc",permalink:"/zh/docs/v0.6.0/user-manuals/network/edge-pod-network"}},d={},u=[{value:"1. \u80cc\u666f\u8bf4\u660e",id:"1-\u80cc\u666f\u8bf4\u660e",level:2},{value:"2. \u529f\u80fd\u4f7f\u7528",id:"2-\u529f\u80fd\u4f7f\u7528",level:2},{value:"3. \u6ce8\u610f\u4e8b\u9879",id:"3-\u6ce8\u610f\u4e8b\u9879",level:2}];function i(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"1-\u80cc\u666f\u8bf4\u660e",children:"1. \u80cc\u666f\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"\u8282\u70b9\u81ea\u6cbb\u4f7f\u5f97\u5728\u4e91\u8fb9\u7f51\u7edc\u4e0d\u7a33\u5b9a\u7684\u60c5\u51b5\u4e0b\uff0c\u8fb9\u7f18\u4e1a\u52a1\u53ef\u4ee5\u7a33\u5b9a\u5de5\u4f5c\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5728 OpenYurt \u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u8282\u70b9\u81ea\u6cbb\u529f\u80fd\uff0c\u4fdd\u8bc1\u5728\u4e91\u8fb9\u7f51\u7edc\u65ad\u8fde\u65f6\uff0c\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684\u4e1a\u52a1\u5bb9\u5668\u53ef\u4ee5\u6301\u7eed\u5de5\u4f5c\u800c\u4e0d\u88ab\u91cd\u65b0\u8c03\u5ea6\uff0c\u6216\u8005\u5728\u5bb9\u5668\u91cd\u542f\u3001\u8fb9\u7f18\u8282\u70b9\u91cd\u542f\u65f6\uff0c\u4e1a\u52a1\u5bb9\u5668\u53ef\u4ee5\u81ea\u52a8\u6062\u590d\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"2-\u529f\u80fd\u4f7f\u7528",children:"2. \u529f\u80fd\u4f7f\u7528"}),"\n",(0,t.jsx)(e.p,{children:"\u5728 OpenYurt \u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5f00\u542f/\u5173\u95ed\u8282\u70b9\u81ea\u6cbb\u529f\u80fd\u3002"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"\u624b\u52a8\u4fee\u6539\u8282\u70b9 Annotation"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u7ed9 Node \u6dfb\u52a0 Annotation\uff0c\u5f00\u542f\u8282\u70b9\u81ea\u6cbb\u529f\u80fd\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# node1 \u5f00\u542f\u8282\u70b9\u81ea\u6cbb\nkubectl annotate nodes node1 node.beta.openyurt.io/autonomy=true\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u7684\u547d\u4ee4\uff0c\u5173\u95ed\u8282\u70b9\u81ea\u6cbb\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# \u901a\u8fc7\u5220\u9664 annotation \u5173\u95ed\u8282\u70b9\u81ea\u6cbb\nkubectl annotate nodes node1 node.beta.openyurt.io/autonomy-\n\n# \u901a\u8fc7\u4fee\u6539 node.beta.openyurt.io/autonomy \u503c\u4e3a false \u5173\u95ed\u8282\u70b9\u81ea\u6cbb\nkubectl annotate --overwrite nodes node1 node.beta.openyurt.io/autonomy=false\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"\u4f7f\u7528 Yurtctl \u5f00\u542f/\u5173\u95ed\u8282\u70b9\u81ea\u6cbb"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u7528\u6237\u672c\u5730\u7f16\u8bd1 Yurtctl \u53ef\u6267\u884c\u6587\u4ef6\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528 Yurtctl \u5f00\u542f\u8282\u70b9\u81ea\u6cbb\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# node1, node2 \u5f00\u542f\u8282\u70b9\u81ea\u6cbb\nyurtctl markautonomous -a node1,node2\n\n# \u6240\u6709\u8fb9\u7f18\u8282\u70b9\u5f00\u542f\u8282\u70b9\u81ea\u6cbb\nyurtctl markautonomous\n"})}),"\n",(0,t.jsx)(e.h2,{id:"3-\u6ce8\u610f\u4e8b\u9879",children:"3. \u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u8fb9\u7f18\u8282\u70b9\u5f00\u542f\u8282\u70b9\u81ea\u6cbb\u529f\u80fd\u540e\uff0c\u65e0\u8bba\u662f\u4e91\u8fb9\u7f51\u7edc\u65ad\u8fde\u5bfc\u81f4\u7684\u8282\u70b9NotReady\uff0c\u8fd8\u662f\u672c\u8eab\u8282\u70b9\u6545\u969c\u5bfc\u81f4\u7684\u8282\u70b9NotReady\uff0c\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684\u4e1a\u52a1Pod\u90fd\u4e0d\u4f1a\u88ab\u9a71\u9010\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u4e91\u7aef\u8282\u70b9\u4e0d\u5efa\u8bae\u5f00\u542f\u8282\u70b9\u81ea\u6cbb\u3002\u5982\u679c\u4e91\u7aef\u8282\u70b9\u5f00\u542f\u4e86\u8282\u70b9\u81ea\u6cbb\uff0c\u8282\u70b9\u4e3a\u975e Ready \u72b6\u6001\u65f6\uff0c\u5176\u4e1a\u52a1\u5bb9\u5668\u4e0d\u4f1a\u88ab\u9a71\u9010\u5e76\u91cd\u65b0\u8c03\u5ea6\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u4f7f\u7528 Yurtctl convert \u547d\u4ee4\u8f6c\u6362\u96c6\u7fa4\u65f6\uff0c\u9ed8\u8ba4\u4f1a\u5c06\u6240\u6709\u7684\u8fb9\u7f18\u8282\u70b9\u5f00\u542f\u8282\u70b9\u81ea\u6cbb\u3002"}),"\n"]}),"\n"]})]})}function c(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}},11151:(n,e,o)=>{o.d(e,{Z:()=>l,a:()=>a});var t=o(67294);const r={},s=t.createContext(r);function a(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);