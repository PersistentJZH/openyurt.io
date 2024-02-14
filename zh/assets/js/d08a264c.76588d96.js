"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[93079],{26920:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var s=r(85893),t=r(11151);const o={title:"Prometheus\u6536\u96c6\u8fb9\u7f18\u8bbe\u5907\u6570\u636e"},c=void 0,l={id:"user-manuals/monitoring/prometheus",title:"Prometheus\u6536\u96c6\u8fb9\u7f18\u8bbe\u5907\u6570\u636e",description:"system-architecture",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.6.0/user-manuals/monitoring/prometheus.md",sourceDirName:"user-manuals/monitoring",slug:"/user-manuals/monitoring/prometheus",permalink:"/zh/docs/v0.6.0/user-manuals/monitoring/prometheus",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/monitoring/prometheus.md",tags:[],version:"v0.6.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1707950047,formattedLastUpdatedAt:"2024\u5e742\u670814\u65e5",frontMatter:{title:"Prometheus\u6536\u96c6\u8fb9\u7f18\u8bbe\u5907\u6570\u636e"},sidebar:"docs",previous:{title:"YurtAppDaemon",permalink:"/zh/docs/v0.6.0/user-manuals/workload/yurt-app-daemon"},next:{title:"\u4e91\u539f\u751f\u7ba1\u7406\u7aef\u8bbe\u5907",permalink:"/zh/docs/v0.6.0/user-manuals/iot/edgex-foundry"}},d={},i=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"1.\u4fee\u6539coreDNS\u914d\u7f6e",id:"1\u4fee\u6539coredns\u914d\u7f6e",level:2},{value:"1.\u5c06 <code>yurt-tunnel-nodes</code>\u6302\u8f7d\u81f3coreDNS\u4e2d",id:"1\u5c06-yurt-tunnel-nodes\u6302\u8f7d\u81f3coredns\u4e2d",level:3},{value:"2.\u4fee\u6539coreDNS\u7684\u914d\u7f6e\u6587\u4ef6",id:"2\u4fee\u6539coredns\u7684\u914d\u7f6e\u6587\u4ef6",level:3},{value:"3.\u91cd\u542fcoreDNS",id:"3\u91cd\u542fcoredns",level:3},{value:"2.Prometheus \u914d\u7f6e",id:"2prometheus-\u914d\u7f6e",level:2},{value:"\u6536\u96c6kubelet\u7684metrics",id:"\u6536\u96c6kubelet\u7684metrics",level:3},{value:"\u6536\u96c6\u5176\u4ed6metrics\uff08\u4ee5node-exporter\u4e3a\u4f8b\uff09",id:"\u6536\u96c6\u5176\u4ed6metrics\u4ee5node-exporter\u4e3a\u4f8b",level:3},{value:"\u4fee\u6539<code>yurt-tunnel-server-cfg</code>ConfigMap",id:"\u4fee\u6539yurt-tunnel-server-cfgconfigmap",level:4},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"system-architecture",src:r(6690).Z+"",width:"1836",height:"1456"})}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u6863\u4e3b\u8981\u8bb2\u8ff0\u5982\u4f55\u5728\u5df2\u6709\u7684OpenYurt\u96c6\u7fa4\u4e0a\u901a\u8fc7Yurt-Tunnel\u7ec4\u4ef6\u7684DNS\u6a21\u5f0f\u6765\u5b9e\u73b0Promethues\u5bf9\u8fb9\u7f18\u7aef\u8bbe\u5907\u7684metrics\u8fdb\u884c\u91c7\u96c6\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u73af\u5883\u8981\u6c42",children:"\u73af\u5883\u8981\u6c42"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"OpenYurt v0.5.0+"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"CoreDNS v1.6.8+"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"prometheus-operator"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u8fd8\u6ca1\u6709OpenYurt\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/yurtctl.md",children:"yurtctl\u5de5\u5177"})," \u6765\u521d\u59cb\u5316\u4e00\u4e2aOpenYurt\u96c6\u7fa4\u6216\u5c06\u4e00\u4e2aKubernetes\u96c6\u7fa4\u8f6c\u6362\u4e3aOpenYurt\u96c6\u7fa4\uff0cprometheus-operator\u7684\u5b89\u88c5\u53ef\u4ee5\u53c2\u8003",(0,s.jsx)(n.a,{href:"https://github.com/prometheus-operator/kube-prometheus#quickstart",children:"kube-prometheus"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"1\u4fee\u6539coredns\u914d\u7f6e",children:"1.\u4fee\u6539coreDNS\u914d\u7f6e"}),"\n",(0,s.jsxs)(n.p,{children:["OpenYurt\u4f1a\u521b\u5efa",(0,s.jsx)(n.code,{children:"yurt-tunnel-nodes"}),"ConfigMap\uff0c\u5176\u4e2d\u4fdd\u5b58\u7740\u5404\u8282\u70b9\u7684\u5bf9\u5e94\u7684DNS\u8bb0\u5f55\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"1\u5c06-yurt-tunnel-nodes\u6302\u8f7d\u81f3coredns\u4e2d",children:["1.\u5c06 ",(0,s.jsx)(n.code,{children:"yurt-tunnel-nodes"}),"\u6302\u8f7d\u81f3coreDNS\u4e2d"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'kubectl patch deployment coredns -n kube-system  -p \'{"spec": {"template": {"spec": {"volumes": [{"configMap":{"name":"yurt-tunnel-nodes"},"name": "edge"}]}}}}\'\nkubectl patch deployment coredns -n kube-system   -p \'{"spec": { "template": { "spec": { "containers": [{"name":"coredns","volumeMounts": [{"mountPath": "/etc/edge", "name": "edge", "readOnly": true }]}]}}}}\'\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2\u4fee\u6539coredns\u7684\u914d\u7f6e\u6587\u4ef6",children:"2.\u4fee\u6539coreDNS\u7684\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://coredns.io/plugins/hosts/",children:"hosts"})," \u63d2\u4ef6\u5c06 ",(0,s.jsx)(n.code,{children:"yurt-tunnel-nodes"}),"\u4e2d\u7684 dns \u8bb0\u5f55\u52a0\u8f7d\u5230coreDNS\u4e2d."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl edit configmap coredns -n kube-system\n...........\n Corefile: |\n    .:53 {\n        errors\n        health {\n           lameduck 5s\n        }\n        ready\n        hosts /etc/edge/tunnel-nodes {    # add hosts plugin\n            reload 300ms\n            fallthrough\n        }\n        kubernetes cluster.local in-addr.arpa ip6.arpa {\n           pods insecure\n           fallthrough in-addr.arpa ip6.arpa\n           ttl 30\n        }\n        prometheus :9153\n        forward . /etc/resolv.conf {\n           max_concurrent 1000\n        }\n        cache 30\n        loop\n        reload\n        loadbalance\n    }\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3\u91cd\u542fcoredns",children:"3.\u91cd\u542fcoreDNS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:' kubectl patch deployment coredns -n kube-system -p \'{"spec":{"template":{"spec":{"containers":[{"name":"coredns","env":[{"name":"RESTART","value":"\'$(date +%s)\'"}]}]}}}}\'\n'})}),"\n",(0,s.jsx)(n.h2,{id:"2prometheus-\u914d\u7f6e",children:"2.Prometheus \u914d\u7f6e"}),"\n",(0,s.jsxs)(n.p,{children:["prometheus\u9ed8\u8ba4\u4f7f\u7528IP\u6765\u8bbf\u95ee\u8282\u70b9\u7684metric\u5730\u5740\uff0c\u6211\u4eec\u9700\u8981\u901a\u8fc7prometheus\u63d0\u4f9b\u7684relabel\u529f\u80fd\u5c06IP\u6539\u5199\u4e3a\u8282\u70b9hostname\u3002",(0,s.jsx)(n.code,{children:"promethues-operator"}),"\u4f7f\u7528ServiceMonitor CRD\u6765\u5b9a\u4e49\u6293\u53d6\u914d\u7f6e\uff0c\u56e0\u6b64\u9700\u8981\u4fee\u6539ServiceMonitor\u6765\u589e\u52a0relabel\u529f\u80fd\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u5173\u4e8erelabel\u7684\u914d\u7f6e\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config",children:"prometheus_relabel_config"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4e0d\u540c\u7684\u7ec4\u4ef6relabel\u6240\u9700\u8981\u7684",(0,s.jsx)(n.code,{children:"sourceLabels"}),"\u53ef\u80fd\u4e0d\u540c\uff0c\u53ef\u4ee5\u53c2\u8003",(0,s.jsx)(n.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config",children:"kubernetes_sd_config"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6536\u96c6kubelet\u7684metrics",children:"\u6536\u96c6kubelet\u7684metrics"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728kubelet\u7684ServiceMonitor\u4e2d\u589e\u52a0relabel\u89c4\u5219\uff0c\u7528",(0,s.jsx)(n.code,{children:"__meta_kubernetes_endpoint_address_target_name"}),"\u66ff\u6362\u6389\u8282\u70b9IP\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"$ kubectl edit serviceMonitor kubelet -n monitoring\nspec:\n  endpoint:\n    ..........\n    relabelings:\n    - action: replace  # add relabel rule\n      regex: (.*);.*:(.*)\n      replacement: $1:$2\n      sourceLabels:\n      - __meta_kubernetes_endpoint_address_target_name\n      - __address__\n      targetLabel: __address__\n    ..........\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6536\u96c6\u5176\u4ed6metrics\u4ee5node-exporter\u4e3a\u4f8b",children:"\u6536\u96c6\u5176\u4ed6metrics\uff08\u4ee5node-exporter\u4e3a\u4f8b\uff09"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Yurt-tunnel"})," \u9ed8\u8ba4\u53ea\u8f6c\u53d110250\u548c10255\u4e24\u4e2a\u7aef\u53e3,\u5982\u679c\u9700\u8981\u5176\u4ed6\u7aef\u53e3\u7684\u6620\u5c04\uff0c\u53ef\u4ee5\u4fee\u6539",(0,s.jsx)(n.code,{children:"yurt-tunnel-server-cfg"}),"ConfigMap\u6765\u6dfb\u52a0\u3002\u4ee5",(0,s.jsx)(n.code,{children:"node-exporter"})," \u4e3a\u4f8b\uff0c \u9700\u8981\u5c06",(0,s.jsx)(n.code,{children:"9100"}),"\u6dfb\u52a0\u5230",(0,s.jsx)(n.code,{children:"https-proxy-ports"}),"\u4e2d\u3002\u7c7b\u4f3c\u7684\uff0c\u5982\u679c\u662f\u6dfb\u52a0http\u7aef\u53e3\uff0c\u5219\u53ef\u4ee5\u4fee\u6539",(0,s.jsx)(n.code,{children:"http-proxy-ports"}),"\u914d\u7f6e\u3002"]}),"\n",(0,s.jsxs)(n.h4,{id:"\u4fee\u6539yurt-tunnel-server-cfgconfigmap",children:["\u4fee\u6539",(0,s.jsx)(n.code,{children:"yurt-tunnel-server-cfg"}),"ConfigMap"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'kubectl patch configmap yurt-tunnel-server-cfg  -n kube-system  -p \'{"data": {"https-proxy-ports":"9100"}}\'\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728node-exporter\u7684ServiceMonitor\u4e2d\u6dfb\u52a0relabel\u89c4\u5219\uff0c\u7528",(0,s.jsx)(n.code,{children:"__meta_kubernetes_pod_node_name"}),"\u66ff\u6362\u6389\u8282\u70b9IP\u3002\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"$ kubectl edit servicemonitor  prom-kube-prometheus-stack-node-exporter\nspec:\n endpoint:\n   ......\n   relabelings:\n    - action: replace #add relabel rule\n      regex: (.*);.*:(.*)\n      replacement: $1:$2\n      sourceLabels:\n      - __meta_kubernetes_pod_node_name\n      - __address__\n      targetLabel: __address__\n    ........\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://juejin.cn/post/7006898548415414279",children:"Openyurt Yurt-Tunnel DNS\u6a21\u5f0f\u5b9e\u8df5"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},6690:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/prometheus-f6befccbf53db1ce02a17d95f3af8fe4.png"},11151:(e,n,r)=>{r.d(n,{a:()=>c});var s=r(67294);const t={},o=s.createContext(t);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);