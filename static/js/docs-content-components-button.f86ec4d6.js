(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./docs/content/components/button.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),r=n("./node_modules/react/index.js"),s=n("./node_modules/@mdx-js/react/dist/index.es.js"),c=n("./node_modules/docz/dist/index.esm.js"),l=n("./src/components/Button/index.js"),u=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),d=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),p=n("./src/components/LoadingButton/index.js"),m=function(e){var t=e.exitAnimation,n=e.children,o=t||"DEFAULT",a=Object(r.useState)({DEFAULT:!1,SUCCESS:!1,ERROR:!1}),s=Object(b.a)(a,2),c=s[0],l=s[1];return Object(i.d)(p.a,{primary:!0,isLoading:c[o],onClick:function(){return l(Object(d.a)({},c,Object(u.a)({},o,!0))),void window.setTimeout(function(){l(Object(d.a)({},c,Object(u.a)({},o,!1)))},1e3)},exitAnimation:t&&p.a[t]},n)},j=m;m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingButtonWithState",filename:"docs/content/components/button.js"}});var f=n("./src/components/ButtonGroup/index.js"),g=n("./docs/utils/Statuses.js");n.d(t,"default",function(){return y});var O={},h="wrapper";function y(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)(h,Object(o.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"button"},"Button"),Object(s.b)(g.a.InReview,null),Object(s.b)("p",null,"A button allows us to highlight actions in the product and make them easily\nperceived and achievable through just one click."),Object(s.b)(c.c,{__position:1,__code:"<Button primary>Confirm order</Button>",__scope:{props:this?this.props:n,Playground:c.c,Props:c.d,Fragment:r.Fragment,Button:l.a,LoadingButtonWithState:j,ButtonGroup:f.a,LoadingButtonComponent:p.a,Status:g.a},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(l.a,{primary:!0,mdxType:"Button"},"Confirm order")),Object(s.b)(c.d,{of:l.a,mdxType:"Props"}),Object(s.b)("h2",{id:"when-to-use-it"},"When to use it"),Object(s.b)("p",null,"Use buttons when merchants need to either navigate through a product or perform a specific task."),Object(s.b)("h2",{id:"usage-guidelines"},"Usage guidelines"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," always label a button in a clear and understandable way"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," always think about the priority of the action to be taken when choosing a type of button"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," position buttons in a predictable and coherent way throughout the product."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," combine different button types if you have more than one button in a specific screen"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," use a loading state to provide feedback for our merchant when the action revolves around saving or\ninputting information, especially when it could take some seconds.")),Object(s.b)("h2",{id:"content-guidelines"},"Content guidelines"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do"),' always start the label with an actionable verb accompanied by a noun to provide enough context (example: "Confirm order").\nThe only exceptions are the following common actions: "Save"; "Cancel"; and "Close".'),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," keep the label to a maximum of 3 words"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do not")," capitalize all words of the label, just the first word or brand/product words (such as Apple Pay, for example)")),Object(s.b)("h2",{id:"component-variations"},"Component variations"),Object(s.b)("h3",{id:"primary-button"},"Primary button"),Object(s.b)("p",null,"Used to highlight the most important action in a certain page. In most cases, there should be only one primary button visible\nat a time."),Object(s.b)(c.c,{__position:3,__code:"<Button primary>Save changes</Button>",__scope:{props:this?this.props:n,Playground:c.c,Props:c.d,Fragment:r.Fragment,Button:l.a,LoadingButtonWithState:j,ButtonGroup:f.a,LoadingButtonComponent:p.a,Status:g.a},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(l.a,{primary:!0,mdxType:"Button"},"Save changes")),Object(s.b)("h3",{id:"default-button"},"Default button"),Object(s.b)("p",null,"Used to highlight secondary actions to be takes, specially when there's already a primary action on the page."),Object(s.b)(c.c,{__position:4,__code:"<Button>Refund transaction</Button>",__scope:{props:this?this.props:n,Playground:c.c,Props:c.d,Fragment:r.Fragment,Button:l.a,LoadingButtonWithState:j,ButtonGroup:f.a,LoadingButtonComponent:p.a,Status:g.a},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(l.a,{mdxType:"Button"},"Refund transaction")),Object(s.b)("h3",{id:"secondary-buttons"},"Secondary buttons"),Object(s.b)("p",null,'Only use secondary buttons when paired to a primary button, placed in the left side of it. They are used to\nsignal opposite actions from the primary button, such as "Cancel order".'),Object(s.b)(c.c,{__position:5,__code:"<Button secondary>Cancel</Button>",__scope:{props:this?this.props:n,Playground:c.c,Props:c.d,Fragment:r.Fragment,Button:l.a,LoadingButtonWithState:j,ButtonGroup:f.a,LoadingButtonComponent:p.a,Status:g.a},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(l.a,{secondary:!0,mdxType:"Button"},"Cancel")),Object(s.b)("h3",{id:"flat-buttons"},"Flat buttons"),Object(s.b)("p",null,"Used only in the marketing website when you need to position an action over a dark background. It has a\nprimary and secondary version."),Object(s.b)(c.c,{__position:6,__code:"<Fragment>\n  <Button flat primary>\n    Join SumUp\n  </Button>\n</Fragment>",__scope:{props:this?this.props:n,Playground:c.c,Props:c.d,Fragment:r.Fragment,Button:l.a,LoadingButtonWithState:j,ButtonGroup:f.a,LoadingButtonComponent:p.a,Status:g.a},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(r.Fragment,{mdxType:"Fragment"},Object(s.b)(l.a,{flat:!0,primary:!0,mdxType:"Button"},"Join SumUp"))),Object(s.b)("h3",{id:"plain-buttons"},"Plain buttons"),Object(s.b)("p",null,"Used when you want to highlight an action within a body text. It should always open in the same window unless\nit links to an external source (such as a link to a complete study about card acceptance within a blog post)."),Object(s.b)(c.c,{__position:7,__code:'<Button plain primary href="#">\n  card acceptance study\n</Button>',__scope:{props:this?this.props:n,Playground:c.c,Props:c.d,Fragment:r.Fragment,Button:l.a,LoadingButtonWithState:j,ButtonGroup:f.a,LoadingButtonComponent:p.a,Status:g.a},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(l.a,{plain:!0,primary:!0,href:"#",mdxType:"Button"},"card acceptance study")),Object(s.b)("h3",{id:"sized-buttons"},"Sized buttons"),Object(s.b)("p",null,"The button component also supports three different sizes: Mega, the best suitable for most cases; Kilo, used\nwhen there is sizing constraints in the button position; and Giga, used for extreme cases when there's little\nor no constraint on the button's placement."),Object(s.b)(c.c,{__position:8,__code:"<Fragment>\n  <Button size={Button.KILO}>View kilo</Button>\n</Fragment>",__scope:{props:this?this.props:n,Playground:c.c,Props:c.d,Fragment:r.Fragment,Button:l.a,LoadingButtonWithState:j,ButtonGroup:f.a,LoadingButtonComponent:p.a,Status:g.a},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(r.Fragment,{mdxType:"Fragment"},Object(s.b)(l.a,{size:l.a.KILO,mdxType:"Button"},"View kilo"))),Object(s.b)(c.c,{__position:9,__code:"<Fragment>\n  <Button size={Button.MEGA}>View mega</Button>\n</Fragment>",__scope:{props:this?this.props:n,Playground:c.c,Props:c.d,Fragment:r.Fragment,Button:l.a,LoadingButtonWithState:j,ButtonGroup:f.a,LoadingButtonComponent:p.a,Status:g.a},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(r.Fragment,{mdxType:"Fragment"},Object(s.b)(l.a,{size:l.a.MEGA,mdxType:"Button"},"View mega"))),Object(s.b)(c.c,{__position:10,__code:"<Fragment>\n  <Button size={Button.GIGA}>View giga</Button>\n</Fragment>",__scope:{props:this?this.props:n,Playground:c.c,Props:c.d,Fragment:r.Fragment,Button:l.a,LoadingButtonWithState:j,ButtonGroup:f.a,LoadingButtonComponent:p.a,Status:g.a},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(r.Fragment,{mdxType:"Fragment"},Object(s.b)(l.a,{size:l.a.GIGA,mdxType:"Button"},"View giga"))),Object(s.b)("h2",{id:"button-group"},"Button group"),Object(s.b)("p",null,"Used when our merchant has two opposites actions to be taken in a certain step of a flow. It is generally used aligned to the right,\nwith a primary button for the expected action and a secondary button on its left."),Object(s.b)(c.c,{__position:11,__code:"<ButtonGroup>\n  <Button secondary>Cancel</Button>\n  <Button primary>Confirm approval</Button>\n</ButtonGroup>",__scope:{props:this?this.props:n,Playground:c.c,Props:c.d,Fragment:r.Fragment,Button:l.a,LoadingButtonWithState:j,ButtonGroup:f.a,LoadingButtonComponent:p.a,Status:g.a},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(f.a,{mdxType:"ButtonGroup"},Object(s.b)(l.a,{secondary:!0,mdxType:"Button"},"Cancel"),Object(s.b)(l.a,{primary:!0,mdxType:"Button"},"Confirm approval"))),Object(s.b)(c.d,{of:f.a,mdxType:"Props"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," use the same verb tenses for both actions")),Object(s.b)("h2",{id:"loading-button"},"Loading button"),Object(s.b)("p",null,"When the button's action is inputting/saving information or it takes more than 3 seconds to take the merchant\nto the next step/page, you can indicate a loading state with ",Object(s.b)("inlineCode",{parentName:"p"},"LoadingButton"),", as well as visually notify\nthe merchant of success or an error after loading. You should only use it on primary buttons."),Object(s.b)(c.c,{__position:13,__code:'<ButtonGroup align={ButtonGroup.CENTER}>\n  {/* A live implementation example can be found on Storybook */}\n  <LoadingButtonWithState>Load</LoadingButtonWithState>\n  <LoadingButtonWithState exitAnimation="SUCCESS">\n    Load success\n  </LoadingButtonWithState>\n  <LoadingButtonWithState exitAnimation="ERROR">\n    Load error\n  </LoadingButtonWithState>\n</ButtonGroup>',__scope:{props:this?this.props:n,Playground:c.c,Props:c.d,Fragment:r.Fragment,Button:l.a,LoadingButtonWithState:j,ButtonGroup:f.a,LoadingButtonComponent:p.a,Status:g.a},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(f.a,{align:f.a.CENTER,mdxType:"ButtonGroup"},Object(s.b)(j,{mdxType:"LoadingButtonWithState"},"Load"),Object(s.b)(j,{exitAnimation:"SUCCESS",mdxType:"LoadingButtonWithState"},"Load success"),Object(s.b)(j,{exitAnimation:"ERROR",mdxType:"LoadingButtonWithState"},"Load error"))),Object(s.b)(c.d,{of:p.a,mdxType:"Props"}))}y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/content/components/button.mdx"}}),y.isMDXComponent=!0},"./src/components/Button/index.js":function(e,t,n){"use strict";var o=n("./src/components/Button/Button.js");t.a=o.a,"undefined"!==typeof o.a&&o.a&&o.a===Object(o.a)&&Object.isExtensible(o.a)&&Object.defineProperty(o.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/index.js"}})},"./src/components/ButtonGroup/index.js":function(e,t,n){"use strict";var o,a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),s=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),c=n("./node_modules/react/index.js"),l=n("./src/styles/constants.js"),u=function(e){return Object(s.c)("display:flex;flex-wrap:nowrap;> li:not(:last-of-type){margin-bottom:0;margin-right:",e.spacings.mega,";}")},d=function(e){var t=e.theme;return Object(s.c)("label:button-group;list-style-type:none;width:100%;> li{&:not(:last-of-type){margin-bottom:",t.spacings.mega,";}> *{width:100%;}}",t.mq.kilo,"{",u(t),"}")},b=(o={},Object(i.a)(o,l.directions.LEFT,"flex-start"),Object(i.a)(o,l.directions.CENTER,"center"),Object(i.a)(o,l.directions.RIGHT,"flex-end"),o),p=function(e){var t=e.align;if(!t)return null;var n="button-group--".concat(t);return Object(s.c)("label:",n,";justify-content:",b[t],";")},m=function(e){var t=e.theme;return e.inlineMobile&&Object(s.c)("label:button-group--inline-mobile;",t.mq.untilKilo,"{",u(t),";}")},j=Object(r.a)("ul",{target:"e1on5wak0"})(d,p,m,""),f=function(e){var t=e.children,n=Object(a.a)(e,["children"]);return Object(s.d)(j,n,c.Children.map(t,function(e){return e?Object(s.d)("li",null,e):null}))};f.LEFT=l.directions.LEFT,f.CENTER=l.directions.CENTER,f.RIGHT=l.directions.RIGHT,f.defaultProps={align:f.RIGHT,inlineMobile:!1};var g=f;f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonGroup",filename:"src/components/ButtonGroup/ButtonGroup.js"}});t.a=g;"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonGroup",filename:"src/components/ButtonGroup/index.js"}})},"./src/components/LoadingButton/index.js":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),u=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),d=n("./node_modules/react/index.js"),b=n.n(d),p=n("./node_modules/lodash/fp.js"),m=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),j=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),f=n("./src/components/Button/index.js"),g=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),O=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),h=n("./node_modules/polished/dist/polished.es.js"),y=n("./src/styles/constants.js"),_=n("./src/components/Spinner/index.js");function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var v=b.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 24C18.6274 24 24 18.6274 24 12C24 5.37259 18.6274 0 12 0C5.37259 0 0 5.37259 0 12C0 18.6274 5.37259 24 12 24ZM18.3535 9.06065C18.5488 8.8654 18.5488 8.54881 18.3535 8.35355L17.6464 7.64644C17.4512 7.45119 17.1346 7.45119 16.9393 7.64644L10 14.5858L7.56065 12.1464C7.3654 11.9512 7.04881 11.9512 6.85355 12.1464L6.14644 12.8535C5.95119 13.0488 5.95119 13.3654 6.14644 13.5607L9.64644 17.0607C9.84171 17.2559 10.1583 17.2559 10.3535 17.0607L18.3535 9.06065Z",fill:"white"}),x=function(e){return b.a.createElement("svg",B({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),v)};n.p;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var C=b.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L13.4142 12L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L12 13.4142L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L10.5858 12L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L12 10.5858L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289Z",fill:"white"}),S=function(e){return b.a.createElement("svg",L({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),C)};n.p;2e3===Object(2e3)&&Object.isExtensible(2e3)&&Object.defineProperty(2e3,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EXIT_ANIMATION_DURATION",filename:"src/components/LoadingButton/constants.js"}});500===Object(500)&&Object.isExtensible(500)&&Object.defineProperty(500,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DEFAULT_LOADING_DELAY",filename:"src/components/LoadingButton/constants.js"}});var P={DISABLED:"disabled",ACTIVE:"active",SUCCESS:"success",ERROR:"error"};function E(){var e=Object(O.a)(["\n  0% {\n    opacity: 1;\n    transform: scale3d(0, 0, 0);\n  }\n\n  100% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n"]);return E=function(){return e},e}"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LOADING_STATES",filename:"src/components/LoadingButton/constants.js"}});var w=y.sizes.KILO,T=y.sizes.MEGA,A=y.sizes.GIGA,R=Object(u.e)(E()),F={name:"1e53tp2",styles:"position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"},G=function(){return F},k=function(e){return function(t){var n,o=t.theme,a=t.size,i=(n={},Object(g.a)(n,w,o.spacings.mega),Object(g.a)(n,T,o.spacings.giga),Object(g.a)(n,A,o.spacings.tera),n),r=i[a]||i.GIGA;return Object(u.c)("label:","".concat(e,"--").concat(a.toLowerCase()),";",Object(h.b)(r),";")}},I=Object(j.a)("div",{target:"e14ehxt90"})("label:loading-icon;transform:scale3d(0,0,0);opacity:0;transition:opacity ",function(e){return e.theme.transitions.default},";",Object(h.b)("100%"),";animation:",R," ",function(e){return e.theme.transitions.default},";animation-fill-mode:forwards;animation-iteration-count:1;"),D=Object(j.a)("div",{target:"e14ehxt91"})(k("loading-icon__status"),G,""),N=Object(j.a)(_.a,{target:"e14ehxt92"})(k("loading-icon__spinner"),G,""),z=function(e){var t=e.as,n=e.size;return Object(u.d)(D,{size:n},Object(u.d)(I,{as:t}))};z.defaultProps={as:x,size:A};var U=function(e){var t=e.loadingState,n=e.size;return Object(u.d)(d.Fragment,null,Object(u.d)(N,{size:n,active:t===P.ACTIVE}),t===P.SUCCESS&&Object(u.d)(z,{as:x,size:n}),t===P.ERROR&&Object(u.d)(z,{as:S,size:n}))},W=U;U&&U===Object(U)&&Object.isExtensible(U)&&Object.defineProperty(U,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingIcon",filename:"src/components/LoadingButton/components/LoadingIcon/LoadingIcon.js"}});var M=W;"undefined"!==typeof W&&W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingIcon",filename:"src/components/LoadingButton/components/LoadingIcon/index.js"}});var V=n("./node_modules/prop-types/index.js"),Z=n.n(V),q=y.sizes.KILO,K=y.sizes.MEGA,H=y.sizes.GIGA,Y=Z.a.oneOf([q,K,H]);"undefined"!==typeof Y&&Y&&Y===Object(Y)&&Object.isExtensible(Y)&&Object.defineProperty(Y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SIZE_PROP_TYPE",filename:"src/components/Button/constants.js"}});var J={disabled:Z.a.bool,flat:Z.a.bool,href:Z.a.string,plain:Z.a.bool,primary:Z.a.bool,size:Y,secondary:Z.a.bool,stretch:Z.a.bool,target:Z.a.string};"undefined"!==typeof J&&J&&J===Object(J)&&Object.isExtensible(J)&&Object.defineProperty(J,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BUTTON_PROP_TYPES",filename:"src/components/Button/constants.js"}});var X={disabled:!1,flat:!1,href:null,plain:!1,primary:!1,secondary:!1,size:K,stretch:!1,target:null};"undefined"!==typeof X&&X&&X===Object(X)&&Object.isExtensible(X)&&Object.defineProperty(X,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BUTTON_DEFAULT_PROPS",filename:"src/components/Button/constants.js"}});var Q=["deepRef","as","flat","secondary","stretch"];"undefined"!==typeof Q&&Q&&Q===Object(Q)&&Object.isExtensible(Q)&&Object.defineProperty(Q,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"REGULAR_BUTTON_ONLY_PROPS",filename:"src/components/Button/constants.js"}});var $={name:"1iev3c7",styles:"opacity:0;transform:translate(0,100%);"},ee=Object(j.a)("div",{target:"epl8o4o0"})({name:"79elbk",styles:"position:relative;"}),te=Object(j.a)("div",{target:"epl8o4o1"})(function(e){var t=e.theme;return Object(u.c)("opacity:1;transform:translate(0,0);transition:opacity ",t.transitions.default,",transform ",t.transitions.default,";")},";",function(e){return e.loadingState!==P.DISABLED&&$},";"),ne=function(e){var t=e.loadingState,n=e.size,o=e.children,i=e.onClick,r=e.isLoading,s=Object(m.a)(e,["loadingState","size","children","onClick","isLoading"]);return Object(u.d)(f.a,Object(a.a)({},s,{size:n,onClick:r?null:i,isLoading:r}),Object(u.d)(ee,null,Object(u.d)(M,{size:n,loadingState:t}),Object(u.d)(te,{loadingState:t},o)))};ne.defaultProps=Object(o.a)({},X,{loadingState:P.DISABLED,isLoading:!1});var oe=ne;ne&&ne===Object(ne)&&Object.isExtensible(ne)&&Object.defineProperty(ne,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingButton",filename:"src/components/LoadingButton/components/Button/Button.js"}});var ae=oe;"undefined"!==typeof oe&&oe&&oe===Object(oe)&&Object.isExtensible(oe)&&Object.defineProperty(oe,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/LoadingButton/components/Button/index.js"}});var ie=Object(p.isEqual)(P.ACTIVE);"undefined"!==typeof ie&&ie&&ie===Object(ie)&&Object.isExtensible(ie)&&Object.defineProperty(ie,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isActive",filename:"src/components/LoadingButton/utils.js"}});var re=Object(p.isEqual)(P.DISABLED);"undefined"!==typeof re&&re&&re===Object(re)&&Object.isExtensible(re)&&Object.defineProperty(re,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isDisabled",filename:"src/components/LoadingButton/utils.js"}});var se=Object(p.isEqual)(P.SUCCESS);"undefined"!==typeof se&&se&&se===Object(se)&&Object.isExtensible(se)&&Object.defineProperty(se,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isSuccess",filename:"src/components/LoadingButton/utils.js"}});var ce=Object(p.isEqual)(P.ERROR);"undefined"!==typeof ce&&ce&&ce===Object(ce)&&Object.isExtensible(ce)&&Object.defineProperty(ce,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isError",filename:"src/components/LoadingButton/utils.js"}});var le=P.DISABLED,ue=P.ACTIVE,de=P.SUCCESS,be=P.ERROR,pe=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).state={loadingState:le},n.onAnimationComplete=function(){var e=n.props.onAnimationComplete;e&&e(),n.setState({loadingState:le})},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,t){var n=this.state.loadingState,o=this.props,a=o.exitAnimationDuration,i=o.exitAnimation;ie(n)||t.loadingState===n||(i?this.timeout=setTimeout(this.onAnimationComplete,a):this.onAnimationComplete())}},{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"render",value:function(){var e=this.state.loadingState,t=Object(p.omit)(["onAnimationComplete","isLoading","exitAnimationDuration"],this.props),n=ie(e)||se(e)||ce(e);return Object(u.d)(ae,Object(a.a)({},t,{loadingState:e,isLoading:n}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.isLoading,o=e.exitAnimation,a=t.loadingState;return se(a)||ce(a)?null:n&&re(a)?{loadingState:ue}:!n&&ie(a)?{loadingState:o||le}:null}}]),t}(d.Component);pe.SUCCESS=de,pe.ERROR=be,pe.defaultProps=Object(o.a)({},X,{isLoading:!1,exitAnimationDuration:2e3,exitAnimation:null,onAnimationComplete:p.noop}),"undefined"!==typeof pe&&pe&&pe===Object(pe)&&Object.isExtensible(pe)&&Object.defineProperty(pe,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingButton",filename:"src/components/LoadingButton/LoadingButton.js"}}),"undefined"!==typeof pe&&pe&&pe===Object(pe)&&Object.isExtensible(pe)&&Object.defineProperty(pe,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingButton",filename:"src/components/LoadingButton/LoadingButton.js"}});t.a=pe;"undefined"!==typeof pe&&pe&&pe===Object(pe)&&Object.isExtensible(pe)&&Object.defineProperty(pe,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingButton",filename:"src/components/LoadingButton/index.js"}})},"./src/components/Spinner/index.js":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),s=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),c=n("./node_modules/react/index.js"),l=n.n(c);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var d=l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",fill:"white",fillOpacity:.4}),b=l.a.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12H24C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 10.9641 0.131259 9.95886 0.378052 9C1.71018 3.82432 6.40848 0 12 0V2C7.34314 2 3.42514 5.18502 2.31493 9.49852C2.1097 10.2959 2 11.1337 2 12C2 17.5228 6.47715 22 12 22Z",transform:"translate(0 24) rotate(-90)"}),p=function(e){return l.a.createElement("svg",u({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),d,b)};n.p;function m(){var e=Object(i.a)(["\n  0% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 360deg);\n  }\n"]);return m=function(){return e},e}var j=Object(s.e)(m()),f=function(e){var t=e.theme;return Object(s.c)("width:100%;height:100%;& > path{fill:",t.colors.white,";}")},g=function(e){var t=e.theme;return e.dark&&Object(s.c)("& > path{fill:",t.colors.n900,";}")},O=Object(s.c)("label:spinner;& > path{animation:",j," 1s infinite linear;transform-origin:50% 50%;}"),h=Object(r.a)(p,{target:"e1lvm7n10"})(f,";",g,";",O,";"),y={name:"1f189sd",styles:"opacity:0;max-width:fit-content;position:relative;transition:opacity 200ms ease-in-out;"},_={name:"whh5e5",styles:"opacity:1;"},B=function(e){return e.active&&_},v=Object(r.a)("div",{target:"e1lvm7n11"})(y,B,""),x=function(e){var t=e.dark,n=e.active,i=Object(a.a)(e,["dark","active"]);return Object(s.d)(v,Object(o.a)({active:n},i),Object(s.d)(h,{dark:t?1:0}))};x.defaultProps={dark:!1,active:!0,role:"alert","aria-busy":"true","aria-live":"assertive"};var L=x;x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spinner",filename:"src/components/Spinner/Spinner.js"}});t.a=L;"undefined"!==typeof L&&L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spinner",filename:"src/components/Spinner/index.js"}})}}]);
//# sourceMappingURL=docs-content-components-button.bd91e4e39b0931e2fb2c.js.map