"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[67013],{60865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(85893),s=t(11151);const r={title:"Join Nodes"},d=void 0,i={id:"installation/yurtadm-join",title:"Join Nodes",description:"There are two ways to join nodes into OpenYurt cluster in terms of the node status.",source:"@site/versioned_docs/version-v1.2/installation/yurtadm-join.md",sourceDirName:"installation",slug:"/installation/yurtadm-join",permalink:"/docs/v1.2/installation/yurtadm-join",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtadm-join.md",tags:[],version:"v1.2",lastUpdatedBy:"Lixx",lastUpdatedAt:1713521278e3,frontMatter:{title:"Join Nodes"},sidebar:"docs",previous:{title:"Manually Setup",permalink:"/docs/v1.2/installation/manually-setup"},next:{title:"OpenYurt Experience Center Introduction",permalink:"/docs/v1.2/installation/openyurt-experience-center/overview"}},a={},l=[{value:"1. Joining nodes from scratch",id:"1-joining-nodes-from-scratch",level:2},{value:"1.1 yurtadm join",id:"11-yurtadm-join",level:3},{value:"1.2 yurtadm reset",id:"12-yurtadm-reset",level:3},{value:"2. Install OpenYurt node components",id:"2-install-openyurt-node-components",level:2},{value:"2.1 Label your node",id:"21-label-your-node",level:3},{value:"2.2 Setup Yurthub",id:"22-setup-yurthub",level:3},{value:"2.3 Configure Kubelet",id:"23-configure-kubelet",level:3},{value:"2.4 Restart Pods",id:"24-restart-pods",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"There are two ways to join nodes into OpenYurt cluster in terms of the node status."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/v1.2/installation/yurtadm-join#1-joining-nodes-from-scratch",children:"Join a node into OpenYurt cluster from scratch"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/v1.2/installation/yurtadm-join#2-install-openyurt-node-components",children:"Install OpenYurt node components"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"1-joining-nodes-from-scratch",children:"1. Joining nodes from scratch"}),"\n",(0,o.jsx)(n.h3,{id:"11-yurtadm-join",children:"1.1 yurtadm join"}),"\n",(0,o.jsx)(n.p,{children:"Users can join cloud nodes and edge nodes to the OpenYurt cluster using Yurtadm join. Note that when joining a node, the runtime needs to be installed on the node and the swap partition is turned off."}),"\n",(0,o.jsx)(n.p,{children:"Execute the following command to join the edge node to cluster:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --v=5\n"})}),"\n",(0,o.jsx)(n.p,{children:"Execute the following command to join the cloud node to cluster:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=cloud --discovery-token-unsafe-skip-ca-verification --v=5\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When the runtime of the edge node is containerd, the ",(0,o.jsx)(n.code,{children:"cri-socket"})," parameter needs to be configured. For example, change the command above of joining the edge node to:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --cri-socket=/run/containerd/containerd.sock --v=5\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["how to compile ",(0,o.jsx)(n.code,{children:"yurtadm"})," binary, please refer to the link ",(0,o.jsx)(n.a,{href:"/docs/v1.2/installation/yurtadm-init#21-compile-yurtadm",children:"here"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Explanation of parameters:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"1.2.3.4:6443"}),":  The address of apiserver"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--token"}),"\uff1abootstrap token"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--node-type"}),"\uff1aopenyurt node type\uff0ccan be cloud or edge"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The process of ",(0,o.jsx)(n.code,{children:"yurtadm join"})," will automatically install the following k8s components:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"kubeadm"}),"\n",(0,o.jsx)(n.li,{children:"kubectl"}),"\n",(0,o.jsx)(n.li,{children:"kubelet"}),"\n",(0,o.jsx)(n.li,{children:"kube-proxy"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The process of ",(0,o.jsx)(n.code,{children:"yurtadm join"})," will pull specially modified cni binaries, the modifications can be found ",(0,o.jsx)(n.a,{href:"/docs/v1.2/user-manuals/network/edge-pod-network",children:"here"}),". If you want to use cni binaries that uses prepared beforehand, the cni binaries should be placed under ",(0,o.jsx)(n.code,{children:"/opt/cni/bin"})," directory. Then configure yurtadm parameter ",(0,o.jsx)(n.code,{children:"--reuse-cni-bin=true"})," for ",(0,o.jsx)(n.code,{children:"yurtadm join"})," command."]}),"\n",(0,o.jsxs)(n.p,{children:["Also, You can pre-place the ",(0,o.jsx)(n.code,{children:"kubelet"})," and ",(0,o.jsx)(n.code,{children:"kubeadm"})," components in the directories named by the PATH environment variable. However, there are restrictions on the version of ",(0,o.jsx)(n.code,{children:"kubelet"})," and ",(0,o.jsx)(n.code,{children:"kubeadm"}),". ",(0,o.jsx)(n.code,{children:"yurtadm"})," will check if the ",(0,o.jsx)(n.code,{children:"major version"})," and ",(0,o.jsx)(n.code,{children:"minor version"})," are the same as the cluster kubernetes version(Follow semver specification)."]}),"\n",(0,o.jsx)(n.h3,{id:"12-yurtadm-reset",children:"1.2 yurtadm reset"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"yurtadm reset"})," can be used when it is necessary to delete a node that was joined using ",(0,o.jsx)(n.code,{children:"yurtadm join"}),". Here are the detailed steps:"]}),"\n",(0,o.jsx)(n.p,{children:"In master\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl drain {NodeName} --delete-local-data --force --ignore-daemonsets\nkubectl delete node {NodeName}\n"})}),"\n",(0,o.jsx)(n.p,{children:"In joined node:"}),"\n",(0,o.jsxs)(n.p,{children:["1. execute ",(0,o.jsx)(n.code,{children:"yurtadm reset"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"yurtadm reset\n"})}),"\n",(0,o.jsxs)(n.p,{children:["2. delete ",(0,o.jsx)(n.code,{children:"/etc/cni/net.d"})," dir\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"rm -rf /etc/cni/net.d\n"})}),"\n",(0,o.jsx)(n.h2,{id:"2-install-openyurt-node-components",children:"2. Install OpenYurt node components"}),"\n",(0,o.jsx)(n.p,{children:"You should only install node components of OpenYurt on nodes that already have been joined in the Kubernetes cluster."}),"\n",(0,o.jsx)(n.h3,{id:"21-label-your-node",children:"2.1 Label your node"}),"\n",(0,o.jsxs)(n.p,{children:["OpenYurt distinguish cloud nodes and edge nodes through the node label ",(0,o.jsx)(n.code,{children:"openyurt.io/is-edge-worker"}),". From this, it makes the decision that whether to evict Pods on this node. Assume we have a node named ",(0,o.jsx)(n.code,{children:"us-west-1.192.168.0.88"})," which is an edge node."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl label node us-west-1.192.168.0.88 openyurt.io/is-edge-worker=true\nnode/us-west-1.192.168.0.88 labeled\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"us-west-1.192.168.0.88"})," is a cloud node, then you should change the label from ",(0,o.jsx)(n.code,{children:"true"})," to ",(0,o.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"To further activate the node autonomous mode, we add an annotation to this edge node:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl annotate node us-west-1.192.168.0.88 node.beta.openyurt.io/autonomy=true\nnode/us-west-1.192.168.0.88 annotated\n"})}),"\n",(0,o.jsx)(n.p,{children:"Also if you want to take advantage of the unitization ability of OpenYurt, you can add this node to an nodePool."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: worker\nspec:\n  type: Edge\nEOF\n$ kubectl label node us-west-1.192.168.0.87 apps.openyurt.io/desired-nodepool=worker\n"})}),"\n",(0,o.jsx)(n.h3,{id:"22-setup-yurthub",children:"2.2 Setup Yurthub"}),"\n",(0,o.jsx)(n.p,{children:"Before proceeding, we need to prepare the following items:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Get the apiserver's address (i.e., ip",":port",") and a ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/",children:"bootstrap token"}),", which will be used to replace the placeholder in the template file ",(0,o.jsx)(n.code,{children:"config/setup/yurthub.yaml"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In the following command, we assume that the address of the apiserver is 1.2.3.4:5678 and bootstrap token is 07401b.f395accd246ae52d"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ cat config/setup/yurthub.yaml |\nsed 's|__kubernetes_master_address__|1.2.3.4:5678|;\ns|__bootstrap_token__|07401b.f395accd246ae52d|' > /tmp/yurthub-ack.yaml &&\nscp -i <yourt-ssh-identity-file> /tmp/yurthub-ack.yaml root@us-west-1.192.168.0.88:/etc/kubernetes/manifests\n"})}),"\n",(0,o.jsx)(n.p,{children:"and the Yurthub will be ready in minutes."}),"\n",(0,o.jsx)(n.h3,{id:"23-configure-kubelet",children:"2.3 Configure Kubelet"}),"\n",(0,o.jsx)(n.p,{children:"we need to reset the kubelet service to let it access the apiserver through the yurthub (The following steps assume that we have logged on to the edge node as the root user).\nAs kubelet will connect to the Yurthub through HTTP, so we create a new kubeconfig file for the kubelet service."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"mkdir -p /var/lib/openyurt\ncat << EOF > /var/lib/openyurt/kubelet.conf\napiVersion: v1\nclusters:\n- cluster:\n    server: http://127.0.0.1:10261\n  name: default-cluster\ncontexts:\n- context:\n    cluster: default-cluster\n    namespace: default\n    user: default-auth\n  name: default-context\ncurrent-context: default-context\nkind: Config\npreferences: {}\nEOF\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In order for let kubelet to use the new kubeconfig, we edit the drop-in file of the kubelet service (i.e., ",(0,o.jsx)(n.code,{children:"/etc/systemd/system/kubelet.service.d/10-kubeadm.conf"})," or ",(0,o.jsx)(n.code,{children:"/usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf"})," for CentOS)"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'sed -i "s|KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=\\/etc\\/kubernetes\\/bootstrap-kubelet.conf\\ --kubeconfig=\\/etc\\/kubernetes\\/kubelet.conf|KUBELET_KUBECONFIG_ARGS=--kubeconfig=\\/var\\/lib\\/openyurt\\/kubelet.conf|g" \\\n    /etc/systemd/system/kubelet.service.d/10-kubeadm.conf\n'})}),"\n",(0,o.jsx)(n.p,{children:"then, we restart the kubelet service"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# assume we are logged in to the edge node already\n$ systemctl daemon-reload && systemctl restart kubelet\n"})}),"\n",(0,o.jsx)(n.p,{children:"Finally, we need to make sure node is ready after kubelet restart."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11\nus-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11\n"})}),"\n",(0,o.jsx)(n.h3,{id:"24-restart-pods",children:"2.4 Restart Pods"}),"\n",(0,o.jsx)(n.p,{children:"After Yurthub installation and kubelet restart, all pods on this edge node should be recreated in order to make sure pods access kube-apiserver through Yurthub.\nBefore performing this operation, confirm the impact on the production environment."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl get pod -A -o wide | grep us-west-1.192.168.0.88\nkube-system   yurt-hub-us-west-1.192.168.0.88           1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   coredns-qq6dk                             1/1     Running   0          19d     10.148.2.197   us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-flannel-ds-j698r                     1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-proxy-f5qvr                          1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\n\n// then delete all pods above except yurthub pod.\n$ kubectl -n kube-system delete pod coredns-qq6dk kube-flannel-ds-j698r kube-proxy-f5qvr\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{a:()=>d});var o=t(67294);const s={},r=o.createContext(s);function d(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);