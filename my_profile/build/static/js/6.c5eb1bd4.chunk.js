(this.webpackJsonpmy_profile=this.webpackJsonpmy_profile||[]).push([[6],{50:function(t,e,n){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",o="day",u="week",c="month",h="quarter",d="year",l="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+p(i,2,"0")+":"+p(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),s=n-r<0,a=e.clone().add(i+(s?-1:1),c);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:u,d:o,D:l,h:a,m:s,s:r,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",j={};j[b]=$;var M=function(t){return t instanceof S},v=function(t,e,n){var i;if(!t)return b;if("string"==typeof t)j[t]&&(i=t),e&&(j[t]=e,i=t);else{var r=t.name;j[r]=t,i=r}return!n&&i&&(b=i),i||!n&&b},D=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},O=y;O.l=v,O.i=M,O.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function $(t){this.$L=v(t.locale,null,!0),this.parse(t)}var p=$.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return O},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return D(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<D(t)},p.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,i=!!O.u(e)||e,h=O.p(t),f=function(t,e){var r=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(o)},m=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,$=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case d:return i?f(1,0):f(31,11);case c:return i?f(1,$):f(0,$+1);case u:var b=this.$locale().weekStart||0,j=(g<b?g+7:g)-b;return f(i?p-j:p+(6-j),$);case o:case l:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case s:return m(y+"Seconds",2);case r:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,u=O.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[o]=h+"Date",n[l]=h+"Date",n[c]=h+"Month",n[d]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[r]=h+"Seconds",n[i]=h+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===d){var g=this.clone().set(l,1);g.$d[f](m),g.init(),this.$d=g.set(l,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[O.p(t)]()},p.add=function(i,h){var l,f=this;i=Number(i);var m=O.p(h),g=function(t){var e=D(f);return O.w(e.date(e.date()+Math.round(t*i)),f)};if(m===c)return this.set(c,this.$M+i);if(m===d)return this.set(d,this.$y+i);if(m===o)return g(1);if(m===u)return g(7);var $=(l={},l[s]=e,l[a]=n,l[r]=t,l)[m]||1,p=this.$d.getTime()+i*$;return O.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=O.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,h=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].substr(0,s)},d=function(t){return O.s(s%12||12,t,"0")},l=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:O.s(o+1,2,"0"),MMM:h(n.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,u,2),ddd:h(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:O.s(s,2,"0"),h:d(1),hh:d(2),a:l(s,a,!0),A:l(s,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:r};return i.replace(g,(function(t,e){return e||m[t]||r.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(i,l,f){var m,g=O.p(l),$=D(i),p=($.utcOffset()-this.utcOffset())*e,y=this-$,b=O.m(this,$);return b=(m={},m[d]=b/12,m[c]=b,m[h]=b/3,m[u]=(y-p)/6048e5,m[o]=(y-p)/864e5,m[a]=y/n,m[s]=y/e,m[r]=y/t,m)[g]||y,f?b:O.a(b)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return j[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=v(t,e,!0);return i&&(n.$L=i),n},p.clone=function(){return O.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},$}(),w=S.prototype;return D.prototype=w,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",o],["$M",c],["$y",d],["$D",l]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,S,D),t.$i=!0),D},D.locale=v,D.isDayjs=M,D.unix=function(t){return D(1e3*t)},D.en=j[b],D.Ls=j,D.p={},D}()},65:function(t,e,n){"use strict";n.r(e);n(0);var i=n(5),r=n(18),s=n(50),a=n.n(s),o=n(1),u=function(t){var e=t.data;return Object(o.jsx)("div",{className:"cell-container",children:Object(o.jsxs)("article",{className:"mini-post",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("a",{href:e.link,children:e.title})}),Object(o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),Object(o.jsx)("a",{href:e.link,className:"image",children:Object(o.jsx)("img",{src:"".concat(".").concat(e.image),alt:e.title})}),Object(o.jsx)("div",{className:"description",children:Object(o.jsx)("p",{children:e.desc})})]})})},c=[{title:"Neural Style Transfer",subtitle:"2015 BVP Hackathon",image:"/images/projects/NST.jpg",link:"https://github.com/abhilashreddyy/Neural-Style-Transfer",date:"Jun-Aug 2021",desc:"Built an NST model which can generate artistic images by combining texture from one image into another using VGG-19 CNN as a base neural network. Just a project which is built out of curiosity"},{title:"K Nearest Neighbour Optmization",link:"https://github.com/abhilashreddyy/K-Nearest-Neighbour-Optimization",image:"/images/projects/KNN_kdtree.png",date:"2015-09-20",desc:"Optimized and parallelized the execution of Statistical Algorithm (KNN) Algorithm using K-Dimensional. Trees, K-means clustering, and queues. Reduced the time complexity from O(N^2) to O(log N)."},{title:"Self Driving Car",subtitle:"A Reinforcement Learning bot that travels over google maps Image",link:"https://github.com/abhilashreddyy/Self-Driving-car-using-Reinforcenent-Learning",image:"/images/projects/self_driving_car.jpg",date:"Jan-Mar 2020",desc:"Trained a Reinforcement Learning agent to drive on google maps Image using Deep learning and advanced RL algorithms likeDeep Q-learning and TD3."},{title:"Kaggle Competition Commonlit Text Readability",image:"/images/projects/commonlit_readability.png",link:"https://www.kaggle.com/abhilashreddyy/a-deeper-eda-on-pos-tags-topic-modelling-more",date:"Mar-May 2021",desc:"Trained a Distil BERT model to predict the readability of textAnalysed & preprocessed text data, generated visualizations from Exploratory Data Analysis and Data Mining Techniques"}];e.default=function(){return Object(o.jsx)(r.a,{title:"Projects",description:"Learn about Abhilash Reddy's projects.",children:Object(o.jsxs)("article",{className:"post",id:"projects",children:[Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h2",{"data-testid":"heading",children:Object(o.jsx)(i.c,{to:"/projects",children:"Projects"})}),Object(o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),c.map((function(t){return Object(o.jsx)(u,{data:t},t.title)}))]})})}}}]);
//# sourceMappingURL=6.c5eb1bd4.chunk.js.map