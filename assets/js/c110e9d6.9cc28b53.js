"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[51123],{7339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(85893),s=t(11151);const r={},i="Running Kata Containers runtime on the Edge Node",o={id:"user-manuals/runtime/KataContainers",title:"Running Kata Containers runtime on the Edge Node",description:"In this article, we will cover the steps to install and set up the entire toolchain for running Kata Containers as a Pod for the OCI runtime in an OpenYurt cluster.",source:"@site/versioned_docs/version-v0.6.0/user-manuals/runtime/KataContainers.md",sourceDirName:"user-manuals/runtime",slug:"/user-manuals/runtime/KataContainers",permalink:"/docs/v0.6.0/user-manuals/runtime/KataContainers",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/runtime/KataContainers.md",tags:[],version:"v0.6.0",lastUpdatedBy:"LofiSu",lastUpdatedAt:1723462386e3,frontMatter:{}},l={},c=[{value:"1 Before we start",id:"1-before-we-start",level:2},{value:"2 Install OpenYurt",id:"2-install-openyurt",level:2},{value:"3 Set up a K8s cluster",id:"3-set-up-a-k8s-cluster",level:2},{value:"4 Install Containerd",id:"4-install-containerd",level:2},{value:"4.1 Configuration file",id:"41-configuration-file",level:3},{value:"5 Install Kata Containers",id:"5-install-kata-containers",level:2},{value:"5.1 Download Kata Containers",id:"51-download-kata-containers",level:3},{value:"5.2 Configure <code>kata</code> as <code>runtime</code>",id:"52-configure-kata-as-runtime",level:3},{value:"6 Run a Kata Containers as a Pod for the OCI runtime",id:"6-run-a-kata-containers-as-a-pod-for-the-oci-runtime",level:2},{value:"6.1 Create Kata Runtime Class resource",id:"61-create-kata-runtime-class-resource",level:3},{value:"6.2 Start a Pod with Kata as the runtime",id:"62-start-a-pod-with-kata-as-the-runtime",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"running-kata-containers-runtime-on-the-edge-node",children:"Running Kata Containers runtime on the Edge Node"})}),"\n",(0,a.jsx)(n.p,{children:"In this article, we will cover the steps to install and set up the entire toolchain for running Kata Containers as a Pod for the OCI runtime in an OpenYurt cluster."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://katacontainers.io/",children:"Kata Containers"})," are lightweight and secure containers that are OCI compliant and ",(0,a.jsx)(n.a,{href:"https://github.com/kata-containers/kata-containers/blob/main/docs/how-to/run-kata-with-k8s.md",children:"k8s compatible"}),". Compared to Linux containers, Kata Containers works to build a secure container runtime with lightweight virtual machines that feel and perform like containers but provide stronger workload isolation using hardware virtualization technology as a second layer of defense."]}),"\n",(0,a.jsx)(n.h2,{id:"1-before-we-start",children:"1 Before we start"}),"\n",(0,a.jsx)(n.p,{children:"Close the swap space of the master and node firstly."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sudo swapoff -a      \nfree -m    // verify\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Next, configure the file ",(0,a.jsx)(n.code,{children:"/etc/hosts"})," of two nodes."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"127.0.0.1 localhost\n127.0.1.1 vagrant\n\n# The following lines are desirable for IPv6 capable hosts\n::1     ip6-localhost ip6-loopback\nfe00::0 ip6-localnet\nff00::0 ip6-mcastprefix\nff02::1 ip6-allnodes\nff02::2 ip6-allrouters\n127.0.2.1 k8s-node01 k8s-node01\n192.168.44.140 k8s-master\n192.168.44.141 k8s-node01\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then, load the ",(0,a.jsx)(n.code,{children:"br_netfilter"})," Kernel module and modify the Kernel parameter."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"//load the module\nsudo modprobe br_netfilter\n\n//verify   \nlsmod | grep br_netfilter\n\n// create k8s.conf\ncat <<EOF | sudo tee /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nEOF\nsudo sysctl --system \n"})}),"\n",(0,a.jsxs)(n.p,{children:["Last, setup the value of  ",(0,a.jsx)(n.code,{children:"rp-filter"})," - adjusting the value of two parameters in ",(0,a.jsx)(n.code,{children:"/etc/sysctl.d/10-network-security.conf"})," from 2 to 1 and setting up the value of ",(0,a.jsx)(n.code,{children:"/proc/sys/net/ipv4/ip_forward"})," to 1."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sudo vim /etc/sysctl.d/10-network-security.conf\necho 1 > /proc/sys/net/ipv4/ip_forward\nsudo sysctl --system\n"})}),"\n",(0,a.jsx)(n.h2,{id:"2-install-openyurt",children:"2 Install OpenYurt"}),"\n",(0,a.jsx)(n.p,{children:"Now, we can install OpenYurt on the Edge node to control the Containerd, Kata Containers stack below it."}),"\n",(0,a.jsxs)(n.p,{children:["An easier way to set up an OpenYurt Cluster is to go to the OpenYurt Experience Center. All you need to do is to sign up for an account for testing, and then you will get an OpenYurt cluster. Next, you could just use ",(0,a.jsx)(n.code,{children:"yurtctl join"})," command line to join an edge node. ",(0,a.jsx)(n.a,{href:"https://openyurt.io/docs/installation/openyurt-experience-center/overview/",children:"See more details here"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Alternatively, you can convert a K8s  cluster to an OpenYurt cluster using ",(0,a.jsx)(n.code,{children:"yurtctl convert"})," from scratch according to ",(0,a.jsx)(n.a,{href:"https://openyurt.io/docs/next/installation/yurtctl-convert-revert",children:"the guide"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"3-set-up-a-k8s-cluster",children:"3 Set up a K8s cluster"}),"\n",(0,a.jsxs)(n.p,{children:["Here we use ",(0,a.jsx)(n.code,{children:"yurtctl convert"})," to convert the k8s cluster to an OpenYurt cluster, so we need to build a k8s cluster first. One thing to note, if you used ",(0,a.jsx)(n.code,{children:"yurtctl init/join"})," to set up an OpenYurt cluster and join nodes, you can skip this step."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ sudo apt-get update && sudo apt-get install -y ca-certificates curl software-properties-common apt-transport-https\n// add K8s source\n$ curl -s https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | sudo apt-key add -\n$ sudo tee /etc/apt/sources.list.d/kubernetes.list <<EOF\n$ deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main\n// install K8s components 1.18.9\n$ sudo apt-get update && sudo apt-get install -y kubelet=1.18.9-00 kubeadm=1.18.9-00 kubectl=1.18.9-00 \n// Initialize the master node\n$ sudo kubeadm init --pod-network-cidr 172.16.0.0/16 \\\n--apiserver-advertise-address=192.168.3.167 \\\n--image-repository registry.cn-hangzhou.aliyuncs.com/google_containers\n// join the work node\n$ kubeadm join 192.168.3.167:6443 --token 3zefbt.99e6denc1cxpk9fg \\\n   --discovery-token-ca-cert-hash sha256:8077d4e7dd6eee64a999d56866ae4336073ed5ffc3f23281d757276b08b9b195\n"})}),"\n",(0,a.jsx)(n.h2,{id:"4-install-containerd",children:"4 Install Containerd"}),"\n",(0,a.jsx)(n.p,{children:"Use the following commands to install containerd on your edge node."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'export VERSION="1.5.7"\necho -e "Version: $VERSION"\necho -e "Installing libseccomp2 ..."\nsudo apt install -y libseccomp2\necho -e "Installing wget"\nsudo apt install -y wget\n\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum\nsha256sum --check cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum\n\nsudo tar --no-overwrite-dir -C / -xzf cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\nsudo systemctl daemon-reload\n'})}),"\n",(0,a.jsx)(n.h3,{id:"41-configuration-file",children:"4.1 Configuration file"}),"\n",(0,a.jsxs)(n.p,{children:["The Containerd needs a configuration file to start. When Containerd is started, it will start according to this configuration file. The default location is: ",(0,a.jsx)(n.code,{children:"/etc/containerd/config.toml"}),".\nCreated with the following command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"containerd config default > /etc/containerd/config.toml\n"})}),"\n",(0,a.jsx)(n.h2,{id:"5-install-kata-containers",children:"5 Install Kata Containers"}),"\n",(0,a.jsx)(n.p,{children:"Using Kata Containers as an OCI runtime requires Kata to be installed on the nodes of the Kubernetes cluster."}),"\n",(0,a.jsx)(n.p,{children:"Install by downloading the latest compressed package from GitHub, or download other versions for installation if necessary."}),"\n",(0,a.jsx)(n.h3,{id:"51-download-kata-containers",children:"5.1 Download Kata Containers"}),"\n",(0,a.jsxs)(n.p,{children:["There is no Kata 2.x version of the installation package on Ubuntu, that is, it cannot be installed through ",(0,a.jsx)(n.code,{children:"apt"}),".\nDownload and unzip:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"wget https://github.com/kata-containers/kata-containers/releases/download/2.3.3/kata-static-2.3.3-x86_64.tar.xz\ntar -C / -Jxvf kata-static-2.3.3-x86_64.tar.xz\n"})}),"\n",(0,a.jsxs)(n.p,{children:["All Kata files will be extracted to ",(0,a.jsx)(n.code,{children:"/opt/kata/"}),". Kata's configuration files are under ",(0,a.jsx)(n.code,{children:"/opt/kata/share/defaults/kata-containers/"}),", each Hypervisor has a corresponding file, and ",(0,a.jsx)(n.code,{children:"QEMU"})," is used by default."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ ls -tl /opt/kata/share/defaults/kata-containers/\n\ntotal 64\n-rw-r--r-- 1 1001 121 14828 Jan  6 11:55 configuration-fc.toml\n-rw-r--r-- 1 1001 121 24159 Jan  6 11:55 configuration-qemu.toml\nlrwxrwxrwx 1 1001 121    23 Jan  6 11:55 configuration.toml -> configuration-qemu.toml\n-rw-r--r-- 1 1001 121  9405 Jan  6 11:55 configuration-acrn.toml\n-rw-r--r-- 1 1001 121 11528 Jan  6 11:55 configuration-clh.toml\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"52-configure-kata-as-runtime",children:["5.2 Configure ",(0,a.jsx)(n.code,{children:"kata"})," as ",(0,a.jsx)(n.code,{children:"runtime"})]}),"\n",(0,a.jsxs)(n.p,{children:["Add Kata runtime for ",(0,a.jsx)(n.code,{children:"containerd"}),". This requires editing the ",(0,a.jsx)(n.code,{children:"/etc/containerd/config.toml"})," file and adding the following content in the appropriate location (note the nesting relationship of the configuration items)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'$ vim /etc/containerd/config.toml\n\n        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.kata]\n          runtime_type = "io.containerd.kata.v2"\n          pod_annotations = ["io.katacontainers.*"]\n          privileged_without_host_devices = true\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Then restart ",(0,a.jsx)(n.code,{children:"containerd"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl start containerd\n"})}),"\n",(0,a.jsx)(n.h2,{id:"6-run-a-kata-containers-as-a-pod-for-the-oci-runtime",children:"6 Run a Kata Containers as a Pod for the OCI runtime"}),"\n",(0,a.jsx)(n.p,{children:"Next, let's run a pod with Kata as the OCI runtime in the OpenYurt cluster."}),"\n",(0,a.jsx)(n.h3,{id:"61-create-kata-runtime-class-resource",children:"6.1 Create Kata Runtime Class resource"}),"\n",(0,a.jsx)(n.p,{children:"RuntimeClass is a feature used to select the container runtime configuration used to run the containers in the Pod. Different RuntimeClasses can be set on different Pods to provide a balance between performance and security."}),"\n",(0,a.jsx)(n.p,{children:"A RuntimeClass object needs to be created for each handler.\nThe RuntimeClass resource currently has only two important fields: the RuntimeClass name (metadata.name) and handler (handler). The object definition looks like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ vim runtimeclass-kata.yaml\n\napiVersion: node.k8s.io/v1\nkind: RuntimeClass\nmetadata:\n  name: kata  # The name used to refer to the RuntimeClass \nhandler: kata  # The name of the corresponding CRI configuration\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"kubectl apply"})," to load the RuntimeClass:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f runtimeclass-kata.yaml\n"})}),"\n",(0,a.jsx)(n.h3,{id:"62-start-a-pod-with-kata-as-the-runtime",children:"6.2 Start a Pod with Kata as the runtime"}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"yaml"})," file to configure the parameters of the Pod:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ vim nginx-kata.yaml\n\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-kata\n  labels:\n    env: test\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n  nodeSelector:\n    disktype: k8s-node01\t# Set up running pods on k8s-node01 \n  runtimeClassName: kata\t# Set the runtime to Kata \n"})}),"\n",(0,a.jsx)(n.p,{children:"Create and start a Pod:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f nginx-kata.yaml\n"})}),"\n",(0,a.jsx)(n.p,{children:"Get Pod info:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -o wide\n\nNAME         READY   STATUS    RESTARTS   AGE   IP             NODE           NOMINATED NODE   READINESS GATES\nnginx-kata   1/1     Running   0          35s   192.168.1.21   k8s-worker01   <none>           <none>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"crictl"})," on the k8s-node01 node to see that the runtime used by the Pod is Kata:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ crictl pods\n\nPOD ID              CREATED              STATE               NAME                        NAMESPACE           ATTEMPT             RUNTIME\n7e74e3aba1cd9       49 seconds ago       Ready               nginx-kata                  default             0                   kata\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{a:()=>i});var a=t(67294);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);