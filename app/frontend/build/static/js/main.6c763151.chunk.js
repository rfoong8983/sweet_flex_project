(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{265:function(e,t,a){},266:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(89),s=a.n(o),c=a(268),l=a(13),i=a(267),u=function(e){return{type:"OPEN_MODAL",modal:e}},d=a(270),p=a(34),h=a.n(p),m=function(e){e?h.a.defaults.headers.common.Authorization=e:delete h.a.defaults.headers.common.Authorization},b=a(33),g=a.n(b),f=function(e){return{type:"RECEIVE_CURRENT_USER",currentUser:e}},v=function(e){return{type:"RECEIVE_SESSION_ERRORS",errors:e}},E=function(e){return function(t){return(a=e,h.a.post("/api/users/register",a)).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),m(a);var n=g()(a);t(f(n))}).catch(function(e){t(v(e))});var a}},y=function(e){return function(t){return(a=e,h.a.post("/api/users/login",a)).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),m(a);var n=g()(a);t(f(n))}).catch(function(e){t(v(e.response.data))});var a}},O=function(){return function(e){localStorage.removeItem("jwtToken"),m(!1),e({type:"RECEIVE_USER_LOGOUT"})}},j=a(14),S=a(5),k=a(6),C=a(8),N=a(7),_=a(9),D=a(10),L=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(C.a)(this,Object(N.a)(t).call(this,e))).state={username:"",password:"",formType:"register",welcomeMessage:"Create an account",userPlaceholder:!0,passPlaceholder:!0},a.handleUpdate=a.handleUpdate.bind(Object(D.a)(Object(D.a)(a))),a.handleSignup=a.handleSignup.bind(Object(D.a)(Object(D.a)(a))),a.handleLogin=a.handleLogin.bind(Object(D.a)(Object(D.a)(a))),a.renderUserPlaceholder=a.renderUserPlaceholder.bind(Object(D.a)(Object(D.a)(a))),a.renderPassPlaceholder=a.renderPassPlaceholder.bind(Object(D.a)(Object(D.a)(a))),a}return Object(_.a)(t,e),Object(k.a)(t,[{key:"handleUpdate",value:function(e){var t=this;return function(a){t.setState(Object(j.a)({},e,a.currentTarget.value))}}},{key:"handleLogin",value:function(e){e.preventDefault(),this.props.login(this.state).then(this.props.closeModal()).catch(function(e){return console.log(e)})}},{key:"handleSignup",value:function(e){e.preventDefault(),this.props.signup(this.state).then(this.props.closeModal()).catch(function(e){return console.log(e)})}},{key:"handleLogout",value:function(e){e.preventDefault(),this.props.logout()}},{key:"switchFormType",value:function(e){var t=this;return function(a){a.preventDefault(),t.setState({formType:e}),"login"===e?t.setState({welcomeMessage:"Welcome back"}):t.setState({welcomeMessage:"Create an account"})}}},{key:"renderFormType",value:function(){return"register"===this.state.formType?r.a.createElement("div",{className:"mod_buttonsWrapper"},r.a.createElement("div",{className:"mod_loginSignupWrapper"},r.a.createElement("a",{className:"mod_toLogin_link"},"Have an account? ",r.a.createElement("span",{onClick:this.switchFormType("login"),className:"mod_toLoginSpan"},"Sign-in")),r.a.createElement("a",{className:"mod_continue_link"},r.a.createElement("span",{className:"mod_toLoginSpan"},"Continue without an account"))),r.a.createElement("button",{className:"mod_signup_button",onClick:this.handleSignup},"Register")):r.a.createElement("div",{className:"mod_buttonsWrapper"},r.a.createElement("div",{className:"mod_loginSignupWrapper"},r.a.createElement("a",{className:"mod_toLogin_link"},"Need an account? ",r.a.createElement("span",{onClick:this.switchFormType("register"),className:"mod_toLoginSpan"},"Click here!")),r.a.createElement("a",{className:"mod_continue_link"},r.a.createElement("span",{className:"mod_toLoginSpan"},"Continue without an account"))),r.a.createElement("button",{className:"mod_signup_button",onClick:this.handleLogin},"Log In"))}},{key:"renderUserPlaceholder",value:function(){var e=this;return function(t){e.state.userPlaceholder?e.setState({userPlaceholder:!1}):e.setState({userPlaceholder:!0})}}},{key:"renderPassPlaceholder",value:function(){var e=this;return function(t){e.state.passPlaceholder?e.setState({passPlaceholder:!1}):e.setState({passPlaceholder:!0})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"mod_formWrapper"},r.a.createElement("div",{className:"mod_closeModal"},r.a.createElement("button",{className:"mod_closeModalButton",onClick:this.props.closeModal},r.a.createElement("p",null,"X"))),r.a.createElement("div",{className:"mod_formInnerWrapper"},r.a.createElement("h2",{className:"modalTitle"},this.state.welcomeMessage),r.a.createElement("input",{className:"nb_userInput",type:"text",placeholder:this.state.userPlaceholder?"username":"",onChange:this.handleUpdate("username"),onFocus:this.renderUserPlaceholder(),onBlur:this.renderUserPlaceholder()}),r.a.createElement("input",{className:"nb_passInput",type:"password",placeholder:this.state.passPlaceholder?"password":"",onChange:this.handleUpdate("password"),onClick:this.renderPassPlaceholder(),onBlur:this.renderPassPlaceholder()}),this.renderFormType()))}}]),t}(r.a.Component),w=Object(d.a)(Object(l.b)(function(e){return{loggedIn:e.session.isAuthenticated}},function(e){return{login:function(t){return e(y(t))},signup:function(t){return e(E(t))},closeModal:function(){return e({type:"CLOSE_MODAL"})},openModal:function(t){return e(u(t))}}})(L));var R=Object(l.b)(function(e){return{modal:e.ui.modal}},function(e){return{closeModal:function(){return e({type:"CLOSE_MODAL"})}}})(function(e){var t=e.modal,a=e.closeModal;return t?r.a.createElement("div",{className:"modal-background",onClick:a},r.a.createElement("div",{className:"modal-child",onClick:function(e){return e.stopPropagation()}},r.a.createElement(w,null))):null}),P=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(C.a)(this,Object(N.a)(t).call(this,e))).state={username:"",password:"",search:""},a.handleLogout=a.handleLogout.bind(Object(D.a)(Object(D.a)(a))),a}return Object(_.a)(t,e),Object(k.a)(t,[{key:"handleUpdate",value:function(e){var t=this;return function(a){t.setState(Object(j.a)({},e,a.currentTarget.value))}}},{key:"handleLogout",value:function(e){e.preventDefault(),this.props.logout()}},{key:"render",value:function(){return r.a.createElement("div",{className:"nb_mainWrapper"},r.a.createElement("nav",{className:"nb_innerWrapper"},r.a.createElement("div",{className:"nb_logoWrapper"},r.a.createElement("div",{className:"nb_logo"},"sweet")),r.a.createElement("div",{className:"nb_searchWrapper"},r.a.createElement("input",{className:"nb_searchBar",onChange:this.handleUpdate("search"),placeholder:"#sweet"})),r.a.createElement("div",{className:"nb_linkWrapper"},this.props.currentUser?r.a.createElement("div",{className:"nb_userProfileWrapper"},r.a.createElement("a",{href:"",className:"nb_userProfileLink"},this.props.currentUser.username)):"remove this later",r.a.createElement("div",{className:"nb_userLogoutWrapper"},r.a.createElement("a",{href:"",className:"nb_logoutLink",onClick:this.handleLogout},"Logout")))))}}]),t}(r.a.Component),U=Object(l.b)(function(e){return{currentUser:e.session.currentUser,loggedIn:e.session.isAuthenticated}},function(e){return{login:function(t){return e(y(t))},signup:function(t){return e(E(t))},logout:function(){return e(O())},closeModal:function(){return e({type:"CLOSE_MODAL"})}}})(P),W=function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"footer-flex-center"},r.a.createElement("a",{href:"https://github.com/rfoong8983/sweet_flex_project/wiki"},r.a.createElement("i",{className:"fab fa-github color"}))))}}]),t}(n.Component),z=a(23),A=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(C.a)(this,Object(N.a)(t).call(this,e))).state={graphData:a.props.graphData},a}return Object(_.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"graph-size"},r.a.createElement(z.c,{data:this.state.graphData,options:{scales:{xAxes:[{gridLines:{display:!1,color:"rgba(40, 40, 40, 1)"},ticks:{fontFamily:"Roboto Condensed",fontStyle:"400",fontSize:12}}],yAxes:[{gridLines:{display:!1,color:"rgba(40, 40, 40, 1)"},ticks:{fontFamily:"Roboto Condensed",fontStyle:"400",fontSize:12}}]},responsive:!0,maintainAspectRatio:!1,title:Object(j.a)({display:!0,text:"Line Graph",fontSize:25,fontFamily:"Roboto Condensed",fontStyle:"400"},"fontSize",20),legend:{display:!1,position:"bottom"}}}))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(C.a)(this,Object(N.a)(t).call(this,e))).state={graphData:a.props.graphData},a}return Object(_.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e="rgba(40, 40, 40, 1)";return r.a.createElement("div",{className:"graph-size"},r.a.createElement(z.d,{data:this.state.graphData,options:{scale:{gridLines:{display:!0,color:e},angleLines:{display:!0,color:e},ticks:{backdropColor:"black",fontSize:10},pointLabels:{fontSize:13,fontFamily:"Roboto Condensed",fontStyle:"400"}},responsive:!0,maintainAspectRatio:!1,title:Object(j.a)({display:!0,text:"Radar Graph",fontSize:25,fontFamily:"Roboto Condensed",fontStyle:"400"},"fontSize",20),legend:{display:!0,position:"bottom",labels:{fontFamily:"Roboto Condensed",fontStyle:"400",fontSize:12,fontColor:"gray"}}}}))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(C.a)(this,Object(N.a)(t).call(this,e))).state={graphData:a.props.graphData},a}return Object(_.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"graph-size"},r.a.createElement(z.b,{data:this.state.graphData,options:{responsive:!0,maintainAspectRatio:!1,title:Object(j.a)({display:!0,text:"Doughnut Graph",fontSize:25,fontFamily:"Roboto Condensed",fontStyle:"400"},"fontSize",20),legend:{display:!0,position:"bottom",labels:{fontFamily:"Roboto Condensed",fontStyle:"400",fontSize:12}}}}))}}]),t}(n.Component);M.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"right"};var I=M,x=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(C.a)(this,Object(N.a)(t).call(this,e))).state={graphData:a.props.graphData},a}return Object(_.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e="rgba(40, 40, 40, 1)";return r.a.createElement("div",{className:"graph-size"},r.a.createElement(z.a,{data:this.state.graphData,options:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!1,color:e},ticks:{fontFamily:"Roboto Condensed",fontStyle:"400",fontSize:12}}],yAxes:[{gridLines:{display:!1,color:e},ticks:{fontFamily:"Roboto Condensed",fontStyle:"400",fontSize:12}}]},title:Object(j.a)({display:!0,text:"Bar Graph",fontSize:25,fontFamily:"Roboto Condensed",fontStyle:"400"},"fontSize",20),legend:{display:!0,position:"bottom",labels:{fontFamily:"Roboto Condensed",fontStyle:"400",fontSize:12}}}}))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(C.a)(this,Object(N.a)(t).call(this,e))).state={barGraphData:{},lineGraphData:{},radarGraphData:{},doughnutGraphData:{}},a}return Object(_.a)(t,e),Object(k.a)(t,[{key:"componentWillMount",value:function(){this.getGraphData()}},{key:"getGraphData",value:function(){var e="rgba(118, 60, 234, 1)",t="rgba(53, 0, 212, 1)",a="rgba(0, 0, 0, 0)",n=function(e,t){for(var a=[],n=0;n<e;n++)a.push(t);return a};this.setState({barGraphData:{labels:["Boston","San Francisco","Los Angeles","New York"],datasets:[{label:"Population",data:[100,200,300,400],backgroundColor:n(4,t),borderColor:n(4,"rgba(53, 0, 212, 1)")},{label:"Hype",data:[200,300,120,60],backgroundColor:n(4,e),borderColor:n(4,"rgba(118, 0, 234, 1)")}]},lineGraphData:{labels:["mon","tues","weds","thurs","fri","sat","sun"],datasets:[{label:"Joy",data:[70,35,45,80,89,92,75],lineTension:0,borderWidth:2,backgroundColor:a,pointBackgroundColor:"black",borderColor:t,pointBorderColor:t},{label:"Sadness",data:[20,60,62,45,32,80,44],lineTension:0,borderWidth:2,backgroundColor:a,pointBackgroundColor:"black",borderColor:e,pointBorderColor:e}]},radarGraphData:{labels:["sad","happy","angst","envy","pride","love","anger","joy","shock"],datasets:[{label:"hashtag 1",data:[19,73,72,54,32,35,80],borderColor:t,lineTension:0,borderWidth:2,backgroundColor:"rgba(53, 0, 212, .5)",pointBackgroundColor:"black",pointBorderColor:"rgba(53, 0, 212, 1)",pointBorderWidth:2,pointRadius:3},{label:"hashtag 2",data:[35,19,32,75,32,62,15],borderColor:e,lineTension:0,borderWidth:2,backgroundColor:"rgba(118, 0, 234, .5)",pointBackgroundColor:"black",pointBorderColor:"rgba(118, 0, 234, 1)",pointBorderWidth:2,pointRadius:3}]},doughnutGraphData:{labels:["sad","happy","angst"],datasets:[{data:[19,73,72],hoverBorderColor:["rgba(53, 0, 212, 1)","rgba(118, 0, 234, .5)",t],backgroundColor:["rgba(53, 0, 212, .5)","rgba(118, 0, 234, .5)",t],hoverBorderWidth:2,borderWidth:0}]}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"dashboard-container"},r.a.createElement("div",{className:"dashboard"},r.a.createElement("div",{className:"flex-col-center"},r.a.createElement("div",{className:"dashboard-text"},"#hashtag analysis"),r.a.createElement(x,{graphData:this.state.barGraphData}),r.a.createElement(A,{graphData:this.state.lineGraphData}),r.a.createElement(T,{graphData:this.state.radarGraphData}),r.a.createElement(I,{graphData:this.state.doughnutGraphData})))))}}]),t}(n.Component),G=a(95),F=(a(264),function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(C.a)(this,Object(N.a)(t).call(this,e))).state={data:a.makeData()},a}return Object(_.a)(t,e),Object(k.a)(t,[{key:"makeData",value:function(){return[{hashtag:"#apples",time:"3/11/2019 2:30pm",happiness:"0.89",anger:"0.30",sadness:"0.79",envy:"0.54"},{hashtag:"#oranges",time:"3/14/2019 2:34pm",happiness:"0.41",anger:"0.85",sadness:"0.11",envy:"0.33"},{hashtag:"#grapes",time:"3/14/2019 7:00pm",happiness:"0.70",anger:"0.35",sadness:"0.50",envy:"0.30"}]}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",{className:"profile-page-container"},r.a.createElement("div",{className:"table-wrapper"},r.a.createElement("h2",{className:"table-title"}," Search History "),r.a.createElement("div",{className:"history-table"},r.a.createElement(G.a,{data:e,columns:[{Header:"Search Info",columns:[{Header:"Hashtag",accessor:"hashtag",className:"hashtag"},{Header:"Time",accessor:"time"}]},{Header:"Sentiment Info",columns:[{Header:"Happiness",accessor:"happiness"},{Header:"Anger",accessor:"anger"},{Header:"Sadness",accessor:"sadness"},{Header:"Envy",accessor:"envy"}]}],defaultPageSize:10,className:"history-table"}))))}}]),t}(r.a.Component)),H=Object(l.b)(function(e){return{loggedIn:e.session.isAuthenticated,user:e.session.currentUser}})(F),V=a(269),J=function(e){return{loggedIn:e.session.isAuthenticated}},X=(Object(d.a)(Object(l.b)(J)(function(e){var t=e.component,a=e.path,n=e.exact,o=e.loggedIn;return r.a.createElement(i.a,{path:a,exact:n,render:function(e){return o?r.a.createElement(V.a,{to:"/search"}):r.a.createElement(t,e)}})})),Object(d.a)(Object(l.b)(J)(function(e){var t=e.component,a=e.path,n=e.exact,o=e.loggedIn;return r.a.createElement(i.a,{path:a,exact:n,render:function(e){return o?r.a.createElement(t,e):r.a.createElement(V.a,{to:"/"})}})}))),Y=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(C.a)(this,Object(N.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(D.a)(Object(D.a)(a))),a}return Object(_.a)(t,e),Object(k.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.loggedIn,this.props.openModal("form")}},{key:"render",value:function(){return r.a.createElement("div",{className:"hero_mainWrapper"},r.a.createElement("div",{className:"hero_contentWrapper"},r.a.createElement("div",{className:"hero_heroWrapper"},r.a.createElement("div",{className:"hero_sloganWrapper"},r.a.createElement("p",{className:"hero_slogan"},"Impress your friends with this nifty"),r.a.createElement("p",{className:"hero_slogan2"},"hashtag analyzer")),r.a.createElement("div",{className:"hero_modalButtonWrapper"},r.a.createElement("button",{className:"hero_modalButton",onClick:this.handleSubmit},"Create an account")))))}}]),t}(r.a.Component),q=Object(d.a)(Object(l.b)(function(e){return{loggedIn:e.session.isAuthenticated}},function(e){return{openModal:function(t){return e(u(t))},closeModal:function(){return e({type:"CLOSE_MODAL"})}}})(Y)),K=function(){return r.a.createElement("div",{className:"appWrapper"},r.a.createElement(R,null),r.a.createElement(U,null),r.a.createElement(i.a,{exact:!0,path:"/",component:q}),r.a.createElement(i.a,{exact:!0,path:"/dashboard",component:B}),r.a.createElement(X,{exact:!0,path:"/profile",component:H}),r.a.createElement(W,null))},Q=function(e){var t=e.store;return r.a.createElement(l.a,{store:t},r.a.createElement(c.a,null,r.a.createElement(K,null)))},Z=a(20),$=a(93),ee=a(94),te={isAuthenticated:!1,user:{}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_CURRENT_USER":return Object(ee.a)({},e,{isAuthenticated:!!t.currentUser,currentUser:t.currentUser});case"RECEIVE_USER_LOGOUT":return{isAuthenticated:!1,currentUser:void 0};default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"OPEN_MODAL":return t.modal;case"CLOSE_MODAL":return null;default:return e}},re=Object(Z.c)({modal:ne}),oe=Object(Z.c)({session:ae,ui:re}),se=[$.a],ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(Z.d)(oe,e,Z.a.apply(void 0,se))};a(265);document.addEventListener("DOMContentLoaded",function(){var e=ce();if(localStorage.jwtToken){m(localStorage.jwtToken);var t=g()(localStorage.jwtToken);e.dispatch(f(t));var a=Date.now()/1e3;t.exp<a&&(e.dispatch(O()),window.location.href="/login")}window.getState=e.getState,window.dispatch=e.dispatch,window.login=y;var n=document.getElementById("root");s.a.render(r.a.createElement(Q,{store:e}),n)})},96:function(e,t,a){e.exports=a(266)}},[[96,1,2]]]);
//# sourceMappingURL=main.6c763151.chunk.js.map