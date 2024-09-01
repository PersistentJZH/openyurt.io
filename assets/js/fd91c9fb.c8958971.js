"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[56523],{56155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(74848),s=n(28453);const r={title:"Local Up OpenYurt"},l=void 0,i={id:"developer-manuals/local-up-openyurt",title:"Local Up OpenYurt",description:"How to use",source:"@site/versioned_docs/version-v0.5.0/developer-manuals/local-up-openyurt.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/local-up-openyurt",permalink:"/docs/v0.5.0/developer-manuals/local-up-openyurt",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/local-up-openyurt.md",tags:[],version:"v0.5.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1725224557e3,frontMatter:{title:"Local Up OpenYurt"},sidebar:"docs",previous:{title:"How to Build and Test",permalink:"/docs/v0.5.0/developer-manuals/how-to-build-and-test"},next:{title:"CI Workflow",permalink:"/docs/v0.5.0/developer-manuals/ci-workflow"}},c={},u=[{value:"How to use",id:"how-to-use",level:2},{value:"What does the shell do for you",id:"what-does-the-shell-do-for-you",level:2},{value:"Reference",id:"reference",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,o.jsxs)(t.p,{children:["If you don't have the openyurt cluster, you can run the bash shell ",(0,o.jsx)(t.a,{href:"https://github.com/openyurtio/openyurt/blob/master/hack/make-rules/local-up-openyurt.sh",children:(0,o.jsx)(t.code,{children:"local-up-openyurt.sh"})})," to quickly set up the openyurt cluster at your local host.\nAssuming that you've entered the openyurt work path, the commad is as simple as follows:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"bash hack/local-up-openyurt.sh\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Then you can use ",(0,o.jsx)(t.code,{children:"kubectl"})," to interact with your OpenYurt cluster."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Note:\nThis script has only been tested on linux/amd64. If you encoutered \"ERROR: failed to load image ... not found\", it's possibly because of the compatibility problem of your platform. You'd better set up the cluster manually."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"what-does-the-shell-do-for-you",children:"What does the shell do for you"}),"\n",(0,o.jsxs)(t.p,{children:["In summary, the ",(0,o.jsx)(t.code,{children:"local-up-openyurt.sh"})," will use the local files under the openyurt work path to set up the cluster.  And you can specify the behavior of the shell through setting environment variables."]}),"\n",(0,o.jsxs)(t.p,{children:["First, it will set up a docker container to build required binaries and images. The Arch and OS platform of built binaries and images is the same as your local host. For instance, if your local host is linux/amd64, then only binaries for linux/amd64 will be built. Built binaries and images will be saved under ",(0,o.jsx)(t.code,{children:"_output"})," directory."]}),"\n",(0,o.jsxs)(t.p,{children:["Second, it will use ",(0,o.jsx)(t.code,{children:"kind"})," to set up the kubernetes cluster. You can set ",(0,o.jsx)(t.code,{children:"KUBERNETESVERSION"})," to specify the kubernetes version to use. For instance, ",(0,o.jsx)(t.code,{children:"export KUBERNETESVERSION=1.18"})," before running the shell will enable you to use kubernetes v1.18. In addition, you can set ",(0,o.jsx)(t.code,{children:"NODES_NUM"})," to specify the number of nodes the cluster will contain."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Note:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["The format of ",(0,o.jsx)(t.code,{children:"KUBERNETESVERSION"})," is ",(0,o.jsx)(t.code,{children:"1.xx"}),", other formats will not be accepted. The default KUBERNETESVERSION is ",(0,o.jsx)(t.code,{children:"1.20"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"NODES_NUM"})," should not be less than 2. Finally, the cluster will contains one control-plane node and ",(0,o.jsx)(t.code,{children:"NODES_NUM-1"})," woker nodes. The default ",(0,o.jsx)(t.code,{children:"NODES_NUM"})," is 2."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Third, ",(0,o.jsx)(t.code,{children:"yurtctl"})," will be used to convert the Kubernetes cluster into OpenYurt cluter. It will use images built earlier to deploy OpenYurt components, including ",(0,o.jsx)(t.code,{children:"yurthub"}),", ",(0,o.jsx)(t.code,{children:"yurt-controller-manager"}),", ",(0,o.jsx)(t.code,{children:"yurt-tunnel-server"})," and ",(0,o.jsx)(t.code,{children:"yurt-tunnel-agent"}),". You can disable ",(0,o.jsx)(t.code,{children:"yurt-tunnel"})," through ",(0,o.jsx)(t.code,{children:"export YURTTUNNEL=disable"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["By now, you've got the OpenYurt cluster at your local host and you can interact with it using ",(0,o.jsx)(t.code,{children:"kubectl"}),". ",(0,o.jsx)(t.code,{children:"kind"})," will automatically stored the kubeconfig at your ",(0,o.jsx)(t.code,{children:"KUBECONFIG"})," path (default path is ",(0,o.jsx)(t.code,{children:"${HOME}/.kube/config)"}),". If you already have the ",(0,o.jsx)(t.code,{children:"KUBECONFIG"})," to interact with other clusters, ",(0,o.jsx)(t.code,{children:"kind"})," will add a new context of openyurt cluster into the ",(0,o.jsx)(t.code,{children:"KUBECONFIG"})," and automatically switch to it. You can manually switch back to the previous context using command ",(0,o.jsx)(t.code,{children:"kubectl config use-context ${PREVIOUS_CONTEXT_NAME}"}),". For more details, you can see the ",(0,o.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/",children:"documentation"}),". You can store the kubeconfig at another path through setting ",(0,o.jsx)(t.code,{children:"KIND_KUBECONFIG"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,o.jsx)(t.p,{children:"Reference gives descriptions of all used environment variables."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"REGION"}),(0,o.jsx)(t.br,{}),"\n",'REGION affects the GOPROXY to use. You can set it to "cn" to use GOPROXY="',(0,o.jsx)(t.a,{href:"https://goproxy.cn",children:"https://goproxy.cn"}),'". Default value is "us", which means using GOPROXY="',(0,o.jsx)(t.a,{href:"https://goproxy.io",children:"https://goproxy.io"}),'".']}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"KIND_KUBECONFIG"}),(0,o.jsx)(t.br,{}),"\n","KIND_KUBECONFIG represents the path to store the kubeconfig file of the cluster which is created by this shell. The default value is ",(0,o.jsx)(t.code,{children:'"$HOME/.kube/config"'}),"."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"NODES_NUM"}),(0,o.jsx)(t.br,{}),"\n","NODES_NUM represents the number of nodes to set up in the new-created cluster. There are one control-plane node and NODES_NUM-1 worker nodes. Thus, NODES_NUM must not be less than 2. The default value is 2."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"KUBERNETESVERSION"}),(0,o.jsx)(t.br,{}),"\n",'KUBERNETESVERSION declares the kubernetes version the cluster will use. The format is "1.XX". Now only 1.18, 1.19 and 1.20 are supported. The default value is 1.20.']}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"TIMEOUT"}),(0,o.jsx)(t.br,{}),"\n","TIMEOUT represents the time to wait for the kind control-plane, yurt-tunnel-server and yurt-tunnel-agent to be ready. If they are not ready after the duration, the shell will exit. The default value is 120s."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"YURTTUNNEL"}),(0,o.jsx)(t.br,{}),"\n",'If set YURTTUNNEL=disable, the yurt-tunnel-agent and yurt-tunnel-server will not be deployed in the openyurt cluster. The default value is "enable".']})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var o=n(96540);const s={},r=o.createContext(s);function l(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);