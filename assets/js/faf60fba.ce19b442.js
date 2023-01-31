"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[8653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,h=u["".concat(s,".").concat(b)]||u[b]||d[b]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={title:"How to play with the web console"},r=void 0,l={unversionedId:"installation/openyurt-experience-center/web_console",id:"version-v1.2/installation/openyurt-experience-center/web_console",title:"How to play with the web console",description:"This document will describe how to use the basic functions provided by the Experience Center Web Console.",source:"@site/versioned_docs/version-v1.2/installation/openyurt-experience-center/web_console.md",sourceDirName:"installation/openyurt-experience-center",slug:"/installation/openyurt-experience-center/web_console",permalink:"/docs/installation/openyurt-experience-center/web_console",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-experience-center/web_console.md",tags:[],version:"v1.2",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1675160618,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{title:"How to play with the web console"},sidebar:"version-v1.2/docs",previous:{title:"How to create an account in the experience center",permalink:"/docs/installation/openyurt-experience-center/user"},next:{title:"How to use `kubeconfig` to experience OpenYurt capabilities",permalink:"/docs/installation/openyurt-experience-center/kubeconfig"}},s={},c=[{value:"Web Console Overview",id:"web-console-overview",level:2},{value:"Join local nodes by Web Console",id:"join-local-nodes-by-web-console",level:2},{value:"Quickly deploy applications by OpenYurt Labs",id:"quickly-deploy-applications-by-openyurt-labs",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This document will describe how to use the basic functions provided by the Experience Center Web Console.")),(0,a.kt)("h2",{id:"web-console-overview"},"Web Console Overview"),(0,a.kt)("p",null,'"Cluster Information" page includes application status, node status, dashboard connection status, and the namespaces assigned to users. (each user can only operate in their own namespace, please refer to the design documentation for details)'),(0,a.kt)("p",null,"On the right side of the page is the navigation bar of the web console. In addition to displaying cluster information, the web console also provides functions such as node management, workload management, and labs."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(79068).Z,width:"1946",height:"1092"})),(0,a.kt)("h2",{id:"join-local-nodes-by-web-console"},"Join local nodes by Web Console"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Users can get the access script through the web console and join their nodes to the OpenYurt cluster to experience the features of OpenYurt.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Open the "Node Management/Node" page and click the Add Existing Node button.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(51024).Z,width:"1974",height:"1120"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Browser will pop up a dialog box showing the node access script, click Copy.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(40885).Z,width:"3584",height:"2024"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Execute the replicated script on your node. (Note: ",(0,a.kt)("inlineCode",{parentName:"li"},"yurtctl")," is required on your node)")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(21375).Z,width:"3584",height:"2192"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"After successful execution, you can see the message ",(0,a.kt)("inlineCode",{parentName:"li"},"This node has joined the cluster")," in the command line. In addition, if you refresh the node page in the web console, you can see the joined nodes.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(844).Z,width:"3584",height:"1150"}),"\n",(0,a.kt)("img",{alt:"img",src:n(17449).Z,width:"1414",height:"793"})),(0,a.kt)("h2",{id:"quickly-deploy-applications-by-openyurt-labs"},"Quickly deploy applications by OpenYurt Labs"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'To further lower the barrier to new users, the web console also provides a "Lab" module that allows users to quickly deploy applications to their OpenYurt clusters.')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Currently OpenYurt provides two sample applications, and will gradually improve the lab features.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(70309).Z,width:"1383",height:"793"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Click the settings button on an application card to customize the application settings (e.g. Deployment name, number of replicas, whether to create a corresponding Service, etc.) Once the settings are complete, click the Install button to automatically deploy the application.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(83910).Z,width:"1947",height:"1115"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"After the successful creation, the page will pop up the message ",(0,a.kt)("inlineCode",{parentName:"li"},"install app xxx successfully"),'. And you can see the details of Deployment and Pod in the "Container Group" and "Stateless" pages.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(32837).Z,width:"2062",height:"1128"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},'Additionally, you can uninstall applications directly from the web console\'s "Labs" page.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(42219).Z,width:"1953",height:"1122"})))}d.isMDXComponent=!0},21375:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cmd_add_node-83b9d6a592930527ddab7c64f845603b.png"},844:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cmd_add_node_success-597e741236b16ef14b3072ba767a2740.png"},70309:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/web_lab-bc6baacf2b9722262071c97abb22082f.png"},83910:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/web_lab_config-46ac717d25f4dd8aaedc3788feed92f7.png"},32837:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/web_lab_res-d01aee5904015c7e6935a513a8b607d1.png"},42219:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/web_lab_uninstall-af70eb262dbbc176e0afa33a0cde450b.png"},51024:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/web_node_add-ebf0a474ed382382b5184491bdfe0048.png"},17449:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/web_node_add_success-9ac987441fd934c53a2d63738a2b1b4e.png"},40885:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/web_node_script-2f2e791da1351ed6dd17d43f191cc6b1.png"},79068:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/web_overview-124bbea660e023dd2e4dec42c61032d2.png"}}]);