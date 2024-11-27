"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[77192],{92232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"installation/openyurt-experience-center/overview","title":"OpenYurt Experience Center Introduction","description":"Overview","source":"@site/versioned_docs/version-v1.2/installation/openyurt-experience-center/overview.md","sourceDirName":"installation/openyurt-experience-center","slug":"/installation/openyurt-experience-center/overview","permalink":"/docs/v1.2/installation/openyurt-experience-center/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-experience-center/overview.md","tags":[],"version":"v1.2","lastUpdatedBy":"tnsimon","lastUpdatedAt":1732695729000,"frontMatter":{"title":"OpenYurt Experience Center Introduction"},"sidebar":"docs","previous":{"title":"Join Nodes","permalink":"/docs/v1.2/installation/yurtadm-join"},"next":{"title":"How to create an account in the experience center","permalink":"/docs/v1.2/installation/openyurt-experience-center/user"}}');var s=n(74848),o=n(28453);const i={title:"OpenYurt Experience Center Introduction"},a=void 0,c={},l=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Architecture",id:"architecture",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["As an edge cloud native project, OpenYurt crosses edge computing and cloud native two fields. Many developers from edge computing background are not familiar with cloud native related technologies. In order to lower the threshold of using OpenYurt and help developers get started with OpenYurt quickly, our community has launched a platform called ",(0,s.jsx)(t.a,{href:"http://47.243.253.79/",children:"OpenYurt Experience Center"}),". Instead of building an OpenYurt cluster from scratch, new users who want to try out OpenYurt's features can simply apply for a test account on the platform and then they will have an available OpenYurt cluster right away."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(31244).A+"",width:"1408",height:"793"})}),"\n",(0,s.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(t.p,{children:["Platform will assign an OpenYurt cluster to each ",(0,s.jsx)(t.a,{href:"/docs/v1.2/installation/openyurt-experience-center/user",children:"registered user"}),". (Note that this cluster is not a full-featured K8s cluster and this means users can only operate under their own namespaces; refer to the Architecture section for details)"]}),"\n",(0,s.jsx)(t.p,{children:"OpenYurt Experience Center has provided two ways to use OpenYurt cluster:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Users can use the ",(0,s.jsx)(t.a,{href:"/docs/v1.2/installation/openyurt-experience-center/web_console",children:"Web Console"})," provided by platform to manage the cluster. The console displays the status of the cluster and provides some simple operations, such as: user management, node access, node autonomy settings, several OpenYurt applications, and so on."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(53484).A+"",width:"1946",height:"1092"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["The Experience Center also provides another way via ",(0,s.jsx)(t.a,{href:"/docs/v1.2/installation/openyurt-experience-center/kubeconfig",children:(0,s.jsx)(t.code,{children:"kubeconfig"})}),", where users can configure ",(0,s.jsx)(t.code,{children:"kubeconfig"})," locally and operate the cluster via the ",(0,s.jsx)(t.code,{children:"kubectl"})," command."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(36659).A+"",width:"1410",height:"793"})}),"\n",(0,s.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(76972).A+"",width:"1184",height:"947"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/openyurtio/yurt-dashboard",children:"Yurt-dashboard"})," is an open source project, and any suggestions and feedback are welcome.\nBesides, if you are interested in the implementation of the experience center, you can refer to the ",(0,s.jsx)(t.a,{href:"https://www.bilibili.com/video/BV1pf4y1K7M4",children:"video record"})," of biweekly meetings."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The experience center consists of three main parts:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Yurt Dashboard: yurt-dashboard is a web console similar to the kubernetes dashboard that contains front-end and back-end web applications. The front-end provides a graphical interface, while the back-end is responsible for communicating with the cluster's API Server."}),"\n",(0,s.jsx)(t.li,{children:"Account Controller: user information of the platform is stored in the cluster through CRD. Account Controller is responsible for managing the creation and deletion of user accounts and related resources (e.g. namespace, certificates, etc)."}),"\n",(0,s.jsx)(t.li,{children:"Autonomy Sidecar: all users in experience center share the same OpenYurt cluster. The Autonomy component implements multi-tenant isolation of the cluster, so that each user can share the same Master, and also has exclusive access to their own edge resources."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},76972:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/arch-3b0a5a9cd2cecdbfdd7ad8b5ce6c1795.png"},31244:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/register_blank-7209f48ba89832433874e9a6ee5defab.png"},36659:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/web_kubeconfig-a18a5efd468931241ad8d623298dbff9.png"},53484:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/web_overview-124bbea660e023dd2e4dec42c61032d2.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);