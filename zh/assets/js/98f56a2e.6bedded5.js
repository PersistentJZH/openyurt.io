"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[23807],{2178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(85893),r=t(11151);const o={title:"YurtAppOverrider"},p=void 0,s={id:"user-manuals/workload/yurt-app-overrider",title:"YurtAppOverrider",description:"\u80cc\u666f\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/workload/yurt-app-overrider.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/yurt-app-overrider",permalink:"/zh/docs/next/user-manuals/workload/yurt-app-overrider",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/yurt-app-overrider.md",tags:[],version:"current",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1705823197,formattedLastUpdatedAt:"2024\u5e741\u670821\u65e5",frontMatter:{title:"YurtAppOverrider"},sidebar:"docs",previous:{title:"YurtAppDaemon",permalink:"/zh/docs/next/user-manuals/workload/yurt-app-daemon"},next:{title:"YurtStaticSet",permalink:"/zh/docs/next/user-manuals/workload/yurt-static-set"}},i={},l=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u7528\u6237\u4f7f\u7528",id:"\u7528\u6237\u4f7f\u7528",level:2},{value:"1\uff09\u90e8\u7f72 OpenYurt",id:"1\u90e8\u7f72-openyurt",level:3},{value:"2\uff09 \u4f7f\u7528\u6837\u4f8b",id:"2-\u4f7f\u7528\u6837\u4f8b",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u80cc\u666f\u4ecb\u7ecd",children:"\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,a.jsx)(n.p,{children:"\u591a\u5730\u57df\u591a\u8282\u70b9\u6c60\u80cc\u666f\u4e0b\u6211\u4eec\u5df2\u6709 YurtAppDaemon \u548c YurtAppSet\uff0c\u4f46\u5b83\u4eec\u5728\u914d\u7f6e\u7684\u4e2a\u6027\u5316\u80fd\u529b\u4e0a\u6709\u6240\u4e0d\u8db3\u3002\u4e3a\u4e86\u964d\u4f4e\u8026\u5408\u5ea6\u548c\u5411\u540e\u517c\u5bb9\uff0c\u6211\u4eec\u5f15\u5165\u4e86 YurtAppOverrider \u6765\u8fdb\u884c\u4e2a\u6027\u5316\u6e32\u67d3\uff0c\u4e3a\u4e86\u7b80\u5316\u914d\u7f6e\uff0c\u6211\u4eec\u5c06\u5b83\u7684\u80fd\u529b\u533a\u5206\u4e3a\u57fa\u7840\u6e32\u67d3\uff08\u955c\u50cf\u548c\u526f\u672c\u6570\u91cf\uff09\u548c\u9ad8\u7ea7\u6e32\u67d3\uff08\u4efb\u610f\u5b57\u6bb5\uff09\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u7528\u6237\u4f7f\u7528",children:"\u7528\u6237\u4f7f\u7528"}),"\n",(0,a.jsx)(n.h3,{id:"1\u90e8\u7f72-openyurt",children:"1\uff09\u90e8\u7f72 OpenYurt"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"YurtAppOverrider"})," \u63a7\u5236\u5668\u548c Webhook \u96c6\u6210\u4e8e Yurt-Manager \u7ec4\u4ef6\uff0c\u4f7f\u7528\u524d\u9700\u8981\u5b89\u88c5\u90e8\u7f72Yurt-Manager\uff0c\u76f8\u5173\u64cd\u4f5c\u53ef\u4ee5\u53c2\u7167",(0,a.jsx)(n.a,{href:"https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components",children:"\u90e8\u7f72OpenYurt\u7ec4\u4ef6"})]}),"\n",(0,a.jsx)(n.h3,{id:"2-\u4f7f\u7528\u6837\u4f8b",children:"2\uff09 \u4f7f\u7528\u6837\u4f8b"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u521b\u5efa\u4e00\u4e2a\u4e0e\u73b0\u6709\u8d44\u6e90\u7ed1\u5b9a\u7684 YurtAppOverrider"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppOverrider\nmetadata:\n  namespace: default\n  name: demo1\nsubject:\n  kind: YurtAppSet\n  name: yurtappset-demo\nentries:\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u4ee5\u4e0a\u914d\u7f6e\u6211\u4eec\u5148\u6682\u65f6\u6401\u7f6e entries \u805a\u7126\u4e8e subject\u3002Subject \u5b57\u6bb5\u8868\u660e\u521b\u5efa\u51fa\u6765\u7684 YurtAppOverrider \u4f1a\u4e0e\u4ed6\u6240\u5728\u547d\u540d\u7a7a\u95f4\u4e0b\u6307\u5b9a\u7684 kind \u548c name\u7684\u8d44\u6e90\u505a\u7ed1\u5b9a\u3002"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u4e2a\u6027\u5316\u526f\u672c\u6570\u91cf\u548c\u955c\u50cf\uff08\u57fa\u7840\u6e32\u67d3\uff09"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppOverrider\nmetadata:\n  namespace: default\n  name: demo1\nsubject:\n  kind: YurtAppSet\n  name: yurtappset-demo\nentries:\n- pools:\n    beijing\n    hangzhou\n  items:\n  - image:\n      containerName: nginx\n      imageClaim: nginx:1.14.2\n  - replicas: 3\n- pools:\n    shanghai\n  items:\n  - image:\n      containerName: nginx\n      imageClaim: nginx:1.13.2\n  - replicas: 5\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7\u4e0a\u8ff0\u914d\u7f6e\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5317\u4eac\u676d\u5dde\u8282\u70b9\u6c60\u7684\u526f\u672c\u6570\u91cf\u914d\u7f6e\u4e3a3\uff0c\u955c\u50cf\u7248\u672c\u4e3a1.14.2\uff0c\u53ef\u4ee5\u5c06\u4e0a\u6d77\u8282\u70b9\u6c60\u7684\u526f\u672c\u6570\u91cf\u914d\u7f6e\u4e3a5\uff0c\u955c\u50cf\u7248\u672c\u4e3a1.13.2\u3002"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5b9e\u73b0hostPath\u7684\u66f4\u6539\uff08\u9ad8\u7ea7\u6e32\u67d3\uff09"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppOverrider\nmetadata:\n  namespace: default\n  name: demo1\nsubject:\n  kind: YurtAppSet\n  name: yurtappset-demo\nentries:\n- pools:\n    hangzhou\n  patches:\n  - operation: add\n    path: /spec/template/spec/volumes/-\n    value:\n      name: test-volume\n      hostPath:\n        path: /var/lib/docker\n        type: Directory\n  - operation: replace\n    path: /spec/template/spec/containers/0/volumeMounts/-\n    value:\n      name: shared-dir\n      mountPath: /var/lib/docker\n- pools:\n    beijing\n  patches:\n  - operation: add\n    path: /spec/template/spec/volumes/-\n    value:\n      name: test-volume\n      hostPath:\n        path: /data/logs\n        type: Directory\n  - operation: replace\n    path: /spec/template/spec/containers/0/volumeMounts/-\n    value:\n      name: shared-dir\n      mountPath: /data/logs\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7\u4e0a\u8ff0 patches \u5b57\u6bb5\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u4e0d\u540c\u8282\u70b9\u6c60\u4e2a\u6027\u5316\u914d\u7f6e hostpath \u7684\u80fd\u529b\u3002\u5bf9\u4e8e\u6bcf\u4e00\u4e2a patch \u7531 operation\u3001path\u3001value \u7ec4\u6210\uff0c\u53ef\u4ee5\u5bf9\u4efb\u610f\u5b57\u6bb5\u8fdb\u884c add\u3001remove\u3001replace \u7684\u64cd\u4f5c\uff0c\u5176\u8bed\u6cd5\u89c4\u5219\u7b26\u5408 json-patch \u7684\u8bed\u6cd5\u3002"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5176\u4ed6\u7279\u6027"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppOverrider\nmetadata:\n  namespace: default\n  name: demo1\nsubject:\n  kind: YurtAppSet\n  name: yurtappset-demo\nentries:\n- pools:\n    '*'\n    '-beijing'\n  patches:\n  - operation: add\n    path: /spec/template/spec/volumes/-\n    value:\n      name: foo\n      configMap:\n        name: configmap-{{nodepool}}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u901a\u8fc7\u4e0a\u8ff0\u914d\u7f6e\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u6bcf\u4e00\u4e2a\u8282\u70b9\u6c60\uff08\u9664\u5317\u4eac\u8282\u70b9\u6c60\uff09\u90fd\u5f15\u5165\u4e0e\u8282\u70b9\u6c60\u5bf9\u5e94\u7684 configmap\u3002\u4e3a\u4e86\u7b80\u5316\u914d\u7f6e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"'*'"})," \u8868\u793a\u6240\u6709\u8282\u70b9\u6c60\uff0c\u53ef\u4ee5\u5728\u8282\u70b9\u6c60\u540d\u5b57\u524d\u52a0 ",(0,a.jsx)(n.code,{children:"-"})," \u6765\u8868\u793a\u53bb\u9664\u8be5\u8282\u70b9\u6c60\u3002\u6b64\u5916\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,a.jsx)(n.code,{children:"{{nodepool}}"}),"\u5339\u914d\u8282\u70b9\u6c60\u6765\u505a\u5230\u6279\u91cf\u914d\u7f6e\u3002\uff08\u6ce8\uff1a\u5982\u679c\u4f7f\u7528\u6279\u91cf\u914d\u7f6e\uff0c\u90a3\u4e0e\u4e4b\u5bf9\u5e94\u7684configmap\u9700\u8981\u9075\u5b88\u4e00\u5b9a\u7684\u547d\u540d\u89c4\u5219\u5373\u5c06\u4e0a\u8ff0\u7684",(0,a.jsx)(n.code,{children:"{{nodepool}}"}),"\u66ff\u6362\u4e3a\u771f\u6b63\u7684\u8282\u70b9\u6c60\u540d\uff09"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>p});var a=t(67294);const r={},o=a.createContext(r);function p(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:p(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);