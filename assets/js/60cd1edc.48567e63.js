"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[84248],{72171:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=o(85893),d=o(11151);const i={title:"pod node binding"},a=void 0,s={id:"user-manuals/autonomy/node-pod-binding",title:"pod node binding",description:"Background introduction",source:"@site/versioned_docs/version-v1.4/user-manuals/autonomy/node-pod-binding.md",sourceDirName:"user-manuals/autonomy",slug:"/user-manuals/autonomy/node-pod-binding",permalink:"/docs/user-manuals/autonomy/node-pod-binding",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/autonomy/node-pod-binding.md",tags:[],version:"v1.4",lastUpdatedBy:"LofiSu",lastUpdatedAt:172404878e4,frontMatter:{title:"pod node binding"},sidebar:"docs",previous:{title:"heartbeat delegation for disconnected nodes",permalink:"/docs/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes"},next:{title:"Raven",permalink:"/docs/user-manuals/network/raven"}},r={},c=[{value:"Background introduction",id:"background-introduction",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Note",id:"note",level:2}];function l(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"background-introduction",children:"Background introduction"}),"\n",(0,t.jsx)(n.p,{children:"Some edge services require that Pods not be evicted in the event of a node failure, but that a specific Pod be bound to a specific node. For example, the application of image processing needs to be bound to the machine corresponding to the camera, and the application of intelligent transportation needs to be fixed to the machine at a certain intersection."}),"\n",(0,t.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsx)(n.p,{children:"Users can enable/disable binding feature by following steps."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Add Binding Annotation to Node"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Users can add binding annotation: ",(0,t.jsx)(n.code,{children:"apps.openyurt.io/binding=true"}),"(node.beta.openyurt.io/autonomy=true is deprecated) to nodes to enable the Edge Binding feature, and all Pods on the node will be bound to that node and will not be affected by the cloud-edge network."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# enable Edge Binding on node1\nkubectl annotate nodes node1 apps.openyurt.io/binding=true\n"})}),"\n",(0,t.jsx)(n.p,{children:"There're following two ways to disable the Edge Binding of node."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# remove the binding annotation\nkubectl annotate nodes node1 apps.openyurt.io/binding-\n# set the value of binding annotation as false\nkubectl annotate --overwrite nodes node1 apps.openyurt.io/binding=false\n"})}),"\n",(0,t.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Edge Node After the node binding function is enabled,  pods on edge nodes will not be evicted, no matter the node NotReady caused by cloud edge network disconnection or node fault."}),"\n",(0,t.jsx)(n.li,{children:"Node binding is not recommended for cloud nodes. If enabled, pods cannot be evicted and rescheduled when the cloud node is NotReady."}),"\n",(0,t.jsx)(n.li,{children:"After OpenYurt version 1.2.0, if a Yurt-Coordinator is enabled, edge nodes can maintain the Ready state even when the cloud edge network is disconnected using the heartbeat proxy mechanism. In this case, the node binding capability ensures that NotReady service Pods will not be evicted even if the node fails."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>a});var t=o(67294);const d={},i=t.createContext(d);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);