"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[19927],{78995:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(85893),t=n(11151);const a={},o="1. \u90e8\u7f72Raven Proxy\u4e13\u7528DNS",i={id:"installation/raven-l7-proxy-prepare",title:"1. \u90e8\u7f72Raven Proxy\u4e13\u7528DNS",description:"The hostname need to be resolved to the IP address of the gateway endpoints of the local area network when the cloud components (e.g APIServer,MetricsServer) accesses the edge service by the way of hostname+port.So An dedicated DNS server must be deployed before raven's layer 7 proxy is enabled.",source:"@site/versioned_docs/version-v1.4/installation/raven-l7-proxy-prepare.md",sourceDirName:"installation",slug:"/installation/raven-l7-proxy-prepare",permalink:"/docs/installation/raven-l7-proxy-prepare",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/raven-l7-proxy-prepare.md",tags:[],version:"v1.4",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1707950047,formattedLastUpdatedAt:"Feb 14, 2024",frontMatter:{}},l={},d=[];function c(e){const s={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"1-\u90e8\u7f72raven-proxy\u4e13\u7528dns",children:"1. \u90e8\u7f72Raven Proxy\u4e13\u7528DNS"}),"\n",(0,r.jsx)(s.p,{children:"The hostname need to be resolved to the IP address of the gateway endpoints of the local area network when the cloud components (e.g APIServer,MetricsServer) accesses the edge service by the way of hostname+port.So An dedicated DNS server must be deployed before raven's layer 7 proxy is enabled."}),"\n",(0,r.jsx)(s.p,{children:"Install raven-proxy-dns with the following:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"$ kubectl apply -f config/setup/raven-proxy-dns.yaml\n"})}),"\n",(0,r.jsx)(s.p,{children:"Ensure that the raven-proxy-dns install successfully with the following command:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"$ kubectl -n kube-system get po\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Query the ",(0,r.jsx)(s.code,{children:"clusterIP"})," of the ",(0,r.jsx)(s.code,{children:"raven-proxy-dns service"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"$ kubectl -n kube-system get svc raven-proxy-dns\n"})}),"\n",(0,r.jsx)(s.h1,{id:"2-kube-apiserver\u8c03\u6574",children:"2. Kube-apiserver\u8c03\u6574"}),"\n",(0,r.jsxs)(s.p,{children:["To make sure kube-apiserver on the master node use ",(0,r.jsx)(s.code,{children:"hostname:port"})," to access kubelet, and at the same time this hostname resolution request should be handled by ",(0,r.jsx)(s.code,{children:"yurt-tunnel-dns"})," pod. We should apply some adjustments to kube-apiserver configurations."]}),"\n",(0,r.jsx)(s.p,{children:"We assume your kube-apiserver is installed through static pod(/etc/kubernetes/manifests/kube-apiserver.yaml)"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:'modifiy dnsPolicy="None"'}),"\n",(0,r.jsxs)(s.li,{children:["add dnsConfig configurations which set the ",(0,r.jsx)(s.code,{children:"nameservers"})," as the ",(0,r.jsx)(s.code,{children:"clusterIP"})," of ",(0,r.jsx)(s.code,{children:"raven-proxy-dns service"})," (assumed to be ",(0,r.jsx)(s.code,{children:"1.2.3.4"})," here)"]}),"\n",(0,r.jsxs)(s.li,{children:["modify startup parameters ",(0,r.jsx)(s.code,{children:"--kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP"}),", to make sure that Kube-apiserver prefers to use Hostname to access kubelet"]}),"\n",(0,r.jsxs)(s.li,{children:["delete startup parameters ",(0,r.jsx)(s.code,{children:"--kubelet-certificate-authority"}),", to make sure that kube-apisever don't calibrate TLS certificate of yurt-tunnel-server (If you create your cluster from kubeadm, this step can be omitted since it don't have this settings by default)"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'$ vi /etc/kubernetes/manifests/kube-apiserver.yaml\napiVersion: v1\nkind: Pod\n...\nspec:\n  dnsPolicy: "None" \n  dnsConfig:       \n    nameservers:\n      - 1.2.3.4\n    searches:\n      - kube-system.svc.cluster.local\n      - svc.cluster.local\n      - cluster.local\n    options:\n      - name: ndots\n        value: "5"\n  containers:\n  - command:\n    - kube-apiserver\n  ...\n    - --kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP # 3. \u628aHostname\u653e\u5728\u7b2c\u4e00\u4f4d\n  ...\n'})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,s,n)=>{n.d(s,{a:()=>o});var r=n(67294);const t={},a=r.createContext(t);function o(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}}}]);