"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[5814],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81999:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const s={title:"\u53ef\u7f16\u7a0b\u7684\u8d44\u6e90\u8bbf\u95ee\u63a7\u5236"},a=void 0,l={unversionedId:"user-manuals/resource-access-control/resource-access-control",id:"version-v1.2/user-manuals/resource-access-control/resource-access-control",title:"\u53ef\u7f16\u7a0b\u7684\u8d44\u6e90\u8bbf\u95ee\u63a7\u5236",description:"Background introduction",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/user-manuals/resource-access-control/resource-access-control.md",sourceDirName:"user-manuals/resource-access-control",slug:"/user-manuals/resource-access-control/",permalink:"/zh/docs/v1.2/user-manuals/resource-access-control/",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/resource-access-control/resource-access-control.md",tags:[],version:"v1.2",lastUpdatedBy:"rambohe",lastUpdatedAt:1678206781,formattedLastUpdatedAt:"2023\u5e743\u67087\u65e5",frontMatter:{title:"\u53ef\u7f16\u7a0b\u7684\u8d44\u6e90\u8bbf\u95ee\u63a7\u5236"},sidebar:"version-v1.2/docs",previous:{title:"\u8fb9\u7f18Ingress",permalink:"/zh/docs/v1.2/user-manuals/network/edge-ingress"},next:{title:"\u8fb9\u7f18\u672c\u5730\u5b58\u50a8",permalink:"/zh/docs/v1.2/user-manuals/storage/edge-local-storage"}},i={},c=[{value:"Background introduction",id:"background-introduction",level:2},{value:"Architecture design",id:"architecture-design",level:2},{value:"How to use",id:"how-to-use",level:2}],u={toc:c};function p(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"background-introduction"},"Background introduction"),(0,o.kt)("p",null,"In the cloud-edge architecture, The response for edge components(like kube-proxy or user pods) requests from the cloud kube-apiserver can be performed with some customized processing, in order to better meet the specific needs of edge scenarios. For example, when kubelet gets the default/kubernetes service, kubelet expects the service includes the accessible kube-apiserver address instead of the native service ClusterIP address, so pods on edge nodes can use InClusterConfig to access cloud kube-apiserver seamlessly."),(0,o.kt)("h2",{id:"architecture-design"},"Architecture design"),(0,o.kt)("p",null,"The programmable data filtering framework is built into the YurtHub component, and the response data for specified requests from cloud kube-apiserver will go through a chain of filters and non-perception and on-demand transformation of the response data will be carried out, so as to meet the specific requirements in the cloud-edge collaboration scenario. As described in the below Figure."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"resource-access-control",src:r(30659).Z,width:"1216",height:"786"})),(0,o.kt)("p",null,"Four filters are supported in the filters chain at present as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"masterservice filter: is used to mutate the ClusterIP and https port of master service(default/kubernetes service) to address that YurtHub component is listening in order to make pods using InClusterConfig on edge nodes to access cloud kube-apiserver through YurtHub component without perception."),(0,o.kt)("li",{parentName:"ul"},"servicetopology filter: is used to reassemble endpointslices according to the service topology setting of service in order to ensure the traffic accessing the service can only be forwarded to pods in the same NodePool."),(0,o.kt)("li",{parentName:"ul"},"discardcloudservice filter: is used to discard LoadBalancer service for kube-proxy components on edge nodes because cloud service cannot be accessed through pod IP."),(0,o.kt)("li",{parentName:"ul"},"inclusterconfig filter: is used to comment kubeconfig setting in kube-system/kube-proxy configmap in order to make kube-proxy components to use InClusterConfig to access cloud kube-apiserver on edge nodes")),(0,o.kt)("p",null,"And each filter can process only the response data of specific requests as following:\nthe Whether the response data is processed by above filters is determined by the request triples: component/resource/verbs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"component: represents the User-Agent in the http request header, like kube-proxy"),(0,o.kt)("li",{parentName:"ul"},"resource: represents the requested resource, like endpointslices"),(0,o.kt)("li",{parentName:"ul"},"verbs: represents the verb of http request, like get, list, watch")),(0,o.kt)("p",null,"and resource and verbs "),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"Each filter can process only the response data of specific requests that determined by component/resource/verbs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"component: represents the User-Agent in the http request header, like kube-proxy"),(0,o.kt)("li",{parentName:"ul"},"resource: represents the requested resource, like endpointslices"),(0,o.kt)("li",{parentName:"ul"},"verbs: represents the verb of http request, like get, list, watch")),(0,o.kt)("p",null,"Each filter supports the following requests(components can be configured by user, but resource and verbs are fixed):"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Filter"),(0,o.kt)("th",{parentName:"tr",align:null},"Default components"),(0,o.kt)("th",{parentName:"tr",align:null},"resources"),(0,o.kt)("th",{parentName:"tr",align:null},"verbs"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"masterservice"),(0,o.kt)("td",{parentName:"tr",align:null},"kubelet"),(0,o.kt)("td",{parentName:"tr",align:null},"services"),(0,o.kt)("td",{parentName:"tr",align:null},"list, watch")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"servicetopology"),(0,o.kt)("td",{parentName:"tr",align:null},"kube-proxy, coredns, nginx-ingress-controller"),(0,o.kt)("td",{parentName:"tr",align:null},"endpoints, endpointslices"),(0,o.kt)("td",{parentName:"tr",align:null},"list, watch")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"discardcloudservice"),(0,o.kt)("td",{parentName:"tr",align:null},"kube-proxy"),(0,o.kt)("td",{parentName:"tr",align:null},"services"),(0,o.kt)("td",{parentName:"tr",align:null},"list, watch")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"inclusterconfig"),(0,o.kt)("td",{parentName:"tr",align:null},"kubelet"),(0,o.kt)("td",{parentName:"tr",align:null},"configmaps"),(0,o.kt)("td",{parentName:"tr",align:null},"get, list, watch")))),(0,o.kt)("p",null,"Moreover, if the response for other clients also want to be handled by filters, user can configure the kube-system/yurt-hub-cfg configmap as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// configured response for clients named foo and bar can be handled by servicetopology\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: yurt-hub-cfg\ndata:\n  servicetopology: "foo, bar"\n')))}p.isMDXComponent=!0},30659:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/resource-access-control-2c82f506c04bb7fcafcb39f8fa9ce72b.png"}}]);