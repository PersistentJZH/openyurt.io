"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[77446],{52605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(85893),r=n(11151);const i={title:"YurtHub Performance Test"},d=void 0,o={id:"test-report/yurthub-performance-test",title:"YurtHub Performance Test",description:"Background",source:"@site/versioned_docs/version-v1.4/test-report/yurthub-performance-test.md",sourceDirName:"test-report",slug:"/test-report/yurthub-performance-test",permalink:"/docs/test-report/yurthub-performance-test",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/test-report/yurthub-performance-test.md",tags:[],version:"v1.4",lastUpdatedBy:"Lixx",lastUpdatedAt:1713521278e3,frontMatter:{title:"YurtHub Performance Test"},sidebar:"docs",previous:{title:"EdgeX Foundry",permalink:"/docs/user-manuals/iot/edgex-foundry"},next:{title:"Yurt-Coordinator Performance Test",permalink:"/docs/test-report/yurt-coordinator-test"}},l={},c=[{value:"Background",id:"background",level:2},{value:"Test Environment",id:"test-environment",level:2},{value:"Kubernetes Version",id:"kubernetes-version",level:3},{value:"OpenYurt Version",id:"openyurt-version",level:3},{value:"Node Configuration",id:"node-configuration",level:3},{value:"Operating System",id:"operating-system",level:4},{value:"CPU",id:"cpu",level:4},{value:"Memory",id:"memory",level:4},{value:"Disk",id:"disk",level:4},{value:"Test Method",id:"test-method",level:2},{value:"Test Result",id:"test-result",level:2},{value:"Traffic",id:"traffic",level:3},{value:"Latency",id:"latency",level:3},{value:"Memory",id:"memory-1",level:3},{value:"CPU",id:"cpu-1",level:3},{value:"Conclusion and Analysis",id:"conclusion-and-analysis",level:2}];function a(e){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,s.jsx)(t.p,{children:"On the one hand, YurtHub is an important component of OpenYurt\uff0cproviding the additional abstraction, taking over the traffic from edge to cloud, and supporting the key abilities of Node Autonomy, Flow Closed Loop, and so on. On the other hand, lots of the cloud native scenarios are troubled by the resource limitation of the edge node, as the important component of OpenYurt, the performance of YurtHub in different situation play an influential role in the cluster of OpenYurt. Therefore, we need to obtain deeper understanding on the performance of YurtHub."}),"\n",(0,s.jsx)(t.h2,{id:"test-environment",children:"Test Environment"}),"\n",(0,s.jsx)(t.h3,{id:"kubernetes-version",children:"Kubernetes Version"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'Major:"1", Minor:"22", GitVersion:"v1.22.12", GitCommit:"b058e1760c79f46a834ba59bd7a3486ecf28237d", GitTreeState:"clean", BuildDate:"2022-07-13T14:53:39Z", GoVersion:"go1.16.15", Compiler:"gc", Platform:"linux/amd64"'})}),"\n",(0,s.jsx)(t.h3,{id:"openyurt-version",children:"OpenYurt Version"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'GitVersion:"v0.7.0", GitCommit:"d331a42", BuildDate:"2022-08-29T13:33:43Z", GoVersion:"go1.17.12", Compiler:"gc", Platform:"linux/amd64"'})}),"\n",(0,s.jsx)(t.h3,{id:"node-configuration",children:"Node Configuration"}),"\n",(0,s.jsxs)(t.p,{children:["Master and WorkNode use the ECSs with different configurations, and the used cluster contains one master and other one hundred worknodes. All worknodes join the cluster by using the command ",(0,s.jsx)(t.code,{children:"yurtadm"})," on edge mode."]}),"\n",(0,s.jsx)(t.h4,{id:"operating-system",children:"Operating System"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Master"}),(0,s.jsx)(t.th,{children:"Node"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LSB Version"}),(0,s.jsxs)(t.td,{children:[":core-4",".1-amd64",":core-4",".1-noarch"]}),(0,s.jsxs)(t.td,{children:[":core-4",".1-amd64",":core-4",".1-noarch"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Distributor ID"}),(0,s.jsx)(t.td,{children:"CentOS"}),(0,s.jsx)(t.td,{children:"CentOS"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"CentOS Linux release 7.9.2009 (Core)"}),(0,s.jsx)(t.td,{children:"CentOS Linux release 7.9.2009 (Core)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Release"}),(0,s.jsx)(t.td,{children:"7.9.2009"}),(0,s.jsx)(t.td,{children:"7.9.2009"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Codename"}),(0,s.jsx)(t.td,{children:"Core"}),(0,s.jsx)(t.td,{children:"Core"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"cpu",children:"CPU"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Master"}),(0,s.jsx)(t.th,{children:"Node"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Architecture"}),(0,s.jsx)(t.td,{children:"x86_64"}),(0,s.jsx)(t.td,{children:"x86_64"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CPU op-mode (s)"}),(0,s.jsx)(t.td,{children:"32-bit, 64-bit"}),(0,s.jsx)(t.td,{children:"32-bit, 64-bit"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Byte Order"}),(0,s.jsx)(t.td,{children:"Little Endian"}),(0,s.jsx)(t.td,{children:"Little Endian"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CPU (s)"}),(0,s.jsx)(t.td,{children:"8"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"On-line CPU(s) list"}),(0,s.jsx)(t.td,{children:"0-7"}),(0,s.jsx)(t.td,{children:"0,1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread(s) per core"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Core(s) per socket"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:"4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Socket(s)"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NUMA node(s)"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Vendor ID"}),(0,s.jsx)(t.td,{children:"GenuineIntel"}),(0,s.jsx)(t.td,{children:"GenuineIntel"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CPU family"}),(0,s.jsx)(t.td,{children:"6"}),(0,s.jsx)(t.td,{children:"6"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Model"}),(0,s.jsx)(t.td,{children:"106"}),(0,s.jsx)(t.td,{children:"106"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Model name"}),(0,s.jsx)(t.td,{children:"Intel(R) Xeon(R) Platinum 8369B CPU @ 2.70GHz"}),(0,s.jsx)(t.td,{children:"Intel(R) Xeon(R) Platinum 8369B CPU @ 2.70GHz"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Stepping"}),(0,s.jsx)(t.td,{children:"6"}),(0,s.jsx)(t.td,{children:"6"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CPU MHz"}),(0,s.jsx)(t.td,{children:"2699.998"}),(0,s.jsx)(t.td,{children:"2699.998"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"memory",children:"Memory"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Master"}),(0,s.jsx)(t.th,{children:"Node"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Total memory"}),(0,s.jsx)(t.td,{children:"32245896 K"}),(0,s.jsx)(t.td,{children:"7862304 K"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"disk",children:"Disk"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Master"}),(0,s.jsx)(t.th,{children:"Node"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Total Size"}),(0,s.jsx)(t.td,{children:"40GiB (3800 IOPS)"}),(0,s.jsx)(t.td,{children:"40GiB (3800 IOPS)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:"ESSD Cloud Disk PL0"}),(0,s.jsx)(t.td,{children:"ESSD Cloud Disk PL1"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"test-method",children:"Test Method"}),"\n",(0,s.jsx)(t.p,{children:"Through Promethus collecting three types of indicators from the edge side in the OpenYurt cluster."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Resource Occupation\uff1aYurtHub container CPU/Mem usage"}),"\n",(0,s.jsx)(t.li,{children:"Data Traffic\uff1aYurtHub forward the traffic of request"}),"\n",(0,s.jsx)(t.li,{children:"Request Delay\uff1athe delay of YurtHub forwarding request"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The overall test architecture is shown in the following figure\n",(0,s.jsx)(t.img,{src:n(1618).Z+"",width:"3723",height:"2014"})]}),"\n",(0,s.jsx)(t.h2,{id:"test-result",children:"Test Result"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"15:00-19:00 worknodes join successively\n19:30 creating 2000 Pod\uff0c 1000 Service (deploying by Daemonset format, per node deploys 20 Pods, per Service contains 50 Endpoints)\n19:35 all resources creating complete\n21:06 delete all resources"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"traffic",children:"Traffic"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:n(88420).Z+"",width:"2760",height:"1104"}),"\nThe above picture is the whole performance of request traffic of YurtHub in the scenario of 100 edge nodes, and the following features can be observed:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"In normal situation, traffic data have a wave of 5min period, and peak ranges 15-20 KB/s"}),"\n",(0,s.jsx)(t.li,{children:"In the process of workload deploying, traffic booms one time, and peak is 350 KB/s"}),"\n",(0,s.jsx)(t.li,{children:"In the process of workload downloading, traffic alse booms one time, having shorter duration time and higher peak about 780 KB/s"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For further exploration of the source of traffic, we select one machine to analyze the traffic usage\n",(0,s.jsx)(t.img,{src:n(97824).Z+"",width:"2760",height:"1114"}),"\nThe above figure shows the usage of traffic as workload deploying, we can get the rank of usage orderly when traffic mutating:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"endpointslices, watch, 240 KB/s"}),"\n",(0,s.jsx)(t.li,{children:"endpoints, watch, 50 KB/s"}),"\n",(0,s.jsx)(t.li,{children:"services, watch, 25 KB/s"}),"\n",(0,s.jsx)(t.li,{children:"nodes, watch, 24 KB/s"}),"\n",(0,s.jsx)(t.li,{children:"pod, watch, 3 KB/s"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The peak of traffic of machine is approximately 320 KB/s, and those traffic contain mostly watch requests about service. The count of endpoint in service(per service 50 endpoints) may cause such situation. In normal case, the watch request about nodes also causes the variety of traffic of 5min period."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:n(34271).Z+"",width:"2760",height:"1114"}),"\nThe above figure show the performance of traffic of machine in the process of uninstalling, total peak of traffic reach about 780k. Sorting by resource and action, the usage of traffic as the following data show:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"endpointslices, watch, 540 KB/s"}),"\n",(0,s.jsx)(t.li,{children:"service, watch, 140 KB/s"}),"\n",(0,s.jsx)(t.li,{children:"endpoints, watch, 100 KB/s"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"latency",children:"Latency"}),"\n",(0,s.jsx)(t.p,{children:"When collecting latency, we conclude two types latency:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Full_latency\uff1arecord the total time from request reaching YurtHub to request leaving YurtHub"}),"\n",(0,s.jsx)(t.li,{children:"Apiserver_latency\uff1arecord the time from request forwarded by YurtHub to apiserver"}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"In the procedure of actual testing, two types latency have no difference, so we have full_latency as standard"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The following figure show the situation of time spending mostly in the request per type as we see from verb:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Delete"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(80068).Z+"",width:"2760",height:"1374"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Create"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(81893).Z+"",width:"2270",height:"1120"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"List"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(60489).Z+"",width:"2280",height:"1120"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Update"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(42679).Z+"",width:"2284",height:"1122"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Patch"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(71034).Z+"",width:"2284",height:"1122"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Get"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:n(51691).Z+"",width:"2284",height:"1128"}),"\nWe can see the most time-spending requests mainly are the request of create/get/list about node and the request of list about service."]}),"\n",(0,s.jsx)(t.h3,{id:"memory-1",children:"Memory"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:n(50192).Z+"",width:"2738",height:"1128"}),"\nIn the initial state, before workload deploying, the memory occupation of YurtHub mostly ranges 35-40MB. Two machines use memory mostly, because the monitor suite of Prometheus deploy on those. The bottom line show the variety of YurtHub which is deployed on master by cloud mode. At 19:30 per node deployed 20 Pods, the memory of node improve about 2-5MB, and sustain such level. After workload is deleted, the memory reduce 10MB obviously, and recover to the previous level."]}),"\n",(0,s.jsx)(t.h3,{id:"cpu-1",children:"CPU"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:n(46485).Z+"",width:"2738",height:"1128"}),"\nThe occupation of single core CPU is similar to the usage of traffic, normally periodic wave sustains a low level(approximately 0.02%), two peaks of wave show at times of workload deploying\uff0822%\uff09and workload deleting\uff0825%\uff09."]}),"\n",(0,s.jsx)(t.h2,{id:"conclusion-and-analysis",children:"Conclusion and Analysis"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Without the pressure of workload, YurtHub occupys memory of approximately 30-40MB and rare CPU\uff08< 0.02\uff09.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"CPU mainly apply to handle the request received by YurtHub, and the peak of single core occupation could reach about 25% when resource creating."}),"\n",(0,s.jsx)(t.li,{children:"The level of memory is related to the distribution of workload, and varies about 5MB when resource is created and deleted. After all workloads are deleted, memory occupation of YurtHub reduces largely then back to previous level, and specific causes waits to be analysed."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"The usage of YurtHub traffic shows, in the procedure of resource creating and destroying, lots of requests spring(respectively 350 KB/s and 780 KB/s) in short time, among most traffic come from watch requests related to service(endpointslice, endpoint, service)."}),"\n",(0,s.jsx)(t.li,{children:"The delay in the procedure of YurtHub forwarding request can be ignored comparing to request itself, and the delay of request mainly is related to the size of request resource."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1618:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/arch-f8eb4bdbe31ba09a2c15061ef8ad75ed.png"},46485:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/cpu-b8f746ad52c5739cdd0d5931bc9a2513.png"},81893:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/latency_create-b08fb4890229c923ba659c23c123a4ab.png"},80068:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/latency_delete-9d3195b430ca6abc055f05e1a69d9549.png"},51691:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/latency_get-9df1497258c150bb9dd0e4c96d00d6b5.png"},60489:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/latency_list-0ea664db1c346e06c4f7c7469d5d7d5b.png"},71034:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/latency_patch-f39378ed83d74237fd3c8b4aea653d36.png"},42679:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/latency_update-a4388a59020d9fcebde029f5b1c852d3.png"},50192:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/mem-d7d6115a99f6595391ae6eb19a65241d.png"},88420:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/traffic-bf646205ee7c9c356cc09240b0e01cbd.png"},97824:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/traffic_create-1375c3f28b5c883f57e991ff72552886.png"},34271:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/traffic_delete-b717eec23e4e18268799c87fe12e89b1.png"},11151:(e,t,n)=>{n.d(t,{a:()=>d});var s=n(67294);const r={},i=s.createContext(r);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);