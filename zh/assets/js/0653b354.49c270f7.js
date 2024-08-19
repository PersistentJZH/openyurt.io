"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[30512],{20571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>i,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var l=t(85893),a=t(11151);const o={title:"YurtAppDaemon"},s=void 0,p={id:"user-manuals/workload/yurt-app-daemon",title:"YurtAppDaemon",description:"\u80cc\u666f\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/user-manuals/workload/yurt-app-daemon.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/yurt-app-daemon",permalink:"/zh/docs/v1.2/user-manuals/workload/yurt-app-daemon",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/yurt-app-daemon.md",tags:[],version:"v1.2",lastUpdatedBy:"LofiSu",lastUpdatedAt:172404878e4,frontMatter:{title:"YurtAppDaemon"},sidebar:"docs",previous:{title:"YurtAppSet",permalink:"/zh/docs/v1.2/user-manuals/workload/yurt-app-set"},next:{title:"Prometheus\u6536\u96c6\u8fb9\u7f18\u8bbe\u5907\u6570\u636e",permalink:"/zh/docs/v1.2/user-manuals/monitoring/prometheus"}},r={},d=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u7528\u6237\u4f7f\u7528\uff1a",id:"\u7528\u6237\u4f7f\u7528",level:2}];function c(e){const n={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u80cc\u666f\u4ecb\u7ecd",children:"\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u8fb9\u7f18\u573a\u666f\u4e2d\uff0c\u6765\u81ea\u540c\u4e00\u533a\u57df\u7684\u8fb9\u7f18\u8282\u70b9\u88ab\u5206\u914d\u5230\u540c\u4e00\u4e2a\u8282\u70b9\u6c60\u4e2d\uff0c\u6b64\u65f6\uff0c\u4e00\u822c\u9700\u8981\u5728\u8282\u70b9\u6c60\u7ef4\u5ea6\u90e8\u7f72\u4e00\u4e9b\u7cfb\u7edf\u7ec4\u4ef6\uff0c\u4f8b\u5982CoreDNS\u3002 \u521b\u5efa\u8282\u70b9\u6c60\u65f6\uff0c\u6211\u4eec\u5e0c\u671b\u81ea\u52a8\u521b\u5efa\u8fd9\u4e9b\u7cfb\u7edf\u7ec4\u4ef6\uff0c\u800c\u65e0\u9700\u4efb\u4f55\u624b\u52a8\u64cd\u4f5c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"YurtAppDaemon \u786e\u4fdd\u6240\u6709\u6216\u90e8\u5206\u8282\u70b9\u6c60\u4ee5 Deployment \u6216 StatefulSet \u4f5c\u4e3a\u6a21\u677f\u8fd0\u884c\u526f\u672c\u3002 \u968f\u7740\u8282\u70b9\u6c60\u7684\u521b\u5efa\uff0c\u8fd9\u4e9b\u5b50\u90e8\u7f72\u6216\u72b6\u6001\u96c6\u4e5f\u88ab\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\uff0c\u5b50\u90e8\u7f72\u6216\u72b6\u6001\u96c6\u7684\u521b\u5efa/\u66f4\u65b0\u7531 YurtAppDaemon \u63a7\u5236\u5668\u5b9e\u73b0\u3002 \u8fd9\u4e9b\u5b50 Deployments \u6216 Statefulsets \u5c06\u5728\u8282\u70b9\u6c60 \u4ece\u96c6\u7fa4\u4e2d\u79fb\u9664\u65f6\u88ab\u56de\u6536\uff0c\u5220\u9664 YurtAppDaemon CR \u5c06\u6e05\u7406\u5b83\u521b\u5efa\u7684 Deployments \u6216 StatefulSets\u3002 YurtAppDaemon \u7684\u884c\u4e3a\u7c7b\u4f3c\u4e8e K8S Daemonset\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e YurtAppDaemon \u4ece\u8282\u70b9\u6c60\u7ef4\u5ea6\u81ea\u52a8\u521b\u5efa K8S \u5de5\u4f5c\u8d1f\u8f7d\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/31456432/1641999454831-b8f2f9f4-c715-4063-8444-b0af22830092.png",alt:"img"})}),"\n",(0,l.jsx)(n.h2,{id:"\u7528\u6237\u4f7f\u7528",children:"\u7528\u6237\u4f7f\u7528\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u521b\u5efatest1\u8282\u70b9\u6c60"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"cat <<EOF | kubectl apply -f -\n\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: test1\nspec:\n  selector:\n    matchLabels:\n      apps.openyurt.io/nodepool: test1\n  type: Edge\n\n\nEOF\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u521b\u5efatest2\u8282\u70b9\u6c60"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"cat <<EOF | kubectl apply -f -\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: test2\nspec:\n  selector:\n    matchLabels:\n      apps.openyurt.io/nodepool: test2\n  type: Edge\n\nEOF\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5c06\u8282\u70b9\u52a0\u5165\u5230\u8282\u70b9\u6c60"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:" kubectl label node cn-beijing.172.23.142.31 apps.openyurt.io/desired-nodepool=test1\n kubectl label node cn-beijing.172.23.142.32 apps.openyurt.io/desired-nodepool=test1\n\n kubectl label node cn-beijing.172.23.142.34 apps.openyurt.io/desired-nodepool=test2\n kubectl label node cn-beijing.172.23.142.35 apps.openyurt.io/desired-nodepool=test2\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u521b\u5efaYurtAppDaemon"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'cat <<EOF | kubectl apply -f -\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppDaemon\nmetadata:\n  name: daemon-1\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      app: daemon-1\n\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: daemon-1\n      spec:\n        replicas: 1\n        selector:\n          matchLabels:\n            app: daemon-1\n        template:\n          metadata:\n            labels:\n              app: daemon-1\n          spec:\n            containers:\n            - image: nginx:1.18.0\n              imagePullPolicy: Always\n              name: nginx\n  nodepoolSelector:\n    matchLabels:\n      yurtappdaemon.openyurt.io/type: "nginx"\n\nEOF\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e3atest1\u8282\u70b9\u6c60\u6253\u6807\u7b7e"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"kubectl label np test1 yurtappdaemon.openyurt.io/type=nginx\n\n# Check the Deployment\nkubectl get deployments.apps\n\n# Check the Deployment nodeselector\n\n# Check the Pod\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e3atest2\u8282\u70b9\u6c60\u6253\u6807\u7b7e"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"kubectl label np test2 yurtappdaemon.openyurt.io/type=nginx\n\n# Check the Deployment\nkubectl get deployments.apps\n\n# Check the Deployment nodeselector\n\n# Check the Pod\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6539\u53d8YurtAppDaemon"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"# Change yurtappdaemon workloadTemplate replicas to 2\n\n# Change yurtappdaemon workloadTemplate image to nginx:1.19.0\n\n# Check the Pod\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u79fb\u9664\u8282\u70b9\u6c60\u6807\u7b7e"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"# Remove the nodepool test1 label\nkubectl label np test1 yurtappdaemon.openyurt.io/type-\n\n# Check the Deployment\n\n# Check the Pod\n\n# Remove the nodepool test2 label\nkubectl label np test2 yurtappdaemon.openyurt.io/type-\n\n# Check the Deployment\n\n# Check the Pod\n"})})]})}function i(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>p,a:()=>s});var l=t(67294);const a={},o=l.createContext(a);function s(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);