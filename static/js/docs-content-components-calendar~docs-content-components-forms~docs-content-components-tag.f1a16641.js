(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/components/CloseButton/index.js":function(e,t,n){"use strict";var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),c=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),s=n("./node_modules/react/index.js"),l=n.n(s),r=n("./src/styles/style-helpers.js"),a=n("./src/components/IconButton/index.js");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var b=l.a.createElement("title",null,"icon-canceled"),d=l.a.createElement("path",{d:"M6.5,7.21L2.43,11.27a0.5,0.5,0,0,1-.71-0.71L5.79,6.5,1.73,2.43a0.5,0.5,0,0,1,.71-0.71L6.5,5.79l4.07-4.07a0.5,0.5,0,0,1,.71.71L7.21,6.5l4.07,4.07a0.5,0.5,0,0,1-.71.71Z"}),u=function(e){return l.a.createElement("svg",i({width:13,height:13,viewBox:"0 0 13 13"},e),b,d)},m=(n.p,Object(o.a)(a.a,{target:"euw6xr80"})(function(e){var t=e.theme;return Object(c.c)("label:close-button;",Object(r.svgKilo)({theme:t}),";")},"")),j=function(e){return Object(c.d)(m,e,Object(c.d)(u,null))};j.defaultProps={label:"Close"};var p=j;j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CloseButton",filename:"src/components/CloseButton/CloseButton.js"}});t.a=p;"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CloseButton",filename:"src/components/CloseButton/index.js"}})},"./src/components/IconButton/index.js":function(e,t,n){"use strict";var o=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),c=n("./node_modules/react/index.js"),s=n("./src/util/deprecate.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),i=n("./node_modules/polished/dist/polished.es.js"),b=function(e){var t=e.theme;return Object(o.c)("label:icon-button;padding:0;margin:0;display:inline-block;background-color:transparent;border:none;cursor:pointer;fill:",t.colors.black,";overflow:initial;&:focus,&:active{outline:none;}> svg{",Object(i.b)("100%"),";}")},d=Object(a.a)("button",{target:"e2d2byz0"})(b,""),u=function(){return Object(o.c)(Object(i.a)(),";")},m=Object(a.a)("span",{target:"e2d2byz1"})(u,""),j=function(e){var t=e.children,n=e.label,s=Object(r.a)(e,["children","label"]);if(!t)return null;var a=c.Children.only(t),i=Object(c.cloneElement)(a,{role:"presentation"});return Object(o.d)(d,Object(l.a)({type:"button"},s),i,n&&Object(o.d)(m,null,n))},p=j;j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconButton",filename:"src/components/IconButton/IconButton.js"}});var f=function(e){return Object(s.a)("SvgButton has been renamed to IconButton."),Object(o.d)(p,e)};f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SvgButton",filename:"src/components/IconButton/index.js"}});t.a=p;"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconButton",filename:"src/components/IconButton/index.js"}})},"./src/components/Tag/Tag.js":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),l=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),r=(n("./node_modules/react/index.js"),n("./src/styles/style-helpers.js")),a=n("./src/components/CloseButton/index.js"),i=function(e){var t=e.theme;return Object(l.c)("label:tag__close-button;margin-left:",t.spacings.kilo,";vertical-align:middle;")},b=function(e){var t=e.selected,n=e.theme;return t&&Object(l.c)("label:tag__close-button--selected;> svg{fill:",n.colors.white,";vertical-align:inherit;}")},d=Object(s.a)(a.a,{target:"e1gbf9s80"})(i,b,""),u=function(e){var t=e.theme;return Object(l.c)("label:tag;border-radius:",t.borderRadius.mega,";",Object(r.textMega)({theme:t}),";",Object(r.shadowBorder)(t.colors.n300),";padding:",t.spacings.bit," ",t.spacings.kilo,";cursor:default;display:inline-block;")},m=function(e){var t=e.onClick,n=e.theme;return t&&Object(l.c)("label:tag--clickable;cursor:pointer;&:hover{background-color:",n.colors.n300,";",Object(r.shadowBorder)(n.colors.n300),";}")},j=function(e){var t=e.selected,n=e.theme;return t&&Object(l.c)("label:tag--selected;background-color:",n.colors.p500,";",Object(r.shadowBorder)(n.colors.p500),";color:",n.colors.white,";")},p=function(e){var t=e.selected,n=e.onClick,o=e.theme;return t&&n&&Object(l.c)("&:hover{background-color:",o.colors.p500,";",Object(r.shadowBorder)(o.colors.p500),";}")},f=function(e){var t=e.theme;return Object(l.c)("label:tag__icon;margin-right:",t.spacings.bit,";display:inline-block;width:",t.spacings.mega,";height:",t.spacings.mega,";vertical-align:middle;> svg{vertical-align:top;}")},g=function(e){var t=e.selected,n=e.theme;return t&&Object(l.c)("label:tag__icon--selected;> svg{fill:",n.colors.white,";}")},O=Object(s.a)("span",{target:"e1gbf9s81"})(f,";",g,";"),v=Object(s.a)("span",{target:"e1gbf9s82"})(u,";",m,";",j,";",p,";"),h=function(e){var t=e.children,n=e.icon,s=e.onRemove,r=e.labelRemoveButton,a=e.selected,i=Object(c.a)(e,["children","icon","onRemove","labelRemoveButton","selected"]);return Object(l.d)(v,Object(o.a)({selected:a},i),!s&&n&&Object(l.d)(O,{selected:a},n),t,s&&Object(l.d)(d,{onClick:s,selected:a,label:r,"data-testid":"tag-close"}))};h.defaultProps={children:null,icon:null,onRemove:null,selected:!1,labelRemoveButton:"remove"},t.a=h,h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Tag",filename:"src/components/Tag/Tag.js"}})}}]);
//# sourceMappingURL=docs-content-components-calendar~docs-content-components-forms~docs-content-components-tag.bd91e4e39b0931e2fb2c.js.map