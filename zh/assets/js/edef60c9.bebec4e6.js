"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[97381],{64703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=n(85893),r=n(11151);const i={title:"\u65ad\u7f51\u8282\u70b9\u5fc3\u8df3\u4ee3\u7406"},s=void 0,a={id:"user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes",title:"\u65ad\u7f51\u8282\u70b9\u5fc3\u8df3\u4ee3\u7406",description:"\u4f7f\u7528\u573a\u666f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.4/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes.md",sourceDirName:"user-manuals/autonomy",slug:"/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes",permalink:"/zh/docs/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes.md",tags:[],version:"v1.4",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1707950047,formattedLastUpdatedAt:"2024\u5e742\u670814\u65e5",frontMatter:{title:"\u65ad\u7f51\u8282\u70b9\u5fc3\u8df3\u4ee3\u7406"},sidebar:"docs",previous:{title:"\u65ad\u7f51\u4e1a\u52a1\u91cd\u542f\u6062\u590d",permalink:"/zh/docs/user-manuals/autonomy/selfhealing-during-network-disconnection"},next:{title:"\u4e1a\u52a1\u4e0e\u8282\u70b9\u7ed1\u5b9a",permalink:"/zh/docs/user-manuals/autonomy/node-pod-binding"}},d={},u=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u67b6\u6784\u4e0e\u539f\u7406",id:"\u67b6\u6784\u4e0e\u539f\u7406",level:2},{value:"\u5f00\u542f\u65b9\u6cd5",id:"\u5f00\u542f\u65b9\u6cd5",level:2}];function l(e){const t={h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,o.jsx)(t.p,{children:"\u5728\u539f\u751f Kubernetes \u4e2d\uff0c\u8fb9\u7f18\u8282\u70b9\u5fc3\u8df3\u4e00\u5b9a\u65f6\u95f4\u6ca1\u6709\u4e0a\u62a5\u65f6\uff0c\u4e91\u7aef\u63a7\u5236\u5668\u5c06\u5bf9\u8282\u70b9\u4e0a Pod \u8fdb\u884c\u9a71\u9010(\u5220\u9664\u5e76\u5728\u6b63\u5e38\u8282\u70b9\u4e0a\u91cd\u5efa)\u3002\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\uff0c\u8fb9\u7f18\u4e1a\u52a1\u6709\u4e0d\u4e00\u6837\u7684\u9700\u6c42\u3002\u4e00\u4e9b\u4e1a\u52a1\u671f\u5f85\u4e91\u8fb9\u7f51\u7edc\u65ad\u8fde\u9020\u6210\u5fc3\u8df3\u65e0\u6cd5\u4e0a\u62a5\u65f6(\u6b64\u65f6\u8282\u70b9\u672c\u8eab\u6b63\u5e38)\uff0c\u4e1a\u52a1 Pod \u53ef\u4ee5\u4fdd\u6301(\u4e0d\u53d1\u751f\u9a71\u9010)\uff0c\u4ec5\u8282\u70b9\u6545\u969c\u65f6\u624d\u5bf9 Pod \u8fdb\u884c\u8fc1\u79fb\u91cd\u5efa\u3002"}),"\n",(0,o.jsx)(t.h2,{id:"\u67b6\u6784\u4e0e\u539f\u7406",children:"\u67b6\u6784\u4e0e\u539f\u7406"}),"\n",(0,o.jsx)(t.p,{children:"OpenYurt 1.2\u7248\u672c\u9996\u521b\u4e86\u57fa\u4e8e Yurt-Coordinator+YurtHub \u7684\u4e2d\u5fc3\u5f0f\u5fc3\u8df3\u4ee3\u7406\u673a\u5236\uff0c\u5982\u4e0b\u56fe\uff1a"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"heartbeat-delegation",src:n(84375).Z+"",width:"1634",height:"896"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\u8282\u70b9\u7684\u4e91\u8fb9\u7f51\u7edc\u6b63\u5e38\u65f6\uff0cKubelet \u901a\u8fc7 YurtHub \u7ec4\u4ef6\u540c\u65f6\u4e0a\u62a5\u5fc3\u8df3\u5230\u4e91\u7aef\u548c Yurt-Coordinator \u4e24\u5904\u3002"}),"\n",(0,o.jsx)(t.li,{children:"\u8282\u70b9\u7684\u4e91\u8fb9\u7f51\u7edc\u65ad\u8fde\u65f6\uff0cKubelet \u901a\u8fc7 YurtHub \u7ec4\u4ef6\u4e0a\u62a5\u5fc3\u8df3\u5230\u4e91\u7aef\u5931\u8d25\uff0c\u6b64\u65f6\u4e0a\u62a5\u5230 Yurt-Coordinator \u7684\u5fc3\u8df3\u5e26\u4e0a\u7279\u5b9a\u6807\u7b7e\u3002"}),"\n",(0,o.jsx)(t.li,{children:"Leader YurtHub \u4f1a\u5b9e\u65f6 list/watch Yurt-Coordinator \u4e2d\u7684\u5fc3\u8df3\u6570\u636e\uff0c\u5f53\u83b7\u5f97\u7684\u5fc3\u8df3\u6570\u636e\u4e2d\u5e26\u6709\u7279\u5b9a\u6807\u7b7e\u65f6\u5c06\u5e2e\u52a9\u8f6c\u53d1\u8be5\u5fc3\u8df3\u5230\u4e91\u7aef\u3002"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"\u901a\u8fc7 Yurt-Coordinator \u548c YurtHub \u534f\u540c\u5b9e\u73b0\u7684\u5fc3\u8df3\u4ee3\u7406\u673a\u5236\uff0c\u4fdd\u969c\u4e86\u8282\u70b9\u5728\u4e91\u8fb9\u7f51\u7edc\u65ad\u8fde\u72b6\u6001\u4e0b\uff0c\u5fc3\u8df3\u4ecd\u53ef\u7ee7\u7eed\u4e0a\u62a5\u5230\u4e91\u7aef\uff0c\u4ece\u800c\u4fdd\u8bc1\u8282\u70b9\u4e0a\u4e1a\u52a1 Pod \u4e0d\u88ab\u9a71\u9010\u3002\u540c\u65f6\u5fc3\u8df3\u88ab\u4ee3\u7406\u4e0a\u62a5\u7684\u8282\u70b9\uff0c\u4e5f\u4f1a\u88ab\u5b9e\u65f6\u52a0\u4e0a\u7279\u6b8a\u7684 taints\uff0c\u7528\u4e8e\u9650\u5236\u7ba1\u63a7\u8c03\u5ea6\u65b0 Pod \u5230\u8be5\u8282\u70b9\u3002"}),"\n",(0,o.jsx)(t.h2,{id:"\u5f00\u542f\u65b9\u6cd5",children:"\u5f00\u542f\u65b9\u6cd5"}),"\n",(0,o.jsx)(t.p,{children:"\u5fc3\u8df3\u4ee3\u7406\u529f\u80fd\u7531Yurt-Coordinator\u652f\u6301\uff0c\u5982\u679c\u5e0c\u671b\u4f7f\u7528\u8be5\u80fd\u529b\uff0c\u8bf7\u6ce8\u610f\u4ee5\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\u786e\u4fdd OpenYurt \u7248\u672c\u5927\u4e8e1.2.0"}),"\n",(0,o.jsx)(t.li,{children:"\u786e\u4fdd \u6bcf\u4e2a\u8282\u70b9\u6c60\u4e2d\u8fd0\u884c\u4e86\u4e00\u4e2aYurt-Coordinator \u5b9e\u4f8b"}),"\n",(0,o.jsx)(t.li,{children:"YurtHub\u7ec4\u4ef6\u542f\u52a8\u53c2\u6570 --enable-coordinator = true"}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},84375:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/heartbeat-delegation-8be9a56d712301cfbe3f2d271661d54a.png"},11151:(e,t,n)=>{n.d(t,{a:()=>s});var o=n(67294);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);