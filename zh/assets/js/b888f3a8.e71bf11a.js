"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[65416],{13196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>u,metadata:()=>l,toc:()=>i});var r=n(85893),o=n(11151);const u={title:"Yurtctl convert/revert"},s=void 0,l={id:"installation/yurtctl-convert-revert",title:"Yurtctl convert/revert",description:"1.\u80cc\u666f\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.5.0/installation/yurtctl-convert-revert.md",sourceDirName:"installation",slug:"/installation/yurtctl-convert-revert",permalink:"/zh/docs/v0.5.0/installation/yurtctl-convert-revert",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtctl-convert-revert.md",tags:[],version:"v0.5.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1723842367e3,frontMatter:{title:"Yurtctl convert/revert"},sidebar:"docs",previous:{title:"\u4f7f\u7528 YurtCluster Operator \u90e8\u7f72\u8fb9\u7f18\u96c6\u7fa4",permalink:"/zh/docs/v0.5.0/installation/yurtcluster"},next:{title:"\u624b\u52a8\u8f6c\u6362",permalink:"/zh/docs/v0.5.0/installation/manually-setup"}},c={},i=[{value:"1.\u80cc\u666f\u8bf4\u660e",id:"1\u80cc\u666f\u8bf4\u660e",level:2},{value:"2.\u4f7f\u7528\u6d41\u7a0b",id:"2\u4f7f\u7528\u6d41\u7a0b",level:2},{value:"2.1\u7f16\u8bd1 Yurtctl",id:"21\u7f16\u8bd1-yurtctl",level:3},{value:"2.2 Kubernetes To OpenYurt",id:"22-kubernetes-to-openyurt",level:3},{value:"2.3 OpenYurt To Kubernetes",id:"23-openyurt-to-kubernetes",level:3}];function a(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"1\u80cc\u666f\u8bf4\u660e",children:"1.\u80cc\u666f\u8bf4\u660e"}),"\n",(0,r.jsx)(t.p,{children:"\u7531\u4e8e OpenYurt \u5bf9 Kubernetes \u65e0\u4fb5\u5165\uff0c\u6240\u4ee5 OpenYurt \u63d0\u4f9b\u4e86 Yurtctl convert/revert \u547d\u4ee4\uff0c\u7528\u4e8e Kubernetes \u96c6\u7fa4\u548c OpenYurt \u96c6\u7fa4\u7684\u8f6c\u6362\u3002\u8be5\u547d\u4ee4\u9002\u7528\u4e8e\u6d4b\u8bd5\u73af\u5883\uff0c\u4e0d\u63a8\u8350\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"2\u4f7f\u7528\u6d41\u7a0b",children:"2.\u4f7f\u7528\u6d41\u7a0b"}),"\n",(0,r.jsx)(t.h3,{id:"21\u7f16\u8bd1-yurtctl",children:"2.1\u7f16\u8bd1 Yurtctl"}),"\n",(0,r.jsxs)(t.p,{children:["\u8981\u5feb\u901f\u6784\u5efa\u548c\u5b89\u88c5\u8bbe\u7f6e ",(0,r.jsx)(t.code,{children:"yurtctl"})," \uff0c\u5728\u7f16\u8bd1\u7cfb\u7edf\u5df2\u5b89\u88c5\u4e86 golang 1.13+ \u548c bash \u7684\u524d\u63d0\u4e0b\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b8c\u6210\u5b89\u88c5\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:'```sh\n$ git clone https://github.com/openyurtio/openyurt.git\n$ cd openyurt\n$ make build WHAT="yurtctl" ARCH="amd64" REGION=cn\n```\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u751f\u6210\u7684\u53ef\u6267\u884c\u6587\u4ef6\u5c06\u5b58\u653e\u5728 ",(0,r.jsx)(t.code,{children:"_output/bin/"})," \u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,r.jsx)(t.h3,{id:"22-kubernetes-to-openyurt",children:"2.2 Kubernetes To OpenYurt"}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\uff0c\u5f53\u7528\u6237\u5df2\u7ecf\u62e5\u6709\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 Yurtctl convert \u547d\u4ee4\uff0c\u5feb\u901f\u5730\u5c06\u96c6\u7fa4\u8f6c\u6362\u4e3a OpenYurt \u96c6\u7fa4\u3002\u76ee\u524d\uff0cOpenYurt \u652f\u6301 minkube\u3001kind \u4ee5\u53ca\u624b\u52a8\u642d\u5efa\u7684 Kubernetes \u96c6\u7fa4\u7684\u8f6c\u6362\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u67e5\u770b\u539f\u751f Kubernetes \u96c6\u7fa4\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ kubectl get node\nNAME                     STATUS   ROLES    AGE   VERSION\nus-west-1.192.168.0.87   Ready    <none>   19h   v1.14.8-aliyun.1\nus-west-1.192.168.0.88   Ready    <none>   19h   v1.14.8-aliyun.1\nus-west-1.192.168.0.89   Ready    <none>   19h   v1.14.8-aliyun.1\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528 Yurtctl convert \u547d\u4ee4\u8fdb\u884c\u96c6\u7fa4\u8f6c\u6362\u3002\u8f6c\u6362\u65f6\uff0c\u9700\u8981\u6307\u5b9a\u96c6\u7fa4\u4e2d\u7684\u4e91\u7aef\u8282\u70b9\u5217\u8868\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ _output/bin/yurtctl convert --provider ack --cloud-nodes us-west-1.192.168.0.87,us-west-1.192.168.0.88\nI0529 11:21:05.835781    9231 convert.go:145] mark us-west-1.192.168.0.87 as the cloud-node\nI0529 11:21:05.835781    9231 convert.go:145] mark us-west-1.192.168.0.88 as the cloud-node\nI0529 11:21:05.861064    9231 convert.go:153] mark us-west-1.192.168.0.89 as the edge-node\nI0529 11:21:05.951483    9231 convert.go:183] deploy the yurt controller manager\nI0529 11:21:05.974443    9231 convert.go:195] deploying the yurt-hub and resetting the kubelet service...\nI0529 11:21:26.075075    9231 util.go:147] servant job(node-servant-convert-us-west-1.192.168.0.89) has succeeded\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8f6c\u6362\u5b8c\u6210\u4e4b\u540e\uff0c\u96c6\u7fa4\u4e2d\u4f1a\u90e8\u7f72 yurt-controller-manager\uff0cyurt-hub \u7b49\u7ec4\u4ef6\u3002\u6b64\u5916\uff0c\u8fb9\u7f18\u8282\u70b9\u4f1a\u81ea\u52a8\u5f00\u542f\u8282\u70b9\u81ea\u6cbb\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u8f6c\u6362\u65f6 Yurtctl \u63d0\u4f9b\u4e86\u9009\u9879\uff0c\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u8bbe\u7f6e OpenYurt \u96c6\u7fa4\u7684\u914d\u7f6e\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"--deploy-yurttunnel\t\t\t\t\u662f\u5426\u90e8\u7f72 yurttunnel-server \u4ee5\u53ca yurttunnel-agent\n--enable-app-manager\t\t\t\u662f\u5426\u90e8\u7f72 yurt-app-manager\n--yurthub-image\t\t\t\t\t\t\t\t\t\tyurthub \u955c\u50cf\n--yurt-controller-manager-image\t\tyurt-controller-manager \u955c\u50cf\n--yurt-tunnel-server-image\t\t\t\tyurttunnel-server \u955c\u50cf\n--yurt-tunnel-agent-image\t\t\t\t\tyurttunnel-agent \u955c\u50cf\n--yurt-app-manager-image\t\t\t\t\tyurt-app-manager-image \u955c\u50cf\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u66f4\u591a\u914d\u7f6e\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"yurtctl convert -h"})," \u83b7\u53d6\u3002\n\u6ce8\u610f\uff1a\u5982\u679c\u8f6c\u6362\u5931\u8d25\uff0c\u8bf7\u67e5\u8be2\u5931\u8d25\u7684 Job \u7684\u8fd0\u884c\u60c5\u51b5\u8fdb\u884c\u9519\u8bef\u6392\u67e5\uff0c\u5e76\u5220\u9664\u76f8\u5173\u7684 Job\uff0c\u4ee5\u907f\u514d\u4e0b\u4e00\u6b21\u8f6c\u6362\u53d1\u751f\u9519\u8bef\u3002"]}),"\n",(0,r.jsx)(t.h3,{id:"23-openyurt-to-kubernetes",children:"2.3 OpenYurt To Kubernetes"}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\uff0c\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5c06 OpenYurt \u96c6\u7fa4\u8f6c\u6362\u4e3a Kubernetes \u96c6\u7fa4\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ _output/bin/yurtctl revert\nrevert.go:100] label openyurt.io/is-edge-worker is removed\nrevert.go:110] yurt controller manager is removed\nrevert.go:124] ServiceAccount node-controller is created\nutil.go:137] servant job(node-servant-revert-minikube-m02) has succeeded\nrevert.go:133] yurt-hub is removed, kubelet service is reset\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u6ce8\u610f\uff0c\u5728\u6267\u884c\u524d\u9700\u8981\u786e\u4fdd\u6240\u6709\u8fb9\u7f18\u8282\u70b9\u72b6\u6001\u6b63\u5e38\uff0c\u4ee5\u907f\u514d\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u53d1\u751f\u9519\u8bef\u3002"})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var r=n(67294);const o={},u=r.createContext(o);function s(e){const t=r.useContext(u);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(u.Provider,{value:t},e.children)}}}]);