(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),i=(n(0),n(317)),r={title:"Resource Model"},c={unversionedId:"platform-engineers/overview",id:"platform-engineers/overview",isDocsHomePage:!1,title:"Resource Model",description:"This documentation will explain the core resource model of KubeVela which is fully powered by Open Application Model (OAM).",source:"@site/docs/platform-engineers/overview.md",slug:"/platform-engineers/overview",permalink:"/docs/next/platform-engineers/overview",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/overview.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618298461,formattedLastUpdatedAt:"4/13/2021",sidebar:"docs",previous:{title:"Monitoring",permalink:"/docs/next/end-user/monitoring"},next:{title:"Programmable Building Blocks",permalink:"/docs/next/platform-engineers/definition-and-templates"}},p=[{value:"Application",id:"application",children:[]},{value:"Component",id:"component",children:[{value:"How it Works?",id:"how-it-works",children:[]}]},{value:"Traits",id:"traits",children:[]},{value:"Standard Contract Behind The Abstractions",id:"standard-contract-behind-the-abstractions",children:[]},{value:"No Configuration Drift",id:"no-configuration-drift",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This documentation will explain the core resource model of KubeVela which is fully powered by Open Application Model (OAM)."),Object(i.b)("h2",{id:"application"},"Application"),Object(i.b)("p",null,"KubeVela introduces an ",Object(i.b)("inlineCode",{parentName:"p"},"Application")," CRD as its main API that captures a full application deployment. Every application is composed by multiple components with attachable operational behaviors (traits). For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: application-sample\nspec:\n  components:\n    - name: foo\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n        - type: sidecar\n          properties:\n            name: "logging"\n            image: "fluentd"\n    - name: bar\n      type: aliyun-oss # cloud service\n      bucket: "my-bucket"\n')),Object(i.b)("p",null,"Though the application object doesn't have fixed schema, it is a composition object assembled by several ",Object(i.b)("em",{parentName:"p"},"programmable building blocks")," as shown below."),Object(i.b)("h2",{id:"component"},"Component"),Object(i.b)("p",null,"The component model in KubeVela is designed to allow ",Object(i.b)("em",{parentName:"p"},"component providers")," to encapsulate deployable/provisionable entities by leveraging widely adopted tools such as CUE, Helm etc, and give a easier path to developers to deploy complicated microservices with ease."),Object(i.b)("p",null,"Templates based encapsulation is probably the mostly widely used approach to enable efficient application deployment and exposes easier interfaces to end users. For example, many tools today encapsulate Kubernetes ",Object(i.b)("em",{parentName:"p"},"Deployment")," and ",Object(i.b)("em",{parentName:"p"},"Service")," into a ",Object(i.b)("em",{parentName:"p"},"Web Service")," module, and then instantiate this module by simply providing parameters such as ",Object(i.b)("em",{parentName:"p"},"image=foo")," and ",Object(i.b)("em",{parentName:"p"},"ports=80"),". This pattern can be found in cdk8s (e.g. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/awslabs/cdk8s/blob/master/examples/typescript/web-service/web-service.ts"},Object(i.b)("inlineCode",{parentName:"a"},"web-service.ts")," "),"), CUE (e.g. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuelang/cue/blob/b8b489251a3f9ea318830788794c1b4a753031c0/doc/tutorial/kubernetes/quick/services/kube.cue#L70"},Object(i.b)("inlineCode",{parentName:"a"},"kube.cue")),"), and many widely used Helm charts (e.g. ",Object(i.b)("a",{parentName:"p",href:"https://docs.bitnami.com/tutorials/create-your-first-helm-chart/"},"Web Service"),")."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Hence, a components provider could be anyone who packages software components in form of Helm chart of CUE modules. Think about 3rd-party software distributor, DevOps team, or even your CI pipeline.")),Object(i.b)("p",null,"In above example, it describes an application composed with Kubernetes stateless workload (component ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),") and a Alibaba Cloud OSS bucket (component ",Object(i.b)("inlineCode",{parentName:"p"},"bar"),") alongside."),Object(i.b)("h3",{id:"how-it-works"},"How it Works?"),Object(i.b)("p",null,"In above example, ",Object(i.b)("inlineCode",{parentName:"p"},"type: worker")," means the specification of this component (claimed in following ",Object(i.b)("inlineCode",{parentName:"p"},"properties")," section) will be enforced by a ",Object(i.b)("inlineCode",{parentName:"p"},"ComponentDefinition")," object named ",Object(i.b)("inlineCode",{parentName:"p"},"worker")," as below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: worker\n  annotations:\n    definition.oam.dev/description: "Describes long-running, scalable, containerized services that running at backend. They do NOT have network endpoint to receive external network traffic."\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n        output: {\n          apiVersion: "apps/v1"\n          kind:       "Deployment"\n          spec: {\n            selector: matchLabels: {\n              "app.oam.dev/component": context.name\n            }\n            template: {\n              metadata: labels: {\n                "app.oam.dev/component": context.name\n              }\n              spec: {\n                containers: [{\n                  name:  context.name\n                  image: parameter.image\n\n                  if parameter["cmd"] != _|_ {\n                    command: parameter.cmd\n                  }\n                }]\n              }\n            }\n          }\n        }\n        parameter: {\n          image: string\n          cmd?: [...string]\n        }\n')),Object(i.b)("p",null,"Hence, the ",Object(i.b)("inlineCode",{parentName:"p"},"properties")," section of ",Object(i.b)("inlineCode",{parentName:"p"},"backend")," only exposes two parameters to fill: ",Object(i.b)("inlineCode",{parentName:"p"},"image")," and ",Object(i.b)("inlineCode",{parentName:"p"},"cmd"),", this is enforced by the ",Object(i.b)("inlineCode",{parentName:"p"},"parameter")," list of the ",Object(i.b)("inlineCode",{parentName:"p"},".spec.template")," field of the definition."),Object(i.b)("h2",{id:"traits"},"Traits"),Object(i.b)("p",null,"Traits are operational features that can be attached to component per needs. Traits are normally considered as platform features and maintained by platform team. In the above example, ",Object(i.b)("inlineCode",{parentName:"p"},"type: autoscaler")," in ",Object(i.b)("inlineCode",{parentName:"p"},"frontend")," means the specification (i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"properties")," section)\nof this trait will be enforced by a ",Object(i.b)("inlineCode",{parentName:"p"},"TraitDefinition")," object named ",Object(i.b)("inlineCode",{parentName:"p"},"autoscaler")," as below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "configure k8s HPA for Deployment"\n  name: hpa\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  schematic:\n    cue:\n      template: |\n        outputs: hpa: {\n          apiVersion: "autoscaling/v2beta2"\n          kind:       "HorizontalPodAutoscaler"\n          metadata: name: context.name\n          spec: {\n            scaleTargetRef: {\n              apiVersion: "apps/v1"\n              kind:       "Deployment"\n              name:       context.name\n            }\n            minReplicas: parameter.min\n            maxReplicas: parameter.max\n            metrics: [{\n              type: "Resource"\n              resource: {\n                name: "cpu"\n                target: {\n                  type:               "Utilization"\n                  averageUtilization: parameter.cpuUtil\n                }\n              }\n            }]\n          }\n        }\n        parameter: {\n          min:     *1 | int\n          max:     *10 | int\n          cpuUtil: *50 | int\n        }\n')),Object(i.b)("p",null,"The application also have a ",Object(i.b)("inlineCode",{parentName:"p"},"sidecar")," trait."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "add sidecar to the app"\n  name: sidecar\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  schematic:\n    cue:\n      template: |-\n        patch: {\n           // +patchKey=name\n           spec: template: spec: containers: [parameter]\n        }\n        parameter: {\n           name: string\n           image: string\n           command?: [...string]\n        }\n')),Object(i.b)("p",null,"Please note that the end users of KubeVela do NOT need to know about definition objects, they learn how to use a given capability with visualized forms (or the JSON schema of parameters if they prefer). Please check the ",Object(i.b)("a",{parentName:"p",href:"/docs/platform-engineers/openapi-v3-json-schema"},"Generate Forms from Definitions")," section about how this is achieved."),Object(i.b)("h2",{id:"standard-contract-behind-the-abstractions"},"Standard Contract Behind The Abstractions"),Object(i.b)("p",null,"Once the application is deployed, KubeVela will index and manage the underlying instances with name, revisions, labels and selector etc in automatic approach. These metadata are shown as below."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"Label"),Object(i.b)("th",{parentName:"tr",align:"center"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"workload.oam.dev/type=<component definition name>")),Object(i.b)("td",{parentName:"tr",align:"center"},"The name of its corresponding ",Object(i.b)("inlineCode",{parentName:"td"},"ComponentDefinition"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"trait.oam.dev/type=<trait definition name>")),Object(i.b)("td",{parentName:"tr",align:"center"},"The name of its corresponding ",Object(i.b)("inlineCode",{parentName:"td"},"TraitDefinition"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"app.oam.dev/name=<app name>")),Object(i.b)("td",{parentName:"tr",align:"center"},"The name of the application it belongs to")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"app.oam.dev/component=<component name>")),Object(i.b)("td",{parentName:"tr",align:"center"},"The name of the component it belongs to")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"trait.oam.dev/resource=<name of trait resource instance>")),Object(i.b)("td",{parentName:"tr",align:"center"},"The name of trait resource instance")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"app.oam.dev/appRevision=<name of app revision>")),Object(i.b)("td",{parentName:"tr",align:"center"},"The name of the application revision it belongs to")))),Object(i.b)("p",null,'Consider these metadata as a standard contract for any "day 2" operation controller such as rollout controller to work on KubeVela deployed applications. This is the key to ensure the interoperability for KubeVela based platform as well.'),Object(i.b)("h2",{id:"no-configuration-drift"},"No Configuration Drift"),Object(i.b)("p",null,"Despite the efficiency and extensibility in abstracting application deployment, IaC (Infrastructure-as-Code) tools may lead to an issue called ",Object(i.b)("em",{parentName:"p"},"Infrastructure/Configuration Drift"),", i.e. the generated component instances are not in line with the expected configuration. This could be caused by incomplete coverage, less-than-perfect processes or emergency changes. This makes them can be barely used as a platform level building block."),Object(i.b)("p",null,"Hence, KubeVela is designed to maintain all these programmable capabilities with ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/controller/"},"Kubernetes Control Loop")," and leverage Kubernetes control plane to eliminate the issue of configuration drifting, while still keeps the flexibly and velocity enabled by IaC."))}s.isMDXComponent=!0},317:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,u=b["".concat(r,".").concat(d)]||b[d]||m[d]||i;return n?o.a.createElement(u,c(c({ref:t},l),{},{components:n})):o.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);