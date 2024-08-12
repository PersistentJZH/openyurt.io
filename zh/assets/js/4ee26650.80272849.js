"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[58351],{4316:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var s=a(85893),t=a(11151);const d={title:"Raven"},r=void 0,l={id:"user-manuals/network/raven",title:"Raven",description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u5b89\u88c5Raven\u548c\u4f7f\u7528Raven\u6765\u589e\u5f3a\u8fb9\u7f18\u96c6\u7fa4\u4e2d\u7684\u8fb9-\u8fb9\u548c\u8fb9-\u4e91\u7f51\u7edc\u6253\u901a\u80fd\u529b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/user-manuals/network/raven.md",sourceDirName:"user-manuals/network",slug:"/user-manuals/network/raven",permalink:"/zh/docs/v1.0/user-manuals/network/raven",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/raven.md",tags:[],version:"v1.0",lastUpdatedBy:"LofiSu",lastUpdatedAt:1723462386e3,frontMatter:{title:"Raven"},sidebar:"docs",previous:{title:"\u8282\u70b9\u81ea\u6cbb",permalink:"/zh/docs/v1.0/user-manuals/autonomy/node-autonomy"},next:{title:"\u8fb9\u7f18Pod\u7f51\u7edc",permalink:"/zh/docs/v1.0/user-manuals/network/edge-pod-network"}},o={},c=[{value:"1. \u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df",id:"1-\u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df",level:2},{value:"\u5b89\u88c5Raven Agent",id:"\u5b89\u88c5raven-agent",level:3},{value:"2. \u5982\u4f55\u4f7f\u7528",id:"2-\u5982\u4f55\u4f7f\u7528",level:2},{value:"2.1 Gateways",id:"21-gateways",level:3},{value:"2.2 \u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684Pod\u7f51\u7edc\u8054\u901a\u6027",id:"22-\u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684pod\u7f51\u7edc\u8054\u901a\u6027",level:3}];function i(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u5b89\u88c5Raven\u548c\u4f7f\u7528Raven\u6765\u589e\u5f3a\u8fb9\u7f18\u96c6\u7fa4\u4e2d\u7684\u8fb9-\u8fb9\u548c\u8fb9-\u4e91\u7f51\u7edc\u6253\u901a\u80fd\u529b\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8bbe\u4f60\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a\u8fb9\u7f18kubernetes\u96c6\u7fa4\uff0c\u8282\u70b9\u5206\u5e03\u5728\u4e0d\u540c\u7684\u7269\u7406\u533a\u57df\uff0c\u5e76\u4e14\u5df2\u7ecf\u5728\u8fd9\u4e2a\u96c6\u7fa4\u4e2d\u90e8\u7f72\u4e86",(0,s.jsx)(n.code,{children:"Raven Controller Manager"}),"\uff0c\u6709\u5173",(0,s.jsx)(n.code,{children:"Raven Controller Manager"}),"\u7684\u8be6\u7ec6\u4fe1\u606f\u5728",(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager/blob/main/README.md",children:"\u8fd9\u91cc"}),"\u53ef\u4ee5\u627e\u5230\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"1-\u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df",children:"1. \u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u4e0b\u6240\u793a\uff0c\u5047\u8bbe\u4f60\u7684\u8fb9\u7f18\u96c6\u7fa4\u4e2d\u6709\u4e94\u4e2a\u8282\u70b9\uff0c\u5206\u5e03\u5728\u4e09\u4e2a\u4e0d\u540c\u7684\u7269\u7406\uff08\u7f51\u7edc\uff09\u533a\u57df\uff0c\u5176\u4e2d\u8282\u70b9",(0,s.jsx)(n.code,{children:"master"}),"\u8282\u70b9\u4e3a\u4e91\u7aef\u8282\u70b9\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes -o wide\n\nNAME         STATUS   ROLES    AGE   VERSION   INTERNAL-IP    \nhhht-node1   Ready    <none>   20d   v1.16.2   10.48.115.9    \nhhht-node2   Ready    <none>   20d   v1.16.2   10.48.115.10\nmaster       Ready    master   20d   v1.16.2   10.48.115.8\nwlcb-node1   Ready    <none>   20d   v1.16.2   10.48.115.11\nwlcb-node2   Ready    <none>   20d   v1.16.2   10.48.115.12    \n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u5bf9\u4f4d\u4e8e\u4e0d\u540c\u7269\u7406\uff08\u7f51\u7edc\uff09\u533a\u57df\u8282\u70b9\uff0c\u5206\u522b\u4f7f\u7528\u4e00\u4e2a",(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go",children:"Gateway"})," CR\u6765\u8fdb\u884c\u7ba1\u7406\u3002\u901a\u8fc7\u7ed9\u8282\u70b9\u6253\u6807\u7684\u65b9\u5f0f\uff0c\u6765\u6807\u8bc6\u8282\u70b9\u7531\u54ea\u4e2aGateway\u7ba1\u7406\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\uff0c\u6211\u4eec\u7ed9\u4f4d\u4e8e",(0,s.jsx)(n.code,{children:"cn-huhehaote"}),"\u7684\u8282\u70b9\u6253",(0,s.jsx)(n.code,{children:"gw-hhht"}),"\u7684\u6807\u7b7e\uff0c\u6765\u8868\u660e\u8fd9\u4e9b\u8282\u70b9\u662f\u7531",(0,s.jsx)(n.code,{children:"gw-hhht"}),"\u8fd9\u4e2aGateway CR\u6765\u7ba1\u7406\u7684\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl label nodes hhht-node1 hhht-node2 raven.openyurt.io/gateway=gw-hhht\nhhht-node1 labeled\nhhht-node2 labeled\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u540c\u6837\u5730\uff0c\u6211\u4eec\u5206\u522b\u4e3a\u4f4d\u4e8e\u4e91\u7aef\u8282\u70b9\u548c",(0,s.jsx)(n.code,{children:"cn-huhehaote"}),"\u7684\u8282\u70b9\u6253\u4e0a",(0,s.jsx)(n.code,{children:"gw-cloud"}),"\u548c",(0,s.jsx)(n.code,{children:"gw-wlcb"}),"\u7684\u6807\u7b7e\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl label nodes master raven.openyurt.io/gateway=gw-cloud\nmaster labeled\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl label nodes wlcb-node1 wlcb-node2 raven.openyurt.io/gateway=gw-wlcb\nwlcb-node1 labeled\nwlcb-node2 labeled\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5b89\u88c5raven-agent",children:"\u5b89\u88c5Raven Agent"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5\u6700\u65b0\u7248\u672c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/openyurtio/raven.git\ncd raven\nmake deploy\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u68c0\u67e5\u76f8\u5e94\u7684Raven Agent\u7684Pod\u662f\u5426\u6210\u529f\u8fd0\u884c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl get pod -n kube-system | grep raven-agent-ds\nraven-agent-ds-2jw47                           1/1     Running   0          91s\nraven-agent-ds-bq8zc                           1/1     Running   0          91s\nraven-agent-ds-cj7k4                           1/1     Running   0          91s\nraven-agent-ds-p9fk9                           1/1     Running   0          91s\nraven-agent-ds-rlb9q                           1/1     Running   0          91s\n"})}),"\n",(0,s.jsx)(n.h2,{id:"2-\u5982\u4f55\u4f7f\u7528",children:"2. \u5982\u4f55\u4f7f\u7528"}),"\n",(0,s.jsx)(n.h3,{id:"21-gateways",children:"2.1 Gateways"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u521b\u5efa\u7684Gateway CR"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ cat <<EOF | kubectl apply -f -\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-hhht\nspec:\n  endpoints:\n    - nodeName: hhht-node1\n      underNAT: true\n    - nodeName: hhht-node2\n      underNAT: true\n      \n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-cloud\nspec:\n  endpoints:\n    - nodeName: master\n      underNAT: false\n      \n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-wlcb\nspec:\n  endpoints:\n    - nodeName: wlcb-node1\n      underNAT: true\n    - nodeName: wlcb-node2\n      underNAT: true\n\nEOF\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u67e5\u770b\u5404\u4e2aGateway CR\u7684\u72b6\u6001"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl get gateways\n\nNAME      ACTIVEENDPOINT\ngw-hhht   hhht-node1\ngw-master master\ngw-wlcb   wlcb-node1\n"})}),"\n",(0,s.jsx)(n.h3,{id:"22-\u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684pod\u7f51\u7edc\u8054\u901a\u6027",children:"2.2 \u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684Pod\u7f51\u7edc\u8054\u901a\u6027"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u521b\u5efa\u6d4b\u8bd5Pod"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ cat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: Pod\nmetadata:\n  name: fedora-1\nspec:\n  nodeName: hhht-node2\n  containers:\n    - name: fedora\n      image: njucjc/fedora:latest\n      imagePullPolicy: Always\n\n---\n\napiVersion: v1\nkind: Pod\nmetadata:\n  name: fedora-2\nspec:\n  nodeName: wlcb-node2\n  containers:\n    - name: fedora\n      image: njucjc/fedora:latest\n      imagePullPolicy: Always\n\n\nEOF\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u786e\u5b9a\u6d4b\u8bd5Pod\u6b63\u5e38\u8fd0\u884c"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl get pod -o wide\nNAME       READY   STATUS    RESTARTS   AGE     IP            NODE                  NOMINATED NODE   READINESS GATES\nfedora-1   1/1     Running   0          46s     10.14.10.67   hhht-node2            <none>           <none>\nfedora-2   1/1     Running   0          46s     10.14.2.70    wlcb-node2            <none>           <none>\n\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6d4b\u8bd5\u8de8\u7f51\u7edc\u57df\u7684Pod\u7f51\u7edc\u8054\u901a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl exec -it fedora-1 -- bash\n[root@fedora-1]# ping 10.14.2.70 -c 4\nPING 10.14.2.70 (10.14.2.70) 56(84) bytes of data.\n64 bytes from 10.14.2.70: icmp_seq=1 ttl=60 time=32.2 ms\n64 bytes from 10.14.2.70: icmp_seq=2 ttl=60 time=32.2 ms\n64 bytes from 10.14.2.70: icmp_seq=3 ttl=60 time=32.0 ms\n64 bytes from 10.14.2.70: icmp_seq=4 ttl=60 time=32.1 ms\n\n--- 10.14.2.70 ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss, time 3003ms\nrtt min/avg/max/mdev = 32.047/32.136/32.246/0.081 ms\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},11151:(e,n,a)=>{a.d(n,{a:()=>r});var s=a(67294);const t={},d=s.createContext(t);function r(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);