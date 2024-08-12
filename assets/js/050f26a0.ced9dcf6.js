"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[39134],{59930:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=t(85893),o=t(11151);const s={title:"Raven"},i=void 0,r={id:"user-manuals/network/raven",title:"Raven",description:"This document introduces how to install raven and use raven to enhance edge-edge and edge-cloud network communication in an edge cluster.",source:"@site/versioned_docs/version-v1.4/user-manuals/network/raven.md",sourceDirName:"user-manuals/network",slug:"/user-manuals/network/raven",permalink:"/docs/user-manuals/network/raven",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/raven.md",tags:[],version:"v1.4",lastUpdatedBy:"LofiSu",lastUpdatedAt:1723462386e3,frontMatter:{title:"Raven"},sidebar:"docs",previous:{title:"pod node binding",permalink:"/docs/user-manuals/autonomy/node-pod-binding"},next:{title:"bandwidth-reduction",permalink:"/docs/user-manuals/network/bandwidth-reduction"}},d={},l=[{value:"Label nodes in different physical regions",id:"label-nodes-in-different-physical-regions",level:2},{value:"2. How to use",id:"2-how-to-use",level:2},{value:"2.1 Gateways",id:"21-gateways",level:3},{value:"Test pod-to-pod networking (tunnel mode)",id:"test-pod-to-pod-networking-tunnel-mode",level:3},{value:"Test cross-domain http networking (proxy mode)",id:"test-cross-domain-http-networking-proxy-mode",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This document introduces how to install raven and use raven to enhance edge-edge and edge-cloud network communication in an edge cluster."}),"\n",(0,a.jsxs)(n.p,{children:["Suppose you have an edge kubernetes cluster with nodes in different physical regions, and already deploy the ",(0,a.jsx)(n.code,{children:"Raven Controller Manager"})," and ",(0,a.jsx)(n.code,{children:"Raven Agent"})," in this cluster,You can refer to the  ",(0,a.jsx)(n.a,{href:"/docs/installation/manually-setup",children:"installation tutorial"})," if you do not have Raven installed, the details of ",(0,a.jsx)(n.code,{children:"Raven Controller Manager"})," are in ",(0,a.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager/blob/main/README.md",children:"here"}),".\n",(0,a.jsx)(n.img,{alt:"raven_deploy",src:t(80736).Z+"",width:"720",height:"405"})]}),"\n",(0,a.jsx)(n.h2,{id:"label-nodes-in-different-physical-regions",children:"Label nodes in different physical regions"}),"\n",(0,a.jsxs)(n.p,{children:["As follows, suppose the cluster has five nodes, located in three different regions, where the node ",(0,a.jsx)(n.code,{children:"master"})," is cloud node."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes -o wide\nNAME                      STATUS   ROLES                  AGE     VERSION    INTERNAL-IP     EXTERNAL-IP   OS-IMAGE                KERNEL-VERSION                CONTAINER-RUNTIME\nizbp15inok0kbfkg3in52rz   Ready    Edge-HZ-1              27h     v1.22.11   172.16.2.103    <none>        CentOS Linux 7 (Core)   3.10.0-1160.81.1.el7.x86_64   docker://19.3.15\nizbp15inok0kbfkg3in52sz   Ready    Edge-HZ-2              26h     v1.22.11   172.16.2.104    <none>        CentOS Linux 7 (Core)   3.10.0-1160.81.1.el7.x86_64   docker://19.3.15\nizm5eb24dmjfimuaybpnqzz   Ready    Edge-QD-1              29h     v1.22.11   172.16.1.89     <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://19.3.15\nizm5eb24dmjfimuaybpnr0z   Ready    Edge-QD-2              29h     v1.22.11   172.16.1.90     <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://19.3.15\nizwz9dohcv74iegqecp4axz   Ready    control-plane,master   5d21h   v1.22.11   192.168.0.195   <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://20.10.2\nizwz9ey0js5z7mornclpd6z   Ready    cloud                  3h3m    v1.22.11   192.168.0.196   <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://20.10.2\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We use a ",(0,a.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go",children:"Gateway"})," CR to manage nodes in different physical regions, and label nodes to indicate which ",(0,a.jsx)(n.code,{children:"Gateway"})," these nodes are managed by."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, We label nodes in region ",(0,a.jsx)(n.code,{children:"hangzhou"})," with value ",(0,a.jsx)(n.code,{children:"gw-hangzhou"}),", indicating that these nodes are managed by the ",(0,a.jsx)(n.code,{children:"gw-hangzhou"})," gateway."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ kubectl label nodes izbp15inok0kbfkg3in52rz izbp15inok0kbfkg3in52sz raven.openyurt.io/gateway=gw-hangzhou\nnode/izbp15inok0kbfkg3in52rz not labeled\nnode/izbp15inok0kbfkg3in52sz not labeled\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Similarly, we label node in ",(0,a.jsx)(n.code,{children:"cloud"})," with value ",(0,a.jsx)(n.code,{children:"gw-cloud"}),", and nodes in region ",(0,a.jsx)(n.code,{children:"qingdao"})," with value ",(0,a.jsx)(n.code,{children:"gw-qingdao"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ kubectl label nodes izwz9dohcv74iegqecp4axz izwz9ey0js5z7mornclpd6z raven.openyurt.io/gateway=gw-cloud\nnode/izwz9dohcv74iegqecp4axz labeled\nnode/izwz9ey0js5z7mornclpd6z labeled\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ kubectl label nodes izm5eb24dmjfimuaybpnqzz izm5eb24dmjfimuaybpnr0z raven.openyurt.io/gateway=gw-qingdao\nnode/izm5eb24dmjfimuaybpnqzz  labeled\nnode/izm5eb24dmjfimuaybpnr0z  labeled\n"})}),"\n",(0,a.jsx)(n.p,{children:"Apply the following command to check that raven is running properly"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ kubectl get pod -n kube-system | grep raven-agent-ds\nraven-agent-ds-4b587                              1/1     Running             0              25h\nraven-agent-ds-dmh66                              1/1     Running             0              25h\nraven-agent-ds-gb5qj                              1/1     Running             0              25h\nraven-agent-ds-gzpfh                              1/1     Running             0              170m\nraven-agent-ds-ksxq6                              1/1     Running             0              25h\nraven-agent-ds-qhjtb                              1/1     Running             0              25h\n"})}),"\n",(0,a.jsx)(n.h2,{id:"2-how-to-use",children:"2. How to use"}),"\n",(0,a.jsx)(n.h3,{id:"21-gateways",children:"2.1 Gateways"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create Gateway CR"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ cat <<EOF | kubectl apply -f -\napiVersion: raven.openyurt.io/v1beta1\nkind: Gateway\nmetadata:\n  name: gw-hangzhou\nspec:\n  proxyConfig:\n    Replicas: 1\n  tunnelConfig:\n    Replicas: 1\n  endpoints:\n    - nodeName: izbp15inok0kbfkg3in52rz\n      underNAT: true\n      port: 10262\n      type: proxy\n    - nodeName: izbp15inok0kbfkg3in52rz\n      underNAT: true\n      port: 4500\n      underNAT: true\n      type: tunnel\n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-cloud\nspec:\n  exposeType: PublicIP\n  proxyConfig:\n    Replicas: 1\n    proxyHTTPPort: 10255,9445\n    proxyHTTPSPort: 10250,9100\n  tunnelConfig:\n    Replicas: 1\n  endpoints:\n    - nodeName: izwz9dohcv74iegqecp4axz\n      underNAT: false\n      port: 10262\n      type: proxy\n      publicIP: 120.79.xxx.xxx\n    - nodeName: izwz9dohcv74iegqecp4axz\n      underNAT: false\n      port: 4500\n      type: tunnel\n      publicIP: 120.79.xxx.xxx\n\n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-qingdao\nspec:\n  proxyConfig:\n    Replicas: 1\n  tunnelConfig:\n    Replicas: 1\n  endpoints:\n  - nodeName: izm5eb24dmjfimuaybpnqzz\n    underNAT: true\n    port: 10262\n    type: proxy\n  - nodeName: izm5eb24dmjfimuaybpnr0z\n    underNAT: true\n    port: 4500\n    type: tunnel\nEOF\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Parameters Introduction\uff1a"}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"spec.exposedType"}),": The type of public network exposure, empty indicates that the gateway will not be exposed, either LoadBalancer or PublicIP can be used to exposed gateway in internet."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"spec.endpoints"}),": Indicates a set of alternative gateway endpoints, some of which are selected by the yurtmanager as gateway endpoints based on node status"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"spec.endpoints.nodeName"}),": The name of gateway endpoints","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"spec.endpoints.type"}),": The type of gateway endpoints, the value is set to proxy if the node is proxy mode endpoints, and the value is also can be set to tunnel if the node is tunnel mode endpoints."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"spec.endpoints.port"}),": Ports exposed by the gateway endpoints service: TCP 10262 in proxy mode and UDP 4500 in tunnel mode"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"spec.endpoints.publicIP"}),": The public ip of gateway endpoints"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"spec.endpoints.underNAT"}),": Whether to use NAT to access the public network. Generally, false is set on the cloud, and true is set on the edge"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"spec.proxyConfig.Replicas"}),": Replicas of gateway endpoints in enable proxy mode"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"spec.proxyConfig.proxyHTTPPort"}),": A insecure port for a cloud-side proxy mode communication agent, such as port 10255, which kubelet listens for"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"spec.proxyConfig.proxyHTTPPort"}),": A secure port for a cloud-side proxy mode communication agent, such as port 10250, which kubelet listens for"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"spec.tunnelConfig.Replicas"}),": Replicas of gateway endpoints in enable tunnel mode\uff0cwhich must be 1 currently"]}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Describe the status of all gateways"}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Check whether the Gateway node is elected in the Status of the gateway. The Yurt Manager component, GatewayPickup Controller, is responsible for the election."}),"\n",(0,a.jsx)(n.li,{children:"Check whether the public IP address and exposed port are correct"}),"\n",(0,a.jsx)(n.li,{children:"Check whether the enabled mode meets the expectations"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'$ kubectl get cm raven-cfg -n kube-system -o yaml\napiVersion: v1\ndata:\n  enable-l3-tunnel: "true"\n  enable-l7-proxy: "true"\nkind: ConfigMap\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: raven-agent\n    meta.helm.sh/release-namespace: kube-system\n  creationTimestamp: "2023-11-24T06:44:54Z"\n  labels:\n    app.kubernetes.io/managed-by: Helm\n  name: raven-cfg\n  namespace: kube-system\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'$ kubectl get gateways\n\nNAME          AGE\ngw-cloud      22h\ngw-hangzhou   22h\ngw-qingdao    22h\n\n$ kubectl get gateway gw-cloud -o yaml\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-cloud\nspec:\n  exposeType: PublicIP\n  proxyConfig:\n    Replicas: 1\n    proxyHTTPPort: 10255,9445\n    proxyHTTPSPort: 10250,9100\n  tunnelConfig:\n    Replicas: 1\n  endpoints:\n    - nodeName: izwz9dohcv74iegqecp4axz\n      underNAT: false\n      port: 10262\n      type: proxy\n      publicIP: 120.79.xxx.xxx\n    - nodeName: izwz9dohcv74iegqecp4axz\n      underNAT: false\n      port: 4500\n      type: tunnel\n      publicIP: 120.79.xxx.xxx\nstatus:\n  activeEndpoints:\n  - config:\n      enable-l7-proxy: "true"\n    nodeName: izwz9dohcv74iegqecp4axz\n    port: 10262\n    publicIP: 47.xxx.xxx.xxx\n    type: proxy\n  - config:\n      enable-l3-tunnel: "true"\n    nodeName: izwz9dohcv74iegqecp4axz\n    port: 4500\n    publicIP: 47.xxx.xxx.xxx\n    type: tunnel\n  nodes:\n  - nodeName: izwz9dohcv74iegqecp4axz\n    privateIP: 192.168.0.195\n    subnets:\n    - 10.224.0.128/26\n  - nodeName: izwz9ey0js5z7mornclpd6z\n    privateIP: 192.168.0.196\n    subnets:\n    - 10.224.0.0/26\n\n$ kubectl get gateway gw-hangzhou -o yaml\napiVersion: raven.openyurt.io/v1beta1\nkind: Gateway\nmetadata:\n  name: gw-hangzhou\nspec:\n  proxyConfig:\n    Replicas: 1\n  tunnelConfig:\n    Replicas: 1\n  endpoints:\n    - nodeName: izbp15inok0kbfkg3in52rz\n      underNAT: true\n      port: 10262\n      type: proxy\n    - nodeName: izbp15inok0kbfkg3in52rz\n      underNAT: true\n      port: 4500\n      underNAT: true\n      type: tunnel\nstatus:\n  activeEndpoints:\n  - config:\n      enable-l7-proxy: "true"\n    nodeName: izbp15inok0kbfkg3in52rz\n    port: 10262\n    publicIP: 120.79.xxx.xxx\n    type: proxy\n  - config:\n      enable-l3-tunnel: "true"\n    nodeName: izbp15inok0kbfkg3in52rz\n    port: 4500\n    publicIP: 120.79.xxx.xxx\n    type: tunnel\n  nodes:\n  - nodeName: izbp15inok0kbfkg3in52rz\n    privateIP: 172.16.2.103\n    subnets:\n    - 10.224.1.128/26\n  - nodeName: izbp15inok0kbfkg3in52sz\n    privateIP: 172.16.2.104\n    subnets:\n    - 10.224.1.0/26\n'})}),"\n",(0,a.jsx)(n.h3,{id:"test-pod-to-pod-networking-tunnel-mode",children:"Test pod-to-pod networking (tunnel mode)"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create test pod"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'$ cat <<EOF | kubectl apply -f -\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: busy-box\nspec:\n  replicas: 4\n  selector:\n    matchLabels:\n      app: busy-box\n  template:\n    metadata:\n      labels:\n        app: busy-box\n    spec:\n      containers:\n      - name: busy-box\n        image: busybox\n        command:\n        - /bin/sh\n        - -c\n        - sleep 3000\n      nodeSelector:\n        openyurt.io/is-edge-worker: "true"\nEOF\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Get test pod"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ kubectl get pod -o wide\nbusy-box-6f46f8585b-48zb9   1/1     Running   0          76s   10.244.19.3     izbp15inok0kbfkg3in52sz   <none>           <none>\nbusy-box-6f46f8585b-9nm64   1/1     Running   0          76s   10.244.16.161   izm5eb24dmjfimuaybpnqzz   <none>           <none>\nbusy-box-6f46f8585b-kv4dw   1/1     Running   0          76s   10.244.17.19    izm5eb24dmjfimuaybpnr0z   <none>           <none>\nbusy-box-6f46f8585b-t5v9d   1/1     Running   0          76s   10.244.18.4     izbp15inok0kbfkg3in52rz   <none>           <none>\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Test networking across edge"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ kubectl exec -it busy-box-6f46f8585b-48zb9 -- sh\n/ # ping 10.244.17.19 -c 4\nPING 10.244.17.19 (10.244.17.19): 56 data bytes\n64 bytes from 10.244.17.19: seq=0 ttl=59 time=78.048 ms\n64 bytes from 10.244.17.19: seq=1 ttl=59 time=77.424 ms\n64 bytes from 10.244.17.19: seq=2 ttl=59 time=77.490 ms\n64 bytes from 10.244.17.19: seq=3 ttl=59 time=77.472 ms\n\n--- 10.244.17.19 ping statistics ---\n4 packets transmitted, 4 packets received, 0% packet loss\nround-trip min/avg/max = 77.424/77.608/78.048 ms\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Log in to the non-gateway node Edge-HZ-2 and ping the non-gateway node Edge-QD-2 to test the connectivity of nodes across network domains,"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Edge-HZ-2(Non-Gateway)\uff1a\nping 172.16.1.90 -c 4\nPING 172.16.1.90 (172.16.1.90) 56(84) bytes of data.\n64 bytes from 172.16.1.90: icmp_seq=1 ttl=61 time=77.5 ms\n64 bytes from 172.16.1.90: icmp_seq=2 ttl=61 time=77.3 ms\n64 bytes from 172.16.1.90: icmp_seq=3 ttl=61 time=78.5 ms\n64 bytes from 172.16.1.90: icmp_seq=4 ttl=61 time=77.3 ms\n\n--- 172.16.1.90 ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss, time 3003ms\nrtt min/avg/max/mdev = 77.314/77.682/78.531/0.533 ms\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Capture package\n# Edge-HZ-1 (Gateway)\uff1a\ntcpdump -i raven0\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes\n16:13:12.132496 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 1, length 64\n16:13:13.133606 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 2, length 64\n16:13:14.134172 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 3, length 64\n16:13:15.135570 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 4, length 64\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Capture package\n# Edge-QD-1 (Gateway)\uff1a\ntcpdump -i raven0\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes\n16:13:12.174023 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 1, length 64\n16:13:13.175096 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 2, length 64\n16:13:14.176813 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 3, length 64\n16:13:15.177024 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 4, length 64\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Capture package\n# Edge-QD-2(Non-Gateway)\uff1a\ntcpdump -i raven0\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes\n16:13:12.173087 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 1, length 64\n16:13:13.174148 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 2, length 64\n16:13:14.175884 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 3, length 64\n16:13:15.176090 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 4, length 64\n"})}),"\n",(0,a.jsx)(n.h3,{id:"test-cross-domain-http-networking-proxy-mode",children:"Test cross-domain http networking (proxy mode)"}),"\n",(0,a.jsxs)(n.p,{children:["In the edge scenario, the Intranet IP addresses of the edge devices often conflict with each other in closed Intranet environments, and the tunnel mode cannot support host communication in IP conflict scenarios. Therefore, the proxy mode must be enabled to support cross-domain HTTP/HTTPS requests.\nenable proxy model, and set  ",(0,a.jsx)(n.code,{children:'enable-l7-proxy: "true"'})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'$ kubectl get cm raven-cfg -n kube-system -o yaml\napiVersion: v1\ndata:\n  enable-l3-tunnel: "true"\n  enable-l7-proxy: "true"\nkind: ConfigMap\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: raven-agent\n    meta.helm.sh/release-namespace: kube-system\n  creationTimestamp: "2023-11-24T06:44:54Z"\n  labels:\n    app.kubernetes.io/managed-by: Helm\n  name: raven-cfg\n  namespace: kube-system\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ kubectl exec -it busy-box-6f46f8585b-48zb9 -- sh\necho hello word\nhello word\n"})}),"\n",(0,a.jsx)(n.h1,{id:"other-features",children:"Other Features\uff1a"}),"\n",(0,a.jsx)(n.p,{children:"By default, raven uses IPSec as the VPN back end, and we also provide WireGuard as an alternative. You can do the following to switch to the WireGuard back end."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Raven requires the WireGuard kernel module to be loaded on the gateway node in the cluster. As of Linux 5.6, the kernel includes WireGuard in-tree; Linux distributions with older kernels will need WireGuard installed. For most Linux distributions, this can be done using the system package manager. For more information, see Installing WireGuard.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The gateway node will require an open UDP port to communicate. By default, the WireGuard uses UDP port 51820. Run the following command.","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd raven\ngit checkout v0.4.1\nVPN_DRIVER=wireguard make deploy\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"using-vpn-tunnel",children:"Using VPN Tunnel"}),"\n",(0,a.jsxs)(n.p,{children:["If using an IPSec tunnel (implemented via libreswan) as the backend, you can enter the raven agent container and check the relevant status by using the command ",(0,a.jsx)(n.code,{children:"ipsec status/look"})," or ",(0,a.jsx)(n.code,{children:"/usr/libexec/ipsec status/look"}),". Additionally, make appropriate use of the ipsec tool to troubleshoot related issues.\nIf using a Wireguard tunnel as the backend implementation for the VPN, you can enter the raven agent container, install the wireguard-tools tool, and refer to the tool's instructions to troubleshoot related issues.\nRaven relies entirely on open-source IPSec and Wireguard tools without any customization. You can refer to open-source communities and related technical blogs to resolve everyday issues."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},80736:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/raven_deploy-927ae3b6df8f739cdf6bc2909f20f17d.png"},11151:(e,n,t)=>{t.d(n,{a:()=>i});var a=t(67294);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);