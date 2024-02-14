"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[72611],{93978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var o=n(85893),r=n(11151);const i={},s=void 0,l={id:"reference/yurtadm/yurtadm_completion_zsh",title:"yurtadm_completion_zsh",description:"yurtadm completion zsh",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.4/reference/yurtadm/yurtadm_completion_zsh.md",sourceDirName:"reference/yurtadm",slug:"/reference/yurtadm/yurtadm_completion_zsh",permalink:"/zh/docs/reference/yurtadm/yurtadm_completion_zsh",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/reference/yurtadm/yurtadm_completion_zsh.md",tags:[],version:"v1.4",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1707950047,formattedLastUpdatedAt:"2024\u5e742\u670814\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"yurtadm_completion_powershell",permalink:"/zh/docs/reference/yurtadm/yurtadm_completion_powershell"},next:{title:"yurtadm_docs",permalink:"/zh/docs/reference/yurtadm/yurtadm_docs"}},d={},a=[{value:"yurtadm completion zsh",id:"yurtadm-completion-zsh",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Linux:",id:"linux",level:4},{value:"macOS:",id:"macos",level:4},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 12-Jun-2023",id:"auto-generated-by-spf13cobra-on-12-jun-2023",level:6}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h6:"h6",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"yurtadm-completion-zsh",children:"yurtadm completion zsh"}),"\n",(0,o.jsx)(t.p,{children:"Generate the autocompletion script for zsh"}),"\n",(0,o.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,o.jsx)(t.p,{children:"Generate the autocompletion script for the zsh shell."}),"\n",(0,o.jsx)(t.p,{children:"If shell completion is not already enabled in your environment you will need\nto enable it.  You can execute the following once:"}),"\n",(0,o.jsx)(t.p,{children:'echo "autoload -U compinit; compinit" >> ~/.zshrc'}),"\n",(0,o.jsx)(t.p,{children:"To load completions in your current shell session:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"\tsource <(yurtadm completion zsh)\n"})}),"\n",(0,o.jsx)(t.p,{children:"To load completions for every new session, execute once:"}),"\n",(0,o.jsx)(t.h4,{id:"linux",children:"Linux:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'\tyurtadm completion zsh > "${fpath[1]}/_yurtadm"\n'})}),"\n",(0,o.jsx)(t.h4,{id:"macos",children:"macOS:"}),"\n",(0,o.jsx)(t.p,{children:"yurtadm completion zsh > $(brew --prefix)/share/zsh/site-functions/_yurtadm"}),"\n",(0,o.jsx)(t.p,{children:"You will need to start a new shell for this setup to take effect."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"yurtadm completion zsh [flags]\n"})}),"\n",(0,o.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"  -h, --help              help for zsh\n      --no-descriptions   disable completion descriptions\n"})}),"\n",(0,o.jsx)(t.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"      --add_dir_header                   If true, adds the file directory to the header of the log messages\n      --alsologtostderr                  log to standard error as well as files\n      --kubeconfig string                The path to the kubeconfig file\n      --log_backtrace_at traceLocation   when logging hits line file:N, emit a stack trace (default :0)\n      --log_dir string                   If non-empty, write log files in this directory\n      --log_file string                  If non-empty, use this log file\n      --log_file_max_size uint           Defines the maximum size a log file can grow to. Unit is megabytes. If the value is 0, the maximum file size is unlimited. (default 1800)\n      --logtostderr                      log to standard error instead of files (default true)\n      --one_output                       If true, only write logs to their native severity level (vs also writing to each lower severity level)\n      --skip_headers                     If true, avoid header prefixes in the log messages\n      --skip_log_headers                 If true, avoid headers when opening log files\n      --stderrthreshold severity         logs at or above this threshold go to stderr (default 2)\n  -v, --v Level                          number for the log level verbosity\n      --vmodule moduleSpec               comma-separated list of pattern=N settings for file-filtered logging\n"})}),"\n",(0,o.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/zh/docs/reference/yurtadm/yurtadm_completion",children:"yurtadm completion"}),"\t - Generate the autocompletion script for the specified shell"]}),"\n"]}),"\n",(0,o.jsx)(t.h6,{id:"auto-generated-by-spf13cobra-on-12-jun-2023",children:"Auto generated by spf13/cobra on 12-Jun-2023"})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{a:()=>s});var o=n(67294);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);