"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[12712],{87552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=n(85893),o=n(11151);const s={title:"yurthub"},i=void 0,c={id:"faq/yurthub",title:"yurthub",description:"1. yurthub data cache directory",source:"@site/versioned_docs/version-v1.3/faq/yurthub.md",sourceDirName:"faq",slug:"/faq/yurthub",permalink:"/docs/v1.3/faq/yurthub",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq/yurthub.md",tags:[],version:"v1.3",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1718831342e3,frontMatter:{title:"yurthub"},sidebar:"docs",previous:{title:"yurtadm_token",permalink:"/docs/v1.3/reference/yurtadm/yurtadm_token"},next:{title:"yurtadm",permalink:"/docs/v1.3/faq/yurtadm"}},a={},h=[];function d(e){const t={a:"a",code:"code",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"** 1. yurthub data cache directory **"}),"\n",(0,r.jsxs)(t.p,{children:["The metadata cache path on the edge node is: ",(0,r.jsx)(t.code,{children:"/etc/kubernetes/cache/{componentName}/{resource}/{namespace}/{name}"})]}),"\n",(0,r.jsx)(t.p,{children:"** 2. yurthub component certificate storage directory**"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"client certificate: /var/lib/yurthub/pki/yurthub-current.pem\nUsed to access the cloud kube-apiserver, the authority is the same as the kubelet node certificate"}),"\n",(0,r.jsx)(t.li,{children:"server certificate: /var/lib/yurthub/pki/yurthub-server-current.pem\nUsed for yurthub to start https server, providing TLS verification for each component on the edge node"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["At present, the validity period of the certificate is uniformly determined by the kube-controller-manager component (1 year by default), and user self-configuration is not supported for the time being.\nAt the same time, yurthub will perform a certificate rotation request to update the certificate before the certificate expires. If the certificate rotation fails due to network reasons, yurthub will use the bootstrap token to re-apply for the certificate.\nOf course, if the bootstrap token also expires, the user needs to execute on the edge node: POST ",(0,r.jsx)(t.a,{href:"http://127.0.0.1:10267/v1/token",children:"http://127.0.0.1:10267/v1/token"}),' -D "jointoken:\n',(0,r.jsx)(t.code,{children:"{bootstrap token}"}),'" to update the bootstrap token. Note that the previous ',(0,r.jsx)(t.code,{children:"{bootstrap token}"})," is replaced with valid The bootstrap token."]}),"\n",(0,r.jsx)(t.p,{children:"** 3. how to check which requests are forwarded to kube-apiserver through yurthub**"}),"\n",(0,r.jsxs)(t.p,{children:["Execute on the edge node: ",(0,r.jsx)(t.code,{children:"curl http://127.0.0.1:10267/metrics"}),", and check the following content:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"img",src:n(78957).Z+"",width:"1500",height:"345"})}),"\n",(0,r.jsx)(t.p,{children:"Each line of node_yurthub_in_flight_requests_collector represents a type of request, determined by the client/resource/verb triplet. The following number 0 indicates that the request has occurred, but it is currently over. The number 1 means that there is currently one request."}),"\n",(0,r.jsx)(t.p,{children:"be careful:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"list/watch requests usually appear together. If there is only list request but no watch request, it may mean that the list request has not ended and is stuck in yurthub. For example, when there is no NodePool resource in the cluster, the servicetopology filter of yurthub will depend on the NodePool resource. Therefore, the servicetopology filter of yurthub has not been ready, and it will block the coredns/kube-proxy list endpointslices request."}),"\n",(0,r.jsx)(t.li,{children:"If yurthub restarts, there may be only watch requests but no list requests, which is normal."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"** 4. How to check the communication traffic between each component of the edge node and the kube-apiserver **"}),"\n",(0,r.jsxs)(t.p,{children:["Execute on the edge node: ",(0,r.jsx)(t.code,{children:"curl http://127.0.0.1:10267/metrics"}),", and check the following content:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"img",src:n(88540).Z+"",width:"1500",height:"200"})}),"\n",(0,r.jsx)(t.p,{children:"Through the information of node_yurthub_proxy_traffic_collector, you can get the total traffic of each request returning data from the cloud. The unit is Byte\nTherefore, the components on the edge nodes must reduce the full list requests for large-scale resources (such as nodes, pods, endpoint slices, etc.), otherwise a large amount of public network bandwidth will be occupied."}),"\n",(0,r.jsx)(t.p,{children:"** 5. The Pod using InClusterConfig does not access the cloud kube-apiserver through yurthub **"}),"\n",(0,r.jsxs)(t.p,{children:["If the node is installed by ",(0,r.jsx)(t.code,{children:"yurtadm join"})," command, when the pod on the node accesses the kube-apiserver through InClusterConfig, the request will be automatically forwarded through yurthub, so as to reuse a series of capabilities such as data caching, filtering, and traffic statistics of yurthub. If you find that there is no relevant request record in the metrics of yurthub, you can confirm the following:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Determine whether the pod is using InClusterConfig, or directly using the kube-apiserver address to access. If InClusterConfig is not used, first adjust the Pod to use InClusterConfig, and then restart the Pod."}),"\n",(0,r.jsx)(t.li,{children:"Confirm the cache data on the node /etc/kubernetes/cache/kubelet/services/default/kubernetes, whether the ClusterIP and Port of the Service are the yurthub listening address (default: 169.254.2.1:10268). If the content is incorrect, please restart the kubelet (systemctl restart kubelet) and check whether the cached data is updated."}),"\n",(0,r.jsx)(t.li,{children:"Check the environment variables in the Pod (container): KUBERNETES_SERVICE_HOST and KUBERNETES_SERVICE_PORT, whether their values correspond to the listening address of yurthub (default: 169.254.2.1:10268). If the content is incorrect, please rebuild the pod (kubectl delete pod) to check whether the environment variables are updated."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"** 6. On the edge node, the service topology capability does not take effect**"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Check the metrics of yurthub to see if the kube-proxy list endpointslice request is over (the number is 0 to indicate the end). If the list request is not over, it means that the servicetopology filter in yurthub is not ready yet, usually because the NodePool resource in the cluster has not been created caused by."}),"\n",(0,r.jsx)(t.li,{children:"Check whether the corresponding endpointslice data under /etc/kubernetes/cache/kube-proxy directory conforms to the service topology. When the data does not meet expectations, restart kube-proxy and check to see if the data is updated."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"** 7. yurthub failed to start normally, and Exited yurthub container was not found on the node**"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"docker ps -a"})," to check if there are yurthub containers in the Exited state on the node"]}),"\n",(0,r.jsxs)(t.li,{children:["If there is no yurthub container in Exited state, please check the reason why yurthub cannot start in the kubelet log(",(0,r.jsx)(t.code,{children:"journalctl -u kubelet"}),")"]}),"\n",(0,r.jsx)(t.li,{children:"If there is a yurthub container in the Exited state, check the Exited yurthub container log in docker logs to analyze the reason why it cannot be started."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"** 8. yurthub cannot start normally, and yurthub log shows that it is waiting for the certificate to be prepared **"}),"\n",(0,r.jsx)(t.p,{children:"The certificate required by yurthub has not been generated successfully, you can locate it by the following method:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Execute on the cluster: ",(0,r.jsx)(t.code,{children:"kubectl get csr"}),", check whether the certificate signing request of the relevant node is created"]}),"\n",(0,r.jsx)(t.li,{children:"If the csr is not created, the bootstrap token passed in is generally an invalid token. After cleaning the node, use a valid bootstrap token to join again."}),"\n",(0,r.jsx)(t.li,{children:"If the csr has been created, but the status is always pending, it means that csr approver has not been able to approve the csr. Check whether yurt-manager component is installed and working normally."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"** 9. The metadata of a component in the yurthub cache on the edge node is deleted, how to restore it**"}),"\n",(0,r.jsx)(t.p,{children:"When the node and the cloud network are connected normally, rebuild the corresponding pod to restore the relevant cached metadata."}),"\n",(0,r.jsx)(t.p,{children:"** 10. When the node is connected, yurthub starts successfully, but all requests keep reporting certificate errors? **"}),"\n",(0,r.jsxs)(t.p,{children:["This situation may be due to the old remained yurthub certificates on the node are used by yurthub, resulting in a certificate error problem. You can execute ",(0,r.jsx)(t.code,{children:"ls -la /var/lib/yurthub/pki"})," to check the generation time of each file and see if the generation time is reasonable.\nAt the same time, If join a node that has been operated in the history into the cluster, it is recommended to perform a ",(0,r.jsx)(t.code,{children:"yurtadm reset"})," first to clean up the data on the node."]}),"\n",(0,r.jsx)(t.p,{children:"** 11. The user's own pod accesses the kube-apiserver in the cloud through Yurthub, but there is no cached data of the pod on the edge node**"}),"\n",(0,r.jsx)(t.p,{children:"By default, yurthub will only cache data for kubelet, kube-proxy, coredns, flannel, and tunnel-agent components (confirmed by the User-Agent in the http request header). Take client-A(such as User-Agent is client-A) for example, user should add client-A to the cache_agents field in kube-system/yurthub-cfg configmap, then delete and rebuild the client-A Pod.\nAt the same time, cache_agents also supports general configuration symbols: *, so that responses from all clients will be automatically cached, but users need to focus on the disk usage of the cache."}),"\n",(0,r.jsx)(t.p,{children:"** 12. How to use the yurthub image of the private image registry**"}),"\n",(0,r.jsxs)(t.p,{children:["First of all, the images provided by the community have passed ",(0,r.jsx)(t.code,{children:"trivy"})," security scan, and users can use them with confidence. Since yurthub is deployed in static pod mode, it cannot support private image registry through imagePullSecrets.\nUsers need to configure the runtime on the node in advance to support private image registry. For example, Containerd runtime private image registry configuration, you can refer to: ",(0,r.jsx)(t.a,{href:"https://github.com/containerd/cri/blob/release/1.4/docs/registry.md#configure-registry-credentials",children:"https://github.com/containerd/cri/blob/release/1.4/docs/registry.md#configure-registry-credentials"})]}),"\n",(0,r.jsx)(t.p,{children:"** 13. The component has accessed the cloud kube-apiserver through yurthub, but the relevant cache data cannot be found in the cache directory on the edge node**"}),"\n",(0,r.jsxs)(t.p,{children:["To reduce the local disk cache load, yurthub only caches components by default ",(0,r.jsxs)(t.a,{href:"https://github.com/openyurtio/openyurt/blob/master/pkg/yurthub/util/util.go#L84",children:[(0,r.jsx)(t.code,{children:"kubelet"}),", ",(0,r.jsx)(t.code,{children:"kube-proxy"}),", ",(0,r.jsx)(t.code,{children:"flannel"}),", ",(0,r.jsx)(t.code,{children:"coredns"}),", ",(0,r.jsx)(t.code,{children:"yurt-tunnel-agent"}),", ",(0,r.jsx)(t.code,{children:"yurthub"}),", ",(0,r.jsx)(t.code,{children:"leader-yurthub"})]})," metadata obtained from the cloud.\nIf the metadata of other components also needs to be cached, enable way is as follows:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Make sure that the HTTP request header sent by this component contains ",(0,r.jsx)(t.code,{children:"User-Agent"})," information, and yurthub will determine the ",(0,r.jsx)(t.code,{children:"{componentName}"})," in the cache directory according to the content before the first ",(0,r.jsx)(t.code,{children:"/"})," in the ",(0,r.jsx)(t.code,{children:"User-Agent header"}),". Component metadata will not be cached when ",(0,r.jsx)(t.code,{children:"User-Agent"})," is empty"]}),"\n",(0,r.jsxs)(t.li,{children:["Manually configure the ",(0,r.jsx)(t.code,{children:"cache_agents"})," field of ",(0,r.jsx)(t.code,{children:"configmap kube-system/yurt-hub-cfg"})," to add ",(0,r.jsx)(t.code,{children:"{componentName}"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["When ",(0,r.jsx)(t.code,{children:'cache_agents: "*"'}),", it means that all components (must have User-Agent header) get metadata from the cloud will be cached. Since many components have a large number of list/watch requests, all caches will put pressure on the local disk, so it is necessary to configure ",(0,r.jsx)(t.code,{children:"*"})," carefully."]}),"\n",(0,r.jsxs)(t.li,{children:["Configure multiple components separated by ",(0,r.jsx)(t.code,{children:","}),". For example, the ",(0,r.jsx)(t.code,{children:"User-Agent header"})," of the two components is ",(0,r.jsx)(t.code,{children:"foo/v1.0.0"})," and ",(0,r.jsx)(t.code,{children:"bar123/v1.0.0"})," respectively. The configuration information is as follows:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'    cache_agents: "foo, bar123"\n'})})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},78957:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/flight-requests-in-yurthub-157930bc6238883bbcafc66294f11720.png"},88540:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/response-traffic-in-yurthub-2b7d371bc2fc30a8370af3e25e5061fc.png"},11151:(e,t,n)=>{n.d(t,{a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);