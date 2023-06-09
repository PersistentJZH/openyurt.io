"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"yurtadm"},i=void 0,p={unversionedId:"faq/yurtadm",id:"version-v1.3/faq/yurtadm",title:"yurtadm",description:"1. yurtadm join error: crictl not found in system path",source:"@site/versioned_docs/version-v1.3/faq/yurtadm.md",sourceDirName:"faq",slug:"/faq/yurtadm",permalink:"/docs/faq/yurtadm",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq/yurtadm.md",tags:[],version:"v1.3",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1686312326,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{title:"yurtadm"},sidebar:"docs",previous:{title:"yurthub",permalink:"/docs/faq/yurthub"},next:{title:"yurt-tunnel",permalink:"/docs/faq/yurt-tunnel"}},l={},u=[],s={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. yurtadm join error: crictl not found in system path")),(0,o.kt)("p",null,"The node has not installed the container runtime (such as docker), please install the container runtime before joining the node."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. yurtadm join error: ","[ERROR FileExisting-conntrack]",": conntrack not found in system path")),(0,o.kt)("p",null,"Execute ",(0,o.kt)("inlineCode",{parentName:"p"},"yum install -y conntrack")," and then re-execute the yurtadm join command."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. How does yurtadm join support user-provided cni plugins")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yurtadm join")," will pull the specially modified cni binary files by default. For the modified content, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/user-manuals/network/edge-pod-network"},"link"),". If you want to use pre-prepared cni binaries, they should be placed in the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/cni/bin"),", and then add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--reuse-cni-bin=true")," parameter when using ",(0,o.kt)("inlineCode",{parentName:"p"},"yurtadm join")," ."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. How does yurtadm join support components such as kubelet/kubeadm provided by users")),(0,o.kt)("p",null,"Users can prepare the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubelet")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeadm")," components in the PATH environment variable. However, there are some restrictions on the versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"kubelet")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeadm"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"yurtadm")," will check whether the ",(0,o.kt)("inlineCode",{parentName:"p"},"major version")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"minor version")," of the component are the same as the cluster Kubernetes Server version (this follows the semver specification). If the versions are inconsistent, Prepared kubelet/kubeadm will be skipped and kubelet/kubeadm will be pulled from the official link according to the Kubernetes Server version."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5. yurtadm join failed to access the node, how to solve it")),(0,o.kt)("p",null,"First, you can analyze the error log of ",(0,o.kt)("inlineCode",{parentName:"p"},"yurtadm join")," to locate the stage where the error occurred. If the yurthub component cannot be started normally, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/faq/yurthub"},"yurthub faq")))}c.isMDXComponent=!0}}]);