"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[86724],{25764:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>i,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=o(85893),t=o(11151);const s={title:"YurtAppDaemon"},l=void 0,r={id:"user-manuals/workload/yurt-app-daemon",title:"YurtAppDaemon",description:"Background",source:"@site/versioned_docs/version-v1.4/user-manuals/workload/yurt-app-daemon.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/yurt-app-daemon",permalink:"/docs/user-manuals/workload/yurt-app-daemon",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/yurt-app-daemon.md",tags:[],version:"v1.4",lastUpdatedBy:"rambohe",lastUpdatedAt:1704125371,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{title:"YurtAppDaemon"},sidebar:"docs",previous:{title:"YurtAppSet",permalink:"/docs/user-manuals/workload/yurt-app-set"},next:{title:"YurtAppOverrider",permalink:"/docs/user-manuals/workload/yurt-app-overrider"}},p={},d=[{value:"Background",id:"background",level:2},{value:"Usage\uff1a",id:"usage",level:2},{value:"Example for deploying coredns",id:"example-for-deploying-coredns",level:2}];function c(e){const n={blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,a.jsx)(n.p,{children:"In edge scenarios, edge nodes from the same region will be assigned to the same NodePool, at which point some system components, such as CoreDNS, will typically need to be deployed in NodePool dimension. When creating the NodePool, we want to create these system components automatically, without any manual operations."}),"\n",(0,a.jsx)(n.p,{children:"YurtAppDaemon ensures that all or some of the NodePools run replicas with a Deployment or StatefulSet template. As NodePools are created, these sub-Deployments or sub-StatefulSets are added to the cluster and the creation/updating of them are controlled by the YurtAppDaemon controller."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/31456432/1641999454831-b8f2f9f4-c715-4063-8444-b0af22830092.png",alt:"img"})}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create test1 NodePool"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"cat <<EOF | kubectl apply -f -\n\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: test1\nspec:\n  selector:\n    matchLabels:\n      apps.openyurt.io/nodepool: test1\n  type: Edge\n\n\nEOF\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create test2 NodePool"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"cat <<EOF | kubectl apply -f -\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: test2\nspec:\n  selector:\n    matchLabels:\n      apps.openyurt.io/nodepool: test2\n  type: Edge\n\nEOF\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Add nodes to the corresponding NodePool"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:" kubectl label node cn-beijing.172.23.142.31 apps.openyurt.io/desired-nodepool=test1\n kubectl label node cn-beijing.172.23.142.32 apps.openyurt.io/desired-nodepool=test1\n\n kubectl label node cn-beijing.172.23.142.34 apps.openyurt.io/desired-nodepool=test2\n kubectl label node cn-beijing.172.23.142.35 apps.openyurt.io/desired-nodepool=test2\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create YurtAppDaemon"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'cat <<EOF | kubectl apply -f -\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppDaemon\nmetadata:\n  name: daemon-1\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      app: daemon-1\n\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: daemon-1\n      spec:\n        replicas: 1\n        selector:\n          matchLabels:\n            app: daemon-1\n        template:\n          metadata:\n            labels:\n              app: daemon-1\n          spec:\n            containers:\n            - image: nginx:1.18.0\n              imagePullPolicy: Always\n              name: nginx\n  nodepoolSelector:\n    matchLabels:\n      yurtappdaemon.openyurt.io/type: "nginx"\n\nEOF\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Label test1 NodePool"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl label np test1 yurtappdaemon.openyurt.io/type=nginx\n\n# Check the Deployment\nkubectl get deployments.apps\n\n# Check the Deployment nodeselector\n\n# Check the Pod\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Label test2 NodePool"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl label np test2 yurtappdaemon.openyurt.io/type=nginx\n\n# Check the Deployment\nkubectl get deployments.apps\n\n# Check the Deployment nodeselector\n\n# Check the Pod\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Update YurtAppDaemon"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# Change yurtappdaemon workloadTemplate replicas to 2\n\n# Change yurtappdaemon workloadTemplate image to nginx:1.19.0\n\n# Check the Pod\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Remove NodePool labels"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# Remove the nodepool test1 label\nkubectl label np test1 yurtappdaemon.openyurt.io/type-\n\n# Check the Deployment\n\n# Check the Pod\n\n# Remove the nodepool test2 label\nkubectl label np test2 yurtappdaemon.openyurt.io/type-\n\n# Check the Deployment\n\n# Check the Pod\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example-for-deploying-coredns",children:"Example for deploying coredns"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Using ",(0,a.jsx)(n.code,{children:"YurtAppDaemon"}),"+",(0,a.jsx)(n.code,{children:"service topology"})," to solve dns resolution problems"]}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create NodePool"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"cat <<EOF | kubectl apply -f -\n\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  selector:\n    matchLabels:\n      apps.openyurt.io/nodepool: hangzhou\n  taints:\n    - effect: NoSchedule\n      key: node-role.openyurt.io/edge\n  type: Edge\n\n\nEOF\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Add label to NodePool"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl label np hangzhou yurtappdaemon.openyurt.io/type=coredns\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Deploy coredns"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'cat <<EOF | kubectl apply -f -\n\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppDaemon\nmetadata:\n  name: coredns\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n       k8s-app: kube-dns\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          k8s-app: kube-dns\n      spec:\n        replicas: 2\n        selector:\n          matchLabels:\n            k8s-app: kube-dns\n        template:\n          metadata:\n            labels:\n              k8s-app: kube-dns\n          spec:\n            volumes:\n            - name: config-volume\n              configMap:\n               name: coredns\n               items:\n               - key: Corefile\n                 path: Corefile\n                 name: coredns\n            dnsPolicy: Default\n            serviceAccount: coredns\n            serviceAccountName: coredns\n            containers:\n            - args:\n              - -conf\n              - /etc/coredns/Corefile\n              image: k8s.gcr.io/coredns:1.6.7\n              imagePullPolicy: IfNotPresent\n              name: coredns\n              resources:\n                limits:\n                  memory: 170Mi\n                requests:\n                  cpu: 100m\n                  memory: 70Mi\n              securityContext:\n                allowPrivilegeEscalation: false\n                capabilities:\n                  add:\n                  - NET_BIND_SERVICE\n                  drop:\n                  - all\n                readOnlyRootFilesystem: true        \n              livenessProbe:\n                failureThreshold: 5\n                httpGet:\n                  path: /health\n                  port: 8080\n                  scheme: HTTP\n                initialDelaySeconds: 60\n                periodSeconds: 10\n                successThreshold: 1\n                timeoutSeconds: 5  \n              volumeMounts:\n              - mountPath: /etc/coredns\n                name: config-volume\n                readOnly: true\n  nodepoolSelector:\n    matchLabels:\n      yurtappdaemon.openyurt.io/type: "coredns"\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: kube-system\n  annotations:\n    prometheus.io/port: "9153"\n    prometheus.io/scrape: "true"\n    openyurt.io/topologyKeys: openyurt.io/nodepool\n  labels:\n    k8s-app: kube-dns\n    kubernetes.io/cluster-service: "true"\n    kubernetes.io/name: KubeDNS\n  name: kube-dns\nspec:\n  clusterIP: __kubernetes-coredns-ip__  ##\u4fee\u6539\u4e3akubernetes dns service ip\n  ports:\n  - name: dns\n    port: 53\n    protocol: UDP\n    targetPort: 53\n  - name: dns-tcp\n    port: 53\n    protocol: TCP\n    targetPort: 53\n  - name: metrics\n    port: 9153\n    protocol: TCP\n    targetPort: 9153\n  selector:\n    k8s-app: kube-dns\n  sessionAffinity: None\n  type: ClusterIP   \n---\napiVersion: v1\ndata:\n  Corefile: |\n    .:53 {\n        errors\n        health {\n           lameduck 5s\n        }\n        ready\n        kubernetes cluster.local in-addr.arpa ip6.arpa {\n           pods insecure\n           fallthrough in-addr.arpa ip6.arpa\n           ttl 30\n        }\n        prometheus :9153\n        forward . /etc/resolv.conf\n        cache 30\n        loop\n        reload\n        loadbalance\n    }\nkind: ConfigMap\nmetadata:\n  name: coredns\n  namespace: kube-system\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: coredns\n  namespace: kube-system\n  labels:\n      kubernetes.io/cluster-service: "true"\n      addonmanager.kubernetes.io/mode: Reconcile\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  labels:\n    kubernetes.io/bootstrapping: rbac-defaults\n    addonmanager.kubernetes.io/mode: Reconcile\n  name: system:coredns\nrules:\n- apiGroups:\n  - ""\n  resources:\n  - endpoints\n  - services\n  - pods\n  - namespaces\n  verbs:\n  - list\n  - watch\n- apiGroups:\n  - ""\n  resources:\n  - nodes\n  verbs:\n  - get\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  annotations:\n    rbac.authorization.kubernetes.io/autoupdate: "true"\n  labels:\n    kubernetes.io/bootstrapping: rbac-defaults\n    addonmanager.kubernetes.io/mode: EnsureExists\n  name: system:coredns\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: system:coredns\nsubjects:\n- kind: ServiceAccount\n  name: coredns\n  namespace: kube-system\n\n\nEOF\n'})})]})}function i(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>l});var a=o(67294);const t={},s=a.createContext(t);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);