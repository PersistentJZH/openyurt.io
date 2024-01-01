"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[46810],{46770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var o=n(85893),r=n(11151);const l={title:"\u624b\u52a8\u8f6c\u6362"},s=void 0,a={id:"installation/manually-setup",title:"\u624b\u52a8\u8f6c\u6362",description:"This tutorial shows how to setup OpenYurt cluster manually. The cluster used in this tutorial is a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.5.0/installation/manually-setup.md",sourceDirName:"installation",slug:"/installation/manually-setup",permalink:"/zh/docs/v0.5.0/installation/manually-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md",tags:[],version:"v0.5.0",lastUpdatedBy:"rambohe",lastUpdatedAt:1704125371,formattedLastUpdatedAt:"2024\u5e741\u67081\u65e5",frontMatter:{title:"\u624b\u52a8\u8f6c\u6362"},sidebar:"docs",previous:{title:"Yurtctl convert/revert",permalink:"/zh/docs/v0.5.0/installation/yurtctl-convert-revert"},next:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/zh/docs/v0.5.0/core-concepts/architecture"}},c={},i=[{value:"Label cloud nodes and edge nodes",id:"label-cloud-nodes-and-edge-nodes",level:2},{value:"Setup Yurt-controller-manager",id:"setup-yurt-controller-manager",level:2},{value:"Note",id:"note",level:3},{value:"Disable the default nodelifecycle controller",id:"disable-the-default-nodelifecycle-controller",level:2},{value:"Setup Yurthub",id:"setup-yurthub",level:2},{value:"Setup Yurt-tunnel (Optional)",id:"setup-yurt-tunnel-optional",level:2},{value:"Reset the Kubelet",id:"reset-the-kubelet",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["This tutorial shows how to setup OpenYurt cluster manually. The cluster used in this tutorial is a\ntwo-nodes ACK(version 1.14.8) cluster, and all the yaml files used in this tutorial can be found\nat ",(0,o.jsx)(t.code,{children:"config/setup/"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"label-cloud-nodes-and-edge-nodes",children:"Label cloud nodes and edge nodes"}),"\n",(0,o.jsxs)(t.p,{children:["When disconnected from the apiserver, only the pod running on the autonomous edge node will\nbe prevented from being evicted from nodes. Therefore, we first need to divide nodes into two categories, the cloud node\nand the edge node, by using label ",(0,o.jsx)(t.code,{children:"openyurt.io/is-edge-worker"}),". Assume that the given Kubernetes cluster\nhas two nodes,"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.14.8-aliyun.1\nus-west-1.192.168.0.88   Ready    <none>   3d23h   v1.14.8-aliyun.1\n"})}),"\n",(0,o.jsxs)(t.p,{children:["and we will use node ",(0,o.jsx)(t.code,{children:"us-west-1.192.168.0.87"})," as the cloud node."]}),"\n",(0,o.jsxs)(t.p,{children:["We label the cloud node with value ",(0,o.jsx)(t.code,{children:"false"}),","]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"$ kubectl label node us-west-1.192.168.0.87 openyurt.io/is-edge-worker=false\nnode/us-west-1.192.168.0.87 labeled\n"})}),"\n",(0,o.jsxs)(t.p,{children:["and the edge node with value ",(0,o.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"$ kubectl label node us-west-1.192.168.0.88 openyurt.io/is-edge-worker=true\nnode/us-west-1.192.168.0.88 labeled\n"})}),"\n",(0,o.jsx)(t.p,{children:"To active the autonomous mode, we annotate the edge node by typing following command"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"$ kubectl annotate node us-west-1.192.168.0.88 node.beta.openyurt.io/autonomy=true\nnode/us-west-1.192.168.0.88 annotated\n"})}),"\n",(0,o.jsx)(t.h2,{id:"setup-yurt-controller-manager",children:"Setup Yurt-controller-manager"}),"\n",(0,o.jsx)(t.p,{children:"Next, we need to deploy the Yurt controller manager, which prevents apiserver from evicting pods running on the\nautonomous edge nodes during disconnection."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"$ kubectl apply -f config/setup/yurt-controller-manager.yaml\ndeployment.apps/yurt-controller-manager created\n"})}),"\n",(0,o.jsx)(t.h3,{id:"note",children:"Note"}),"\n",(0,o.jsx)(t.p,{children:'Since Docker turn on pull rate limit on anonymous request. You may encouter error message like "You have reached your pull rate limit. xxxx". In that case you will need to create a docker-registry secret to pull the image.'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"$kc create secret docker-registry dockerpass --docker-username=your-docker-username --docker-password='your-docker-password' --docker-email='your-email-address' -n kube-system\n"})}),"\n",(0,o.jsx)(t.p,{children:"Then edit the config/setup/yurt-controller-manager.yaml"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"...\n      containers:\n      - name: yurt-controller-manager\n        image: openyurt/yurt-controller-manager:latest\n        command:\n        - yurt-controller-manager\n      imagePullSecrets:\n      - name: dockerpass\n"})}),"\n",(0,o.jsx)(t.h2,{id:"disable-the-default-nodelifecycle-controller",children:"Disable the default nodelifecycle controller"}),"\n",(0,o.jsxs)(t.p,{children:["To allow the yurt-controller-mamanger to work properly, we need to turn off the default nodelifecycle controller.\nThe nodelifecycle controller can be disabled by restarting the kube-controller-manager with a proper ",(0,o.jsx)(t.code,{children:"--controllers"}),"\noption. Assume that the original option looks like ",(0,o.jsx)(t.code,{children:"--controllers=*,bootstrapsigner,tokencleaner"}),", to disable\nthe nodelifecycle controller, we change the option to ",(0,o.jsx)(t.code,{children:"--controllers=*,bootstrapsigner,tokencleaner,-nodelifecycle"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If the kube-controller-manager is deployed as a static pod on the master node, and you have the permission to log in\nto the master node, then above operations can be done by revising the file\n",(0,o.jsx)(t.code,{children:"/etc/kubernetes/manifests/kube-controller-manager.yaml"}),". After revision, the kube-controller-manager will be\nrestarted automatically."]}),"\n",(0,o.jsx)(t.h2,{id:"setup-yurthub",children:"Setup Yurthub"}),"\n",(0,o.jsx)(t.p,{children:"After the Yurt controller manager is up and running, we will setup Yurthub as the static pod."}),"\n",(0,o.jsx)(t.p,{children:"Before proceeding, we need to prepare the following items:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Deploy global settings(i.e., RBAC, configmap) for yurthub."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"$ kubectl apply -f config/setup/yurthub-cfg.yaml\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsxs)(t.li,{children:["Get the apiserver's address (i.e., ip",":port",") and a ",(0,o.jsx)(t.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/",children:"bootstrap token"}),", which will be used to replace the place holder in the template\nfile ",(0,o.jsx)(t.code,{children:"config/setup/yurthub.yaml"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"In the following command, we assume that the address of the apiserver is 1.2.3.4:5678 and bootstrap token is 07401b.f395accd246ae52d"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"$ cat config/setup/yurthub.yaml |\nsed 's|__kubernetes_master_address__|1.2.3.4:5678|;\ns|__bootstrap_token__|07401b.f395accd246ae52d|' > /tmp/yurthub-ack.yaml &&\nscp -i <yourt-ssh-identity-file> /tmp/yurthub-ack.yaml root@us-west-1.192.168.0.88:/etc/kubernetes/manifests\n"})}),"\n",(0,o.jsx)(t.p,{children:"and the Yurthub will be ready in minutes."}),"\n",(0,o.jsx)(t.h2,{id:"setup-yurt-tunnel-optional",children:"Setup Yurt-tunnel (Optional)"}),"\n",(0,o.jsxs)(t.p,{children:["Please refer to this ",(0,o.jsx)(t.a,{href:"https://github.com/openyurtio/openyurt.io/blob/master/docs/installation/yurt-tunnel-tutorial.md#5-setup-the-yurt-tunnel-manually",children:"document"})," to setup Yurttunnel manually."]}),"\n",(0,o.jsx)(t.h2,{id:"reset-the-kubelet",children:"Reset the Kubelet"}),"\n",(0,o.jsx)(t.p,{children:"By now, we have setup all required components for the OpenYurt cluster, next, we only need to reset the\nkubelet service to let it access the apiserver through the yurthub (The following steps assume that we are logged\nin to the edge node as the root user).\nAs kubelet will connect to the Yurthub through http, so we create a new kubeconfig file for the kubelet service."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"mkdir -p /var/lib/openyurt\ncat << EOF > /var/lib/openyurt/kubelet.conf\napiVersion: v1\nclusters:\n- cluster:\n    server: http://127.0.0.1:10261\n  name: default-cluster\ncontexts:\n- context:\n    cluster: default-cluster\n    namespace: default\n    user: default-auth\n  name: default-context\ncurrent-context: default-context\nkind: Config\npreferences: {}\nEOF\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In order to let kubelet to use the new kubeconfig, we edit the drop-in file of the kubelet\nservice (i.e., ",(0,o.jsx)(t.code,{children:"/etc/systemd/system/kubelet.service.d/10-kubeadm.conf"}),")"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'sed -i "s|KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=\\/etc\\/kubernetes\\/bootstrap-kubelet.conf\\ --kubeconfig=\\/etc\\/kubernetes\\/kubelet.conf|KUBELET_KUBECONFIG_ARGS=--kubeconfig=\\/var\\/lib\\/openyurt\\/kubelet.conf|g" \\\n    /etc/systemd/system/kubelet.service.d/10-kubeadm.conf\n'})}),"\n",(0,o.jsx)(t.p,{children:"Finally, we restart the kubelet service"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# assume we are logged in to the edge node already\n$ systemctl daemon-reload && systemctl restart kubelet\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(67294);const r={},l=o.createContext(r);function s(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);