"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[357],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7059:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return i}});var a=n(7462),r=(n(7294),n(3905));const o={title:"YurtAppSet"},l=void 0,p={unversionedId:"user-manuals/workload/yurt-app-set",id:"user-manuals/workload/yurt-app-set",title:"YurtAppSet",description:"In the previous article we introduced the use of NodePool, mainly the creation and management of NodePool.",source:"@site/docs/user-manuals/workload/yurt-app-set.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/yurt-app-set",permalink:"/docs/next/user-manuals/workload/yurt-app-set",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/yurt-app-set.md",tags:[],version:"current",lastUpdatedBy:"hxcGit",lastUpdatedAt:1656911917,formattedLastUpdatedAt:"Jul 4, 2022",frontMatter:{title:"YurtAppSet"},sidebar:"docs",previous:{title:"Node Pool Management",permalink:"/docs/next/user-manuals/workload/node-pool-management"},next:{title:"YurtAppDaemon",permalink:"/docs/next/user-manuals/workload/yurt-app-daemon"}},s={},i=[{value:"1) Create YurtAppSet",id:"1-create-yurtappset",level:3},{value:"2) Check the deployments created by yurt-app-manager",id:"2-check-the-deployments-created-by-yurt-app-manager",level:3},{value:"3) Add patch to YurtAppSet",id:"3-add-patch-to-yurtappset",level:3}],u={toc:i};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/user-manuals/workload/node-pool-management"},"the previous article")," we introduced the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"NodePool"),", mainly the creation and management of ",(0,r.kt)("inlineCode",{parentName:"p"},"NodePool"),".\nFurther, we developed the ability to deploy applications unitized based on ",(0,r.kt)("inlineCode",{parentName:"p"},"NodePool")," to improve the efficiency of users' operations."),(0,r.kt)("p",null,"In this article, we will show how ",(0,r.kt)("inlineCode",{parentName:"p"},"yurt-app-manager")," can help users manage their workload. Assume we already have an OpenYurt cluster built on\nnative kubernetes with at least two nodes."),(0,r.kt)("h3",{id:"1-create-yurtappset"},"1) Create YurtAppSet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create ",(0,r.kt)("inlineCode",{parentName:"li"},"YurtAppSet")," by ",(0,r.kt)("inlineCode",{parentName:"li"},"yurtappset_test.yaml"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppSet\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: yas-test\nspec:\n  selector:\n    matchLabels:\n      app: yas-test\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: yas-test\n      spec:\n        template:\n          metadata:\n            labels:\n              app: yas-test\n          spec:\n            containers:\n              - name: nginx\n                image: nginx:1.19.3\n  topology:\n    pools:\n    - name: beijing \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - beijing \n      replicas: 1\n    - name: hangzhou \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou \n      replicas: 2\n      tolerations:\n      - effect: NoSchedule\n        key: apps.openyurt.io/example\n        operator: Exists\n  revisionHistoryLimit: 5 \n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check ",(0,r.kt)("inlineCode",{parentName:"li"},"YurtAppSet"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get yas\nNAME       READY   WORKLOADTEMPLATE   AGE\nyas-test   3       Deployment         43s\n")),(0,r.kt)("h3",{id:"2-check-the-deployments-created-by-yurt-app-manager"},"2) Check the deployments created by yurt-app-manager"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy\nNAME                      READY   UP-TO-DATE   AVAILABLE   AGE\nyas-test-beijing-k5st4    1/1     1            1           54s\nyas-test-hangzhou-2jkj5   2/2     2            2           54s\n\n$ kubectl get pod -l app=yas-test\nNAME                                       READY   STATUS    RESTARTS   AGE\nyas-test-beijing-k5st4-56bc98cc7d-h7h86    1/1     Running   0          72s\nyas-test-hangzhou-2jkj5-64588c484b-8mvn8   1/1     Running   0          72s\nyas-test-hangzhou-2jkj5-64588c484b-vx85t   1/1     Running   0          72s\n")),(0,r.kt)("h3",{id:"3-add-patch-to-yurtappset"},"3) Add patch to YurtAppSet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the patch field to the file ",(0,r.kt)("inlineCode",{parentName:"li"},"yurtappset_test.yaml")," as follows, lines 36 to 41 of the file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get yas yas-test -o yaml\n   \n  topology:\n    pools:\n    - name: beijing \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - beijing \n      replicas: 1\n      patch:\n        spec:\n          template:\n            spec:\n              containers:\n                - name: nginx\n                  image: nginx:1.19.0\n    - name: hangzhou \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou \n      replicas: 2\n      tolerations:\n  *** \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This updates the nginx image version to 1.19.0 in the deployments and pods in Beijing NodePool, while keeping the nginx image version at 1.19.3 for the other regions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy yas-test-beijing-k5st4 -o yaml\ncontainers:\n  - image: nginx:1.19.0\n\n$ kubectl get deploy yas-test-hangzhou-2jkj5 -o yaml\ncontainers:\n  - image: nginx:1.19.3\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After removing the patch, all pods created by YurtAppSet revert back to nginx1.19.3")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pod yas-test-beijing-k5st4-974b6958c-t2kfn -o yaml\ncontainers:\n  - image: nginx:1.19.3\n\n$ kubectl get pod yas-test-hangzhou-2jkj5-64588c484b-8mvn8 -o yaml\ncontainers:\n  - image: nginx:1.19.3\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Conclusion: Patch solves the upgrade of the NodePool's single attribute and application release.")))}c.isMDXComponent=!0}}]);