"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[45],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"Manually Setup"},l=void 0,p={unversionedId:"installation/manually-setup",id:"installation/manually-setup",title:"Manually Setup",description:"This tutorial shows how to setup OpenYurt cluster manually. We assume you already have a Kubernetes cluster setup properly. If you want to create an OpenYurt cluster from scratch, please refer to yurtadm docs.",source:"@site/docs/installation/manually-setup.md",sourceDirName:"installation",slug:"/installation/manually-setup",permalink:"/docs/next/installation/manually-setup",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md",tags:[],version:"current",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1675235618,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"Manually Setup"},sidebar:"docs",previous:{title:"Summary",permalink:"/docs/next/installation/summary"},next:{title:"Join Nodes",permalink:"/docs/next/installation/yurtadm-join"}},i={},s=[{value:"1. Precondition",id:"1-precondition",level:2},{value:"1.1 Label cloud nodes",id:"11-label-cloud-nodes",level:3},{value:"2.  OpenYurt Setup Pre-requirement",id:"2--openyurt-setup-pre-requirement",level:2},{value:"3. Setup Control-Plane components of OpenYurt",id:"3-setup-control-plane-components-of-openyurt",level:2},{value:"3.1 Setup <code>openyurt/yurt-app-manager</code> components",id:"31-setup-openyurtyurt-app-manager-components",level:3},{value:"3.1.1 Install yurt-app-manager",id:"311-install-yurt-app-manager",level:4},{value:"3.1.2 Create NodePool",id:"312-create-nodepool",level:4},{value:"3.1.3 Add node into NodePool",id:"313-add-node-into-nodepool",level:4},{value:"3.2 Setup <code>openyurt/yurt-controller-manager</code> components",id:"32-setup-openyurtyurt-controller-manager-components",level:3},{value:"4. Setup Cross-Network-Domain Communication components of OpenYurt",id:"4-setup-cross-network-domain-communication-components-of-openyurt",level:2},{value:"4.1 Setup <code>raven-controller-manager</code> component",id:"41-setup-raven-controller-manager-component",level:3},{value:"4.2 Setup<code>raven-agent</code> component",id:"42-setupraven-agent-component",level:3},{value:"5. Attention",id:"5-attention",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial shows how to setup OpenYurt cluster manually. We assume you already have a Kubernetes cluster setup properly. If you want to create an OpenYurt cluster from scratch, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/installation/yurtadm-init"},"yurtadm docs"),"."),(0,o.kt)("h2",{id:"1-precondition"},"1. Precondition"),(0,o.kt)("p",null,"Make sure you already have a Kubernetes cluster with at least one node. We recommend to create your Kubernetes cluster with ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"},"kubeadm")," tool."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME                      STATUS   ROLES                  AGE     VERSION\nizwz9dohcv74iegqecp4axz   Ready    control-plane,master   6d1h    v1.22.11\n")),(0,o.kt)("h3",{id:"11-label-cloud-nodes"},"1.1 Label cloud nodes"),(0,o.kt)("p",null,"When disconnected from the apiserver, only the pod running on the autonomous edge node will\nbe prevented from being evicted from nodes. Therefore, we first need to divide nodes into two categories, the cloud node\nand the edge node, by using label ",(0,o.kt)("inlineCode",{parentName:"p"},"openyurt.io/is-edge-worker"),".\nwe will use node ",(0,o.kt)("inlineCode",{parentName:"p"},"izwz9dohcv74iegqecp4axz")," as the cloud node. We label the cloud node with value ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),","),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node izwz9dohcv74iegqecp4axz openyurt.io/is-edge-worker=false\nizwz9dohcv74iegqecp4axz labeled\n")),(0,o.kt)("h2",{id:"2--openyurt-setup-pre-requirement"},"2.  OpenYurt Setup Pre-requirement"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The IP addresses of all nodes in the cluster must be different"),(0,o.kt)("li",{parentName:"ul"},"You must make the following adjustments if using docker as container runtime, which is mainly to avoid docker modifying the iptables forward chain and damaged the node forward.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"iptables -w -P FORWARD ACCEPT\nsed -i 's#^After=network-online.target firewalld.service$#After=network-online.target firewalld.service containerd.service#g' \\\n/lib/systemd/system/docker.service\n"))),(0,o.kt)("li",{parentName:"ul"},"Domain Name resolution from pods on edge nodes will be handled by CoreDNS instance on master node or cloud node through VPN tunnel that provided by Raven, so some resolution latency or timeout will be caused by network. we recommend you to adjust ",(0,o.kt)("inlineCode",{parentName:"li"},"CoreDNS Deployment")," according to ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/installation/coredns-prepare"},"CoreDNS Adjustment")," tutorial if you care about latency or timeout.")),(0,o.kt)("h2",{id:"3-setup-control-plane-components-of-openyurt"},"3. Setup Control-Plane components of OpenYurt"),(0,o.kt)("p",null,"We recommend to install OpenYurt components with ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),", please make sure that ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},(0,o.kt)("inlineCode",{parentName:"a"},"helm CLI")," has been installed")," properly before moving on. All the helm charts used in this tutorial can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt-helm"},"openyurt-helm repo"),"."),(0,o.kt)("h3",{id:"31-setup-openyurtyurt-app-manager-components"},"3.1 Setup ",(0,o.kt)("inlineCode",{parentName:"h3"},"openyurt/yurt-app-manager")," components"),(0,o.kt)("h4",{id:"311-install-yurt-app-manager"},"3.1.1 Install yurt-app-manager"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/core-concepts/yurt-app-manager"},"Yurt-App-Manager")," is a functional component that provides united edge management capabilities for an OpenYurt cluster. You can install this component with helm."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install  yurt-app-manager -n kube-system ./charts/yurt-app-manager --set image.tag=latest\n")),(0,o.kt)("p",null,"You can check if yurt-app-manager pod and service have been installed successfully with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n kube-system | grep yurt-app-manager\nkubectl get svc -n kube-system | grep yurt-app-manager\n")),(0,o.kt)("h4",{id:"312-create-nodepool"},"3.1.2 Create NodePool"),(0,o.kt)("p",null,"To better manage the nodes and the traffic on the nodes (e.g., Service traffic topology management), we recommend putting the nodes of the Layer 2 network interworking in the same node pool. In this example, a node pool is created for cloud side as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: master\nspec:\n  type: Cloud\nEOF\n")),(0,o.kt)("h4",{id:"313-add-node-into-nodepool"},"3.1.3 Add node into NodePool"),(0,o.kt)("p",null,"Add the cloud node into nodepool created in 3.1.2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node izwz9dohcv74iegqecp4axz apps.openyurt.io/desired-nodepool=master\nizwz9dohcv74iegqecp4axz labeled\n")),(0,o.kt)("h3",{id:"32-setup-openyurtyurt-controller-manager-components"},"3.2 Setup ",(0,o.kt)("inlineCode",{parentName:"h3"},"openyurt/yurt-controller-manager")," components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/core-concepts/yurt-controller-manager"},"yurt-controller-manager"),": it prevents apiserver from evicting pods running on the autonomous edge nodes during disconnection.")),(0,o.kt)("p",null,"We can install all the components above with helm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | helm install openyurt ./charts/openyurt -n kube-system -f -\nyurtControllerManager:\n  image:\n    tag: latest\nEOF\n")),(0,o.kt)("p",null,"If everthing went well, you'll see something like this after typing ",(0,o.kt)("inlineCode",{parentName:"p"},"helm list -A")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm list -A \nNAME                NAMESPACE   REVISION    UPDATED                                 STATUS      CHART                   APP VERSION\nopenyurt            kube-system 1           2022-09-07 17:06:17.764754411 +0800 CST deployed    openyurt-1.0.0          1.0.0      \nyurt-app-manager    kube-system 1           2022-09-07 17:36:30.371904902 +0800 CST deployed    yurt-app-manager-0.1.2  0.8.0\n")),(0,o.kt)("h2",{id:"4-setup-cross-network-domain-communication-components-of-openyurt"},"4. Setup Cross-Network-Domain Communication components of OpenYurt"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/core-concepts/raven"},"Raven")," provides network communication capabilities when the cloud and the edge are in different network areas\uff0c which include two components raven-controller-manager and raven-agent."),(0,o.kt)("h3",{id:"41-setup-raven-controller-manager-component"},"4.1 Setup ",(0,o.kt)("inlineCode",{parentName:"h3"},"raven-controller-manager")," component"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/raven-controller-manager"},"raven-controller-manager")," is a standard kubernetes controller for the Gateway, a custom cluster resource, deployed on cloud nodes (which can be master or Cloud nodes). Gateway CR manages nodes in different physical zones and dynamically elects a qualified node in the physical zone as a Gateway node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openyurtio/raven-controller-manager.git\ncd raven-controller-manager\ngit checkout v0.3.0\nmake generate-deploy-yaml\nkubectl apply -f _output/yamls/raven-controller-manager.yaml\n")),(0,o.kt)("h3",{id:"42-setupraven-agent-component"},"4.2 Setup",(0,o.kt)("inlineCode",{parentName:"h3"},"raven-agent")," component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openyurtio/raven.git\ncd raven\ngit checkout v0.3.0\nFORWARD_NODE_IP=true make deploy\n")),(0,o.kt)("h2",{id:"5-attention"},"5. Attention"),(0,o.kt)("p",null,"The above operation is only for the Master node, if there are other nodes in the cluster, additional adjustment is needed, the operation method can be referred to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/installation/yurtadm-join#2-install-openyurt-node-components"},"Install OpenYurt Node on Existing K8s Nodes"),"."))}c.isMDXComponent=!0}}]);