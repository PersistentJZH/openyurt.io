"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[3902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},32182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"YurtHub"},o=void 0,i={unversionedId:"core-concepts/yurthub",id:"version-v1.2/core-concepts/yurthub",title:"YurtHub",description:"1. Features",source:"@site/versioned_docs/version-v1.2/core-concepts/yurthub.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurthub",permalink:"/docs/v1.2/core-concepts/yurthub",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurthub.md",tags:[],version:"v1.2",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1675160618,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{title:"YurtHub"},sidebar:"version-v1.2/docs",previous:{title:"Raven",permalink:"/docs/v1.2/core-concepts/raven"},next:{title:"YurtTunnel",permalink:"/docs/v1.2/core-concepts/yurttunnel"}},s={},u=[{value:"1. Features",id:"1-features",level:2},{value:"1\uff09Edge Autonomy",id:"1edge-autonomy",level:3},{value:"2\uff09Traffic Closure",id:"2traffic-closure",level:3},{value:"3\uff09Seamlessly Migrate Pods to Edge",id:"3seamlessly-migrate-pods-to-edge",level:3},{value:"4\uff09Support of Multiple Cloud APIServers",id:"4support-of-multiple-cloud-apiservers",level:3},{value:"5\uff09Management of Node Certificate",id:"5management-of-node-certificate",level:3},{value:"2. Architecture",id:"2-architecture",level:2},{value:"1\uff09Edge Mode",id:"1edge-mode",level:3},{value:"2\uff09Cloud Mode",id:"2cloud-mode",level:3},{value:"3. Reference",id:"3-reference",level:2}],p={toc:u};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-features"},"1. Features"),(0,r.kt)("p",null,"As an important component of OpenYurt, ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," provides additional capabilities for the edge-side components in the scenario of cloud-edge computing."),(0,r.kt)("h3",{id:"1edge-autonomy"},"1\uff09Edge Autonomy"),(0,r.kt)("p",null,"OpenYurt supports edge autonomy, which means even under the circumstance of network disconnection between cloud and edge, the workload containers at edge can run as they are when they restart, instead of being evicted and rescheduled."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," will cache resources at the edge side to ensure that ",(0,r.kt)("inlineCode",{parentName:"p"},"kubelet")," and pods can get resources they need when the network between cloud and edge are disconnect."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(62792).Z,width:"1428",height:"596"})),(0,r.kt)("h3",{id:"2traffic-closure"},"2\uff09Traffic Closure"),(0,r.kt)("p",null,"In the native Kubernetes, the endpoints of a service are distributed among the whole cluster. But in OpenYurt we can divided nodes into nodepools, and manage them at the granularity of nodepool. On the base of it, we can also manage resources in each nodepool individually, such as using YurtAppSet to manage pods in different nodepools."),(0,r.kt)("p",null,"In the scenario of edge computing, resources in one nodepool are often independent on those in other nodepools, and nodes sometimes can only reach the nodes in the same nodepools. To meet this need, ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," provides the capability of traffic closure to ensure the client can only reach the endpoints in the same nodepool making the traffic closed in the granularity of nodepool."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(8387).Z,width:"1422",height:"554"})),(0,r.kt)("h3",{id:"3seamlessly-migrate-pods-to-edge"},"3\uff09Seamlessly Migrate Pods to Edge"),(0,r.kt)("p",null,"In the native Kubernetes, Pods uses InClusterConfig to visit the ",(0,r.kt)("inlineCode",{parentName:"p"},"Kube-APIServer")," by default. But in the scenario of cloud-edge computing, the cloud side and the edge side are often separated in different networks, thus pods cannot reach the ",(0,r.kt)("inlineCode",{parentName:"p"},"Kube-APIServer")," through InClusterConfig. In addition, under the circumstance of disconnection between cloud and edge, the restart of pod will end in failure because it cannot get the resource from ",(0,r.kt)("inlineCode",{parentName:"p"},"Kube-APIServer"),"."),(0,r.kt)("p",null,"To solve the above two problems, ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," provides users a way to seamlessly migrate their pods to the edge side with no modification. For these pods which using InClusterConfig to visit the ",(0,r.kt)("inlineCode",{parentName:"p"},"Kube-APIServer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," will automatically revise the Kubernetes addresses they use to redirect the traffic from ",(0,r.kt)("inlineCode",{parentName:"p"},"Kube-APIServer")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub"),", without any modification of pod yaml configurations."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(46840).Z,width:"2426",height:"926"})),(0,r.kt)("h3",{id:"4support-of-multiple-cloud-apiservers"},"4\uff09Support of Multiple Cloud APIServers"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," can work well with multiple cloud apiservers to adapt different scenarios, such as the dedicated cloud scenario which often runs ",(0,r.kt)("inlineCode",{parentName:"p"},"Kube-APIServer")," in HA mode, and the edge computing scenario which communicates through dedicated network and public network at the same time."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rr(round-robin)\uff1aselect the address in turn, default."),(0,r.kt)("li",{parentName:"ul"},"priority: select the address according to its priority, only when it is unreachable, other addresses with lower priority will be use.")),(0,r.kt)("h3",{id:"5management-of-node-certificate"},"5\uff09Management of Node Certificate"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," serves as a client to redirect the requests to the APIServer and meanwhile it serves as a HTTP/HTTPS server to receive requests from ",(0,r.kt)("inlineCode",{parentName:"p"},"kubelet")," and pods running on the node. In the aim of security, ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," manages the client certificate and the server certificate it needs."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," uses the capability of automatic certificate rotation of Kubernetes. Before certificates on the node expiring, it will automatically ask the cloud for new certificates. This mechanism, meanwhile, solves the following problem which will result in the failure when ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," restarts: ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," fails to rotate its certificates for the cloud-edge network breakdown, and fails again after the network recovering because of the expiration of certificates."),(0,r.kt)("h2",{id:"2-architecture"},"2. Architecture"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub"),' can run on the cloud node and the edge node. Thus, it has two work mode: "edge" and "cloud".'),(0,r.kt)("h3",{id:"1edge-mode"},"1\uff09Edge Mode"),(0,r.kt)("p",null,"The following figure shows the architecture of ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub"),' working in "edge" mode.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(2762).Z,width:"1532",height:"946"})),(0,r.kt)("p",null,"In this figure, the processing of requests is clearly shown."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the network between cloud and edge is healthy, requests coming from pods and ",(0,r.kt)("inlineCode",{parentName:"li"},"kubelet")," will be sent to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Kube-APIServer")," through ",(0,r.kt)("inlineCode",{parentName:"li"},"Load Balancer"),". And responses returned back from ",(0,r.kt)("inlineCode",{parentName:"li"},"Kube-APIServer")," will first be filtered by ",(0,r.kt)("inlineCode",{parentName:"li"},"Load Balancer"),". Load Balancer then will cache resources contained in responses and finally send them back to the client."),(0,r.kt)("li",{parentName:"ul"},"When the network between cloud and edge breaks, requests coming from pods and ",(0,r.kt)("inlineCode",{parentName:"li"},"kubelet")," will be processed by ",(0,r.kt)("inlineCode",{parentName:"li"},"Local Proxy"),".")),(0,r.kt)("p",null,"According the above data flows, we can divided components of ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," into two kinds: Cloud Request Processing Module and Edge Request Processing Module. The Edge Request Processing Module is made of the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Local Proxy"),"\ntakes the responsibility of handling resource requests from Pods and ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubelet")," when the cloud-edge network breaks, and makes the client unconscious of the disconnection. ",(0,r.kt)("inlineCode",{parentName:"p"},"Local Proxy")," supports Get/List/Watch requests and will construct responses with cached resources. For those it does not support, such as Delete/Create/Update, it will return error messages. ",(0,r.kt)("inlineCode",{parentName:"p"},"Cache Manager")," is used in this process.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cache Manager"),"\ntakes the responsibility of caching and retrieving resources. It provides caching interface to cache resources contained in the response and retrieving interface to get resources from cache. The former is used by ",(0,r.kt)("inlineCode",{parentName:"p"},"Load Balancer"),", and the later is used by ",(0,r.kt)("inlineCode",{parentName:"p"},"Local Proxy"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Storage Manager"),"\ndefines functions to manipulate resources in cache, including Create, Update, Delete, Get, List and so on. Finally, resources will be serialized and stored in the cache.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Network Manager"),"\ntakes the responsibility of setting iptables of host. Through these iptables rules, requests that originally sent to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Kube-APIServer")," will be redirected to the ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub"),"."))),(0,r.kt)("p",null,"The Cloud Request Processing Module is made of the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Certificate Manager"),"\ntakes the responsibility of managing necessary certificates that are needed when communicating with ",(0,r.kt)("inlineCode",{parentName:"p"},"Kube-APIServer"),", including client cert of ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," and CA cert of the cluster. It will apply for certificates first and continuously update them before expiration.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Health Check"),"\nwill periodically check if the ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," can reach the ",(0,r.kt)("inlineCode",{parentName:"p"},"Kube-APIServer")," and set the healthy status according to the result. The healthy status will help the ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," determine whether to send received requests to the cloud or handle them at the edge side. In addition, ",(0,r.kt)("inlineCode",{parentName:"p"},"Health Check")," also takes the responsibility of sending the heartbeat to the cloud.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Load Balancer"),"\ntakes the responsibility of establishing the connection between ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Kube-APIServer"),". It will send requests from pods and ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubelet")," to the cloud. ",(0,r.kt)("inlineCode",{parentName:"p"},"Load Balancer")," supports multiple Kube-APIServer addresses, and use Round-Robin or Priority mode to do the load balance. It uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Filtering Framework")," to process responses and ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage Manager")," to cache resources in responses.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Data Filtering Framework"),"\ntakes the responsibility of filtering data to extend the capability of ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub"),". Currently, three filters are included."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MasterService Filter\uff1a\nenable users to seamlessly migrate pods which uses InClusterConfig to the edge side without modification.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ServiceTopology Filter\uff1a\nprovide the capability of traffic closure, limiting the endpoints in the same nodepool as the node.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DiscardCloudService Filter\uff1a\nensure that client at the edge side uses public network to reach the endpoints of cloud service instead of the PodIP when the cloud and edge are in the separated network.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GC Manager"),"\nEach time when ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," restarts, it will recycle pod resources in the cache which does not exist any more at the cloud. During the runtime, it will periodically recycle cached event resources of ",(0,r.kt)("inlineCode",{parentName:"p"},"kubelet")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-proxy")," ."))),(0,r.kt)("h3",{id:"2cloud-mode"},"2\uff09Cloud Mode"),(0,r.kt)("p",null,"The following figure shows the architecture of ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub"),' working in "cloud" mode.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(75452).Z,width:"1398",height:"859"})),(0,r.kt)("p",null,'Compared with the "edge" mode, ',(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub"),' runs in "cloud" mode will not check the healthy status of connection to ',(0,r.kt)("inlineCode",{parentName:"p"},"Kube-APIServer")," because the network at the cloud side is stable enough. ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," will send all requests it received to ",(0,r.kt)("inlineCode",{parentName:"p"},"Kube-APIServer")," and do not need to cache resources. Thus, it also disable modules relative to handling request locally."),(0,r.kt)("h2",{id:"3-reference"},"3. Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--access-server-through-hub  Default: true\n")),(0,r.kt)("p",null,"Determine whether pods connect to kube-apiserver through ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--bind-address  Default: "127.0.0.1"\n')),(0,r.kt)("p",null,"The address of ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub Server"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub Server")," listens on this address serving for requests of pprof, token, healthz and metrics. It works with the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--serve-port"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--bind-proxy-address  Default: "127.0.0.1"\n')),(0,r.kt)("p",null,"The address of ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub Proxy Server"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub Proxy Server")," listens on this address to proxy HTTP requests to kube-apiserver. It works with the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--proxy-port"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--cert-mgr-mode  Default: "hubself"\n')),(0,r.kt)("p",null,"Set the mode of ",(0,r.kt)("inlineCode",{parentName:"p"},"CertManager"),'. Its value can only be "hubself", which means ',(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," will apply for certificates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--disabled-resource-filters\n")),(0,r.kt)("p",null,"Its value is a list of disabled filters. All filters are enabled by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--disk-cache-path   Default: "/etc/kubernetes/cache/"\n')),(0,r.kt)("p",null,"The path where to store cached resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--dummy-if-ip  Default: "169.254.2.1"\n')),(0,r.kt)("p",null,"The IP address of the virtual network interface which is used by containers to connect to ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub"),". It's should not be in the range of 169.254.31.0/24 and 169.254.1.1/32."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--dummy-if-name  Default: "YurtHub-dummy0"\n')),(0,r.kt)("p",null,"The name of the virtual network interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--enable-dummy-if  Default: true\n")),(0,r.kt)("p",null,"If enable the virtual network interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--enable-iptables  Default: true\n")),(0,r.kt)("p",null,"If enable the management of iptables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--enable-node-pool  Default: true\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," needs to list/watch nodepool resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--enable-resource-filter  Default: true\n")),(0,r.kt)("p",null,"If enable the filter functions which will filter data in responses returned from the cloud."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--gc-frequency  Default: 120min\n")),(0,r.kt)("p",null,"The frequency of recycling cached resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--heartbeat-failed-retry  Default: 3\n")),(0,r.kt)("p",null,"The max times ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," will retry to update the heartbeat."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--heartbeat-healthy-threshold  Default: 2\n")),(0,r.kt)("p",null,"The number of consecutive times the Kube APIServer is detected as healthy before it is marked as healthy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--heartbeat-timeout-seconds  Default: 2s\n")),(0,r.kt)("p",null,"Timeout when ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," updates heartbeat."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--hub-cert-organizations\n")),(0,r.kt)("p",null,"Additional organization names that will be added into the certificate of ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub"),". Multiple names should be separated by comma."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--join-token\n")),(0,r.kt)("p",null,"The token ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," will use to apply for certificates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--kubelet-ca-file  Default: "/etc/kubernetes/pki/ca.crt"\n')),(0,r.kt)("p",null,"The path of CA cert that kubelet will use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--kubelet-client-certificate  Default: "/var/lib/kubelet/pki/kubelet-client-current.pem"\n')),(0,r.kt)("p",null,"The path of client cert that kubelet will use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--kubelet-health-grace-period  Default: 40s\n")),(0,r.kt)("p",null,"The time ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," can tolerate the no response of ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubelet"),". After it, ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," will not update the heartbeat."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--lb-mode  Default: "rr"\n')),(0,r.kt)("p",null,"The mode ",(0,r.kt)("inlineCode",{parentName:"p"},"Load Balancer"),' will use. Its value can be "rr" which means Round-Robin, or "priority" which means it prefers to use address with high priority.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--max-requests-in-flight  Default: 250\n")),(0,r.kt)("p",null,"The max pending number of coming requests. If exceed this number, the request will be rejected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--node-name\n")),(0,r.kt)("p",null,"The name of the node where the ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," is running."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--nodepool-name\n")),(0,r.kt)("p",null,"The name of the nodepool where the ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," is running."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--profiling  Default: true\n")),(0,r.kt)("p",null,"If enable profile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--proxy-port  Default: "10261"\n')),(0,r.kt)("p",null,"The HTTP port serves for proxy. HTTP requests sent to this port will be sent to ",(0,r.kt)("inlineCode",{parentName:"p"},"Kube-APIServer"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--proxy-secure-port  Default: "10268"\n')),(0,r.kt)("p",null,"The HTTPS port serves for proxy. HTTPS requests sent to this port will be sent to ",(0,r.kt)("inlineCode",{parentName:"p"},"Kube-APIServer"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--root-dir  Default: "/var/lib/YurtHub"\n')),(0,r.kt)("p",null,"Path of files ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," will use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--serve-port  Default: "10267"\n')),(0,r.kt)("p",null,"The port ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub Server")," will listen on for HTTP requests. It should be used with option --bind-address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--server-addr\n")),(0,r.kt)("p",null,"Addresses of ",(0,r.kt)("inlineCode",{parentName:"p"},"Kube-APIServer"),". Multiple addresses should be separated by comma."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--version\n")),(0,r.kt)("p",null,"Output the version of ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--working-mode  Default: "edge"\n')),(0,r.kt)("p",null,"Working mode of ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub"),'. It can be "edge" which means ',(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub"),' is running on an edge node, or "cloud" which means ',(0,r.kt)("inlineCode",{parentName:"p"},"YurtHub")," is running on a cloud node."))}d.isMDXComponent=!0},62792:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/yurthub-autonomy-afa7624d38879e8057110b48e7fdc6c4.png"},75452:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/yurthub-cloud-21d4dc8b7e41d307ac49aaad8cb16c14.png"},2762:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/yurthub-edge-bfa8383ca5ee7dae4a364c2e22ed9483.png"},46840:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/yurthub-pod-683562c21a64d2f2c3c43535b3d8d6ef.png"},8387:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/yurthub-service-topology-7547711bf03c626fd1b07e7fd42689cb.png"}}]);