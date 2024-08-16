"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[30357],{93449:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=a(85893),o=a(11151);const r={title:"YurtAppSet"},s=void 0,l={id:"user-manuals/workload/yurt-app-set",title:"YurtAppSet",description:"In the previous article we introduced the use of NodePool, mainly the creation and management of NodePool.",source:"@site/docs/user-manuals/workload/yurt-app-set.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/yurt-app-set",permalink:"/docs/next/user-manuals/workload/yurt-app-set",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/yurt-app-set.md",tags:[],version:"current",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1723842367e3,frontMatter:{title:"YurtAppSet"},sidebar:"docs",previous:{title:"Workload management overview",permalink:"/docs/next/user-manuals/workload/workload-management-overview"},next:{title:"YurtStaticSet",permalink:"/docs/next/user-manuals/workload/yurt-static-set"}},p={},d=[{value:"1) Create YurtAppSet",id:"1-create-yurtappset",level:3},{value:"2) Check the deployments created by yurt-app-manager",id:"2-check-the-deployments-created-by-yurt-app-manager",level:3}];function i(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"/docs/next/user-manuals/node-pool-management/node-pool-management-overview",children:"the previous article"})," we introduced the use of ",(0,t.jsx)(n.code,{children:"NodePool"}),", mainly the creation and management of ",(0,t.jsx)(n.code,{children:"NodePool"}),".\nFurther, we developed the ability to deploy applications unitized based on ",(0,t.jsx)(n.code,{children:"NodePool"})," to improve the efficiency of users' operations."]}),"\n",(0,t.jsxs)(n.p,{children:["In this article, we will show how ",(0,t.jsx)(n.code,{children:"yurt-app-set"})," can help users manage their workload. Assume we already have an OpenYurt cluster built on\nnative kubernetes with at least two nodes."]}),"\n",(0,t.jsx)(n.h3,{id:"1-create-yurtappset",children:"1) Create YurtAppSet"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create ",(0,t.jsx)(n.code,{children:"YurtAppSet"})," by ",(0,t.jsx)(n.code,{children:"yurtappset_test.yaml"})," to deploy nginx to nodepool np1xxxxxx, np2xxxxxx and any nodepool match label ",(0,t.jsx)(n.code,{children:'yurtappset.openyurt.io/type: "nginx"'}),". Make deployment in nodepool np2xxxxxx has different replicas, image version and labels."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps.openyurt.io/v1beta1\nkind: YurtAppSet\nmetadata:\n  name: example\n  namespace: default\nspec:\n  revisionHistoryLimit: 5\n  pools:\n    - np1xxxxxx\n    - np2xxxxxx\n  nodepoolSelector:\n    matchLabels:\n      yurtappset.openyurt.io/type: "nginx"\n  workload:\n    workloadTemplate:\n      deploymentTemplate:\n        metadata:\n          labels:\n            app: example\n        spec:\n          replicas: 2\n          selector:\n            matchLabels:\n              app: example\n          template:\n            metadata:\n              labels:\n                app: example\n            spec:\n              containers:\n                - image: nginx:1.19.1\n                  imagePullPolicy: Always\n                  name: nginx\n    workloadTweaks:\n      - pools:\n          - np2xxxxxx\n        tweaks:\n          replicas: 3\n          containerImages:\n            - name: nginx\n              targetImage: nginx:1.20.1\n          patches:\n            - path: /metadata/labels/test\n              operation: add\n              value: test\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Check ",(0,t.jsx)(n.code,{children:"YurtAppSet"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get yas\nNAME      TOTAL   READY   UPDATED   AGE\nexample   2       2       2         84s\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-check-the-deployments-created-by-yurt-app-manager",children:"2) Check the deployments created by yurt-app-manager"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get deploy\nNAME                                               READY   UP-TO-DATE   AVAILABLE   AGE\nexample-np45a10e0d15114bbfa747ad0f02ede77f-pvpv6   2/2     2            2           3m46s\nexample-np93d46c5a4aa24702bb1d12b1641d0e43-fr25p   3/3     3            3           3m46s\n\n$ kubectl get pod -l app=example\nNAME                                                              READY   STATUS    RESTARTS   AGE\nexample-np45a10e0d15114bbfa747ad0f02ede77f-pvpv6-6f8fd8669ns9rq   1/1     Running   0          4m24s\nexample-np45a10e0d15114bbfa747ad0f02ede77f-pvpv6-6f8fd8669sn92q   1/1     Running   0          4m24s\nexample-np93d46c5a4aa24702bb1d12b1641d0e43-fr25p-6fcf7db4f7c967   1/1     Running   0          4m24s\nexample-np93d46c5a4aa24702bb1d12b1641d0e43-fr25p-6fcf7db4fgw977   1/1     Running   0          4m24s\nexample-np93d46c5a4aa24702bb1d12b1641d0e43-fr25p-6fcf7db4fnlvnl   1/1     Running   0          4m24s\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>s});var t=a(67294);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);