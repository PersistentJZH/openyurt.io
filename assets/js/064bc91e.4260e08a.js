"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[14350],{47880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(85893),o=n(11151);const s={title:"yurtadm"},i=void 0,d={id:"faq/yurtadm",title:"yurtadm",description:"1. yurtadm join error: crictl not found in system path",source:"@site/versioned_docs/version-v1.3/faq/yurtadm.md",sourceDirName:"faq",slug:"/faq/yurtadm",permalink:"/docs/v1.3/faq/yurtadm",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq/yurtadm.md",tags:[],version:"v1.3",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1705823197,formattedLastUpdatedAt:"Jan 21, 2024",frontMatter:{title:"yurtadm"},sidebar:"docs",previous:{title:"yurthub",permalink:"/docs/v1.3/faq/yurthub"},next:{title:"yurt-tunnel",permalink:"/docs/v1.3/faq/yurt-tunnel"}},a={},c=[];function l(e){const t={a:"a",code:"code",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"1. yurtadm join error: crictl not found in system path"})}),"\n",(0,r.jsx)(t.p,{children:"The node has not installed the container runtime (such as docker), please install the container runtime before joining the node."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"2. yurtadm join error: [ERROR FileExisting-conntrack]: conntrack not found in system path"})}),"\n",(0,r.jsxs)(t.p,{children:["Execute ",(0,r.jsx)(t.code,{children:"yum install -y conntrack"})," and then re-execute the yurtadm join command."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"3. How does yurtadm join support user-provided cni plugins"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"yurtadm join"})," will pull the specially modified cni binary files by default. For the modified content, please refer to ",(0,r.jsx)(t.a,{href:"/docs/v1.3/user-manuals/network/edge-pod-network",children:"link"}),". If you want to use pre-prepared cni binaries, they should be placed in the directory ",(0,r.jsx)(t.code,{children:"/opt/cni/bin"}),", and then add the ",(0,r.jsx)(t.code,{children:"--reuse-cni-bin=true"})," parameter when using ",(0,r.jsx)(t.code,{children:"yurtadm join"})," ."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"4. How does yurtadm join support components such as kubelet/kubeadm provided by users"})}),"\n",(0,r.jsxs)(t.p,{children:["Users can prepare the ",(0,r.jsx)(t.code,{children:"kubelet"})," and ",(0,r.jsx)(t.code,{children:"kubeadm"})," components in the PATH environment variable. However, there are some restrictions on the versions of ",(0,r.jsx)(t.code,{children:"kubelet"})," and ",(0,r.jsx)(t.code,{children:"kubeadm"}),". ",(0,r.jsx)(t.code,{children:"yurtadm"})," will check whether the ",(0,r.jsx)(t.code,{children:"major version"})," and ",(0,r.jsx)(t.code,{children:"minor version"})," of the component are the same as the cluster Kubernetes Server version (this follows the semver specification). If the versions are inconsistent, Prepared kubelet/kubeadm will be skipped and kubelet/kubeadm will be pulled from the official link according to the Kubernetes Server version."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"5. yurtadm join failed to access the node, how to solve it"})}),"\n",(0,r.jsxs)(t.p,{children:["First, you can analyze the error log of ",(0,r.jsx)(t.code,{children:"yurtadm join"})," to locate the stage where the error occurred. If the yurthub component cannot be started normally, please refer to ",(0,r.jsx)(t.a,{href:"/docs/v1.3/faq/yurthub",children:"yurthub faq"})]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);