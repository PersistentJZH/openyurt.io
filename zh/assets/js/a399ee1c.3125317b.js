"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[55404],{15069:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=a(85893),o=a(11151);const s={title:"YurtAppDaemon"},l=void 0,r={id:"user-manuals/workload/yurt-app-daemon",title:"YurtAppDaemon",description:"\u80cc\u666f\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.6.0/user-manuals/workload/yurt-app-daemon.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/yurt-app-daemon",permalink:"/zh/docs/v0.6.0/user-manuals/workload/yurt-app-daemon",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/yurt-app-daemon.md",tags:[],version:"v0.6.0",lastUpdatedBy:"LofiSu",lastUpdatedAt:172404878e4,frontMatter:{title:"YurtAppDaemon"},sidebar:"docs",previous:{title:"UnitedDeployment",permalink:"/zh/docs/v0.6.0/user-manuals/workload/uniteddeployment"},next:{title:"Prometheus\u6536\u96c6\u8fb9\u7f18\u8bbe\u5907\u6570\u636e",permalink:"/zh/docs/v0.6.0/user-manuals/monitoring/prometheus"}},p={},c=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u7528\u6237\u4f7f\u7528\uff1a",id:"\u7528\u6237\u4f7f\u7528",level:2},{value:"coredns\u5355\u5143\u5316\u90e8\u7f72\u6848\u4f8b",id:"coredns\u5355\u5143\u5316\u90e8\u7f72\u6848\u4f8b",level:2}];function i(e){const n={blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u80cc\u666f\u4ecb\u7ecd",children:"\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8fb9\u7f18\u573a\u666f\u4e2d\uff0c\u6765\u81ea\u540c\u4e00\u533a\u57df\u7684\u8fb9\u7f18\u8282\u70b9\u88ab\u5206\u914d\u5230\u540c\u4e00\u4e2a\u8282\u70b9\u6c60\u4e2d\uff0c\u6b64\u65f6\uff0c\u4e00\u822c\u9700\u8981\u5728\u8282\u70b9\u6c60\u7ef4\u5ea6\u90e8\u7f72\u4e00\u4e9b\u7cfb\u7edf\u7ec4\u4ef6\uff0c\u4f8b\u5982CoreDNS\u3002 \u521b\u5efa\u8282\u70b9\u6c60\u65f6\uff0c\u6211\u4eec\u5e0c\u671b\u81ea\u52a8\u521b\u5efa\u8fd9\u4e9b\u7cfb\u7edf\u7ec4\u4ef6\uff0c\u800c\u65e0\u9700\u4efb\u4f55\u624b\u52a8\u64cd\u4f5c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"YurtAppDaemon \u786e\u4fdd\u6240\u6709\u6216\u90e8\u5206\u8282\u70b9\u6c60\u4ee5 Deployment \u6216 StatefulSet \u4f5c\u4e3a\u6a21\u677f\u8fd0\u884c\u526f\u672c\u3002 \u968f\u7740\u8282\u70b9\u6c60\u7684\u521b\u5efa\uff0c\u8fd9\u4e9b\u5b50\u90e8\u7f72\u6216\u72b6\u6001\u96c6\u4e5f\u88ab\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\uff0c\u5b50\u90e8\u7f72\u6216\u72b6\u6001\u96c6\u7684\u521b\u5efa/\u66f4\u65b0\u7531 YurtAppDaemon \u63a7\u5236\u5668\u5b9e\u73b0\u3002 \u8fd9\u4e9b\u5b50 Deployments \u6216 Statefulsets \u5c06\u5728\u8282\u70b9\u6c60 \u4ece\u96c6\u7fa4\u4e2d\u79fb\u9664\u65f6\u88ab\u56de\u6536\uff0c\u5220\u9664 YurtAppDaemon CR \u5c06\u6e05\u7406\u5b83\u521b\u5efa\u7684 Deployments \u6216 StatefulSets\u3002 YurtAppDaemon \u7684\u884c\u4e3a\u7c7b\u4f3c\u4e8e K8S Daemonset\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e YurtAppDaemon \u4ece\u8282\u70b9\u6c60\u7ef4\u5ea6\u81ea\u52a8\u521b\u5efa K8S \u5de5\u4f5c\u8d1f\u8f7d\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/31456432/1641999454831-b8f2f9f4-c715-4063-8444-b0af22830092.png",alt:"img"})}),"\n",(0,t.jsx)(n.h2,{id:"\u7528\u6237\u4f7f\u7528",children:"\u7528\u6237\u4f7f\u7528\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u521b\u5efatest1\u8282\u70b9\u6c60"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cat <<EOF | kubectl apply -f -\n\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: test1\nspec:\n  selector:\n    matchLabels:\n      apps.openyurt.io/nodepool: test1\n  type: Edge\n\n\nEOF\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u521b\u5efatest2\u8282\u70b9\u6c60"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cat <<EOF | kubectl apply -f -\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: test2\nspec:\n  selector:\n    matchLabels:\n      apps.openyurt.io/nodepool: test2\n  type: Edge\n\nEOF\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5c06\u8282\u70b9\u52a0\u5165\u5230\u8282\u70b9\u6c60"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:" kubectl label node cn-beijing.172.23.142.31 apps.openyurt.io/desired-nodepool=test1\n kubectl label node cn-beijing.172.23.142.32 apps.openyurt.io/desired-nodepool=test1\n\n kubectl label node cn-beijing.172.23.142.34 apps.openyurt.io/desired-nodepool=test2\n kubectl label node cn-beijing.172.23.142.35 apps.openyurt.io/desired-nodepool=test2\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u521b\u5efaYurtAppDaemon"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'cat <<EOF | kubectl apply -f -\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppDaemon\nmetadata:\n  name: daemon-1\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      app: daemon-1\n\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: daemon-1\n      spec:\n        replicas: 1\n        selector:\n          matchLabels:\n            app: daemon-1\n        template:\n          metadata:\n            labels:\n              app: daemon-1\n          spec:\n            containers:\n            - image: nginx:1.18.0\n              imagePullPolicy: Always\n              name: nginx\n  nodepoolSelector:\n    matchLabels:\n      yurtappdaemon.openyurt.io/type: "nginx"\n\nEOF\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e3atest1\u8282\u70b9\u6c60\u6253\u6807\u7b7e"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl label np test1 yurtappdaemon.openyurt.io/type=nginx\n\n# Check the Deployment\nkubectl get deployments.apps\n\n# Check the Deployment nodeselector\n\n# Check the Pod\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e3atest2\u8282\u70b9\u6c60\u6253\u6807\u7b7e"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl label np test2 yurtappdaemon.openyurt.io/type=nginx\n\n# Check the Deployment\nkubectl get deployments.apps\n\n# Check the Deployment nodeselector\n\n# Check the Pod\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6539\u53d8YurtAppDaemon"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Change yurtappdaemon workloadTemplate replicas to 2\n\n# Change yurtappdaemon workloadTemplate image to nginx:1.19.0\n\n# Check the Pod\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u79fb\u9664\u8282\u70b9\u6c60\u6807\u7b7e"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Remove the nodepool test1 label\nkubectl label np test1 yurtappdaemon.openyurt.io/type-\n\n# Check the Deployment\n\n# Check the Pod\n\n# Remove the nodepool test2 label\nkubectl label np test2 yurtappdaemon.openyurt.io/type-\n\n# Check the Deployment\n\n# Check the Pod1\n"})}),"\n",(0,t.jsx)(n.h2,{id:"coredns\u5355\u5143\u5316\u90e8\u7f72\u6848\u4f8b",children:"coredns\u5355\u5143\u5316\u90e8\u7f72\u6848\u4f8b"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728openyurt\u91cc\u4f7f\u7528YurtAppDaemon+\u670d\u52a1\u62d3\u6251\u89e3\u51b3dns\u89e3\u6790\u95ee\u9898"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u521b\u5efa\u8282\u70b9\u6c60"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cat <<EOF | kubectl apply -f -\n\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  selector:\n    matchLabels:\n      apps.openyurt.io/nodepool: hangzhou\n  taints:\n    - effect: NoSchedule\n      key: node-role.openyurt.io/edge\n  type: Edge\n\n\nEOF\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u8282\u70b9\u6c60\u589e\u52a0\u6807\u7b7e"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl label np hangzhou yurtappdaemon.openyurt.io/type=coredns\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u90e8\u7f72coredns"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'cat <<EOF | kubectl apply -f -\n\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppDaemon\nmetadata:\n  name: coredns\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n       k8s-app: kube-dns\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          k8s-app: kube-dns\n      spec:\n        replicas: 2\n        selector:\n          matchLabels:\n            k8s-app: kube-dns\n        template:\n          metadata:\n            labels:\n              k8s-app: kube-dns\n          spec:\n            volumes:\n            - name: config-volume\n              configMap:\n               name: coredns\n               items:\n               - key: Corefile\n                 path: Corefile\n                 name: coredns\n            dnsPolicy: Default\n            serviceAccount: coredns\n            serviceAccountName: coredns\n            containers:\n            - args:\n              - -conf\n              - /etc/coredns/Corefile\n              image: k8s.gcr.io/coredns:1.6.7\n              imagePullPolicy: IfNotPresent\n              name: coredns\n              resources:\n                limits:\n                  memory: 170Mi\n                requests:\n                  cpu: 100m\n                  memory: 70Mi\n              securityContext:\n                allowPrivilegeEscalation: false\n                capabilities:\n                  add:\n                  - NET_BIND_SERVICE\n                  drop:\n                  - all\n                readOnlyRootFilesystem: true        \n              livenessProbe:\n                failureThreshold: 5\n                httpGet:\n                  path: /health\n                  port: 8080\n                  scheme: HTTP\n                initialDelaySeconds: 60\n                periodSeconds: 10\n                successThreshold: 1\n                timeoutSeconds: 5  \n              volumeMounts:\n              - mountPath: /etc/coredns\n                name: config-volume\n                readOnly: true\n  nodepoolSelector:\n    matchLabels:\n      yurtappdaemon.openyurt.io/type: "coredns"\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: kube-system\n  annotations:\n    prometheus.io/port: "9153"\n    prometheus.io/scrape: "true"\n    openyurt.io/topologyKeys: openyurt.io/nodepool\n  labels:\n    k8s-app: kube-dns\n    kubernetes.io/cluster-service: "true"\n    kubernetes.io/name: KubeDNS\n  name: kube-dns\nspec:\n  clusterIP: __kubernetes-coredns-ip__  ##\u4fee\u6539\u4e3akubernetes dns service ip\n  ports:\n  - name: dns\n    port: 53\n    protocol: UDP\n    targetPort: 53\n  - name: dns-tcp\n    port: 53\n    protocol: TCP\n    targetPort: 53\n  - name: metrics\n    port: 9153\n    protocol: TCP\n    targetPort: 9153\n  selector:\n    k8s-app: kube-dns\n  sessionAffinity: None\n  type: ClusterIP   \n---\napiVersion: v1\ndata:\n  Corefile: |\n    .:53 {\n        errors\n        health {\n           lameduck 5s\n        }\n        ready\n        kubernetes cluster.local in-addr.arpa ip6.arpa {\n           pods insecure\n           fallthrough in-addr.arpa ip6.arpa\n           ttl 30\n        }\n        prometheus :9153\n        forward . /etc/resolv.conf\n        cache 30\n        loop\n        reload\n        loadbalance\n    }\nkind: ConfigMap\nmetadata:\n  name: coredns\n  namespace: kube-system\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: coredns\n  namespace: kube-system\n  labels:\n      kubernetes.io/cluster-service: "true"\n      addonmanager.kubernetes.io/mode: Reconcile\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  labels:\n    kubernetes.io/bootstrapping: rbac-defaults\n    addonmanager.kubernetes.io/mode: Reconcile\n  name: system:coredns\nrules:\n- apiGroups:\n  - ""\n  resources:\n  - endpoints\n  - services\n  - pods\n  - namespaces\n  verbs:\n  - list\n  - watch\n- apiGroups:\n  - ""\n  resources:\n  - nodes\n  verbs:\n  - get\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  annotations:\n    rbac.authorization.kubernetes.io/autoupdate: "true"\n  labels:\n    kubernetes.io/bootstrapping: rbac-defaults\n    addonmanager.kubernetes.io/mode: EnsureExists\n  name: system:coredns\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: system:coredns\nsubjects:\n- kind: ServiceAccount\n  name: coredns\n  namespace: kube-system\n\n\nEOF\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>l});var t=a(67294);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);