"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[10260],{7755:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"best-practices/practices-1","title":"Cloud-Edge-Device DevOps Collaboration","description":"Background","source":"@site/versioned_docs/version-v1.2/best-practices/practices-1.md","sourceDirName":"best-practices","slug":"/best-practices/practices-1","permalink":"/docs/v1.2/best-practices/practices-1","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/best-practices/practices-1.md","tags":[],"version":"v1.2","lastUpdatedBy":"tnsimon","lastUpdatedAt":1732695729000,"frontMatter":{"title":"Cloud-Edge-Device DevOps Collaboration"},"sidebar":"docs","previous":{"title":"Optimize the pods recovery efficiency when edge nodes restart","permalink":"/docs/v1.2/test-report/pod-recover-efficiency-test"},"next":{"title":"How to Build and Test","permalink":"/docs/v1.2/developer-manuals/how-to-build-and-test"}}');var o=i(74848),s=i(28453);const r={title:"Cloud-Edge-Device DevOps Collaboration"},a=void 0,c={},d=[{value:"Background",id:"background",level:2},{value:"cloud edge coordination",id:"cloud-edge-coordination",level:2},{value:"Business value",id:"business-value",level:2}];function l(e){const t={h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,o.jsx)(t.p,{children:"Express delivery industry is a typical entity industry, providing point-to-point parcel transport services, derived  the acquisition, transfer and delivery links. With the positive economic development of the society, the volume of the express industry is growing. Shentong Express daily transfers 30 to 50 million packages, with an average daily track of about 500 million, nearly 1 billion during the promotion period. Automated sorting daily delivers more than 1 billion pieces of data, cross with hundreds of sets, the growth rate is estimated to be more than 20% per year, the future express must be digital system express, involving a large number of automation, IoT and human-machine assistance system interaction."}),"\n",(0,o.jsx)(t.p,{children:"In the traditional cloud-end architecture, the transfer link has a strong edge characteristics. The current situation of traditional cloud - to - end architecture cannot meet the requirements of actual side - end scenarios. And these problems are the common problems of each domain. A hybrid cloud architecture with high availability, high stability and scalability for mass device access is urgently needed."}),"\n",(0,o.jsx)(t.p,{children:"In the context of the rapid development and application of IoT and edge technology, the Paas platform on pure cloud is difficult to meet the strong demands of high response, low delay and large connection of the edge. Then, we adopt OpenYurt platform as the core of the edge architecture of STO Express IoT cloud, carrying edge resource hosting and application management."}),"\n",(0,o.jsx)(t.h2,{id:"cloud-edge-coordination",children:"cloud edge coordination"}),"\n",(0,o.jsx)(t.p,{children:"Where is the cloud side synergy capability of STO Express IoT cloud side architecture, and what are the advantages? The cloud-side collaboration architecture mainly uses OpenYurt to provide containerized isolation environment. Master clusters are uniformly deployed in the public cloud and Nodes are distributed to the edge (distributed in transport centers across the country). The edge development of STO Express is completely consistent with the cloud R&D system. Edge containers are generated with one click when releasing edge applications, and the PaaS platform provides unified deployment, log monitoring and other cloud management and control capabilities."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"flannel-architecture",src:i(84923).A+"",width:"1126",height:"1078"})}),"\n",(0,o.jsx)(t.p,{children:"On top of this, STO Express developed edge Paas platform for DevOps. In terms of edge resource control, STO Express divides four available areas for deployment according to the distribution of centers and real-time RT statistics, namely east China, southwest China, North China and South China. Developers can configure alarms and implement second-level service monitoring to quickly discover and handle faults."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"architecture",src:i(50710).A+"",width:"1103",height:"868"})}),"\n",(0,o.jsx)(t.h2,{id:"business-value",children:"Business value"}),"\n",(0,o.jsx)(t.p,{children:"STO Express IoT cloud side architecture is the first implementation scheme in the express industry about cloud native architecture. It provides a research and development model that is completely consistent with the on-cloud  development system. With OpenYurt as the technical base, it realizes the unified management of on-cloud and off-cloud resources and lays a solid hybrid cloud foundation."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"High availability"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Multiple environment isolation"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"The value of cloud edge coordination architecture:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Stability increased from 99.9% to 99.95%."}),"\n",(0,o.jsx)(t.li,{children:"Reduce waste of resources."}),"\n",(0,o.jsx)(t.li,{children:"Consistent with cloud application development efficiency and experience."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},50710:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/architecture-7286811f9736df3e95245cae161fbd50.png"},84923:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/flannel-architecture-8ff678588806991eb06a5367037069e8.png"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(96540);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);