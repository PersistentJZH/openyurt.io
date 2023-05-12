"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[3053],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={title:"CoreDNS \u5b89\u88c5\u76f8\u5173\u914d\u7f6e\u8c03\u6574"},s=void 0,l={unversionedId:"installation/coredns-prepare",id:"installation/coredns-prepare",title:"CoreDNS \u5b89\u88c5\u76f8\u5173\u914d\u7f6e\u8c03\u6574",description:"1.\u80cc\u666f\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/coredns-prepare.md",sourceDirName:"installation",slug:"/installation/coredns-prepare",permalink:"/zh/docs/next/installation/coredns-prepare",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/coredns-prepare.md",tags:[],version:"current",lastUpdatedBy:"wesleysu",lastUpdatedAt:1683876062,formattedLastUpdatedAt:"2023\u5e745\u670812\u65e5",frontMatter:{title:"CoreDNS \u5b89\u88c5\u76f8\u5173\u914d\u7f6e\u8c03\u6574"}},i={},p=[{value:"1.\u80cc\u666f\u8bf4\u660e",id:"1\u80cc\u666f\u8bf4\u660e",level:2},{value:"2 CoreDNS \u652f\u6301\u670d\u52a1\u6d41\u91cf\u62d3\u6251",id:"2-coredns-\u652f\u6301\u670d\u52a1\u6d41\u91cf\u62d3\u6251",level:3},{value:"3 CoreDNS DaemonSet\u90e8\u7f72",id:"3-coredns-daemonset\u90e8\u7f72",level:3},{value:"4 \u51cf\u5c11CoreDNS Deployment \u526f\u672c\u6570",id:"4-\u51cf\u5c11coredns-deployment-\u526f\u672c\u6570",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1\u80cc\u666f\u8bf4\u660e"},"1.\u80cc\u666f\u8bf4\u660e"),(0,o.kt)("p",null,"\u4e00\u822c\u573a\u666f\u4e0b\uff0cCoreDNS\u662f\u4ee5Deployment\u5f62\u5f0f\u90e8\u7f72\uff0c\u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\uff0c\u901a\u8fc7Raven\u63d0\u4f9b\u7684VPN\u96a7\u9053\uff0c\u57df\u540d\u89e3\u6790\u8bf7\u6c42\u8de8",(0,o.kt)("inlineCode",{parentName:"p"},"NodePool"),"\u53ef\u80fd\u4f1a\u5e26\u6765\u5ef6\u8fdf\u6216\u8005\u8d85\u65f6\u5931\u8d25\u3002\u56e0\u6b64\u4e5f\u63a8\u8350\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Daemonset"),"\u6216\u8005",(0,o.kt)("inlineCode",{parentName:"p"},"YurtAppDaemon"),"\u5f62\u5f0f\u6765\u90e8\u7f72CoreDNS\uff0c\u540c\u65f6kube-dns service\u6d41\u91cf\u62d3\u6251\u914d\u7f6e\u6210NodePool/Hostname, \u4ece\u800c\u89e3\u51b3\u57df\u540d\u89e3\u6790\u5ef6\u8fdf\u95ee\u9898\u3002"),(0,o.kt)("h3",{id:"2-coredns-\u652f\u6301\u670d\u52a1\u6d41\u91cf\u62d3\u6251"},"2 CoreDNS \u652f\u6301\u670d\u52a1\u6d41\u91cf\u62d3\u6251"),(0,o.kt)("p",null,"\u589e\u52a0annotation\uff0c\u5229\u7528OpenYurt\u4e2dYurthub\u7684\u8fb9\u7f18\u6570\u636e\u8fc7\u6ee4\u673a\u5236\u5b9e\u73b0\u670d\u52a1\u6d41\u91cf\u62d3\u6251\u80fd\u529b\uff0c\u786e\u4fdd\u8282\u70b9\u4e0a\u7684\u57df\u540d\u89e3\u6790\u8bf7\u6c42\u53ea\u4f1a\u53d1\u7ed9\u540c\u4e00\u8282\u70b9\u6c60\u5185\u7684CoreDNS\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5229\u7528openyurt\u5b9e\u73b0endpoint\u8fc7\u6ee4\nkubectl annotate svc kube-dns -n kube-system openyurt.io/topologyKeys='openyurt.io/nodepool'\n")),(0,o.kt)("p",null,"\u4fee\u6539\u540e\u6548\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    openyurt.io/topologyKeys: openyurt.io/nodepool\n    prometheus.io/port: "9153"\n    prometheus.io/scrape: "true"\n  labels:\n    k8s-app: kube-dns\n    kubernetes.io/cluster-service: "true"\n    kubernetes.io/name: KubeDNS\n  name: kube-dns\n  namespace: kube-system\nspec:\n  clusterIP: 10.254.0.10\n  ports:\n  - name: dns\n    port: 53\n    protocol: UDP\n    targetPort: 53\n  - name: dns-tcp\n    port: 53\n    protocol: TCP\n    targetPort: 53\n  - name: metrics\n    port: 9153\n    protocol: TCP\n    targetPort: 9153\n  selector:\n    k8s-app: kube-dns\n  sessionAffinity: None\n  type: ClusterIP\n')),(0,o.kt)("h3",{id:"3-coredns-daemonset\u90e8\u7f72"},"3 CoreDNS DaemonSet\u90e8\u7f72"),(0,o.kt)("p",null,"\u5982\u679cCoreDNS\u539f\u672c\u4f7f\u7528DaemonSet\u90e8\u7f72\uff0c\u53ef\u4ee5\u624b\u5de5\u8fdb\u884c\u5982\u4e0b\u8c03\u6574(CoreDNS\u7684\u955c\u50cf\u53ef\u8c03\u6574\u4e3a\u81ea\u5df1\u7684\u7248\u672c)\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  labels:\n    k8s-app: kube-dns\n  name: coredns\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n      k8s-app: kube-dns\n  template:\n    metadata:\n      labels:\n        k8s-app: kube-dns\n    spec:\n      containers:\n      - args:\n        - -conf\n        - /etc/coredns/Corefile\n        image: registry.aliyuncs.com/google_containers/coredns:1.7.0\n        livenessProbe:\n          failureThreshold: 5\n          httpGet:\n            path: /health\n            port: 8080\n            scheme: HTTP\n          initialDelaySeconds: 60\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 5\n        name: coredns\n        ports:\n        - containerPort: 53\n          name: dns\n          protocol: UDP\n        - containerPort: 53\n          name: dns-tcp\n          protocol: TCP\n        - containerPort: 9153\n          name: metrics\n          protocol: TCP\n        readinessProbe:\n          failureThreshold: 3\n          httpGet:\n            path: /ready\n            port: 8181\n            scheme: HTTP\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 1\n        resources:\n          limits:\n            memory: 170Mi\n          requests:\n            cpu: 100m\n            memory: 70Mi\n        securityContext:\n          allowPrivilegeEscalation: false\n          capabilities:\n            add:\n            - NET_BIND_SERVICE\n            drop:\n            - all\n          readOnlyRootFilesystem: true\n        volumeMounts:\n        - mountPath: /etc/coredns\n          name: config-volume\n          readOnly: true\n      dnsPolicy: Default\n      nodeSelector:\n        kubernetes.io/os: linux\n      priorityClassName: system-cluster-critical\n      serviceAccountName: coredns\n      tolerations:\n      - operator: Exists\n      - key: CriticalAddonsOnly\n        operator: Exists\n      - effect: NoSchedule\n        key: node-role.kubernetes.io/master\n      volumes:\n      - configMap:\n          defaultMode: 420\n          items:\n          - key: Corefile\n            path: Corefile\n          name: coredns\n        name: config-volume\n")),(0,o.kt)("h3",{id:"4-\u51cf\u5c11coredns-deployment-\u526f\u672c\u6570"},"4 \u51cf\u5c11CoreDNS Deployment \u526f\u672c\u6570"),(0,o.kt)("p",null,"\u5982\u679ck8s\u4e0d\u662f\u7528Deployment\u90e8\u7f72\uff0c\u53ef\u4ee5\u4e0d\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl scale --replicas=0 deployment/coredns -n kube-system\n")))}u.isMDXComponent=!0}}]);