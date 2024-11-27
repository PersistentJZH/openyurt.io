"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[19672],{1219:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"faq/yurtadm","title":"yurtadm","description":"1. yurtadm join error: crictl not found in system path","source":"@site/versioned_docs/version-v1.4/faq/yurtadm.md","sourceDirName":"faq","slug":"/faq/yurtadm","permalink":"/docs/faq/yurtadm","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq/yurtadm.md","tags":[],"version":"v1.4","lastUpdatedBy":"tnsimon","lastUpdatedAt":1732695729000,"frontMatter":{"title":"yurtadm"},"sidebar":"docs","previous":{"title":"yurthub","permalink":"/docs/faq/yurthub"},"next":{"title":"yurt-tunnel","permalink":"/docs/faq/yurt-tunnel"}}');var o=t(74848),s=t(28453);const i={title:"yurtadm"},d=void 0,c={},a=[];function l(e){const n={a:"a",code:"code",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"1. yurtadm join error: crictl not found in system path"})}),"\n",(0,o.jsx)(n.p,{children:"The node has not installed the container runtime (such as docker), please install the container runtime before joining the node."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"2. yurtadm join error: [ERROR FileExisting-conntrack]: conntrack not found in system path"})}),"\n",(0,o.jsxs)(n.p,{children:["Execute ",(0,o.jsx)(n.code,{children:"yum install -y conntrack"})," and then re-execute the yurtadm join command."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"3. How does yurtadm join support user-provided cni plugins"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"yurtadm join"})," will pull the specially modified cni binary files by default. For the modified content, please refer to ",(0,o.jsx)(n.a,{href:"/docs/user-manuals/network/edge-pod-network",children:"link"}),". If you want to use pre-prepared cni binaries, they should be placed in the directory ",(0,o.jsx)(n.code,{children:"/opt/cni/bin"}),", and then add the ",(0,o.jsx)(n.code,{children:"--reuse-cni-bin=true"})," parameter when using ",(0,o.jsx)(n.code,{children:"yurtadm join"})," ."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"4. How does yurtadm join support components such as kubelet/kubeadm provided by users"})}),"\n",(0,o.jsxs)(n.p,{children:["Users can prepare the ",(0,o.jsx)(n.code,{children:"kubelet"})," and ",(0,o.jsx)(n.code,{children:"kubeadm"})," components in the PATH environment variable. However, there are some restrictions on the versions of ",(0,o.jsx)(n.code,{children:"kubelet"})," and ",(0,o.jsx)(n.code,{children:"kubeadm"}),". ",(0,o.jsx)(n.code,{children:"yurtadm"})," will check whether the ",(0,o.jsx)(n.code,{children:"major version"})," and ",(0,o.jsx)(n.code,{children:"minor version"})," of the component are the same as the cluster Kubernetes Server version (this follows the semver specification). If the versions are inconsistent, Prepared kubelet/kubeadm will be skipped and kubelet/kubeadm will be pulled from the official link according to the Kubernetes Server version."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"5. yurtadm join failed to access the node, how to solve it"})}),"\n",(0,o.jsxs)(n.p,{children:["First, you can analyze the error log of ",(0,o.jsx)(n.code,{children:"yurtadm join"})," to locate the stage where the error occurred. If the yurthub component cannot be started normally, please refer to ",(0,o.jsx)(n.a,{href:"/docs/faq/yurthub",children:"yurthub faq"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);