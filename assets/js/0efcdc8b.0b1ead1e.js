"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[9861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Pool Coordinator Performance Test"},l=void 0,i={unversionedId:"test-report/pool-coordinator-test",id:"version-v1.2/test-report/pool-coordinator-test",title:"Pool Coordinator Performance Test",description:"Background",source:"@site/versioned_docs/version-v1.2/test-report/pool-coordinator-test.md",sourceDirName:"test-report",slug:"/test-report/pool-coordinator-test",permalink:"/docs/v1.2/test-report/pool-coordinator-test",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/test-report/pool-coordinator-test.md",tags:[],version:"v1.2",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1675160618,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{title:"Pool Coordinator Performance Test"},sidebar:"version-v1.2/docs",previous:{title:"YurtHub Performance Test",permalink:"/docs/v1.2/test-report/yurthub-performance-test"},next:{title:"Optimize the pods recovery efficiency when edge nodes restart",permalink:"/docs/v1.2/test-report/pod-recover-efficiency-test"}},d={},s=[{value:"Background",id:"background",level:2},{value:"Test Environment",id:"test-environment",level:2},{value:"Kubernetes Version",id:"kubernetes-version",level:3},{value:"Node Configuration",id:"node-configuration",level:3},{value:"Operating System",id:"operating-system",level:4},{value:"CPU",id:"cpu",level:4},{value:"Memory",id:"memory",level:4},{value:"Disk",id:"disk",level:4},{value:"Test Method",id:"test-method",level:2},{value:"Test Result",id:"test-result",level:2},{value:"Phase one",id:"phase-one",level:3},{value:"Phase two",id:"phase-two",level:3},{value:"Phase three",id:"phase-three",level:3},{value:"Phase four",id:"phase-four",level:3},{value:"Phase five",id:"phase-five",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:s};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Pool Coordinator is an important component in edge node pool. OpenYurt uses pool coordinator to select a yurthub master and backup the resources in edge node pool."),(0,r.kt)("p",null,"In this article, we test the performance of pool-coordinator pod and give a suggestion resource configuration."),(0,r.kt)("h2",{id:"test-environment"},"Test Environment"),(0,r.kt)("h3",{id:"kubernetes-version"},"Kubernetes Version"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'Major:"1", Minor:"22", GitVersion:"v1.22.0", GitCommit:"c2b5237ccd9c0f1d600d3072634ca66cefdf272f", GitTreeState:"clean", BuildDate:"2021-08-04T17:57:25Z", GoVersion:"go1.16.6", Compiler:"gc", Platform:"linux/amd64"')),(0,r.kt)("h3",{id:"node-configuration"},"Node Configuration"),(0,r.kt)("p",null,"Master and work node are virtual machines run on VMWare Fusion."),(0,r.kt)("h4",{id:"operating-system"},"Operating System"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Master"),(0,r.kt)("th",{parentName:"tr",align:null},"Node"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LSB Version"),(0,r.kt)("td",{parentName:"tr",align:null},":core-4.1-amd64:core-4.1-noarch"),(0,r.kt)("td",{parentName:"tr",align:null},":core-4.1-amd64:core-4.1-noarch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Distributor ID"),(0,r.kt)("td",{parentName:"tr",align:null},"CentOS"),(0,r.kt)("td",{parentName:"tr",align:null},"CentOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"CentOS Linux release 8.4.2105"),(0,r.kt)("td",{parentName:"tr",align:null},"CentOS Linux release 8.4.2105")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Release"),(0,r.kt)("td",{parentName:"tr",align:null},"8.4.2105"),(0,r.kt)("td",{parentName:"tr",align:null},"8.4.2105")))),(0,r.kt)("h4",{id:"cpu"},"CPU"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Master"),(0,r.kt)("th",{parentName:"tr",align:null},"Node"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Architecture"),(0,r.kt)("td",{parentName:"tr",align:null},"x86_64"),(0,r.kt)("td",{parentName:"tr",align:null},"x86_64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU op-mode (s)"),(0,r.kt)("td",{parentName:"tr",align:null},"32-bit, 64-bit"),(0,r.kt)("td",{parentName:"tr",align:null},"32-bit, 64-bit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Byte Order"),(0,r.kt)("td",{parentName:"tr",align:null},"Little Endian"),(0,r.kt)("td",{parentName:"tr",align:null},"Little Endian")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU (s)"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"On-line CPU(s) list"),(0,r.kt)("td",{parentName:"tr",align:null},"0-3"),(0,r.kt)("td",{parentName:"tr",align:null},"0-3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Thread(s) per core"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Core(s) per socket"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Socket(s)"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NUMA node(s)"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vendor ID"),(0,r.kt)("td",{parentName:"tr",align:null},"GenuineIntel"),(0,r.kt)("td",{parentName:"tr",align:null},"GenuineIntel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU family"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Model"),(0,r.kt)("td",{parentName:"tr",align:null},"158"),(0,r.kt)("td",{parentName:"tr",align:null},"158")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Model name"),(0,r.kt)("td",{parentName:"tr",align:null},"Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz"),(0,r.kt)("td",{parentName:"tr",align:null},"Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stepping"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU MHz"),(0,r.kt)("td",{parentName:"tr",align:null},"2592.000"),(0,r.kt)("td",{parentName:"tr",align:null},"2592.000")))),(0,r.kt)("h4",{id:"memory"},"Memory"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Master"),(0,r.kt)("th",{parentName:"tr",align:null},"Node"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Total memory"),(0,r.kt)("td",{parentName:"tr",align:null},"7829472 K"),(0,r.kt)("td",{parentName:"tr",align:null},"7829472 K")))),(0,r.kt)("h4",{id:"disk"},"Disk"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Master"),(0,r.kt)("th",{parentName:"tr",align:null},"Node"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Total Size"),(0,r.kt)("td",{parentName:"tr",align:null},"20GiB"),(0,r.kt)("td",{parentName:"tr",align:null},"20GiB")))),(0,r.kt)("h2",{id:"test-method"},"Test Method"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start the pool-coordinator pod and record the beginning resource used."),(0,r.kt)("li",{parentName:"ul"},"Write a mount of resources and record the resource used of pool-coordinator. In this test, we write 1000 pods and 500 nodes into pool-coordinator. The size of each pod and node both are 8KB."),(0,r.kt)("li",{parentName:"ul"},"Delete all resources in pool-coordinator. To see whether resource used will go down to the beginning level."),(0,r.kt)("li",{parentName:"ul"},"Rewrite a mount of resources to pool-coordinator and patch them frequently and randomly. Check the resource used of current situation."),(0,r.kt)("li",{parentName:"ul"},"Check the result of leader election.")),(0,r.kt)("h2",{id:"test-result"},"Test Result"),(0,r.kt)("h3",{id:"phase-one"},"Phase one"),(0,r.kt)("p",null,"Start pool-coordinator pod and record the beginning resource used."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPU used: 70m ~ 90m"),(0,r.kt)("li",{parentName:"ul"},"mem used: 370MB.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"apiserver used 205MB."),(0,r.kt)("li",{parentName:"ul"},"etcd used 165MB.")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(91289).Z,width:"3632",height:"1518"}),"\n",(0,r.kt)("img",{src:n(20268).Z,width:"3630",height:"1598"}),"\n",(0,r.kt)("img",{src:n(72997).Z,width:"3634",height:"1486"}),"\n",(0,r.kt)("img",{src:n(19697).Z,width:"3632",height:"1596"})),(0,r.kt)("h3",{id:"phase-two"},"Phase two"),(0,r.kt)("p",null,"Write a mount of resources and record the resource used of pool-coordinator. In this test, we write 1000 pods and 500 nodes into pool-coordinator. The size of each pod and node both are 8KB."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"top CPU used: 310m"),(0,r.kt)("li",{parentName:"ul"},"top mem used: 450MB. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"apiserver used 240MB."),(0,r.kt)("li",{parentName:"ul"},"etcd used 210MB.")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(50033).Z,width:"3628",height:"1478"}),"\n",(0,r.kt)("img",{src:n(11726).Z,width:"3638",height:"1596"}),"\n",(0,r.kt)("img",{src:n(78708).Z,width:"3630",height:"1472"}),"\n",(0,r.kt)("img",{src:n(81688).Z,width:"3634",height:"1598"})),(0,r.kt)("h3",{id:"phase-three"},"Phase three"),(0,r.kt)("p",null,"Delete all resources in pool-coordinator. To see whether resource used will go down to the beginning level."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"top CPU used: 260m"),(0,r.kt)("li",{parentName:"ul"},"top mem used: 590MB. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"apiserver used 350MB."),(0,r.kt)("li",{parentName:"ul"},"etcd used 240MB.")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(72547).Z,width:"3626",height:"1490"}),"\n",(0,r.kt)("img",{src:n(47060).Z,width:"3630",height:"1590"}),"\n",(0,r.kt)("img",{src:n(68317).Z,width:"3632",height:"1492"}),"\n",(0,r.kt)("img",{src:n(53061).Z,width:"3628",height:"1592"})),(0,r.kt)("h3",{id:"phase-four"},"Phase four"),(0,r.kt)("p",null,"Rewrite a mount of resources to pool-coordinator and patch them frequently and randomly. Check the resource used of current situation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"top CPU used: 640m."),(0,r.kt)("li",{parentName:"ul"},"mem used rise continually and result in etcd container OOM.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(99152).Z,width:"3626",height:"1494"}),"\n",(0,r.kt)("img",{src:n(31930).Z,width:"3630",height:"1592"}),"\n",(0,r.kt)("img",{src:n(41090).Z,width:"3626",height:"1496"}),"\n",(0,r.kt)("img",{src:n(90935).Z,width:"3638",height:"1600"})),(0,r.kt)("h3",{id:"phase-five"},"Phase five"),(0,r.kt)("p",null,"Run other program to do leader election and check the result. "),(0,r.kt)("p",null,"Go code run 500 goroutines and every goroutine do the same things to acquire leader. After acquiring leader successfully, go client sleep 1 second and quit."),(0,r.kt)("p",null,"We can see that program acquired leader successfully. After one client quited, the other go client can aquire leader successfully."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"I1212 14:58:43.652733   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:43.652766   41875 main.go:656] new leader elected: ff43ffde-3551-47d6-b2af-1fa3ef115b86\nI1212 14:58:43.652779   41875 main.go:562] Controller loop...\nI1212 14:58:44.653060   41875 main.go:564] Controller quit.\nI1212 14:58:44.662196   41875 main.go:648] leader lost: ff43ffde-3551-47d6-b2af-1fa3ef115b86\nI1212 14:58:44.679782   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:44.679826   41875 main.go:656] new leader elected: 76870bb5-eaa0-44b0-a8a8-203c36a2d373\nI1212 14:58:44.679915   41875 main.go:562] Controller loop...\nI1212 14:58:45.680211   41875 main.go:564] Controller quit.\nI1212 14:58:45.686105   41875 main.go:648] leader lost: 76870bb5-eaa0-44b0-a8a8-203c36a2d373\nI1212 14:58:45.697108   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:45.697131   41875 main.go:656] new leader elected: b127e7bc-beeb-474a-b0e9-5023b1563d94\nI1212 14:58:45.697210   41875 main.go:562] Controller loop...\nI1212 14:58:46.698199   41875 main.go:564] Controller quit.\nI1212 14:58:46.702313   41875 main.go:648] leader lost: b127e7bc-beeb-474a-b0e9-5023b1563d94\nI1212 14:58:46.733931   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:46.733953   41875 main.go:656] new leader elected: 7a4dd5d7-5e25-4f69-a882-d32e17bb703a\nI1212 14:58:46.734007   41875 main.go:562] Controller loop...\nI1212 14:58:47.739147   41875 main.go:564] Controller quit.\nI1212 14:58:47.743684   41875 main.go:648] leader lost: 7a4dd5d7-5e25-4f69-a882-d32e17bb703a\n...\n\n")),(0,r.kt)("p",null,"Check the lease resource in pool-coordinator. We can see the lease resource and the holder of lease changes periodically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   ff43ffde-3551-47d6-b2af-1fa3ef115b86   5m\n\n$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   76870bb5-eaa0-44b0-a8a8-203c36a2d373   5m\n\n$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   b127e7bc-beeb-474a-b0e9-5023b1563d94   5m\n\n$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   7a4dd5d7-5e25-4f69-a882-d32e17bb703a   5m\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"After testing, we got the minimum resource limit that pool-coordinator needed: CPU 310m\u3001memory 450MB."),(0,r.kt)("p",null,"And we see that deleting resource in etcd will not let the resource used of pool-coordinator goes down."),(0,r.kt)("p",null,"It is caused by the storage mechanism of etcd, which will add tombstone revision instead of deleting resource immediately."),(0,r.kt)("p",null,"When patching resource frequently, the memory used of etcd go up. If we set the memory limit of etcd, it will cause etcd container OOM."),(0,r.kt)("p",null,"Finally, we got that CPU is not the limit resource of pool-coordinator. And the memory used of etcd container should be limited to an acceptable level to protect other pod in edge node pool"),(0,r.kt)("p",null,"So, in an edge node pool, when node number less than 500 and pod number less then 1000, we recommend the resource configuration below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiserverResources:\n  requests:\n    cpu: 250m\n---\netcdResources:\n  limits:\n    cpu: 200m\n    memory: 512Mi\n  requests:\n    cpu: 100m\n    memory: 256Mi\n")))}u.isMDXComponent=!0},91289:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step1-cpu-sum-497facefc565373ba9ac9ec29aab8173.jpg"},20268:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step1-cpu-6f34b2155be7b18568b3344eddf4f05a.jpg"},72997:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step1-mem-sum-5a1b4943fdda0bab87062ceadec13fd9.jpg"},19697:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step1-mem-a8392c3b9c63478792d43c481b0907c0.jpg"},50033:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step2-cpu-sum-fba471d1e780d1cd3e97f36476581fe5.jpg"},11726:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step2-cpu-e44afe4b35e3ab5226445f0175598386.jpg"},78708:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step2-mem-sum-336e12a9d81c997ecb53308fa9bb037d.jpg"},81688:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step2-mem-47fbe35e30c4b84170fe82c88b8161a4.jpg"},72547:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step3-cpu-sum-3676a2641362ff4ac3d917f1d1c89f83.jpg"},47060:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step3-cpu-6721b33c3022dc9962d851a1f0a642c1.jpg"},68317:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step3-mem-sum-d724ad07eed6dd82b4ac442544dea8b2.jpg"},53061:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step3-mem-d6c795f26455abfc2056d2e18579c4a2.jpg"},99152:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step4-cpu-sum-30a0191aa907fe4fe2c3b7b7274d1262.jpg"},31930:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step4-cpu-1920f06aa3db6d096ddb8f5866a29741.jpg"},41090:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step4-mem-sum-dd1a710ded10a10e1ba4c2dcc04612a9.jpg"},90935:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pool-coordinator-step4-mem-8cd7c6b3ece1e42a3803d0b2a0d9326b.jpg"}}]);