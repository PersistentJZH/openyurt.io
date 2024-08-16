"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[52295],{3944:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(85893),r=t(11151);const s={title:"How to Build and Test"},l=void 0,i={id:"developer-manuals/how-to-build-and-test",title:"How to Build and Test",description:"In OpenYurt repository, currently(v0.5.0, commit",source:"@site/versioned_docs/version-v0.6.0/developer-manuals/how-to-build-and-test.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/how-to-build-and-test",permalink:"/docs/v0.6.0/developer-manuals/how-to-build-and-test",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/how-to-build-and-test.md",tags:[],version:"v0.6.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1723842367e3,frontMatter:{title:"How to Build and Test"},sidebar:"docs",previous:{title:"Cloud-Edge-Device DevOps Collaboration",permalink:"/docs/v0.6.0/best-practices/practices-1"},next:{title:"Local Up OpenYurt",permalink:"/docs/v0.6.0/developer-manuals/local-up-openyurt"}},a={},d=[{value:"How to build",id:"how-to-build",level:2},{value:"Build based on the loacl platform",id:"build-based-on-the-loacl-platform",level:3},{value:"Cross Compilation",id:"cross-compilation",level:3},{value:"Mac",id:"mac",level:4},{value:"Windows",id:"windows",level:4},{value:"Build images manually",id:"build-images-manually",level:3},{value:"yurtctl(yurt-servant) dockerfile",id:"yurtctlyurt-servant-dockerfile",level:4},{value:"yurt-node-servant dockerfile",id:"yurt-node-servant-dockerfile",level:4},{value:"dockerfiles of other components",id:"dockerfiles-of-other-components",level:4},{value:"How to test",id:"how-to-test",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"e2e test",id:"e2e-test",level:3},{value:"Run e2e test manually",id:"run-e2e-test-manually",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt",children:"OpenYurt repository"}),", currently(v0.5.0, ",(0,o.jsx)(n.code,{children:"commit: ef26d5c6"}),") 5 components are contained, including:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"yurthub"}),"\n",(0,o.jsx)(n.li,{children:"yurt-controller-manager"}),"\n",(0,o.jsx)(n.li,{children:"yurt-tunnel-server"}),"\n",(0,o.jsx)(n.li,{children:"yurt-tunnel-agent"}),"\n",(0,o.jsx)(n.li,{children:"yurtctl"}),"\n",(0,o.jsx)(n.li,{children:"yurt-node-servant"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This artical will give you an introduction of how to build and test the code after development of above components."}),"\n",(0,o.jsx)(n.h2,{id:"how-to-build",children:"How to build"}),"\n",(0,o.jsxs)(n.p,{children:["Many approaches of building OpenYurt have been provided in the ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/blob/master/Makefile",children:"Makefile"}),". The most often used approach is ",(0,o.jsx)(n.code,{children:"make release"}),", which will compile the code and build images for you. Here's the use case:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'make release WHAT="${components[@]}" ARCH="${archs[@]}" REGION="${your_region}"\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"WHAT"})," represents components that you want to build, as mentioned at the beginning of the artical.",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"ARCH"})," represents archtectures of target platforms, including ",(0,o.jsx)(n.code,{children:"amd64"}),", ",(0,o.jsx)(n.code,{children:"arm"})," and ",(0,o.jsx)(n.code,{children:"arm64"}),".",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"REGION"})," will affect the ",(0,o.jsx)(n.code,{children:"GOPROXY"})," when compiling the code. Currently, ",(0,o.jsx)(n.code,{children:"cn"})," and ",(0,o.jsx)(n.code,{children:"us"})," are supported, representing using  ",(0,o.jsx)(n.code,{children:"GOPROXY=https://goproxy.cn"})," and ",(0,o.jsx)(n.code,{children:"GOPROXY=https://proxy.golang.org"})," respectively. Its default value is ",(0,o.jsx)(n.code,{children:"us"}),". It's recommanded that developers in China should always set ",(0,o.jsx)(n.code,{children:"REGION=cn"})," explicitly to ensure the successful build."]}),"\n",(0,o.jsx)(n.p,{children:"eg."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'make release WHAT="yurtctl yurthub" ARCH="arm64 amd64" REGION=cn\n'})}),"\n",(0,o.jsxs)(n.p,{children:["After the successful build, we can find images and binaries under ",(0,o.jsx)(n.code,{children:"_output"})," folder, dockerfiles under ",(0,o.jsx)(n.code,{children:"dockerbuild"})," folder. All of these images are built based on the Linux platform. Currently, we cannot change the target OS platform. If you actually want to do it, please refer to the following approach."]}),"\n",(0,o.jsxs)(n.p,{children:["Another build approach is provided in Makefile, using ",(0,o.jsx)(n.code,{children:"make build"})," command. With this command, we can compile the code for any archtecture and any platform. We will take ",(0,o.jsx)(n.code,{children:"yurtctl"})," as an example, and other components can be built in the same way."]}),"\n",(0,o.jsx)(n.h3,{id:"build-based-on-the-loacl-platform",children:"Build based on the loacl platform"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make build WHAT=yurtctl\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This command will build the yurtctl binary according to the archtecture and OS of your local host. The output binary can be found under the ",(0,o.jsx)(n.code,{children:"_output"})," folder."]}),"\n",(0,o.jsx)(n.h3,{id:"cross-compilation",children:"Cross Compilation"}),"\n",(0,o.jsx)(n.h4,{id:"mac",children:"Mac"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"GOOS=${target_os} GOARCH=${target_arch} CGO_ENABLED=0 make build WHAT=yurtctl\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This command will enable the built yurtctl binary to run on any platform as you want, through setting the ",(0,o.jsx)(n.code,{children:"target_os"})," and ",(0,o.jsx)(n.code,{children:"target_arch"}),". To avoid some problems of compatibility, we'd better set ",(0,o.jsx)(n.code,{children:"CGO_ENABLED=0"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"windows",children:"Windows"}),"\n",(0,o.jsxs)(n.p,{children:["Because there's no make command on Windows(if you don't have Cygwin), we have to run ",(0,o.jsx)(n.code,{children:"go build"})," manually to compile the code. Steps in powershell(run as administrator) are as follows:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["prepare environment variables\nReplace ",(0,o.jsx)(n.code,{children:"target_os"})," and ",(0,o.jsx)(n.code,{children:"target_arch"})," as what you want."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"$Env:GOOS = $Env:target_os\n$Env:GOARCH = $Env:target_arch\n$Env:CGO_ENABLED = 0\n$Env:GOLDFLAGS = \"-s -w \n-X github.com/openyurtio/openyurt/pkg/projectinfo.projectPrefix=yurt\n-X github.com/openyurtio/openyurt/pkg/projectinfo.labelPrefix=openyurt.io\n-X github.com/openyurtio/openyurt/pkg/projectinfo.gitVersion=$(git describe --abbrev=0)\n-X github.com/openyurtio/openyurt/pkg/projectinfo.gitCommit=$(git rev-parse HEAD)\n-X github.com/openyurtio/openyurt/pkg/projectinfo.buildDate=$(date -u +'%Y-%m-%dT%H:%M:%SZ')\"\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["run go build\nRun ",(0,o.jsx)(n.code,{children:"go build"})," to compile the code, with the ",(0,o.jsx)(n.code,{children:"-ldflags=$Env:GOLDFLAGS"})," option."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"go build -ldflags=$Env:GOLDFLAGS cmd/yurtctl/yurtctl.go\n"})}),"\n",(0,o.jsx)(n.h3,{id:"build-images-manually",children:"Build images manually"}),"\n",(0,o.jsxs)(n.p,{children:["In this section, we can find the dockerfile for each component. It will help you use ",(0,o.jsx)(n.code,{children:"docker build"})," to build images. Here's the table giving base images ",(0,o.jsx)(n.code,{children:"yurtctl"})," and ",(0,o.jsx)(n.code,{children:"yurt-node-servant"})," will use."]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Arch"}),(0,o.jsx)(n.th,{children:"Base Image"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"amd64"}),(0,o.jsx)(n.td,{children:"amd64/alpine:3.9"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"arm64"}),(0,o.jsx)(n.td,{children:"arm64v8/alpine:3.9"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"arm"}),(0,o.jsx)(n.td,{children:"arm32v7/alpine:3.9"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"yurtctlyurt-servant-dockerfile",children:"yurtctl(yurt-servant) dockerfile"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dockerfile",children:"FROM ${baseimage}\nADD yurtctl /usr/local/bin/yurtctl\n"})}),"\n",(0,o.jsx)(n.h4,{id:"yurt-node-servant-dockerfile",children:"yurt-node-servant dockerfile"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dockerfile",children:"FROM ${baseimage}\nADD entry.sh /usr/local/bin/entry.sh\nRUN chmod +x /usr/local/bin/entry.sh\nADD yurt-node-servant /usr/local/bin/node-servant\n"})}),"\n",(0,o.jsx)(n.h4,{id:"dockerfiles-of-other-components",children:"dockerfiles of other components"}),"\n",(0,o.jsxs)(n.p,{children:["Other components use the different base image. We use ",(0,o.jsx)(n.code,{children:"${arch}"})," to represent the target arch(including amd64, arm and arm64), ",(0,o.jsx)(n.code,{children:"${component}"})," to represent the component to built(as mentioned at the beginning of this artical). Then the dockerfile is as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dockerfile",children:'FROM k8s.gcr.io/debian-iptables-${arch}:v11.0.2\nCOPY ${component} /usr/local/bin/${component}\nENTRYPOINT ["/usr/local/bin/${component}"]\n'})}),"\n",(0,o.jsx)(n.h2,{id:"how-to-test",children:"How to test"}),"\n",(0,o.jsx)(n.p,{children:"There are tests of two types: unit test and e2e test."}),"\n",(0,o.jsx)(n.h3,{id:"unit-test",children:"Unit test"}),"\n",(0,o.jsxs)(n.p,{children:["In unit test, it will run the test code under cmd and pkg folder, whose names have the suffix of ",(0,o.jsx)(n.code,{children:"_test.go"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,o.jsx)(n.h3,{id:"e2e-test",children:"e2e test"}),"\n",(0,o.jsx)(n.p,{children:"This section shows how to build and run the e2e test for OpenYurt. The test for node autonomy is still under development."}),"\n",(0,o.jsxs)(n.p,{children:["If you have already set up the OpenYurt cluster, you can immediately follow the steps to test your cluster. Otherwise, you can quickly set up the OpenYurt at your local host with instructions at ",(0,o.jsx)(n.a,{href:"/docs/v0.6.0/developer-manuals/local-up-openyurt",children:"Local Up OpenYurt"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"You can use the following command to run e2e tests. Assuming that you've entered the openyurt work path, run"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make e2e-tests\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This command will help you run e2e tests on OpenYurt cluster. It will use kubeconfig at ",(0,o.jsx)(n.code,{children:"${KUBECONFIG}"}),", default path is ",(0,o.jsx)(n.code,{children:"$HOME/.kube/config"}),". If there's no config found, it will end with error. The test result will show on the stdout:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Ran 5 of 5 Specs in 82.279 seconds\nSUCCESS! -- 5 Passed | 0 Failed | 0 Pending | 0 Skipped\nPASS\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you need further configuration for yurt-e2e-test to specify its behavior(such as running autonomy e2e test case), you can manually run the e2e test as we will introduce in the next section."}),"\n",(0,o.jsx)(n.h3,{id:"run-e2e-test-manually",children:"Run e2e test manually"}),"\n",(0,o.jsx)(n.p,{children:"Let's build the e2e binary yurt-e2e-test as follows:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"entering the openyurt work path:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ cd openyurt\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"building the binary:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ make e2e\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then, you can use yurt-e2e-test binary to test OpenYurt."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"If you run yurt-e2e-test without node autonomy test, such as:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ ./_output/bin/linux/amd64/yurt-e2e-test --kubeconfig=$HOME/.kube/config  --report-dir=./\n"})}),"\n",(0,o.jsx)(n.p,{children:"This will run some basic tests after k8s is converted to openyurt. It refers to the operation of namespace and pod."}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"If you run yurt-e2e-test, and want to test yurt node autonomy on local machine.In this way, it depends on yourself to restart node. And yurt-e2e-test will wait for restarting node and checking pod status to test yurt node autonomy."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ ./_output/bin/linux/amd64/yurt-e2e-test --kubeconfig=$HOME/.kube/config  --report-dir=./  --enable-yurt-autonomy=true\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"If you want to test yurt node autonomy on aliyun ecs or aliyun ens with binary of yurt-e2e-test, TBD."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Note:",(0,o.jsx)(n.br,{}),"\n","The path of yurt-e2e-test binary depends on the platform of your local host."]}),"\n",(0,o.jsxs)(n.p,{children:["Finally, you can check test result in stdout or in file yurt-e2e-test-report_01.xml(specified by the ",(0,o.jsx)(n.code,{children:"--report-dir"})," option)."]}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:['"go: github.com...unknown revision xxx" occurs during build',(0,o.jsx)(n.br,{}),"\n","It's often caused for too low git version on your host. You can try to update git."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:['"unsupported GOOS/GOARCH pair xxx/xxx" occurs during compilation',(0,o.jsx)(n.br,{}),"\n","Not all GOOS/GOARCH pairs are supported by go, such as go1.17.3 cannot support windows/arm64. You can check all supported pairs through ",(0,o.jsx)(n.code,{children:"go tool dist list"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:['"cannot execute binary file: Exec format error" occurs when running binaries built on other platform.',(0,o.jsx)(n.br,{}),"\n","It's often caused by an unsuccessful cross compilation, and the OS cannot recoginze the file format. When you run cross compilation on Windows, please ensure that you run it as an administractor."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var o=t(67294);const r={},s=o.createContext(r);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);