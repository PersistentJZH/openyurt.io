"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[5221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Summary"},l=void 0,i={unversionedId:"installation/summary",id:"version-v1.2/installation/summary",title:"Summary",description:"OpenYurt Cluster installation is divided into two parts: Install OpenYurt Control Plane components and join nodes.",source:"@site/versioned_docs/version-v1.2/installation/summary.md",sourceDirName:"installation",slug:"/installation/summary",permalink:"/docs/installation/summary",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/summary.md",tags:[],version:"v1.2",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1677901626,formattedLastUpdatedAt:"Mar 4, 2023",frontMatter:{title:"Summary"},sidebar:"version-v1.2/docs",previous:{title:"Resource and System Requirements",permalink:"/docs/usage-conditions/resource-and-system-requirements"},next:{title:"Manually Setup",permalink:"/docs/installation/manually-setup"}},s={},p=[{value:"Part 1: Install Control Plane Components",id:"part-1-install-control-plane-components",level:3},{value:"Part 2: Join Nodes",id:"part-2-join-nodes",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"OpenYurt Cluster installation is divided into two parts: Install OpenYurt Control Plane components and join nodes."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Some common problems you may encounter have been listed in the ",(0,o.kt)("a",{parentName:"em",href:"/docs/faq"},"FAQ"),"."))),(0,o.kt)("h3",{id:"part-1-install-control-plane-components"},"Part 1: Install Control Plane Components"),(0,o.kt)("p",null,"We recommend users to install Control Plane Components manually at present. and other solutions will be supported in the later version."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/installation/manually-setup"},"Manually Setup")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Recommend to use in a production environment"),(0,o.kt)("li",{parentName:"ul"},"Need to prepare a Kubernetes Control Plane")))),(0,o.kt)("h3",{id:"part-2-join-nodes"},"Part 2: ",(0,o.kt)("a",{parentName:"h3",href:"/docs/installation/yurtadm-join"},"Join Nodes")),(0,o.kt)("p",null,"End users can join nodes into an OpenYurt cluster directly with ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation/yurtadm-join#1-joining-nodes-from-scratch"},(0,o.kt)("inlineCode",{parentName:"a"},"yurtadm join")," command")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation/yurtadm-join#2-install-openyurt-node-components"},"install OpenYurt node components manually")," on the already joined node."))}m.isMDXComponent=!0}}]);