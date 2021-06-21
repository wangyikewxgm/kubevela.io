(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[1396],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79941:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return i},default:function(){return s}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),p={title:"Attach Traits"},o={unversionedId:"platform-engineers/kube/trait",id:"version-v1.1/platform-engineers/kube/trait",isDocsHomePage:!1,title:"Attach Traits",description:"All traits in the KubeVela system works well with the simple template based Component.",source:"@site/versioned_docs/version-v1.1/platform-engineers/kube/trait.md",sourceDirName:"platform-engineers/kube",slug:"/platform-engineers/kube/trait",permalink:"/zh/docs/v1.1/platform-engineers/kube/trait",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/kube/trait.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1624242441,formattedLastUpdatedAt:"2021/6/21",frontMatter:{title:"Attach Traits"},sidebar:"version-v1.1/docs",previous:{title:"How-to",permalink:"/zh/docs/v1.1/platform-engineers/kube/component"},next:{title:"Overview",permalink:"/zh/docs/v1.1/platform-engineers/cloud-services"}},i=[{value:"Verify",id:"verify",children:[]},{value:"Update an Application",id:"update-an-application",children:[]}],c={toc:i};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"All traits in the KubeVela system works well with the simple template based Component. "),(0,l.kt)("p",null,"In this sample, we will attach two traits,\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/charts/vela-core/templates/defwithtemplate/manualscale.yaml"},"scaler"),"\nand\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/docs/examples/kube-module/virtual-group-td.yaml"},"virtualgroup")," to a component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: mycomp\n      type: kube-worker\n      properties: \n        image: nginx:1.14.0\n      traits:\n        - type: scaler\n          properties:\n            replicas: 2\n        - type: virtualgroup\n          properties:\n            group: "my-group1"\n            type: "cluster"\n')),(0,l.kt)("h2",{id:"verify"},"Verify"),(0,l.kt)("p",null,"Deploy the application and verify traits work."),(0,l.kt)("p",null,"Check the ",(0,l.kt)("inlineCode",{parentName:"p"},"scaler")," trait."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get manualscalertrait\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"NAME                            AGE\ndemo-podinfo-scaler-3x1sfcd34   2m\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deployment mycomp -o json | jq .spec.replicas\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"2\n")),(0,l.kt)("p",null,"Check the ",(0,l.kt)("inlineCode",{parentName:"p"},"virtualgroup")," trait."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deployment mycomp -o json | jq .spec.template.metadata.labels\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'{\n  "app.cluster.virtual.group": "my-group1",\n  "app.kubernetes.io/name": "myapp"\n}\n')),(0,l.kt)("h2",{id:"update-an-application"},"Update an Application"),(0,l.kt)("p",null,"After the application is deployed and workloads/traits are created successfully,\nyou can update the application, and corresponding changes will be applied to the\nworkload."),(0,l.kt)("p",null,"Let's make several changes on the configuration of the sample application."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: mycomp\n      type: kube-worker\n      properties: \n        image: nginx:1.14.1 # 1.14.0 => 1.14.1\n      traits:\n        - type: scaler\n          properties:\n            replicas: 4 # 2 => 4\n        - type: virtualgroup\n          properties:\n            group: "my-group2" # my-group1 => my-group2\n            type: "cluster"\n')),(0,l.kt)("p",null,"Apply the new configuration and check the results after several seconds."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"After updating, the workload instance name will be updated from ",(0,l.kt)("inlineCode",{parentName:"p"},"mycomp-v1")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"mycomp-v2"),".")),(0,l.kt)("p",null,"Check the new property value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deployment mycomp -o json | jq '.spec.template.spec.containers[0].image'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'"nginx:1.14.1"\n')),(0,l.kt)("p",null,"Check the ",(0,l.kt)("inlineCode",{parentName:"p"},"scaler")," trait."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deployment mycomp -o json | jq .spec.replicas\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"4\n")),(0,l.kt)("p",null,"Check the ",(0,l.kt)("inlineCode",{parentName:"p"},"virtualgroup")," trait."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deployment mycomp -o json | jq .spec.template.metadata.labels\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'{\n  "app.cluster.virtual.group": "my-group2",\n  "app.kubernetes.io/name": "myapp"\n}\n')))}s.isMDXComponent=!0}}]);