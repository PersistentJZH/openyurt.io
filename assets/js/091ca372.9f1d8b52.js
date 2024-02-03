"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[49361],{31126:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(85893),o=t(11151);const s={title:"YurtTunnel"},a=void 0,i={id:"core-concepts/yurttunnel",title:"YurtTunnel",description:"1. Background",source:"@site/versioned_docs/version-v0.6.0/core-concepts/yurttunnel.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurttunnel",permalink:"/docs/v0.6.0/core-concepts/yurttunnel",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurttunnel.md",tags:[],version:"v0.6.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1706998557,formattedLastUpdatedAt:"Feb 3, 2024",frontMatter:{title:"YurtTunnel"},sidebar:"docs",previous:{title:"YurtHub",permalink:"/docs/v0.6.0/core-concepts/yurthub"},next:{title:"YurtAppManager",permalink:"/docs/v0.6.0/core-concepts/yurt-app-manager"}},l={},c=[{value:"1. Background",id:"1-background",level:2},{value:"2. Reverse Channel",id:"2-reverse-channel",level:2},{value:"3. Implementation Mode",id:"3-implementation-mode",level:2}];function d(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"1-background",children:"1. Background"}),"\n",(0,r.jsx)(n.p,{children:"During the deployment and operation of the application, users often get the logs of the application or log in to the application's running environment for debugging. In Kubernetes, we usually use kubectl log, kubectl exec, etc. to implement these requirements. As shown below, on the kubectl request link, kubelet will act as a server to handle requests forwarded by kube-apiserver (KAS), which requires a network path between KAS and kubelet to allow KAS to access kubelet."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(73898).Z+"",width:"1570",height:"464"})}),"\n",(0,r.jsx)(n.p,{children:"Cloud and edge are generally located on different network planes, and edge nodes are generally located inside the firewall. Using the cloud-edge (center-edge) collaboration structure will lead to the following challenges in operation and monitoring capabilities of the native K8s system:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Lack of native operation capabilities of K8s( such as kubectl logs/exec etc. can't work )"}),"\n",(0,r.jsx)(n.li,{children:"The main monitoring and operation components of the community can't work( such as Prometheus/metrics-server )"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In order to support operating edge applications through cloud nodes, we must establish a reverse operation channel between cloud and edge."}),"\n",(0,r.jsx)(n.h2,{id:"2-reverse-channel",children:"2. Reverse Channel"}),"\n",(0,r.jsx)(n.p,{children:"In OpenYurt\uff0cwe introduce a special component\u2014\u2014YurtTunnel to solve the problem of cloud-edge communication. Reverse channel is a common way to solve cross network communication, and the essence of YurtTunnel is also a reverse channel. It's a typical C/S structure component, consisting of Yurt-Tunnel-Server deployed on cloud and Yurt-Tunnel-Agent deployed on edge. The structure of YurtTunnel is shown in the figure below, the workflow of the reverse channel includes the following steps:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Deploy Yurt-Tunnel-Server on the network plane where the control components are located."}),"\n",(0,r.jsx)(n.li,{children:"Yurt-Tunnel-Server opens an IP that can be accessed by the public network."}),"\n",(0,r.jsx)(n.li,{children:"Deploy Yurt-Tunnel-Agent on each edge node\uff0cand establish a long connection with the server through the public IP of the server."}),"\n",(0,r.jsx)(n.li,{children:"The request from control components to edge nodes will be forwarded to Yurt-Tunnel-Server."}),"\n",(0,r.jsx)(n.li,{children:"Then Yurt-Tunnel-Server sends the request to the target edge node through the long connection."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(16879).Z+"",width:"2128",height:"1142"})}),"\n",(0,r.jsx)(n.h2,{id:"3-implementation-mode",children:"3. Implementation Mode"}),"\n",(0,r.jsx)(n.p,{children:"To build a secure, non-invasive and scalable reverse channel solution in the k8s cloud-edge integration structure, the solution includes at least the following three capabilities."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Tunnel construction"}),"\n",(0,r.jsx)(n.li,{children:"Self-management of certificates at both ends of the tunnel"}),"\n",(0,r.jsx)(n.li,{children:"Requests of cloud components are seamlessly routed to the tunnel"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The structure modules of YurtTunnel are as follows\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(57553).Z+"",width:"2016",height:"1576"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Tunnel construction"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"When Yurt-Tunnel-Agent on the edge is started\uff0cit will establish a connection with Yurt-Tunnel-Server according to the access address and register. Then the agent will periodically detect the health status of the connection, rebuild the connection, and so on."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The identity information registered by Yurt-Tunnel-Agent is as follows\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:'"agentID": {NodeName}\n"agentIdentifiers": ipv4={nodeIP}&host={NodeName}"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"When Yurt-Tunnel-Server receives a request from the cloud component, it should forward the request to corresponding Yurt-Tunnel-Agent. In addition to forwarding the initial request, the session of the request will also have data returns or continuous data forwarding( such as kubectl exec ) later. Therefore, it should forward data in both directions. At the same time, it is necessary to support and forward requests from cloud components, which means that it should establish an independent identifier for each request life cycle. So there are generally two plans in the design."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Plan 1: The initial cloud-edge connection only informs the forwarding request, Yurt-Tunnel-Agent will establish a new connection with cloud to process the request. The problem of requesting independent identification can be well solved through the new connection, and concurrency can also be well resolved. But establishing a connection for each request will consume lots of resources."}),"\n",(0,r.jsx)(n.p,{children:"Plan 2: Only the initial cloud-edge connection is used to forward requests. In order to reuse the same connection for many requests, it is necessary to encapsulate each request and add an independent identifier to solve the demand for concurrent forwarding. At the same time, we should decouple connection management and request lifecycle management since a connection needs to be reused. That is, the state transition of request forwarding should be managed independently. This plan involves packet and unpack, request processing state machine, etc., which will be more complicated."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OpenYurt chooses the ANP component, which adopts the above plan 2. This is also consistent with our original design intention."}),"\n",(0,r.jsx)(n.li,{children:"The construction of the request forwarding link is encapsulated in Packet_DialRequest and Packet_DialResponse. Packet_DialResponse.ConnectID is used to identify request, which is equal to the requestID in tunnel. Requests and associated data are encapsulated in Packet_Data. Packet_CloseRequest and Packet_CloseResponse are used to forward link resource reclamation. Please refer to the following timing diagram for details:"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(4089).Z+"",width:"1080",height:"997"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Function of RequestInterceptor\uff1a\nFrom the above analysis, It can be seen that the requester should initiate an Http Connect request to build a forwarding link before Yurt-Tunnel-Server forwards the request. However, it's difficult to add corresponding processing to open source components such as Prometheus and metrics-server. Therefore, the request hijacking module\u2014\u2014Interceptor is added to Yurt-Tunnel-Server to initiate Http Connect requests."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Certificate management"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In order to ensure the long-term secure communication of the cloud-edge channel and support https request forwarding, YurtTunnel needs to generate its own certificate and maintain the automatic rotation of the certificate. The specific details are as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:'# 1. Yurt-Tunnel-Server certificate:\n# https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/pki/certmanager/certmanager.go#L45-90\n- Certificate store location: /var/lib/yurt-tunnel-server/pki\n- CommonName: "kube-apiserver-kubelet-client"  // webhook validation for kubelet server\n- Organization: {"system:masters", "openyurt:yurttunnel"} // webhook checksum for kubelet server and auto approve for Yurt-Tunnel-Server certificate\n- Subject Alternate Name values: {x-tunnel-server-svc, x-tunnel-server-internal-svc\'s ips and dns names}\n- KeyUsage: "any"\n\n# 2. Yurt-Tunnel-Agent certificate\uff1a\n# https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/pki/certmanager/certmanager.go#L94-112\n- Certificate store location: /var/lib/yurt-tunnel-agent/pki\n- CommonName: "yurttunnel-agent"\n- Organization: {"openyurt:yurttunnel"} // auto approve for Yurt-Tunnel-Agent certificate\n- Subject Alternate Name values: {NodeName, nodeIP}\n- KeyUsage: "any"\n\n# 3. yurt-tunnel certificate application (CSR) is approved by Yurt-Tunnel-Server\n# https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/pki/certmanager/csrapprover.go#L115\n- monitor csr resources\n- filter non yurt-tunnel\'s csr (no "openyurt:yurttunnel" in Organization)\n- approve csrs that have not been approved\n\n# 4. Certificate auto-rotation\n# https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/client-go/util/certificate/certificate_manager.go#L224\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Seamlessly route requests of cloud components to the tunnel"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Because the requests of cloud components need to be seamlessly forwarded to Yurt-Tunnel-Server, it also means that there is no need to modify the cloud components. Therefore, it is necessary to analyze the requests of cloud components. At present, the operation requests of components mainly include the following two types:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type 1: Use Ip address directly, for example: ",(0,r.jsx)(n.code,{children:"http://{nodeIP}:{port}/{path}"})]}),"\n",(0,r.jsxs)(n.li,{children:["Type 2: Use domain name, for example: ",(0,r.jsx)(n.code,{children:"http://{NodeName}:{port}/{path}"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For different types of requests, it needs different plans."}),"\n",(0,r.jsx)(n.p,{children:"Plan 1: Use iptables dnat rules to ensure that type 1 requests are seamlessly forwarded to Yurt-Tunnel-Server"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"# related iptables rules maintenance code: https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/iptables/iptables.go\n# iptables dnat rules maintained by Yurt-Tunnel-Server are as follows:\n[root@xxx /]# iptables -nv -t nat -L OUTPUT\nTUNNEL-PORT  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* edge tunnel server port */\n\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT\nTUNNEL-PORT-10255  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:10255 /* jump to port 10255 */\nTUNNEL-PORT-10250  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:10250 /* jump to port 10250 */\n\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT-10255\nRETURN     tcp  --  *      *       0.0.0.0/0            127.0.0.1            /* return request to access node directly */ tcp dpt:10255\nRETURN     tcp  --  *      *       0.0.0.0/0            172.16.6.156         /* return request to access node directly */ tcp dpt:10255\nDNAT       tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* dnat to tunnel for access node */ tcp dpt:10255 to:172.16.6.156:10264\n"})}),"\n",(0,r.jsx)(n.p,{children:"Plan 2: Use dns domain name resolution to solve NodeName to access address of Yurt-Tunnel-Server, so that type 2 requests can be seamlessly forwarded to yurt-tunnel. Its working principle is shown in the figure:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(84897).Z+"",width:"2582",height:"1358"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Yurt-Tunnel-Server will maintain two Service addresses\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"x-tunnel-server-svc: Mainly expose port 10262/10263, used to access Yurt-Tunnel-Server from the public network. Such as Yurt-Tunnel-Agent."}),"\n",(0,r.jsx)(n.li,{children:"x-tunnel-server-internal-svc: Mainly used for cloud components access from the internal network, such as prometheus, metrics-server, etc."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Yurt-Tunnel-Server has a built-in DNS Controller, dynamically configures Core DNS Host records, and maintains the mapping relationship between NodeName and IP(Cloud Node can reach directly according to IP, that is directly mapped to Node IP;Edge Node needs to communicate through the Tunnel agent, that is mapping to cluster ip of Yurt-Tunnel-Server Internal Service)"}),"\n",(0,r.jsx)(n.li,{children:"When the cloud component access the Edge Node by NodeName, it will solve domain names through CoreDNS by default. The request for the Edge Node will be directed to the ClusterIP of the internal service of Yurt-Tunnel-Server, and use the forwarding ability of kube-proxy to load the request Balanced into healthy Yurt-Tunnel-Server Pods."}),"\n",(0,r.jsx)(n.li,{children:"Yurt-Tunnel-Server will check the requested Host format. When the Host format is NodeName, it will find the correct Agent backend through the node name and forward the data."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Port extension"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If users want to access other ports on the edge (other than 10250 and 10255), they need to add corresponding dnat rules in iptables or add corresponding port mapping in x-tunnel-server-internal-svc, as shown below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"\n# access port 9051 of the edge for example.\n# add iptables dnat rule:\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT\nTUNNEL-PORT-9051  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:9051 /* jump to port 9051 */\n\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT-9051\nRETURN     tcp  --  *      *       0.0.0.0/0            127.0.0.1            /* return request to access node directly */ tcp dpt:9051\nRETURN     tcp  --  *      *       0.0.0.0/0            172.16.6.156         /* return request to access node directly */ tcp dpt:9051\nDNAT       tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* dnat to tunnel for access node */ tcp dpt:9051 to:172.16.6.156:10264\n\n# add port mapping in x-tunnel-server-internal-svc\nspec:\n  ports:\n  - name: https\n    port: 10250\n    protocol: TCP\n    targetPort: 10263\n  - name: http\n    port: 10255\n    protocol: TCP\n    targetPort: 10264\n  - name: dnat-9051 # add mapping\n    port: 9051\n    protocol: TCP\n    targetPort: 10264\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The above iptables dnat rules and service port mapping are automatically updated by Yurt-Tunnel-Server. Users just add port configuration in ",(0,r.jsx)(n.code,{children:"yurt-tunnel-server-cfg"})," configmap that is under ",(0,r.jsx)(n.code,{children:"kube-system"})," . The details are as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Yaml",children:"# Note\uff1aSince uncontrollable factors of the certificate, the new port currently only supports forwarding from 10264 of Yurt-Tunnel-Server\napiVersion: v1\ndata:\n  dnat-ports-pair: 9051=10264 # add port=10264(Only support port 10264 to forward)\nkind: ConfigMap\nmetadata:\n  name: yurt-tunnel-server-cfg\n  namespace: kube-system\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},73898:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/kubectl-4a135b776e4058dae26cb98067a28d99.jpg"},16879:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tunnel_arch-f5523df0a26022bbc4a94960802f2c40.jpg"},57553:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tunnel_components-98b2297c73ddbafee663f1dacf5ec19d.jpg"},84897:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tunnel_dns-3f45c486b188e1dd9e5b254ba516e10f.jpg"},4089:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tunnel_sequence_diag-385d8a83150e7246026538e7948dd738.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(67294);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);