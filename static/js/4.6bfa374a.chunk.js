(this.webpackJsonpmy_profile=this.webpackJsonpmy_profile||[]).push([[4],{50:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(12);var r=n(55),i=n(19);function o(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||Object(r.a)(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(52);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},52:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},53:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},54:function(e,t,n){"use strict";function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}n.d(t,"a",(function(){return a}))},55:function(e,t,n){"use strict";function a(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n.d(t,"a",(function(){return a}))},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(54);function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(a.a)(e,t)}},57:function(e,t,n){"use strict";function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}n.d(t,"a",(function(){return a}))},58:function(e,t,n){"use strict";function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}n.d(t,"a",(function(){return a}))},59:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(57),r=n(58);function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var o=n(59);function c(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?Object(o.a)(e):t}function s(e){var t=Object(r.a)();return function(){var n,r=Object(a.a)(e);if(t){var i=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}},62:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},90:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(4),i=n(18),o=n(0),c=function(e){var t=e.data;return Object(o.jsx)("article",{className:"degree-container",children:Object(o.jsxs)("header",{children:[Object(o.jsx)("h4",{className:"degree",children:t.degree}),Object(o.jsxs)("p",{className:"school",children:[Object(o.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(o.jsxs)("div",{className:"education",children:[Object(o.jsx)("div",{className:"link-to",id:"education"}),Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(o.jsx)(c,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(o.jsxs)("article",{className:"jobs-container",children:[Object(o.jsxs)("header",{children:[Object(o.jsxs)("h4",{children:[Object(o.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(o.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(o.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(o.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(o.jsxs)("div",{className:"experience",children:[Object(o.jsx)("div",{className:"link-to",id:"experience"}),Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(o.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d,f=n(53),m=n(62),b=n(56),y=n(61),g=n(52),h=n(51),j=function(e){var t=e.handleClick,n=e.active,a=e.label;return Object(o.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:function(){return t(a)},children:a})},v=function(e){var t=e.data,n=e.categories,a=t.category,r=t.competency,i=t.title,c={background:n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(h.a)(Object(h.a)({},c),{},{width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")});return Object(o.jsxs)("div",{className:"skillbar clearfix",children:[Object(o.jsx)("div",{className:"skillbar-title",style:c,children:Object(o.jsx)("span",{children:i})}),Object(o.jsx)("div",{className:"skillbar-bar",style:s}),Object(o.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};v.defaultProps={categories:[]};var O=v,S=function(e){Object(b.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).handleChildClick=function(e){a.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,a){return Object(h.a)(Object(h.a)({},n),{},Object(g.a)({},a,e===a&&!t.buttons[a]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},a.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(g.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),a}return Object(m.a)(n,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(o.jsx)(O,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(o.jsx)(j,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"skills",children:[Object(o.jsx)("div",{className:"link-to",id:"skills"}),Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h3",{children:"Skills"}),Object(o.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(o.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(o.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}]),n}(a.Component);S.defaultProps={skills:[],categories:[]};var k=S,D=function(e){var t=e.data,n=e.last;return Object(o.jsxs)("li",{className:"course-container",children:[Object(o.jsxs)("a",{href:t.link,children:[Object(o.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(o.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(o.jsx)("div",{className:"course-dot",children:Object(o.jsx)("p",{className:"course-name",children:" \u2022"})})]})};D.defaultProps={last:!1};var x=D,w=function(e){var t,n=e.data;return Object(o.jsxs)("div",{className:"courses",children:[Object(o.jsx)("div",{className:"link-to",id:"courses"}),Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h3",{children:"Selected Courses"})}),Object(o.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(o.jsx)(x,{data:e,last:n===t.length-1},e.title)})))})]})};w.defaultProps={data:[]};var E=w,C=function(){return Object(o.jsxs)("div",{className:"references",children:[Object(o.jsx)("div",{className:"link-to",id:"references"}),Object(o.jsx)("div",{className:"title",children:Object(o.jsx)(r.b,{to:"/contact",children:Object(o.jsx)("h3",{children:"References are available upon request"})})})]})},P=[{title:"Convex Optimization",number:"EE 364a",link:"http://stanford.edu/class/ee364a/",university:"Stanford"},{title:"Machine Learning",number:"CS 229",link:"http://cs229.stanford.edu/",university:"Stanford"},{title:"Convolutional Neural Networks for Visual Recognition",number:"CS 231n",link:"http://cs231n.stanford.edu/",university:"Stanford"},{title:"Numerical Linear Algebra",number:"CME 302",link:"http://scpd.stanford.edu/search/publicCourseSearchDetails.do;jsessionid=561188A06434D7D97953C4706DE12831?method=load&courseId=11685",university:"Stanford"},{title:"Numerical Optimization",number:"CME 304",link:"http://web.stanford.edu/class/cme304/",university:"Stanford"},{title:"Discrete Mathematics and Algorithms",number:"CME 305",link:"http://stanford.edu/~rezab/discrete/",university:"Stanford"},{title:"PDE\u2019s of Applied Mathematics",number:"CME 303",link:"http://web.stanford.edu/class/math220/index.html",university:"Stanford"},{title:"Introduction to Linear Dynamical Systems",number:"EE 263",link:"http://ee263.stanford.edu/",university:"Stanford"},{title:"Introduction to Statistical Signal Processing",number:"EE 278B",link:"http://web.stanford.edu/class/ee278/",university:"Stanford"},{title:"Spacecraft Design",number:"AA 236A",link:"",university:"Stanford"},{title:"Advanced Programming",number:"CME 212",link:"",university:"Stanford"},{title:"Design Theory and Methodology",number:"MAE 397",link:"https://web.stanford.edu/group/designx_lab/cgi-bin/mainwiki/index.php/ME397_Design_Theory_%26_Methodology_Seminar",university:"Stanford"},{title:"Software Engineering Concepts",number:"CSE 442",link:"",university:"Buffalo"},{title:"Hardware/Software Integrated System Design",number:"CSE 453",link:"",university:"Buffalo"},{title:"Data Structures",number:"CS 250",link:"http://www.cse.buffalo.edu/~hungngo/classes/2013/Fall/250/",university:"Buffalo"},{title:"Introduction to Digital Signal Processing",number:"EE 516",link:"",university:"Buffalo"},{title:"Computer Vision and Image Processing",number:"CSE 573",link:"http://cubs.buffalo.edu/~inwogu/teaching/Coursepage573_fa14/",university:"Buffalo"},{title:"Realtime Embedded Systems",number:"CSE 321",link:"",university:"Buffalo"},{title:"Computer Architecture",number:"CSE 590",link:"http://www.cse.buffalo.edu/~stevko/courses/cse490/spring11/",university:"Buffalo"},{title:"Small Data",number:"MS&E 226",link:"http://web.stanford.edu/class/msande226/",university:"Stanford"},{title:"Stochastic Control",number:"EE 266",link:"http://ee266.stanford.edu/",university:"Stanford"},{title:"Simulation",number:"MS&E 223",link:"http://web.stanford.edu/class/msande223/handout.htm",university:"Stanford"},{title:"Deep Learning for Natural Language Processing",number:"CS 224d",link:"http://cs224d.stanford.edu/",university:"Stanford"}],N=[{school:"Stanford University",degree:"M.S. Computational and Mathematical Engineering",link:"https://stanford.edu",year:2016},{school:"University at Buffalo",degree:"B.S. Electrical Engineering, Computer Engineering",link:"https://buffalo.edu",year:2012}],A=[{company:"Arthena",position:"Co-founder, C.T.O.",link:"https://arthena.com",daterange:"January 2014 - Present",points:["Deployed quantitative strategies to predict the value of fine art in various pricing contexts.","Built production, on-line, end-to-end optimized machine learning pipelines with Pandas, Numpy, Scikit, Tensorflow, Dagster, Postgres, etc. on GCP with Kubernetes.","Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.","YC Alumn. Worked on everything. Built a 16-person team. Operated company for 6+ years."]},{company:"Skeptical Investments",position:"Co-founder",link:"http://skepticalinvestments.biz",daterange:"April 2017 - Present",points:["Founded a micro-vc fund to throw token amounts of money at problems I find interesting.","Created the InstaSafe. Fast, automated investment docs for YC companies."]},{company:"Enveritas",position:"Consultant",link:"http://enveritas.org",daterange:"September 2016 - 2018",points:["Trained a model for the Brazilian Coffee Scenes Dataset with better than state of the art accuracy.","Collected training sets on the ground in Uganda. Built dashboards to visualize work of surveyors using Flask, React, and D3.","Performed supporting analysis to ensure data integrity using Pandas, t-SNE, SVM\u2019s, and other techniques."]},{company:"Zenysis",position:"Consultant",link:"https://zenysis.com",daterange:"February 2016 - March 2016",points:["Worked in Addis Ababa for the Ethiopian Ministry of Health and built data visualization tools in React and Flask.","Ingested multiple databases with different alphabets, calendars, and without official spellings of geographic locations."]},{company:"Matroid",position:"Co-founder",link:"https://matroid.com",daterange:"July 2015 - January 2016",points:["Developed end to end machine learning pipeline to train visual classifiers from keywords using Node.JS, Express, Keystone, MongoDB, AWS, S3, Caffe, and other technologies.","Received Series A term sheets for 20M+ valuations."]},{company:"Planet",position:"Missions Intern",link:"https://planet.com",daterange:"June 2014 - January 2015",points:["Built models to improve image quality, signal to noise ratio, and dynamic range.","Performed statistical analysis of image quality in Matlab and Python.  Developed flight software in C++.","Organized first hackathon, prototyped hardware, and designed and built photography equipment for rocket launches."]},{company:"Planetary Resources",position:"Avionics Intern",link:"http://planetaryresources.com",daterange:"January 2014 - May 2014",points:["Developed simulations in Matlab for Attitude Determination and Control Subsystem.","Developed processes for in lab testing and characterization of various subsystems.","Assembled flight hardware in cleanroom."]},{company:"Facebook",position:"Intern",link:"https://facebook.com",daterange:"June 2013 - September 2013",points:["Developed software in python for automated testing of servers.","Performed statistical analysis with R, HIVE to assist in triage of malfunctioning servers.","Worked with vendors and ODM\u2019s during triage to assist in risk mitigation."]},{company:"SEDS-USA",position:"At Large Board Member",link:"http://seds.org",daterange:"October 2013 - October 2014",points:["Elected to Board of Directors of the USA\u2019s largest student space advocacy group based on 5+ years of work with SEDS.","Responsibilities included: organizational strategy, conference presentations, fundraising, special projects, promoting SEDS nationally and internationally, and photographing conferences."]},{company:"UB Nanosatellite Program",position:"Co-founder, Program Manager",link:"https://ubnl.space/",daterange:"October 2010 \u2013 June 2012",points:["Coauthored grant to build a multi-spectral imaging satellite as part of the AFRL University Nanosatellite Program.","Lead a team of 60 students through satellite development life cycle. Served as a technical expert, acquired intimate working knowledge of satellite subsystems.  Solicited funding through NASA, AFOSR, and several corporate sponsors."]}],M=n(50),L=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"ElasticSearch",competency:2,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Redis",competency:3,category:["Web Development","Databases"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"D3",competency:2,category:["Web Development","Javascript"]},{title:"Flask",competency:2,category:["Web Development","Python"]},{title:"Git/Mercurial",competency:3,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python"]},{title:"Numba",competency:2,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["Data Science","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"C++",competency:2,category:["Languages"]},{title:"Julia",competency:2,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]},{title:"Hadoop",competency:2,category:["Data Engineering","Data Science"]},{title:"Spark",competency:2,category:["Data Engineering","Data Science"]},{title:"Dagster",competency:2,category:["Data Engineering","Python"]},{title:"Mypy",competency:3,category:["Python"]},{title:"Pylint",competency:4,category:["Data Engineering","Python"]}].map((function(e){return Object(h.a)(Object(h.a)({},e),{},{category:e.category.sort()})})),R=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],B=Object(M.a)(new Set(L.reduce((function(e,t){var n=t.category;return e.concat(n)}),[]))).sort().map((function(e,t){return{name:e,color:R[t]}})),J=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(o.jsx)(i.a,{title:"Resume",description:"Abhilash Reddy's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook.",children:Object(o.jsxs)("article",{className:"post",id:"resume",children:[Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h2",{"data-testid":"heading",children:Object(o.jsx)(r.b,{to:"resume",children:"Resume"})}),Object(o.jsx)("div",{className:"link-container",children:J.map((function(e){return Object(o.jsx)("h4",{children:Object(o.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(o.jsx)(l,{data:N}),Object(o.jsx)(p,{data:A}),Object(o.jsx)(k,{skills:L,categories:B}),Object(o.jsx)(E,{data:P}),Object(o.jsx)(C,{})]})})}}}]);
//# sourceMappingURL=4.6bfa374a.chunk.js.map