"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[64045],{17139:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=o(85893),r=o(11151);const i={title:"YurtCoordinator"},s=void 0,d={id:"core-concepts/yurt-coordinator",title:"YurtCoordinator",description:"1. Introduction",source:"@site/versioned_docs/version-v1.3/core-concepts/yurt-coordinator.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurt-coordinator",permalink:"/docs/v1.3/core-concepts/yurt-coordinator",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-coordinator.md",tags:[],version:"v1.3",lastUpdatedBy:"rambohe",lastUpdatedAt:1704125371,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{title:"YurtCoordinator"},sidebar:"docs",previous:{title:"YurtDeviceController",permalink:"/docs/v1.3/core-concepts/yurt-device-controller"},next:{title:"selfhealing from restarting during network disconnection",permalink:"/docs/v1.3/user-manuals/autonomy/selfhealing-during-network-disconnection"}},a={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Concepts",id:"2-concepts",level:2},{value:"2.1 YurtHub Leader Election",id:"21-yurthub-leader-election",level:3},{value:"3. Designs",id:"3-designs",level:2},{value:"3.1 Edge Node Heartbeat Proxy",id:"31-edge-node-heartbeat-proxy",level:3},{value:"3.2 Node Pool Resource Caching and Reuse",id:"32-node-pool-resource-caching-and-reuse",level:3}];function l(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,n.jsx)(t.p,{children:"Yurt-Coordinator provides the following features for edge node pools:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Edge node heartbeat proxy"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In cloud-edge computing scenarios, disconnection between edge nodes and the cloud is the common case. When the cloud does not receive heartbeat from the edge node for a long time, there could be two reasons:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"the cloud-edge network is disconnected but the edge node is still running normally"}),"\n",(0,n.jsx)(t.li,{children:"or the edge node has failed and cannot recover"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In the former case, pods on the edge node are still running normally, and pod eviction should not be performed for the stability. In the latter case, to ensure service availability, pods should be evicted to other healthy edge nodes to continue to provide services. In the original heartbeat framework, it's difficult for the cloud distinguish between them since they look the same. Yurt-Coordinator provides a heartbeat proxy solution, where nodes with healthy cloud-edge network in the node pool are responsible for forwarding disconnected nodes' heartbeat to the cloud with additional information, allowing the cloud to distinguish between these two situations and adopt corresponding strategies."}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Pool-scope resource caching and reuse"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:'In cloud-edge computing scenarios, the network between the cloud and edge is limited and costly. There is a large amount of duplicated resources that edge nodes in the same node pool obtain from the cloud (such as Endpoints and EndpointSlices),and they are what we called "pool-scope resources". Yurt-Coordinator provides pool-scope resource caching and reuse capabilities in node pool. For these duplicated resources, one node pool only needs to pull them once from the cloud, and other edge nodes in this node pool can directly obtain them from the cache, reducing the consumption of cloud-edge bandwidth.'}),"\n",(0,n.jsx)(t.p,{children:"Yurt-Coordinator is essentially a Pod composed of Kube-APIServer and etcd, fully utilizing cloud-native components to enhance the functionality of node pools."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"yurt-coordinator-framework",src:o(24435).Z+"",width:"1270",height:"617"})}),"\n",(0,n.jsx)(t.h2,{id:"2-concepts",children:"2. Concepts"}),"\n",(0,n.jsx)(t.h3,{id:"21-yurthub-leader-election",children:"2.1 YurtHub Leader Election"}),"\n",(0,n.jsx)(t.p,{children:"When Yurt-Coordinator is enabled, all YurtHubs in the node pool will perform Leader election through Yurt-Coordinator. The elected Leader YurtHub is responsible for proxying the heartbeat of disconnected nodes. There are three roles for YurtHubs in the cluster:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Leader YurtHub: YurtHubs that successfully win the Leader election need to maintain connections with both the cloud APIServer and Yurt-Coordinator."}),"\n",(0,n.jsx)(t.li,{children:"Follower YurtHub: YurtHubs that fail to win the Leader election. These YurtHubs will continuously attempt to acquire the leadership."}),"\n",(0,n.jsx)(t.li,{children:"Pending YurtHub: YurtHubs that have not or can not participate in the election. YurtHubs will be in this state initially, or when the Yurt-Coordinator in the node pool is unhealthy, all YurtHubs in the node pool will enter this state."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"yurthub-state",src:o(89088).Z+"",width:"2032",height:"1144"})}),"\n",(0,n.jsx)(t.h2,{id:"3-designs",children:"3. Designs"}),"\n",(0,n.jsx)(t.h3,{id:"31-edge-node-heartbeat-proxy",children:"3.1 Edge Node Heartbeat Proxy"}),"\n",(0,n.jsxs)(t.p,{children:["In the edge node pool, YurtHubs will send heartbeat(NodeLease) to both the cloud APIServer and Yurt-Coordinator while monitoring the cloud-edge network status. When YurtHub detects the disconnection between cloud and edge, it will add an annotation ",(0,n.jsx)(t.code,{children:"openyurt.io/delegate-heartbeat: true"})," to the heartbeat sent to Yurt-Coordinator, indicating that the node cannot independently send heartbeats to the cloud. At the same time, the Leader Yurthub will list/watch NodeLease resources in Yurt-Coordinator, and when it finds a heartbeat with this annotation, it will forward it along with the annotation to the cloud APIServer. The cloud can then distinguish the status of the edge node based on the heartbeat and its annotation:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Node heartbeat is normal and without annotation: The node is running, and the cloud-edge connection is healthy."}),"\n",(0,n.jsx)(t.li,{children:"Node heartbeat is normal but with annotation: The node is running, but the cloud-edge connection is unhealthy."}),"\n",(0,n.jsx)(t.li,{children:"Node heartbeat is missing: The node is faulty."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"32-node-pool-resource-caching-and-reuse",children:"3.2 Node Pool Resource Caching and Reuse"}),"\n",(0,n.jsx)(t.p,{children:"The elected Leader YurtHub in the node pool is responsible for listing/watching pool-scope resources, mainly Endpoints and EndpointSlices, from the cloud. The Leader YurtHub will continuously update these resources and their subsequent changes to the etcd of Yurt-Coordinator. All YurtHubs in the node pool can obtain these resources through Kubernetes native RESTful API from the APIServer of Yurt-Coordinator, avoiding direct pulling from the cloud, thus achieving the goal of resource reuse."}),"\n",(0,n.jsx)(t.p,{children:"Yurt-Coordinator has two kinds of status:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Healthy:"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Yurt-Coordinator is successfully deployed and running, and nodes can update their heartbeat to it. However, at this point, Yurt-Coordinator has not fully cached the pool-scope resources, so it cannot handle requests for these resources."}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Ready:"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Yurt-Coordinator has successfully cached the pool-scope resources, and it can now handle requests for these resources within the node pool."}),"\n",(0,n.jsxs)(t.p,{children:["After synchronizing pool-scope resources with the cloud, the Leader YurtHub will create and continuously update a lease called ",(0,n.jsx)(t.code,{children:"leader-informer-sync"})," in Yurt-Coordinator. Other YurtHubs will monitor this lease, and when they find that the lease exists and has not expired, the requests of pool-scope resources will be sent to Yurt-Coordinator instead of the cloud APIServer."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"cache-and-reuse",src:o(82317).Z+"",width:"1857",height:"507"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},82317:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/yurt-coordinator-cache-and-reuse-74c3711ff6706be32fd167372d64f711.jpg"},24435:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/yurt-coordinator-framework-b5e5ab2603a5ba015c854d65bbef8cce.jpg"},89088:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/yurthub-state-b9d0b9252f003d0edbad5c3c753ac16c.png"},11151:(e,t,o)=>{o.d(t,{Z:()=>d,a:()=>s});var n=o(67294);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);