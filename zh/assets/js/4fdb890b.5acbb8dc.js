"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[20824],{9807:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"user-manuals/runtime/WasmEdge","title":"\u8fb9\u7f18\u8282\u70b9\u4f7f\u7528 WasmEdge","description":"\u8fd9\u7bc7\u6587\u7ae0\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 OpenYurt \u96c6\u7fa4\u4e2d\u8fd0\u884c\u4e00\u4e2a WasmEdge \u5e94\u7528\u7a0b\u5e8f\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.6.0/user-manuals/runtime/WasmEdge.md","sourceDirName":"user-manuals/runtime","slug":"/user-manuals/runtime/WasmEdge","permalink":"/zh/docs/v0.6.0/user-manuals/runtime/WasmEdge","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/runtime/WasmEdge.md","tags":[],"version":"v0.6.0","lastUpdatedBy":"tnsimon","lastUpdatedAt":1732695729000,"frontMatter":{},"sidebar":"docs","previous":{"title":"containerd","permalink":"/zh/docs/v0.6.0/user-manuals/runtime/containerd"},"next":{"title":"OpenYurt \u52a9\u529b\u7533\u901a\u5feb\u9012\u4e91\u8fb9\u7aefDevOps\u534f\u540c","permalink":"/zh/docs/v0.6.0/best-practices/practices-1"}}');var t=r(74848),i=r(28453);const d={},a="\u8fb9\u7f18\u8282\u70b9\u4f7f\u7528 WasmEdge",o={},c=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:3},{value:"\u5b89\u88c5 OpenYurt",id:"\u5b89\u88c5-openyurt",level:4},{value:"\u5b89\u88c5 Containerd",id:"\u5b89\u88c5-containerd",level:3},{value:"\u5b89\u88c5 WasmEdge",id:"\u5b89\u88c5-wasmedge",level:3},{value:"\u5b89\u88c5\u5e76\u6784\u5efa crun",id:"\u5b89\u88c5\u5e76\u6784\u5efa-crun",level:3},{value:"\u5b89\u88c5 OpenYurt",id:"\u5b89\u88c5-openyurt-1",level:3},{value:"\u8bbe\u7f6e\u4e00\u4e2a K8s \u96c6\u7fa4",id:"\u8bbe\u7f6e\u4e00\u4e2a-k8s-\u96c6\u7fa4",level:3},{value:"\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u7684 WebAssembly app",id:"\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u7684-webassembly-app",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u8fb9\u7f18\u8282\u70b9\u4f7f\u7528-wasmedge",children:"\u8fb9\u7f18\u8282\u70b9\u4f7f\u7528 WasmEdge"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u7bc7\u6587\u7ae0\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 OpenYurt \u96c6\u7fa4\u4e2d\u8fd0\u884c\u4e00\u4e2a WasmEdge \u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://wasmedge.org/",children:"WasmEdge"})," \u662f\u7b26\u5408 OCI \u6807\u51c6\u7684\uff0c\u4e14",(0,t.jsx)(n.a,{href:"https://wasmedge.org/book/en/kubernetes.html",children:"\u517c\u5bb9 k8s "}),"\u7684\u8f7b\u91cf\u7ea7 WebAssembly runtime\u3002 \u76f8\u8f83\u4e8e ",(0,t.jsx)(n.a,{href:"https://wasmedge.org/wasm_linux_container/",children:"Linux \u5bb9\u5668"}),"\uff0cWasmEdge \u662f\u66f4\u597d\u7684\u8fb9\u7f18\u8f7b\u91cf\u7ea7\u5bb9\u5668\u66ff\u4ee3\u9009\u9879\u3002 WasmEdge \u63d0\u4f9b\u57fa\u4e8e\u80fd\u529b\u7684\u5b89\u5168\u6c99\u7bb1\uff0c\u5bf9\u5e95\u5c42\u64cd\u4f5c\u7cfb\u7edf\u670d\u52a1\u505a\u5f88\u5c11\u7684\u5047\u8bbe\uff0c\u540c\u65f6\u5728\u524d\u7aef\u652f\u6301",(0,t.jsx)(n.a,{href:"https://wasmedge.org/book/en/dev.html",children:"\u591a\u79cd\u7f16\u7a0b\u8bed\u8a00"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\uff0c\u5173\u95ed swap \u5206\u533a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo swapoff -a      \r\nfree -m    //\u9a8c\u8bc1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\uff0c\u914d\u7f6e\u4e24\u4e2a\u8282\u70b9\u7684\u6587\u4ef6 ",(0,t.jsx)(n.code,{children:"node/etc/hosts"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u52a0\u8f7d\u5185\u6838\u6a21\u5757  ",(0,t.jsx)(n.code,{children:"br_netfilter"}),"\uff0c\u5e76\u8c03\u6574\u5185\u6838\u53c2\u6570\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"//load the module\r\nsudo modprobe br_netfilter\r\n//verify   \r\nlsmod | grep br_netfilter\r\n// create k8s.conf\r\ncat <<EOF | sudo tee /etc/sysctl.d/k8s.conf\r\nnet.bridge.bridge-nf-call-ip6tables = 1\r\nnet.bridge.bridge-nf-call-iptables = 1\r\nEOF\r\nsudo sysctl --system \n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u8bbe\u7f6e ",(0,t.jsx)(n.code,{children:"rp-filter"})," \u503c\uff0c\u5c06\u6587\u4ef6 ",(0,t.jsx)(n.code,{children:"/etc/sysctl.d/10-network-security.conf"})," \u4e2d\u4e24\u4e2a\u53c2\u6570\u7684\u503c\u7531 2 \u6539\u4e3a 1\uff0c\u4e14\u5c06 ",(0,t.jsx)(n.code,{children:"/proc/sys/net/ipv4/ip_forward"})," \u8bbe\u7f6e\u4e3a 1\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo vi /etc/sysctl.d/10-network-security.conf\r\necho 1 > /proc/sys/net/ipv4/ip_forward\r\nsudo sysctl --system\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u5b89\u88c5-openyurt",children:"\u5b89\u88c5 OpenYurt"}),"\n",(0,t.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 Edge \u8282\u70b9\u4e0a\u5b89\u88c5 OpenYurt \u6765\u63a7\u5236\u5b83\u4e0b\u9762\u7684 containerd\u3001crun \u548c wasmedge \u5806\u6808\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6784\u5efa OpenYrut \u96c6\u7fa4\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 OpenYurt \u4f53\u9a8c\u4e2d\u5fc3\u3002 \u4f60\u53ea\u9700\u6ce8\u518c\u4e00\u4e2a\u7528\u4e8e\u6d4b\u8bd5\u7684\u5e10\u6237\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u83b7\u5f97\u4e00\u4e2a OpenYurt \u96c6\u7fa4\u3002 \u63a5\u4e0b\u6765\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"yurtctl join"})," \u547d\u4ee4\u884c\u6765\u52a0\u5165\u8fb9\u7f18\u8282\u70b9\u3002 \u5728",(0,t.jsx)(n.a,{href:"https://openyurt.io/docs/installation/openyurt-experience-center/overview/",children:"\u6b64\u5904"}),"\u67e5\u770b\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6216\u8005\uff0c\u4f60\u4e5f\u53ef\u4ee5\u6839\u636e",(0,t.jsx)(n.a,{href:"https://openyurt.io/zh/docs/installation/summary/",children:"\u6307\u5357"}),"\uff0c\u4f7f\u7528 yurtctl convert \u5c06 K8s \u96c6\u7fa4\u8f6c\u6362\u4e3a OpenYurt \u96c6\u7fa4\u5e76\u5b89\u88c5 OpenYurt \u7ec4\u4ef6\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5b89\u88c5-containerd",children:"\u5b89\u88c5 Containerd"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u884c\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u5b89\u88c5 containerd \u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'export VERSION="1.5.7"\r\necho -e "Version: $VERSION"\r\necho -e "Installing libseccomp2 ..."\r\nsudo apt install -y libseccomp2\r\necho -e "Installing wget"\r\nsudo apt install -y wget\r\n\r\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\r\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum\r\nsha256sum --check cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum\r\n\r\nsudo tar --no-overwrite-dir -C / -xzf cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\r\nsudo systemctl daemon-reload\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e crun \u9879\u76ee\u9ed8\u8ba4\u652f\u6301 WasmEdge\uff0c\u6211\u4eec\u53ea\u9700\u8981\u4e3a crun \u914d\u7f6e containerd \u914d\u7f6e\u5373\u53ef\u3002 \u6240\u4ee5\u6211\u4eec\u9700\u8981\u4fee\u6539 ",(0,t.jsx)(n.code,{children:"/etc/containerd/config.toml"})," \u4e2d\u7684 runc \u53c2\u6570\u4e3a crun\uff0c\u6dfb\u52a0 ",(0,t.jsx)(n.code,{children:"pod_annotation"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'sudo mkdir -p /etc/containerd/\r\nsudo bash -c "containerd config default > /etc/containerd/config.toml"\r\nwget https://raw.githubusercontent.com/second-state/wasmedge-containers-examples/main/containerd/containerd_config.diff\r\nsudo patch -d/ -p0 < containerd_config.diff\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4e4b\u540e\uff0c\u91cd\u542f containerd \u4f7f\u914d\u7f6e\u751f\u6548\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"systemctl start containerd\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5b89\u88c5-wasmedge",children:"\u5b89\u88c5 WasmEdge"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u4e0b\u9762\u7684\u5b89\u88c5\u811a\u672c\uff0c\u5728 edge \u8282\u70b9\u4e0a\u5b89\u88c5 WasmEdge\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5b89\u88c5\u5e76\u6784\u5efa-crun",children:"\u5b89\u88c5\u5e76\u6784\u5efa crun"}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u9700\u8981\u5728 edge node \u4e0a\u6784\u5efa\u4e00\u4e2a\u652f\u6301 WasmEdge \u7684 crun \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u76ee\u524d\uff0c\u6700\u76f4\u63a5\u7684\u65b9\u6cd5\u662f\u4f60\u81ea\u5df1\u4ece\u6e90\u4ee3\u7801\u5f00\u59cb\u6784\u5efa crun\u3002\u9996\u5148\u8bf7\u786e\u4fdd\u4f60\u5728 Ubuntu 20.04  \u5df2\u7ecf\u5b89\u88c5\u4e86 crun \u7684\u4f9d\u8d56\u9879\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u5176\u4ed6\u7248\u672c\u7684 Linux\uff0c\u8bf7\u53c2\u8003",(0,t.jsx)(n.a,{href:"https://github.com/containers/crun#readme",children:"\u5b98\u65b9\u6587\u6863"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo apt update\r\nsudo apt install -y make git gcc build-essential pkgconf libtool \\\r\n    libsystemd-dev libprotobuf-c-dev libcap-dev libseccomp-dev libyajl-dev \\\r\n    go-md2man libtool autoconf python3 automake\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\uff0c\u914d\u7f6e\u3001\u6784\u5efa\u3001\u5b89\u88c5\u5e26\u6709 WasmEdge \u652f\u6301\u7684 ",(0,t.jsx)(n.code,{children:"crun"})," \u4e8c\u8fdb\u5236\u6587\u4ef6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo make install\r\ngit clone https://github.com/containers/crun\r\ncd crun\r\n./autogen.sh\r\n./configure \u2014with-wasmedge\r\nmake\r\nsudo make install\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5b89\u88c5-openyurt-1",children:"\u5b89\u88c5 OpenYurt"}),"\n",(0,t.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 Edge \u8282\u70b9\u4e0a\u5b89\u88c5 OpenYurt \u6765\u63a7\u5236\u5b83\u4e0b\u9762\u7684 containerd\u3001crun \u548c wasmedge \u5806\u6808\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6784\u5efa OpenYrut \u96c6\u7fa4\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 OpenYurt \u4f53\u9a8c\u4e2d\u5fc3\u3002 \u4f60\u53ea\u9700\u6ce8\u518c\u4e00\u4e2a\u7528\u4e8e\u6d4b\u8bd5\u7684\u5e10\u6237\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u83b7\u5f97\u4e00\u4e2a OpenYurt \u96c6\u7fa4\u3002 \u63a5\u4e0b\u6765\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"yurtctl join"})," \u547d\u4ee4\u884c\u6765\u52a0\u5165\u8fb9\u7f18\u8282\u70b9\u3002 \u5728",(0,t.jsx)(n.a,{href:"https://openyurt.io/docs/installation/openyurt-experience-center/overview/",children:"\u6b64\u5904"}),"\u67e5\u770b\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002 \u76ee\u524d\uff0cOpenYurt \u4f53\u9a8c\u4e2d\u5fc3\u63d0\u4f9b\u7684 OpenYurt \u7ec4\u4ef6\u7248\u672c\u4e3a ",(0,t.jsx)(n.strong,{children:"0.6.0"}),"\uff08\u6700\u65b0\u7248\uff09\uff0cKubernetes \u7248\u672c\u4e3a 1.20.11\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6216\u8005\uff0c\u4f60\u4e5f\u53ef\u4ee5\u6839\u636e\u4e0b\u9762\u7684\u6307\u5357\uff0c\u4ece\u5934\u5f00\u59cb\u6784\u5efa OpenYurt \u96c6\u7fa4\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u8bbe\u7f6e\u4e00\u4e2a-k8s-\u96c6\u7fa4",children:"\u8bbe\u7f6e\u4e00\u4e2a K8s \u96c6\u7fa4"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 yurtctl convert \u5c06 K8s \u96c6\u7fa4\u8f6c\u6362\u4e3a OpenYurt \u96c6\u7fa4\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5148\u642d\u5efa\u4e00\u4e2ak8s \u96c6\u7fa4\u3002 \u9700\u8981\u6ce8\u610f\u7684\u4e00\u70b9\uff0c\u5982\u679c\u4f60\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"yurtctl init/join"})," \u6765\u8bbe\u7f6eOpenYurt \u96c6\u7fa4\u5e76\u52a0\u5165\u8282\u70b9\uff0c\u4f60\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u4e00\u6b65\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ sudo apt-get update && sudo apt-get install -y ca-certificates curl software-properties-common apt-transport-https\r\n// add K8s source\r\n$ curl -s https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | sudo apt-key add -\r\n$ sudo tee /etc/apt/sources.list.d/kubernetes.list <<EOF\r\n$ deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main\r\n// install K8s components 1.18.9\r\n$ sudo apt-get update && sudo apt-get install -y kubelet=1.18.9-00 kubeadm=1.18.9-00 kubectl=1.18.9-00 \r\n// Initialize the master node\r\n$ sudo kubeadm init --pod-network-cidr 172.16.0.0/16 \\\r\n--apiserver-advertise-address=192.168.3.167 \\\r\n--image-repository registry.cn-hangzhou.aliyuncs.com/google_containers\r\n// join the work node\r\n$ kubeadm join 192.168.3.167:6443 --token 3zefbt.99e6denc1cxpk9fg \\\r\n   --discovery-token-ca-cert-hash sha256:8077d4e7dd6eee64a999d56866ae4336073ed5ffc3f23281d757276b08b9b195\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u7684-webassembly-app",children:"\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u7684 WebAssembly app"}),"\n",(0,t.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u901a\u8fc7 Kubernetes \u96c6\u7fa4\u4f5c\u4e3a pod \u4e2d\u7684\u5bb9\u5668\u8fd0\u884c WebAssembly \u7a0b\u5e8f\u3002 \u672c\u8282\u5c06\u4ece Docker hub \u62c9\u53d6\u57fa\u4e8e WebAssembly \u7684\u5bb9\u5668\u955c\u50cf\u5f00\u59cb\u3002 \u5982\u679c\u4f60\u60f3\u77e5\u9053\u5982\u4f55\u7f16\u8bd1\u3001\u6253\u5305 WebAssembly \u7a0b\u5e8f\u5e76\u5c06\u5176\u4f5c\u4e3a\u5bb9\u5668\u955c\u50cf\u53d1\u5e03\u5230 Docker hub\uff0c\u8bf7\u53c2\u9605 ",(0,t.jsx)(n.a,{href:"https://wasmedge.org/book/en/kubernetes/demo/wasi.html",children:"WasmEdge Book"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4ece master \u8282\u70b9\u7684\u53e6\u4e00\u4e2a\u7ec8\u7aef\u7a97\u53e3\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff0c\u7136\u540e\u5f00\u59cb\u4f7f\u7528\u96c6\u7fa4\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"root@master:~# kubectl cluster-info\r\nKubernetes master is running at https://192.168.3.167:6443\r\nKubeDNS is running at https://192.168.3.167:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u56e0\u4e3a kubectl 1.18.9 \u6ca1\u6709 annotations \u53c2\u6570\uff0c\u6240\u4ee5\u6211\u4eec\u5728\u8fd9\u91cc\u9700\u8981\u8c03\u6574\u547d\u4ee4\u884c\u3002 \u5982\u679c\u4f7f\u7528\u7684\u662f OpenYurt Experience Center \uff0c\u5176\u9ed8\u8ba4\u7248\u672c\u4e3a OpenYurt 0.6.0 \u548c Kubernetes 1.20.11\uff0c\u8bf7\u76f4\u63a5\u53c2\u9605 WasmEdge Book \u4e2d\u7684 ",(0,t.jsx)(n.a,{href:"https://wasmedge.org/book/en/kubernetes/kubernetes.html",children:"Kubernetes \u90e8\u5206"}),"\u6765\u8fd0\u884c wasm \u5e94\u7528\u7a0b\u5e8f\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'// kubectl 1.18.9\r\n$ sudo kubectl run -it --rm --restart=Never wasi-demo --image=hydai/wasm-wasi-example:with-wasm-annotation  --overrides=\'{"kind":"Pod","metadata":{"annotations":{"module.wasm.image/variant":"compat"}} , "apiVersion":"v1", "spec": {"hostNetwork": true}}\' /wasi_example_main.wasm 50000000\r\n\r\n// kubectl 1.20.11\r\n$ sudo kubectl run -it --rm --restart=Never wasi-demo --image=hydai/wasm-wasi-example:with-wasm-annotation --annotations="module.wasm.image/variant=compat" --overrides=\'{"kind":"Pod", "apiVersion":"v1", "spec": {"hostNetwork": true}}\' /wasi_example_main.wasm 50000000\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5bb9\u5668\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u8f93\u51fa\u88ab\u6253\u5370\u5230\u63a7\u5236\u53f0\u3002 \u6240\u6709 Kubernetes \u7248\u672c\u90fd\u662f\u4e00\u6837\u7684\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Random number: 1123434661\r\nRandom bytes: [25, 169, 202, 211, 22, 29, 128, 133, 168, 185, 114, 161, 48, 154, 56, 54, 99, 5, 229, 161, 225, 47, 85, 133, 90, 61, 156, 86, 3, 14, 10, 69, 185, 225, 226, 181, 141, 67, 44, 121, 157, 98, 247, 148, 201, 248, 236, 190, 217, 245, 131, 68, 124, 28, 193, 143, 215, 32, 184, 50, 71, 92, 148, 35, 180, 112, 125, 12, 152, 111, 32, 30, 86, 15, 107, 225, 39, 30, 178, 215, 182, 113, 216, 137, 98, 189, 72, 68, 107, 246, 108, 210, 148, 191, 28, 40, 233, 200, 222, 132, 247, 207, 239, 32, 79, 238, 18, 62, 67, 114, 186, 6, 212, 215, 31, 13, 53, 138, 97, 169, 28, 183, 235, 221, 218, 81, 84, 235]\r\nPrinted from wasi: This is from a main function\r\nThis is from a main function\r\nThe env vars are as follows.\r\nThe args are as follows.\r\n/wasi_example_main.wasm\r\n50000000\r\nFile content is This is in a file\r\npod "wasi-demo" deleted\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Kubernetes \u547d\u4ee4\u884c\u67e5\u770b pod \u72b6\u6001\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"crictl ps -a\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u5728\u65e5\u5fd7\u4e2d\u770b\u5230\u4ece\u8c03\u5ea6\u5230\u8fd0\u884c WebAssembly \u5de5\u4f5c\u8d1f\u8f7d\u7684\u4e8b\u4ef6\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"CONTAINER           IMAGE               CREATED             STATE               \r\nNAME                 ATTEMPT             POD ID\r\n0c176ed65599a       0423b8eb71e31       8 seconds ago       Exited              wasi-demo    \n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u6837\u5b8c\u6210\u4e86\u3002\u63a5\u4e0b\u6765\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 OpenYurt \u7ba1\u7406\u81ea\u5df1\u7684 WasmEdge \u5e94\u7528\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var s=r(96540);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);