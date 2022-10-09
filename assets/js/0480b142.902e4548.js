"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[836],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,y=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3584:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var n=r(7462),a=(r(7294),r(3905));const o={title:"FAQ"},l=void 0,u={unversionedId:"faq",id:"faq",title:"FAQ",description:"yurtadm",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/next/faq",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq.md",tags:[],version:"current",lastUpdatedBy:"lu chen",lastUpdatedAt:1663848018,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"FAQ"},sidebar:"docs",previous:{title:"How to Contribute",permalink:"/docs/next/developer-manuals/how-to-contribute"}},i={},s=[{value:"<strong>yurtadm</strong>",id:"yurtadm",level:2},{value:"<strong>yurt-tunnel</strong>",id:"yurt-tunnel",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"yurtadm"},(0,a.kt)("strong",{parentName:"h2"},"yurtadm")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. yurtadm join error\uff1acrictl not found in system path")),(0,a.kt)("p",null,"The node does not have docker installed, and installing docker can solve this problem."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. yurtadm join error\uff1a","[ERROR FileExisting-conntrack]",": conntrack not found in system path")),(0,a.kt)("p",null,"Execute ",(0,a.kt)("inlineCode",{parentName:"p"},"yum install -y conntrack")," and then retry the yurtadm join command again."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'3. helm installation error during yurtadm init\uff1a Release "yurt-app-manager" does not exist. Installing it now.'),"\n",(0,a.kt)("strong",{parentName:"p"},'Error: failed to download "openyurt/yurt-app-manager" (hint: running ',(0,a.kt)("inlineCode",{parentName:"strong"},"helm repo update")," may help)")),(0,a.kt)("p",null,"Perform the helm installation process manually\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/lib/sealer/data/my-cluster/rootfs\nhelm upgrade --install yurt-app-manager openyurt/yurt-app-manager -n kube-system -f manifests/yurt-app-manager-values.yaml\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. yurtadm init failed, how to clean up the environment?")),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"yurtadm init")," uses ",(0,a.kt)("a",{parentName:"p",href:"http://sealer.cool/"},"sealer")," to create an OpenYurt cluster from scratch, you can refer to ",(0,a.kt)("a",{parentName:"p",href:"http://sealer.cool/zh/help/faq.html#how-to-clean-host-environment-manually-when-sealer-apply-failed"},"this")," to clean up the environment."),(0,a.kt)("h2",{id:"yurt-tunnel"},(0,a.kt)("strong",{parentName:"h2"},"yurt-tunnel")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. kubectl logs edge node error\uff1aerror: Error from server (ServiceUnavailable): the server is currently unable to handle the request ( pods/log xxx)")," "),(0,a.kt)("p",null,"For more details about this problem, you can refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/issues/984"},"issue 984"),"."),(0,a.kt)("p",null,"Please make sure that you are using the latest ",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server/agent")," image (the latest tag of image is confusing, please check the created time)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. kubectl logs edge node error\uff1aerror: You must be logged in to the server (the server has asked for the client to provide credentials ( pods/log xxx))")," "),(0,a.kt)("p",null,"For more details about this problem, you can refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/issues/984"},"issue 984"),"."),(0,a.kt)("p",null,"This is most likely to be an issue caused by outdated tunnel server certificate. You can clean up the tunnel server certificate and redeploy yurt-tunnel-server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf /var/lib/yurttunnel-server/pki\nkubectl delete pod yurt-tunnel-server-xxxxxx -n kube-system\n")))}c.isMDXComponent=!0}}]);