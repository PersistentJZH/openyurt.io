"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[68966],{10258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var o=n(85893),i=n(11151);const r={title:"YurtIoTDock"},s=void 0,d={id:"core-concepts/yurt-iot-dock",title:"YurtIoTDock",description:"Background",source:"@site/versioned_docs/version-v1.4/core-concepts/yurt-iot-dock.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurt-iot-dock",permalink:"/docs/core-concepts/yurt-iot-dock",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-iot-dock.md",tags:[],version:"v1.4",lastUpdatedBy:"Lixx",lastUpdatedAt:1713521278e3,frontMatter:{title:"YurtIoTDock"},sidebar:"docs",previous:{title:"Raven",permalink:"/docs/core-concepts/raven"},next:{title:"YurtCoordinator",permalink:"/docs/core-concepts/yurt-coordinator"}},c={},a=[{value:"Background",id:"background",level:2},{value:"Edge device management platform",id:"edge-device-management-platform",level:2},{value:"PlatformAdmin",id:"platformadmin",level:3},{value:"AutoCollector",id:"autocollector",level:3},{value:"Version of PlatformAdmin",id:"version-of-platformadmin",level:3},{value:"Edge device synchronization component",id:"edge-device-synchronization-component",level:2},{value:"device management related CRDs",id:"device-management-related-crds",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Version of Yurt-IoT-Dock",id:"version-of-yurt-iot-dock",level:3},{value:"Tutorial",id:"tutorial",level:3},{value:"References",id:"references",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,o.jsx)(t.p,{children:'OpenYurt has been designed to meet various DevOps requirements against typical edge infrastructures. It provides the same user experience for managing the edge applications as if they were running in the cloud infrastructure.\nHowever, when the related management capability is extended to the edge "device" layer, the following problems may occur:'}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"In order to support various edge devices, the existing framework must develop special adapters for each category of devices;"}),"\n",(0,o.jsx)(t.li,{children:"When adapting Kubernetes to the edge computing environments, existing solutions either change the system architecture or modify core components (such as kubelet) significantly."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:'At the same time, we saw a lot of great edge device management platforms emerging in the community\uff0csuch as EdgeX Foundry. inspiring by the Unix philosophy, "Do one thing and do it well",\nwe believe that Kubernetes should focus on managing computing resources while edge devices management can be done by adopting existing edge computing platforms.'}),"\n",(0,o.jsx)(t.p,{children:"A overall architecture about cloud-edge-device depicted below"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(72084).Z+"",width:"887",height:"821"})}),"\n",(0,o.jsx)(t.p,{children:"The communication range of edge devices is usually limited to a certain network area. Therefore, edge nodes in the same network area can be divided into a nodepool. So a device management platform and a yurt-iot-dock can be deployed in each nodepool:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"When communicating with kube-apiserver on the cloud, Yurt-Device-Controller only watches the device objects in its nodepool and synchronizes the updated specs to the corresponding devices through the corresponding device management platform."}),"\n",(0,o.jsx)(t.li,{children:"When communicating with the device management platform\uff0cYurtHub, NodePool, and UnitedDeployment capabilities are reused. The device information in the node pool is abstracted into device, deviceService, and deviceProfile objects and synchronized to the cloud."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"edge-device-management-platform",children:"Edge device management platform"}),"\n",(0,o.jsx)(t.p,{children:"EdgeX Foundry is a powerful, ecosystem-supported, edge computing platform for the Internet of Things (IoT) that is plug-and-play and open-source. It offers a high level of flexibility and scalability, significantly reducing the complexity of interoperability between applications and edge devices, sensors, and other hardware. OpenYurt has collaborated with the EdgeX Foundry community and achieved deep integration in version 1.4.0. In addition to yurt-iot-dock, OpenYurt also provides the PlatformAdmin CRD to simplify the deployment of EdgeX Foundry in edge scenarios."}),"\n",(0,o.jsx)(t.p,{children:"Combined with the above cloud side architecture diagram, the architecture diagram of OpenYurt and EdgeX Foundry integration is as follows:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(25789).Z+"",width:"887",height:"821"})}),"\n",(0,o.jsx)(t.h3,{id:"platformadmin",children:"PlatformAdmin"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"In previous versions, OpenYurt introduced a controller called yurt-edgex-controller to manage EdgeX Custom Resources (CRs). EdgeX CR serves as an abstraction for deploying EdgeX Foundry within OpenYurt. Users can manipulate CRs to manage the deployment, updates, and deletion of EdgeX without the need for complex YAML files or Helm Charts. By creating an EdgeX CR, users can leverage yurt-edgex-manager, which deploys EdgeX based on the CR's version and the corresponding Nodepool's name. Within a cluster, users can deploy multiple instances of EdgeX based on the number of Nodepools. Each EdgeX instance can be configured with a specific version and a set of EdgeX services."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Starting from OpenYurt v1.4.0, the yurt-edgex-controller has been merged into yurt-manager. Users no longer need to deploy any additional components separately. By installing yurt-manager, users can gain access to all the capabilities for managing edge devices without any additional steps."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(58267).Z+"",width:"1969",height:"1347"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"PlatformAdmin"}),"\uff1aPlatformAdmin has evolved from the previous versions of the EdgeX Custom Resource Definition (CRD) and serves as an abstraction for the edge device management platform. Users can simply provide input such as the platform to be integrated, the name of the NodePool to be deployed, the desired version, and other relevant details. This allows for the deployment of a complete edge device management platform within the specified NodePool."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"AutoCollector"}),"\uff1aOpenYurt relies on the AutoCollector tool for automatic adaptation and integration with EdgeX within its internal implementation. This tool has been utilized since the Jakarta release and continues to be used in the latest release, Minnesota. Going forward, OpenYurt will maintain its dependency on AutoCollector for rapid adaptation to new versions of EdgeX. This ensures efficient integration and compatibility between OpenYurt and EdgeX in future releases."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Component Mechanism"}),"\uff1aIn the v1.4.0 release, we have further enhanced the integration with EdgeX. The current PlatformAdmin Custom Resource (CR) supports one-click configuration of optional components. You can refer to the ",(0,o.jsx)(t.a,{href:"/docs/reference/iot/components",children:"Components Documentation"})," for the component names to be used in the configuration. This allows for easier customization and selection of specific components within the EdgeX ecosystem through the PlatformAdmin CR."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"PlatformAdminFramework"}),"\uff1aIn the v1.4.0 release, we introduced the Component mechanism to cater to entry-level users. Additionally, to accommodate advanced users who require customized configurations, we also provided a Framework mechanism. The configuration files corresponding to PlatformAdmin are stored in the Kubernetes cluster as ConfigMaps. Advanced users can simply modify the contents of the ConfigMap, following the native Kubernetes specifications, to customize their edge device management platform according to their specific needs."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"In OpenYurt, EdgeX services are exposed to the outside world through Kubernetes Services. Despite different EdgeX instances using the same Kubernetes service name, ServiceTopology ensures that EdgeX components can only access other components belonging to the same EdgeX instance, preventing any cross-access scenarios."}),"\n",(0,o.jsx)(t.p,{children:"The platformadmin-controller leverages the capabilities of YurtAppSet to deploy EdgeX components within a NodePool. This allows for the deployment and management of EdgeX components specifically within the designated NodePool, ensuring proper isolation and control within the OpenYurt environment."}),"\n",(0,o.jsx)(t.h3,{id:"autocollector",children:"AutoCollector"}),"\n",(0,o.jsx)(t.p,{children:"AutoCollector is a component responsible for automatically collecting and synchronizing information about edge components. The platformadmin-controller reads standardized configuration files collected by AutoCollector and uses them as templates to deploy EdgeX components. When a new version of EdgeX becomes available, OpenYurt automatically synchronizes with it, reducing the manual effort required for frequent adaptation to new versions. Additionally, AutoCollector is responsible for converting single-architecture images of EdgeX components into multi-architecture images and synchronizing them to the OpenYurt repository. This ensures compatibility and availability of EdgeX components across different architectures in the OpenYurt environment."}),"\n",(0,o.jsx)(t.p,{children:"With the help of AutoCollector, OpenYurt has already achieved support for all versions of EdgeX starting from Hanoi. In the future, AutoCollector will continue to be utilized to quickly keep pace with updates in EdgeX versions. This ensures that OpenYurt remains compatible with the latest releases of EdgeX and can efficiently adapt to any changes or enhancements introduced in subsequent versions."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(38788).Z+"",width:"1734",height:"1348"})}),"\n",(0,o.jsx)(t.h3,{id:"version-of-platformadmin",children:"Version of PlatformAdmin"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Version"}),(0,o.jsx)(t.th,{children:"Image"}),(0,o.jsx)(t.th,{children:"Release Date"}),(0,o.jsx)(t.th,{children:"Changes"}),(0,o.jsx)(t.th,{children:"Remark"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"v0.1.0"}),(0,o.jsx)(t.td,{children:"openyurt/yurt-edgex-manager:0.1.0"}),(0,o.jsx)(t.td,{children:"2021.09"}),(0,o.jsx)(t.td,{children:"First Release"}),(0,o.jsx)(t.td,{children:"-"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"v0.2.0"}),(0,o.jsx)(t.td,{children:"openyurt/yurt-edgex-manager:0.2.0"}),(0,o.jsx)(t.td,{children:"2022.05"}),(0,o.jsx)(t.td,{children:"Support EdgeX LTS Version"}),(0,o.jsx)(t.td,{children:"-"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"v1.4.0"}),(0,o.jsxs)(t.td,{children:["openyurt/yurt-manager",":v1",".4.0"]}),(0,o.jsx)(t.td,{children:"2023.09"}),(0,o.jsx)(t.td,{children:"All versions from 2.x to 3.0 are supported"}),(0,o.jsx)(t.td,{children:"Merge yurt-edgex-manager into yurt-manager"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"edge-device-synchronization-component",children:"Edge device synchronization component"}),"\n",(0,o.jsx)(t.h3,{id:"device-management-related-crds",children:"device management related CRDs"}),"\n",(0,o.jsx)(t.p,{children:"To manage devices in the real world, we should make some abstractions\uff0cBeing a component connecting cloud and edge management platform, Yurt-device-controller proposed 3 CRDs: DeviceProfile\u3001DeviceService and Device\uff1a"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"DeviceProfile"}),"\uff1adefines a type of devices using same kind of protocol, which includes some generic information like the manufacturer's name, the device description, and the device model. DeviceProfile also defines what kind of resources (e.g., temperature, humidity) this type of device provided and how to read/write these resources."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"DeviceService"}),"\uff1adefines the way of how to connect a device to the OpenYurt, like the URL of the device. The DeviceService can not exist alone. Every DeviceService must associate with a DeviceProfile."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Device"}),'\uff1ais used to refer to a sensor, actuator, or IoT "thing", it gives the detailed definition of a specific device, like which DeviceProfile it belongs to and which DeviceService it used to connect to the system.']}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"architecture",children:"Architecture"}),"\n",(0,o.jsx)(t.p,{children:"By abstracting the three types of Custom Resource Definitions (CRDs) mentioned above, it is possible to reflect the basic status information of devices. Interacting with the corresponding controller and edge device management platform, the discovered edge devices can be promptly mapped to the cloud. Simultaneously, the yurt-iot-dock component synchronizes modifications made to device properties on the cloud (e.g., setting the on/off state of a lighting device) to the edge devices, thereby affecting the physical devices in the real world. Users can achieve the goal of operating and managing complex edge devices in a cloud-native manner by declaratively modifying the corresponding fields of CRs. The following are the three components that constitute the yurt-iot-dock:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Device controller"}),": It can abstract device objects in the edge platform into device CRs and synchronize them to the cloud. With the support of device controller, users can influence the actual device on the edge platform through the operation of cloud device CR, such as creating a device, deleting a device, updating device attributes (such as setting the light on and off, etc.)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"DeviceService controller"}),": It can abstract deviceService objects in the edge platform into deviceService CRs and synchronize them to the cloud. With the support of deviceService Controller, users can view deviceService information of edge platforms in the cloud, and create or delete deviceService CRs to affect the actual deviceService of edge platforms."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"DeviceProfile controller"}),": It can abstract deviceProfile objects in the edge platform into deviceProfile CRs and synchronize them to the cloud. With the support of deviceProfile Controller, users can view deviceProfile information of edge platforms in the cloud, and create or delete deviceProfile CRs to affect the actual deviceService of edge platforms."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"version-of-yurt-iot-dock",children:"Version of Yurt-IoT-Dock"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Version"}),(0,o.jsx)(t.th,{children:"Image"}),(0,o.jsx)(t.th,{children:"Release Date"}),(0,o.jsx)(t.th,{children:"Changes"}),(0,o.jsx)(t.th,{children:"Remark"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"v0.1.0"}),(0,o.jsxs)(t.td,{children:["openyurt/yurt-device-controller",":v0",".1.0"]}),(0,o.jsx)(t.td,{children:"2021.09"}),(0,o.jsx)(t.td,{children:"First Release"}),(0,o.jsx)(t.td,{children:"-"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"v0.2.0"}),(0,o.jsxs)(t.td,{children:["openyurt/yurt-device-controller",":v0",".1.0"]}),(0,o.jsx)(t.td,{children:"2022.05"}),(0,o.jsx)(t.td,{children:"Support EdgeX LTS Version"}),(0,o.jsx)(t.td,{children:"-"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"v1.4.0"}),(0,o.jsxs)(t.td,{children:["openyurt/yurt-iot-dock",":v1",".4.0"]}),(0,o.jsx)(t.td,{children:"2023.09"}),(0,o.jsx)(t.td,{children:"Merge into main repo"}),(0,o.jsx)(t.td,{children:"-"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"latest"}),(0,o.jsxs)(t.td,{children:["openyurt/yurt-iot-dock",":latest"]}),(0,o.jsx)(t.td,{children:"2023.09"}),(0,o.jsx)(t.td,{children:"Added support for edgex 3.0"}),(0,o.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"tutorial",children:"Tutorial"}),"\n",(0,o.jsx)(t.p,{children:"yurt-iot-dock is used as a component of the PlatformAdmin CR and can be deployed to the corresponding node pool by adding it to PlatformAdmin, for example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"apiVersion: iot.openyurt.io/v1alpha2\nkind: PlatformAdmin\nmetadata:\n  name: edgex-sample\nspec:\n  version: minnesota\n  poolName: hangzhou\n  components:\n  - name: yurt-iot-dock\n"})}),"\n",(0,o.jsx)(t.p,{children:"Similarly, by removing yurt-iot-dock from the components list, you can cancel the deployment of yurt-iot-dock in the corresponding NodePool. This allows you to selectively control which components are deployed within specific NodePools."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.strong,{children:["For details, see ",(0,o.jsx)(t.a,{href:"/docs/user-manuals/iot/edgex-foundry",children:"Cloud Native Device Management"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://openyurt.io/",children:"OpenYurt"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://www.edgexfoundry.org/",children:"EdgeX Foundry"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},38788:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/auto-collector-ca1ea66c6e2c536cb2c310b0a8cab172.png"},25789:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/openyurt-edgex-arch-f2a5968d8526323fd57c457c5f9ca08a.png"},72084:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/openyurt-iot-arch-73ca6a8774ab0b99f56ae282f17599df.png"},58267:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/platform-adminv1.4.0-20da11e750ce6fb04fc575b725682f6e.png"},11151:(e,t,n)=>{n.d(t,{a:()=>s});var o=n(67294);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);