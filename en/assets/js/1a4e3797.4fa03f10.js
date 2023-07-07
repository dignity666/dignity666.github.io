"use strict";(self.webpackChunkdocusaurus_theme_zen=self.webpackChunkdocusaurus_theme_zen||[]).push([[920],{3777:function(e,t,r){r.d(t,{c:function(){return o}});var n=r(7294),a=r(9962),l=["zero","one","two","few","many","other"];function c(e){return l.filter((function(t){return e.includes(t)}))}var u={locale:"en",pluralForms:c(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,a.Z)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:c(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),u}var t,r}),[e])}function o(){var e=s();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var a=r.select(t),l=r.pluralForms.indexOf(a);return n[Math.min(l,n.length-1)]}(r,t,e)}}}},7604:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(7855),a=r(5614),l=r(5861),c=r(7294),u=r(9962),s=r(1990),o=r(1514),i=r(3699),m=r(7325),h=r(3777),p=r(6010),f=r(6775),d=r(6136);var g=function(){var e=(0,f.k6)(),t=(0,f.TH)(),r=(0,u.Z)().siteConfig.baseUrl,n=d.Z.canUseDOM?new URLSearchParams(t.search):null,a=(null==n?void 0:n.get("q"))||"",l=(null==n?void 0:n.get("ctx"))||"",c=(null==n?void 0:n.get("version"))||"",s=function(e){var r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:a,searchContext:l,searchVersion:c,updateSearchPath:function(t){var r=s(t);e.replace({search:r.toString()})},updateSearchContext:function(r){var n=new URLSearchParams(t.search);n.set("ctx",r),e.replace({search:n.toString()})},generateSearchPageLink:function(e){var t=s(e);return r+"search?"+t.toString()}}},v=r(5202),y=r(6654),E=r(1523),S=r(7976),C=r(9395),x=r(4056),I=r(318),w=r(5901),R={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};function P(){var e,t=(0,u.Z)().siteConfig.baseUrl,r=(0,h.c)().selectMessage,n=g(),s=n.searchValue,i=n.searchContext,f=n.searchVersion,d=n.updateSearchPath,E=n.updateSearchContext,S=(0,c.useState)(s),C=S[0],I=S[1],P=(0,c.useState)(),Z=P[0],b=P[1],F=(0,c.useState)(),k=F[0],N=F[1],q=""+t+f,A=(0,c.useMemo)((function(){return C?(0,m.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:C}):(0,m.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[C]);(0,c.useEffect)((function(){d(C),Z&&(C?Z(C,(function(e){N(e)})):N(void 0))}),[C,Z]);var T=(0,c.useCallback)((function(e){I(e.target.value)}),[]);return(0,c.useEffect)((function(){s&&s!==C&&I(s)}),[s]),(0,c.useEffect)((function(){function e(){return(e=(0,l.Z)((0,a.Z)().mark((function e(){var t,r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.w)(q,i);case 2:t=e.sent,r=t.wrappedIndexes,n=t.zhDictionary,b((function(){return(0,y.v)(r,n,100)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,q]),c.createElement(c.Fragment,null,c.createElement(o.Z,null,c.createElement("meta",{property:"robots",content:"noindex, follow"}),c.createElement("title",null,A)),c.createElement("div",{className:"container margin-vert--lg"},c.createElement("h1",null,A),c.createElement("div",{className:"row"},c.createElement("div",{className:(0,p.Z)("col",(e={},e[R.searchQueryColumn]=Array.isArray(w.Kc),e["col--9"]=Array.isArray(w.Kc),e["col--12"]=!Array.isArray(w.Kc),e))},c.createElement("input",{type:"search",name:"q",className:R.searchQueryInput,"aria-label":"Search",onChange:T,value:C,autoComplete:"off",autoFocus:!0})),Array.isArray(w.Kc)?c.createElement("div",{className:(0,p.Z)("col","col--3","padding-left--none",R.searchContextColumn)},c.createElement("select",{name:"search-context",className:R.searchContextInput,id:"context-selector",value:i,onChange:function(e){return E(e.target.value)}},c.createElement("option",{value:""},w.pQ?(0,m.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),w.Kc.map((function(e){return c.createElement("option",{key:e,value:e},e)})))):null),!Z&&C&&c.createElement("div",null,c.createElement(x.Z,null)),k&&(k.length>0?c.createElement("p",null,r(k.length,(0,m.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:k.length}))):c.createElement("p",null,(0,m.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),c.createElement("section",null,k&&k.map((function(e){return c.createElement(_,{key:e.document.i,searchResult:e})})))))}function _(e){var t=e.searchResult,r=t.document,a=t.type,l=t.page,u=t.tokens,s=t.metadata,o=0===a,m=2===a,h=(o?r.b:l.b).slice(),p=m?r.s:r.t;o||h.push(l.t);var f="";if(w.vc&&u.length>0){for(var d,g=new URLSearchParams,v=(0,n.Z)(u);!(d=v()).done;){var y=d.value;g.append("_highlight",y)}f="?"+g.toString()}return c.createElement("article",{className:R.searchResultItem},c.createElement("h2",null,c.createElement(i.Z,{to:r.u+f+(r.h||""),dangerouslySetInnerHTML:{__html:m?(0,E.C)(p,u):(0,S.o)(p,(0,C.m)(s,"t"),u,100)}})),h.length>0&&c.createElement("p",{className:R.searchResultItemPath},(0,I.e)(h)),m&&c.createElement("p",{className:R.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,S.o)(r.t,(0,C.m)(s,"t"),u,100)}}))}var Z=function(){return c.createElement(s.Z,null,c.createElement(P,null))}}}]);