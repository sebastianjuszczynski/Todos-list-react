(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{50:function(n,t,e){"use strict";e.r(t);var r=e(2),c=e(0),a=e.n(c),i=e(22),o=e.n(i),s=e(10),u=e(6),d=e(7);function l(){var n=Object(u.a)(["\n    html {\n    box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n    box-sizing: inherit;\n    }\n\n    body {\n    font-family: 'Roboto', sans-serif;\n    background-color: #eee;\n    }\n"]);return l=function(){return n},n}var b=Object(d.a)(l()),x=e(17),j=e(8),f=function(n){var t=n.children;return Object(r.jsx)("main",{children:t})};function p(){var n=Object(u.a)(["\n    background-color: #fff;\n    width: 100%;\n    box-shadow: 1px 1px 3px 1px #ccc;\n    padding: 20px;\n    margin-bottom: 1px;\n\n    @media (max-width: 767px) {\n        text-align: center;\n    }\n"]);return p=function(){return n},n}function h(){var n=Object(u.a)(["\n    align-self: flex-start;\n    margin-bottom: 0;\n    \n\n    @media (max-width: 767px) {\n        align-self: center;\n    }\n"]);return h=function(){return n},n}function O(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 50%;\n    margin: 0 auto;\n\n    @media (max-width: 767px) {\n        width: 100%;\n    }\n"]);return O=function(){return n},n}var g=d.c.section(O()),m=d.c.h1(h()),v=d.c.h2(p()),k=function(n){var t=n.title,e=n.subtitle,c=n.body;return Object(r.jsxs)(g,{children:[Object(r.jsx)(m,{children:t}),Object(r.jsx)(v,{children:e}),c]})};var w=function(){return Object(r.jsx)(f,{children:Object(r.jsx)(k,{title:"O autorze",subtitle:"Sebastian Juszczy\u0144ski",body:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"Nazywam si\u0119 Sebastian Juszczy\u0144ski i pochodz\u0119 z ma\u0142ej miejscowo\u015bci po\u0142o\u017conej w wojew\xf3dztwie kujawsko - pomorskim, w pobli\u017cu Torunia - Ostrowite.\ud83d\ude01\ud83d\udcaa"}),Object(r.jsx)("p",{children:"W wieku 19 lat przeprowadzi\u0142em si\u0119 do Olsztyna\ud83d\ude89, \u017ceby studiowa\u0107 Ochron\u0119 \u015arodowiska.\ud83d\udcda"})]})})})},y=e(36),z=e(21);function T(){var n=Object(u.a)(["\n    background-color: teal;\n    color: #fff;\n    flex-basis: 30%;\n    border: none;\n    transition: 0.3s;\n\n    &:hover {\n        background-color: hsl(180, 100%, 30%);\n    }\n    @media (max-width: 767px) {\n        flex-basis: 100%;\n        padding: 10px;\n    }  \n"]);return T=function(){return n},n}function S(){var n=Object(u.a)(["\n    display: flex;\n    align-items: space-between;\n    background-color: #fff;\n    box-shadow: 1px 1px 3px 1px #ccc;\n    width: 100%;\n    padding: 20px;\n\n    @media (max-width: 767px) {\n        flex-wrap: wrap;\n        width: 100%;\n    }\n"]);return S=function(){return n},n}var C=d.c.form(S()),D=d.c.button(T()),E="tasks",F=function(n){return localStorage.setItem(E,JSON.stringify(n))},U=Object(z.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(E))||[],hideDone:!1},reducers:{addTask:function(n,t){var e=n.tasks,r=t.payload;e.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,t){var e=n.tasks.findIndex((function(n){return n.id===t.payload}));n.tasks[e].done=!n.tasks[e].done},removeTask:function(n,t){var e=n.tasks.findIndex((function(n){return n.id===t.payload}));n.tasks.splice(e,1)},setAllDone:function(n){n.tasks.forEach((function(n){return n.done=!0}))},fetchExampleTasks:function(n){n.loading=!0},fetchExampleTasksSuccess:function(n,t){var e=t.payload;n.tasks=e,n.loading=!1},fetchExampleTasksError:function(n){n.loading=!1}}}),L=U.actions,P=L.addTask,I=L.toggleHideDone,J=L.toggleTaskDone,N=L.removeTask,R=L.setAllDone,A=L.fetchExampleTasks,B=L.fetchExampleTasksSuccess,H=L.fetchExampleTasksError,W=function(n){return n.tasks},M=function(n){return W(n).tasks},Z=function(n){return n.tasks.loading},q=U.reducer;function G(){var n=Object(u.a)(["\n    flex-basis: 70%;\n    border: 2px solid #eee;\n    padding: 10px;\n    \n    @media (max-width: 767px) {\n        flex-basis: 100%;\n        margin-right: 0;\n        margin-bottom: 5px;\n    }    \n"]);return G=function(){return n},n}var K=d.c.input(G()),Q=function(){var n=Object(c.useState)(""),t=Object(y.a)(n,2),e=t[0],a=t[1],i=Object(c.useRef)(null),o=Object(s.b)();return Object(r.jsxs)(C,{onSubmit:function(n){n.preventDefault(),o(P({content:e.trim(),done:!1,id:Object(z.c)()})),a(""),i.current.focus()},children:[Object(r.jsx)(K,{ref:i,value:e,placeholder:"Co jest do zrobienia?",onChange:function(n){var t=n.target;return a(t.value)}}),Object(r.jsx)(D,{children:"Dodaj zadanie!"})]})};function V(){var n=Object(u.a)(["\n    text-decoration: none;\n    color: teal;\n    padding: 10px 10px 3px 10px;\n    &."," {\n        font-weight: bold;\n    }    \n"]);return V=function(){return n},n}function X(){var n=Object(u.a)(["\n        background-color: hsl(0, 100%, 40%);\n    \n    &:hover {\n        background-color: hsl(0, 100%, 50%);\n    }\n    "]);return X=function(){return n},n}function Y(){var n=Object(u.a)(["\n    width: 30px;\n    height: 30px;\n    background-color: hsl(120, 100%, 25%);\n    font-weight: bold;\n    margin-right: 5px;\n    padding: 5px;\n    border: none;\n    transition: 0.3s;\n\n    &:hover {\n        background-color: hsl(120, 100%, 30%);\n    }\n\n    ","\n"]);return Y=function(){return n},n}function $(){var n=Object(u.a)(["\n        display: none;\n"]);return $=function(){return n},n}function _(){var n=Object(u.a)(["\n    background-color: #fff;\n    padding: 10px 10px 0 10px;\n    display: flex;\n    align-items: center;\n    border-bottom: 2px solid #eee;\n    margin-bottom: 5px;\n\n    ","\n"]);return _=function(){return n},n}function nn(){var n=Object(u.a)(["\n    align-self: flex-start;\n    list-style: none;\n    padding: 0;\n    background-color: #fff;\n    width: 100%;\n    box-shadow: 1px 1px 3px 1px #ccc;\n    margin: 0;\n"]);return nn=function(){return n},n}var tn=d.c.ul(nn()),en=d.c.li(_(),(function(n){return n.hidden&&Object(d.b)($())})),rn=d.c.button(Y(),(function(n){return n.red&&Object(d.b)(X())})),cn="active",an=Object(d.c)(x.b).attrs((function(){return{activeClassName:cn}}))(V(),cn),on=function(){var n=Object(j.h)(),t=new URLSearchParams(n.search).get("szukaj"),e=Object(s.c)(W).hideDone,c=Object(s.c)((function(n){return function(n,t){var e=M(n);return t&&""!==t.trim()?e.filter((function(n){return n.content.toUpperCase().includes(t.trim().toUpperCase())})):e}(n,t)})),a=Object(s.b)();return Object(r.jsx)(tn,{children:c.map((function(n){var t=n.id,c=n.done,i=n.content;return Object(r.jsxs)(en,{hidden:c&&e,children:[Object(r.jsx)(rn,{onClick:function(){return a(J(t))},children:c?"\u2714\ufe0f":""}),Object(r.jsx)(rn,{onClick:function(){return a(N(t))},red:!0,children:"\ud83d\uddd1\ufe0f"}),Object(r.jsx)(an,{to:"/tasks/".concat(t),children:i})]},t)}))})};function sn(){var n=Object(u.a)(["\n    background: transparent;\n    color: teal;\n    border: none;\n    margin: 0 20px 0 0;\n    transition: color 0.3s;\n\n    @media (max-width: 767px) {\n        flex-basis: 100%;\n        margin: 0 0 10px 0;\n }\n\n    &:hover {\n        color: hsl(180, 100%, 30%);\n    }\n"]);return sn=function(){return n},n}function un(){var n=Object(u.a)(["\n    flex-basis: 70%;\n    display: flex;\n    justify-content: flex-end;\n\n    @media (max-width: 767px) {\n        flex-basis: 100%;\n        flex-wrap: wrap;\n        justify-content: center;\n        margin-bottom: 10px;\n }\n\n"]);return un=function(){return n},n}var dn=d.c.div(un()),ln=d.c.button(sn()),bn=function(){var n=Object(s.c)(W),t=n.tasks,e=n.hideDone,c=Object(s.b)(),a=Object(s.c)(Z);return Object(r.jsxs)(dn,{children:[Object(r.jsx)(ln,{onClick:function(){return c(A())},disabled:a,children:a?"\u0141adowanie...":"Pobierz przyk\u0142adowe zadania"}),t.length>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(ln,{onClick:function(){return c(I())},children:[e?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(r.jsx)(ln,{onClick:function(){return c(R())},disabled:t.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})]})},xn="szukaj";function jn(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    width: 100%;\n    padding: 10px 0 10px 0;\n"]);return jn=function(){return n},n}var fn=d.c.div(jn());var pn=function(){var n=Object(j.h)(),t=Object(j.g)(),e=new URLSearchParams(n.search).get(xn);return Object(r.jsx)(fn,{children:Object(r.jsx)(K,{placeholder:"Filtruj zadania",value:e||"",onChange:function(e){var r=e.target,c=new URLSearchParams(n.search);""===r.value.trim()?c.delete(xn):c.set(xn,r.value),t.push("".concat(n.pathname,"?").concat(c.toString()))}})})};function hn(){var n=Object(u.a)(["\n    background-color: #fff;\n    padding: 20px;\n    margin-bottom: 1px;\n    margin-top: 0;\n\n    @media (max-width: 767px) {\n        flex-basis: 100%;\n    }\n"]);return hn=function(){return n},n}function On(){var n=Object(u.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-basis: 100%;\n"]);return On=function(){return n},n}function gn(){var n=Object(u.a)(["\n    display: flex;\n    width: 50%;\n    margin: 20px auto 0 auto;\n    background-color: #fff;\n    box-shadow: 1px 1px 3px 1px #ccc;\n\n    @media (max-width: 767px) {\n        width: 100%;\n    }\n"]);return gn=function(){return n},n}var mn=d.c.section(gn()),vn=d.c.article(On()),kn=d.c.h2(hn()),wn=function(n){var t=n.title,e=n.body;return Object(r.jsx)(mn,{children:Object(r.jsxs)(vn,{children:[Object(r.jsx)(kn,{children:t}),e]})})};function yn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 50%;\n    margin: 0 auto;\n\n    @media (max-width: 767px) {\n        width: 100%;\n    }\n"]);return yn=function(){return n},n}var zn=d.c.section(yn()),Tn=function(n){var t=n.body;return Object(r.jsx)(zn,{children:t})};var Sn=function(){return Object(r.jsxs)(f,{children:[Object(r.jsx)(k,{title:"Lista zada\u0144",subtitle:"Dodaj nowe zadanie",body:Object(r.jsx)(Q,{})}),Object(r.jsx)(k,{subtitle:"Wyszukiwarka",body:Object(r.jsx)(pn,{})}),Object(r.jsx)(wn,{title:"Lista zada\u0144",body:Object(r.jsx)(bn,{})}),Object(r.jsx)(Tn,{body:Object(r.jsx)(on,{})})]})};var Cn=function(){var n=Object(j.i)().id,t=Object(s.c)((function(t){return function(n,t){return M(n).find((function(n){return n.id===t}))}(t,n)}));return Object(r.jsx)(f,{children:Object(r.jsx)(k,{title:"Szczeg\xf3\u0142y zadania",subtitle:t?t.content:"Oops... Task not found! :(",body:!!t&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("strong",{children:"Uko\u0144czono:"})," ",t.done?"Tak":"Nie"]})})})},Dn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:":id"},t=n.id;return"/tasks/".concat(t)};function En(){var n=Object(u.a)(["\n  background-color: teal;\n  list-style-type: none;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 15px;\n  margin: 0px;\n"]);return En=function(){return n},n}function Fn(){var n=Object(u.a)(["\n    text-decoration: none;\n    color: white;\n    padding: 10px 10px 3px 10px;\n    &."," {\n        font-weight: bold;\n    }\n    &:hover {\n    transition: 0.5s;\n    filter: brightness(0.8);\n    border-bottom: 1px solid;\n  }\n"]);return Fn=function(){return n},n}var Un="active",Ln=Object(d.c)(x.b).attrs((function(){return{activeClassName:Un}}))(Fn(),Un),Pn=d.c.ul(En());var In=function(){return Object(r.jsx)("nav",{children:Object(r.jsxs)(Pn,{children:[Object(r.jsx)("li",{children:Object(r.jsx)(Ln,{to:"/tasks",children:"Zadania"})}),Object(r.jsx)("li",{children:Object(r.jsx)(Ln,{to:"/author",children:"O autorze"})})]})})};var Jn=function(){return Object(r.jsxs)(x.a,{children:[Object(r.jsx)(In,{}),Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{path:Dn(),children:Object(r.jsx)(Cn,{})}),Object(r.jsx)(j.b,{path:"/tasks",children:Object(r.jsx)(Sn,{})}),Object(r.jsx)(j.b,{path:"/author",children:Object(r.jsx)(w,{})}),Object(r.jsx)(j.b,{children:Object(r.jsx)(j.a,{to:"/tasks"})})]})]})},Nn=e(37),Rn=e(14),An=e.n(Rn),Bn=e(16),Hn=e(35),Wn=function(){var n=Object(Hn.a)(An.a.mark((function n(){var t;return An.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/Todos-list-react/exampleTasks.json");case 2:return(t=n.sent).ok||new Error(t.statusText),n.next=7,t.json();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Mn=An.a.mark(Gn),Zn=An.a.mark(Kn),qn=An.a.mark(Qn);function Gn(){var n;return An.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Bn.c)(1e3);case 3:return t.next=5,Object(Bn.b)(Wn);case 5:return n=t.sent,t.next=8,Object(Bn.d)(B(n));case 8:t.next=16;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(Bn.d)(H());case 14:return t.next=16,Object(Bn.b)(alert,"Something went wrong...");case 16:case"end":return t.stop()}}),Mn,null,[[0,10]])}function Kn(){var n;return An.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Bn.e)(M);case 2:return n=t.sent,t.next=5,Object(Bn.b)(F,n);case 5:case"end":return t.stop()}}),Zn)}function Qn(){return An.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Bn.g)(A.type,Gn);case 2:return n.next=4,Object(Bn.f)("*",Kn);case 4:case 5:case"end":return n.stop()}}),qn)}var Vn=An.a.mark(Xn);function Xn(){return An.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Bn.a)([Qn()]);case 2:case"end":return n.stop()}}),Vn)}var Yn=Object(Nn.a)(),$n=Object(z.a)({reducer:{tasks:q},middleware:[Yn]});Yn.run(Xn);var _n=$n,nt=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,51)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;e(n),r(n),c(n),a(n),i(n)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsxs)(s.a,{store:_n,children:[Object(r.jsx)(b,{}),Object(r.jsx)(Jn,{})]})}),document.getElementById("root")),nt()}},[[50,1,2]]]);
//# sourceMappingURL=main.61f9d458.chunk.js.map