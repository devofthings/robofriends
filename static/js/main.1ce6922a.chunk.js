(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),s=(a(14),a(3)),i=a(4),l=a(6),m=a(5),h=a(7),u=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"tc grow bg-navy pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/set_set3/".concat(n,"?size=200x200"),alt:"robot"}),r.a.createElement("div",{className:"washed-blue code"},r.a.createElement("h2",{className:"f4"},t),r.a.createElement("p",{className:"f6"},a)))},d=function(e){var t=e.robots;return r.a.createElement("div",{className:"flex flex-column"},t.map(function(e,t){return r.a.createElement(u,{id:e.id,name:e.name,email:e.email,key:t})}))},f=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--navy bg-washed-blue code",type:"search",placeholder:"Search Robots..",onChange:t}))},v=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"50em",width:"80%",marginLeft:"10%"}},e.children)},b=(a(15),a(16),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,n=t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc navy"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(v,null,r.a.createElement(d,{robots:n}))):r.a.createElement("h1",{className:"f1 tc navy"},"Loading...")}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.1ce6922a.chunk.js.map