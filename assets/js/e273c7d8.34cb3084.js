"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4596],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58181:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var r=n(87462),a=(n(67294),n(3905));const o={title:"Raven"},l=void 0,i={unversionedId:"core-concepts/raven",id:"version-v1.0/core-concepts/raven",title:"Raven",description:"1. Background",source:"@site/versioned_docs/version-v1.0/core-concepts/raven.md",sourceDirName:"core-concepts",slug:"/core-concepts/raven",permalink:"/docs/v1.0/core-concepts/raven",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/raven.md",tags:[],version:"v1.0",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1662464199,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{title:"Raven"},sidebar:"version-v1.0/docs",previous:{title:"Architecture",permalink:"/docs/v1.0/core-concepts/architecture"},next:{title:"YurtHub",permalink:"/docs/v1.0/core-concepts/yurthub"}},c={},u=[{value:"1. Background",id:"1-background",level:2},{value:"2. Architecture",id:"2-architecture",level:2},{value:"3. Features and Advantages",id:"3-features-and-advantages",level:2},{value:"4. Version",id:"4-version",level:2},{value:"5. futures",id:"5-futures",level:2}],p={toc:u};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-background"},"1. Background"),(0,a.kt)("p",null,"In edge computing, edge-edge and edge-cloud are common network communication scenarios. In OpenYurt, we have introduced ",(0,a.kt)("inlineCode",{parentName:"p"},"YurtTunnel")," to deal with the network problems of maintenance and monitoring in edge-cloud collaboration, providing the capibility of ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl exec/logs")," on edge nodes and collecting monitoring indicators from edge nodes. But the problems solved by ",(0,a.kt)("inlineCode",{parentName:"p"},"YurtTunnel")," are only a part of edge-cloud communication. We also need to provide solutions for edge-edge and edge-cloud container network communication."),(0,a.kt)("p",null,"In OpenYurt cluster, pods in different physical regions may need to use Pod IP, Service IP or Service name to communicate with other Pods. Although these pods are in a single K8s cluster, they are in different physical regions (network domains) and cannot communicate directly. So we create ",(0,a.kt)("inlineCode",{parentName:"p"},"Raven")," project to solve this problem."),(0,a.kt)("h2",{id:"2-architecture"},"2. Architecture"),(0,a.kt)("p",null,"As following picture, the architecture of ",(0,a.kt)("inlineCode",{parentName:"p"},"Raven")," have two components:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(40751).Z,width:"924",height:"566"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Raven Controller Manager"),"\uff1aThe native Kubernetes controller is deployed in some nodes on the cloud as a ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment"),", monitoring the status of edge nodes, selecting an egress for cross-edge traffic as a gateway node for each edge node pool. When the current gateway node is dead and other node will be switched. All cross-edge traffic will be forwarded by the gateway node of each edge node pool;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Raven Agent"),"\uff1aIt is deployed as a ",(0,a.kt)("inlineCode",{parentName:"p"},"DaemonSet")," and runs on each node of the K8s cluster. It configures route or VPN tunnel on the node according to the role of each node (gateway or non-gateway);"))),(0,a.kt)("p",null,"The above two components are connected by a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go"},"Gateway CRD")," to exchange routes and VPN tunnels, as shown in the following picture:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(48882).Z,width:"1444",height:"756"})),(0,a.kt)("p",null,"For more details, please refer to the code repository of the Raven project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/openyurtio/raven-controller-manager"},"raven-controller-manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/openyurtio/raven"},"raven"))),(0,a.kt)("h2",{id:"3-features-and-advantages"},"3. Features and Advantages"),(0,a.kt)("p",null,"Features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No intrusion: No intrusion into the native K8s CNI network, only cross-edge traffic is hijacked for forwarding"),(0,a.kt)("li",{parentName:"ul"},"Security: Use stable ",(0,a.kt)("inlineCode",{parentName:"li"},"IPsec")," to encrypt cross-edge traffic")),(0,a.kt)("p",null,"Advantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Raven")," will try to use the network capabilities of the edge itself, create edge-to-edge VPN tunnels as possible, and will not forward all cross-edge traffic through the cloud center"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Raven")," does not hijack the traffic in the same edge node pool, and keeps the CNI capabilities of the cluster itself")),(0,a.kt)("h2",{id:"4-version"},"4. Version"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Raven Controller Manager"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"version"),(0,a.kt)("th",{parentName:"tr",align:null},"image"),(0,a.kt)("th",{parentName:"tr",align:null},"release"),(0,a.kt)("th",{parentName:"tr",align:null},"content"),(0,a.kt)("th",{parentName:"tr",align:null},"comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v0.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"openyurt/raven-controller-manager:v0.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"2022.05"),(0,a.kt)("td",{parentName:"tr",align:null},"first"),(0,a.kt)("td",{parentName:"tr",align:null},"support Gateway Node election")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Raven Agent"),"\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"version"),(0,a.kt)("th",{parentName:"tr",align:null},"image"),(0,a.kt)("th",{parentName:"tr",align:null},"release"),(0,a.kt)("th",{parentName:"tr",align:null},"content"),(0,a.kt)("th",{parentName:"tr",align:null},"comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v0.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"openyurt/raven-agent:v0.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"2022.05"),(0,a.kt)("td",{parentName:"tr",align:null},"first"),(0,a.kt)("td",{parentName:"tr",align:null},"support IPSec")))),(0,a.kt)("h2",{id:"5-futures"},"5. futures"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"support SLB as public network exporter for gateway \u3010",(0,a.kt)("a",{parentName:"li",href:"https://github.com/openyurtio/raven/issues/22"},"issue #22"),"\u3011 "),(0,a.kt)("li",{parentName:"ul"},"support NAT traversal \u3010",(0,a.kt)("a",{parentName:"li",href:"https://github.com/openyurtio/raven/issues/13"},"issue #13"),"\u3011 "),(0,a.kt)("li",{parentName:"ul"},"support distribute route path decision \u3010",(0,a.kt)("a",{parentName:"li",href:"https://github.com/openyurtio/raven/issues/14"},"issue #14"),"\u3011",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"route path cost evaluation "),(0,a.kt)("li",{parentName:"ul"},"shortest path decision "),(0,a.kt)("li",{parentName:"ul"},"keep networking connection alive during paths change")))),(0,a.kt)("p",null,"Interested students are welcome to join us and contribute code!"))}s.isMDXComponent=!0},48882:function(e,t,n){t.Z=n.p+"assets/images/raven-sequence-diag-21e979ba2e0c41f82407121704b13eb7.png"},40751:function(e,t,n){t.Z=n.p+"assets/images/raven-017b384aa3ec05a762c21c4370c73174.png"}}]);