"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[36246],{14466:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>r});var t=s(85893),o=s(11151);const i={title:"How to play with the web console"},c=void 0,a={id:"installation/openyurt-experience-center/web_console",title:"How to play with the web console",description:"This document will describe how to use the basic functions provided by the Experience Center Web Console.",source:"@site/versioned_docs/version-v1.3/installation/openyurt-experience-center/web_console.md",sourceDirName:"installation/openyurt-experience-center",slug:"/installation/openyurt-experience-center/web_console",permalink:"/docs/v1.3/installation/openyurt-experience-center/web_console",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-experience-center/web_console.md",tags:[],version:"v1.3",lastUpdatedBy:"Lixx",lastUpdatedAt:1713521278e3,frontMatter:{title:"How to play with the web console"},sidebar:"docs",previous:{title:"How to create an account in the experience center",permalink:"/docs/v1.3/installation/openyurt-experience-center/user"},next:{title:"How to use `kubeconfig` to experience OpenYurt capabilities",permalink:"/docs/v1.3/installation/openyurt-experience-center/kubeconfig"}},l={},r=[{value:"Web Console Overview",id:"web-console-overview",level:2},{value:"Join local nodes by Web Console",id:"join-local-nodes-by-web-console",level:2},{value:"Quickly deploy applications by OpenYurt Labs",id:"quickly-deploy-applications-by-openyurt-labs",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"This document will describe how to use the basic functions provided by the Experience Center Web Console."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"web-console-overview",children:"Web Console Overview"}),"\n",(0,t.jsx)(n.p,{children:'"Cluster Information" page includes application status, node status, dashboard connection status, and the namespaces assigned to users. (each user can only operate in their own namespace, please refer to the design documentation for details)'}),"\n",(0,t.jsx)(n.p,{children:"On the right side of the page is the navigation bar of the web console. In addition to displaying cluster information, the web console also provides functions such as node management, workload management, and labs."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(79068).Z+"",width:"1946",height:"1092"})}),"\n",(0,t.jsx)(n.h2,{id:"join-local-nodes-by-web-console",children:"Join local nodes by Web Console"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Users can get the access script through the web console and join their nodes to the OpenYurt cluster to experience the features of OpenYurt."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'Open the "Node Management/Node" page and click the Add Existing Node button.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(51024).Z+"",width:"1974",height:"1120"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Browser will pop up a dialog box showing the node access script, click Copy."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(40885).Z+"",width:"3584",height:"2024"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Execute the replicated script on your node. (Note: ",(0,t.jsx)(n.code,{children:"yurtctl"})," is required on your node)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(21375).Z+"",width:"3584",height:"2192"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["After successful execution, you can see the message ",(0,t.jsx)(n.code,{children:"This node has joined the cluster"})," in the command line. In addition, if you refresh the node page in the web console, you can see the joined nodes."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:s(844).Z+"",width:"3584",height:"1150"}),"\n",(0,t.jsx)(n.img,{src:s(17449).Z+"",width:"1414",height:"793"})]}),"\n",(0,t.jsx)(n.h2,{id:"quickly-deploy-applications-by-openyurt-labs",children:"Quickly deploy applications by OpenYurt Labs"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:'To further lower the barrier to new users, the web console also provides a "Lab" module that allows users to quickly deploy applications to their OpenYurt clusters.'}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Currently OpenYurt provides two sample applications, and will gradually improve the lab features."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(70309).Z+"",width:"1383",height:"793"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Click the settings button on an application card to customize the application settings (e.g. Deployment name, number of replicas, whether to create a corresponding Service, etc.) Once the settings are complete, click the Install button to automatically deploy the application."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(83910).Z+"",width:"1947",height:"1115"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["After the successful creation, the page will pop up the message ",(0,t.jsx)(n.code,{children:"install app xxx successfully"}),'. And you can see the details of Deployment and Pod in the "Container Group" and "Stateless" pages.']}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(32837).Z+"",width:"2062",height:"1128"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:'Additionally, you can uninstall applications directly from the web console\'s "Labs" page.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(42219).Z+"",width:"1953",height:"1122"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},21375:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/cmd_add_node-83b9d6a592930527ddab7c64f845603b.png"},844:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/cmd_add_node_success-597e741236b16ef14b3072ba767a2740.png"},70309:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/web_lab-bc6baacf2b9722262071c97abb22082f.png"},83910:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/web_lab_config-46ac717d25f4dd8aaedc3788feed92f7.png"},32837:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/web_lab_res-d01aee5904015c7e6935a513a8b607d1.png"},42219:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/web_lab_uninstall-af70eb262dbbc176e0afa33a0cde450b.png"},51024:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/web_node_add-ebf0a474ed382382b5184491bdfe0048.png"},17449:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/web_node_add_success-9ac987441fd934c53a2d63738a2b1b4e.png"},40885:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/web_node_script-2f2e791da1351ed6dd17d43f191cc6b1.png"},79068:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/web_overview-124bbea660e023dd2e4dec42c61032d2.png"},11151:(e,n,s)=>{s.d(n,{a:()=>c});var t=s(67294);const o={},i=t.createContext(o);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);