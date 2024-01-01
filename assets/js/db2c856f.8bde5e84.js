"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[95636],{60033:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=r(85893),t=r(11151);const i={title:"Architecture"},s=void 0,l={id:"core-concepts/architecture",title:"Architecture",description:"Below is the architecture of OpenYurt.",source:"@site/versioned_docs/version-v1.1/core-concepts/architecture.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture",permalink:"/docs/v1.1/core-concepts/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/architecture.md",tags:[],version:"v1.1",lastUpdatedBy:"rambohe",lastUpdatedAt:1704125371,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{title:"Architecture"},sidebar:"docs",previous:{title:"Join Nodes",permalink:"/docs/v1.1/installation/yurtadm-join"},next:{title:"Raven",permalink:"/docs/v1.1/core-concepts/raven"}},c={},d=[{value:"Node category",id:"node-category",level:3},{value:"Traffic from edge to cloud kube-apiserver",id:"traffic-from-edge-to-cloud-kube-apiserver",level:3},{value:"Traffic from cloud to edge",id:"traffic-from-cloud-to-edge",level:3},{value:"OpenYurt Components",id:"openyurt-components",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Below is the architecture of OpenYurt."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"img",src:r(62857).Z+"",width:"1750",height:"1110"})}),"\n",(0,o.jsx)(n.p,{children:"The blue box represents the original Kubernetes components, and the orange box represents the OpenYurt components."}),"\n",(0,o.jsx)(n.h3,{id:"node-category",children:"Node category"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Cloud Node\uff1aThe nodes running in cloud side, connecting to master with cloud intranet. Centralized control plane components are deployed in cloud side. The nodes are labeled with ",(0,o.jsx)(n.code,{children:"openyurt.io/is-edge-worker: false"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Edge Node\uff1aThe nodes running in edge side, connecting to master with public internet. They are usually close to edge production environment, and thus contains the mainly edge workloads. The nodes are labeled with ",(0,o.jsx)(n.code,{children:"openyurt.io/is-edge-worker: true"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"traffic-from-edge-to-cloud-kube-apiserver",children:"Traffic from edge to cloud kube-apiserver"}),"\n",(0,o.jsx)(n.p,{children:"YurtHub manages the network traffic from edge to cloud kube-apiserver and caches cloud data.\nComponents in edge nodes such as kubelet, kube-proxy and flannel access the cloud kube-apiserver via YurtHub.\nWhen the edge nodes are disconnected from cloud, the caches are used to resume status to avoid workload disruption."}),"\n",(0,o.jsx)(n.h3,{id:"traffic-from-cloud-to-edge",children:"Traffic from cloud to edge"}),"\n",(0,o.jsxs)(n.p,{children:["YurtTunnel manages the network traffic from cloud to edge.\nIn most cases, edge nodes are running in private network, and are not directly accessible from cloud.\nYurtTunnel consists of cloud side ",(0,o.jsx)(n.code,{children:"tunnel-server"})," and edge side ",(0,o.jsx)(n.code,{children:"tunnel-agent"}),", which form a secure and reliable reverse tunnel.\nWith this feature, it's easily to send operate instructions from cloud to edge, such as ",(0,o.jsx)(n.code,{children:"kubectl exec"}),", ",(0,o.jsx)(n.code,{children:"kubectl logs"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"openyurt-components",children:"OpenYurt Components"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Raven-Controller-Manager/Raven:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Raven is component of the OpenYurt to enhance cluster networking capabilities. This enhancement is focused on edge-edge and edge-cloud communication in OpenYurt.\nIn short, it will provide layer 3 network connectivity among pods in different physical regions, as there are in one vanilla Kubernetes cluster."}),"\n",(0,o.jsx)(n.li,{children:"Deployment pattern: Deployment for Raven-Controller-Manager in cloud nodes, DaemonSet for Raven in all nodes."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"YurtHub:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"YurtHub is a sidecar in node level, it performs the role of traffic proxy between kube nodes and kube-apiserver.\nIt has two running modes: edge and cloud. In edge mode, it will cache the data returned from cloud, and store in local disk."}),"\n",(0,o.jsx)(n.li,{children:"Deployment pattern: Static pod in each node."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"YurtControllerManager\uff1a"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"YurtControllerManager is centralized controller, which consists of NodeLifeCycle Controller(for not evicting pods in autonomy nodes) and YurtCSRController(for approval of edge certificates)."}),"\n",(0,o.jsx)(n.li,{children:"Deployment pattern: Deployment in cloud nodes."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"YurtAppManager:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"YurtAppManager is application controller for managing cross region workloads. It consists of the management of Nodepools(node groups), YurtAppSet(previous named UnitedDeployment)(nodepool level workloads), YurtAppDaemon(nodepool level daemonset), and YurtIngress(nodepool level ingress)."}),"\n",(0,o.jsx)(n.li,{children:"Deployment pattern: Deployment in cloud nodes."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"YurtTunnel(Server/Agent):"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"YurtTunnel constructs a secure and reliable edge-tunnel reverse tunnel, for forwarding cloud to edge operation traffic."}),"\n",(0,o.jsx)(n.li,{children:"Deployment pattern: Deployment for YurtTunnel Server in cloud nodes, DaemonSet for YurtTunnel Agent in edge nodes."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"YurtDeviceController/YurtEdgeXManager:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"YurtDeviceController and YurtEdgeXManager manage edge devices in cloud native way, they combine EdgeX Foundry and OpenYurt seamlessly, providing IOT solutions in an easy, efficient way."}),"\n",(0,o.jsx)(n.li,{children:"Deployment pattern: Deployment for YurtEdgeXManager in cloud nodes, YurtAppSet for YurtDeviceController in each edge nodepool."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NodeResourceManager:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"NodeResourceManager manages local resources in cluster nodes, user can modify the local resource definitions with configmap dynamically."}),"\n",(0,o.jsx)(n.li,{children:"Deployment pattern: DaemonSet in Edge nodes."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},62857:(e,n,r)=>{r.d(n,{Z:()=>o});const o=r.p+"assets/images/arch-2c77ff23e9b7f4fe4956fe22700f5c0c.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var o=r(67294);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);