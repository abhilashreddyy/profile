(this.webpackJsonpmy_profile=this.webpackJsonpmy_profile||[]).push([[10],{63:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(6),r=a(18),l=a(2),i=function(e){var t=e.label,a=e.link,s=e.value,n=e.format;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{width:"70%",children:t}),Object(l.jsx)("td",{children:a?Object(l.jsx)("a",{href:a,children:n(s)}):n(s)})]})};i.defaultProps={format:function(e){return e},link:null,value:null};var c=i,o=function(e){var t=e.data;return Object(l.jsx)("table",{children:Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(c,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})},u=a(19),b=function(){var e=Object(s.useState)(),t=Object(u.a)(e,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("1990-02-05T09:24:00");n(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(l.jsx)(l.Fragment,{children:a})},j=[{key:"age",label:"Current age",value:Object(l.jsx)(b,{})},{key:"countries",label:"Countries visited",value:53,link:"https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2"},{key:"location",label:"Current city",value:"New York, NY"}],h=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Some stats about me"}),Object(l.jsx)(o,{data:j})]})},d=a(52),p=a.n(d),m=a(48),f=a(54),O=a(50),g=a.n(O),k=[{label:"Stars this repository has on github",key:"stargazers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of people watching this repository",key:"subscribers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of forks",key:"forks",link:"https://github.com/mldangelo/personal-site/network"},{label:"Number of spoons",value:"0"},{label:"Number of linter warnings",value:"0"},{label:"Open github issues",key:"open_issues_count",link:"https://github.com/mldangelo/personal-site/issues"},{label:"Last updated at",key:"pushed_at",link:"https://github.com/mldangelo/personal-site/commits",format:function(e){return g()(e).format("MMMM DD, YYYY")}},{label:"Lines of Javascript powering this website",value:"2115",link:"https://github.com/mldangelo/personal-site/graphs/contributors"}],v=function(){var e=Object(s.useState)(k),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(s.useCallback)(Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/mldangelo/personal-site");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(k.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{value:Object.keys(a).includes(e.key)?a[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(s.useEffect)((function(){r()}),[r]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Some stats about this site"}),Object(l.jsx)(o,{data:a})]})};t.default=function(){return Object(l.jsx)(r.a,{title:"Stats",description:"Some statistics about Michael D'Angelo and mldangelo.com",children:Object(l.jsxs)("article",{className:"post",id:"stats",children:[Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h2",{"data-testid":"heading",children:Object(l.jsx)(n.b,{to:"/stats",children:"Stats"})})})}),Object(l.jsx)(h,{}),Object(l.jsx)(v,{})]})})}}}]);
//# sourceMappingURL=10.2919f3de.chunk.js.map