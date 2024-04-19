"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[28948],{30864:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var n=r(85893),c=r(11151);const t={title:"\u53ef\u7f16\u7a0b\u8d44\u6e90\u8bbf\u95ee\u63a7\u5236"},i=void 0,o={id:"user-manuals/resource-access-control/resource-access-control",title:"\u53ef\u7f16\u7a0b\u8d44\u6e90\u8bbf\u95ee\u63a7\u5236",description:"\u80cc\u666f\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.4/user-manuals/resource-access-control/resource-access-control.md",sourceDirName:"user-manuals/resource-access-control",slug:"/user-manuals/resource-access-control/",permalink:"/zh/docs/user-manuals/resource-access-control/",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/resource-access-control/resource-access-control.md",tags:[],version:"v1.4",lastUpdatedBy:"Lixx",lastUpdatedAt:1713521278e3,frontMatter:{title:"\u53ef\u7f16\u7a0b\u8d44\u6e90\u8bbf\u95ee\u63a7\u5236"},sidebar:"docs",previous:{title:"NodePort\u7aef\u53e3\u76d1\u542c\u9694\u79bb",permalink:"/zh/docs/user-manuals/network/nodeport-isolation"},next:{title:"\u8fb9\u7f18\u672c\u5730\u5b58\u50a8",permalink:"/zh/docs/user-manuals/storage/edge-local-storage"}},d={},l=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u67b6\u6784\u8bbe\u8ba1",id:"\u67b6\u6784\u8bbe\u8ba1",level:2},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2}];function u(e){const s={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"\u80cc\u666f\u4ecb\u7ecd",children:"\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,n.jsxs)(s.p,{children:["\u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e2d\uff0c\u5bf9\u8fb9\u7f18\u7ec4\u4ef6\uff08\u5982 kube-proxy \u6216\u7528\u6237 pod\uff09\u4ece\u4e91\u7aef kube-apiserver \u83b7\u53d6\u7684\u6570\u636e\u53ef\u4ee5\u6267\u884c\u81ea\u5b9a\u4e49\u5904\u7406\uff0c\u4ee5\u6ee1\u8db3\u8fb9\u7f18\u573a\u666f\u7684\u7279\u5b9a\u9700\u6c42\u3002\u4f8b\u5982\uff0c\u5f53 kubelet \u83b7\u53d6 ",(0,n.jsx)(s.code,{children:"default/kubernetes service"})," \u65f6\uff0c\u5b83\u671f\u671b\u8be5service\u5305\u542b\u53ef\u8bbf\u95ee\u7684 kube-apiserver \u5730\u5740\uff0c\u800c\u4e0d\u662f\u539f\u751f\u670d\u52a1 ClusterIP \u5730\u5740\u3002\u8fd9\u5141\u8bb8\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684 pod \u53ef\u4ee5\u65e0\u7f1d\u5730\u4f7f\u7528 InClusterConfig \u8bbf\u95ee\u4e91\u7aef kube-apiserver\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u67b6\u6784\u8bbe\u8ba1",children:"\u67b6\u6784\u8bbe\u8ba1"}),"\n",(0,n.jsx)(s.p,{children:"\u53ef\u7f16\u7a0b\u6570\u636e\u8fc7\u6ee4\u6846\u67b6\u5185\u7f6e\u4e8e YurtHub \u7ec4\u4ef6\u4e2d\u3002\u6765\u81ea\u4e91\u7aef kube-apiserver \u7684\u6307\u5b9a\u8bf7\u6c42\u7684\u54cd\u5e94\u6570\u636e\u901a\u8fc7\u4e00\u7cfb\u5217\u8fc7\u6ee4\u5668\uff0c\u5b9e\u73b0\u5bf9\u54cd\u5e94\u6570\u636e\u7684\u65e0\u611f\u77e5\u548c\u6309\u9700\u8f6c\u6362\uff0c\u4ee5\u6ee1\u8db3\u4e91\u8fb9\u534f\u540c\u573a\u666f\u7684\u7279\u5b9a\u9700\u6c42\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"resource-access-control",src:r(30659).Z+"",width:"1216",height:"786"})}),"\n",(0,n.jsx)(s.p,{children:"\u76ee\u524d\uff0c\u8fc7\u6ee4\u5668\u94fe\u652f\u6301\u4ee5\u4e0b\u4e94\u4e2a\u8fc7\u6ee4\u5668\uff1a"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["masterservice \u8fc7\u6ee4\u5668\uff1a\u5c06 ",(0,n.jsx)(s.code,{children:"default/kubernetes"})," \u670d\u52a1\u7684 ClusterIP \u548c HTTPS \u7aef\u53e3\u6539\u4e3a YurtHub \u7ec4\u4ef6\u6b63\u5728\u76d1\u542c\u7684\u5730\u5740\uff0c\u4f7f\u8fb9\u7f18\u8282\u70b9\u4e0a\u4f7f\u7528 InClusterConfig \u7684 pod \u80fd\u591f\u65e0\u611f\u77e5\u5730\u901a\u8fc7 YurtHub \u7ec4\u4ef6\u8bbf\u95ee\u4e91\u7aef kube-apiserver\u3002"]}),"\n",(0,n.jsx)(s.li,{children:"servicetopology \u8fc7\u6ee4\u5668\uff1a\u6839\u636eservice\u7684\u670d\u52a1\u62d3\u6251\u8bbe\u7f6e\u91cd\u65b0\u7ec4\u88c5 endpointslices\uff0c\u786e\u4fdd\u8bbf\u95ee\u670d\u52a1\u7684\u6d41\u91cf\u53ea\u80fd\u8f6c\u53d1\u7ed9\u540c\u4e00\u8282\u70b9\u6216 NodePool \u4e2d\u7684 pod\u3002"}),"\n",(0,n.jsx)(s.li,{children:"discardcloudservice \u8fc7\u6ee4\u5668\uff1a\u8fc7\u6ee4\u6389kube-proxy\u83b7\u53d6\u7684service\u4e2d\u7684LB service\uff0c\u56e0\u4e3a\u8fb9\u7f18\u76ee\u524d\u672a\u652f\u6301LB service\u3002"}),"\n",(0,n.jsxs)(s.li,{children:["inclusterconfig \u8fc7\u6ee4\u5668\uff1a\u5728 ",(0,n.jsx)(s.code,{children:"kube-system/kube-proxy"})," configmap \u4e2d\u6ce8\u91ca kubeconfig \u8bbe\u7f6e\uff0c\u4f7f\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684 kube-proxy \u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528 InClusterConfig \u8bbf\u95ee\u4e91\u7aef kube-apiserver\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["nodeportisolation \u8fc7\u6ee4\u5668\uff1a\u901a\u8fc7\u6839\u636e Service \u7684 ",(0,n.jsx)(s.code,{children:"nodeport.openyurt.io/listen"})," \u6ce8\u89e3\u914d\u7f6e\u6765\u8fc7\u6ee4 NodePort Service\uff0c\u4f7fNodePort Service\u53ef\u4ee5\u4ec5\u5728\u6307\u5b9a NodePool \u4e2d\u76d1\u542c\uff0c\u800c\u4e0d\u662f\u5728\u6574\u4e2a\u96c6\u7fa4\u7684\u6240\u6709\u8282\u70b9\u4e0a\u76d1\u542c\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"\u6bcf\u4e2a\u8fc7\u6ee4\u5668\u4ec5\u5904\u7406\u7531\u8bf7\u6c42\u4e09\u5143\u7ec4\u786e\u5b9a\u7684\u7279\u5b9a\u8bf7\u6c42\u7684\u54cd\u5e94\u6570\u636e\uff1acomponent/resource/verbs"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"component\uff1a\u8868\u793a HTTP \u8bf7\u6c42\u5934\u4e2d\u7684 User-Agent\uff0c\u4f8b\u5982 kube-proxy\u3002"}),"\n",(0,n.jsx)(s.li,{children:"resource\uff1a\u8868\u793a\u8bf7\u6c42\u7684\u8d44\u6e90\uff0c\u4f8b\u5982 endpointslices\u3002"}),"\n",(0,n.jsx)(s.li,{children:"verbs\uff1a\u8868\u793a HTTP \u8bf7\u6c42\u7684Verb\uff0c\u4f8b\u5982 get\u3001list\u3001watch\u3002"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u5982\u4f55\u4f7f\u7528",children:"\u5982\u4f55\u4f7f\u7528"}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u4e0a\u6240\u8ff0\uff0c\u6bcf\u4e2a\u8fc7\u6ee4\u5668\u4ec5\u5904\u7406\u7531",(0,n.jsx)(s.code,{children:"component/resource/verbs"}),"\u786e\u5b9a\u7684\u7279\u5b9a\u8bf7\u6c42\u7684\u54cd\u5e94\u6570\u636e\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4e0b\u8868\u663e\u793a\u4e86\u6bcf\u4e2a\u8fc7\u6ee4\u5668\u652f\u6301\u7684\u9ed8\u8ba4",(0,n.jsx)(s.code,{children:"component/resource/verbs"}),"\uff1a"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Filter"}),(0,n.jsx)(s.th,{children:"Default components"}),(0,n.jsx)(s.th,{children:"resources"}),(0,n.jsx)(s.th,{children:"verbs"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"masterservice"}),(0,n.jsx)(s.td,{children:"kubelet"}),(0,n.jsx)(s.td,{children:"services"}),(0,n.jsx)(s.td,{children:"list, watch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"servicetopology"}),(0,n.jsx)(s.td,{children:"kube-proxy, coredns, nginx-ingress-controller"}),(0,n.jsx)(s.td,{children:"endpoints, endpointslices"}),(0,n.jsx)(s.td,{children:"list, watch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"discardcloudservice"}),(0,n.jsx)(s.td,{children:"kube-proxy"}),(0,n.jsx)(s.td,{children:"services"}),(0,n.jsx)(s.td,{children:"list, watch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"inclusterconfig"}),(0,n.jsx)(s.td,{children:"kubelet"}),(0,n.jsx)(s.td,{children:"configmaps"}),(0,n.jsx)(s.td,{children:"get, list, watch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"nodeportisolation"}),(0,n.jsx)(s.td,{children:"kube-proxy"}),(0,n.jsx)(s.td,{children:"services"}),(0,n.jsx)(s.td,{children:"list, watch"})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["\u53e6\u5916\uff0c\u5982\u679c\u8fd8\u9700\u8981\u5904\u7406\u5176\u4ed6\u5ba2\u6237\u7aef\u7684\u54cd\u5e94\uff0c\u7528\u6237\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u65b9\u5f0f\u914d\u7f6e ",(0,n.jsx)(s.code,{children:"kube-system/yurt-hub-cfg"})," configmap\uff1a"]}),"\n",(0,n.jsx)(s.p,{children:"\u6ce8\u610f\uff1a\u8bf7\u786e\u4fdd\u5728\u8fd0\u884c\u5ba2\u6237\u7aef pod \u4e4b\u524d\u914d\u7f6e\u597d configmap\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'// configured response for clients named foo and bar can be handled by servicetopology\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: yurt-hub-cfg\ndata:\n  servicetopology: "foo, bar"\n'})})]})}function a(e={}){const{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},30659:(e,s,r)=>{r.d(s,{Z:()=>n});const n=r.p+"assets/images/resource-access-control-2c82f506c04bb7fcafcb39f8fa9ce72b.png"},11151:(e,s,r)=>{r.d(s,{a:()=>i});var n=r(67294);const c={},t=n.createContext(c);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}}}]);