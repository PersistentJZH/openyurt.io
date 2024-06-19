"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[7472],{72623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var i=n(85893),o=n(11151);const r={title:"Yurtctl init/join"},l=void 0,s={id:"installation/yurtctl-init-join",title:"Yurtctl init/join",description:"1.Background",source:"@site/versioned_docs/version-v0.6.0/installation/yurtctl-init-join.md",sourceDirName:"installation",slug:"/installation/yurtctl-init-join",permalink:"/docs/v0.6.0/installation/yurtctl-init-join",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtctl-init-join.md",tags:[],version:"v0.6.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1718831342e3,frontMatter:{title:"Yurtctl init/join"},sidebar:"docs",previous:{title:"How to use `kubeconfig` to experience OpenYurt capabilities",permalink:"/docs/v0.6.0/installation/openyurt-experience-center/kubeconfig"},next:{title:"YurtCluster",permalink:"/docs/v0.6.0/installation/yurtcluster"}},c={},a=[{value:"1.Background",id:"1background",level:2},{value:"2.Process",id:"2process",level:2},{value:"2.1Compile Yurtctl",id:"21compile-yurtctl",level:3},{value:"2.2 Initialize the cluster",id:"22-initialize-the-cluster",level:3},{value:"2.4Joining nodes to cluster",id:"24joining-nodes-to-cluster",level:3},{value:"3.Implement details",id:"3implement-details",level:2},{value:"3.1 Yurtctl init",id:"31-yurtctl-init",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"1background",children:"1.Background"}),"\n",(0,i.jsx)(t.p,{children:"In order to allow users to quickly obtain an OpenYurt test cluster, OpenYurt provides the command Yurtctl init to initialize the cluster. Users only need to select the version of the OpenYurt cluster mirror to create the corresponding version of OpenYurt. Then Yurt-APP-Manager, Yurt-Controller-Manager, Yurttunnel -Server, Yurttunnel-Agent components will be automatically deployed."}),"\n",(0,i.jsx)(t.p,{children:"To expand the cluster later, users can use the Yurtctl join command to add edge nodes or cloud nodes to the cluster."}),"\n",(0,i.jsx)(t.h2,{id:"2process",children:"2.Process"}),"\n",(0,i.jsx)(t.h3,{id:"21compile-yurtctl",children:"2.1Compile Yurtctl"}),"\n",(0,i.jsx)(t.p,{children:"When initializing the cluster, you need to obtain the Yurtctl executable first. To quickly build and install yurtctl , you can execute the following command to complete the installation if the build system has golang 1.13+ and bash installed:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:'$ git clone https://github.com/openyurtio/openyurt.git\n$ cd openyurt\n$ make build WHAT="yurtctl" ARCH="amd64" REGION=cn\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The executable will be stored in the ",(0,i.jsx)(t.code,{children:"_output/bin/"})," directory."]}),"\n",(0,i.jsx)(t.h3,{id:"22-initialize-the-cluster",children:"2.2 Initialize the cluster"}),"\n",(0,i.jsx)(t.p,{children:"Execute the following command to initialize the cluster:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"$ _output/bin/yurtctl init --apiserver-advertise-address 1.2.3.4 --openyurt-version latest --passwd 1234\n"})}),"\n",(0,i.jsx)(t.p,{children:"The main parameters are:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:" --apiserver-advertise-address    IP address of the master node\n --passwd                         ssh password of the master node\n --openyurt-version               version of the OpenYurt cluster\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.code,{children:"-h"}),"  to configure more information."]}),"\n",(0,i.jsx)(t.h3,{id:"24joining-nodes-to-cluster",children:"2.4Joining nodes to cluster"}),"\n",(0,i.jsx)(t.p,{children:"Users can join cloud nodes and edge nodes to the OpenYurt cluster using Yurtctl join. Note that when joining a node, the runtime needs to be installed on the node and the swap partition is turned off."}),"\n",(0,i.jsx)(t.p,{children:"Execute the following command to join the edge node to cluster:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --v=5\n"})}),"\n",(0,i.jsx)(t.p,{children:"Execute the following command to join the cloud node to cluster:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=cloud --discovery-token-unsafe-skip-ca-verification --v=5\n"})}),"\n",(0,i.jsxs)(t.p,{children:["When the runtime of the edge node is containerd, the ",(0,i.jsx)(t.code,{children:"cri-socket"})," parameter needs to be configured. For example, change the command above of joining the edge node to:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --cri-socket=/run/containerd/containerd.sock --v=5\n"})}),"\n",(0,i.jsx)(t.h2,{id:"3implement-details",children:"3.Implement details"}),"\n",(0,i.jsx)(t.h3,{id:"31-yurtctl-init",children:"3.1 Yurtctl init"}),"\n",(0,i.jsxs)(t.p,{children:["In order to reduce the difficulty of using Yurtctl init and improve the success probability of cluster installation, Yurtctl init initializes the OpenYurt cluster through the open source tool ",(0,i.jsx)(t.a,{href:"https://github.com/alibaba/sealer",children:"sealer"}),". In terms of implementation, Yurtctl init will download the sealer binary file, and sealer will download the cluster image officially provided by OpenYurt and install the cluster. In addition, Yurtctl init also supports user-specific configuration of OpenYurt cluster images."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{a:()=>l});var i=n(67294);const o={},r=i.createContext(o);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);