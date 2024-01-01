"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[99685],{53531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(85893),r=t(11151);const i={title:"selfhealing from restarting during network disconnection"},s=void 0,a={id:"user-manuals/autonomy/selfhealing-during-network-disconnection",title:"selfhealing from restarting during network disconnection",description:"Background introduction",source:"@site/docs/user-manuals/autonomy/selfhealing-during-network-disconnection.md",sourceDirName:"user-manuals/autonomy",slug:"/user-manuals/autonomy/selfhealing-during-network-disconnection",permalink:"/docs/next/user-manuals/autonomy/selfhealing-during-network-disconnection",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/autonomy/selfhealing-during-network-disconnection.md",tags:[],version:"current",lastUpdatedBy:"rambohe",lastUpdatedAt:1704125371,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{title:"selfhealing from restarting during network disconnection"},sidebar:"docs",previous:{title:"NodeResourceManager",permalink:"/docs/next/core-concepts/node-resource-manager"},next:{title:"heartbeat delegation for disconnected nodes",permalink:"/docs/next/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes"}},d={},c=[{value:"Background introduction",id:"background-introduction",level:2},{value:"Architecture design",id:"architecture-design",level:2},{value:"How to use",id:"how-to-use",level:2}];function u(e){const n={a:"a",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"background-introduction",children:"Background introduction"}),"\n",(0,o.jsx)(n.p,{children:"Under the original Kubernetes architecture, the container information of Slave Agent(Kubelet) is stored in the memory, and the business data cannot be obtained from the cloud when the network is disconnected. If the edge node or the edge node's Kubelet restarts abnormally, they will not be able to recover the business container."}),"\n",(0,o.jsx)(n.h2,{id:"architecture-design",children:"Architecture design"}),"\n",(0,o.jsxs)(n.p,{children:["OpenYurt introduces an important component in edge side \u2014\u2014 ",(0,o.jsx)(n.a,{href:"/docs/next/core-concepts/yurthub",children:"YurtHub"}),". YurtHub's used to provide web caching and request proxies on edge nodes through which system components on the node (such as kubelet) as well as business containers and cloud communications will be brokered. In the case of offline, tasks on the edge side can be recovered without relying on cloud data through local cache."]}),"\n",(0,o.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,o.jsxs)(n.p,{children:["The network disconnection self-healing ability is provided by the YurtHub component. All nodes with YurtHub (in Edge mode) installed automatically support this function. Node joined with ",(0,o.jsx)(n.a,{href:"/docs/next/installation/yurtadm-join",children:"yurtadm"})," will automatically have YurtHub installed. Otherwise, you need to manually install the YurtHub component."]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(67294);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);