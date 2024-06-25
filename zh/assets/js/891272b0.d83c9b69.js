"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[46097],{24856:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var d=r(85893),t=r(11151);const i={title:"YurtIoTDock"},c=void 0,l={id:"core-concepts/yurt-iot-dock",title:"YurtIoTDock",description:"\u80cc\u666f\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core-concepts/yurt-iot-dock.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurt-iot-dock",permalink:"/zh/docs/next/core-concepts/yurt-iot-dock",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-iot-dock.md",tags:[],version:"current",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:171935096e4,frontMatter:{title:"YurtIoTDock"},sidebar:"docs",previous:{title:"Raven",permalink:"/zh/docs/next/core-concepts/raven"},next:{title:"YurtCoordinator",permalink:"/zh/docs/next/core-concepts/yurt-coordinator"}},o={},s=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0",id:"\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0",level:2},{value:"PlatformAdmin",id:"platformadmin",level:3},{value:"AutoCollector",id:"autocollector",level:3},{value:"PlatformAdmin\u7248\u672c",id:"platformadmin\u7248\u672c",level:3},{value:"\u8fb9\u7f18\u8bbe\u5907\u540c\u6b65\u7ec4\u4ef6",id:"\u8fb9\u7f18\u8bbe\u5907\u540c\u6b65\u7ec4\u4ef6",level:2},{value:"\u8bbe\u5907\u7ba1\u7406\u76f8\u5173CRDs",id:"\u8bbe\u5907\u7ba1\u7406\u76f8\u5173crds",level:3},{value:"\u8bbe\u5907\u7ba1\u7406\u67b6\u6784",id:"\u8bbe\u5907\u7ba1\u7406\u67b6\u6784",level:3},{value:"Yurt-IoT-Dock\u7248\u672c",id:"yurt-iot-dock\u7248\u672c",level:3},{value:"\u4f7f\u7528\u6559\u7a0b",id:"\u4f7f\u7528\u6559\u7a0b",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u80cc\u666f\u4ecb\u7ecd",children:"\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,d.jsx)(n.p,{children:"OpenYurt\u64c5\u957f\u4ee5\u975e\u4fb5\u5165\u7684\u65b9\u5f0f\uff0c\u5b9e\u73b0\u4e91\u8fb9\u8d44\u6e90\u7684\u7edf\u4e00\u7ba1\u7406\u548c\u8fd0\u7ef4\uff0c\u4f7f\u5f97\u8fb9\u7f18\u8282\u70b9\u62e5\u6709\u4e91\u7aef\u76f8\u540c\u7684\u80fd\u529b\u3002\u4f46\u968f\u7740\u5c06\u76f8\u5173\u7eb3\u7ba1\u80fd\u529b\u62d3\u5c55\u81f3\u201c\u7aef\u201d\u8fd9\u4e00\u5c42\u65f6\uff0c\u7531\u4e8e\u8fd1\u7aef\u8bbe\u5907\u5f02\u6784\u8d44\u6e90\u652f\u6301\u590d\u6742\u3001\u901a\u4fe1\u65b9\u5f0f\u591a\u6837\u3001\u5206\u5e03\u4f4d\u7f6e\u5206\u6563\u7b49\u7279\u70b9\uff0c\u4f1a\u51fa\u73b0\u4ee5\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u4e3a\u4e86\u652f\u6301\u5404\u79cd\u8fb9\u7f18\u8bbe\u5907\uff0c\u73b0\u6709\u7684OpenYurt\u6846\u67b6\u5fc5\u987b\u4e3a\u6bcf\u4e2a\u7c7b\u522b\u7684\u8bbe\u5907\u5f00\u53d1\u4e13\u7528\u7684\u9002\u914d\u5668\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u5728\u76f4\u63a5\u7eb3\u7ba1\u7aef\u8bbe\u5907\u7684\u8fc7\u7a0b\u4e2d\uff0c\u73b0\u6709\u89e3\u51b3\u65b9\u6848\u8981\u4e48\u6539\u53d8Kubernetes\u67b6\u6784\uff0c\u8981\u4e48\u663e\u8457\u4fee\u6539\u6838\u5fc3\u7ec4\u4ef6\uff0c\u4e22\u5931\u4e00\u4e9b\u4e0a\u6e38K8S\u7279\u6027\u7684\u540c\u65f6\uff0c\u4e0eOpenYurt\u7684\u975e\u4fb5\u5165\u5f0f\u7406\u5ff5\u76f8\u6096\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4e0e\u6b64\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u53d1\u73b0\u793e\u533a\u91cc\u6d8c\u73b0\u4e86\u8bb8\u591a\u4f18\u79c0\u7684\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0\uff0c\u5982\uff1aEdgeX Foundry\u3002\u53d7\u5230Unix\u54f2\u5b66\u201cDo one thing, and do it well\u201d\u7684\u542f\u53d1\uff0cOpenYurt\u5c06\u590d\u6742\u7aef\u8bbe\u5907\u7684\u7ba1\u7406\u4ea4\u7531\u6210\u719f\u7684\u7269\u8054\u7f51\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0\uff0c\u5e76\u901a\u8fc7\u62bd\u8c61\u4e0e\u8bbe\u5907\u76f8\u5173\u7684\u8d44\u6e90\u4e0e\u670d\u52a1\uff0c\u4ee5\u53ca\u90e8\u7f72yurt-iot-dock\u7ec4\u4ef6\uff0c\u6765\u6253\u901a\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0\u548c\u4e91\u7aef\u4e4b\u95f4\u7684\u8fd0\u7ef4\u7ba1\u7406\u901a\u9053\uff0c\u5141\u8bb8\u7528\u6237\u58f0\u660e\u5f0f\u5730\u7ba1\u7406\u8fb9\u7f18\u8bbe\u5907\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b Kubernetes \u539f\u751f\u7ba1\u7406\u7aef\u8bbe\u5907\u7684\u4f53\u9a8c\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4e91\u8fb9\u7aef\u4e09\u8005\u6574\u4f53\u7684\u67b6\u6784\u6a21\u578b\uff1a"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"img",src:r(72084).Z+"",width:"887",height:"821"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fb9\u7f18\u7aef\u8bbe\u5907\u7684\u901a\u4fe1\u8303\u56f4\u5f80\u5f80\u5c40\u9650\u4e8e\u67d0\u4e00\u7f51\u7edc\u533a\u57df\u5185\uff0c\u56e0\u6b64\u53ef\u4ee5\u5c06\u540c\u4e00\u7f51\u7edc\u533a\u57df\u5185\u7684\u8fb9\u7f18\u8282\u70b9\u5212\u5206\u4e3a\u4e00\u4e2a\u8282\u70b9\u6c60\uff0c\u5f53\u7528\u6237\u90e8\u7f72\u4e00\u4e2aPlatformAdmin\u8d44\u6e90\u5230\u67d0\u4e2a\u8282\u70b9\u6c60\u540e\uff0cyurt-manager\u4f1a\u5728\u8be5\u8282\u70b9\u6c60\u90e8\u7f72\u4e00\u4e2a\u7aef\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0\u548c\u4e00\u4e2ayurt-iot-dock\u7ec4\u4ef6\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u5728\u4e0e\u4e91\u7aefapiserver\u7684\u901a\u4fe1\u4e2d\uff0cyurt-iot-dock\u53ea\u4f1a\u76d1\u542c\u5c5e\u4e8e\u8be5\u8282\u70b9\u6c60\u5185\u7684\u8bbe\u5907\u5bf9\u8c61\uff0c\u5e76\u5c06\u66f4\u65b0\u4fe1\u606f\u901a\u8fc7\u7aef\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0\u53ca\u65f6\u5730\u540c\u6b65\u81f3\u5bf9\u5e94\u7684\u8bbe\u5907\u4e0a\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u5728\u4e0e\u7aef\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0\u7684\u901a\u4fe1\u4e2d\uff0c\u590d\u7528YurtHub\u3001\u8282\u70b9\u6c60\u4ee5\u53ca\u5355\u5143\u5316\u90e8\u7f72\u7b49\u80fd\u529b\uff0cyurt-iot-dock\u7ec4\u4ef6\u53ea\u4f1a\u8bbf\u95ee\u672c\u8282\u70b9\u6c60\u5185\u7684\u7aef\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0\uff0c\u5e76\u5c06\u63a5\u5165\u8be5\u8282\u70b9\u6c60\u5185\u7684\u8bbe\u5907\u4fe1\u606f\u62bd\u8c61\u4e3adevice\u3001deviceService\u548cdeviceProfile\u5bf9\u8c61\u540c\u6b65\u81f3\u4e91\u7aef\uff1b"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0",children:"\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0"}),"\n",(0,d.jsx)(n.p,{children:"EdgeX Foundry \u662f\u4e00\u6b3e\u7531\u751f\u6001\u7cfb\u7edf\u63d0\u4f9b\u5f3a\u529b\u652f\u6301\u7684\u8fb9\u7f18\u7269\u8054\u7f51\u5373\u63d2\u5373\u7528\u578b\u3001\u5f00\u653e\u5f0f\u8f6f\u4ef6\u5e73\u53f0\u3002\u5b83\u5177\u6709\u9ad8\u5ea6\u7075\u6d3b\u548c\u53ef\u6269\u5c55\u6027\uff0c\u53ef\u4ee5\u5927\u5927\u7684\u964d\u4f4e\u5e94\u7528\u4e0e\u8fb9\u7f18\u8bbe\u5907\uff0c\u4f20\u611f\u5668\u7b49\u786c\u4ef6\u4e92\u64cd\u4f5c\u7684\u590d\u6742\u6027\u3002OpenYurt \u4e0e EdgeX Foundry\u793e\u533a\u5408\u4f5c\uff0c\u57281.4.0\u7248\u672c\u5b8c\u6210\u4e86\u6df1\u5ea6\u96c6\u6210\uff0c\u9664\u4e86yurt-iot-dock\uff0c\u8fd8\u63d0\u4f9b\u4e86PlatformAdmin\u8fd9\u4e2aCRD\u4ee5\u7b80\u5316edgex foundry\u5728\u8fb9\u7f18\u573a\u666f\u4e0b\u7684\u90e8\u7f72\u5de5\u4f5c\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u7ed3\u5408\u4e0a\u8ff0\u7684\u4e91\u8fb9\u7aef\u67b6\u6784\u56fe\uff0cOpenYurt\u4e0eEdgeX Foundry\u96c6\u6210\u7684\u67b6\u6784\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"img",src:r(25789).Z+"",width:"887",height:"821"})}),"\n",(0,d.jsx)(n.h3,{id:"platformadmin",children:"PlatformAdmin"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u5728\u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0cOpenYurt \u5f15\u5165\u4e86\u4e00\u4e2ayurt-edgex-controller\u7684\u63a7\u5236\u5668\u6765\u7ba1\u7406EdgeX CR\u3002EdgeX CR\u662f\u5bf9EdgeX Foundy\u5728OpenYurt\u4e2d\u90e8\u7f72\u7684\u4e00\u4e2a\u62bd\u8c61\uff0c\u7528\u6237\u53ef\u4ee5\u64cd\u4f5cCR\u7684\u65b9\u5f0f\u6765\u7ba1\u7406EdgeX\u7684\u90e8\u7f72\uff0c\u66f4\u65b0\uff0c\u5220\u9664\u3002\u4e0d\u518d\u9700\u8981\u5199\u590d\u6742\u7684Yaml\u6587\u4ef6\u4ee5\u53caHelm Chart\u3002\u7528\u6237\u53ea\u9700\u8981\u521b\u5efa\u4e00\u4e2aEdgeX\u7684CR\uff0cYurt-edgex-manager\u4f1a\u6839\u636eCR\u4e2d\u7248\u672c\u4ee5\u53ca\u5bf9\u5e94\u7684Nodepool\u7684\u540d\u5b57\u90e8\u7f72EdgeX\u3002\u7528\u6237\u5728\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u53ef\u4ee5\u6839\u636enodepool\u7684\u6570\u91cf\u90e8\u7f72\u591a\u4e2aEdgeX\uff0c\u6bcf\u4e2aEdgeX\u7684\u7248\u672c\uff0c\u4ee5\u53ca\u5305\u62ec\u7684EdgeX \u670d\u52a1\u53ef\u4ee5\u914d\u7f6e\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u5728OpenYurt v1.4.0\u540e\uff0cyurt-edgex-controller\u5408\u5165yurt-manager\u4e2d\uff0c\u7528\u6237\u4e0d\u9700\u8981\u518d\u989d\u5916\u90e8\u7f72\u4efb\u4f55\u7ec4\u4ef6\uff0c\u53ea\u9700\u8981\u5b89\u88c5yurt-manager\u5373\u53ef\u62e5\u6709\u6240\u6709\u7684\u7aef\u8bbe\u5907\u7ba1\u7406\u80fd\u529b\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"img",src:r(58267).Z+"",width:"1969",height:"1347"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"PlatformAdmin"}),"\uff1aPlatformAdmin\u4ece\u4e4b\u524d\u7248\u672c\u7684EdgeX CRD\u6f14\u8fdb\u800c\u6765\uff0c\u662f\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0\u7684\u62bd\u8c61\uff0c\u7528\u6237\u53ea\u9700\u8981\u8f93\u5165\u8bbe\u7f6e\u63a5\u5165\u7684\u5e73\u53f0\u3001\u9700\u8981\u90e8\u7f72\u7684NodePool\u7684\u540d\u5b57\u3001\u9700\u8981\u90e8\u7f72\u7684\u7248\u672c\u7b49\u7b49\uff0c\u5c31\u53ef\u4ee5\u5728\u8282\u70b9\u6c60\u90e8\u7f72\u4e00\u5957\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"AutoCollector"}),"\uff1aOpenYurt\u5185\u90e8\u5b9e\u73b0\u4e0eEdgeX\u9002\u914d\u7684\u5de5\u5177\uff0cJakarta\u4e4b\u540e\u7684\u7248\u672c\uff08\u4ee5\u53ca\u6700\u65b0\u7684minnesota\uff09\u5747\u4f7f\u7528\u8be5\u5de5\u5177\u81ea\u52a8\u5316\u9002\u914d\uff0c\u672a\u6765OpenYurt\u4f1a\u7ee7\u7eed\u4f9d\u8d56AutoCollector\u8fdb\u884cEdgeX\u7248\u672c\u7684\u5feb\u901f\u9002\u914d"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Component\u673a\u5236"}),"\uff1a\u5728v1.4.0\u7248\u672c\u4e2d\u6211\u4eec\u8fdb\u4e00\u6b65\u589e\u5f3a\u4e86\u4e0eEdgeX\u7684\u878d\u5408\uff0c\u76ee\u524d\u7684PlatformAdmin CR\u652f\u6301\u4e00\u952e\u914d\u7f6e\u53ef\u9009\u7ec4\u4ef6\uff0c\u7ec4\u4ef6\u540d\u53c2\u8003",(0,d.jsx)(n.a,{href:"/zh/docs/next/reference/iot/components",children:"Component\u6587\u6863"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"PlatformAdminFramework"}),"\uff1a\u5728v1.4.0\u7248\u672c\u4e2d\u6211\u4eec\u4e3a\u5165\u95e8\u7ea7\u7528\u6237\u63d0\u4f9b\u4e86Component\u673a\u5236\uff0c\u540c\u65f6\u4e3a\u4e86\u7167\u987e\u5230\u9700\u8981\u81ea\u5b9a\u4e49\u914d\u7f6e\u7684\u9ad8\u7aef\u7528\u6237\uff0c\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u4e00\u5957Framework\u673a\u5236\u3002PlatformAdmin\u5bf9\u5e94\u7684\u914d\u7f6e\u6587\u4ef6\u4ee5configmap\u7684\u5f62\u5f0f\u5b58\u50a8\u4e8ek8s\u96c6\u7fa4\u4e2d\uff0c\u9ad8\u7ea7\u7528\u6237\u53ea\u9700\u8981\u4fee\u6539configmap\u4e2d\u7684\u5185\u5bb9\uff08\u9075\u5b88k8s\u539f\u751f\u89c4\u8303\uff09\uff0c\u5373\u53ef\u81ea\u5b9a\u4e49\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u5728OpenYurt\u4e2d\uff0cEdgeX\u7684\u670d\u52a1\u901a\u8fc7\u4ee5Kubernetes\u670d\u52a1\u7684\u5f62\u5f0f\u6765\u5bf9\u5916\u63d0\u4f9b\u8bbf\u95ee\uff0c\u5c3d\u7ba1\u4e0d\u540c\u7684EdgeX\u5b9e\u4f8b\u4f7f\u7528\u76f8\u540cKubernates\u670d\u52a1\u540d\u79f0\uff0cServiceToploy\u4f1a\u786e\u4fddEdgeX\u7ec4\u4ef6\u53ea\u80fd\u8bbf\u95ee\u5c5e\u4e8e\u540c\u4e00EdgeX\u5b9e\u4f8b\u7684\u5176\u4ed6\u7ec4\u4ef6\uff0c\u800c\u4e0d\u4f1a\u53d1\u751f\u4ea4\u53c9\u8bbf\u95ee\u7684\u60c5\u51b5\u3002platformadmin-controller\u5229\u7528yurtappset\u7684\u80fd\u529b\uff0c\u5728nodepool\u4e2d\u90e8\u7f72EdgeX\u7684\u7ec4\u4ef6\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"autocollector",children:"AutoCollector"}),"\n",(0,d.jsx)(n.p,{children:"AutoCollector\u662f\u4e00\u4e2a\u81ea\u52a8\u6536\u96c6\u548c\u540c\u6b65\u5173\u4e8e\u8fb9\u7f18\u7ec4\u4ef6\u4fe1\u606f\u7684\u7ec4\u4ef6\u3002platformadmin-controller\u5c06\u8bfb\u53d6AutoCollector\u6536\u96c6\u7684\u6807\u51c6\u5316\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5e76\u5c06\u8be5\u914d\u7f6e\u6587\u4ef6\u4f5c\u4e3a\u6a21\u677f\u6765\u90e8\u7f72edgex\u7ec4\u4ef6\u3002\u5f53\u51fa\u73b0\u65b0\u7248\u672c\u7684edgex\u65f6\uff0copenyurt\u81ea\u52a8\u4e0e\u4e4b\u540c\u6b65\uff0c\u51cf\u5c11\u4e86\u9891\u7e41\u9002\u5e94\u65b0\u7248\u672c\u7684\u4eba\u529b\u6d88\u8017\u3002\u9664\u6b64\u4e4b\u5916\uff0cAutoCollector\u8fd8\u8d1f\u8d23\u5c06edgex\u7ec4\u4ef6\u7684\u5355\u67b6\u6784\u955c\u50cf\u8f6c\u5316\u4e3a\u591a\u67b6\u6784\u955c\u50cf\uff0c\u5e76\u5c06\u5176\u540c\u6b65\u5230openyurt\u7684\u4ed3\u5e93\u4e2d\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u901a\u8fc7AutoCollector\uff0c\u6211\u4eec\u5df2\u7ecf\u652f\u6301edgex\u4eceHanoi\u5f00\u59cb\u7684\u6240\u6709\u7248\u672c\uff0c\u672a\u6765\u4f1a\u7ee7\u7eed\u901a\u8fc7\u5b83\u6765\u5feb\u901f\u8ddf\u8fdbedgex\u7684\u7248\u672c\u66f4\u65b0\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"img",src:r(38788).Z+"",width:"1734",height:"1348"})}),"\n",(0,d.jsx)(n.h3,{id:"platformadmin\u7248\u672c",children:"PlatformAdmin\u7248\u672c"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7248\u672c\u53f7"}),(0,d.jsx)(n.th,{children:"\u955c\u50cf\u5730\u5740"}),(0,d.jsx)(n.th,{children:"\u53d1\u5e03\u65f6\u95f4"}),(0,d.jsx)(n.th,{children:"\u53d1\u5e03\u5185\u5bb9"}),(0,d.jsx)(n.th,{children:"\u5907\u6ce8"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v0.1.0"}),(0,d.jsxs)(n.td,{children:["openyurt/yurt-edgex-manager",":v0",".1.0"]}),(0,d.jsx)(n.td,{children:"2021.09"}),(0,d.jsx)(n.td,{children:"\u9996\u6b21\u53d1\u5e03"}),(0,d.jsx)(n.td,{children:"\u652f\u6301 edgex foundry Hanoi \u7248\u672c"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v0.2.0"}),(0,d.jsxs)(n.td,{children:["openyurt/yurt-edgex-manager",":v0",".2.0"]}),(0,d.jsx)(n.td,{children:"2022.06"}),(0,d.jsx)(n.td,{children:"\u652f\u6301Hanoi\u548cJakarta\u7248\u672c"}),(0,d.jsx)(n.td,{children:"-"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.4.0"}),(0,d.jsxs)(n.td,{children:["openyurt/yurt-manager",":v1",".4.0"]}),(0,d.jsx)(n.td,{children:"2023.09"}),(0,d.jsx)(n.td,{children:"\u652f\u63012.x\u52303.0\u6240\u6709\u7248\u672c"}),(0,d.jsx)(n.td,{children:"yurt-edgex-manager\u5408\u5165yurt-manager"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8fb9\u7f18\u8bbe\u5907\u540c\u6b65\u7ec4\u4ef6",children:"\u8fb9\u7f18\u8bbe\u5907\u540c\u6b65\u7ec4\u4ef6"}),"\n",(0,d.jsx)(n.h3,{id:"\u8bbe\u5907\u7ba1\u7406\u76f8\u5173crds",children:"\u8bbe\u5907\u7ba1\u7406\u76f8\u5173CRDs"}),"\n",(0,d.jsx)(n.p,{children:"\u4e3a\u7ba1\u7406\u73b0\u5b9e\u4e16\u754c\u4e2d\u7684\u8bbe\u5907\uff0c\u9700\u8981\u5bf9\u8bbe\u5907\u7ba1\u7406\u76f8\u5173\u7684\u670d\u52a1\u8fdb\u884c\u62bd\u8c61\uff0cyurt-iot-dock\u4f5c\u4e3a\u8fde\u901a\u4e91\u548c\u8fb9\u7f18\u7ba1\u7406\u5e73\u53f0\u7684\u7ec4\u4ef6\uff0c\u62bd\u8c61\u51fa\u4e86\u4e09\u4e2aCRD\uff0c\u7528\u4e8e\u8868\u793a\u548c\u7ba1\u7406\u5bf9\u5e94\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0\u4e0a\u7684\u8d44\u6e90\uff0c\u4ece\u800c\u5f71\u54cd\u73b0\u5b9e\u4e16\u754c\u4e2d\u7684\u8bbe\u5907\uff0c\u5b83\u4eec\u5206\u522b\u662fdeviceProfile\u3001deviceService\u548cdevice\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DeviceProfile"}),"\uff1a\u8bbe\u5907\u914d\u7f6e\u6587\u4ef6\u63cf\u8ff0\u4e86\u4f7f\u7528\u76f8\u540c\u534f\u8bae\u7684\u4e00\u79cd\u8bbe\u5907\u7c7b\u578b\uff0c\u5176\u4e2d\u5305\u62ec\u4e00\u4e9b\u901a\u7528\u4fe1\u606f\uff0c\u5982\u5236\u9020\u5546\u540d\u79f0\u3001\u8bbe\u5907\u63cf\u8ff0\u548c\u8bbe\u5907\u578b\u53f7\u3002 DeviceProfile \u8fd8\u5b9a\u4e49\u4e86\u6b64\u7c7b\u8bbe\u5907\u63d0\u4f9b\u7684\u8d44\u6e90\u7c7b\u578b\uff08\u4f8b\u5982\uff0c\u6e29\u5ea6\u3001\u6e7f\u5ea6\uff09\u4ee5\u53ca\u5982\u4f55\u8bfb\u53d6/\u5199\u5165\u8fd9\u4e9b\u8d44\u6e90\u3002\u6bcf\u4e2adevice\u90fd\u9700\u8981\u5173\u8054\u4e00\u4e2adevice profile\uff1b"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DeviceService"}),"\uff1a\u662f\u9488\u5bf9\u4e0e\u8bbe\u5907\u4ea4\u4e92\u7684\u8fb9\u7f18\u8fde\u63a5\u5668\u7684\u62bd\u8c61\uff0c\u5b9a\u4e49\u4e86\u5982\u4f55\u5c06\u8bbe\u5907\u63a5\u5165\u5230\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0\uff0c\u5305\u62ec\u8bbe\u5907\u7684\u901a\u4fe1\u534f\u8bae\uff0c\u901a\u4fe1\u5730\u5740\u7b49\u4fe1\u606f\u3002\u6bcf\u4e2adevice\u90fd\u9700\u8981\u5173\u8054\u4e00\u4e2adevice service\uff1b"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Device"}),"\uff1a\u662f\u9488\u5bf9\u73b0\u5b9e\u4e16\u754c\u4e2d\u7aef\u8bbe\u5907\u7684\u62bd\u8c61\uff0c\u4f8b\u5982\uff1a\u7535\u5668\u3001\u8b66\u62a5\u7cfb\u7edf\u3001\u6696\u901a\u7a7a\u8c03\u8bbe\u5907\u3001\u7167\u660e\u3001\u4f20\u611f\u5668\u7b49\u8bbe\u5907\uff0c\u5b83\u7ed9\u51fa\u4e86\u7279\u5b9a\u8bbe\u5907\u7684\u8be6\u7ec6\u5b9a\u4e49\uff0c\u5305\u62ec\u5173\u8054\u7684 DeviceProfile\uff08\u5c5e\u4e8e\u54ea\u7c7b\u8bbe\u5907\uff09 \u3001\u5173\u8054\u7684 DeviceService\uff08\u4f7f\u7528\u4f55\u79cd\u901a\u4fe1\u65b9\u5f0f\uff09\u4ee5\u53ca\u8bbe\u5907\u7279\u6709\u5c5e\u6027\uff08\u5982\u7167\u660e\u8bbe\u5907\u7684\u5f00\u5173\u72b6\u6001\u7b49\uff09\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u8bbe\u5907\u7ba1\u7406\u67b6\u6784",children:"\u8bbe\u5907\u7ba1\u7406\u67b6\u6784"}),"\n",(0,d.jsx)(n.p,{children:"\u901a\u8fc7\u62bd\u8c61\u51fa\u4e0a\u8ff0\u4e09\u79cdCRD\uff0c\u53ef\u4ee5\u53cd\u5e94\u51fa\u8bbe\u5907\u57fa\u672c\u7684\u72b6\u6001\u4fe1\u606f\uff0c\u518d\u4f7f\u7528\u5bf9\u5e94\u7684controller\u4e0e\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0\u8fdb\u884c\u4ea4\u4e92\uff0c\u53ef\u4ee5\u5c06\u8fb9\u4fa7\u53d1\u73b0\u7684\u7aef\u8bbe\u5907\u53ca\u65f6\u6620\u5c04\u81f3\u4e91\u7aef\uff1b\u4e0e\u6b64\u540c\u65f6\uff0cyurt-iot-dock\u7ec4\u4ef6\u5c06\u4e91\u7aef\u9488\u5bf9\u8bbe\u5907\u5c5e\u6027\u7684\u4fee\u6539\uff08\u4f8b\u5982\uff1a\u8bbe\u7f6e\u7167\u660e\u8bbe\u5907\u7684\u5f00\u5173\u72b6\u6001\uff09\u540c\u6b65\u81f3\u7aef\u8bbe\u5907\u4e0a\uff0c\u4ece\u800c\u5f71\u54cd\u771f\u5b9e\u4e16\u754c\u4e2d\u7684\u7269\u7406\u8bbe\u5907\u3002\u7528\u6237\u53ea\u9700\u8981\u58f0\u660e\u5f0f\u5730\u4fee\u6539CRs\u7684\u76f8\u5e94\u5b57\u6bb5\uff0c\u4ee5\u4e00\u79cd\u4e91\u539f\u751f\u7684\u65b9\u5f0f\u5373\u53ef\u8fbe\u5230\u8fd0\u7ef4\u3001\u7ba1\u7406\u590d\u6742\u7aef\u8bbe\u5907\u7684\u76ee\u7684\uff0c\u4e0b\u9762\u662f\u7ec4\u6210yurt-iot-dock\u7684\u4e09\u4e2a\u7ec4\u4ef6\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"DeviceProfile controller"}),": \u5b83\u53ef\u4ee5\u5c06\u8fb9\u7f18\u5e73\u53f0\u4e2d\u7684 deviceProfile \u5bf9\u8c61\u62bd\u8c61\u4e3a deviceProfile CR \u5e76\u540c\u6b65\u5230\u4e91\u7aef\u3002\u5728deviceProfile Controller\u7684\u652f\u6301\u4e0b\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u4e91\u7aef\u67e5\u770b\u8fb9\u7f18\u5e73\u53f0\u7684deviceProfile\u4fe1\u606f\uff0c\u521b\u5efa\u6216\u5220\u9664deviceProfile CR\u6765\u5f71\u54cd\u8fb9\u7f18\u5e73\u53f0\u7684\u5b9e\u9645deviceProfile\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"DeviceService controller"}),": \u5b83\u53ef\u4ee5\u5c06\u8fb9\u7f18\u5e73\u53f0\u4e2d\u7684 deviceService \u5bf9\u8c61\u62bd\u8c61\u4e3a deviceService CR \u5e76\u540c\u6b65\u5230\u4e91\u7aef\u3002\u5728deviceService Controller\u7684\u652f\u6301\u4e0b\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u4e91\u7aef\u67e5\u770b\u8fb9\u7f18\u5e73\u53f0\u7684deviceService\u4fe1\u606f\uff0c\u521b\u5efa\u6216\u5220\u9664deviceService CR\u6765\u5f71\u54cd\u8fb9\u7f18\u5e73\u53f0\u7684\u5b9e\u9645deviceService\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Device controller"}),": \u5b83\u53ef\u4ee5\u5c06\u8fb9\u7f18\u5e73\u53f0\u4e2d\u7684device\u5bf9\u8c61\u62bd\u8c61\u4e3adevice CR\u5e76\u540c\u6b65\u5230\u4e91\u7aef\u3002\u5728\u8bbe\u5907\u63a7\u5236\u5668\u7684\u652f\u6301\u4e0b\uff0c\u7528\u6237\u53ef\u4ee5\u58f0\u660e\u5f0f\u4fee\u6539\u4e91\u7aefdevice CR\u6765\u5f71\u54cd\u8fb9\u7f18\u5e73\u53f0\u4e0a\u7684\u5b9e\u9645\u8bbe\u5907\uff0c\u5982\u521b\u5efa\u8bbe\u5907\u3001\u5220\u9664\u8bbe\u5907\u3001\u66f4\u65b0\u8bbe\u5907\u5c5e\u6027\uff08\u5982\u8bbe\u7f6e\u706f\u7684\u5f00\u548c\u5173\u7b49\uff09\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"yurt-iot-dock\u7248\u672c",children:"Yurt-IoT-Dock\u7248\u672c"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7248\u672c\u53f7"}),(0,d.jsx)(n.th,{children:"\u955c\u50cf\u5730\u5740"}),(0,d.jsx)(n.th,{children:"\u53d1\u5e03\u65f6\u95f4"}),(0,d.jsx)(n.th,{children:"\u53d1\u5e03\u5185\u5bb9"}),(0,d.jsx)(n.th,{children:"\u5907\u6ce8"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v0.1.0"}),(0,d.jsxs)(n.td,{children:["openyurt/yurt-device-controller",":v0",".1.0"]}),(0,d.jsx)(n.td,{children:"2021.09"}),(0,d.jsx)(n.td,{children:"\u9996\u6b21\u53d1\u5e03"}),(0,d.jsx)(n.td,{children:"-"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v0.2.0"}),(0,d.jsxs)(n.td,{children:["openyurt/yurt-device-controller",":v0",".2.0"]}),(0,d.jsx)(n.td,{children:"2022.06"}),(0,d.jsx)(n.td,{children:"\u652f\u63012.x"}),(0,d.jsx)(n.td,{children:"-"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.4.0"}),(0,d.jsxs)(n.td,{children:["openyurt/yurt-iot-dock",":v1",".4.0"]}),(0,d.jsx)(n.td,{children:"2023.09"}),(0,d.jsx)(n.td,{children:"\u5408\u5165\u4e3b\u4ed3\u5e93"}),(0,d.jsx)(n.td,{children:"-"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"latest"}),(0,d.jsxs)(n.td,{children:["openyurt/yurt-iot-dock",":latest"]}),(0,d.jsx)(n.td,{children:"2023.09"}),(0,d.jsx)(n.td,{children:"\u589e\u52a0edgex 3.0\u652f\u6301"}),(0,d.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"\u4f7f\u7528\u6559\u7a0b",children:"\u4f7f\u7528\u6559\u7a0b"}),"\n",(0,d.jsx)(n.p,{children:"yurt-iot-dock\u4f5c\u4e3aPlatformAdmin CR\u7684\u7ec4\u4ef6\u4f7f\u7528\uff0c\u53ea\u8981\u5728PlatformAdmin\u4e2d\u589e\u52a0\u5373\u53ef\u90e8\u7f72\u5230\u5bf9\u5e94\u8282\u70b9\u6c60\uff0c\u6bd4\u5982"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"apiVersion: iot.openyurt.io/v1alpha2\nkind: PlatformAdmin\nmetadata:\n  name: edgex-sample\nspec:\n  version: minnesota\n  poolName: hangzhou\n  components:\n  - name: yurt-iot-dock\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u540c\u6837\uff0c\u5728components\u4e2d\u79fb\u9664\u6389yurt-iot-dock\u5c31\u53ef\u4ee5\u53d6\u6d88\u5bf9\u5e94\u8282\u70b9\u6c60\u4e2dyurt-iot-dock\u7684\u90e8\u7f72\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["\u5177\u4f53\u7684\u6b65\u9aa4\u8bf7\u53c2\u8003",(0,d.jsx)(n.a,{href:"/zh/docs/next/user-manuals/iot/edgex-foundry",children:"\u4e91\u539f\u751f\u7ba1\u7406\u7aef\u8bbe\u5907"})]})}),"\n",(0,d.jsx)(n.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://openyurt.io/",children:"OpenYurt \u5b98\u7f51"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://www.edgexfoundry.org/",children:"EdgeX Foundry\u5b98\u7f51"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},38788:(e,n,r)=>{r.d(n,{Z:()=>d});const d=r.p+"assets/images/auto-collector-ca1ea66c6e2c536cb2c310b0a8cab172.png"},25789:(e,n,r)=>{r.d(n,{Z:()=>d});const d=r.p+"assets/images/openyurt-edgex-arch-f2a5968d8526323fd57c457c5f9ca08a.png"},72084:(e,n,r)=>{r.d(n,{Z:()=>d});const d=r.p+"assets/images/openyurt-iot-arch-73ca6a8774ab0b99f56ae282f17599df.png"},58267:(e,n,r)=>{r.d(n,{Z:()=>d});const d=r.p+"assets/images/platform-adminv1.4.0-20da11e750ce6fb04fc575b725682f6e.png"},11151:(e,n,r)=>{r.d(n,{a:()=>c});var d=r(67294);const t={},i=d.createContext(t);function c(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);