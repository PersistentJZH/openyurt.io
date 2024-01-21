"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[26244],{68215:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>p});var r=s(85893),i=s(11151);const o={title:"\u8fb9\u7f18Ingress"},l=void 0,t={id:"user-manuals/network/edge-ingress",title:"\u8fb9\u7f18Ingress",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\u901a\u8fc7\u8fb9\u7f18Ingress\u8bbf\u95ee\u6307\u5b9a\u8282\u70b9\u6c60\u63d0\u4f9b\u7684\u670d\u52a1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/user-manuals/network/edge-ingress.md",sourceDirName:"user-manuals/network",slug:"/user-manuals/network/edge-ingress",permalink:"/zh/docs/v1.2/user-manuals/network/edge-ingress",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/edge-ingress.md",tags:[],version:"v1.2",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1705823197,formattedLastUpdatedAt:"2024\u5e741\u670821\u65e5",frontMatter:{title:"\u8fb9\u7f18Ingress"},sidebar:"docs",previous:{title:"\u670d\u52a1\u62d3\u6251",permalink:"/zh/docs/v1.2/user-manuals/network/service-topology"},next:{title:"\u53ef\u7f16\u7a0b\u7684\u8d44\u6e90\u8bbf\u95ee\u63a7\u5236",permalink:"/zh/docs/v1.2/user-manuals/resource-access-control/"}},c={},p=[{value:"1.\u542f\u7528\u6307\u5b9a\u8282\u70b9\u6c60\u4e0a\u7684\u8fb9\u7f18Ingress\u529f\u80fd",id:"1\u542f\u7528\u6307\u5b9a\u8282\u70b9\u6c60\u4e0a\u7684\u8fb9\u7f18ingress\u529f\u80fd",level:2},{value:"2.\u540cK8S\u4e00\u6837\u521b\u5efa\u5e76\u90e8\u7f72ingress\u89c4\u5219\u4ee5\u8bbf\u95ee\u76f8\u5e94\u7684\u670d\u52a1",id:"2\u540ck8s\u4e00\u6837\u521b\u5efa\u5e76\u90e8\u7f72ingress\u89c4\u5219\u4ee5\u8bbf\u95ee\u76f8\u5e94\u7684\u670d\u52a1",level:2}];function a(n){const e={br:"br",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\u901a\u8fc7\u8fb9\u7f18Ingress\u8bbf\u95ee\u6307\u5b9a\u8282\u70b9\u6c60\u63d0\u4f9b\u7684\u670d\u52a1\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5177\u4f53\u5e94\u7528\u573a\u666f\u4e3a\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u8282\u70b9\u6c60\u5185\u6216\u8282\u70b9\u6c60\u5916\u901a\u8fc7\u8fb9\u7f18ingress\u8bbf\u95ee\u8282\u70b9\u6c60\u5185\u63d0\u4f9b\u7684\u670d\u52a1\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u8282\u70b9\u6c60\u5916\u8bbf\u95eenginx ingress controller\uff0c\u76ee\u524d\u652f\u6301\u901a\u8fc7NodePort Service\u53caexternalIPs\u7684\u65b9\u5f0f\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5177\u4f53\u7528\u6cd5\u4e3a\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u542f\u7528\u6307\u5b9a\u8282\u70b9\u6c60\u4e0a\u7684\u8fb9\u7f18Ingress\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u540cK8S\u4e00\u6837\u521b\u5efa\u5e76\u90e8\u7f72ingress\u89c4\u5219\u4ee5\u8bbf\u95ee\u76f8\u5e94\u7684\u670d\u52a1\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u8bf7\u6309\u4ee5\u4e0b\u6b65\u9aa4\u5c1d\u8bd5\u4f7f\u7528\u8fb9\u7f18Ingress\u529f\u80fd\uff1a"}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"1\u542f\u7528\u6307\u5b9a\u8282\u70b9\u6c60\u4e0a\u7684\u8fb9\u7f18ingress\u529f\u80fd",children:"1.\u542f\u7528\u6307\u5b9a\u8282\u70b9\u6c60\u4e0a\u7684\u8fb9\u7f18Ingress\u529f\u80fd"}),"\n",(0,r.jsx)(e.p,{children:"YurtIngress opeator\u8d1f\u8d23\u5c06nginx ingress controller\u7f16\u6392\u5230\u9700\u8981\u542f\u7528\u8fb9\u7f18Ingress\u529f\u80fd\u7684\u8282\u70b9\u6c60\u4e2d\u3002\n\u5047\u8bbe\u60a8\u7684OpenYurt\u96c6\u7fa4\u4e2d\u67094\u4e2a\u8282\u70b9\u6c60\uff1apool01\u3001pool02\u3001pool03\u3001pool04\uff0c\u5982\u679c\u60a8\u60f3\u8981\u5728pool01\u548cpool03\u4e0a\u542f\u7528\u8fb9\u7f18ingress\u529f\u80fd\uff0c\u53ef\u4ee5\u6309\u5982\u4e0b\u65b9\u5f0f\u521b\u5efaYurtIngress CR\uff1a"}),"\n",(0,r.jsx)(e.p,{children:"1). \u521b\u5efaYurtIngress CR yaml\u6587\u4ef6:"}),"\n",(0,r.jsx)(e.p,{children:"1.1\uff09. YurtIngress CR\u7684\u7b80\u5355\u5b9a\u4e49:"}),"\n",(0,r.jsx)(e.p,{children:"apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtIngress\nmetadata:\nname: yurtingress-test\nspec:\npools:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"name: pool01"}),"\n",(0,r.jsx)(e.li,{children:"name: pool03"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u9ed8\u8ba4\u4e3a\u6bcf\u4e2a\u8282\u70b9\u6c60\u521b\u5efa\u7684nginx ingress\u63a7\u5236\u5668\u526f\u672c\u6570\u4e3a1",(0,r.jsx)(e.br,{}),"\n","\u9ed8\u8ba4\u7684ingress\u63a7\u5236\u5668docker image\u4e3a\uff1ak8s.gcr.io/ingress-nginx/controller",":v0",".48.1",(0,r.jsx)(e.br,{}),"\n","\u9ed8\u8ba4\u7684\u751f\u6210ingress\u63a7\u5236\u5668webhook\u8bc1\u4e66\u7684docker image\u4e3a\uff1ak8s.gcr.io/ingress-nginx/kube-webhook-certgen",":v0",".48.1"]}),"\n",(0,r.jsx)(e.p,{children:"1.2\uff09. \u5982\u679c\u7528\u6237\u4e0d\u60f3\u4f7f\u7528\u9ed8\u8ba4\u7684\u914d\u7f6e\uff0c\u800c\u662f\u60f3\u5bf9\u8282\u70b9\u6c60\u505a\u4e00\u4e9b\u4e2a\u6027\u5316\u914d\u7f6e\uff0c\u53ef\u4ee5\u5982\u4e0b\u5b9a\u4e49CR:"}),"\n",(0,r.jsxs)(e.p,{children:["apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtIngress\nmetadata:\nname: yurtingress-test\nspec:\ningress_controller_replicas_per_pool: 2\ningress_controller_image: k8s.gcr.io/ingress-nginx/controller",":v0",".49.0\ningress_webhook_certgen_image: k8s.gcr.io/ingress-nginx/kube-webhook-certgen",":v0",".49.0\npools:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["name: pool01\ningress_ips:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"xxx.xxx.xxx.xxx"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"name: pool03"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4e2d\uff1a",(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.code,{children:"igress_controller_replicas_per_pool"}),"/",(0,r.jsx)(e.code,{children:"ingress_controller_image"}),"/",(0,r.jsx)(e.code,{children:"ingress_webhook_certgen_image"}),"\u53ef\u4f9b\u7528\u6237\u81ea\u5b9a\u4e49\u76f8\u5173\u9ed8\u8ba4\u914d\u7f6e\uff0c\n",(0,r.jsx)(e.code,{children:"ingress_ips"})," \u4ee3\u8868\u5982\u679c\u7528\u6237\u60f3\u901a\u8fc7externalIPs\u7684\u65b9\u5f0f\u4e3a\u67d0\u4e2a\u7279\u5b9a\u7684\u8282\u70b9\u6c60\u5bf9\u5916\u66b4\u9732nginx ingress\u63a7\u5236\u5668\u670d\u52a1\u7684\u516c\u7f51IP\u5730\u5740\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u63d0\u793a\uff1a"}),"\n",(0,r.jsx)(e.p,{children:"a). \u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49\u4e0d\u540c\u7684YurtIngress CRs\u6765\u5bf9\u4e0d\u540c\u8282\u70b9\u6c60\u505a\u4e00\u4e9b\u4e2a\u6027\u5316\u914d\u7f6e\uff0c\u6bd4\u5982\u901a\u8fc7\u5b9a\u4e49\u4e0d\u540c\u7684CR\u6765\u5bf9\u4e0d\u540c\u7684\u8282\u70b9\u6c60\u914d\u7f6e\u4e0d\u540c\u7684ingress\u63a7\u5236\u5668\u526f\u672c\u6570\u3002"}),"\n",(0,r.jsx)(e.p,{children:"b). \u5728spec\u4e2d\uff0c\u201cingress_controller_replicas_per_pool\u201d\u8868\u793a\u90e8\u7f72\u5728\u6bcf\u4e2a\u8282\u70b9\u6c60\u4e0a\u7684ingress\u63a7\u5236\u5668\u526f\u672c\u6570\uff0c\u5b83\u4e3b\u8981\u7528\u4e8eHA\u9ad8\u53ef\u7528\u573a\u666f\u3002"}),"\n",(0,r.jsx)(e.p,{children:"c). \u5728spec\u4e2d\uff0c\u201cpools\u201d\u8868\u793a\u8981\u5728\u5176\u4e0a\u5f00\u542fingress\u529f\u80fd\u7684\u8282\u70b9\u6c60\u5217\u8868\uff0c\u76ee\u524d\u652f\u6301\u8282\u70b9\u6c60\u540d\u53ca\u9488\u5bf9\u8be5\u8282\u70b9\u6c60\u7684ingress\u670d\u52a1\u516c\u7f51IP\u914d\u7f6e\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["2). \u90e8\u7f72YurtIngress CR yaml\u6587\u4ef6\uff1a",(0,r.jsx)(e.br,{}),"\n","\u5047\u5b9aCR\u6587\u4ef6\u540d\u4e3ayurtingress-test.yaml\uff1a"]}),"\n",(0,r.jsx)(e.p,{children:"#kubectl apply -f yurtingress-test.yaml\nyurtingress.apps.openyurt.io/yurtingress-test created"}),"\n",(0,r.jsx)(e.p,{children:"\u7136\u540e\u60a8\u53ef\u4ee5\u67e5\u770bYurtIngress CR\u7684\u72b6\u6001:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"    #kubectl get ying\n    NAME                 REPLICAS-PER-POOL   READYNUM   NOTREADYNUM   AGE\n    yurtingress-test     1                   2          0             3m13s\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6210\u529f\u7f16\u6392ingress controller\u540e\uff0c\u6bcf\u4e2a\u8282\u70b9\u6c60\u5c06\u66b4\u9732\u4e00\u4e2aNodePort\u7c7b\u578b\u7684Service\u670d\u52a1\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"    #kubectl get svc -n ingress-nginx\n    ingress-nginx  pool01-ingress-nginx-controller  NodePort  192.167.107.123  <none>   80:32255/TCP,443:32275/TCP  53m\n    ingress-nginx  pool03-ingress-nginx-controller  NodePort  192.167.48.114   <none>   80:30531/TCP,443:30916/TCP  53m\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u63d0\u793a:"}),"\n",(0,r.jsx)(e.p,{children:"a). \u201cying\u201d\u662fYurtIngress\u8d44\u6e90\u7684\u7b80\u79f0"}),"\n",(0,r.jsx)(e.p,{children:"b). \u5f53\u201cREADYNUM\u201d\u4e0e\u60a8\u90e8\u7f72\u7684\u8282\u70b9\u6c60\u6570\u91cf\u4e00\u81f4\u65f6\uff0c\u8868\u793aingress\u529f\u80fd\u5728\u60a8\u5b9a\u4e49\u7684\u6240\u6709\u8282\u70b9\u6c60\u4e0a\u5df2\u5c31\u7eea\u3002"}),"\n",(0,r.jsx)(e.p,{children:"c). \u5f53\u201cNOTREADYNUM\u201d\u4e00\u76f4\u4e0d\u4e3a0\u65f6\uff0c\u53ef\u4ee5\u67e5\u770bCR\u7684\u72b6\u6001\u4e86\u89e3\u76f8\u5173\u4fe1\u606f\uff0c\u60a8\u8fd8\u53ef\u4ee5\u67e5\u770b\u76f8\u5e94\u7684deployment\u53capod\u4ee5\u83b7\u53d6\u66f4\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\uff0c\u4ece\u800c\u627e\u51faingress\u529f\u80fd\u5c1a\u672a\u5c31\u7eea\u7684\u539f\u56e0\u3002"}),"\n",(0,r.jsx)(e.p,{children:"d). \u5bf9\u4e8e\u6210\u529f\u542f\u7528ingress\u529f\u80fd\u7684\u6bcf\u4e2aNodePool\uff0c\u4f1a\u4e3a\u7528\u6237\u66b4\u9732\u4e00\u4e2aNodePort\u7c7b\u578b\u7684\u670d\u52a1\u7528\u6765\u8bbf\u95eenginx ingress controller\u3002"}),"\n",(0,r.jsx)(e.p,{children:'e). YurtIngress operator\u4f1a\u521b\u5efa\u4e00\u4e2a"ingress-nginx"\u7684namespace\uff0c\u7f16\u6392nginx ingress controller\u65f6\uff0c\u6240\u6709\u8ddfnamespace\u76f8\u5173\u7684resource\u90fd\u4f1a\u88ab\u90e8\u7f72\u5728\u8fd9\u4e2anamespace\u4e0b\u3002'}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"2\u540ck8s\u4e00\u6837\u521b\u5efa\u5e76\u90e8\u7f72ingress\u89c4\u5219\u4ee5\u8bbf\u95ee\u76f8\u5e94\u7684\u670d\u52a1",children:"2.\u540cK8S\u4e00\u6837\u521b\u5efa\u5e76\u90e8\u7f72ingress\u89c4\u5219\u4ee5\u8bbf\u95ee\u76f8\u5e94\u7684\u670d\u52a1"}),"\n",(0,r.jsx)(e.p,{children:"\u5f53\u4e0a\u8ff0\u6b65\u9aa41\u5b8c\u6210\u540e\uff0c\u60a8\u5df2\u7ecf\u901a\u8fc7Yurtingress\u6210\u529f\u7684\u5c06nginx ingress controller\u90e8\u7f72\u5230\u76f8\u5e94\u7684\u8282\u70b9\u6c60\u4e2d\u3002\u63a5\u4e0b\u6765\u7684\u7528\u6cd5\u5c31\u548cK8S\u4e2d\u4f7f\u7528ingress\u7684\u4f53\u9a8c\u4e00\u81f4\u4e86\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5047\u8bbe\u60a8\u7684\u4e1a\u52a1\u5e94\u7528\u88ab\u90e8\u7f72\u5230\u4e86\u591a\u4e2a\u8282\u70b9\u6c60\u4e2d\uff0c\u5e76\u4e14\u5b83\u4eec\u901a\u8fc7\u4e00\u4e2a\u5168\u5c40\u7684service\u5bf9\u5916\u66b4\u9732\uff0c\u4e3e\u4e2a\u4f8b\u5b50\uff1a"}),"\n",(0,r.jsx)(e.p,{children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: pool01-deployment\nlabels:\napp: echo\nspec:\nreplicas: 2\nselector:\nmatchLabels:\napp: echo\ntemplate:\nmetadata:\nlabels:\napp: echo\nspec:\ncontainers:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["name: echo-app\nimage: hashicorp/http-echo\nargs:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:'"-text=echo from nodepool pool01"\nimagePullPolicy: IfNotPresent\nnodeSelector:\napps.openyurt.io/nodepool: pool01'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: pool03-deployment\nlabels:\napp: echo\nspec:\nreplicas: 2\nselector:\nmatchLabels:\napp: echo\ntemplate:\nmetadata:\nlabels:\napp: echo\nspec:\ncontainers:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["name: echo-app\nimage: hashicorp/http-echo\nargs:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:'"-text=echo from nodepool pool03"\nimagePullPolicy: IfNotPresent\nnodeSelector:\napps.openyurt.io/nodepool: pool03'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"kind: Service\napiVersion: v1\nmetadata:\nname: echo-service\nspec:\nselector:\napp: echo\nports:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"port: 5678"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5f53\u60a8\u60f3\u8981\u8bbf\u95eepool01\u63d0\u4f9b\u7684\u670d\u52a1\u65f6\uff0c\u60a8\u53ef\u4ee5\u5982\u4e0b\u64cd\u4f5c\uff1a"}),"\n",(0,r.jsx)(e.p,{children:"1). \u521b\u5efaingress\u89c4\u5219yaml\u6587\u4ef6:"}),"\n",(0,r.jsx)(e.p,{children:"apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\nname: ingress-pool01\nannotations:\nkubernetes.io/ingress.class: pool01\ningress.kubernetes.io/rewrite-target: /\nspec:\nrules:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["http:\npaths:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"path: /echo\nbackend:\nserviceName: echo-service\nservicePort: 5678"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u63d0\u793a:"}),"\n",(0,r.jsx)(e.p,{children:"a). \u7531\u54ea\u4e2a\u8282\u70b9\u6c60\u63d0\u4f9bingress\u529f\u80fd\u662f\u7531ingress class\u51b3\u5b9a\u7684\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u5c06ingress class\u5b9a\u4e49\u4e3a\u60a8\u60f3\u8981\u8bbf\u95ee\u670d\u52a1\u7684\u8282\u70b9\u6c60\u540d\u79f0\u3002"}),"\n",(0,r.jsx)(e.p,{children:"b). \u4e0d\u540cK8S\u7248\u672c\u7684ingress CR\u5b9a\u4e49\u53ef\u80fd\u4e0d\u540c\uff0c\u60a8\u9700\u8981\u786e\u4fddingress CR\u7684\u5b9a\u4e49\u4e0e\u96c6\u7fa4K8S\u7248\u672c\u5339\u914d\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["2). \u90e8\u7f72ingress\u89c4\u5219yaml\u6587\u4ef6:",(0,r.jsx)(e.br,{}),"\n","\u5047\u5b9ayaml\u6587\u4ef6\u540d\u4e3aingress-myapp.yaml\uff1a"]}),"\n",(0,r.jsx)(e.p,{children:"#kubectl apply -f ingress-myapp.yaml\ningress.extensions/ingress-myapp created"}),"\n",(0,r.jsx)(e.p,{children:"\u6210\u529f\u5b8c\u6210\u4e0a\u8ff0\u6240\u6709\u6b65\u9aa4\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u901a\u8fc7ingress controller NodePort service\u9a8c\u8bc1\u8fb9\u7f18Ingress\u529f\u80fd\u4e86\uff1a"}),"\n",(0,r.jsx)(e.p,{children:"#curl xxx:32255/echo"}),"\n",(0,r.jsx)(e.p,{children:'"xxx"       \u4ee3\u8868\u8282\u70b9\u6c60pool01\u4e2d\u7684\u8282\u70b9IP\u5730\u5740\n"32255"     \u4ee3\u8868\u5bf9\u5e94\u8282\u70b9\u6c60\u4e2dingress controller\u66b4\u9732\u7684service NodePort'}),"\n",(0,r.jsx)(e.p,{children:"\u8fd4\u56de\u7ed3\u679c\u5e94\u8be5\u4e00\u76f4\u4e3a\uff1a \u201cecho from nodepool pool01\u201d\u3002"})]})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>t,a:()=>l});var r=s(67294);const i={},o=r.createContext(i);function l(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);