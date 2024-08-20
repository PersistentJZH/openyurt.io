"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[68022],{87032:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=t(85893),o=t(11151);const s={title:"\u51cf\u5c11\u4e91\u8fb9\u7f51\u7edc\u5e26\u5bbd"},i=void 0,d={id:"user-manuals/network/bandwidth-reduction",title:"\u51cf\u5c11\u4e91\u8fb9\u7f51\u7edc\u5e26\u5bbd",description:"\u80cc\u666f\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/user-manuals/network/bandwidth-reduction.md",sourceDirName:"user-manuals/network",slug:"/user-manuals/network/bandwidth-reduction",permalink:"/zh/docs/v1.2/user-manuals/network/bandwidth-reduction",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/bandwidth-reduction.md",tags:[],version:"v1.2",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1724188058e3,frontMatter:{title:"\u51cf\u5c11\u4e91\u8fb9\u7f51\u7edc\u5e26\u5bbd"},sidebar:"docs",previous:{title:"Raven",permalink:"/zh/docs/v1.2/user-manuals/network/raven"},next:{title:"\u8fb9\u7f18Pod\u7f51\u7edc",permalink:"/zh/docs/v1.2/user-manuals/network/edge-pod-network"}},a={},l=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u4e91\u8fb9\u6d41\u91cf\u590d\u7528\u7684\u67b6\u6784\u4e0e\u539f\u7406",id:"\u4e91\u8fb9\u6d41\u91cf\u590d\u7528\u7684\u67b6\u6784\u4e0e\u539f\u7406",level:2},{value:"\u5f00\u542f\u65b9\u6cd5",id:"\u5f00\u542f\u65b9\u6cd5",level:2}];function u(e){const n={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u80cc\u666f\u4ecb\u7ecd",children:"\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://openyurt.io/docs/test-report/yurthub-performance-test/#traffic",children:"\u6027\u80fd\u6d4b\u8bd5"})," \u8868\u660e\uff0c\u5728\u5927\u89c4\u6a21 OpenYurt \u96c6\u7fa4\u4e2d\uff0c\u5982\u679c pod \u88ab\u5220\u9664\u5e76\u91cd\u65b0\u521b\u5efa\uff0c\u4e91\u8fb9\u4e4b\u95f4\u7684\u901a\u4fe1\u6d41\u91cf\u5c06\u8fc5\u901f\u589e\u52a0\uff0c\n\u56e0\u4e3a\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684 kube-proxy \u7ec4\u4ef6\u4f1a\u5b9e\u65f6\u76d1\u542c\u6240\u6709 endpoints/endpointslices \u6570\u636e\u7684\u53d8\u5316\u3002 \u8bf7\u6ce8\u610f\uff0c\u901a\u5e38\u76f8\u540c\u7684 endpoints/endpointslices \u6570\u636e\u5c06\u88ab\u4f20\u8f93\u5230\u8282\u70b9\u6c60\u4e2d\u7684\u6bcf\u4e00\u4e2a\u8fb9\u7f18\u8282\u70b9\uff0c\u8003\u8651\u5230\u4e91\u8fb9\u7f18\u7f51\u7edc\u6d41\u91cf\u5c06\u4f7f\u7528\u516c\u5171\u7f51\u7edc\uff0c\n\u8fd9\u4f1a\u7ed9\u7528\u6237\u5e26\u6765\u516c\u7f51\u6d41\u91cf\u6210\u672c\u538b\u529b\u3002\u56e0\u6b64OpenYurt\u793e\u533a\u5bf9\u964d\u4f4e\u4e91\u8fb9\u901a\u4fe1\u6d41\u91cf\u4e00\u76f4\u6709\u6bd4\u8f83\u5f3a\u7684\u8bc9\u6c42\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4e91\u8fb9\u6d41\u91cf\u590d\u7528\u7684\u67b6\u6784\u4e0e\u539f\u7406",children:"\u4e91\u8fb9\u6d41\u91cf\u590d\u7528\u7684\u67b6\u6784\u4e0e\u539f\u7406"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u4f55\u5728\u4e0d\u4fb5\u5165\u4fee\u6539\u7684 Kubernetes \u7684\u60c5\u51b5\u4e0b\u6765\u6ee1\u8db3\u9700\u6c42\uff0c\u9996\u5148\u6bd4\u8f83\u5bb9\u6613\u8003\u8651\u5230\u7684\u65b9\u6848\u662f\u5728\u8282\u70b9\u6c60\u5185\u589e\u52a0\u4e00\u4e2async\u7ec4\u4ef6\uff0c\u5b9e\u65f6\u540c\u6b65\u4e91\u7aef\u7684\u6570\u636e\uff0c\u7136\u540e\u518d\u5206\u53d1\u7ed9\u8282\u70b9\u6c60\u4e2d\u5404\u4e2a\u7ec4\u4ef6\u3002\u4f46\u662f\u8fd9\u4e2a\u65b9\u6848\u843d\u5730\u5c06\u9762\u4e34\u4e0d\u5c0f\u7684\u6311\u6218\uff0c\n\u9996\u5148\u6570\u636e\u8bbf\u95ee\u8bf7\u6c42\u90fd\u662f\u8fb9\u7f18\u4e3b\u52a8\u5411\u4e91\u7aef\u53d1\u8d77\u7684\uff0csync\u9700\u8981\u62e6\u622a\u8fd9\u4e9b\u8bf7\u6c42\u5e76\u7ed9\u8bf7\u6c42\u8fd4\u56de\u6570\u636e\u3002\u540c\u65f6\u5982\u679csync\u7ec4\u4ef6\u6545\u969c\uff0c\u8fb9\u7f18\u7684\u8bf7\u6c42\u5c06\u9762\u4e34\u4e2d\u65ad\uff0c\u800c\u4fdd\u969csync\u7ec4\u4ef6\u7684\u9ad8\u53ef\u7528\u4f1a\u975e\u5e38\u68d8\u624b\u3002"}),"\n",(0,r.jsx)(n.p,{children:"OpenYurt\u793e\u533a\u9996\u521b\u57fa\u4e8epool-coordinator+YurtHub\u7684\u4e91\u8fb9\u6d41\u91cf\u590d\u7528\u673a\u5236\uff0c\u65e2\u53ef\u4ee5\u4e0e\u539f\u751fKubernetes\u7684\u4e91\u8fb9\u901a\u4fe1\u94fe\u8def\u65e0\u7f1d\u878d\u5408\uff0c\u53c8\u4f18\u96c5\u7684\u4fdd\u969c\u4e86\u901a\u4fe1\u94fe\u8def\u7684\u9ad8\u53ef\u7528(YurtHub Leader\u9009\u4e3e)\uff0c\u5b9e\u73b0\u4e91\u8fb9\u901a\u4fe1\u6210\u672c\u7684\u6d88\u51cf\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u8282\u70b9\u6c60\u5185\uff0c\u8282\u70b9\u4ece\u4e91\u7aef\u83b7\u53d6\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u5206\u4e3a\u4e24\u79cd\u7c7b\u578b\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"pool-scoped metadata:  \u7ec4\u4ef6\u4ece\u4e91\u7aef\u83b7\u53d6\u7684\u6570\u636e\u5b8c\u5168\u4e00\u81f4\uff0c\u5982\u6bcf\u4e2a\u8282\u70b9\u7684kube-proxy\u83b7\u53d6\u5230\u7684endpointslices"}),"\n",(0,r.jsx)(n.li,{children:"node-scoped metadata: \u7ec4\u4ef6\u4ece\u4e91\u7aef\u83b7\u53d6\u7684\u6570\u636e\u548c\u81ea\u8eab\u8282\u70b9\u76f8\u5173\uff0c\u5982\u6bcf\u4e2a\u8282\u70b9\u7684kubelet\u83b7\u53d6\u5230\u7684pods"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u800c\u6027\u80fd\u6d4b\u8bd5\u7ed3\u679c\u4e5f\u8868\u660e\uff0c\u4e3b\u8981\u5360\u7528\u4e91\u8fb9\u5e26\u5bbd\u7684\u6570\u636e\u662f pool-scoped metadata\u3002\u56e0\u6b64\u901a\u8fc7\u5728\u8282\u70b9\u6c60\u4e2d\u590d\u7528 pool-scoped metadata\uff0c\u4ece\u800c\u53ef\u4ee5\u5927\u5e45\u964d\u4f4e\u4e91\u8fb9\u7684\u6570\u636e\u901a\u4fe1\u91cf\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"bandwidth-reduction",src:t(88109).Z+"",width:"1654",height:"880"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8282\u70b9\u6c60\u4e2d\u6240\u6709YurtHub\u7ec4\u4ef6\u901a\u8fc7\u8282\u70b9\u6c60\u4e2d\u7684Pool-Coordinator\u8fdb\u884c\u9009\u4e3e\u4ea7\u751fLeader\uff0c\u53ea\u6709\u548c\u4e91\u7aef\u7f51\u7edc\u8fde\u63a5\u6b63\u5e38\u7684YurtHub\u624d\u4f1a\u6210\u4e3aLeader\u3002\u5f53Leader\u8282\u70b9\u7684\u4e91\u8fb9\u7f51\u7edc\u8fde\u63a5\u5f02\u5e38\u65f6\uff0cLeader\u5c06\u88ab\u5176\u4ed6Follower\u81ea\u52a8\u66ff\u6362\u3002"}),"\n",(0,r.jsx)(n.li,{children:"YurtHub Leader\u4e3b\u52a8\u4ece\u4e91\u7aef\u5b9e\u65f6\u83b7\u53d6 pool-scoped metadata(\u5982Endpointslices)\uff0c\u7136\u540e\u5b58\u5165\u8282\u70b9\u6c60\u7684Pool-Coordinator\u7ec4\u4ef6\u4e2d"}),"\n",(0,r.jsx)(n.li,{children:"\u8282\u70b9\u4e0a\u7ec4\u4ef6(\u5982Kube-Proxy)\u901a\u8fc7YurtHub\u6765\u83b7\u53d6 pool-scoped metadata\u65f6\uff0cYurtHub\u5c06\u4ecePool-Coordinator\u8fd4\u56de\u5b9e\u65f6\u7684\u6570\u636e\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5f00\u542f\u65b9\u6cd5",children:"\u5f00\u542f\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.p,{children:"\u4e91\u8fb9\u6d41\u91cf\u590d\u7528\u80fd\u529b\u5728OpenYurt\u96c6\u7fa4\u4e2d\u662f\u9ed8\u8ba4\u5f00\u542f\u7684\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u914d\u7f6e\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u786e\u4fdd OpenYurt \u7248\u672c\u5927\u4e8e1.2.0"}),"\n",(0,r.jsx)(n.li,{children:"\u786e\u4fdd \u6bcf\u4e2a\u8282\u70b9\u6c60\u4e2d\u8fd0\u884c\u4e86\u4e00\u4e2aPool-Coordinator \u5b9e\u4f8b"}),"\n",(0,r.jsx)(n.li,{children:"YurtHub\u7ec4\u4ef6\u542f\u52a8\u53c2\u6570 --enable-coordinator = true"}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},88109:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/bandwidth-reduction-6a1b44ff4aa7899853290ff551ff25cc.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var r=t(67294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);