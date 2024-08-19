"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[77811],{1882:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=o(85893),t=o(11151);const s={title:"Architecture"},i=void 0,c={id:"core-concepts/architecture",title:"Architecture",description:"Below is the architecture of OpenYurt.",source:"@site/versioned_docs/version-v0.6.0/core-concepts/architecture.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture",permalink:"/docs/v0.6.0/core-concepts/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/architecture.md",tags:[],version:"v0.6.0",lastUpdatedBy:"LofiSu",lastUpdatedAt:172404878e4,frontMatter:{title:"Architecture"},sidebar:"docs",previous:{title:"Manually Setup",permalink:"/docs/v0.6.0/installation/manually-setup"},next:{title:"YurtHub",permalink:"/docs/v0.6.0/core-concepts/yurthub"}},l={},d=[{value:"Node category",id:"node-category",level:3},{value:"Traffic from edge to cloud apiserver",id:"traffic-from-edge-to-cloud-apiserver",level:3},{value:"Traffic from cloud to edge",id:"traffic-from-cloud-to-edge",level:3},{value:"OpenYurt Components",id:"openyurt-components",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Below is the architecture of OpenYurt."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:o(62857).Z+"",width:"1750",height:"1110"})}),"\n",(0,r.jsx)(n.p,{children:"The blue box represents the original Kubernetes components, and the orange box represents the OpenYurt components."}),"\n",(0,r.jsx)(n.h3,{id:"node-category",children:"Node category"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Cloud Nodes: The nodes running in cloud side, connecting to masters with cloud intranet. Centralized control plane components are deployed in cloud side. The nodes are labeled with ",(0,r.jsx)(n.code,{children:"openyurt.io/is-edge-worker: false"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Edge Nodes: The nodes running in edge side, connecting to masters with public internet. They are usually close to edge production environment, and thus contains the mainly edge workloads. The nodes are labeled with ",(0,r.jsx)(n.code,{children:"openyurt.io/is-edge-worker: true"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"traffic-from-edge-to-cloud-apiserver",children:"Traffic from edge to cloud apiserver"}),"\n",(0,r.jsx)(n.p,{children:"YurtHub manages the network traffic from edge to cloud apiserver and caches cloud data.\nComponents in edge nodes such as kubelet, kube-proxy and flannel access the cloud apiserver via YurtHub.\nWhen the edge nodes are disconnected from cloud, the caches are used to resume status to avoid workload disruption."}),"\n",(0,r.jsx)(n.h3,{id:"traffic-from-cloud-to-edge",children:"Traffic from cloud to edge"}),"\n",(0,r.jsxs)(n.p,{children:["YurtTunnel manages the network traffic from cloud to edge.\nIn most cases, edge nodes are running in private network, and are not directly accessible from cloud.\nYurtTunnel consists of cloud side ",(0,r.jsx)(n.code,{children:"tunnel-server"})," and edge side ",(0,r.jsx)(n.code,{children:"tunnel-agent"}),", which form a secure and reliable reverse tunnel.\nWith this feature, it's easily to send operate instructions from cloud to edge, such as ",(0,r.jsx)(n.code,{children:"kubectl exec"}),", ",(0,r.jsx)(n.code,{children:"kubectl logs"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"openyurt-components",children:"OpenYurt Components"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"YurtHub:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"YurtHub is a sidecar in node level, it performs the role of traffic proxy between kube nodes and kube-apiserver.\nIt has two running modes: edge and cloud. In edge mode, it will cache the data returned from cloud, and store in local disk."}),"\n",(0,r.jsx)(n.li,{children:"Deployment method: Static pod in each node."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"YurtControllerManager\uff1a"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"YurtControllerManager is centralized controller, which consists of NodeLifeCycle Controller(for not evicting pods in autonomy nodes) and YurtCSRController(for approval of edge certificates)."}),"\n",(0,r.jsx)(n.li,{children:"Deployment method: Deployment in cloud nodes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"YurtAppManager:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"YurtAppManager is application controller for managing cross region workloads. It consists of the management of Nodepools(node groups), YurtAppSet(nodepool level workloads), YurtAppDaemon(nodepool level daemonset), and YurtIngress(nodepool level ingress)."}),"\n",(0,r.jsx)(n.li,{children:"Deployment method: Deployment in cloud nodes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"YurtTunnel(Server/Agent):"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"YurtTunnel constructs a secure and reliable edge-tunnel reverse tunnel, for forwarding cloud to edge operation traffic."}),"\n",(0,r.jsx)(n.li,{children:"Deployment method: Deployment for YurtTunnel Server in cloud nodes, DaemonSet for YurtTunnel Agent in edge nodes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"YurtDeviceController/YurtEdgeXManager:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"YurtDeviceController and YurtEdgeXManager manage edge devices in cloud native way, they combine EdgeX Foundry and OpenYurt seamlessly, providing IOT solutions in an easy, efficient way."}),"\n",(0,r.jsx)(n.li,{children:"Deployment method: Deployment for YurtEdgeXManager in cloud nodes, YurtAppSet for YurtDeviceController in each edge nodepool."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NodeResourceManager:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NodeResourceManager manages local resources in cluster nodes, user can modify the local resource definitions with configmap dynamically."}),"\n",(0,r.jsx)(n.li,{children:"Deployment method: DaemonSet in Edge nodes."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},62857:(e,n,o)=>{o.d(n,{Z:()=>r});const r=o.p+"assets/images/arch-2c77ff23e9b7f4fe4956fe22700f5c0c.png"},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>i});var r=o(67294);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);