(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./docs/content/components/sidebar.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),r=n("./node_modules/react/index.js"),l=n("./node_modules/@mdx-js/react/dist/index.es.js"),s=n("./node_modules/docz/dist/index.esm.js"),c=n("./src/components/Sidebar/index.js"),b=n("./docs/utils/Statuses.js"),d=n("./src/components/Text/index.js"),u=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),p=function(){var e=Object(r.useState)(0),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(i.d)(c.a,{open:!0,onClose:function(){return null},closeButtonLabel:"close-button"},Object(i.d)(c.a.Header,null,"Header"),Object(i.d)(c.a.NavList,null,Object(i.d)(c.a.Aggregator,{label:"Overview"},Object(i.d)(c.a.NavItem,{onClick:function(){return a(0)},label:"Analytics",selected:0===n}),Object(i.d)(c.a.NavItem,{onClick:function(){return a(1)},label:"Payouts and Balances",selected:1===n})),Object(i.d)(c.a.NavItem,{selected:2===n,onClick:function(){return a(2)},label:"Transactions"}),Object(i.d)(c.a.NavItem,{selected:3===n,onClick:function(){return a(3)},label:"Settings"})),Object(i.d)(c.a.Footer,null,"Footer"))},m=p;p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SidebarWithState",filename:"docs/content/components/sidebar.js"}}),n.d(t,"default",function(){return v});var f={},j="wrapper";function v(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(j,Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"sidebar"},"Sidebar"),Object(l.b)(b.a.InReview,null)," ",Object(l.b)(b.a.Description,{size:d.a.KILO},"Under active development"),Object(l.b)("p",null,"The sidebar is the primary navigational component on SumUp's web-based applications. It groups different\nsections of the same product (the merchant dashboard, for example), allowing easy navigation between first\nand the second level of navigations, keeping a strong anchor for our merchants to always know where they are."),Object(l.b)(s.c,{__position:1,__code:"<SidebarWithState />",__scope:{props:this?this.props:n,Playground:s.c,Props:s.d,Fragment:r.Fragment,Sidebar:c.a,Status:b.a,Text:d.a,SidebarWithState:m},__codesandbox:"undefined",mdxType:"Playground"},Object(l.b)(m,{mdxType:"SidebarWithState"})),Object(l.b)(s.d,{of:c.a,mdxType:"Props"}),Object(l.b)("h2",{id:"when-to-use-it"},"When to use it"),Object(l.b)("p",null,"If you have a single product that is web-based and has multiple value propositions/actions for a given user,\nyou should use a sidebar to ensure the usability and navigation of that product."),Object(l.b)("p",null,"The sidebar supports first and second level items. The first level is used for primary actions/value for our merchants within a product.\nWhen you have related multiple sections or the breakdown of a certain value you should group them as secondary items under a single first level item,\nwhich will act as an aggregator."),Object(l.b)("h2",{id:"usage-guidelines"},"Usage guidelines"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Do")," use sentence case for every single navigation items"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Do")," always position the sidebar on the left side on desktop and in the top side (collapsed version) on mobile"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Do")," make sure that the sidebar is always visible and sticky, both on desktop and mobile"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Do")," add icons to first level items to help our merchants understand what they should expect in that section"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Do")," group related items of a given action under a secondary"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Do not")," place any element or part of an element on the sidebar."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Do not")," use the secondary level as anchors of the first level.")),Object(l.b)("h2",{id:"content-guidelines"},"Content guidelines"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Do")," use sentence case for naming navigation items"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Do")," order the items according to the priority/usage of the action/value"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Do")," place the log out (if your application has a logged in environment) as an item on the sidebar"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Do not")," use more than 3 words for your an item (aim for 1 word if possible)")),Object(l.b)("h2",{id:"usage-in-code"},"Usage in code"),Object(l.b)("p",null,"There are a couple of different components you'll need to construct your\nSidebar:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Sidebar")," - Wrapper component, which must also be wrapped with a component\nthat will determine the width of the expanded sidebar."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Sidebar.Header")," - Header component"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Sidebar.NavList")," - Wrapper for the list of navigation items"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Sidebar.Aggregator")," - Wraps around a list of ",Object(l.b)("inlineCode",{parentName:"li"},"Sidebar.NavItem")," in case\nyou want to provided nested navigation."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Sidebar.NavItem")," - Individual navigation items."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Sidebar.Footer")," - Footer component")),Object(l.b)("h3",{id:"adding-items-to-the-sidebar"},"Adding items to the sidebar"),Object(l.b)("p",null,"When you want to create a sidebar with a flat navigation structure, you\ncan simply use something like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'import React, { useState } from \'react\';\nimport { Sidebar } from \'@sumup/circuit-ui\';\n\nconst Navigation = () => {\n  const [open, setOpen] = useState(false);\n  const [selected, setSelected] = useState([false, false]);\n  const handleSelect = newSelectedIndex => {\n    setSelected(selected.map((s, i) => i === newSelectedIndex && !i);\n  };\n\n  return (\n    <Sidebar open={open} onClose={() => setOpen(!open)} closeButtonLabel="close-button">\n      <Sidebar.Header>Header</Sidebar.Header>\n      <Sidebar.NavList>\n        <Sidebar.NavItem\n          selected={selected[0]}\n          onClick={() => handleSelect(0)}\n          label="Item #1"\n        />\n        <Sidebar.NavItem\n          selected={selected[1]}\n          onClick={() => handleSelect(1)}\n          label="Item #2"\n        />\n      </Sidebar.NavList>\n      <Sidebar.Footer>Footer</Sidebar.Footer>\n    </Sidebar>\n  );\n};\n')),Object(l.b)("h3",{id:"adding-submenus-to-the-sidebar"},"Adding submenus to the sidebar"),Object(l.b)("p",null,"In order to create submenus, you need to wrap the ",Object(l.b)("inlineCode",{parentName:"p"},"Sidebar.NavItem")," components\nthat you want to put inside a parent menu with the ",Object(l.b)("inlineCode",{parentName:"p"},"Sidebar.Aggregator"),"\ncomponent. You can do that like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'<Sidebar.Aggregator label="Parent">\n  <Sidebar.NavItem\n    onClick={() => null}\n    label="Child 1"\n    selected={true}\n  />\n  <Sidebar.NavItem\n    onClick={() => null}\n    label="Child 2"\n    selected={false}\n  />\n</Sidebar.Aggregator>\n')),Object(l.b)("h3",{id:"using-the-sidebarcontext"},"Using the SidebarContext"),Object(l.b)("p",null,"To avoid keeping the logic of toggling the ",Object(l.b)("inlineCode",{parentName:"p"},"Sidebar")," on your application, you can use the available\n",Object(l.b)("inlineCode",{parentName:"p"},"SidebarContextProvider")," and ",Object(l.b)("inlineCode",{parentName:"p"},"SidebarContextConsumer")," that are implemented with the new version of\nReact's Context API. You can do that like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'import React, { useState } from \'react\';\nimport { Sidebar, SidebarContextProvider, SidebarContextConsumer } from \'@sumup/circuit-ui\';\n\nconst Navigation = () => {\n  const [selected, setSelected] = useState([false, false]);\n  const handleSelect = newSelectedIndex => {\n    setSelected(selected.map((s, i) => i === newSelectedIndex && !i);\n  };\n\n  return (\n    <SidebarContextProvider>\n      <SidebarContextConsumer>\n        {({ isSidebarOpen, toggleSidebar }) => (\n          <Sidebar\n            open={isSidebarOpen}\n            onClose={toggleSidebar}\n            closeButtonLabel="close-button"\n          >\n            <Sidebar.Header>Header</Sidebar.Header>\n            <Sidebar.NavList>\n              <Sidebar.NavItem\n                selected={selected[0]}\n                onClick={() => handleSelect(0)}\n                label="Item #1"\n                />\n              <Sidebar.NavItem\n                selected={selected[1]}\n                onClick={() => handleSelect(1)}\n                label="Item #2"\n              />\n            </Sidebar.NavList>\n            <Sidebar.Footer>Footer</Sidebar.Footer>\n          </Sidebar>\n        )}\n      </SidebarContextConsumer\n    </SidebarContextProvider>\n  );\n};\n')),Object(l.b)("p",null,"That way, you can use the ",Object(l.b)("inlineCode",{parentName:"p"},"SidebarContextConsumer")," to control the ",Object(l.b)("inlineCode",{parentName:"p"},"Sidebar")," open state on other\ncomponents of your application without the need to drill the toggling function to where you need\nto use it."))}v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/content/components/sidebar.mdx"}}),v.isMDXComponent=!0},"./src/components/ComponentsContext/withComponents.js":function(e,t,n){"use strict";var a={};n.r(a),n.d(a,"Link",function(){return u});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),l=n("./node_modules/react/index.js"),s=n("./node_modules/recompose/dist/Recompose.esm.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),b=function(e){var t=e.children,n=Object(c.a)(e,["children"]);return Object(r.d)("a",n,t)},d=b;b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Link",filename:"src/components/ComponentsContext/components/Link/Link.js"}});var u=d;"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Link",filename:"src/components/ComponentsContext/components/Link/index.js"}}),"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Link",filename:"src/components/ComponentsContext/components/index.js"}});var p=Object(l.createContext)(a),m=p;"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ComponentsContext",filename:"src/components/ComponentsContext/ComponentsContext.js"}});var f=function(e){function t(t){return Object(r.d)(m.Consumer,null,function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.d)(e,Object(o.a)({},t,{components:Object(i.a)({},a,n)}))})}return t.displayName=Object(s.d)(e,"withComponents"),t};t.a=f;f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"withComponents",filename:"src/components/ComponentsContext/withComponents.js"}})},"./src/components/Sidebar/SidebarContext.js":function(e,t,n){"use strict";n.d(t,"b",function(){return p}),n.d(t,"a",function(){return u});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),s=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),c=n("./node_modules/react/index.js"),b=n.n(c),d=Object(c.createContext)(),u=d.Consumer,p=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l)))).state={isSidebarOpen:!1},n.toggleSidebar=function(){n.setState(function(e){return{isSidebarOpen:!e.isSidebarOpen}})},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return Object(s.d)(d.Provider,{value:{isSidebarOpen:this.state.isSidebarOpen,toggleSidebar:this.toggleSidebar}},this.props.children)}}]),t}(b.a.Component);"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SidebarContextConsumer",filename:"src/components/Sidebar/SidebarContext.js"}}),"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SidebarContextProvider",filename:"src/components/Sidebar/SidebarContext.js"}})},"./src/components/Sidebar/index.js":function(e,t,n){"use strict";var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),i=n("./node_modules/react/index.js"),r=n.n(i),l=n("./node_modules/prop-types/index.js"),s=n.n(l),c=function(e){var t=e.theme;return Object(o.c)("label:sidebar-header;display:flex;align-self:flex-start;align-items:center;justify-content:flex-start;min-height:64px;width:100%;padding:",t.spacings.mega,";background-color:",t.colors.bodyColor,";color:",t.colors.n100,";")},b=Object(a.a)("header",{target:"e17dbft90"})(c,"");b.propTypes={children:s.a.node};var d=b;"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Header",filename:"src/components/Sidebar/components/Header/Header.js"}});var u=d;"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Header",filename:"src/components/Sidebar/components/Header/index.js"}});var p=function(e){var t=e.theme;return Object(o.c)("label:sidebar-footer;display:flex;flex:1;align-items:flex-end;padding:",t.spacings.giga,";background-color:",t.colors.n900,";color:",t.colors.n100,";")},m=Object(a.a)("footer",{target:"e17ydz1w0"})(p,"");m.propTypes={children:s.a.node};var f=m;"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Footer",filename:"src/components/Sidebar/components/Footer/Footer.js"}});var j=f;"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Footer",filename:"src/components/Sidebar/components/Footer/index.js"}});var v={name:"q8jbgh-nav-list",styles:"label:nav-list;height:auto;justify-self:flex-start;overflow-y:auto;width:100%;"},O=function(){return v},h=Object(a.a)("ul",{target:"eu5okpo0"})(O,"");h.propTypes={children:s.a.node};var g=h;"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NavList",filename:"src/components/Sidebar/components/NavList/NavList.js"}});var y=g;"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NavList",filename:"src/components/Sidebar/components/NavList/index.js"}});var x=n("./src/components/ComponentsContext/withComponents.js"),S=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),C=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_={name:"1qroffu-nav-label--secondary--visible",styles:"label:nav-label--secondary--visible;margin-top:0px;"},N=Object(a.a)("div",{target:"ew5ut0z0"})(function(e){var t=e.theme;return Object(o.c)("label:nav-label;margin-left:",t.spacings.kilo,";")},function(e){var t=e.theme;return e.secondary&&Object(o.c)("label:nav-label--secondary;margin-left:0px;margin-top:-",t.spacings.kilo,";transition:margin-top ",t.transitions.slow,";")},function(e){var t=e.secondary,n=e.visible;return t&&n&&_},"");N.propTypes={secondary:s.a.bool,visible:s.a.bool};var k=N;"undefined"!==typeof N&&N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NavLabel",filename:"src/components/Sidebar/components/NavLabel/NavLabel.js"}});var w=k;"undefined"!==typeof k&&k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NavLabel",filename:"src/components/Sidebar/components/NavLabel/index.js"}});var P=n("./node_modules/lodash/fp.js"),I=n("./src/util/type-check.js");function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var L=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V10H8V7C8 5.93913 8.42143 4.92172 9.17157 4.17157ZM6 10V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V10H20C20.5523 10 21 10.4477 21 11V22C21 22.5523 20.5523 23 20 23H4C3.44772 23 3 22.5523 3 22V11C3 10.4477 3.44772 10 4 10H6ZM17 12H7H5V21H19V12H17Z",fill:"#9DA7B1"}),A=function(e){return r.a.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),L)},H=(n.p,function(e){return!!e&&(Object(I.a)(e)?!Object(P.isEmpty)(e.filter(function(e){return e.props.selected})):e.props.selected)});H&&H===Object(H)&&Object.isExtensible(H)&&Object.defineProperty(H,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"hasSelectedChild",filename:"src/components/Sidebar/components/NavItem/utils.js"}});var F=function(e){var t=e.defaultIcon,n=e.selected,a=e.selectedIcon,i=e.disabled,r=Object(o.d)(A,null),l=!!t;return l&&i?r:l&&a&&n?a:l?t:null};F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getIcon",filename:"src/components/Sidebar/components/NavItem/utils.js"}});var B=Object(a.a)("a",{target:"e334mjm0"})(function(e){var t=e.theme;return Object(o.c)("label:nav-item;display:flex;align-items:center;justify-content:flex-start;height:auto;margin:",t.spacings.mega,";padding:",t.spacings.bit,";cursor:pointer;color:",t.colors.n500,";text-decoration:none;*{fill:",t.colors.n500,";}")},function(e){var t=e.theme,n=e.selected;return!e.disabled&&!n&&Object(o.c)("label:nav-item--hover;&:hover{color:",t.colors.n300,";*{fill:",t.colors.n300,";}}")},function(e){var t=e.theme;return e.selected&&Object(o.c)("label:nav-item--active;font-weight:",t.fontWeight.bold,";color:",t.colors.n100,";*{fill:",t.colors.n100,";}")},function(e){var t=e.theme;return e.secondary&&Object(o.c)("label:nav-item--secondary;margin:0px ",t.spacings.giga,";padding:",t.spacings.bit," 0px;transition:top ",t.transitions.default,";")},function(e){var t=e.theme;return e.disabled&&Object(o.c)("label:nav-item--disabled;cursor:not-allowed;color:",t.colors.n700,";*{fill:",t.colors.n700,";}")},""),T=function(e){var t=e.label,n=e.secondary,a=e.visible,i=e.defaultIcon,r=e.selectedIcon,l=e.selected,s=e.disabled,c=e.onClick,b=e.components,d=Object(C.a)(e,["label","secondary","visible","defaultIcon","selectedIcon","selected","disabled","onClick","components"]),u=F({defaultIcon:i,selected:l,selectedIcon:r,disabled:s}),p=B.withComponent(b.Link,{target:"e334mjm1"});return Object(o.d)("li",null,Object(o.d)(p,Object(S.a)({onClick:s?null:c,selected:l,secondary:n,visible:a,disabled:s},d),u,Object(o.d)(w,{secondary:n,visible:a},t)))};T.defaultProps={label:"",secondary:!1,visible:!0,defaultIcon:"",selectedIcon:"",selected:!1,disabled:!1,onClick:null};var D=T;T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NavItem",filename:"src/components/Sidebar/components/NavItem/NavItem.js"}});var W=Object(x.a)(D),z=function(e){var t=e.theme;return Object(o.c)("label:sidebar-backdrop;width:100%;height:100%;position:absolute;background-color:",t.colors.n900,";transition:opacity ",t.transitions.default,",visibility ",t.transitions.default,";visibility:hidden;opacity:0;z-index:",t.zIndex.backdrop,";",t.mq.giga,"{visibility:hidden;}")},R={name:"1r67uk6-sidebar-backdrop--visible",styles:"label:sidebar-backdrop--visible;visibility:visible;opacity:0.56;"},V=function(e){return e.visible&&R},X=Object(a.a)("div",{target:"e8hexh10"})(z,V,"");X.propTypes={children:s.a.node,visible:s.a.bool};var q=X;"undefined"!==typeof X&&X&&X===Object(X)&&Object.isExtensible(X)&&Object.defineProperty(X,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Backdrop",filename:"src/components/Sidebar/components/Backdrop/Backdrop.js"}});var M=q;"undefined"!==typeof q&&q&&q===Object(q)&&Object.isExtensible(q)&&Object.defineProperty(q,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Backdrop",filename:"src/components/Sidebar/components/Backdrop/index.js"}});var U=n("./node_modules/polished/dist/polished.es.js");function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var J=r.a.createElement("line",{x1:18,y1:6,x2:6,y2:18}),Y=r.a.createElement("line",{x1:6,y1:6,x2:18,y2:18}),K=function(e){return r.a.createElement("svg",Z({width:20,height:20,viewBox:"0 0 24 24",fill:"#212933",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-x"},e),J,Y)},G=(n.p,{name:"8f0w6p-close-button--visible",styles:"label:close-button--visible;visibility:visible;opacity:1;"}),Q=Object(a.a)("span",{target:"e17xz65o0"})(Object(U.a)(),";"),$=Object(a.a)("button",{target:"e17xz65o1"})(function(e){var t=e.theme;return Object(o.c)("label:sidebar-close-button;cursor:pointer;outline:none;display:flex;align-items:center;justify-content:center;height:40px;width:40px;border-radius:50%;background-color:",t.colors.n100,";position:absolute;bottom:",t.spacings.mega,";right:",t.spacings.mega,";transition:opacity 150ms ease-in-out,visibility 150ms ease-in-out;visibility:hidden;opacity:0;z-index:",t.zIndex.sidebar,";",t.mq.giga,"{visibility:hidden;}")},";",function(e){return e.visible&&G},";"),ee=function(e){var t=e.visible,n=e.closeButtonLabel,a=e.onClick,i=Object(C.a)(e,["visible","closeButtonLabel","onClick"]);return Object(o.d)($,Object(S.a)({visible:t,onClick:a},i),Object(o.d)(Q,null,n),Object(o.d)(K,{"aria-hidden":"true"}))};ee.defaultProps={visible:!1,onClick:null};var te=ee;ee&&ee===Object(ee)&&Object.isExtensible(ee)&&Object.defineProperty(ee,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CloseButton",filename:"src/components/Sidebar/components/CloseButton/CloseButton.js"}});var ne=te;"undefined"!==typeof te&&te&&te===Object(te)&&Object.isExtensible(te)&&Object.defineProperty(te,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CloseButton",filename:"src/components/Sidebar/components/CloseButton/index.js"}});var ae=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),oe=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),ie=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),re=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),le=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),se=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),ce=function(e){return Object(I.a)(e)?Object(P.findIndex)(function(e){return e.props.selected},e):0},be=function(e,t){return e?Object(I.a)(e)?e.map(function(e){return Object(se.a)({},e,{props:Object(se.a)({},e.props,{secondary:!0,visible:t})})}):Object(se.a)({},e,{props:Object(se.a)({},e.props,{secondary:!0,visible:t})}):null};be&&be===Object(be)&&Object.isExtensible(be)&&Object.defineProperty(be,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSecondaryChild",filename:"src/components/Sidebar/components/SubNavList/utils.js"}}),ce&&ce===Object(ce)&&Object.isExtensible(ce)&&Object.defineProperty(ce,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSelectedChildIndex",filename:"src/components/Sidebar/components/SubNavList/utils.js"}});var de=Object(a.a)("ul",{target:"eeijuub0"})(function(e){var t=e.theme;return Object(o.c)("label:sub-nav-list;margin:-",t.spacings.byte," 0 ",t.spacings.byte," ",t.spacings.tera,";list-style:none;height:0;position:absolute;opacity:0;visibility:hidden;overflow:hidden;")},function(e){var t=e.theme,n=e.selectedChildIndex;return n>=0&&Object(o.c)("label:sub-nav-list--selected;&::after{content:'';width:2px;background:",t.colors.p500,";height:",32,"px;border-radius:",t.borderRadius.kilo,";position:absolute;top:calc(",32,"px * ",n,");transition:top ",t.transitions.default,";}")},function(e){var t=e.theme,n=e.children;return n&&Object(o.c)("label:sub-nav-list__children;&::before{content:'';width:2px;background:",t.colors.n700,";height:calc(",32,"px * ",n.length,");position:absolute;top:0;border-radius:",t.borderRadius.kilo,";}")},function(e){var t=e.theme,n=e.visible,a=e.children;return n&&Object(o.c)("label:sub-nav-list--visible;height:calc(",32,"px * ",a.length,");position:relative;opacity:1;visibility:visible;transition:height ",t.transitions.default,",opacity ",t.transitions.default," 100ms,visibility ",t.transitions.default," 100ms;")},""),ue=function(e){var t=e.children,n=e.visible;return Object(o.d)(de,{visible:n,selectedChildIndex:ce(t)},be(t,n))};ue.defaultProps={children:null,visible:!1};var pe=ue;ue&&ue===Object(ue)&&Object.isExtensible(ue)&&Object.defineProperty(ue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SubNavList",filename:"src/components/Sidebar/components/SubNavList/SubNavList.js"}});var me=pe;"undefined"!==typeof pe&&pe&&pe===Object(pe)&&Object.isExtensible(pe)&&Object.defineProperty(pe,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SubNavList",filename:"src/components/Sidebar/components/SubNavList/index.js"}});var fe=Object(a.a)("div",{target:"etuzo6d0"})(function(e){var t=e.theme;return Object(o.c)("label:nav-aggregator;display:flex;flex-direction:row;justify-content:flex-start;height:auto;margin:",t.spacings.mega,";padding:",t.spacings.bit,";cursor:pointer;color:",t.colors.n500,";*{fill:",t.colors.n500,";}")},function(e){var t=e.theme,n=e.disabled,a=e.selected;return!n&&!a&&Object(o.c)("label:nav-aggregator--hover;&:hover{color:",t.colors.n300,";*{fill:",t.colors.n300,";}}")},function(e){var t=e.theme;return e.selected&&Object(o.c)("label:nav-aggregator--active;color:",t.colors.n100,";*{fill:",t.colors.n100,";}")},function(e){var t=e.theme;return e.disabled&&Object(o.c)("label:nav-item--disabled;cursor:not-allowed;color:",t.colors.n700,";*{fill:",t.colors.n700,";}")},""),je=function(e){function t(){var e,n;Object(ae.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(ie.a)(this,(e=Object(re.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1},n.closeAggregator=function(){n.setState({open:!1})},n.toggleAggregator=function(){var e=n.props.onClick;n.setState(function(e){return{open:!e.open}}),e&&e()},n}return Object(le.a)(t,e),Object(oe.a)(t,[{key:"componentDidUpdate",value:function(e,t){var n=this.props.children;(H(e.children)||t.open)&&!H(n)&&this.closeAggregator()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.label,a=e.defaultIcon,r=e.selectedIcon,l=e.disabled,s=(e.onClick,Object(C.a)(e,["children","label","defaultIcon","selectedIcon","disabled","onClick"])),c=this.state.open,b=F({selected:H(t),selectedIcon:r,defaultIcon:a,disabled:l});return Object(o.d)(i.Fragment,null,Object(o.d)(fe,Object(S.a)({selected:H(t),disabled:l,onClick:this.toggleAggregator},s),b,Object(o.d)(w,null,n)),t&&!l&&Object(o.d)(me,{visible:c},t))}}],[{key:"getDerivedStateFromProps",value:function(e){return H(e.children)?{open:!0}:null}}]),t}(i.Component);je.defaultProps={children:null,label:"",defaultIcon:"",selectedIcon:"",disabled:!1,onClick:null};var ve=je;"undefined"!==typeof je&&je&&je===Object(je)&&Object.isExtensible(je)&&Object.defineProperty(je,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Aggregator",filename:"src/components/Sidebar/components/Aggregator/Aggregator.js"}});var Oe=ve;"undefined"!==typeof ve&&ve&&ve===Object(ve)&&Object.isExtensible(ve)&&Object.defineProperty(ve,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Aggregator",filename:"src/components/Sidebar/components/Aggregator/index.js"}});var he=function(e){var t=e.theme;return Object(o.c)("label:sidebar;display:flex;flex-direction:column;height:100%;min-width:",256,"px;background-color:",t.colors.n900,";transition:transform ",t.transitions.default,";position:absolute;transform:translateX(-100%);z-index:",t.zIndex.sidebar,";",t.mq.giga,"{transform:translateX(0);position:relative;}")},ge=function(e){var t=e.theme;return e.open&&Object(o.c)("label:sidebar--open;transform:translateX(0);",t.mq.giga,"{transform:translateX(0);}")},ye=Object(a.a)("nav",{target:"e1fp19630"})(he,ge,""),xe=function(e){var t=e.children,n=e.open,a=e.closeButtonLabel,r=e.onClose,l=e.className;return Object(o.d)(i.Fragment,null,Object(o.d)(ye,{open:n,className:l},t),Object(o.d)(M,{visible:n,onClick:r,"data-testid":"sidebar-backdrop"}),Object(o.d)(ne,{visible:n,closeButtonLabel:a,onClick:r,"data-testid":"sidebar-close-button"}))};xe.defaultProps={children:"",open:!1,onClose:null},xe.Header=u,xe.Footer=j,xe.NavList=y,xe.NavItem=W,xe.Aggregator=Oe;var Se=xe;xe&&xe===Object(xe)&&Object.isExtensible(xe)&&Object.defineProperty(xe,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Sidebar",filename:"src/components/Sidebar/Sidebar.js"}});var Ce=n("./src/components/Sidebar/SidebarContext.js");t.a=Se;"undefined"!==typeof Se&&Se&&Se===Object(Se)&&Object.isExtensible(Se)&&Object.defineProperty(Se,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Sidebar",filename:"src/components/Sidebar/index.js"}}),"undefined"!==typeof Ce.a&&Ce.a&&Ce.a===Object(Ce.a)&&Object.isExtensible(Ce.a)&&Object.defineProperty(Ce.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SidebarContextConsumer",filename:"src/components/Sidebar/index.js"}}),"undefined"!==typeof Ce.b&&Ce.b&&Ce.b===Object(Ce.b)&&Object.isExtensible(Ce.b)&&Object.defineProperty(Ce.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SidebarContextProvider",filename:"src/components/Sidebar/index.js"}})},"./src/util/type-check.js":function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return i});var a=function(e){return"function"===typeof e};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isFunction",filename:"src/util/type-check.js"}});var o=function(e){return"string"===typeof e};o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isString",filename:"src/util/type-check.js"}});var i=function(e){return e&&"object"===typeof e&&e.constructor===Array};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isArray",filename:"src/util/type-check.js"}})}}]);
//# sourceMappingURL=docs-content-components-sidebar.bd91e4e39b0931e2fb2c.js.map