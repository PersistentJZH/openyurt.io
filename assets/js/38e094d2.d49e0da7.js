"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[22956],{52911:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var t=o(74848),a=o(28453);const d={title:"DaemonSet Upgrade Model"},r=void 0,s={id:"user-manuals/workload/daemon-pod-updater",title:"DaemonSet Upgrade Model",description:"Background",source:"@site/versioned_docs/version-v1.3/user-manuals/workload/daemon-pod-updater.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/daemon-pod-updater",permalink:"/docs/v1.3/user-manuals/workload/daemon-pod-updater",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/daemon-pod-updater.md",tags:[],version:"v1.3",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1725224557e3,frontMatter:{title:"DaemonSet Upgrade Model"},sidebar:"docs",previous:{title:"Edge Local Storage",permalink:"/docs/v1.3/user-manuals/storage/edge-local-storage"},next:{title:"Node Pool Management",permalink:"/docs/v1.3/user-manuals/workload/node-pool-management"}},i={},l=[{value:"Background",id:"background",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Usage\uff1a",id:"usage",level:2},{value:"1\uff09Install Yurt-Manager Component",id:"1install-yurt-manager-component",level:3},{value:"2\uff09AdvancedRollingUpdate Upgrade Model",id:"2advancedrollingupdate-upgrade-model",level:3},{value:"3\uff09OTA Upgrade Model",id:"3ota-upgrade-model",level:3},{value:"OTA Upgrade API",id:"ota-upgrade-api",level:4},{value:"OTA Upgrade Example",id:"ota-upgrade-example",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,t.jsx)(n.p,{children:"In edge scenarios, the native DaemonSet upgrade model does not perfectly satisfy existing requirements. In the case of cloud-edge network disconnection, DaemonSet upgrade process may be blocked. In addition, the native upgrade model does not provide any upgrade operation API, and users cannot control the application upgrade on their own."}),"\n",(0,t.jsxs)(n.p,{children:["In order to address the above problems, we extend the native DaemonSet upgrade model by adding a custom controller ",(0,t.jsx)(n.code,{children:"daemonPodUpdater-controller"}),", providing AdvancedRollingUpdate and OTA two upgrade model."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["AdvancedRollingUpdate: Solve the DaemonSet upgrade process blocking problem which caused by node ",(0,t.jsx)(n.code,{children:"Not-Ready"})," when the cloud-edge is disconnected. During AdvancedRollingUpdate upgrade, ",(0,t.jsx)(n.code,{children:"not-ready"})," nodes will be ignored. And when ",(0,t.jsx)(n.code,{children:"Not-Ready"})," nodes turn to ",(0,t.jsx)(n.code,{children:"Ready"}),", upgrade process will be completed automatically."]}),"\n",(0,t.jsxs)(n.li,{children:["OTA: Add pod status condition ",(0,t.jsx)(n.code,{children:"PodNeedUpgrade"})," which indicates the upgrade availability information. YurtHub OTA component can use this condition to determine if a new version of DaemonSet application exists."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'# example configuration for AdvancedRollingUpdate or OTA upgrade\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  # \xb7\xb7\xb7\n  annotations:\n    # This annotation is the first prerequisite for using AdvancedRollingUpdate or OTA upgrade\n    # and the only valid values are "AdvancedRollingUpdate" or "OTA".\n    apps.openyurt.io/update-strategy: OTA\n    # This annotation is used for rolling update and only works in AdvancedRollingUpdate mode.\n    # The supported value is the same with native DaemonSet maxUnavailable, default to 10%.\n    apps.openyurt.io/max-unavailable: 30%\n  # \xb7\xb7\xb7\nspec:\n  # \xb7\xb7\xb7\n  # Set updateStrategy to "OnDelete" is another prerequisite for using AdvancedRollingUpdate or OTA upgrade.\n  updateStrategy:\n    type: OnDelete\n  # \xb7\xb7\xb7\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In short, if you wish to use AdvancedRollingUpdate or OTA upgrade, you need to set annotation ",(0,t.jsx)(n.code,{children:"apps.openyurt.io/update-strategy"}),' to "AdvancedRollingUpdate" or "OTA" and set ',(0,t.jsx)(n.code,{children:".spec.updateStrategy.type"}),' to "OnDelete".']}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage\uff1a"}),"\n",(0,t.jsx)(n.h3,{id:"1install-yurt-manager-component",children:"1\uff09Install Yurt-Manager Component"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"daemonpodupdater controller"})," is integrated within ",(0,t.jsx)(n.code,{children:"Yurt-Manager"})," component, and it needs to be installed before using AdvancedRollingUpdate or OTA Upgrade Model, you can refer to ",(0,t.jsx)(n.a,{href:"https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components",children:"Deploy OpenYurt"})," for detailed operations."]}),"\n",(0,t.jsx)(n.h3,{id:"2advancedrollingupdate-upgrade-model",children:"2\uff09AdvancedRollingUpdate Upgrade Model"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create daemonset instance"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cat <<EOF | kubectl apply -f -\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: nginx-daemonset\n  annotations:\n    apps.openyurt.io/update-strategy: AdvancedRollingUpdate\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  updateStrategy:\n    type: OnDelete\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.19.4\n\nEOF\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Get nginx-daemonset pods"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods | grep nginx-daemonset\n\nnginx-daemonset-bv5jg   1/1     Running   0          21m   10.244.2.2   openyurt-e2e-test-worker3   <none>           <none>\nnginx-daemonset-fhsr6   1/1     Running   0          21m   10.244.1.2   openyurt-e2e-test-worker    <none>           <none>\nnginx-daemonset-lmmtd   1/1     Running   0          21m   10.244.3.2   openyurt-e2e-test-worker2   <none>           <none>\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Simulate cloud-edge network disconnection: assume that nodes ",(0,t.jsx)(n.code,{children:"openyurt-e2e-test-worker2"})," and ",(0,t.jsx)(n.code,{children:"openyurt-e2e-test-worker3"})," are disconnected from the cloud node. This example uses ",(0,t.jsx)(n.code,{children:"Kind"})," to create the cluster, so the network disconnection can be simulated by removing the containers from the virtual bridge."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ docker network disconnect kind openyurt-e2e-test-worker2\n$ docker network disconnect kind openyurt-e2e-test-worker3\n\n$ kubectl get nodes -o wide\nAME                              STATUS     ROLES                  AGE   VERSION   INTERNAL-IP   EXTERNAL-IP   OS-IMAGE       KERNEL-VERSION     CONTAINER-RUNTIME\nopenyurt-e2e-test-control-plane   Ready      control-plane,master   36m   v1.22.7   172.18.0.4    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker          Ready      <none>                 35m   v1.22.7   172.18.0.2    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker2         NotReady   <none>                 35m   v1.22.7   172.18.0.3    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker3         NotReady   <none>                 35m   v1.22.7   172.18.0.5    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Update daemonset: change the container image from nginx:1.19.4 to nginx:1.19.5"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"***\ncontainers:\n      - name: nginx\n        image: nginx:1.19.5\n***\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Get pods: the old pod ",(0,t.jsx)(n.code,{children:"default/nginx-daemonset-fhsr6"})," on ",(0,t.jsx)(n.code,{children:"openyurt-e2e-test-worker"})," node has been deleted and the new pod ",(0,t.jsx)(n.code,{children:"default/nginx-daemonset-slp5t"})," has been created; the pods on the two disconnected nodes will not be upgraded temporarily"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"nginx-daemonset-bv5jg   1/1     Running   0          33m     10.244.2.2   openyurt-e2e-test-worker3   <none>           <none>\nnginx-daemonset-lmmtd   1/1     Running   0          33m     10.244.3.2   openyurt-e2e-test-worker2   <none>           <none>\nnginx-daemonset-slp5t   1/1     Running   0          5m54s   10.244.1.3   openyurt-e2e-test-worker    <none>           <none>\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Restore network connectivity of nodes"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ docker network connect kind openyurt-e2e-test-worker2\n$ docker network connect kind openyurt-e2e-test-worker3\n\n$ kubectl get nodes -o wide\nNAME                              STATUS   ROLES                  AGE   VERSION   INTERNAL-IP   EXTERNAL-IP   OS-IMAGE       KERNEL-VERSION     CONTAINER-RUNTIME\nopenyurt-e2e-test-control-plane   Ready    control-plane,master   49m   v1.22.7   172.18.0.4    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker          Ready    <none>                 48m   v1.22.7   172.18.0.2    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker2         Ready    <none>                 48m   v1.22.7   172.18.0.3    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker3         Ready    <none>                 48m   v1.22.7   172.18.0.5    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Get pods: daemonset pods on all nodes have been upgraded"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"nginx-daemonset-kbkf6   1/1     Running   0          88s   10.244.3.3   openyurt-e2e-test-worker2   <none>           <none>\nnginx-daemonset-scgtv   1/1     Running   0          51s   10.244.2.3   openyurt-e2e-test-worker3   <none>           <none>\nnginx-daemonset-slp5t   1/1     Running   0          11m   10.244.1.3   openyurt-e2e-test-worker    <none>           <none>\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Check pods image version: all pods have been upgraded to nginx:1.19.5"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"***\nContainers:\n  nginx:\n    Container ID:   containerd://f7d4b3f1257a0d1d8da862671c11cb094f9fba1ba0041b7a5f783d9c9e4d8449\n    Image:          nginx:1.19.5\n    Image ID:       docker.io/library/nginx@sha256:31de7d2fd0e751685e57339d2b4a4aa175aea922e592d36a7078d72db0a45639\n    Port:           <none>\n    Host Port:      <none>\n    State:          Running\n      Started:      Fri, 14 Oct 2022 14:21:25 +0800\n    Ready:          True\n    Restart Count:  0\n    Environment:    <none>\n    Mounts:\n      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-wrhj8 (ro)\n***\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3ota-upgrade-model",children:"3\uff09OTA Upgrade Model"}),"\n",(0,t.jsx)(n.h4,{id:"ota-upgrade-api",children:"OTA Upgrade API"}),"\n",(0,t.jsx)(n.p,{children:"YurtHub provides two REST APIs for OTA upgrades."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET /pods"})}),"\n",(0,t.jsx)(n.p,{children:"This API allows you to get information about the pods on the node."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST /openyurt.io/v1/namespaces/{ns}/pods/{podname}/upgrade"})}),"\n",(0,t.jsxs)(n.p,{children:["This API allows you to specify and upgrade a DaemonSet Pod. The path parameters ",(0,t.jsx)(n.code,{children:"ns"})," and ",(0,t.jsx)(n.code,{children:"podname"})," represent the namespace and name of the pod, respectively."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"ota-upgrade-example",children:"OTA Upgrade Example"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create daemonset instance"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cat <<EOF | kubectl apply -f -\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: nginx-daemonset\n  annotations:\n    apps.openyurt.io/update-strategy: OTA\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  updateStrategy:\n    type: OnDelete\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.19.4\n\nEOF\n\n# get nginx-daemonset pods\n$ kubectl get pods -o wide | grep nginx-daemonset\nnginx-daemonset-bwzss   1/1     Running   0          92s   10.244.3.4   openyurt-e2e-test-worker2   <none>           <none>\nnginx-daemonset-ppf9p   1/1     Running   0          92s   10.244.1.4   openyurt-e2e-test-worker    <none>           <none>\nnginx-daemonset-rgp9h   1/1     Running   0          92s   10.244.2.4   openyurt-e2e-test-worker3   <none>           <none>\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Check pod status condition ",(0,t.jsx)(n.code,{children:"PodNeedUpgrade"}),": take pod ",(0,t.jsx)(n.code,{children:"nginx-daemonset-bwzss"})," on node ",(0,t.jsx)(n.code,{children:"openyurt-e2e-test-worker2"})," as an example"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl describe pods nginx-daemonset-bwzss\n\n***\nConditions:\n  Type              Status\n  PodNeedUpgrade    False\n***\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Update daemonset: change the container image from nginx:1.19.4 to nginx:1.19.5"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"***\ncontainers:\n      - name: nginx\n        image: nginx:1.19.5\n***\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Check pod status condition ",(0,t.jsx)(n.code,{children:"PodNeedUpgrade"})," again"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl describe pods nginx-daemonset-bwzss\n\n***\nConditions:\n  Type              Status\n  PodNeedUpgrade    True\n***\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Execute OTA upgrade"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# enter edge node container of Kind cluster \n$ docker exec -it openyurt-e2e-test-worker2 /bin/bash\n\n# call Upgrade API, this upgrade API is only available on the edge nodes\n$ curl -X POST 127.0.0.1:10267/openyurt.io/v1/namespaces/default/pods/nginx-daemonset-bwzss/upgrade\nStart updating pod default/nginx-daemonset-bwzss\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Check upgrade result: pod ",(0,t.jsx)(n.code,{children:"nginx-daemonset-bwzss"})," on node ",(0,t.jsx)(n.code,{children:"openyurt-e2e-test-worker2"})," has been deleted and new pod ",(0,t.jsx)(n.code,{children:"nginx-daemonset-vrvhn"})," has been created"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# check result\n$ kubectl get pods -o wide | grep nginx-daemonset\nnginx-daemonset-ppf9p   1/1     Running   0          15m   10.244.1.4   openyurt-e2e-test-worker    <none>           <none>\nnginx-daemonset-rgp9h   1/1     Running   0          15m   10.244.2.4   openyurt-e2e-test-worker3   <none>           <none>\nnginx-daemonset-vrvhn   1/1     Running   0          63s   10.244.3.5   openyurt-e2e-test-worker2   <none>           <none>\n\n# check pod container image\n$ kubectl describe pods nginx-daemonset-vrvhn\n***\nContainers:\n  nginx:\n    Container ID:   containerd://18df6aa88076639353ea0b3d87f340cd4c86ab27a7f154bce06345e9764c997a\n    Image:          nginx:1.19.5\n    Image ID:       docker.io/library/nginx@sha256:31de7d2fd0e751685e57339d2b4a4aa175aea922e592d36a7078d72db0a45639\n    Port:           <none>\n    Host Port:      <none>\n    State:          Running\n      Started:      Fri, 14 Oct 2022 16:25:20 +0800\n    Ready:          True\n    Restart Count:  0\n    Environment:    <none>\n    Mounts:\n      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-p6kjh (ro)\n***\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>s});var t=o(96540);const a={},d=t.createContext(a);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);