"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[41498],{36514:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=a(85893),o=a(11151);const r={title:"YurtAppOverrider"},i=void 0,s={id:"user-manuals/workload/yurt-app-overrider",title:"YurtAppOverrider",description:"Background",source:"@site/versioned_docs/version-v1.4/user-manuals/workload/yurt-app-overrider.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/yurt-app-overrider",permalink:"/docs/user-manuals/workload/yurt-app-overrider",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/yurt-app-overrider.md",tags:[],version:"v1.4",lastUpdatedBy:"Lixx",lastUpdatedAt:1713521278e3,frontMatter:{title:"YurtAppOverrider"},sidebar:"docs",previous:{title:"YurtAppDaemon",permalink:"/docs/user-manuals/workload/yurt-app-daemon"},next:{title:"YurtStaticSet",permalink:"/docs/user-manuals/workload/yurt-static-set"}},d={},p=[{value:"Background",id:"background",level:2},{value:"Usage",id:"usage",level:2},{value:"1. Deploy OpenYurt",id:"1-deploy-openyurt",level:3},{value:"2. User Stories",id:"2-user-stories",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,t.jsx)(n.p,{children:"We already had YurtAppDaemon and YurtAppSet in the context of multi-region, but they fell short in their ability to customize configurations. To reduce coupling and for backward compatibility, we introduced YurtAppOverrider for personalized rendering, and to simplify configuration, we categorize its capabilities into basic rendering (image and replicas) and advanced rendering (arbitrary fields)."}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.h3,{id:"1-deploy-openyurt",children:"1. Deploy OpenYurt"}),"\n",(0,t.jsxs)(n.p,{children:["The yurt-app-overrider controller and webhook is integrated within Yurt-Manager component. Before using, OpenYurt needs to be installed and deployed. You can refer to ",(0,t.jsx)(n.a,{href:"https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components",children:"Deploy OpenYurt"})," for detailed operations."]}),"\n",(0,t.jsx)(n.h3,{id:"2-user-stories",children:"2. User Stories"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Creating a YurtAppOverrider bound to an existing resource"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppOverrider\nmetadata:\n  namespace: default\n  name: demo1\nsubject:\n  kind: YurtAppSet\n  name: yurtappset-demo\nentries:\n"})}),"\n",(0,t.jsx)(n.p,{children:"We ignore entries field for now and focuses on subject field in the configuration above. Subject field indicates that the created YurtAppOverrider will be bound to the resource with the specified kind and name in its namespace."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Customized replicas and image (basic rendering)"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppOverrider\nmetadata:\n  namespace: default\n  name: demo1\nsubject:\n  kind: YurtAppSet\n  name: yurtappset-demo\nentries:\n- pools:\n    beijing\n    hangzhou\n  items:\n  - image:\n      containerName: nginx\n      imageClaim: nginx:1.14.2\n  - replicas: 3\n- pools:\n    shanghai\n  items:\n  - image:\n      containerName: nginx\n      imageClaim: nginx:1.13.2\n  - replicas: 5\n"})}),"\n",(0,t.jsx)(n.p,{children:"With the above configuration, we can configure the replicas in the Beijing Hangzhou node pool to 3 and the image version to 1.14.2, and we can configure the replicas in the Shanghai node pool to 5 and the image version to 1.13.2."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Implementing hostPath changes (advanced rendering)"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppOverrider\nmetadata:\n  namespace: default\n  name: demo1\nsubject:\n  kind: YurtAppSet\n  name: yurtappset-demo\nentries:\n- pools:\n    hangzhou\n  patches:\n  - operation: add\n    path: /spec/template/spec/volumes/-\n    value:\n      name: test-volume\n      hostPath:\n        path: /var/lib/docker\n        type: Directory\n  - operation: replace\n    path: /spec/template/spec/containers/0/volumeMounts/-\n    value:\n      name: shared-dir\n      mountPath: /var/lib/docker\n- pools:\n    beijing\n  patches:\n  - operation: add\n    path: /spec/template/spec/volumes/-\n    value:\n      name: test-volume\n      hostPath:\n        path: /data/logs\n        type: Directory\n  - operation: replace\n    path: /spec/template/spec/containers/0/volumeMounts/-\n    value:\n      name: shared-dir\n      mountPath: /data/logs\n"})}),"\n",(0,t.jsx)(n.p,{children:"The above patches field allows us to personalize the hostpath for different node pools. Each patch consists of operation, path, and value, and can add, remove, and replace any of the fields, with syntax rules conforming to the syntax of json-patch."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Other features"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppOverrider\nmetadata:\n  namespace: default\n  name: demo1\nsubject:\n  kind: YurtAppSet\n  name: yurtappset-demo\nentries:\n- pools:\n    '*'\n    '-beijing'\n  patches:\n  - operation: add\n    path: /spec/template/spec/volumes/-\n    value:\n      name: foo\n      configMap:\n        name: configmap-{{nodepool}}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["With the above configuration, we can add configmap corresponding to every node pool (except Beijing node pool). To simplify the configuration, we can use ",(0,t.jsx)(n.code,{children:"'*'"})," to indicate all node pools, and we can add ",(0,t.jsx)(n.code,{children:"-"})," in front of a node pool's name to indicate the removal of that node pool. In addition, we can match node pools with ",(0,t.jsx)(n.code,{children:"{{nodepool}}"})," to do bulk configuration. (Note: If we use bulk configuration, the corresponding configmap needs to follow certain naming conventions, i.e., replace ",(0,t.jsx)(n.code,{children:"{{nodepool}}"})," with the actual node pool name)."]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,a)=>{a.d(n,{a:()=>i});var t=a(67294);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);