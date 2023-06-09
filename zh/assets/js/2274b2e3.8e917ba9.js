"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,d=s["".concat(i,".").concat(m)]||s[m]||k[m]||a;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"\u672c\u5730\u542f\u52a8\u96c6\u7fa4"},l=void 0,p={unversionedId:"developer-manuals/local-up-openyurt",id:"version-v1.3/developer-manuals/local-up-openyurt",title:"\u672c\u5730\u542f\u52a8\u96c6\u7fa4",description:"\u4f7f\u7528\u65b9\u6cd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3/developer-manuals/local-up-openyurt.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/local-up-openyurt",permalink:"/zh/docs/developer-manuals/local-up-openyurt",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/local-up-openyurt.md",tags:[],version:"v1.3",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1686312326,formattedLastUpdatedAt:"2023\u5e746\u67089\u65e5",frontMatter:{title:"\u672c\u5730\u542f\u52a8\u96c6\u7fa4"},sidebar:"docs",previous:{title:"\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5",permalink:"/zh/docs/developer-manuals/how-to-build-and-test"},next:{title:"CI Workflow",permalink:"/zh/docs/developer-manuals/ci-workflow"}},i={},u=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u73af\u5883\u53d8\u91cf\u8bf4\u660e",id:"\u73af\u5883\u53d8\u91cf\u8bf4\u660e",level:2}],c={toc:u};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,o.kt)("p",null,"OpenYurt\u63d0\u4f9b\u4e86\u4e00\u79cd\u5728\u672c\u5730\u5feb\u901f\u542f\u52a8\u96c6\u7fa4\u7684\u65b9\u6cd5\uff0c\u901a\u8fc7\u8fd0\u884c\u811a\u672c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/hack/make-rules/local_up_openyurt.sh"},"local_up_openyurt.sh"),"\uff0c\u53ef\u4ee5\u4e00\u952e\u5f0f\u5728\u672c\u5730\u521b\u5efaOpenYurt\u96c6\u7fa4\u3002\u8be5\u811a\u672c\u6b63\u786e\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7kubectl\u547d\u4ee4\u8bbf\u95ee\u96c6\u7fa4\u3002\u5728\u8fd0\u884c\u524d\u9700\u8981\u5b89\u88c5docker\u3001kubectl\u3001go\u548ckind\u7b49\u4f9d\u8d56\u8f6f\u4ef6\uff0c\u4ee5\u53ca",(0,o.kt)("inlineCode",{parentName:"p"},"make docker-build"),"\u5728\u672c\u5730\u51c6\u5907\u597dOpenYurt\u5404\u7ec4\u4ef6\u955c\u50cf\u3002\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5148\u6784\u5efaOpenYurt\u955c\u50cf\uff0c\u518d\u542f\u52a8OpenYurt\u96c6\u7fa4\nmake docker-build-and-up-openyurt\n\n# \u955c\u50cf\u5df2\u7ecf\u6784\u5efa\u5b8c\u6210\uff0c\u4ec5\u5728\u672c\u5730\u542f\u52a8OpenYurt\u96c6\u7fa4\nmake local-up-openyurt\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u9ed8\u8ba4\u5728linux/amd64\u5e73\u53f0\u8fd0\u884c\uff0c\u9700\u8981\u5728mac\u73af\u5883\u8fd0\u884c\u65f6\u9700\u8981\u6307\u5b9a\u5e73\u53f0\u4fe1\u606f\uff0c\u6267\u884c\u547d\u4ee4\u4e3a: ",(0,o.kt)("inlineCode",{parentName:"p"},"make local-up-openyurt TARGET_PLATFORMS=linux/arm64"))),(0,o.kt)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,o.kt)("p",null,"\u603b\u7684\u6765\u8bf4\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"local_up_openyurt.sh"),"\u4f1a\u4f7f\u7528\u5f53\u524dopenyurt\u76ee\u5f55\u4e0b\u7684\u6e90\u6587\u4ef6\u542f\u52a8OpenYurt\u96c6\u7fa4\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u6765\u63a7\u5236\u811a\u672c\u7684\u884c\u4e3a\u3002"),(0,o.kt)("p",null,"\u811a\u672c\u4f1a\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"kind"),"\u6765\u542f\u52a8\u4e00\u4e2akubernetes\u96c6\u7fa4\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"KUBERNETESVERSION"),"\u6765\u6307\u5b9a\u96c6\u7fa4\u7684kubernetes\u7684\u7248\u672c\u3002\u5982\uff0c\u901a\u8fc7\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"export KUBERNETESVERSION=1.23"),"\u53ef\u4ee5\u6307\u5b9a\u4f7f\u75281.23\u7248\u672c\u7684kind\u955c\u50cf\u3002\u8fd8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"NODES_NUM"),"\u6765\u6307\u5b9a\u542f\u52a8\u96c6\u7fa4\u4e2d\u5305\u542b\u8282\u70b9\u7684\u6570\u91cf\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"KUBERNETESVERSION"),"\u7684\u683c\u5f0f\u53ea\u80fd\u662f",(0,o.kt)("inlineCode",{parentName:"li"},"1.xx"),"\u3002\u9ed8\u8ba4\u503c\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"1.22"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"NODES_NUM"),"\u7684\u503c\u4e0d\u80fd\u5c0f\u4e8e2\u3002\u542f\u52a8\u7684\u96c6\u7fa4\u4e2d\u6700\u540e\u4f1a\u5305\u542b1\u4e2acontrol-plane\u8282\u70b9\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"NODES_NUM-1"),"\u4e2aworker\u8282\u70b9\u3002\u9ed8\u8ba4\u503c\u4e3a2\u3002"))),(0,o.kt)("p",null,"\u6700\u540e\u5c06\u5728kubernetes\u96c6\u7fa4\u4e2d\u5b89\u88c5OpenYurt\u7ec4\u4ef6\uff0c\u5305\u62ec",(0,o.kt)("inlineCode",{parentName:"p"},"yurthub"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-controller-manager"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-agent"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server"),"\u3002"),(0,o.kt)("p",null,"\u73b0\u5728\uff0c\u4e00\u4e2aOpenYurt\u96c6\u7fa4\u5c31\u542f\u52a8\u5b8c\u6210\u4e86\u3002\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u547d\u4ee4\u6765\u4e0e\u96c6\u7fa4\u8fdb\u884c\u4ea4\u4e92\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"kind"),"\u4f1a\u81ea\u52a8\u5c06\u542f\u52a8\u7684\u96c6\u7fa4\u7684kubeconfig\u50a8\u5b58\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"KUBECONFIG"),"\u6240\u6307\u8def\u5f84\uff08\u9ed8\u8ba4\u4e3a${HOME}/.kube/config\uff09\u3002\u5982\u679c\u5728\u8be5\u76ee\u5f55\u4e0b\u5df2\u7ecf\u6709\u4e86kubeconfig\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"kind"),"\u4f1a\u4e3a\u8be5kubeconfig\u589e\u52a0\u65b0\u7684context\uff0c\u5e76\u5207\u6362current-context\u6307\u5411\u521a\u521a\u521b\u5efa\u7684\u96c6\u7fa4\u3002\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config use-context ${PREVIOUS_CONTEXT_NAME}"),"\u547d\u4ee4\u5207\u56de\u539f\u6765\u7684\u96c6\u7fa4\u3002context\u76f8\u5173\u7684\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u8be5",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters"},"\u6587\u6863"),"\u3002\u53e6\u5916\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"KIND_KUBECONFIG"),"\u6765\u6307\u5b9a\u5176\u4ed6\u7684\u8def\u5f84\u3002"),(0,o.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf\u8bf4\u660e"},"\u73af\u5883\u53d8\u91cf\u8bf4\u660e"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\u6765\u63a7\u5236\u811a\u672c\u7684\u884c\u4e3a\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"KIND_KUBECONFIG"))),(0,o.kt)("p",null,"KIND_KUBECONFIG\u8868\u793akind\u4e3a\u65b0\u96c6\u7fa4\u521b\u5efa\u7684kubeconfig\u6587\u4ef6\u7684\u8def\u5f84\u3002\u9ed8\u8ba4\u503c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),"\u3002"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NODES_NUM"))),(0,o.kt)("p",null,"NODES_NUM\u8868\u793a\u521b\u5efa\u7684\u96c6\u7fa4\u4e2d\u5305\u542b\u7684\u8282\u70b9\u7684\u6570\u91cf\uff0c\u6700\u540e\u96c6\u7fa4\u4e2d\u4f1a\u67091\u4e2acontrol-plane\u8282\u70b9\u548cNODES_NUM-1\u4e2aworker\u8282\u70b9\u3002\u56e0\u6b64NODES_NUM\u7684\u503c\u4e0d\u80fd\u5c0f\u4e8e2\uff0c\u9ed8\u8ba4\u503c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"\u3002"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"KUBERNETESVERSION"))),(0,o.kt)("p",null,'KUBERNETESVERSION\u8868\u793a\u521b\u5efa\u7684\u96c6\u7fa4\u4f7f\u7528\u7684kubernetes\u7248\u672c\uff0c\u683c\u5f0f\u4e3a"1.xx"\u3002\u76ee\u524d\u80fd\u6307\u5b9a\u7684\u7248\u672c\u67091.17\uff5e1.23\u3002\u9ed8\u8ba4\u503c\u4e3a',(0,o.kt)("inlineCode",{parentName:"p"},"1.22"),"\u3002"),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"TIMEOUT"))),(0,o.kt)("p",null,"TIMEOUT\u8868\u793a\u5728\u521b\u5efa\u96c6\u7fa4\u671f\u95f4\u7b49\u5f85\u7ec4\u4ef6\uff08control-plane\uff0cyurt-tunnel-server\uff0cyurt-tunnel-agent\uff09\u5c31\u7eea\u7684\u6700\u957f\u65f6\u95f4\u3002\u9ed8\u8ba4\u503c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"120s"),"\u3002"))}k.isMDXComponent=!0}}]);