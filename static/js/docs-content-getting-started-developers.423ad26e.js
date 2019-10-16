(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./docs/content/getting-started/developers.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/@emotion/core/dist/core.browser.esm.js"),n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),c={},r="wrapper";function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(r,Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"developers"},"Developers"),Object(a.b)("h2",{id:"install"},"Install"),Object(a.b)("h3",{id:"adding-circuit-to-an-existing-app"},"Adding Circuit to an existing app"),Object(a.b)("p",null,"You can install Circuit via npm or yarn. It relies on\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/emotion-js/emotion"}),"emotion")," and\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/emotion-js/emotion/tree/master/packages/emotion-theming"}),"emotion-theming")," (as well as\nReact) being available in whatever project you are working on."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm install @sumup/circuit-ui @emotion/core @emotion/styled emotion-theming\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @sumup/circuit-ui @emotion/core @emotion/styled emotion-theming\n")),Object(a.b)("h3",{id:"creating-a-new-app-with-circuit"},"Creating a new app with Circuit"),Object(a.b)("p",null,"You can use ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/sumup/create-sumup-react-app"}),"create-sumup-react-app")," (powered by ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app"}),"create-react-app"),") to scaffold out a new development-ready React app with Circuit built-in."),Object(a.b)("h3",{id:"creating-presentations-with-circuit"},"Creating presentations with Circuit"),Object(a.b)("p",null,"You can create presentations with ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/sumup/circuit-deck"}),"circuit-deck"),", a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jxnblk/mdx-deck"}),"mdx-deck")," starter with Circuit built-in."),Object(a.b)("h2",{id:"configuring-the-theme"},"Configuring the theme"),Object(a.b)("p",null,"At the root of your application, you should tell your app which theme to use.\nIn most cases, you will want to use the SumUp default theme."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { ThemeProvider } from 'emotion-theming';\nimport { Button, theme } from '@sumup/circuit-ui';\n\nconst App = () => (\n  <ThemeProvider theme={theme.circuit}>\n    <Button primary>Click me</Button>\n  </ThemeProvider>\n);\n\nexport default App;\n")),Object(a.b)("h2",{id:"using-components"},"Using components"),Object(a.b)("p",null,"Simply import components by name from the ",Object(a.b)("inlineCode",{parentName:"p"},"@sumup/circuit-ui")," package, as demonstrated\nabove."),Object(a.b)("h3",{id:"custom-base-components"},"Custom base components"),Object(a.b)("p",null,"Some of the low-level components that are used in Circuit UI can be overridden with custom components. This is useful e.g. when your application is using a custom router and needs to use a special ",Object(a.b)("inlineCode",{parentName:"p"},"Link")," component."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { Link } from 'react-router-dom';\nimport { ComponentsContext, Button } from '@sumup/circuit-ui';\n\nconst CustomLink = ({ to, ...rest }) => <Link href={to} {...rest} />;\n\nconst App = () => (\n  <ComponentsContext.Provider value={{ Link: CustomLink }}>\n    <Button href=\"/\">Home</Button>\n  </ComponentsContext.Provider>\n);\n\nexport default App;\n")),Object(a.b)("p",null,"Using the context provider and specifying custom components is fully optional, Circuit will fall back to built-in components. You can also override only a subset of components, Circuit will merge them with the default components."),Object(a.b)("p",null,"In order to access the base components in your own application you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"withComponents")," higher-order component or the ",Object(a.b)("inlineCode",{parentName:"p"},"useComponents")," hook:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { useComponents, withComponents } from '@sumup/circuit-ui';\n\nconst Navigation = ({ links }) => {\n  const { Link } = useComponents();\n  return links.map(({ href, label }) => <Link href={href}>{label}</Link>);\n};\n\nconst Logo = ({ components, companyName, companyUrl }) => {\n  const { Link } = components;\n  return <Link href={companyUrl}>{companyName}</Link>;\n};\n\nconst FooterWithComponents = withComponents(Footer);\n")),Object(a.b)("p",null,"Below is an overview of the base components:"),Object(a.b)("h4",{id:"link"},Object(a.b)("inlineCode",{parentName:"h4"},"Link")),Object(a.b)("p",null,"Accepts the same props as the ",Object(a.b)("inlineCode",{parentName:"p"},"<a>")," HTML tag. If your custom component expects different props, you need to map them to the standard attributes (see the example above)."),Object(a.b)("h2",{id:"contributing"},"Contributing"),Object(a.b)("p",null,"Please see our ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/sumup/circuit-ui/blob/master/.github/CONTRIBUTING.md"}),"contribution guidelines"),"\nto learn how you can contribute to thise project."))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/content/getting-started/developers.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-content-getting-started-developers.bd91e4e39b0931e2fb2c.js.map