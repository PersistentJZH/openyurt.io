"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[67289],{44648:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=a(74848),o=a(28453);const s={title:"Edge Local Storage"},r=void 0,l={id:"user-manuals/storage/edge-local-storage",title:"Edge Local Storage",description:"1. Check the local storage resources on the node",source:"@site/versioned_docs/version-v1.1/user-manuals/storage/edge-local-storage.md",sourceDirName:"user-manuals/storage",slug:"/user-manuals/storage/edge-local-storage",permalink:"/docs/v1.1/user-manuals/storage/edge-local-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/storage/edge-local-storage.md",tags:[],version:"v1.1",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1727643949e3,frontMatter:{title:"Edge Local Storage"},sidebar:"docs",previous:{title:"Edge Ingress",permalink:"/docs/v1.1/user-manuals/network/edge-ingress"},next:{title:"DaemonSet Upgrade Model",permalink:"/docs/v1.1/user-manuals/workload/daemon-pod-updater"}},i={},c=[{value:"1. Check the local storage resources on the node",id:"1-check-the-local-storage-resources-on-the-node",level:3},{value:"2. Create Configmap",id:"2-create-configmap",level:3},{value:"3. Install node-resource-manager",id:"3-install-node-resource-manager",level:3},{value:"4. Deploy application in cluster\uff08with lvm\uff09",id:"4-deploy-application-in-clusterwith-lvm",level:3},{value:"Create storageclass",id:"create-storageclass",level:4},{value:"Create PVC",id:"create-pvc",level:4},{value:"Create application",id:"create-application",level:4}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"1-check-the-local-storage-resources-on-the-node",children:"1. Check the local storage resources on the node"}),"\n",(0,t.jsx)(n.p,{children:"Check the corresponding Relation between existing block devices and nodes."}),"\n",(0,t.jsx)(n.h3,{id:"2-create-configmap",children:"2. Create Configmap"}),"\n",(0,t.jsxs)(n.p,{children:["Create a ConfigMap in a cluster. Here is a relatively generic ConfigMap configuration that configures local storage resources. For details, see ",(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/node-resource-manager/blob/main/docs/configmap.zh.md",children:"DOC"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: node-resource-topo\n  namespace: kube-system\ndata:\n  volumegroup: |-\n    volumegroup:\n    - name: volumegroup1\n      key: kubernetes.io/hostname\n      operator: In\n      value: cn-zhangjiakou.192.168.3.114\n      topology:\n        type: device\n        devices:\n        - /dev/vdb\n        - /dev/vdc\n  quotapath: |-\n    quotapath:\n    - name: /mnt/path1\n      key: kubernetes.io/hostname\n      operator: In\n      value: cn-beijing.192.168.3.35\n      topology:\n        type: device\n        options: prjquota\n        fstype: ext4\n        devices:\n        - /dev/vdb\n"})}),"\n",(0,t.jsx)(n.p,{children:"The previous configuration provides the following functionsThe previous configuration provides the following functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'In the test cluster,  we used two pieces of equipment : /dev/VDB & / dev/VDC  to create an LVM volumegroup on the worker node: "cn - zhangjiakou. 192.168.3.114 ".  Devices here can add paths that do not exist,  because the plug-in will automatically ignore this path during the node initialisation.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Meanwhile, we format the block device "/dev/vdb" to prjquota format on worker node "cn-beijing.192.168.3.35", and  mount it to path "/mnt/path1",  and then subdirectories created under this path can set the maximum quota for each directory. Devices here can also add paths that do not exist, the component will automatically select the first existing block device for formatting and binding.'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-install-node-resource-manager",children:"3. Install node-resource-manager"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/openyurtio/node-resource-manager/main/deploy/nrm.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"4-deploy-application-in-clusterwith-lvm",children:"4. Deploy application in cluster\uff08with lvm\uff09"}),"\n",(0,t.jsx)(n.h4,{id:"create-storageclass",children:"Create storageclass"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'cat <<EOF | kubectl apply -f -\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n    name: csi-local\nprovisioner: localplugin.csi.alibabacloud.com\nparameters:\n    volumeType: LVM\n    vgName: volumegroup1\n    fsType: ext4\n    lvmType: "striping"\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\nallowVolumeExpansion: true\nEOF\n'})}),"\n",(0,t.jsx)(n.p,{children:"Parameters. vgName is the VolumeGroup defined in node-resource-topo configmap, named volumegroup1."}),"\n",(0,t.jsx)(n.h4,{id:"create-pvc",children:"Create PVC"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"cat << EOF | kubectl apply -f -\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: lvm-pvc\n  annotations:\n    volume.kubernetes.io/selected-node: cn-zhangjiakou.192.168.3.114\nspec:\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 2Gi\n  storageClassName: csi-local\nEOF\n"})}),"\n",(0,t.jsx)(n.p,{children:"You need to specify the node where the storage is located in the PVC's annotation,"}),"\n",(0,t.jsx)(n.h4,{id:"create-application",children:"Create application"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'cat << EOF | kubectl apply -f -\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: deployment-lvm\n  labels:\n    app: nginx\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.7.9\n        volumeMounts:\n          - name: lvm-pvc\n            mountPath: "/data"\n      volumes:\n        - name: lvm-pvc\n          persistentVolumeClaim:\n            claimName: lvm-pvc\nEOF\n'})}),"\n",(0,t.jsx)(n.p,{children:"Above, we have completed the basic use of local storage, Quotapath mode is basically the same, just need to change the StorageClass."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>l});var t=a(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);