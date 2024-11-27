"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[62075],{75361:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"core-concepts/yurthub","title":"YurtHub","description":"1. Features","source":"@site/versioned_docs/version-v1.4/core-concepts/yurthub.md","sourceDirName":"core-concepts","slug":"/core-concepts/yurthub","permalink":"/docs/core-concepts/yurthub","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurthub.md","tags":[],"version":"v1.4","lastUpdatedBy":"tnsimon","lastUpdatedAt":1732695729000,"frontMatter":{"title":"YurtHub"},"sidebar":"docs","previous":{"title":"Yurt-Manager","permalink":"/docs/core-concepts/yurt-manager"},"next":{"title":"Raven","permalink":"/docs/core-concepts/raven"}}');var t=r(74848),i=r(28453);const c={title:"YurtHub"},o=void 0,d={},l=[{value:"1. Features",id:"1-features",level:2},{value:"1\uff09Edge Autonomy",id:"1edge-autonomy",level:3},{value:"2\uff09Traffic Closure",id:"2traffic-closure",level:3},{value:"3\uff09Seamlessly Migrate Pods to Edge",id:"3seamlessly-migrate-pods-to-edge",level:3},{value:"4\uff09Support of Multiple Cloud APIServers",id:"4support-of-multiple-cloud-apiservers",level:3},{value:"5\uff09Management of Node Certificate",id:"5management-of-node-certificate",level:3},{value:"2. Architecture",id:"2-architecture",level:2},{value:"1\uff09Edge Mode",id:"1edge-mode",level:3},{value:"2\uff09Cloud Mode",id:"2cloud-mode",level:3},{value:"3. Reference",id:"3-reference",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"1-features",children:"1. Features"}),"\n",(0,t.jsxs)(n.p,{children:["As an important component of OpenYurt, ",(0,t.jsx)(n.code,{children:"YurtHub"})," provides additional capabilities for the edge-side components in the scenario of cloud-edge computing."]}),"\n",(0,t.jsx)(n.h3,{id:"1edge-autonomy",children:"1\uff09Edge Autonomy"}),"\n",(0,t.jsx)(n.p,{children:"OpenYurt supports edge autonomy, which means even under the circumstance of network disconnection between cloud and edge, the workload containers at edge can run as they are when they restart, instead of being evicted and rescheduled."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"YurtHub"})," will cache resources at the edge side to ensure that ",(0,t.jsx)(n.code,{children:"kubelet"})," and pods can get resources they need when the network between cloud and edge are disconnect."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:r(35045).A+"",width:"1428",height:"596"})}),"\n",(0,t.jsx)(n.h3,{id:"2traffic-closure",children:"2\uff09Traffic Closure"}),"\n",(0,t.jsx)(n.p,{children:"In the native Kubernetes, the endpoints of a service are distributed among the whole cluster. But in OpenYurt we can divided nodes into nodepools, and manage them at the granularity of nodepool. On the base of it, we can also manage resources in each nodepool individually, such as using YurtAppSet to manage pods in different nodepools."}),"\n",(0,t.jsxs)(n.p,{children:["In the scenario of edge computing, resources in one nodepool are often independent on those in other nodepools, and nodes sometimes can only reach the nodes in the same nodepools. To meet this need, ",(0,t.jsx)(n.code,{children:"YurtHub"})," provides the capability of traffic closure to ensure the client can only reach the endpoints in the same nodepool making the traffic closed in the granularity of nodepool."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:r(74434).A+"",width:"1422",height:"554"})}),"\n",(0,t.jsx)(n.h3,{id:"3seamlessly-migrate-pods-to-edge",children:"3\uff09Seamlessly Migrate Pods to Edge"}),"\n",(0,t.jsxs)(n.p,{children:["In the native Kubernetes, Pods uses InClusterConfig to visit the ",(0,t.jsx)(n.code,{children:"Kube-APIServer"})," by default. But in the scenario of cloud-edge computing, the cloud side and the edge side are often separated in different networks, thus pods cannot reach the ",(0,t.jsx)(n.code,{children:"Kube-APIServer"})," through InClusterConfig. In addition, under the circumstance of disconnection between cloud and edge, the restart of pod will end in failure because it cannot get the resource from ",(0,t.jsx)(n.code,{children:"Kube-APIServer"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To solve the above two problems, ",(0,t.jsx)(n.code,{children:"YurtHub"})," provides users a way to seamlessly migrate their pods to the edge side with no modification. For these pods which using InClusterConfig to visit the ",(0,t.jsx)(n.code,{children:"Kube-APIServer"}),", ",(0,t.jsx)(n.code,{children:"YurtHub"})," will automatically revise the Kubernetes addresses they use to redirect the traffic from ",(0,t.jsx)(n.code,{children:"Kube-APIServer"})," to the ",(0,t.jsx)(n.code,{children:"YurtHub"}),", without any modification of pod yaml configurations."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:r(19246).A+"",width:"2426",height:"926"})}),"\n",(0,t.jsx)(n.h3,{id:"4support-of-multiple-cloud-apiservers",children:"4\uff09Support of Multiple Cloud APIServers"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"YurtHub"})," can work well with multiple cloud apiservers to adapt different scenarios, such as the dedicated cloud scenario which often runs ",(0,t.jsx)(n.code,{children:"Kube-APIServer"})," in HA mode, and the edge computing scenario which communicates through dedicated network and public network at the same time."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"rr(round-robin)\uff1aselect the address in turn, default."}),"\n",(0,t.jsx)(n.li,{children:"priority: select the address according to its priority, only when it is unreachable, other addresses with lower priority will be use."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"5management-of-node-certificate",children:"5\uff09Management of Node Certificate"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"YurtHub"})," serves as a client to redirect the requests to the APIServer and meanwhile it serves as a HTTP/HTTPS server to receive requests from ",(0,t.jsx)(n.code,{children:"kubelet"})," and pods running on the node. In the aim of security, ",(0,t.jsx)(n.code,{children:"YurtHub"})," manages the client certificate and the server certificate it needs."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"YurtHub"})," uses the capability of automatic certificate rotation of Kubernetes. Before certificates on the node expiring, it will automatically ask the cloud for new certificates. This mechanism, meanwhile, solves the following problem which will result in the failure when ",(0,t.jsx)(n.code,{children:"YurtHub"})," restarts: ",(0,t.jsx)(n.code,{children:"YurtHub"})," fails to rotate its certificates for the cloud-edge network breakdown, and fails again after the network recovering because of the expiration of certificates."]}),"\n",(0,t.jsx)(n.h2,{id:"2-architecture",children:"2. Architecture"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"YurtHub"}),' can run on the cloud node and the edge node. Thus, it has two work mode: "edge" and "cloud".']}),"\n",(0,t.jsx)(n.h3,{id:"1edge-mode",children:"1\uff09Edge Mode"}),"\n",(0,t.jsxs)(n.p,{children:["The following figure shows the architecture of ",(0,t.jsx)(n.code,{children:"YurtHub"}),' working in "edge" mode.']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:r(51744).A+"",width:"1532",height:"946"})}),"\n",(0,t.jsx)(n.p,{children:"In this figure, the processing of requests is clearly shown."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When the network between cloud and edge is healthy, requests coming from pods and ",(0,t.jsx)(n.code,{children:"kubelet"})," will be sent to the ",(0,t.jsx)(n.code,{children:"Kube-APIServer"})," through ",(0,t.jsx)(n.code,{children:"Load Balancer"}),". And responses returned back from ",(0,t.jsx)(n.code,{children:"Kube-APIServer"})," will first be filtered by ",(0,t.jsx)(n.code,{children:"Load Balancer"}),". Load Balancer then will cache resources contained in responses and finally send them back to the client."]}),"\n",(0,t.jsxs)(n.li,{children:["When the network between cloud and edge breaks, requests coming from pods and ",(0,t.jsx)(n.code,{children:"kubelet"})," will be processed by ",(0,t.jsx)(n.code,{children:"Local Proxy"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["According the above data flows, we can divided components of ",(0,t.jsx)(n.code,{children:"YurtHub"})," into two kinds: Cloud Request Processing Module and Edge Request Processing Module. The Edge Request Processing Module is made of the following components:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Local Proxy"}),"\ntakes the responsibility of handling resource requests from Pods and ",(0,t.jsx)(n.code,{children:"Kubelet"})," when the cloud-edge network breaks, and makes the client unconscious of the disconnection. ",(0,t.jsx)(n.code,{children:"Local Proxy"})," supports Get/List/Watch requests and will construct responses with cached resources. For those it does not support, such as Delete/Create/Update, it will return error messages. ",(0,t.jsx)(n.code,{children:"Cache Manager"})," is used in this process."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Cache Manager"}),"\ntakes the responsibility of caching and retrieving resources. It provides caching interface to cache resources contained in the response and retrieving interface to get resources from cache. The former is used by ",(0,t.jsx)(n.code,{children:"Load Balancer"}),", and the later is used by ",(0,t.jsx)(n.code,{children:"Local Proxy"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Storage Manager"}),"\ndefines functions to manipulate resources in cache, including Create, Update, Delete, Get, List and so on. Finally, resources will be serialized and stored in the cache."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Network Manager"}),"\ntakes the responsibility of setting iptables of host. Through these iptables rules, requests that originally sent to the ",(0,t.jsx)(n.code,{children:"Kube-APIServer"})," will be redirected to the ",(0,t.jsx)(n.code,{children:"YurtHub"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The Cloud Request Processing Module is made of the following components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Certificate Manager"}),"\ntakes the responsibility of managing necessary certificates that are needed when communicating with ",(0,t.jsx)(n.code,{children:"Kube-APIServer"}),", including client cert of ",(0,t.jsx)(n.code,{children:"YurtHub"})," and CA cert of the cluster. It will apply for certificates first and continuously update them before expiration."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Health Check"}),"\nwill periodically check if the ",(0,t.jsx)(n.code,{children:"YurtHub"})," can reach the ",(0,t.jsx)(n.code,{children:"Kube-APIServer"})," and set the healthy status according to the result. The healthy status will help the ",(0,t.jsx)(n.code,{children:"YurtHub"})," determine whether to send received requests to the cloud or handle them at the edge side. In addition, ",(0,t.jsx)(n.code,{children:"Health Check"})," also takes the responsibility of sending the heartbeat to the cloud."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Load Balancer"}),"\ntakes the responsibility of establishing the connection between ",(0,t.jsx)(n.code,{children:"YurtHub"})," and ",(0,t.jsx)(n.code,{children:"Kube-APIServer"}),". It will send requests from pods and ",(0,t.jsx)(n.code,{children:"Kubelet"})," to the cloud. ",(0,t.jsx)(n.code,{children:"Load Balancer"})," supports multiple Kube-APIServer addresses, and use Round-Robin or Priority mode to do the load balance. It uses ",(0,t.jsx)(n.code,{children:"Data Filtering Framework"})," to process responses and ",(0,t.jsx)(n.code,{children:"Storage Manager"})," to cache resources in responses."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Data Filtering Framework"}),"\ntakes the responsibility of filtering data to extend the capability of ",(0,t.jsx)(n.code,{children:"YurtHub"}),". Please refer to the link for detailed design: ",(0,t.jsx)(n.a,{href:"/docs/user-manuals/resource-access-control/",children:"resource-access-control"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GC Manager"}),"\nEach time when ",(0,t.jsx)(n.code,{children:"YurtHub"})," restarts, it will recycle pod resources in the cache which does not exist any more at the cloud. During the runtime, it will periodically recycle cached event resources of ",(0,t.jsx)(n.code,{children:"kubelet"})," and ",(0,t.jsx)(n.code,{children:"kube-proxy"})," ."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2cloud-mode",children:"2\uff09Cloud Mode"}),"\n",(0,t.jsxs)(n.p,{children:["The following figure shows the architecture of ",(0,t.jsx)(n.code,{children:"YurtHub"}),' working in "cloud" mode.']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:r(58844).A+"",width:"1398",height:"859"})}),"\n",(0,t.jsxs)(n.p,{children:['Compared with the "edge" mode, ',(0,t.jsx)(n.code,{children:"YurtHub"}),' runs in "cloud" mode will not check the healthy status of connection to ',(0,t.jsx)(n.code,{children:"Kube-APIServer"})," because the network at the cloud side is stable enough. ",(0,t.jsx)(n.code,{children:"YurtHub"})," will send all requests it received to ",(0,t.jsx)(n.code,{children:"Kube-APIServer"})," and do not need to cache resources. Thus, it also disable modules relative to handling request locally."]}),"\n",(0,t.jsx)(n.h2,{id:"3-reference",children:"3. Reference"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--access-server-through-hub  Default: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Determine whether pods connect to kube-apiserver through ",(0,t.jsx)(n.code,{children:"YurtHub"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'--bind-address  Default: "127.0.0.1"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The address of ",(0,t.jsx)(n.code,{children:"YurtHub Server"}),". ",(0,t.jsx)(n.code,{children:"YurtHub Server"})," listens on this address serving for requests of pprof, token, healthz and metrics. It works with the option ",(0,t.jsx)(n.code,{children:"--serve-port"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'--bind-proxy-address  Default: "127.0.0.1"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The address of ",(0,t.jsx)(n.code,{children:"YurtHub Proxy Server"}),". ",(0,t.jsx)(n.code,{children:"YurtHub Proxy Server"})," listens on this address to proxy HTTP requests to kube-apiserver. It works with the option ",(0,t.jsx)(n.code,{children:"--proxy-port"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'--cert-mgr-mode  Default: "hubself"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Set the mode of ",(0,t.jsx)(n.code,{children:"CertManager"}),'. Its value can only be "hubself", which means ',(0,t.jsx)(n.code,{children:"YurtHub"})," will apply for certificates."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--disabled-resource-filters\n"})}),"\n",(0,t.jsx)(n.p,{children:"Its value is a list of disabled filters. All filters are enabled by default."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'--disk-cache-path   Default: "/etc/kubernetes/cache/"\n'})}),"\n",(0,t.jsx)(n.p,{children:"The path where to store cached resources."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'--dummy-if-ip  Default: "169.254.2.1"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The IP address of the virtual network interface which is used by containers to connect to ",(0,t.jsx)(n.code,{children:"YurtHub"}),". It's should not be in the range of 169.254.31.0/24 and 169.254.1.1/32."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'--dummy-if-name  Default: "YurtHub-dummy0"\n'})}),"\n",(0,t.jsx)(n.p,{children:"The name of the virtual network interface."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--enable-dummy-if  Default: true\n"})}),"\n",(0,t.jsx)(n.p,{children:"If enable the virtual network interface."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--enable-iptables  Default: true\n"})}),"\n",(0,t.jsx)(n.p,{children:"If enable the management of iptables."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--enable-node-pool  Default: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"YurtHub"})," needs to list/watch nodepool resources."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--enable-resource-filter  Default: true\n"})}),"\n",(0,t.jsx)(n.p,{children:"If enable the filter functions which will filter data in responses returned from the cloud."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--gc-frequency  Default: 120min\n"})}),"\n",(0,t.jsx)(n.p,{children:"The frequency of recycling cached resources."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--heartbeat-failed-retry  Default: 3\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The max times ",(0,t.jsx)(n.code,{children:"YurtHub"})," will retry to update the heartbeat."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--heartbeat-healthy-threshold  Default: 2\n"})}),"\n",(0,t.jsx)(n.p,{children:"The number of consecutive times the Kube APIServer is detected as healthy before it is marked as healthy."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--heartbeat-timeout-seconds  Default: 2s\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Timeout when ",(0,t.jsx)(n.code,{children:"YurtHub"})," updates heartbeat."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--hub-cert-organizations\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Additional organization names that will be added into the certificate of ",(0,t.jsx)(n.code,{children:"YurtHub"}),". Multiple names should be separated by comma."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--join-token\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The token ",(0,t.jsx)(n.code,{children:"YurtHub"})," will use to apply for certificates."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'--kubelet-ca-file  Default: "/etc/kubernetes/pki/ca.crt"\n'})}),"\n",(0,t.jsx)(n.p,{children:"The path of CA cert that kubelet will use."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'--kubelet-client-certificate  Default: "/var/lib/kubelet/pki/kubelet-client-current.pem"\n'})}),"\n",(0,t.jsx)(n.p,{children:"The path of client cert that kubelet will use."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--kubelet-health-grace-period  Default: 40s\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The time ",(0,t.jsx)(n.code,{children:"YurtHub"})," can tolerate the no response of ",(0,t.jsx)(n.code,{children:"Kubelet"}),". After it, ",(0,t.jsx)(n.code,{children:"YurtHub"})," will not update the heartbeat."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'--lb-mode  Default: "rr"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The mode ",(0,t.jsx)(n.code,{children:"Load Balancer"}),' will use. Its value can be "rr" which means Round-Robin, or "priority" which means it prefers to use address with high priority.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--max-requests-in-flight  Default: 250\n"})}),"\n",(0,t.jsx)(n.p,{children:"The max pending number of coming requests. If exceed this number, the request will be rejected."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--node-name\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The name of the node where the ",(0,t.jsx)(n.code,{children:"YurtHub"})," is running."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--nodepool-name\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The name of the nodepool where the ",(0,t.jsx)(n.code,{children:"YurtHub"})," is running."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--profiling  Default: true\n"})}),"\n",(0,t.jsx)(n.p,{children:"If enable profile."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'--proxy-port  Default: "10261"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The HTTP port serves for proxy. HTTP requests sent to this port will be sent to ",(0,t.jsx)(n.code,{children:"Kube-APIServer"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'--proxy-secure-port  Default: "10268"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The HTTPS port serves for proxy. HTTPS requests sent to this port will be sent to ",(0,t.jsx)(n.code,{children:"Kube-APIServer"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'--root-dir  Default: "/var/lib/YurtHub"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Path of files ",(0,t.jsx)(n.code,{children:"YurtHub"})," will use."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'--serve-port  Default: "10267"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The port ",(0,t.jsx)(n.code,{children:"YurtHub Server"})," will listen on for HTTP requests. It should be used with option --bind-address."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--server-addr\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Addresses of ",(0,t.jsx)(n.code,{children:"Kube-APIServer"}),". Multiple addresses should be separated by comma."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"--version\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Output the version of ",(0,t.jsx)(n.code,{children:"YurtHub"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:'--working-mode  Default: "edge"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Working mode of ",(0,t.jsx)(n.code,{children:"YurtHub"}),'. It can be "edge" which means ',(0,t.jsx)(n.code,{children:"YurtHub"}),' is running on an edge node, or "cloud" which means ',(0,t.jsx)(n.code,{children:"YurtHub"})," is running on a cloud node."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},35045:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/yurthub-autonomy-afa7624d38879e8057110b48e7fdc6c4.png"},58844:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/yurthub-cloud-21d4dc8b7e41d307ac49aaad8cb16c14.png"},51744:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/yurthub-edge-bfa8383ca5ee7dae4a364c2e22ed9483.png"},19246:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/yurthub-pod-683562c21a64d2f2c3c43535b3d8d6ef.png"},74434:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/yurthub-service-topology-7547711bf03c626fd1b07e7fd42689cb.png"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var s=r(96540);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);