"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[57372],{93603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=t(85893),s=t(11151);const o={title:"Raven"},i=void 0,c={id:"core-concepts/raven",title:"Raven",description:"1. Background",source:"@site/versioned_docs/version-v0.7.0/core-concepts/raven.md",sourceDirName:"core-concepts",slug:"/core-concepts/raven",permalink:"/docs/v0.7.0/core-concepts/raven",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/raven.md",tags:[],version:"v0.7.0",lastUpdatedBy:"rambohe",lastUpdatedAt:1704125371,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{title:"Raven"},sidebar:"docs",previous:{title:"Architecture",permalink:"/docs/v0.7.0/core-concepts/architecture"},next:{title:"YurtHub",permalink:"/docs/v0.7.0/core-concepts/yurthub"}},d={},a=[{value:"1. Background",id:"1-background",level:2},{value:"2. Architecture",id:"2-architecture",level:2},{value:"3. Features and Advantages",id:"3-features-and-advantages",level:2},{value:"4. Version",id:"4-version",level:2},{value:"5. futures",id:"5-futures",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"1-background",children:"1. Background"}),"\n",(0,r.jsxs)(n.p,{children:["In edge computing, edge-edge and edge-cloud are common network communication scenarios. In OpenYurt, we have introduced ",(0,r.jsx)(n.code,{children:"YurtTunnel"})," to deal with the network problems of maintenance and monitoring in edge-cloud collaboration, providing the capability of ",(0,r.jsx)(n.code,{children:"kubectl exec/logs"})," on edge nodes and collecting monitoring indicators from edge nodes. But the problems solved by ",(0,r.jsx)(n.code,{children:"YurtTunnel"})," are only a part of edge-cloud communication. We also need to provide solutions for edge-edge and edge-cloud container network communication."]}),"\n",(0,r.jsxs)(n.p,{children:["In OpenYurt cluster, pods in different physical regions may need to use Pod IP, Service IP or Service name to communicate with other Pods. Although these pods are in a single K8s cluster, they are in different physical regions (network domains) and cannot communicate directly. So we create ",(0,r.jsx)(n.code,{children:"Raven"})," project to solve this problem."]}),"\n",(0,r.jsx)(n.h2,{id:"2-architecture",children:"2. Architecture"}),"\n",(0,r.jsxs)(n.p,{children:["As following picture, the architecture of ",(0,r.jsx)(n.code,{children:"Raven"})," have two components:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(40751).Z+"",width:"924",height:"566"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Raven Controller Manager"}),"\uff1aThe native Kubernetes controller is deployed in some nodes on the cloud as a ",(0,r.jsx)(n.code,{children:"Deployment"}),", monitoring the status of edge nodes, selecting an egress for cross-edge traffic as a gateway node for each edge node pool. When the current gateway node is dead and other node will be switched. All cross-edge traffic will be forwarded by the gateway node of each edge node pool;"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Raven Agent"}),"\uff1aIt is deployed as a ",(0,r.jsx)(n.code,{children:"DaemonSet"})," and runs on each node of the K8s cluster. It configures route or VPN tunnel on the node according to the role of each node (gateway or non-gateway);"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The above two components are connected by a ",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go",children:"Gateway CRD"})," to exchange routes and VPN tunnels, as shown in the following picture:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(48882).Z+"",width:"1444",height:"756"})}),"\n",(0,r.jsx)(n.p,{children:"For more details, please refer to the code repository of the Raven project:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager",children:"raven-controller-manager"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/raven",children:"raven"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"3-features-and-advantages",children:"3. Features and Advantages"}),"\n",(0,r.jsx)(n.p,{children:"Features:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No intrusion: No intrusion into the native K8s CNI network, only cross-edge traffic is hijacked for forwarding"}),"\n",(0,r.jsxs)(n.li,{children:["Security: Use stable ",(0,r.jsx)(n.code,{children:"IPsec"})," to encrypt cross-edge traffic"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Advantages:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Raven"})," will try to use the network capabilities of the edge itself, create edge-to-edge VPN tunnels as possible, and will not forward all cross-edge traffic through the cloud center"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Raven"})," does not hijack the traffic in the same edge node pool, and keeps the CNI capabilities of the cluster itself"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"4-version",children:"4. Version"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Raven Controller Manager"}),":"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"version"}),(0,r.jsx)(n.th,{children:"image"}),(0,r.jsx)(n.th,{children:"release"}),(0,r.jsx)(n.th,{children:"content"}),(0,r.jsx)(n.th,{children:"comment"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"v0.1.0"}),(0,r.jsxs)(n.td,{children:["openyurt/raven-controller-manager",":v0",".1.0"]}),(0,r.jsx)(n.td,{children:"2022.05"}),(0,r.jsx)(n.td,{children:"first"}),(0,r.jsx)(n.td,{children:"support Gateway Node election"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Raven Agent"}),"\uff1a"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"version"}),(0,r.jsx)(n.th,{children:"image"}),(0,r.jsx)(n.th,{children:"release"}),(0,r.jsx)(n.th,{children:"content"}),(0,r.jsx)(n.th,{children:"comment"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"v0.1.0"}),(0,r.jsxs)(n.td,{children:["openyurt/raven-agent",":v0",".1.0"]}),(0,r.jsx)(n.td,{children:"2022.05"}),(0,r.jsx)(n.td,{children:"first"}),(0,r.jsx)(n.td,{children:"support IPSec"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"5-futures",children:"5. futures"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["support SLB as public network exporter for gateway \u3010",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/raven/issues/22",children:"issue #22"}),"\u3011"]}),"\n",(0,r.jsxs)(n.li,{children:["support NAT traversal \u3010",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/raven/issues/13",children:"issue #13"}),"\u3011"]}),"\n",(0,r.jsxs)(n.li,{children:["support distribute route path decision \u3010",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/raven/issues/14",children:"issue #14"}),"\u3011","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"route path cost evaluation"}),"\n",(0,r.jsx)(n.li,{children:"shortest path decision"}),"\n",(0,r.jsx)(n.li,{children:"keep networking connection alive during paths change"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Interested students are welcome to join us and contribute code!"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},48882:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/raven-sequence-diag-21e979ba2e0c41f82407121704b13eb7.png"},40751:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/raven-017b384aa3ec05a762c21c4370c73174.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var r=t(67294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);