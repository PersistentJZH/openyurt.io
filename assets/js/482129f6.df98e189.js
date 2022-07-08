"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[9693],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7547:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={title:"Prometheus"},s=void 0,u={unversionedId:"user-manuals/monitoring/prometheus",id:"user-manuals/monitoring/prometheus",isDocsHomePage:!1,title:"Prometheus",description:"system-architecture",source:"@site/docs/user-manuals/monitoring/prometheus.md",sourceDirName:"user-manuals/monitoring",slug:"/user-manuals/monitoring/prometheus",permalink:"/docs/next/user-manuals/monitoring/prometheus",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/monitoring/prometheus.md",tags:[],version:"current",lastUpdatedBy:"wawlian",lastUpdatedAt:1657250779,formattedLastUpdatedAt:"7/8/2022",frontMatter:{title:"Prometheus"},sidebar:"docs",previous:{title:"YurtAppDaemon",permalink:"/docs/next/user-manuals/workload/yurt-app-daemon"},next:{title:"EdgeX Foundry",permalink:"/docs/next/user-manuals/iot/edgex-foundry"}},p=[{value:"Environment",id:"environment",children:[],level:2},{value:"1.Modify CoreDNS config",id:"1modify-coredns-config",children:[{value:"1.mount <code>yurt-tunnel-nodes</code> to CoreDNS",id:"1mount-yurt-tunnel-nodes-to-coredns",children:[],level:3},{value:"2.Modify CoreDNS config",id:"2modify-coredns-config",children:[],level:3},{value:"3.Restart CoreDNS",id:"3restart-coredns",children:[],level:3}],level:2},{value:"2.Config Prometheus",id:"2config-prometheus",children:[{value:"\u6536\u96c6kubelet\u7684metrics",id:"\u6536\u96c6kubelet\u7684metrics",children:[],level:3},{value:"scape other metrics\uff08take node-exporter as an example\uff09",id:"scape-other-metricstake-node-exporter-as-an-example",children:[{value:"modify <code>yurt-tunnel-server-cfg</code>ConfigMap",id:"modify-yurt-tunnel-server-cfgconfigmap",children:[],level:4}],level:3}],level:2},{value:"Reference",id:"reference",children:[],level:2}],c={toc:p};function d(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"system-architecture",src:n(7154).Z})),(0,a.kt)("p",null,"This document demonstrates how to scrape metrics from edge node through Yurt-Tunnel's DNS mode within an OpenYurt cluster."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"OpenYurt v0.5.0+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"CoreDNS v1.6.8+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"prometheus-operator"))),(0,a.kt)("p",null,"If you don't have an OpenYurt on hand, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/yurtctl.md"},"yurtctl")," to create one or convert from an exist Kubernetes cluster. Installation of prometheus-operator\nyou can refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/kube-prometheus#quickstart"},"kube-prometheus"),"\u3002"),(0,a.kt)("h2",{id:"1modify-coredns-config"},"1.Modify CoreDNS config"),(0,a.kt)("p",null,"OpenYurt will create ",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-nodes")," ConfigMap\uff0cwhich keeps track of nodename dns records of nodes."),(0,a.kt)("h3",{id:"1mount-yurt-tunnel-nodes-to-coredns"},"1.mount ",(0,a.kt)("inlineCode",{parentName:"h3"},"yurt-tunnel-nodes")," to CoreDNS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch deployment coredns -n kube-system  -p \'{"spec": {"template": {"spec": {"volumes": [{"configMap":{"name":"yurt-tunnel-nodes"},"name": "edge"}]}}}}\'\nkubectl patch deployment coredns -n kube-system   -p \'{"spec": { "template": { "spec": { "containers": [{"name":"coredns","volumeMounts": [{"mountPath": "/etc/edge", "name": "edge", "readOnly": true }]}]}}}}\'\n')),(0,a.kt)("h3",{id:"2modify-coredns-config"},"2.Modify CoreDNS config"),(0,a.kt)("p",null,"use ",(0,a.kt)("a",{parentName:"p",href:"https://coredns.io/plugins/hosts/"},"hosts")," plugin to load dns records in ",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-nodes")," configmap."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl edit configmap coredns -n kube-system\n...........\n Corefile: |\n    .:53 {\n        errors\n        health {\n           lameduck 5s\n        }\n        ready\n        hosts /etc/edge/tunnel-nodes {    # add hosts plugin\n            reload 300ms\n            fallthrough\n        }\n        kubernetes cluster.local in-addr.arpa ip6.arpa {\n           pods insecure\n           fallthrough in-addr.arpa ip6.arpa\n           ttl 30\n        }\n        prometheus :9153\n        forward . /etc/resolv.conf {\n           max_concurrent 1000\n        }\n        cache 30\n        loop\n        reload\n        loadbalance\n    }\n")),(0,a.kt)("h3",{id:"3restart-coredns"},"3.Restart CoreDNS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' kubectl patch deployment coredns -n kube-system -p \'{"spec":{"template":{"spec":{"containers":[{"name":"coredns","env":[{"name":"RESTART","value":"\'$(date +%s)\'"}]}]}}}}\'\n')),(0,a.kt)("h2",{id:"2config-prometheus"},"2.Config Prometheus"),(0,a.kt)("p",null,"By default, prometheus scrape node metrics with node ip. With relabel functionality provided by prometheus, we can change node ip to node hostname. You can config scrape behavior by modify ServiceMonitor CR."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"More about relabel config, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config"},"prometheus_relabel_config"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"sourceLabels")," needed differs among components\uff0cplease refer to",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config"},"kubernetes_sd_config"),"."))),(0,a.kt)("h3",{id:"\u6536\u96c6kubelet\u7684metrics"},"\u6536\u96c6kubelet\u7684metrics"),(0,a.kt)("p",null,"Add relabel rule in kubelet ServiceMonitor\uff0cUse ",(0,a.kt)("inlineCode",{parentName:"p"},"__meta_kubernetes_endpoint_address_target_name")," to replace node ip\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl edit serviceMonitor kubelet -n monitoring\nspec:\n  endpoint:\n    ..........\n    relabelings:\n    - action: replace  # add relabel rule\n      regex: (.*);.*:(.*)\n      replacement: $1:$2\n      sourceLabels:\n      - __meta_kubernetes_endpoint_address_target_name\n      - __address__\n      targetLabel: __address__\n    ..........\n")),(0,a.kt)("h3",{id:"scape-other-metricstake-node-exporter-as-an-example"},"scape other metrics\uff08take node-exporter as an example\uff09"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Yurt-tunnel")," will only do forward for port 10250 and 10255, if you want to add forward for other ports, you can modify ",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server-cfg")," ConfigMap.\nFor ",(0,a.kt)("inlineCode",{parentName:"p"},"node-exporter"),"\uff0c you may need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"9100")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"https-proxy-ports"),"\u3002If you want to add http forward, just modify ",(0,a.kt)("inlineCode",{parentName:"p"},"http-proxy-ports"),"."),(0,a.kt)("h4",{id:"modify-yurt-tunnel-server-cfgconfigmap"},"modify ",(0,a.kt)("inlineCode",{parentName:"h4"},"yurt-tunnel-server-cfg"),"ConfigMap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch configmap yurt-tunnel-server-cfg  -n kube-system  -p \'{"data": {"https-proxy-ports":"9100"}}\'\n')),(0,a.kt)("p",null,"Add relabel rule in node-exporter ServiceMonitor\uff0cuse ",(0,a.kt)("inlineCode",{parentName:"p"},"__meta_kubernetes_pod_node_name"),"to replace node ip\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl edit servicemonitor  prom-kube-prometheus-stack-node-exporter\nspec:\n endpoint:\n   ......\n   relabelings:\n    - action: replace #add relabel rule\n      regex: (.*);.*:(.*)\n      replacement: $1:$2\n      sourceLabels:\n      - __meta_kubernetes_pod_node_name\n      - __address__\n      targetLabel: __address__\n    ........\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7006898548415414279"},"Openyurt Yurt-Tunnel DNS Mode")))}d.isMDXComponent=!0},7154:function(e,t,n){t.Z=n.p+"assets/images/prometheus-d56272636d930c228c37cd594bf077c5.png"}}]);