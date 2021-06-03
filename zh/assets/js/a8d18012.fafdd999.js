(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6838],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86509:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l={title:"Application"},i={unversionedId:"end-user/application",id:"end-user/application",isDocsHomePage:!1,title:"Application",description:"This documentation will walk through how to use KubeVela to design a simple application without any polices or placement rule defined.",source:"@site/docs/end-user/application.md",sourceDirName:"end-user",slug:"/end-user/application",permalink:"/zh/docs/next/end-user/application",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/application.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1622705471,formattedLastUpdatedAt:"2021/6/3",frontMatter:{title:"Application"},sidebar:"docs",previous:{title:"\u6838\u5fc3\u6982\u5ff5",permalink:"/zh/docs/next/concepts"},next:{title:"\u68c0\u7d22 Applications",permalink:"/zh/docs/next/end-user/components/webservice"}},s=[{value:"Step 1: Check Available Components",id:"step-1-check-available-components",children:[]},{value:"Step 2: Declare an Application",id:"step-2-declare-an-application",children:[]},{value:"Step 3: Attach Traits",id:"step-3-attach-traits",children:[]},{value:"Step 4: Deploy the Application",id:"step-4-deploy-the-application",children:[{value:"List Revisions",id:"list-revisions",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This documentation will walk through how to use KubeVela to design a simple application without any polices or placement rule defined."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: since you didn't declare placement rule, KubeVela will deploy this application directly to the control plane cluster (i.e. the cluster your ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," is talking to). This is also the same case if you are using local cluster such as KinD or MiniKube to play KubeVela.")),(0,o.kt)("h2",{id:"step-1-check-available-components"},"Step 1: Check Available Components"),(0,o.kt)("p",null,"Components are deployable or provisionable entities that compose your application. It could be a Helm chart, a simple Kubernetes workload, a CUE or Terraform module, or a cloud database etc."),(0,o.kt)("p",null,"Let's check the available components in fresh new KubeVela."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get comp -n vela-system\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"NAME              WORKLOAD-KIND   DESCRIPTION                        \ntask              Job             Describes jobs that run code or a script to completion.                                                                                          \nwebservice        Deployment      Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network traffic from customers. \nworker            Deployment      Describes long-running, scalable, containerized services that running at backend. They do NOT have network endpoint to receive external network traffic.\n")),(0,o.kt)("p",null,"To show the specification for given component, you could use ",(0,o.kt)("inlineCode",{parentName:"p"},"vela show"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl vela show webservice\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"# Properties\n+------------------+----------------------------------------------------------------------------------+-----------------------+----------+---------+\n|       NAME       |                                   DESCRIPTION                                    |         TYPE          | REQUIRED | DEFAULT |\n+------------------+----------------------------------------------------------------------------------+-----------------------+----------+---------+\n| cmd              | Commands to run in the container                                                 | []string              | false    |         |\n| env              | Define arguments by using environment variables                                  | [[]env](#env)         | false    |         |\n| addRevisionLabel |                                                                                  | bool                  | true     | false   |\n| image            | Which image would you like to use for your service                               | string                | true     |         |\n| port             | Which port do you want customer traffic sent to                                  | int                   | true     |      80 |\n| cpu              | Number of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core) | string                | false    |         |\n| volumes          | Declare volumes and volumeMounts                                                 | [[]volumes](#volumes) | false    |         |\n+------------------+----------------------------------------------------------------------------------+-----------------------+----------+---------+\n... // skip other fields\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: ",(0,o.kt)("inlineCode",{parentName:"p"},"vela show xxx --web")," will open its capability reference documentation in your default browser.")),(0,o.kt)("p",null,"You could always ",(0,o.kt)("a",{parentName:"p",href:"components/more"},"add more components")," to the platform at any time."),(0,o.kt)("h2",{id:"step-2-declare-an-application"},"Step 2: Declare an Application"),(0,o.kt)("p",null,"Application is the full description of a deployment. Let's define an application that deploys a ",(0,o.kt)("em",{parentName:"p"},"Web Service")," and a ",(0,o.kt)("em",{parentName:"p"},"Worker")," components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# sample.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend\n      type: webservice\n      properties:\n        image: nginx\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - '1000'\n")),(0,o.kt)("h2",{id:"step-3-attach-traits"},"Step 3: Attach Traits"),(0,o.kt)("p",null,"Traits are platform provided features that could ",(0,o.kt)("em",{parentName:"p"},"overlay")," a given component with extra operational behaviors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get trait -n vela-system\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"NAME                                       APPLIES-TO            DESCRIPTION                                     \ncpuscaler                                  [webservice worker]   Automatically scale the component based on CPU usage.\ningress                                    [webservice worker]   Enable public web traffic for the component.\nscaler                                     [webservice worker]   Manually scale the component.\nsidecar                                    [webservice worker]   Inject a sidecar container to the component.\n")),(0,o.kt)("p",null,"Let's check the specification of ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecar")," trait."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl vela show sidecar\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"# Properties\n+---------+-----------------------------------------+----------+----------+---------+\n|  NAME   |               DESCRIPTION               |   TYPE   | REQUIRED | DEFAULT |\n+---------+-----------------------------------------+----------+----------+---------+\n| name    | Specify the name of sidecar container   | string   | true     |         |\n| image   | Specify the image of sidecar container  | string   | true     |         |\n| command | Specify the commands run in the sidecar | []string | false    |         |\n+---------+-----------------------------------------+----------+----------+---------+\n")),(0,o.kt)("p",null,"Note that traits are designed to be ",(0,o.kt)("em",{parentName:"p"},"overlays"),"."),(0,o.kt)("p",null,"This means for ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecar")," trait, your ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," component doesn't need to have a sidecar template or bring a webhook to enable sidecar injection. Instead, KubeVela is able to patch a sidecar to its workload instance after it is generated by the component (no matter it's a Helm chart or CUE module) but before it is applied to runtime cluster."),(0,o.kt)("p",null,'Similarly, the system will assign a HPA instance based on the properties you set and "link" it to the target workload instance, the component itself is untouched.'),(0,o.kt)("p",null,"Now let's attach ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecar")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cpuscaler")," traits to the ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," component. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# sample.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend              # This is the component I want to deploy\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: cpuscaler         # Automatically scale the component by CPU usage after deployed\n          properties:\n            min: 1\n            max: 10\n            cpuPercent: 60\n        - type: sidecar           # Inject a fluentd sidecar before applying the component to runtime cluster\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n')),(0,o.kt)("h2",{id:"step-4-deploy-the-application"},"Step 4: Deploy the Application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/enduser/sample.yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"application.core.oam.dev/website created\n")),(0,o.kt)("p",null,"You'll get the application becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"running"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get application\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"NAME        COMPONENT   TYPE         PHASE     HEALTHY   STATUS   AGE\nwebsite     frontend    webservice   running   true               4m54s\n")),(0,o.kt)("p",null,"Check the details of the application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get app website -o yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  generation: 1\n  name: website\n  namespace: default\nspec:\n  components:\n  - name: frontend\n    properties:\n      image: nginx\n    traits:\n    - properties:\n        cpuPercent: 60\n        max: 10\n        min: 1\n      type: cpuscaler\n    - properties:\n        image: fluentd\n        name: sidecar-test\n      type: sidecar\n    type: webservice\n  - name: backend\n    properties:\n      cmd:\n      - sleep\n      - "1000"\n      image: busybox\n    type: worker\nstatus:\n  ...\n  latestRevision:\n    name: website-v1\n    revision: 1\n    revisionHash: e9e062e2cddfe5fb\n  services:\n  - healthy: true\n    name: frontend\n    traits:\n    - healthy: true\n      type: cpuscaler\n    - healthy: true\n      type: sidecar\n  - healthy: true\n    name: backend\n  status: running\n')),(0,o.kt)("p",null,"Specifically:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"status.latestRevision")," declares current revision of this deployment."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"status.services")," declares the component created by this deployment and the healthy state."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"status.status")," declares the global state of this deployment. ")),(0,o.kt)("h3",{id:"list-revisions"},"List Revisions"),(0,o.kt)("p",null,"When updating an application entity, KubeVela will create a new revision for this change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get apprev -l app.oam.dev/name=website\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"NAME           AGE\nwebsite-v1     35m\n")),(0,o.kt)("p",null,"Furthermore, the system will decide how to/whether to rollout the application based on the attached ",(0,o.kt)("a",{parentName:"p",href:"scopes/rollout-plan"},"rollout plan"),"."))}c.isMDXComponent=!0}}]);