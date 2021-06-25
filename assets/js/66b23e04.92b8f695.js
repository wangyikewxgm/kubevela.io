(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8679],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27706:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return i},default:function(){return s}});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),l={title:"Attach Traits"},p={unversionedId:"platform-engineers/helm/trait",id:"version-v1.0/platform-engineers/helm/trait",isDocsHomePage:!1,title:"Attach Traits",description:"Traits in KubeVela can be attached to Helm based component seamlessly.",source:"@site/versioned_docs/version-v1.0/platform-engineers/helm/trait.md",sourceDirName:"platform-engineers/helm",slug:"/platform-engineers/helm/trait",permalink:"/docs/platform-engineers/helm/trait",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/helm/trait.md",version:"v1.0",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1624588513,formattedLastUpdatedAt:"6/25/2021",frontMatter:{title:"Attach Traits"},sidebar:"version-v1.0/docs",previous:{title:"How-to",permalink:"/docs/platform-engineers/helm/component"},next:{title:"Known Limitations",permalink:"/docs/platform-engineers/helm/known-issues"}},i=[{value:"Verify traits work correctly",id:"verify-traits-work-correctly",children:[]},{value:"Update Application",id:"update-application",children:[]},{value:"Detach Trait",id:"detach-trait",children:[]}],c={toc:i};function s(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Traits in KubeVela can be attached to Helm based component seamlessly."),(0,o.kt)("p",null,"In this sample application below, we add two traits, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/charts/vela-core/templates/defwithtemplate/scaler.yaml"},"scaler"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/docs/examples/helm-module/virtual-group-td.yaml"},"virtualgroup")," to a Helm based component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: demo-podinfo \n      type: webapp-chart\n      properties: \n        image:\n          tag: "5.1.2"\n      traits:\n        - type: scaler\n          properties:\n            replicas: 4\n        - type: virtualgroup\n          properties:\n            group: "my-group1"\n            type: "cluster"\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: when use traits with Helm based component, please ",(0,o.kt)("em",{parentName:"p"},"make sure the target workload in your Helm chart strictly follows the qualified-full-name convention in Helm.")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/captainroy-hy/podinfo/blob/c2b9603036f1f033ec2534ca0edee8eff8f5b335/charts/podinfo/templates/deployment.yaml#L4"},"For example in this chart"),", the workload name is composed of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/captainroy-hy/podinfo/blob/c2b9603036f1f033ec2534ca0edee8eff8f5b335/charts/podinfo/templates/_helpers.tpl#L13"},"release name and chart name"),".")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is because KubeVela relies on the name to discovery the workload, otherwise it cannot apply traits to the workload. KubeVela will generate a release name based on your ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," name and component name automatically, so you need to make sure never override the full name template in your Helm chart.")),(0,o.kt)("h2",{id:"verify-traits-work-correctly"},"Verify traits work correctly"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You may need to wait a few seconds to check the trait attached because of reconciliation interval.")),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"scaler")," trait takes effect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get manualscalertrait\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"NAME                            AGE\ndemo-podinfo-scaler-d8f78c6fc   13m\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deployment myapp-demo-podinfo -o json | jq .spec.replicas\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"4\n")),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualgroup")," trait."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deployment myapp-demo-podinfo -o json | jq .spec.template.metadata.labels\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'{\n  "app.cluster.virtual.group": "my-group1",\n  "app.kubernetes.io/name": "myapp-demo-podinfo"\n}\n')),(0,o.kt)("h2",{id:"update-application"},"Update Application"),(0,o.kt)("p",null,"After the application is deployed and workloads/traits are created successfully,\nyou can update the application, and corresponding changes will be applied to the\nworkload instances."),(0,o.kt)("p",null,"Let's make several changes on the configuration of the sample application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: demo-podinfo \n      type: webapp-chart\n      properties: \n        image:\n          tag: "5.1.3" # 5.1.2 => 5.1.3 \n      traits:\n        - type: scaler\n          properties:\n            replicas: 2 # 4 => 2\n        - type: virtualgroup\n          properties:\n            group: "my-group2" # my-group1 => my-group2\n            type: "cluster"\n')),(0,o.kt)("p",null,"Apply the new configuration and check the results after several minutes."),(0,o.kt)("p",null,"Check the new values (",(0,o.kt)("inlineCode",{parentName:"p"},"image.tag = 5.1.3"),") from application's ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," are assigned to the chart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deployment myapp-demo-podinfo -o json | jq '.spec.template.spec.containers[0].image'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'"ghcr.io/stefanprodan/podinfo:5.1.3"\n')),(0,o.kt)("p",null,"Under the hood, Helm makes an upgrade to the release (revision 1 => 2)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm ls -A\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"NAME                NAMESPACE   REVISION    UPDATED                                 STATUS      CHART           APP VERSION\nmyapp-demo-podinfo  default     2           2021-03-15 08:52:00.037690148 +0000 UTC deployed    podinfo-5.1.4   5.1.4\n")),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"scaler")," trait."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deployment myapp-demo-podinfo -o json | jq .spec.replicas\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"2\n")),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualgroup")," trait."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deployment myapp-demo-podinfo -o json | jq .spec.template.metadata.labels\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'{\n  "app.cluster.virtual.group": "my-group2",\n  "app.kubernetes.io/name": "myapp-demo-podinfo"\n}\n')),(0,o.kt)("h2",{id:"detach-trait"},"Detach Trait"),(0,o.kt)("p",null,"Let's have a try detach a trait from the application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: demo-podinfo \n      type: webapp-chart \n      settings: \n        image:\n          tag: "5.1.3"\n      traits:\n        # - name: scaler\n        #   properties:\n        #    replicas: 2 \n        - name: virtualgroup\n          properties:\n            group: "my-group2"\n            type: "cluster"\n')),(0,o.kt)("p",null,"Apply the application and check ",(0,o.kt)("inlineCode",{parentName:"p"},"manualscalertrait")," has been deleted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get manualscalertrait\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"No resources found\n")))}s.isMDXComponent=!0}}]);