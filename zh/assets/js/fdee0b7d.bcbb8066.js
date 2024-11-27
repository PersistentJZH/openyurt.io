"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[44576],{51822:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"user-manuals/network/raven","title":"Raven","description":"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528Raven\u6765\u589e\u5f3a\u8fb9\u7f18\u96c6\u7fa4\u4e2d\u7684\u8fb9-\u8fb9\u548c\u8fb9-\u4e91\u7f51\u7edc\u6253\u901a\u80fd\u529b\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.4/user-manuals/network/raven.md","sourceDirName":"user-manuals/network","slug":"/user-manuals/network/raven","permalink":"/zh/docs/user-manuals/network/raven","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/raven.md","tags":[],"version":"v1.4","lastUpdatedBy":"tnsimon","lastUpdatedAt":1732695729000,"frontMatter":{"title":"Raven"},"sidebar":"docs","previous":{"title":"\u4e1a\u52a1\u4e0e\u8282\u70b9\u7ed1\u5b9a","permalink":"/zh/docs/user-manuals/autonomy/node-pod-binding"},"next":{"title":"\u51cf\u5c11\u4e91\u8fb9\u7f51\u7edc\u5e26\u5bbd","permalink":"/zh/docs/user-manuals/network/bandwidth-reduction"}}');var i=s(74848),r=s(28453);const t={title:"Raven"},l=void 0,o={},d=[{value:"1. \u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df",id:"1-\u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df",level:2},{value:"2. \u5982\u4f55\u4f7f\u7528",id:"2-\u5982\u4f55\u4f7f\u7528",level:2},{value:"2.1 Gateways",id:"21-gateways",level:3},{value:"2.2 \u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684Pod\u7f51\u7edc\u8054\u901a\u6027 (\u96a7\u9053\u6a21\u5f0f)",id:"22-\u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684pod\u7f51\u7edc\u8054\u901a\u6027-\u96a7\u9053\u6a21\u5f0f",level:3},{value:"2.3 \u4e91\u8fb9\u4e3b\u673a\u7f51\u7edc\u4e03\u5c42\u8bf7\u6c42\u4ee3\u7406 (\u4ee3\u7406\u6a21\u5f0f)",id:"23-\u4e91\u8fb9\u4e3b\u673a\u7f51\u7edc\u4e03\u5c42\u8bf7\u6c42\u4ee3\u7406-\u4ee3\u7406\u6a21\u5f0f",level:3}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528Raven\u6765\u589e\u5f3a\u8fb9\u7f18\u96c6\u7fa4\u4e2d\u7684\u8fb9-\u8fb9\u548c\u8fb9-\u4e91\u7f51\u7edc\u6253\u901a\u80fd\u529b\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u5047\u8bbe\u4f60\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a\u8fb9\u7f18kubernetes\u96c6\u7fa4\uff0c\u8282\u70b9\u5206\u5e03\u5728\u4e0d\u540c\u7684\u7269\u7406\u533a\u57df\u5982\u56fe\u6240\u793a\uff0c\u5e76\u4e14\u5df2\u7ecf\u5728\u8fd9\u4e2a\u96c6\u7fa4\u4e2d\u90e8\u7f72\u4e86",(0,i.jsx)(e.code,{children:"Yurt Manager"})," \u548c",(0,i.jsx)(e.code,{children:"Raven Agent"}),"\uff0c\u5982\u679c\u6ca1\u6709\u90e8\u7f72\u53ef\u4ee5\u53c2\u7167",(0,i.jsx)(e.a,{href:"/zh/docs/installation/manually-setup",children:"\u5b89\u88c5\u6559\u7a0b"}),"\u3002\n",(0,i.jsx)(e.img,{alt:"raven_deploy",src:s(37906).A+"",width:"720",height:"405"})]}),"\n",(0,i.jsx)(e.h2,{id:"1-\u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df",children:"1. \u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df"}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u4e0b\u6240\u793a\uff0c\u5047\u8bbe\u4f60\u7684\u8fb9\u7f18\u96c6\u7fa4\u4e2d\u6709\u4e94\u4e2a\u8282\u70b9\uff0c\u5206\u5e03\u5728\u4e09\u4e2a\u4e0d\u540c\u7684\u7269\u7406\uff08\u7f51\u7edc\uff09\u533a\u57df\uff0c\u5176\u4e2d\u8282\u70b9",(0,i.jsx)(e.code,{children:"master"}),"\u8282\u70b9\u540c\u6837\u4e5f\u662f\u4e91\u7aef\u8282\u70b9\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ kubectl get nodes -o wide\nNAME                      STATUS   ROLES                  AGE     VERSION    INTERNAL-IP     EXTERNAL-IP   OS-IMAGE                KERNEL-VERSION                CONTAINER-RUNTIME\nizbp15inok0kbfkg3in52rz   Ready    Edge-HZ-1              27h     v1.22.11   172.16.2.103    <none>        CentOS Linux 7 (Core)   3.10.0-1160.81.1.el7.x86_64   docker://19.3.15\nizbp15inok0kbfkg3in52sz   Ready    Edge-HZ-2              26h     v1.22.11   172.16.2.104    <none>        CentOS Linux 7 (Core)   3.10.0-1160.81.1.el7.x86_64   docker://19.3.15\nizm5eb24dmjfimuaybpnqzz   Ready    Edge-QD-1              29h     v1.22.11   172.16.1.89     <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://19.3.15\nizm5eb24dmjfimuaybpnr0z   Ready    Edge-QD-2              29h     v1.22.11   172.16.1.90     <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://19.3.15\nizwz9dohcv74iegqecp4axz   Ready    control-plane,master   5d21h   v1.22.11   192.168.0.195   <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://20.10.2\nizwz9ey0js5z7mornclpd6z   Ready    cloud                  3h3m    v1.22.11   192.168.0.196   <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://20.10.2\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4eec\u5bf9\u4f4d\u4e8e\u4e0d\u540c\u7269\u7406\uff08\u7f51\u7edc\uff09\u533a\u57df\u8282\u70b9\uff0c\u5206\u522b\u4f7f\u7528\u4e00\u4e2a",(0,i.jsx)(e.a,{href:"https://github.com/openyurtio/openyurt/blob/master/pkg/apis/raven/v1beta1/gateway_types.go",children:"Gateway"})," CR\u6765\u8fdb\u884c\u7ba1\u7406\u3002\u901a\u8fc7\u7ed9\u8282\u70b9\u6253\u6807\u7684\u65b9\u5f0f\uff0c\u6765\u6807\u8bc6\u8282\u70b9\u7531\u54ea\u4e2aGateway\u7ba1\u7406\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\uff0c\u6211\u4eec\u7ed9\u4f4d\u4e8e",(0,i.jsx)(e.code,{children:"hangzhou"}),"\u7684\u8282\u70b9\u6253",(0,i.jsx)(e.code,{children:"gw-hangzhou"}),"\u7684\u6807\u7b7e\uff0c\u6765\u8868\u660e\u8fd9\u4e9b\u8282\u70b9\u662f\u7531",(0,i.jsx)(e.code,{children:"gw-hangzhou"}),"\u8fd9\u4e2aGateway CR\u6765\u7ba1\u7406\u7684\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ kubectl label nodes izbp15inok0kbfkg3in52rz izbp15inok0kbfkg3in52sz raven.openyurt.io/gateway=gw-hangzhou\nnode/izbp15inok0kbfkg3in52rz not labeled\nnode/izbp15inok0kbfkg3in52sz not labeled\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u540c\u6837\u5730\uff0c\u6211\u4eec\u5206\u522b\u4e3a\u4f4d\u4e8e\u4e91\u7aef\u8282\u70b9\u548cmaster\u8282\u70b9\u6253\u4e0a",(0,i.jsx)(e.code,{children:"gw-cloud"}),"\uff0c\u548c\u7ed9\u4f4d\u4e8e",(0,i.jsx)(e.code,{children:"qingdao"}),"\u7684\u8282\u70b9\u6253",(0,i.jsx)(e.code,{children:"gw-qingdao"}),"\u7684\u6807\u7b7e\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ kubectl label nodes izwz9dohcv74iegqecp4axz izwz9ey0js5z7mornclpd6z raven.openyurt.io/gateway=gw-cloud\nnode/izwz9dohcv74iegqecp4axz labeled\nnode/izwz9ey0js5z7mornclpd6z labeled\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ kubectl label nodes izm5eb24dmjfimuaybpnqzz izm5eb24dmjfimuaybpnr0z raven.openyurt.io/gateway=gw-qingdao\nnode/izm5eb24dmjfimuaybpnqzz  labeled\nnode/izm5eb24dmjfimuaybpnr0z  labeled\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u68c0\u67e5\u76f8\u5e94\u7684Raven Agent\u7684Pod\u662f\u5426\u6210\u529f\u8fd0\u884c\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ kubectl get pod -n kube-system | grep raven-agent-ds\nraven-agent-ds-4b587                              1/1     Running             0              25h\nraven-agent-ds-dmh66                              1/1     Running             0              25h\nraven-agent-ds-gb5qj                              1/1     Running             0              25h\nraven-agent-ds-gzpfh                              1/1     Running             0              170m\nraven-agent-ds-ksxq6                              1/1     Running             0              25h\nraven-agent-ds-qhjtb                              1/1     Running             0              25h\n"})}),"\n",(0,i.jsx)(e.h2,{id:"2-\u5982\u4f55\u4f7f\u7528",children:"2. \u5982\u4f55\u4f7f\u7528"}),"\n",(0,i.jsx)(e.h3,{id:"21-gateways",children:"2.1 Gateways"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u521b\u5efa\u7684Gateway CR"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ cat <<EOF | kubectl apply -f -\napiVersion: raven.openyurt.io/v1beta1\nkind: Gateway\nmetadata:\n  name: gw-hangzhou\nspec:\n  proxyConfig:\n    Replicas: 1\n  tunnelConfig:\n    Replicas: 1\n  endpoints:\n    - nodeName: izbp15inok0kbfkg3in52rz\n      underNAT: true\n      port: 10262\n      type: proxy\n    - nodeName: izbp15inok0kbfkg3in52rz\n      underNAT: true\n      port: 4500\n      underNAT: true\n      type: tunnel\n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-cloud\nspec:\n  exposeType: PublicIP\n  proxyConfig:\n    Replicas: 1\n    proxyHTTPPort: 10255,9445\n    proxyHTTPSPort: 10250,9100\n  tunnelConfig:\n    Replicas: 1\n  endpoints:\n    - nodeName: izwz9dohcv74iegqecp4axz\n      underNAT: false\n      port: 10262\n      type: proxy\n      publicIP: 120.79.xxx.xxx\n    - nodeName: izwz9dohcv74iegqecp4axz\n      underNAT: false\n      port: 4500\n      type: tunnel\n      publicIP: 120.79.xxx.xxx\n\n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-qingdao\nspec:\n  proxyConfig:\n    Replicas: 1\n  tunnelConfig:\n    Replicas: 1\n  endpoints:\n  - nodeName: izm5eb24dmjfimuaybpnqzz\n    underNAT: true\n    port: 10262\n    type: proxy\n  - nodeName: izm5eb24dmjfimuaybpnr0z\n    underNAT: true\n    port: 4500\n    type: tunnel\nEOF\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u53c2\u6570\u4ecb\u7ecd\uff1a"}),"\n"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"spec.exposedType"}),": \u5728\u516c\u7f51\u66b4\u9732\u7684\u7c7b\u578b\uff0cLoadBalancer\u4e3a\u91c7\u7528\u8d1f\u8f7d\u5747\u8861\u66b4\u9732\u3001PublicIP\u4e3a\u91c7\u7528\u516c\u7f51IP\u66b4\u9732\uff0c\u7a7a\u4e3a\u4e0d\u66b4\u9732\uff0c\u4e00\u822c\u4e91\u4e0a\u66b4\u9732\uff0c\u8fb9\u7f18\u4e0d\u66b4\u9732"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"spec.endpoints"}),": \u8868\u793a\u4e00\u7ec4\u5907\u9009\u7684\u7f51\u5173\u8282\u70b9\uff0c\u63a7\u5236\u9762\u4f1a\u6839\u636e\u8282\u70b9\u72b6\u6001\u5728\u5176\u4e2d\u9009\u53d6\u4e00\u90e8\u5206\u4f5c\u4e3a\u7f51\u5173\u8282\u70b9"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"spec.endpoints.nodeName"}),": \u7f51\u5173\u8282\u70b9\u540d"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"spec.endpoints.type"}),": \u7f51\u5173\u8282\u70b9\u7684\u7c7b\u578b, \u4ee3\u7406\u6a21\u5f0f\u4e3aproxy\uff0c\u96a7\u9053\u6a21\u5f0f\u4e3atunnel"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"spec.endpoints.port"}),": \u7f51\u5173\u8282\u70b9\u670d\u52a1\u66b4\u9732\u7684\u7aef\u53e3\uff1a\u4ee3\u7406\u6a21\u5f0f\u4e00\u822c\u4e3aTCP 10262\uff0c\u96a7\u9053\u6a21\u5f0f\u4e3aUDP 4500"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"spec.endpoints.publicIP"}),": \u7f51\u5173\u8282\u70b9\u7684\u516c\u7f51\u5730\u5740"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"spec.endpoints.underNAT"}),": \u662f\u5426\u91c7\u7528NAT\u7684\u65b9\u5f0f\u8bbf\u95ee\u516c\u7f51\uff0c\u4e00\u822c\u4e91\u4e0a\u91c7\u7528false\uff0c\u8fb9\u7f18\u91c7\u7528true"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"spec.proxyConfig.Replicas"}),": \u652f\u6301\u4ee3\u7406\u6a21\u5f0f\u7684\u7f51\u5173\u8282\u70b9\u526f\u672c\u6570\uff0c\u4e0d\u5f97\u5927\u4e8eendpoints\u4e2d\u8282\u70b9\u6570"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"spec.proxyConfig.proxyHTTPPort"}),": \u4e91\u8fb9\u4ee3\u7406\u6a21\u5f0f\u901a\u4fe1\u4ee3\u7406\u7684\u975e\u5b89\u5168\u7aef\u53e3, \u4f8b\u5982kubelet\u76d1\u542c\u768410255\u7aef\u53e3"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"spec.proxyConfig.proxyHTTPPort"}),": \u4e91\u8fb9\u4ee3\u7406\u6a21\u5f0f\u901a\u4fe1\u4ee3\u7406\u7684\u5b89\u5168\u7aef\u53e3, \u4f8b\u5982kubelet\u76d1\u542c\u768410250\u7aef\u53e3"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"spec.tunnelConfig.proxyHTTPPort"}),": \u652f\u6301\u96a7\u9053\u6a21\u5f0f\u7684\u7f51\u5173\u8282\u70b9\u7684\u526f\u672c\u6570\uff0c\u76ee\u524d\u4e0d\u652f\u6301\u591a\u526f\u672c"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"status.activeEndpoints"}),": \u4ecespec.endpoints \u7684\u5907\u9009\u7f51\u5173\u8282\u70b9\u4e2d\u9009\u62e9\u6307\u5b9a\u6570\u91cf\u7684\u7f51\u5173\u8282\u70b9\uff0c\u6fc0\u6d3b\u7684\u7f51\u5173\u8282\u70b9\u4e0a\u7684RavenAgent\u4f5c\u4e3a\u8fd0\u884c\u5b9e\u4f8b\u8d1f\u8d23\u96a7\u9053\u6784\u5efa\u548c\u8def\u7531\u7ba1\u7406"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"status.nodes"}),": \u7531\u672cGateway\u8d1f\u8d23\u4ee3\u7406\u7684\u8282\u70b9"]}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u67e5\u770b\u5404\u4e2aGateway CR\u7684\u72b6\u6001"}),"\n"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u786e\u4fddGateway\u7684Status\u4e2d\u662f\u5426\u9009\u4e3e\u4e86\u7f51\u5173\u8282\u70b9\uff0c\u9009\u4e3e\u52a8\u4f5c\u7531Yurt-Manager\u7ec4\u4ef6GatewayPickup Controller\u8d1f\u8d23\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u786e\u8ba4\u516c\u7f51\u5730\u5740\u3001\u66b4\u9732\u7aef\u53e3\u662f\u5426\u6b63\u786e"}),"\n",(0,i.jsx)(e.li,{children:"\u786e\u8ba4\u5f00\u542f\u7684\u6a21\u5f0f\u662f\u5426\u8fbe\u5230\u9884\u671f"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5f00\u542f\u96a7\u9053\u6a21\u5f0f\uff0c\u8bbe\u7f6e ",(0,i.jsx)(e.code,{children:'enable-l3-tunnel: "true"'}),"\n\u5f00\u542f\u4ee3\u7406\u6a21\u5f0f\uff0c\u8bbe\u7f6e ",(0,i.jsx)(e.code,{children:'enable-l7-proxy: "true"'})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'$ kubectl get cm raven-cfg -n kube-system -o yaml\napiVersion: v1\ndata:\n  enable-l3-tunnel: "true"\n  enable-l7-proxy: "true"\nkind: ConfigMap\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: raven-agent\n    meta.helm.sh/release-namespace: kube-system\n  creationTimestamp: "2023-11-24T06:44:54Z"\n  labels:\n    app.kubernetes.io/managed-by: Helm\n  name: raven-cfg\n  namespace: kube-system\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'$ kubectl get gateways\n\nNAME          AGE\ngw-cloud      22h\ngw-hangzhou   22h\ngw-qingdao    22h\n\n$ kubectl get gateway gw-cloud -o yaml\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-cloud\nspec:\n  exposeType: PublicIP\n  proxyConfig:\n    Replicas: 1\n    proxyHTTPPort: 10255,9445\n    proxyHTTPSPort: 10250,9100\n  tunnelConfig:\n    Replicas: 1\n  endpoints:\n    - nodeName: izwz9dohcv74iegqecp4axz\n      underNAT: false\n      port: 10262\n      type: proxy\n      publicIP: 120.79.xxx.xxx\n    - nodeName: izwz9dohcv74iegqecp4axz\n      underNAT: false\n      port: 4500\n      type: tunnel\n      publicIP: 120.79.xxx.xxx\nstatus:\n  activeEndpoints:\n  - config:\n      enable-l7-proxy: "true"\n    nodeName: izwz9dohcv74iegqecp4axz\n    port: 10262\n    publicIP: 47.xxx.xxx.xxx\n    type: proxy\n  - config:\n      enable-l3-tunnel: "true"\n    nodeName: izwz9dohcv74iegqecp4axz\n    port: 4500\n    publicIP: 47.xxx.xxx.xxx\n    type: tunnel\n  nodes:\n  - nodeName: izwz9dohcv74iegqecp4axz\n    privateIP: 192.168.0.195\n    subnets:\n    - 10.224.0.128/26\n  - nodeName: izwz9ey0js5z7mornclpd6z\n    privateIP: 192.168.0.196\n    subnets:\n    - 10.224.0.0/26\n\n$ kubectl get gateway gw-hangzhou -o yaml\napiVersion: raven.openyurt.io/v1beta1\nkind: Gateway\nmetadata:\n  name: gw-hangzhou\nspec:\n  proxyConfig:\n    Replicas: 1\n  tunnelConfig:\n    Replicas: 1\n  endpoints:\n    - nodeName: izbp15inok0kbfkg3in52rz\n      underNAT: true\n      port: 10262\n      type: proxy\n    - nodeName: izbp15inok0kbfkg3in52rz\n      underNAT: true\n      port: 4500\n      underNAT: true\n      type: tunnel\nstatus:\n  activeEndpoints:\n  - config:\n      enable-l7-proxy: "true"\n    nodeName: izbp15inok0kbfkg3in52rz\n    port: 10262\n    publicIP: 120.79.xxx.xxx\n    type: proxy\n  - config:\n      enable-l3-tunnel: "true"\n    nodeName: izbp15inok0kbfkg3in52rz\n    port: 4500\n    publicIP: 120.79.xxx.xxx\n    type: tunnel\n  nodes:\n  - nodeName: izbp15inok0kbfkg3in52rz\n    privateIP: 172.16.2.103\n    subnets:\n    - 10.224.1.128/26\n  - nodeName: izbp15inok0kbfkg3in52sz\n    privateIP: 172.16.2.104\n    subnets:\n    - 10.224.1.0/26\n'})}),"\n",(0,i.jsx)(e.h3,{id:"22-\u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684pod\u7f51\u7edc\u8054\u901a\u6027-\u96a7\u9053\u6a21\u5f0f",children:"2.2 \u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684Pod\u7f51\u7edc\u8054\u901a\u6027 (\u96a7\u9053\u6a21\u5f0f)"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u521b\u5efa\u6d4b\u8bd5Pod"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'$ cat <<EOF | kubectl apply -f -\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: busy-box\nspec:\n  replicas: 4\n  selector:\n    matchLabels:\n      app: busy-box\n  template:\n    metadata:\n      labels:\n        app: busy-box\n    spec:\n      containers:\n      - name: busy-box\n        image: busybox\n        command:\n        - /bin/sh\n        - -c\n        - sleep 3000\n      nodeSelector:\n        openyurt.io/is-edge-worker: "true"\nEOF\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u786e\u5b9a\u6d4b\u8bd5Pod\u6b63\u5e38\u8fd0\u884c"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ kubectl get pod -o wide\nbusy-box-6f46f8585b-48zb9   1/1     Running   0          76s   10.244.19.3     izbp15inok0kbfkg3in52sz   <none>           <none>\nbusy-box-6f46f8585b-9nm64   1/1     Running   0          76s   10.244.16.161   izm5eb24dmjfimuaybpnqzz   <none>           <none>\nbusy-box-6f46f8585b-kv4dw   1/1     Running   0          76s   10.244.17.19    izm5eb24dmjfimuaybpnr0z   <none>           <none>\nbusy-box-6f46f8585b-t5v9d   1/1     Running   0          76s   10.244.18.4     izbp15inok0kbfkg3in52rz   <none>           <none>\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6d4b\u8bd5\u8de8\u7f51\u7edc\u57df\u7684Pod\u7f51\u7edc\u8054\u901a"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ kubectl exec -it busy-box-6f46f8585b-48zb9 -- sh\n/ # ping 10.244.17.19 -c 4\nPING 10.244.17.19 (10.244.17.19): 56 data bytes\n64 bytes from 10.244.17.19: seq=0 ttl=59 time=78.048 ms\n64 bytes from 10.244.17.19: seq=1 ttl=59 time=77.424 ms\n64 bytes from 10.244.17.19: seq=2 ttl=59 time=77.490 ms\n64 bytes from 10.244.17.19: seq=3 ttl=59 time=77.472 ms\n\n--- 10.244.17.19 ping statistics ---\n4 packets transmitted, 4 packets received, 0% packet loss\nround-trip min/avg/max = 77.424/77.608/78.048 ms\n\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6d4b\u8bd5\u8de8\u7f51\u7edc\u57df\u7684\u8282\u70b9\u7f51\u7edc\u8054\u901a: \u767b\u9646\u5230\u975eGateway\u8282\u70b9Edge-HZ-2 ping \u975eGateway\u8282\u70b9Edge-QD-2"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u8282\u70b9Edge-HZ-2(\u975eGateway\u8282\u70b9)\uff1a\nping 172.16.1.90 -c 4\nPING 172.16.1.90 (172.16.1.90) 56(84) bytes of data.\n64 bytes from 172.16.1.90: icmp_seq=1 ttl=61 time=77.5 ms\n64 bytes from 172.16.1.90: icmp_seq=2 ttl=61 time=77.3 ms\n64 bytes from 172.16.1.90: icmp_seq=3 ttl=61 time=78.5 ms\n64 bytes from 172.16.1.90: icmp_seq=4 ttl=61 time=77.3 ms\n\n--- 172.16.1.90 ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss, time 3003ms\nrtt min/avg/max/mdev = 77.314/77.682/78.531/0.533 ms\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u6293\u5305\n# \u8282\u70b9Edge-HZ-1(Gateway\u8282\u70b9)\uff1a\ntcpdump -i raven0\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes\n16:13:12.132496 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 1, length 64\n16:13:13.133606 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 2, length 64\n16:13:14.134172 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 3, length 64\n16:13:15.135570 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 4, length 64\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u6293\u5305\n# \u8282\u70b9Edge-QD-1(Gateway\u8282\u70b9)\uff1a\ntcpdump -i raven0\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes\n16:13:12.174023 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 1, length 64\n16:13:13.175096 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 2, length 64\n16:13:14.176813 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 3, length 64\n16:13:15.177024 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 4, length 64\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u6293\u5305\n# \u8282\u70b9Edge-QD-2(\u975eGateway\u8282\u70b9)\uff1a\ntcpdump -i raven0\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes\n16:13:12.173087 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 1, length 64\n16:13:13.174148 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 2, length 64\n16:13:14.175884 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 3, length 64\n16:13:15.176090 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 4, length 64\n"})}),"\n",(0,i.jsx)(e.h3,{id:"23-\u4e91\u8fb9\u4e3b\u673a\u7f51\u7edc\u4e03\u5c42\u8bf7\u6c42\u4ee3\u7406-\u4ee3\u7406\u6a21\u5f0f",children:"2.3 \u4e91\u8fb9\u4e3b\u673a\u7f51\u7edc\u4e03\u5c42\u8bf7\u6c42\u4ee3\u7406 (\u4ee3\u7406\u6a21\u5f0f)"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u8fb9\u7f18\u573a\u666f\u4e2d\uff0c\u8fb9\u7f18\u8bbe\u5907\u5f80\u5f80\u5904\u5728\u5c01\u95ed\u7684\u5185\u7f51\u73af\u5883\u4e2d\uff0c\u56e0\u6b64\u8fb9\u7f18\u8bbe\u5907\u7684\u5185\u7f51IP\u5730\u5740\u5e38\u5e38\u4f1a\u51fa\u73b0\u51b2\u7a81\uff0c\u56e0\u6b64\u96a7\u9053\u6a21\u5f0f\u4e0d\u80fd\u652f\u6301IP\u51b2\u7a81\u573a\u666f\u4e0b\u7684\u4e3b\u673a\u901a\u4fe1\uff0c\u56e0\u6b64\u9700\u8981\u5f00\u542f\u4ee3\u7406\u6a21\u5f0f\uff0c\u652f\u6301\u8de8\u57df\u7684HTTP/HTTPS\u7684\u8bf7\u6c42\u3002\n\u5f00\u542f\u4ee3\u7406\u6a21\u5f0f\uff0c\u8bbe\u7f6e ",(0,i.jsx)(e.code,{children:'enable-l7-proxy: "true"'})]}),"\n",(0,i.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u5982\u679c\u60a8\u53ea\u9700\u8981\u5f00\u542f\u4e03\u5c42\u8bf7\u6c42\u4ee3\u7406\uff0c\u5e76\u4e14\u8fb9\u7f18\u8282\u70b9\u90fd\u662f\u72ec\u7acb\u5b58\u5728\u5177\u6709\u516c\u7f51\u8bbf\u95ee\u80fd\u529b\uff0c\u53ea\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u4e91\u4e0aGateway CR \u5373\u53ef\uff0c\u6bcf\u4e2a\u8fb9\u7f18\u8282\u70b9\u90fd\u4f1a\u4e3b\u52a8\u4e0e\u4e91\u4e0aGateway\u5efa\u7acb\u53cd\u5411\u94fe\u63a5\uff0c\u5bf9\u4e8e\u4e00\u7ec4\u8fb9\u7f18\u8282\u70b9\u5904\u4e8e\u4e00\u4e2a\u7f51\u7edc\u57df\uff0c\u60a8\u53ef\u4ee5\u4e3a\u5176\u521b\u5efaGateway CR\uff0c\u5e76\u4e14\u9009\u51fa\u5907\u9009\u8282\u70b9\u4f5c\u4e3a\u4ee3\u7406\u7f51\u5173\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'$ kubectl get cm raven-cfg -n kube-system -o yaml\napiVersion: v1\ndata:\n  enable-l3-tunnel: "true"\n  enable-l7-proxy: "true"\nkind: ConfigMap\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: raven-agent\n    meta.helm.sh/release-namespace: kube-system\n  creationTimestamp: "2023-11-24T06:44:54Z"\n  labels:\n    app.kubernetes.io/managed-by: Helm\n  name: raven-cfg\n  namespace: kube-system\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ kubectl exec -it busy-box-6f46f8585b-48zb9 -- sh\necho hello word\nhello word\n"})}),"\n",(0,i.jsx)(e.h1,{id:"\u5176\u4ed6\u7279\u6027",children:"\u5176\u4ed6\u7279\u6027\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0craven \u4f7f\u7528 IPSec \u4f5c\u4e3a VPN \u540e\u7aef\uff0c\u6211\u4eec\u8fd8\u63d0\u4f9bWireGuard\u4f5c\u4e3a\u66ff\u4ee3\u65b9\u6848\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u5207\u6362\u5230 WireGuard \u540e\u7aef\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Raven \u9700\u8981\u5728\u96c6\u7fa4\u4e2d\u7684\u7f51\u5173\u8282\u70b9\u4e0a\u52a0\u8f7d WireGuard \u5185\u6838\u6a21\u5757\u3002\u4ece Linux 5.6 \u5f00\u59cb\uff0c\u5185\u6838\u5305\u542b WireGuard in-tree\uff1b\u5177\u6709\u65e7\u5185\u6838\u7684 Linux \u53d1\u884c\u7248\u5c06\u9700\u8981\u5b89\u88c5 WireGuard\u3002\u5bf9\u4e8e\u5927\u591a\u6570 Linux \u53d1\u884c\u7248\uff0c\u8fd9\u53ef\u4ee5\u4f7f\u7528\u7cfb\u7edf\u5305\u7ba1\u7406\u5668\u6765\u5b8c\u6210\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5b89\u88c5 WireGuard\u3002"}),"\n",(0,i.jsxs)(e.li,{children:["\u7f51\u5173\u8282\u70b9\u5c06\u9700\u8981\u4e00\u4e2a\u5f00\u653e\u7684 UDP \u7aef\u53e3\u624d\u80fd\u8fdb\u884c\u901a\u4fe1\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cWireGuard \u4f7f\u7528 UDP \u7aef\u53e3 51820\u3002 \u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a","\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"cd raven\ngit checkout v0.4.0\nVPN_DRIVER=wireguard make deploy\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"\u5982\u4f55\u6392\u67e5vpn\u95ee\u9898",children:"\u5982\u4f55\u6392\u67e5VPN\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5982\u91c7\u7528IPSec\u96a7\u9053\uff08libreswan\u65b9\u5f0f\uff09\u4f5c\u4e3a\u540e\u7aef\u5b9e\u73b0\uff0c\u53ef\u8fdb\u5165raven agent\u5bb9\u5668\u5185\uff0c\u901a\u8fc7\u547d\u4ee4 ",(0,i.jsx)(e.code,{children:"ipsec status/look"})," \u6216 ",(0,i.jsx)(e.code,{children:"/usr/libexec/ipsec status/look"})," \u67e5\u770b\u76f8\u5173\u72b6\u6001\uff0c\u5e76\u4e14\u5408\u7406\u8fd0\u7528",(0,i.jsx)(e.code,{children:"ipsec"}),"\u5de5\u5177\u6392\u67e5\u76f8\u5173\u95ee\u9898\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u5982\u91c7\u7528Wiregurad\u96a7\u9053\u4f5c\u4e3aVPN\u540e\u7aef\u5b9e\u73b0\uff0c\u53ef\u8fdb\u5165raven agent\u5bb9\u5668\u5185\uff0c\u5b89\u88c5wireguard-tools\u5de5\u5177\uff0c\u53c2\u7167\u5de5\u5177\u8bf4\u660e\u6392\u67e5\u76f8\u5173\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Raven\u5b8c\u5168\u91c7\u7528\u5f00\u6e90IPSec\u3001Wireguard\u5de5\u5177\uff0c\u65e0\u4efb\u4f55\u5b9a\u5236\u5316\uff0c\u60a8\u53ef\u4ee5\u53c2\u7167\u5f00\u6e90\u793e\u533a\u4ee5\u53ca\u76f8\u5173\u6280\u672f\u535a\u5ba2\u89e3\u51b3\u65e5\u5e38\u95ee\u9898\u3002"}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},37906:(n,e,s)=>{s.d(e,{A:()=>a});const a=s.p+"assets/images/raven_deploy-927ae3b6df8f739cdf6bc2909f20f17d.png"},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>l});var a=s(96540);const i={},r=a.createContext(i);function t(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);