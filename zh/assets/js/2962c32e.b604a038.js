"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[3675],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,y=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7515:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return i}});var r=n(7462),a=(n(7294),n(3905));const o={title:"FAQ"},l=void 0,u={unversionedId:"faq",id:"faq",title:"FAQ",description:"yurtadm",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/faq.md",sourceDirName:".",slug:"/faq",permalink:"/zh/docs/next/faq",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq.md",tags:[],version:"current",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1665716091,formattedLastUpdatedAt:"2022\u5e7410\u670814\u65e5",frontMatter:{title:"FAQ"},sidebar:"docs",previous:{title:"\u5982\u4f55\u53c2\u4e0e\u8d21\u732e",permalink:"/zh/docs/next/developer-manuals/how-to-contribute"}},p={},i=[{value:"<strong>yurtadm</strong>",id:"yurtadm",level:2},{value:"<strong>yurt-tunnel</strong>",id:"yurt-tunnel",level:2}],s={toc:i};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"yurtadm"},(0,a.kt)("strong",{parentName:"h2"},"yurtadm")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. yurtadm join \u62a5\u9519\uff1acrictl not found in system path")),(0,a.kt)("p",null,"\u8282\u70b9\u6ca1\u6709\u5b89\u88c5 docker\uff0c\u5b89\u88c5docker\u5c31\u53ef\u4ee5\u89e3\u51b3\u6b64\u95ee\u9898\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. yurtadm join \u62a5\u9519\uff1a","[ERROR FileExisting-conntrack]",": conntrack not found in system path")),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"yum install -y conntrack")," \u7136\u540e\u91cd\u65b0\u6267\u884c yurtadm join \u547d\u4ee4\u5373\u53ef\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'3. yurtadm init \u8fc7\u7a0b\u4e2d helm \u5b89\u88c5\u51fa\u9519\uff1a Release "yurt-app-manager" does not exist. Installing it now.'),"\n",(0,a.kt)("strong",{parentName:"p"},'Error: failed to download "openyurt/yurt-app-manager" (hint: running ',(0,a.kt)("inlineCode",{parentName:"strong"},"helm repo update")," may help)")),(0,a.kt)("p",null,"\u624b\u52a8\u6267\u884c helm \u5b89\u88c5 yurt-app-manager \u7684\u8fc7\u7a0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8fdb\u5165\u96c6\u7fa4\u955c\u50cf\u7684\u4e0a\u4e0b\u6587\u76ee\u5f55\ncd /var/lib/sealer/data/my-cluster/rootfs\n# \u5b89\u88c5 yurt-app-manager\nhelm upgrade --install yurt-app-manager openyurt/yurt-app-manager -n kube-system -f manifests/yurt-app-manager-values.yaml\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. yurtadm init \u4e2d\u9014\u5b89\u88c5\u5931\u8d25\uff0c\u5982\u4f55\u628a\u73af\u5883\u6e05\u7406\u5e72\u51c0\uff1f")),(0,a.kt)("p",null,"\u6309\u7167 ",(0,a.kt)("a",{parentName:"p",href:"http://sealer.cool/zh/help/faq.html#how-to-clean-host-environment-manually-when-sealer-apply-failed"},"http://sealer.cool/zh/help/faq.html#how-to-clean-host-environment-manually-when-sealer-apply-failed")," \u6765\u6e05\u7406\u3002"),(0,a.kt)("h2",{id:"yurt-tunnel"},(0,a.kt)("strong",{parentName:"h2"},"yurt-tunnel")),(0,a.kt)("p",null,"\u5982\u4f55\u5b9a\u4f4d",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl exec"),"\u547d\u4ee4\u6267\u884c\u5931\u8d25\u539f\u56e0\uff0c\u53ef\u4ee5\u6839\u636e\u4e0b\u56fe\u4e2d\u6d41\u7a0b\u6765\u786e\u5b9a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(4503).Z,width:"1708",height:"1022"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5728kube-apiserver\u7684\u65e5\u5fd7\u65e0\u6cd5\u627e\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"exec"),"\u8bf7\u6c42\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u8bf7\u628akube-apiserver\u7ec4\u4ef6\u65e5\u5fd7\u7ea7\u522b\u8c03\u6574\u4e3a3(--v=3)"),(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u786e\u4fddkube-apiserver\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"yurt-tunnel-dns")," pod\u6765\u8fdb\u884c\u57df\u540d\u89e3\u6790\uff0ckube-apiserver\u914d\u7f6e\u8c03\u6574\u6587\u6863\u8bf7\u53c2\u8003: ",(0,a.kt)("a",{parentName:"li",href:"https://openyurt.io/docs/installation/openyurt-prepare#3-kube-apiserver-adjustment"},"https://openyurt.io/docs/installation/openyurt-prepare#3-kube-apiserver-adjustment"))),(0,a.kt)("p",null,"\u53e6\u5916\u8fd8\u6709\u4e00\u4e9byurt-tunnel\u76f8\u5173\u7684issue\uff0c\u4e5f\u53ef\u80fd\u4e3a\u60a8\u63d0\u4f9b\u4e00\u4e9b\u5e2e\u52a9\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. kubectl logs \u8fb9\u7f18\u8282\u70b9\u7684pod\u51fa\u73b0\uff1aerror: Error from server (ServiceUnavailable): the server is currently unable to handle the request ( pods/log xxx)")," "),(0,a.kt)("p",null,"\u95ee\u9898\u63cf\u8ff0\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/issues/984"},"https://github.com/openyurtio/openyurt/issues/984")),(0,a.kt)("p",null,"\u6ca1\u6709\u4f7f\u7528\u6700\u65b0\u7684 yurt-tunnel-agent:latest  \u955c\u50cf\uff0c\u67e5\u770b\u4e00\u4e0b\u955c\u50cf\u521b\u5efa\u65f6\u95f4\uff0c\u5982\u679c\u4e0d\u662f\u6700\u65b0\u7684\u955c\u50cf\uff0c\u9700\u8981\u91cd\u65b0pull\u4e00\u4e0b\u955c\u50cf\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. kubectl logs \u8fb9\u7f18\u8282\u70b9\u7684pod\u51fa\u73b0\uff1aerror: You must be logged in to the server (the server has asked for the client to provide credentials ( pods/log xxx))")," "),(0,a.kt)("p",null,"\u5177\u4f53\u95ee\u9898\u63cf\u8ff0\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/issues/984"},"https://github.com/openyurtio/openyurt/issues/984")),(0,a.kt)("p",null,"\u5220\u9664 /var/lib/yurttunnel-server/pki \u76ee\u5f55\uff0c\u7136\u540e\u91cd\u65b0\u90e8\u7f72yurt-tunnel:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf /var/lib/yurttunnel-server/pki\nkubectl delete pod yurt-tunnel-server-xxxxxx -n kube-system\n")))}c.isMDXComponent=!0},4503:function(e,t,n){t.Z=n.p+"assets/images/yurt-tunnel-troubleshooting-292e59da652b3ab599ef8bb2fa5abddf.png"}}]);