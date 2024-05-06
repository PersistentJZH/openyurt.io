"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[27918],{27362:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ae});var s=t(67294),a=t(71667),i=t(902),l=t(85893);const o=s.createContext(null);function r(e){let{children:n,content:t}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,l.jsx)(o.Provider,{value:a,children:n})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new i.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:n,assets:t}=c();return(0,l.jsx)(a.d,{title:e.title,description:e.description,keywords:n.keywords,image:t.image??n.image})}var u=t(36905),m=t(87524),h=t(95999),v=t(32244);function b(e){const{previous:n,next:t}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,l.jsx)(v.Z,{...n,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,l.jsx)(v.Z,{...t,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x(){const{metadata:e}=c();return(0,l.jsx)(b,{previous:e.previous,next:e.next})}var g=t(52263),p=t(33692),f=t(80143),j=t(35281),L=t(60373),C=t(74477);const N={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,l.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,l.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function _(e){const n=N[e.versionMetadata.banner];return(0,l.jsx)(n,{...e})}function k(e){let{versionLabel:n,to:t,onClick:s}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(p.Z,{to:t,onClick:s,children:(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function Z(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:s}}=(0,g.Z)(),{pluginId:a}=(0,f.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,L.J)(a),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,f.Jo)(a),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.Z)(n,j.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(_,{siteTitle:s,versionMetadata:t})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(k,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function T(e){let{className:n}=e;const t=(0,C.E)();return t.banner?(0,l.jsx)(Z,{className:n,versionMetadata:t}):null}function H(e){let{className:n}=e;const t=(0,C.E)();return t.badge?(0,l.jsx)("span",{className:(0,u.Z)(n,j.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}var M=t(71526),I=t(47265);function y(){const{metadata:e}=c(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,tags:a}=e,i=a.length>0,o=!!(n||t||s);return i||o?(0,l.jsxs)("footer",{className:(0,u.Z)(j.k.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.Z)("row margin-top--sm",j.k.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(M.Z,{tags:a})})}),o&&(0,l.jsx)(I.Z,{className:(0,u.Z)("margin-top--sm",j.k.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s})]}):null}var E=t(86043),w=t(93743);const A={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function B(e){let{collapsed:n,...t}=e;return(0,l.jsx)("button",{type:"button",...t,className:(0,u.Z)("clean-btn",A.tocCollapsibleButton,!n&&A.tocCollapsibleButtonExpanded,t.className),children:(0,l.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const O={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function V(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,E.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(O.tocCollapsible,!i&&O.tocCollapsibleExpanded,t),children:[(0,l.jsx)(B,{collapsed:i,onClick:o}),(0,l.jsx)(E.z,{lazy:!0,className:O.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(w.Z,{toc:n,minHeadingLevel:s,maxHeadingLevel:a})})]})}const R={tocMobile:"tocMobile_ITEo"};function S(){const{toc:e,frontMatter:n}=c();return(0,l.jsx)(V,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.Z)(j.k.docs.docTocMobile,R.tocMobile)})}var P=t(39407);function F(){const{toc:e,frontMatter:n}=c();return(0,l.jsx)(P.Z,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:j.k.docs.docTocDesktop})}var U=t(92503),z=t(48944);function D(e){let{children:n}=e;const t=function(){const{metadata:e,frontMatter:n,contentTitle:t}=c();return n.hide_title||void 0!==t?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(j.k.docs.docMarkdown,"markdown"),children:[t&&(0,l.jsx)("header",{children:(0,l.jsx)(U.Z,{as:"h1",children:t})}),(0,l.jsx)(z.Z,{children:n})]})}var q=t(52802),G=t(48596),W=t(44996);function $(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const J={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function Q(){const e=(0,W.Z)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(p.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)($,{className:J.breadcrumbHomeIcon})})})}const X={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Y(e){let{children:n,href:t,isLast:s}=e;const a="breadcrumbs__link";return s?(0,l.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,l.jsx)(p.Z,{className:a,href:t,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:n})}):(0,l.jsx)("span",{className:a,children:n})}function K(e){let{children:n,active:t,index:s,addMicrodata:a}=e;return(0,l.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ee(){const e=(0,q.s1)(),n=(0,G.Ns)();return e?(0,l.jsx)("nav",{className:(0,u.Z)(j.k.docs.docBreadcrumbs,X.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,l.jsx)(Q,{}),e.map(((n,t)=>{const s=t===e.length-1,a="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,l.jsx)(K,{active:s,index:t,addMicrodata:!!a,children:(0,l.jsx)(Y,{href:a,isLast:s,children:n.label})},t)}))]})}):null}var ne=t(22212);const te={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function se(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=c(),t=(0,m.i)(),s=e.hide_table_of_contents,a=!s&&n.length>0;return{hidden:s,mobile:a?(0,l.jsx)(S,{}):void 0,desktop:!a||"desktop"!==t&&"ssr"!==t?void 0:(0,l.jsx)(F,{})}}(),{metadata:{unlisted:s}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!t.hidden&&te.docItemCol),children:[s&&(0,l.jsx)(ne.Z,{}),(0,l.jsx)(T,{}),(0,l.jsxs)("div",{className:te.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(ee,{}),(0,l.jsx)(H,{}),t.mobile,(0,l.jsx)(D,{children:n}),(0,l.jsx)(y,{})]}),(0,l.jsx)(x,{})]})]}),t.desktop&&(0,l.jsx)("div",{className:"col col--3",children:t.desktop})]})}function ae(e){const n=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.FG,{className:n,children:[(0,l.jsx)(d,{}),(0,l.jsx)(se,{children:(0,l.jsx)(t,{})})]})})}},32244:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var s=t(36905),a=t(33692),i=t(85893);function l(e){const{permalink:n,title:t,subLabel:l,isNext:o}=e;return(0,i.jsxs)(a.Z,{className:(0,s.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:t})]})}},39407:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var s=t(36905),a=t(93743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(85893);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,s.Z)(i.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(a.Z,{...t,linkClassName:o,linkActiveClassName:r})})}},93743:(e,n,t)=>{t.d(n,{Z:()=>b});var s=t(67294),a=t(86668);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):s.push(a)})),s}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>o(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.L)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let a=n;a<=t;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var u=t(33692),m=t(85893);function h(e){let{toc:n,className:t,linkClassName:s,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function b(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const b=(0,a.L)(),x=c??b.tableOfContents.minHeadingLevel,g=u??b.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:x,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:g}}),[o,r,x,g])),(0,m.jsx)(v,{toc:p,className:t,linkClassName:o,...h})}},13008:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var s=t(36905),a=t(33692);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=t(85893);function o(e){let{permalink:n,label:t,count:o}=e;return(0,l.jsxs)(a.Z,{href:n,className:(0,s.Z)(i.tag,o?i.tagWithCount:i.tagRegular),children:[t,o&&(0,l.jsx)("span",{children:o})]})}},71526:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var s=t(36905),a=t(95999),i=t(13008);const l={tags:"tags_jXut",tag:"tag_QGVx"};var o=t(85893);function r(e){let{tags:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,s.Z)(l.tags,"padding--none","margin-left--sm"),children:n.map((e=>{let{label:n,permalink:t}=e;return(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(i.Z,{label:n,permalink:t})},t)}))})]})}},22212:(e,n,t)=>{t.d(n,{Z:()=>h});t(67294);var s=t(36905),a=t(95999),i=t(35742),l=t(85893);function o(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(35281),u=t(59047);function m(e){let{className:n}=e;return(0,l.jsx)(u.Z,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,s.Z)(n,d.k.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}}}]);