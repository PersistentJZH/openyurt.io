"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[87585],{94933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(85893),o=n(11151);const i={},s=void 0,a={id:"reference/yurtadm/yurtadm_join",title:"yurtadm_join",description:"yurtadm join",source:"@site/versioned_docs/version-v1.2/reference/yurtadm/yurtadm_join.md",sourceDirName:"reference/yurtadm",slug:"/reference/yurtadm/yurtadm_join",permalink:"/docs/v1.2/reference/yurtadm/yurtadm_join",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/reference/yurtadm/yurtadm_join.md",tags:[],version:"v1.2",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1724188058e3,frontMatter:{},sidebar:"docs",previous:{title:"yurtadm_init",permalink:"/docs/v1.2/reference/yurtadm/yurtadm_init"},next:{title:"yurtadm_reset",permalink:"/docs/v1.2/reference/yurtadm/yurtadm_reset"}},d={},l=[{value:"yurtadm join",id:"yurtadm-join",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 18-Jan-2023",id:"auto-generated-by-spf13cobra-on-18-jan-2023",level:6}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h6:"h6",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"yurtadm-join",children:"yurtadm join"}),"\n",(0,r.jsx)(t.p,{children:"Run this on any machine you wish to join an existing cluster"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"yurtadm join [api-server-endpoint] [flags]\n"})}),"\n",(0,r.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'      --cri-socket string                             Path to the CRI socket to connect (default "/var/run/dockershim.sock")\n      --discovery-token-ca-cert-hash strings          For token-based discovery, validate that the root CA public key matches this hash (format: "<type>:<value>").\n      --discovery-token-unsafe-skip-ca-verification   For token-based discovery, allow joining without --discovery-token-ca-cert-hash pinning.\n  -h, --help                                          help for join\n      --ignore-preflight-errors strings               A list of checks whose errors will be shown as warnings. Example: \'IsPrivilegedUser,Swap\'. Value \'all\' ignores errors from all checks.\n      --kubernetes-resource-server string             Sets the address for downloading k8s node resources (default "dl.k8s.io")\n      --node-labels string                            Sets the labels for joining node\n      --node-name string                              Specify the node name. if not specified, hostname will be used.\n      --node-type string                              Sets the node is edge or cloud (default "edge")\n      --organizations string                          Organizations that will be added into hub\'s client certificate\n      --pause-image string                            Sets the image version of pause container (default "registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.2")\n      --reuse-cni-bin                                 Whether to reuse local CNI binaries or to download new ones\n      --token string                                  Use this token for both discovery-token and tls-bootstrap-token when those values are not provided.\n      --yurthub-image string                          Sets the image version of yurthub component (default "registry.cn-hangzhou.aliyuncs.com/openyurt/yurthub:latest")\n      --yurthub-server-addr string                    Sets the address for yurthub server addr (default "127.0.0.1")\n'})}),"\n",(0,r.jsx)(t.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"      --add_dir_header                   If true, adds the file directory to the header of the log messages\n      --alsologtostderr                  log to standard error as well as files\n      --kubeconfig string                The path to the kubeconfig file\n      --log_backtrace_at traceLocation   when logging hits line file:N, emit a stack trace (default :0)\n      --log_dir string                   If non-empty, write log files in this directory\n      --log_file string                  If non-empty, use this log file\n      --log_file_max_size uint           Defines the maximum size a log file can grow to. Unit is megabytes. If the value is 0, the maximum file size is unlimited. (default 1800)\n      --logtostderr                      log to standard error instead of files (default true)\n      --one_output                       If true, only write logs to their native severity level (vs also writing to each lower severity level)\n      --skip_headers                     If true, avoid header prefixes in the log messages\n      --skip_log_headers                 If true, avoid headers when opening log files\n      --stderrthreshold severity         logs at or above this threshold go to stderr (default 2)\n  -v, --v Level                          number for the log level verbosity\n      --vmodule moduleSpec               comma-separated list of pattern=N settings for file-filtered logging\n"})}),"\n",(0,r.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/v1.2/reference/yurtadm/",children:"yurtadm"}),"\t - yurtadm administers the yurt cluster"]}),"\n"]}),"\n",(0,r.jsx)(t.h6,{id:"auto-generated-by-spf13cobra-on-18-jan-2023",children:"Auto generated by spf13/cobra on 18-Jan-2023"})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(67294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);