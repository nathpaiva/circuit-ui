(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./docs/content/components/table.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(t("./node_modules/@emotion/core/dist/core.browser.esm.js"),t("./node_modules/react/index.js")),s=t("./node_modules/@mdx-js/react/dist/index.es.js"),i=t("./node_modules/docz/dist/index.esm.js"),l=t("./src/components/Table/Table.js"),c=t("./docs/utils/Statuses.js"),d=t("./src/components/Text/index.js"),b=t("./src/components/Badge/Badge.js"),p={},u="wrapper";function h(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)(u,Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"table"},"Table"),Object(s.b)(c.a.Stable,null),Object(s.b)("p",null,"Tables allow merchants to see detailed information in an organized and orderly way, especially when\na task revolves around comparing or analyzing the information set."),Object(s.b)(i.c,{__position:1,__code:"<Table\n  headers={[\n    { children: 'Request Number', sortable: true },\n    'Product',\n    'Total order value',\n  ]}\n  rows={[\n    ['1', 'Air', '$29.99'],\n    ['2', 'Top', '$5.99'],\n    ['3', '3G', '$16.94'],\n  ]}\n/>",__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,Fragment:r.Fragment,Table:l.a,Status:c.a,Text:d.a,Badge:b.a},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(l.a,{headers:[{children:"Request Number",sortable:!0},"Product","Total order value"],rows:[["1","Air","$29.99"],["2","Top","$5.99"],["3","3G","$16.94"]],mdxType:"Table"})),Object(s.b)(i.d,{of:l.a,mdxType:"Props"}),Object(s.b)("h2",{id:"when-to-use-it"},"When to use it"),Object(s.b)("p",null,'To present data sets, such as "subaccounts" or "orders". Tables help merchants find information that they are looking\nfor faster and if the data can be manipulated it can also be used for analysis.'),Object(s.b)("h2",{id:"usage-guidelines"},"Usage guidelines"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," allow filtering and ordering, if possible, to help our merchants assess the information faster"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," pair the table component with pagination if your data set has more than 24 items"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," provide a unique identifier for each item and place it as the first column from left to right"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do not")," make an item on the table actionable. If you need this functionality, consider using a listview.")),Object(s.b)("h2",{id:"content-guidelines"},"Content guidelines"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," align the text or values within columns to left"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," provide simple and short headers for each column"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do")," use sentence case for headers"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do not")," include units of measurement on the data item, you should place it just on the header")),Object(s.b)("h2",{id:"usage-in-code"},"Usage in code"),Object(s.b)("h3",{id:"components-as-rows"},"Components as rows"),Object(s.b)("p",null,"While headers and rows can accept strings as children,\nthey can also accept objects."),Object(s.b)(i.c,{__position:3,__code:"<Table\n  headers={['Name', 'Type']}\n  rows={[\n    ['Apple', { children: <Badge color={Badge.DANGER}>Fruit</Badge> }],\n    [\n      'Broccoli',\n      { children: <Badge color={Badge.SUCCESS}>Vegetable</Badge> },\n    ],\n    ['Chickpeas', { children: <Badge color={Badge.WARNING}>Legume</Badge> }],\n  ]}\n/>",__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,Fragment:r.Fragment,Table:l.a,Status:c.a,Text:d.a,Badge:b.a},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(l.a,{headers:["Name","Type"],rows:[["Apple",{children:Object(s.b)(b.a,{color:b.a.DANGER,mdxType:"Badge"},"Fruit")}],["Broccoli",{children:Object(s.b)(b.a,{color:b.a.SUCCESS,mdxType:"Badge"},"Vegetable")}],["Chickpeas",{children:Object(s.b)(b.a,{color:b.a.WARNING,mdxType:"Badge"},"Legume")}]],mdxType:"Table"})),Object(s.b)("h3",{id:"sorting"},"Sorting"),Object(s.b)("h4",{id:"default-sorting"},"Default sorting"),Object(s.b)("p",null,"If the value that you want to sort by can be handled by Javascript's built-in\nsorting function (such as strings, numbers, and dates), you can simply\nprovide a machine-readable ",Object(s.b)("inlineCode",{parentName:"p"},"sortByValue")," for each row that has a corresponding\n",Object(s.b)("inlineCode",{parentName:"p"},"sortable: true")," property in the header."),Object(s.b)(i.c,{__position:4,__code:"<Table\n  headers={[\n    { children: 'Name', sortable: true },\n    { children: 'Date added', sortable: true },\n  ]}\n  rows={[\n    [\n      { children: 'Apple' },\n      { children: '12/12/18', sortByValue: new Date('12/12/18') },\n    ],\n    [\n      { children: 'Broccoli' },\n      { children: '12/13/18', sortByValue: new Date('12/13/18') },\n    ],\n    [\n      { children: 'Chickpeas' },\n      { children: '12/14/18', sortByValue: new Date('12/14/18') },\n    ],\n  ]}\n/>",__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,Fragment:r.Fragment,Table:l.a,Status:c.a,Text:d.a,Badge:b.a},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(l.a,{headers:[{children:"Name",sortable:!0},{children:"Date added",sortable:!0}],rows:[[{children:"Apple"},{children:"12/12/18",sortByValue:new Date("12/12/18")}],[{children:"Broccoli"},{children:"12/13/18",sortByValue:new Date("12/13/18")}],[{children:"Chickpeas"},{children:"12/14/18",sortByValue:new Date("12/14/18")}]],mdxType:"Table"})),Object(s.b)("h4",{id:"custom-sorting"},"Custom sorting"),Object(s.b)("p",null,"To do custom sorting, for instance, locale-sensitive sort, you could\nimplement that like this:"),Object(s.b)(i.c,{__position:5,__code:"<Table\n  headers={[{ children: 'Country', sortable: true }]}\n  onSortBy={(i, direction, rows) =>\n    direction === 'ascending'\n      ? rows.sort((a, b) => a[0].localeCompare(b[0]))\n      : rows.sort((a, b) => b[0].localeCompare(a[0]))\n  }\n  rows={[\n    ['Schweiz'],\n    ['\xd6sterreich'],\n    ['Deutschland'],\n    ['Liechtenstein'],\n    ['Italien'],\n  ]}\n/>",__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,Fragment:r.Fragment,Table:l.a,Status:c.a,Text:d.a,Badge:b.a},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(l.a,{headers:[{children:"Country",sortable:!0}],onSortBy:function(e,n,t){return"ascending"===n?t.sort(function(e,n){return e[0].localeCompare(n[0])}):t.sort(function(e,n){return n[0].localeCompare(e[0])})},rows:[["Schweiz"],["\xd6sterreich"],["Deutschland"],["Liechtenstein"],["Italien"]],mdxType:"Table"})))}h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/content/components/table.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-content-components-table.69161d6f5c4648ee1dbf.js.map