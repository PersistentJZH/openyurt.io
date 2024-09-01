"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[40849],{52779:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>o});var n=t(74848),s=t(28453);const c={title:"yurthub"},i=void 0,u={id:"faq/yurthub",title:"yurthub",description:"1. yurthub\u6570\u636e\u7f13\u5b58\u76ee\u5f55",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/faq/yurthub.md",sourceDirName:"faq",slug:"/faq/yurthub",permalink:"/zh/docs/v1.2/faq/yurthub",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq/yurthub.md",tags:[],version:"v1.2",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1725224557e3,frontMatter:{title:"yurthub"},sidebar:"docs",previous:{title:"yurtadm_token",permalink:"/zh/docs/v1.2/reference/yurtadm/yurtadm_token"},next:{title:"yurtadm",permalink:"/zh/docs/v1.2/faq/yurtadm"}},l={},o=[];function d(e){const r={a:"a",code:"code",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"** 1. yurthub\u6570\u636e\u7f13\u5b58\u76ee\u5f55 **"}),"\n",(0,n.jsxs)(r.p,{children:["\u8fb9\u7f18\u8282\u70b9\u4e0ameta\u6570\u636e\u7f13\u5b58\u8def\u5f84\u4e3a\uff1a",(0,n.jsx)(r.code,{children:"/etc/kubernetes/cache/{componentName}/{resource}/{namespace}/{name}"})]}),"\n",(0,n.jsx)(r.p,{children:"** 2. yurthub\u7ec4\u4ef6\u4f7f\u7528\u8bc1\u4e66\u5b58\u50a8\u76ee\u5f55**"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"client\u8bc1\u4e66: /var/lib/yurthub/pki/yurthub-current.pem\n\u7528\u4e8e\u8bbf\u95ee\u4e91\u7aefkube-apiserver\uff0c\u6743\u9650\u540ckubelet\u8282\u70b9\u8bc1\u4e66"}),"\n",(0,n.jsx)(r.li,{children:"server\u8bc1\u4e66: /var/lib/yurthub/pki/yurthub-server-current.pem\n\u7528\u4e8eyurthub\u542f\u52a8https server\uff0c\u4e3a\u8fb9\u7f18\u8282\u70b9\u4e0a\u5404\u4e2a\u7ec4\u4ef6\u63d0\u4f9bTLS\u6821\u9a8c"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["\u76ee\u524d\u8bc1\u4e66\u6709\u6548\u671f\u7edf\u4e00\u7531kube-controller-manager\u7ec4\u4ef6\u51b3\u5b9a(\u9ed8\u8ba41\u5e74)\uff0c\u6682\u65f6\u4e0d\u652f\u6301\u7528\u6237\u81ea\u914d\u7f6e\u3002\u540c\u65f6\u8bc1\u4e66\u5728\u8fc7\u671f\u524dyurthub\u4f1a\u6267\u884c\u8bc1\u4e66\u8f6e\u8f6c\u8bf7\u6c42\u6765\u66f4\u65b0\u8bc1\u4e66\u3002\u5982\u679c\u7531\u4e8e\u7f51\u7edc\u539f\u56e0\u5bfc\u81f4\u8bc1\u4e66\u8fc7\u671f(\u8f6e\u8f6c\u5931\u8d25)\uff0cyurthub\u5c06\u4f7f\u7528bootstrap token\u91cd\u65b0\u7533\u8bf7\u8bc1\u4e66\u3002\u5f53\u7136bootstrap token\u4e5f\u8fc7\u671f\u7684\u8bdd\uff0c\u9700\u8981\u7528\u6237\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u6267\u884c: POST ",(0,n.jsx)(r.a,{href:"http://127.0.0.1:10267/v1/token",children:"http://127.0.0.1:10267/v1/token"}),' -D "jointoken',":xxx",'" \u6765\u66f4\u65b0bootstrap token\u5373\u53ef\uff0c\u6ce8\u610f\u524d\u9762\u7684xxx\u66ff\u6362\u4e3a\u6709\u6548\u7684bootstrap token\u3002']}),"\n",(0,n.jsx)(r.p,{children:"** 3. \u5982\u4f55\u67e5\u770b\u6709\u54ea\u4e9b\u8bf7\u6c42\u7ecf\u8fc7yurthub\u8f6c\u53d1\u7ed9kube-apiserver**"}),"\n",(0,n.jsxs)(r.p,{children:["\u8fb9\u7f18\u8282\u70b9\u4e0a\u6267\u884c\uff1acurl ",(0,n.jsx)(r.a,{href:"http://127.0.0.1:10267/metrics",children:"http://127.0.0.1:10267/metrics"})," \u67e5\u770b\u4e0b\u9762\u5185\u5bb9\u5373\u53ef\uff1a"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"img",src:t(37859).A+"",width:"1500",height:"345"})}),"\n",(0,n.jsx)(r.p,{children:"node_yurthub_in_flight_requests_collector\u6bcf\u4e00\u884c\u4ee3\u8868\u4e00\u79cd\u7c7b\u578b\u8bf7\u6c42\uff0c\u7531client/resource/verb\u4e09\u5143\u7ec4\u51b3\u5b9a\u3002\u540e\u9762\u7684\u6570\u5b570\u8868\u793a\u8bf7\u6c42\u53d1\u751f\u8fc7\uff0c\u4f46\u662f\u5f53\u524d\u5df2\u7ecf\u7ed3\u675f\u3002\u6570\u5b571\u8868\u793a\u4e3a\u5f53\u524d\u6709\u4e00\u4e2a1\u4e2a\u8be5\u8bf7\u6c42\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u6ce8\u610f\u70b9\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"list/watch\u4e00\u822c\u914d\u5957\u51fa\u73b0\u7684\uff0c\u5982\u679c\u53ea\u6709list\uff0c\u6ca1\u6709watch\uff0c\u53ef\u80fd\u610f\u5473list\u8bf7\u6c42\u6ca1\u6709\u7ed3\u675f\uff0c\u5728yurthub\u4e2d\u5361\u4f4f\u4e86\u3002\u6bd4\u5982\u96c6\u7fa4\u4e2d\u6ca1\u6709nodePool\u8d44\u6e90\u65f6\uff0c\u800cyurthub\u7684servicetopology filter\u4f1a\u4f9d\u8d56nodePool\u8d44\u6e90\u3002\u56e0\u6b64yurthub\u7684servicetopology filter\u4e00\u76f4\u65e0\u6cd5\u5c31\u7eea\uff0c\u4f1a\u963b\u585ecoredns/kube-proxy list endpointslices\u8bf7\u6c42\u3002"}),"\n",(0,n.jsx)(r.li,{children:"\u5982\u679cyurthub\u91cd\u542f\u4e86\uff0c\u53ef\u80fd\u51fa\u73b0\u53ea\u6709watch\uff0c\u6ca1\u6709list\u7684\u8bf7\u6c42\uff0c\u8fd9\u662f\u6b63\u5e38\u73b0\u8c61\u3002"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"** 4. \u5982\u4f55\u67e5\u770b\u8fb9\u7f18\u8282\u70b9\u5404\u4e2a\u7ec4\u4ef6\u4e0ekube-apiserver\u4ea4\u4e92\u7684\u901a\u4fe1\u6d41\u91cf **"}),"\n",(0,n.jsxs)(r.p,{children:["\u8fb9\u7f18\u8282\u70b9\u4e0a\u6267\u884c\uff1acurl ",(0,n.jsx)(r.a,{href:"http://127.0.0.1:10267/metrics",children:"http://127.0.0.1:10267/metrics"})," \u67e5\u770b\u4e0b\u9762\u5185\u5bb9\u5373\u53ef\uff1a"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"img",src:t(16717).A+"",width:"1500",height:"200"})}),"\n",(0,n.jsx)(r.p,{children:"\u901a\u8fc7node_yurthub_proxy_traffic_collector\u7684\u4fe1\u606f\uff0c\u53ef\u4ee5\u67e5\u770b\u5230\u5404\u4e2a\u8bf7\u6c42\u4ece\u4e91\u7aef\u8fd4\u56de\u6570\u636e\u7684\u603b\u6d41\u91cf\u3002\u5355\u4f4d\u4e3aByte\n\u6240\u4ee5\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684pod\uff0c\u4e00\u5b9a\u8981\u51cf\u5c11\u5bf9\u5927\u89c4\u6a21\u8d44\u6e90(\u5982node\uff0cpods\uff0cendpointslice\u7b49\u8d44\u6e90\u7684\u5168\u91cflist\u8bf7\u6c42)\uff0c\u5426\u5219\u4f1a\u5360\u7528\u5927\u91cf\u7684\u516c\u7f51\u5e26\u5bbd\u3002"}),"\n",(0,n.jsx)(r.p,{children:"** 5. \u4f7f\u7528InClusterConfig\u7684Pod\u6ca1\u6709\u7ecf\u8fc7yurthub\u8bbf\u95ee\u4e91\u7aef\u7684kube-apiserver **"}),"\n",(0,n.jsx)(r.p,{children:"\u4f7f\u7528yurtadm join\u5b89\u88c5\u7684\u8282\u70b9\uff0c\u8282\u70b9\u4e0a\u7684pod\u901a\u8fc7InClusterConfig\u8bbf\u95eekube-apiserver\u65f6\uff0c\u8bf7\u6c42\u4f1a\u81ea\u52a8\u7ecf\u8fc7yurthub\u8fdb\u884c\u8f6c\u53d1\uff0c\u4ece\u800c\u590d\u7528\u5230yurthub\u7684\u6570\u636e\u7f13\u5b58\uff0c\u8fc7\u6ee4\uff0c\u6d41\u91cf\u7edf\u8ba1\u7b49\u4e00\u7cfb\u5217\u80fd\u529b\u3002\u5982\u679c\u53d1\u73b0yurthub\u7684metrics\u5e76\u6ca1\u6709\u76f8\u5173\u8bf7\u6c42\u8bb0\u5f55\u65f6\uff0c\u53ef\u4ee5\u786e\u8ba4\u5982\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u786e\u5b9apod\u662f\u5426\u4f7f\u7528\u7684\u662fInClusterConfig\uff0c\u8fd8\u662f\u76f4\u63a5\u4f7f\u7528kube-apiserver\u5730\u5740\u8bbf\u95ee\u3002\u5982\u679c\u672a\u4f7f\u7528InClusterConfig\uff0c\u5148\u8c03\u6574Pod\u4f7f\u7528InClusterConfig\uff0c\u7136\u540e\u91cd\u542fPod\u3002"}),"\n",(0,n.jsx)(r.li,{children:"\u786e\u8ba4\u4e00\u4e0b\u673a\u5668\u4e0a\u7f13\u5b58\u6570\u636e/etc/kubernetes/cache/kubelet/services/default/kubernetes\u4e2d\u5185\u5bb9\uff0cService\u7684ClusterIP\u548cPort\u662f\u5426\u4e3ayurthub\u76d1\u542c\u5730\u5740(\u9ed8\u8ba4\u4e3a\uff1a169.254.2.1:10268)\u3002\u5982\u679c\u5185\u5bb9\u4e0d\u5bf9\uff0c\u8bf7\u91cd\u542fkubelet(systemctl restart kubelet)\u540e\u786e\u8ba4\u6539\u7f13\u5b58\u6570\u636e\u662f\u5426\u66f4\u65b0\u3002"}),"\n",(0,n.jsx)(r.li,{children:"\u67e5\u770bPod(\u5bb9\u5668)\u4e2d\u7684\u73af\u5883\u53d8\u91cf: KUBERNETES_SERVICE_HOST\u548cKUBERNETES_SERVICE_PORT\uff0c\u5b83\u4eec\u7684\u503c\u662f\u5426\u5bf9\u5e94yurthub\u7684\u76d1\u542c\u5730\u5740(\u9ed8\u8ba4\u4e3a\uff1a169.254.2.1:10268)\u3002\u8bf7\u91cd\u5efapod(kubectl delete pod),\u786e\u8ba4\u73af\u5883\u53d8\u91cf\u662f\u5426\u66f4\u65b0\u3002"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"** 6. \u8fb9\u7f18\u8282\u70b9\u4e0a\uff0cservice topology\u80fd\u529b\u672a\u751f\u6548**"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u67e5\u770b/etc/kubernetes/cache/kube-proxy\u4e0b\u5bf9\u5e94endpointslice\u6570\u636e\u662f\u5426\u7b26\u5408service topology\u3002\u6570\u636e\u4e0d\u7b26\u5408\u9884\u671f\u65f6\uff0c\u91cd\u542fkube-proxy\u540e\u770b\u518d\u786e\u8ba4\u6570\u636e\u662f\u5426\u66f4\u65b0\u3002"}),"\n",(0,n.jsx)(r.li,{children:"\u67e5\u770byurthub\u7684metrics\uff0c\u770bkube-proxy list endpointslice\u8bf7\u6c42\u662f\u5426\u7ed3\u675f(\u6570\u91cf\u4e3a0\u8868\u793a\u7ed3\u675f)\uff0c\u5982\u679c\u8be5list\u8bf7\u6c42\u6ca1\u6709\u7ed3\u675f\u7684\u8bdd\uff0c\u8bf4\u660eyurthub\u4e2d\u7684servicetopology filter\u8fd8\u6ca1\u6709ready\uff0c\u4e00\u822c\u662f\u56e0\u4e3a\u96c6\u7fa4\u4e2dnodePool\u8d44\u6e90\u6ca1\u6709\u521b\u5efa\u5bfc\u81f4\u7684\u3002"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"** 7. yurthub\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8\uff0c\u4e3b\u673a\u4e0a\u4e5f\u672a\u53d1\u73b0Exited\u7684yurthub\u5bb9\u5668**"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["journalctl -u kubelet\u67e5\u770bkubelet\u7ec4\u4ef6\u65e5\u5fd7\uff0c\u53d1\u73b0\u6709\u9519\u8bef\u4fe1\u606f\uff1a",(0,n.jsx)(r.code,{children:"dial tcp 127.0.0.1:10261: connect: connection refused"}),"\uff0c\u8868\u793aYurthub\u672a\u6b63\u5e38\u542f\u52a8"]}),"\n",(0,n.jsx)(r.li,{children:"docker ps -a\u67e5\u770b\u4e3b\u673a\u4e0a\u662f\u5426\u6709Exited\u72b6\u6001\u7684yurthub\u5bb9\u5668"}),"\n",(0,n.jsx)(r.li,{children:"\u5982\u679c\u6ca1\u6709Exited\u72b6\u6001\u7684yurthub\u5bb9\u5668\uff0c\u8bf7\u5728kubelet\u65e5\u5fd7\u67e5\u770byurthub\u65e0\u6cd5\u542f\u52a8\u539f\u56e0"}),"\n",(0,n.jsx)(r.li,{children:"\u5982\u679c\u6709Exited\u72b6\u6001\u7684yurthub\u5bb9\u5668\uff0cdocker logs\u67e5\u770bExited yurthub\u5bb9\u5668\u65e5\u5fd7\uff0c\u5206\u6790\u65e0\u6cd5\u542f\u52a8\u539f\u56e0\u3002"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"** 8. yurthub\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8\uff0c\u65e5\u5fd7\u663e\u793a\u5728\u7b49\u5f85\u8bc1\u4e66\u751f\u6210 **"}),"\n",(0,n.jsx)(r.p,{children:"yurthub\u9700\u8981\u7684\u8bc1\u4e66\u6ca1\u6709\u751f\u6210\u6210\u529f\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u8ff0\u65b9\u6cd5\u6765\u5b9a\u4f4d\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u5bf9\u96c6\u7fa4\u6267\u884c\uff1akubectl get csr\uff0c\u67e5\u770b\u76f8\u5173\u8282\u70b9\u7684\u8bc1\u4e66csr\u662f\u5426\u6709\u751f\u6210"}),"\n",(0,n.jsx)(r.li,{children:"\u5982\u679ccsr\u672a\u751f\u6210\uff0c\u4e00\u822c\u662f\u4f20\u5165\u7684bootstrap token\u662f\u65e0\u6548\u7684token\uff0c\u6e05\u7406\u8282\u70b9\u540e\uff0c\u4f7f\u7528\u6709\u6548bootstrap token\u518d\u63a5\u5165\u5373\u53ef\u3002"}),"\n",(0,n.jsx)(r.li,{children:"\u5982\u679ccsr\u5df2\u7ecf\u751f\u6210\uff0c\u4f46\u662f\u72b6\u6001\u4e00\u76f4\u662fpending\u72b6\u6001\uff0c\u8868\u793ayurt-manager\u4e00\u76f4\u65e0\u6cd5approve\u8be5csr\u3002\u67e5\u770byurt-manager\u662f\u5426\u5df2\u7ecf\u5b89\u88c5\u5e76\u6b63\u5e38\u5de5\u4f5c\u3002"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"** 9. \u8fb9\u7f18\u8282\u70b9\u4e0ayurthub\u7f13\u5b58\u4e2d\u7684\u67d0\u4e2a\u7ec4\u4ef6\u7684metadata\u88ab\u5220\u9664\u4e86\uff0c\u5982\u4f55\u6062\u590d**"}),"\n",(0,n.jsx)(r.p,{children:"\u8282\u70b9\u548c\u4e91\u7aef\u7f51\u7edc\u8fde\u63a5\u6b63\u5e38\u72b6\u6001\u4e0b\uff0c\u91cd\u5efa\u4e00\u4e0b\u5bf9\u5e94pod\u5373\u53ef\u6062\u590d\u76f8\u5173\u7f13\u5b58meta\u6570\u636e\u3002"}),"\n",(0,n.jsx)(r.p,{children:"** 10. \u8282\u70b9\u63a5\u5165\u65f6\uff0cyurthub\u6b63\u5e38\u542f\u52a8\u6210\u529f\uff0c\u4f46\u662f\u6240\u6709\u8bf7\u6c42\u4e00\u76f4\u62a5\u8bc1\u4e66\u9519\u8bef\uff1f**"}),"\n",(0,n.jsx)(r.p,{children:"\u8fd9\u79cd\u60c5\u51b5\u53ef\u80fd\u662f\u56e0\u4e3a\u8282\u70b9\u4e0a\u6709\u6b8b\u7559\u7684yurthub\u8bc1\u4e66\uff0c\u5bfc\u81f4Yurthub\u542f\u52a8\u65f6\u590d\u7528\u4e86\u8be5\u8bc1\u4e66\uff0c\u4ece\u800c\u4ea7\u751f\u8bc1\u4e66\u62a5\u9519\u7684\u95ee\u9898\u3002\u53ef\u4ee5\u5728/var/lib/yurthub/pki\u76ee\u5f55\u4e0b\u6267\u884cls -la\u770b\u4e0b\u5404\u4e2a\u6587\u4ef6\u7684\u751f\u6210\u65f6\u95f4\uff0c\u770b\u751f\u6210\u65f6\u95f4\u662f\u5426\u5408\u7406\u3002\n\u540c\u65f6\u5728\u5386\u53f2\u64cd\u4f5c\u8fc7\u7684\u8282\u70b9\uff0c\u91cd\u65b0\u63a5\u5165\u96c6\u7fa4\u65f6\uff0c\u5efa\u8bae\u5148\u6267\u884c\u4e00\u6b21yurtadm reset\uff0c\u5148\u6e05\u7406\u4e00\u4e0b\u8282\u70b9\u4e0a\u6570\u636e\u3002"}),"\n",(0,n.jsx)(r.p,{children:"** 11. \u7528\u6237\u81ea\u5df1\u7684pod\u7ecf\u8fc7Yurthub\u8bbf\u95ee\u4e91\u7aef\u7684kube-apiserver\uff0c\u4f46\u662f\u8fb9\u7f18\u8282\u70b9\u4e0a\u6ca1\u6709\u8be5Pod\u7684\u7f13\u5b58\u6570\u636e**"}),"\n",(0,n.jsx)(r.p,{children:"yurthub\u9ed8\u8ba4\u53ea\u4f1a\u4e3akubelet\uff0ckube-proxy\uff0ccoredns\uff0cflannel\uff0ctunnel-agent\u7ec4\u4ef6(\u901a\u8fc7http request heder\u4e2d\u7684User-Agent\u6765\u786e\u8ba4)\u7f13\u5b58\u6570\u636e\uff0c\u5176\u4ed6client(\u5982client-A)\u7684\u6570\u636e\u9700\u8981\u7f13\u5b58\uff0c\u9700\u8981\u5728kube-system/yurthub-cfg configmap\u4e2d\u7684cache_agents\u5b57\u6bb5\u4e2d\u589e\u52a0\uff1aclient-A\uff0c\u7136\u540e\u5220\u9664\u5e76\u91cd\u5efa\u8be5client-A Pod\u3002\n\u540c\u65f6cache_agents\u4e5f\u652f\u6301\u901a\u7528\u914d\u7f6e\u7b26\uff1a*, \u8fd9\u6837\u6240\u6709\u7684clients\u7684response\u90fd\u4f1a\u81ea\u52a8\u88ab\u7f13\u5b58\uff0c\u4f46\u662f\u7528\u6237\u9700\u8981\u91cd\u70b9\u5173\u6ce8\u7f13\u5b58\u7684\u78c1\u76d8\u5360\u7528\u72b6\u51b5\u3002"}),"\n",(0,n.jsx)(r.p,{children:"** 12. \u5982\u4f55\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684yurthub\u955c\u50cf**"}),"\n",(0,n.jsxs)(r.p,{children:["\u9996\u5148\u793e\u533a\u63d0\u4f9b\u7684\u955c\u50cf\u90fd\u6709\u7ecf\u8fc7trivy\u7684\u5b89\u5168\u626b\u63cf\uff0c\u7528\u6237\u53ef\u4ee5\u653e\u5fc3\u4f7f\u7528\u3002\u7531\u4e8eyurthub\u91c7\u7528static pod\u6a21\u5f0f\u90e8\u7f72\uff0c\u56e0\u6b64\u65e0\u6cd5\u901a\u8fc7imagePullSecrets\u65b9\u5f0f\u6765\u652f\u6301\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002\n\u7528\u6237\u9700\u8981\u63d0\u524d\u5728\u673a\u5668\u4e0a\u914d\u7f6eruntime\u6765\u652f\u6301\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002\u5982Containerd runtime\u79c1\u6709\u4ed3\u5e93\u914d\u7f6e\uff0c\u53ef\u4ee5\u53c2\u7167\uff1a",(0,n.jsx)(r.a,{href:"https://github.com/containerd/cri/blob/release/1.4/docs/registry.md#configure-registry-credentials",children:"https://github.com/containerd/cri/blob/release/1.4/docs/registry.md#configure-registry-credentials"})]}),"\n",(0,n.jsx)(r.p,{children:"** 13. \u7ec4\u4ef6\u5df2\u7ecf\u901a\u8fc7yurthub\u8bbf\u95ee\u4e91\u7aefkube-apiserver\uff0c\u4f46\u662f\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684\u7f13\u5b58\u76ee\u5f55\u4e2d\u627e\u4e0d\u5230\u76f8\u5173\u7684\u7f13\u5b58\u6570\u636e**"}),"\n",(0,n.jsxs)(r.p,{children:["\u4e3a\u51cf\u8f7b\u672c\u5730\u78c1\u76d8\u7f13\u5b58\u8d1f\u8f7d\uff0cyurthub\u9ed8\u8ba4\u53ea\u7f13\u5b58\u7ec4\u4ef6",(0,n.jsxs)(r.a,{href:"https://github.com/openyurtio/openyurt/blob/master/pkg/yurthub/util/util.go#L84",children:[(0,n.jsx)(r.code,{children:"kubelet"}),", ",(0,n.jsx)(r.code,{children:"kube-proxy"}),", ",(0,n.jsx)(r.code,{children:"flannel"}),", ",(0,n.jsx)(r.code,{children:"coredns"}),", ",(0,n.jsx)(r.code,{children:"yurt-tunnel-agent"}),", ",(0,n.jsx)(r.code,{children:"yurthub"}),", ",(0,n.jsx)(r.code,{children:"leader-yurthub"})]}),"\u4ece\u4e91\u7aef\u83b7\u53d6\u7684\u5143\u6570\u636e\u3002\n\u5982\u679c\u5176\u4ed6\u7ec4\u4ef6\u7684\u5143\u6570\u636e\u4e5f\u9700\u8981\u7f13\u5b58\uff0c\u5f00\u542f\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\u786e\u4fdd\u8be5\u7ec4\u4ef6\u53d1\u8d77\u7684HTTP\u8bf7\u6c42Header\u4e2d\u5e26\u6709",(0,n.jsx)(r.code,{children:"User-Agent"}),"\u4fe1\u606f\uff0cyurthub\u5c06\u6839\u636e",(0,n.jsx)(r.code,{children:"User-Agent header"}),"\u4e2d\u7b2c\u4e00\u4e2a",(0,n.jsx)(r.code,{children:"/"}),"\u524d\u9762\u7684\u5185\u5bb9\u6765\u786e\u5b9a\u7f13\u5b58\u76ee\u5f55\u4e2d\u7684",(0,n.jsx)(r.code,{children:"{componentName}"}),"\u3002\u5f53",(0,n.jsx)(r.code,{children:"User-Agent"}),"\u4e3a\u7a7a\u65f6\uff0c\u7ec4\u4ef6\u7684\u5143\u6570\u636e\u5c06\u65e0\u6cd5\u88ab\u7f13\u5b58"]}),"\n",(0,n.jsxs)(r.li,{children:["\u624b\u52a8\u914d\u7f6e",(0,n.jsx)(r.code,{children:"configmap kube-system/yurt-hub-cfg"}),"\u7684",(0,n.jsx)(r.code,{children:"cache_agents"}),"\u5b57\u6bb5\u6dfb\u52a0",(0,n.jsx)(r.code,{children:"{componentName}"}),"\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["\u5f53",(0,n.jsx)(r.code,{children:'cache_agents: "*"'}),"\u65f6\uff0c\u8868\u793a\u6240\u6709\u7ec4\u4ef6(\u5fc5\u987b\u5e26\u6709User-Agent header)\u4ece\u4e91\u7aef\u83b7\u53d6\u7684\u5143\u6570\u636e\u90fd\u5c06\u88ab\u7f13\u5b58\u3002\u7531\u4e8e\u4e0d\u5c11\u7ec4\u4ef6\u6709\u5927\u91cf\u7684list/watch\u8bf7\u6c42\uff0c\u5168\u90e8\u7f13\u5b58\u5c06\u5bf9\u672c\u5730\u78c1\u76d8\u5e26\u6765\u538b\u529b\uff0c\u56e0\u6b64\u9700\u8c28\u614e\u914d\u7f6e\u4e3a",(0,n.jsx)(r.code,{children:"*"}),"\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["\u914d\u7f6e\u591a\u4e2a\u7ec4\u4ef6\u4f7f\u7528",(0,n.jsx)(r.code,{children:","}),"\u5206\u9694\uff0c\u4f8b\u5982\u4e24\u4e2a\u7ec4\u4ef6\u7684",(0,n.jsx)(r.code,{children:"User-Agent header"}),"\u5206\u522b\u4e3a",(0,n.jsx)(r.code,{children:"foo/v1.0.0"}),"\u548c",(0,n.jsx)(r.code,{children:"bar123/v1.0.0"}),"\uff0c\u914d\u7f6e\u4fe1\u606f\u5982\u4e0b:"]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'   cache_agents: "foo, bar123"\n'})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},37859:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/flight-requests-in-yurthub-157930bc6238883bbcafc66294f11720.png"},16717:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/response-traffic-in-yurthub-2b7d371bc2fc30a8370af3e25e5061fc.png"},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>u});var n=t(96540);const s={},c=n.createContext(s);function i(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function u(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);