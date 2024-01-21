"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[16549],{15407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(85893),a=t(11151);const s={title:"Manually Setup"},o=void 0,l={id:"installation/manually-setup",title:"Manually Setup",description:"This tutorial shows how to setup OpenYurt control plane components manually. We assume you already have a Kubernetes control plane setup properly.",source:"@site/versioned_docs/version-v1.4/installation/manually-setup.md",sourceDirName:"installation",slug:"/installation/manually-setup",permalink:"/docs/installation/manually-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md",tags:[],version:"v1.4",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1705823197,formattedLastUpdatedAt:"Jan 21, 2024",frontMatter:{title:"Manually Setup"},sidebar:"docs",previous:{title:"Summary",permalink:"/docs/installation/summary"},next:{title:"Join Nodes",permalink:"/docs/installation/yurtadm-join"}},i={},d=[{value:"1. Precondition",id:"1-precondition",level:2},{value:"2. Prerequisites for installing the OpenYurt control plane",id:"2-prerequisites-for-installing-the-openyurt-control-plane",level:2},{value:"3. Install OpenYurt control plane components",id:"3-install-openyurt-control-plane-components",level:2},{value:"3.1 Install yurt-manager",id:"31-install-yurt-manager",level:3},{value:"3.2 Install yurthub artifacts",id:"32-install-yurthub-artifacts",level:3},{value:"3.3 Install raven component",id:"33-install-raven-component",level:3},{value:"4. Attention",id:"4-attention",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This tutorial shows how to setup OpenYurt control plane components manually. We assume you already have a Kubernetes control plane setup properly."}),"\n",(0,r.jsx)(n.h2,{id:"1-precondition",children:"1. Precondition"}),"\n",(0,r.jsxs)(n.p,{children:["Make sure you already have a Kubernetes control plane with at least one node. We recommend to create your Kubernetes cluster with ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/",children:"kubeadm"})," tool."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME                      STATUS   ROLES                  AGE     VERSION\nizwz9dohcv74iegqecp4axz   Ready    control-plane,master   6d1h    v1.22.11\n"})}),"\n",(0,r.jsx)(n.h2,{id:"2-prerequisites-for-installing-the-openyurt-control-plane",children:"2. Prerequisites for installing the OpenYurt control plane"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The IP addresses of all nodes in the cluster must be different if Raven enables node forwarding"}),"\n",(0,r.jsxs)(n.li,{children:["You must make the following adjustments if using docker as container runtime, which is mainly to avoid docker modifying the iptables forward chain and damaged the node forward.","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"iptables -w -P FORWARD ACCEPT\nsed -i 's#^After=network-online.target firewalld.service$#After=network-online.target firewalld.service containerd.service#g' \\\n/lib/systemd/system/docker.service\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Domain Name resolution from pods on edge nodes will be handled by CoreDNS instance on master node or cloud node through VPN tunnel that provided by Raven, so some resolution latency or timeout will be caused by network. we recommend you to adjust ",(0,r.jsx)(n.code,{children:"CoreDNS Deployment"})," according to ",(0,r.jsx)(n.a,{href:"/docs/installation/coredns-prepare",children:"CoreDNS Adjustment"})," tutorial if you care about latency or timeout."]}),"\n",(0,r.jsxs)(n.li,{children:["To adapt to the complex network scenarios at the edge, we need to disable the original node lifecycle management controller of the k8s. For details, see ",(0,r.jsx)(n.a,{href:"/docs/installation/kcm-prepare",children:"Kube-Controller-Manager Installation Configuration Adjustments"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["We recommend installing OpenYurt components via ",(0,r.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"}),", please make sure ",(0,r.jsx)(n.a,{href:"https://helm.sh/docs/intro/install/",children:"helm CLI"})," is installed properly before proceeding."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"3-install-openyurt-control-plane-components",children:"3. Install OpenYurt control plane components"}),"\n",(0,r.jsxs)(n.p,{children:["All the helm charts used in this tutorial can be found in ",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt-helm",children:"openyurt-helm repo"}),". please add the repo as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm repo add openyurt https://openyurtio.github.io/openyurt-helm\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can then run ",(0,r.jsx)(n.code,{children:"helm search repo openyurt"})," to see the charts."]}),"\n",(0,r.jsx)(n.h3,{id:"31-install-yurt-manager",children:"3.1 Install yurt-manager"}),"\n",(0,r.jsx)(n.p,{children:"yurt-manager should be started before joining the node via the yurtadm command, because the yurthub component on the node depends on yurt-manager to approve csr.\nSo please ensure that the yurt-manager component is running on the master node or any other node that does not have a yurthub component."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm upgrade --install yurt-manager -n kube-system openyurt/yurt-manager\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ensure that the pod and service configurations of the yurt-manager component have been created successfully:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl get pod -n kube-system | grep yurt-manager\nkubectl get svc -n kube-system | grep yurt-manager\n"})}),"\n",(0,r.jsx)(n.h3,{id:"32-install-yurthub-artifacts",children:"3.2 Install yurthub artifacts"}),"\n",(0,r.jsxs)(n.p,{children:["The yurthub artifacts include the yurtstaticset template, as well as the yurthub-related configmap. When installing the yurthub artifacts, we need to set the ",(0,r.jsx)(n.code,{children:"kubernetesServerAddr"})," field to the Kubernetes server address(use ",(0,r.jsx)(n.code,{children:"kubectl config view"})," to find).\nTake the Kubernetes server address of ",(0,r.jsx)(n.code,{children:"https://1.2.3.4:6443"})," as an example."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm upgrade --install yurt-hub -n kube-system --set kubernetesServerAddr=https://1.2.3.4:6443 openyurt/yurthub\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ensure yurthub yurtstaticset and yurthub cloud yurtstaticset have been created successfully:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl get yss -n kube-system\n"})}),"\n",(0,r.jsx)(n.h3,{id:"33-install-raven-component",children:"3.3 Install raven component"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/core-concepts/raven",children:"Raven"})," provides network communication capabilities when the cloud and the edge are in different network areas\uff0c which include two components raven-controller-manager and raven-agent."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm upgrade --install raven-agent -n kube-system openyurt/raven-agent\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ensure that the pod of the raven agent component have been created successfully:"}),"\n",(0,r.jsxs)(n.p,{children:["You need to configure the cluster by referring to ",(0,r.jsx)(n.a,{href:"/docs/installation/raven-l7-proxy-prepare",children:"raven-l7-proxy-prepare.md"})," if you need to enable raven l7 proxy"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl get pod -n kube-system | grep raven-agent\n"})}),"\n",(0,r.jsx)(n.h2,{id:"4-attention",children:"4. Attention"}),"\n",(0,r.jsxs)(n.p,{children:["The above operation is only for the Master node, if there are other nodes in the cluster, additional adjustment is needed, the operation method can be referred to ",(0,r.jsx)(n.a,{href:"/docs/installation/yurtadm-join#2-install-openyurt-node-components",children:"Install OpenYurt Node on Existing K8s Nodes"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(67294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);