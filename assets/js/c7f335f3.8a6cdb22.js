"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[56263],{30682:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var s=o(85893),r=o(11151);const t={title:"OpenYurt Precondition"},a=void 0,i={id:"installation/openyurt-prepare",title:"OpenYurt Precondition",description:"0.Background",source:"@site/versioned_docs/version-v0.7.0/installation/openyurt-prepare.md",sourceDirName:"installation",slug:"/installation/openyurt-prepare",permalink:"/docs/v0.7.0/installation/openyurt-prepare",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-prepare.md",tags:[],version:"v0.7.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:172133677e4,frontMatter:{title:"OpenYurt Precondition"}},l={},c=[{value:"0.Background",id:"0background",level:2},{value:"1. Kube-Controller-Manager Adjustment",id:"1-kube-controller-manager-adjustment",level:2},{value:"2. CoreDNS Adjustment",id:"2-coredns-adjustment",level:2},{value:"2.1 Configure CoreDNS ConfigMap",id:"21-configure-coredns-configmap",level:3},{value:"2.2 Configure CoreDNS Service",id:"22-configure-coredns-service",level:3},{value:"2.3 Use CoreDNS DaemonSet",id:"23-use-coredns-daemonset",level:3},{value:"2.4 Scale Down CoreDNS Deployment Replicas",id:"24-scale-down-coredns-deployment-replicas",level:3},{value:"3. KubeProxy Adjustment",id:"3-kubeproxy-adjustment",level:2},{value:"KubeProxy Service Topology",id:"kubeproxy-service-topology",level:3},{value:"Restart KubeProxy Pod",id:"restart-kubeproxy-pod",level:3},{value:"KubeProxy Functional Verification",id:"kubeproxy-functional-verification",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"0background",children:"0.Background"}),"\n",(0,s.jsx)(n.p,{children:"OpenYurt need to change kubernetes component configurations to adapt to edge environment. The components include: Kube-Controller-Manager, CoreDNS,KubeProxy etc."}),"\n",(0,s.jsx)(n.h2,{id:"1-kube-controller-manager-adjustment",children:"1. Kube-Controller-Manager Adjustment"}),"\n",(0,s.jsxs)(n.p,{children:["In order to make the yurt-controller-mamanger work properly, we need to turn off the default nodelifecycle controller in Kube-Controller-Manager.\nThe nodelifecycle controller can be disabled by restarting the kube-controller-manager with a proper ",(0,s.jsx)(n.code,{children:"--controllers"}),"option.\nAssume that the original option looks like ",(0,s.jsx)(n.code,{children:"--controllers=*,bootstrapsigner,tokencleaner"}),", to disable\nthe nodelifecycle controller, we change the option to ",(0,s.jsx)(n.code,{children:"--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the kube-controller-manager is deployed as a static pod on the master node, and you have the permission to log in to the master node,\nthen above operations can be done by revising the file ",(0,s.jsx)(n.code,{children:"/etc/kubernetes/manifests/kube-controller-manager.yaml"}),". After revision, the kube-controller-manager will be\nrestarted automatically."]}),"\n",(0,s.jsx)(n.h2,{id:"2-coredns-adjustment",children:"2. CoreDNS Adjustment"}),"\n",(0,s.jsxs)(n.p,{children:["In general, CoreDNS uses deployment as workload. But in cloud-edge scenario, domain name resolution could not cross ",(0,s.jsx)(n.code,{children:"NodePool"}),", so CoreDNS need to use ",(0,s.jsx)(n.code,{children:"Daemonset"})," or ",(0,s.jsx)(n.code,{children:"YurtAppDaemon"})," to deploy. Its main function is to resolve hostname to tunnelserver address."]}),"\n",(0,s.jsx)(n.h3,{id:"21-configure-coredns-configmap",children:"2.1 Configure CoreDNS ConfigMap"}),"\n",(0,s.jsxs)(n.p,{children:["Add hosts for ",(0,s.jsx)(n.code,{children:"coredns"})," ",(0,s.jsx)(n.code,{children:"ConfigMap"})," in ",(0,s.jsx)(n.code,{children:"kube-system"})," ",(0,s.jsx)(n.code,{children:"namespace"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"        hosts /etc/edge/tunnel-nodes {\n            reload 300ms\n            fallthrough\n        }\n"})}),"\n",(0,s.jsx)(n.p,{children:"The results of modifications:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\ndata:\n  Corefile: |\n    .:53 {\n        errors\n        log . {\n          class denial success\n\n        }\n        health {\n           lameduck 5s\n        }\n        ready\n        hosts /etc/edge/tunnel-nodes { # add hosts plugin\n            reload 300ms\n            fallthrough\n        }\n        kubernetes cluster.local in-addr.arpa ip6.arpa {\n           pods insecure\n           fallthrough in-addr.arpa ip6.arpa\n           ttl 30\n        }\n        prometheus :9153\n        forward . /etc/resolv.conf {\n           max_concurrent 1000\n        }\n        cache 30\n        loop\n        reload\n        loadbalance\n    }\nkind: ConfigMap\nmetadata:\n  name: coredns\n  namespace: kube-system\n"})}),"\n",(0,s.jsx)(n.h3,{id:"22-configure-coredns-service",children:"2.2 Configure CoreDNS Service"}),"\n",(0,s.jsx)(n.p,{children:"Add annotation to coredns service, which could use openyurt\u2019s ability to choose local endpoint."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl annotate svc kube-dns -n kube-system openyurt.io/topologyKeys='openyurt.io/nodepool'\n"})}),"\n",(0,s.jsx)(n.p,{children:"The results of modifications:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    openyurt.io/topologyKeys: openyurt.io/nodepool\n    prometheus.io/port: "9153"\n    prometheus.io/scrape: "true"\n  creationTimestamp: "2022-02-14T10:13:37Z"\n  labels:\n    k8s-app: kube-dns\n    kubernetes.io/cluster-service: "true"\n    kubernetes.io/name: KubeDNS\n  name: kube-dns\n  namespace: kube-system\n  resourceVersion: "65474309"\n  selfLink: /api/v1/namespaces/kube-system/services/kube-dns\n  uid: ee23195f-44c3-4c70-99e2-aff4d5cf0ae1\nspec:\n  clusterIP: xx.xx.xx.xx\n  ports:\n  - name: dns\n    port: 53\n    protocol: UDP\n    targetPort: 53\n  - name: dns-tcp\n    port: 53\n    protocol: TCP\n    targetPort: 53\n  - name: metrics\n    port: 9153\n    protocol: TCP\n    targetPort: 9153\n  selector:\n    k8s-app: kube-dns\n  sessionAffinity: None\n  type: ClusterIP\n'})}),"\n",(0,s.jsx)(n.h3,{id:"23-use-coredns-daemonset",children:"2.3 Use CoreDNS DaemonSet"}),"\n",(0,s.jsxs)(n.p,{children:["The original CoreDNS is deployed by ",(0,s.jsx)(n.code,{children:"DaemonSet"}),", please follow below steps to modify."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"change the coredns to your version;"}),"\n",(0,s.jsxs)(n.li,{children:["mount ConfigMap ",(0,s.jsx)(n.code,{children:"yurt-tunnel-nodes"})," to pod\uff1b"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  labels:\n    k8s-app: kube-dns\n  name: coredns\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n      k8s-app: kube-dns\n  template:\n    metadata:\n      labels:\n        k8s-app: kube-dns\n    spec:\n      containers:\n      - args:\n        - -conf\n        - /etc/coredns/Corefile\n        image: registry.aliyuncs.com/google_containers/coredns:1.7.0\n        livenessProbe:\n          failureThreshold: 5\n          httpGet:\n            path: /health\n            port: 8080\n            scheme: HTTP\n          initialDelaySeconds: 60\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 5\n        name: coredns\n        ports:\n        - containerPort: 53\n          name: dns\n          protocol: UDP\n        - containerPort: 53\n          name: dns-tcp\n          protocol: TCP\n        - containerPort: 9153\n          name: metrics\n          protocol: TCP\n        readinessProbe:\n          failureThreshold: 3\n          httpGet:\n            path: /ready\n            port: 8181\n            scheme: HTTP\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 1\n        resources:\n          limits:\n            memory: 170Mi\n          requests:\n            cpu: 100m\n            memory: 70Mi\n        securityContext:\n          allowPrivilegeEscalation: false\n          capabilities:\n            add:\n            - NET_BIND_SERVICE\n            drop:\n            - all\n          readOnlyRootFilesystem: true\n        volumeMounts:\n        - mountPath: /etc/coredns\n          name: config-volume\n          readOnly: true\n        - mountPath: /etc/edge\n          name: hosts\n          readOnly: true\n      dnsPolicy: Default\n      nodeSelector:\n        kubernetes.io/os: linux\n      priorityClassName: system-cluster-critical\n      serviceAccount: coredns\n      serviceAccountName: coredns\n      tolerations:\n      - operator: Exists\n      - key: CriticalAddonsOnly\n        operator: Exists\n      - effect: NoSchedule\n        key: node-role.kubernetes.io/master\n      volumes:\n      - configMap:\n          defaultMode: 420\n          items:\n          - key: Corefile\n            path: Corefile\n          name: coredns\n        name: config-volume\n      - configMap:\n          defaultMode: 420\n          name: yurt-tunnel-nodes\n        name: hosts\n"})}),"\n",(0,s.jsx)(n.h3,{id:"24-scale-down-coredns-deployment-replicas",children:"2.4 Scale Down CoreDNS Deployment Replicas"}),"\n",(0,s.jsx)(n.p,{children:"Only support when CoreDNS is deployed by deployment workload."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl scale --replicas=0 deployment/coredns -n kube-system\n"})}),"\n",(0,s.jsx)(n.h2,{id:"3-kubeproxy-adjustment",children:"3. KubeProxy Adjustment"}),"\n",(0,s.jsxs)(n.p,{children:["The k8s cluster created by kubeadm will generate a kubeconfig for kubeproxy. If we do not modify default configuration like ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service-topology/",children:(0,s.jsx)(n.code,{children:"Service Topology"})})," and ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/topology-aware-hints/",children:(0,s.jsx)(n.code,{children:"Topology Aware Hints"})}),", KubeProxy will use the kubeconfig to get all endpoints."]}),"\n",(0,s.jsx)(n.p,{children:"In cloud-edge scenario, edge node could not communicate with each other, so endpoints need implement nodepool topology."}),"\n",(0,s.jsx)(n.h3,{id:"kubeproxy-service-topology",children:"KubeProxy Service Topology"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl edit cm -n kube-system kube-proxy\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Comment ",(0,s.jsx)(n.code,{children:"config.conf"})," file's property ",(0,s.jsx)(n.code,{children:"clientConnection.kubeconfig"}),"\uff0cso kube-proxy will use ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/run-application/access-api-from-pod/#directly-accessing-the-rest-api",children:"InClusterConfig"})," to access kube-apiserver. the modification result\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\ndata:\n  config.conf: |-\n    apiVersion: kubeproxy.config.k8s.io/v1alpha1\n    bindAddress: 0.0.0.0\n    bindAddressHardFail: false\n    clientConnection:\n      acceptContentTypes: ""\n      burst: 0\n      contentType: ""\n      #kubeconfig: /var/lib/kube-proxy/kubeconfig.conf\n      qps: 0\n    clusterCIDR: 100.64.0.0/10\n    configSyncPeriod: 0s\n// ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"restart-kubeproxy-pod",children:"Restart KubeProxy Pod"}),"\n",(0,s.jsxs)(n.p,{children:["To put the new configuration into effect, we should restart ",(0,s.jsx)(n.code,{children:"kubeproxy"}),", be cautiously used in a production environment."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl delete pod -n kube-system -l k8s-app=kube-proxy\n"})}),"\n",(0,s.jsx)(n.h3,{id:"kubeproxy-functional-verification",children:"KubeProxy Functional Verification"}),"\n",(0,s.jsxs)(n.p,{children:["We could verify modify result by view ",(0,s.jsx)(n.code,{children:"KubeProxy"})," log. ",(0,s.jsx)(n.strong,{children:"We don't recommend you to change the flags as the logs maybe outbreak."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl edit ds -n kube-system kube-proxy\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Append parameter ",(0,s.jsx)(n.code,{children:"--v=6"})," to container's command, and the change result is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  annotations:\n    deprecated.daemonset.template.generation: "3"\n  creationTimestamp: "2022-05-10T06:27:27Z"\n  generation: 3\n  labels:\n    k8s-app: kube-proxy\n  name: kube-proxy\n  namespace: kube-system\n  resourceVersion: "5377081"\n  uid: 0f8eccdd-d26f-48f0-8401-8d762a630dc8\nspec:\n  revisionHistoryLimit: 10\n  selector:\n    matchLabels:\n      k8s-app: kube-proxy\n  template:\n    metadata:\n      creationTimestamp: null\n      labels:\n        k8s-app: kube-proxy\n    spec:\n      containers:\n      - command:\n        - /usr/local/bin/kube-proxy\n        - --config=/var/lib/kube-proxy/config.conf\n        - --hostname-override=$(NODE_NAME)\n        - --v=6\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Check ",(0,s.jsx)(n.code,{children:"KubeProxy"}),"'s stdout, if ",(0,s.jsx)(n.code,{children:"ApiServer"}),"'s address is ",(0,s.jsx)(n.code,{children:"169.254.2.1:10268"})," which means modify success. The sample logs like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"I0521 02:57:01.986790       1 round_trippers.go:454] GET https://169.254.2.1:10268/api/v1/nodes/jd-sh-qianyi-test-02 200 OK in 12 milliseconds\nI0521 02:57:02.021682       1 round_trippers.go:454] POST https://169.254.2.1:10268/api/v1/namespaces/default/events 201 Created in 4 milliseconds                                                       \n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{a:()=>a});var s=o(67294);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);