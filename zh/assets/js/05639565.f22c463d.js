"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[1896],{87684:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=t(85893),r=t(11151);const a={title:"Yurtadm init/join"},s=void 0,d={id:"installation/yurtadm-init-join",title:"Yurtadm init/join",description:"1.\u80cc\u666f\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.7.0/installation/yurtadm-init-join.md",sourceDirName:"installation",slug:"/installation/yurtadm-init-join",permalink:"/zh/docs/v0.7.0/installation/yurtadm-init-join",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtadm-init-join.md",tags:[],version:"v0.7.0",lastUpdatedBy:"\u6478\u9c7c\u55b5",lastUpdatedAt:1702901859,formattedLastUpdatedAt:"2023\u5e7412\u670818\u65e5",frontMatter:{title:"Yurtadm init/join"},sidebar:"docs",previous:{title:"\u624b\u52a8\u5b89\u88c5OpenYurt",permalink:"/zh/docs/v0.7.0/installation/manually-setup"},next:{title:"\u4f53\u9a8c\u4e2d\u5fc3\u7b80\u4ecb",permalink:"/zh/docs/v0.7.0/installation/openyurt-experience-center/overview"}},o={},l=[{value:"1.\u80cc\u666f\u8bf4\u660e",id:"1\u80cc\u666f\u8bf4\u660e",level:2},{value:"2.\u4f7f\u7528\u6d41\u7a0b",id:"2\u4f7f\u7528\u6d41\u7a0b",level:2},{value:"2.1\u7f16\u8bd1 Yurtadm",id:"21\u7f16\u8bd1-yurtadm",level:3},{value:"2.2\u521d\u59cb\u5316\u96c6\u7fa4",id:"22\u521d\u59cb\u5316\u96c6\u7fa4",level:3},{value:"2.4\u8282\u70b9\u52a0\u5165",id:"24\u8282\u70b9\u52a0\u5165",level:3},{value:"3.\u5b9e\u73b0\u7ec6\u8282",id:"3\u5b9e\u73b0\u7ec6\u8282",level:2},{value:"3.1 Yurtadm init",id:"31-yurtadm-init",level:3}];function u(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"1\u80cc\u666f\u8bf4\u660e",children:"1.\u80cc\u666f\u8bf4\u660e"}),"\n",(0,i.jsx)(e.p,{children:"\u4e3a\u4e86\u8ba9\u7528\u6237\u5feb\u901f\u62e5\u6709\u4e00\u4e2a OpenYurt \u6d4b\u8bd5\u96c6\u7fa4\uff0cOpenYurt \u63d0\u4f9b\u4e86\u547d\u4ee4 Yurtadm init \u521d\u59cb\u5316\u96c6\u7fa4\uff0c\u7528\u6237\u53ea\u9700\u8981\u9009\u62e9 OpenYurt \u96c6\u7fa4\u7684\u955c\u50cf\u7248\u672c\uff0c\u5c31\u53ef\u4ee5\u521b\u5efa\u5bf9\u5e94\u7248\u672c\u7684 OpenYurt\uff0cYurt -APP-Manager\u3001Yurt-Controller-Manager\u3001Yurttunnel-Server\u3001Yurttunnel-Agent \u7ec4\u4ef6\u4f1a\u81ea\u52a8\u90e8\u7f72\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u540e\u7eed\u6269\u5c55\u96c6\u7fa4\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4 Yurtadm join\uff0c\u5c06\u8fb9\u7f18\u8282\u70b9\u6216\u8005\u4e91\u7aef\u8282\u70b9\u52a0\u5165\u96c6\u7fa4\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"2\u4f7f\u7528\u6d41\u7a0b",children:"2.\u4f7f\u7528\u6d41\u7a0b"}),"\n",(0,i.jsx)(e.h3,{id:"21\u7f16\u8bd1-yurtadm",children:"2.1\u7f16\u8bd1 Yurtadm"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u8fdb\u884c\u521d\u59cb\u5316\u96c6\u7fa4\u65f6\uff0c\u9700\u8981\u5148\u83b7\u53d6 Yurtadm \u53ef\u6267\u884c\u6587\u4ef6\u3002\n\u8981\u5feb\u901f\u6784\u5efa\u548c\u5b89\u88c5\u8bbe\u7f6e yurtadm \uff0c\u5728\u7f16\u8bd1\u7cfb\u7edf\u5df2\u5b89\u88c5\u4e86 golang 1.13~1.17 \u548c bash \u7684\u524d\u63d0\u4e0b\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b8c\u6210\u5b89\u88c5\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:'$ git clone https://github.com/openyurtio/openyurt.git\n$ cd openyurt\n$ make build WHAT="yurtadm" ARCH="amd64" REGION=cn\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u53ef\u6267\u884c\u6587\u4ef6\u5c06\u5b58\u653e\u5728 ",(0,i.jsx)(e.code,{children:"_output/local/bin/"})," \u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"22\u521d\u59cb\u5316\u96c6\u7fa4",children:"2.2\u521d\u59cb\u5316\u96c6\u7fa4"}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u521d\u59cb\u5316\u96c6\u7fa4\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"$ _output/local/bin/linux/amd64/yurtadm init --apiserver-advertise-address 1.2.3.4 --openyurt-version latest --passwd 1234\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u4e2d\u4e3b\u8981\u53c2\u6570\u4e3a\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:" --apiserver-advertise-address    master\u8282\u70b9\u7684IP\u5730\u5740\n --passwd                         master\u8282\u70b9\u7684ssh\u767b\u5165\u5bc6\u7801\n --openyurt-version               OpenYurt\u96c6\u7fa4\u7684\u7248\u672c\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u60f3\u8981\u914d\u7f6e\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"-h"}),"  \u6765\u83b7\u53d6\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"24\u8282\u70b9\u52a0\u5165",children:"2.4\u8282\u70b9\u52a0\u5165"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Yurtadm join \u5c06\u4e91\u7aef\u8282\u70b9\u3001\u8fb9\u7f18\u8282\u70b9\u52a0\u5165 OpenYurt \u96c6\u7fa4\u3002\u6ce8\u610f\uff0c\u5728\u52a0\u5165\u8282\u70b9\u65f6\uff0c\u9700\u8981\u5728\u8282\u70b9\u4e0a\u5b89\u88c5\u8fd0\u884c\u65f6\uff0c\u5e76\u5173\u95ed\u4ea4\u6362\u5206\u533a\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u52a0\u5165\u8fb9\u7f18\u8282\u70b9\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --v=5\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u52a0\u5165\u4e91\u7aef\u8282\u70b9\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=cloud --discovery-token-unsafe-skip-ca-verification --v=5\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5f53\u8fb9\u7f18\u8282\u70b9runtime\u4e3acontainerd\u65f6\uff0c\u9700\u8981\u914d\u7f6e",(0,i.jsx)(e.code,{children:"cri-socket"}),"\u53c2\u6570\uff0c\u5982\u4e0a\u9762\u6267\u884c\u547d\u4ee4\u52a0\u5165\u8fb9\u7f18\u8282\u70b9\u6539\u4e3a\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --cri-socket=/run/containerd/containerd.sock --v=5\n"})}),"\n",(0,i.jsx)(e.h2,{id:"3\u5b9e\u73b0\u7ec6\u8282",children:"3.\u5b9e\u73b0\u7ec6\u8282"}),"\n",(0,i.jsx)(e.h3,{id:"31-yurtadm-init",children:"3.1 Yurtadm init"}),"\n",(0,i.jsxs)(e.p,{children:["\u4e3a\u4e86\u964d\u4f4e Yurtadm init \u7684\u4f7f\u7528\u96be\u5ea6\uff0c\u63d0\u9ad8\u7684\u96c6\u7fa4\u5b89\u88c5\u6210\u529f\u6982\u7387\uff0cYurtadm init \u901a\u8fc7\u5f00\u6e90\u5de5\u5177 ",(0,i.jsx)(e.a,{href:"https://github.com/alibaba/sealer",children:"sealer"}),"\n\u521d\u59cb\u5316 OpenYurt \u96c6\u7fa4\u3002\u5728\u5b9e\u73b0\u4e0a\uff0cYurtadm init \u4f1a\u4e0b\u8f7d sealer \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0csealer \u4f1a\u4e0b\u8f7d OpenYurt \u5b98\u65b9\u63d0\u4f9b\u7684\u96c6\u7fa4\u955c\u50cf\u5e76\u5b89\u88c5\u96c6\u7fa4\u3002\n\u6b64\u5916\uff0cYurtadm init \u4e5f\u652f\u6301\u7528\u6237\u4e2a\u6027\u5316\u914d\u7f6e OpenYurt \u96c6\u7fa4\u955c\u50cf\u3002"]})]})}function c(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>d,a:()=>s});var i=t(67294);const r={},a=i.createContext(r);function s(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);