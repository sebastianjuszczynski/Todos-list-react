(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{50:function(n,t,e){"use strict";e.r(t);var r=e(2),c=e(0),a=e.n(c),i=e(22),o=e.n(i),s=e(10),u=e(6),d=e(7);function l(){var n=Object(u.a)(["\n    html {\n    box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n    box-sizing: inherit;\n    }\n\n    body {\n    font-family: 'Roboto', sans-serif;\n    background-color: #eee;\n    }\n"]);return l=function(){return n},n}var b=Object(d.a)(l()),f=e(17),j=e(8),x=function(n){var t=n.children;return Object(r.jsx)("main",{children:t})};function p(){var n=Object(u.a)(["\n    background-color: #fff;\n    width: 100%;\n    padding-left: 5px;\n"]);return p=function(){return n},n}function h(){var n=Object(u.a)(["\n    background-color: #fff;\n    width: 100%;\n    font-weight: normal;\n    padding-left: 5px;\n    margin-bottom: 1px;\n\n"]);return h=function(){return n},n}function O(){var n=Object(u.a)(["\n    align-self: flex-start;\n    margin-bottom: 0;\n    padding-left: 5px;   \n\n"]);return O=function(){return n},n}function g(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 50%;\n    margin: 0 auto;\n    box-shadow: 1px 1px 3px 1px #ccc;\n    background-color: #fff;\n\n    @media (max-width: 767px) {\n        width: 100%;\n    }\n"]);return g=function(){return n},n}var m=d.c.section(g()),v=d.c.h1(O()),k=d.c.h2(h()),w=d.c.p(p()),y=function(n){var t=n.title,e=n.subtitle,c=n.body;return Object(r.jsxs)(m,{children:[Object(r.jsx)(v,{children:t}),Object(r.jsx)(k,{children:e}),c]})};var z=function(){return Object(r.jsx)(x,{children:Object(r.jsx)(y,{title:"O autorze",subtitle:"Sebastian Juszczy\u0144ski",body:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(w,{children:"Nazywam si\u0119 Sebastian Juszczy\u0144ski i pochodz\u0119 z ma\u0142ej miejscowo\u015bci po\u0142o\u017conej w wojew\xf3dztwie kujawsko - pomorskim, w pobli\u017cu Torunia - Ostrowite.\ud83d\ude01\ud83d\udcaa"}),Object(r.jsx)(w,{children:"W wieku 19 lat przeprowadzi\u0142em si\u0119 do Olsztyna\ud83d\ude89, \u017ceby studiowa\u0107 Ochron\u0119 \u015arodowiska.\ud83d\udcda"})]})})})},T=e(36),S=e(21);function C(){var n=Object(u.a)(["\n    background-color: teal;\n    color: #fff;\n    flex-basis: 30%;\n    border: none;\n    transition: 0.3s;\n\n    &:hover {\n        background-color: hsl(180, 100%, 30%);\n    }\n    @media (max-width: 767px) {\n        flex-basis: 100%;\n        padding: 10px;\n    }  \n"]);return C=function(){return n},n}function D(){var n=Object(u.a)(["\n    display: flex;\n    align-items: space-between;\n    background-color: #fff;\n    box-shadow: 1px 1px 3px 1px #ccc;\n    width: 100%;\n    padding: 20px 20px 20px 5px;\n\n    @media (max-width: 767px) {\n        flex-wrap: wrap;\n        width: 100%;\n    }\n"]);return D=function(){return n},n}var E=d.c.form(D()),F=d.c.button(C()),U="tasks",L=function(n){return localStorage.setItem(U,JSON.stringify(n))},P=Object(S.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(U))||[],hideDone:!1},reducers:{addTask:function(n,t){var e=n.tasks,r=t.payload;e.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,t){var e=n.tasks.findIndex((function(n){return n.id===t.payload}));n.tasks[e].done=!n.tasks[e].done},removeTask:function(n,t){var e=n.tasks.findIndex((function(n){return n.id===t.payload}));n.tasks.splice(e,1)},setAllDone:function(n){n.tasks.forEach((function(n){return n.done=!0}))},fetchExampleTasks:function(n){n.loading=!0},fetchExampleTasksSuccess:function(n,t){var e=t.payload;n.tasks=e,n.loading=!1},fetchExampleTasksError:function(n){n.loading=!1}}}),I=P.actions,J=I.addTask,N=I.toggleHideDone,R=I.toggleTaskDone,A=I.removeTask,B=I.setAllDone,H=I.fetchExampleTasks,W=I.fetchExampleTasksSuccess,M=I.fetchExampleTasksError,Z=function(n){return n.tasks},q=function(n){return Z(n).tasks},G=function(n){return n.tasks.loading},K=P.reducer;function Q(){var n=Object(u.a)(["\n    flex-basis: 70%;\n    border: 2px solid #eee;\n    padding: 10px;\n    \n    @media (max-width: 767px) {\n        flex-basis: 100%;\n        margin-right: 0;\n        margin-bottom: 5px;\n    }    \n"]);return Q=function(){return n},n}var V=d.c.input(Q()),X=function(){var n=Object(c.useState)(""),t=Object(T.a)(n,2),e=t[0],a=t[1],i=Object(c.useRef)(null),o=Object(s.b)();return Object(r.jsxs)(E,{onSubmit:function(n){n.preventDefault(),o(J({content:e.trim(),done:!1,id:Object(S.c)()})),a(""),i.current.focus()},children:[Object(r.jsx)(V,{ref:i,value:e,placeholder:"Co jest do zrobienia?",onChange:function(n){var t=n.target;return a(t.value)}}),Object(r.jsx)(F,{children:"Dodaj zadanie!"})]})};function Y(){var n=Object(u.a)(["\n    text-decoration: none;\n    color: teal;\n    padding: 10px 10px 3px 10px;\n    &."," {\n        font-weight: bold;\n    }    \n"]);return Y=function(){return n},n}function $(){var n=Object(u.a)(["\n        background-color: hsl(0, 100%, 40%);\n    \n    &:hover {\n        background-color: hsl(0, 100%, 50%);\n    }\n    "]);return $=function(){return n},n}function _(){var n=Object(u.a)(["\n    width: 30px;\n    height: 30px;\n    background-color: hsl(120, 100%, 25%);\n    font-weight: bold;\n    margin-right: 5px;\n    padding: 5px;\n    border: none;\n    transition: 0.3s;\n\n    &:hover {\n        background-color: hsl(120, 100%, 30%);\n    }\n\n    ","\n"]);return _=function(){return n},n}function nn(){var n=Object(u.a)(["\n        display: none;\n"]);return nn=function(){return n},n}function tn(){var n=Object(u.a)(["\n    background-color: #fff;\n    padding: 10px 10px 0 10px;\n    display: flex;\n    align-items: center;\n    border-bottom: 2px solid #eee;\n    margin-bottom: 5px;\n\n    ","\n"]);return tn=function(){return n},n}function en(){var n=Object(u.a)(["\n    align-self: flex-start;\n    list-style: none;\n    padding: 0;\n    background-color: #fff;\n    width: 100%;\n    box-shadow: 1px 1px 3px 1px #ccc;\n    margin: 0;\n"]);return en=function(){return n},n}var rn=d.c.ul(en()),cn=d.c.li(tn(),(function(n){return n.hidden&&Object(d.b)(nn())})),an=d.c.button(_(),(function(n){return n.red&&Object(d.b)($())})),on="active",sn=Object(d.c)(f.b).attrs((function(){return{activeClassName:on}}))(Y(),on),un=function(){var n=Object(j.h)(),t=new URLSearchParams(n.search).get("szukaj"),e=Object(s.c)(Z).hideDone,c=Object(s.c)((function(n){return function(n,t){var e=q(n);return t&&""!==t.trim()?e.filter((function(n){return n.content.toUpperCase().includes(t.trim().toUpperCase())})):e}(n,t)})),a=Object(s.b)();return Object(r.jsx)(rn,{children:c.map((function(n){var t=n.id,c=n.done,i=n.content;return Object(r.jsxs)(cn,{hidden:c&&e,children:[Object(r.jsx)(an,{onClick:function(){return a(R(t))},children:c?"\u2714\ufe0f":""}),Object(r.jsx)(an,{onClick:function(){return a(A(t))},red:!0,children:"\ud83d\uddd1\ufe0f"}),Object(r.jsx)(sn,{to:"/tasks/".concat(t),children:i})]},t)}))})};function dn(){var n=Object(u.a)(["\n    background: transparent;\n    color: teal;\n    border: none;\n    transition: color 0.3s;\n\n    @media (max-width: 767px) {\n        flex-basis: 100%;\n        margin: 0 0 10px 0;\n        text-align: left;\n }\n\n    &:hover {\n        color: hsl(180, 100%, 30%);\n    }\n"]);return dn=function(){return n},n}function ln(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: repeat(3, auto);\n    grid-gap: 20px;\n    justify-content: end;\n    margin-bottom: 10px;\n\n    @media (max-width: 767px) {\n        grid-template-columns: 1fr;\n        justify-items: center;\n }\n\n"]);return ln=function(){return n},n}var bn=d.c.div(ln()),fn=d.c.button(dn()),jn=function(){var n=Object(s.c)(Z),t=n.tasks,e=n.hideDone,c=Object(s.b)(),a=Object(s.c)(G);return Object(r.jsxs)(bn,{children:[Object(r.jsx)(fn,{onClick:function(){return c(H())},disabled:a,children:a?"\u0141adowanie...":"Pobierz przyk\u0142adowe zadania"}),t.length>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(fn,{onClick:function(){return c(N())},children:[e?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(r.jsx)(fn,{onClick:function(){return c(B())},disabled:t.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})]})},xn="szukaj";function pn(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    width: 100%;\n    padding: 20px 20px 20px 5px;\n"]);return pn=function(){return n},n}var hn=d.c.div(pn());var On=function(){var n=Object(j.h)(),t=Object(j.g)(),e=new URLSearchParams(n.search).get(xn);return Object(r.jsx)(hn,{children:Object(r.jsx)(V,{placeholder:"Filtruj zadania",value:e||"",onChange:function(e){var r=e.target,c=new URLSearchParams(n.search);""===r.value.trim()?c.delete(xn):c.set(xn,r.value),t.push("".concat(n.pathname,"?").concat(c.toString()))}})})};function gn(){var n=Object(u.a)(["\n    background-color: #fff;\n    padding: 20px 0 20px 5px;\n    margin-bottom: 1px;\n    margin-top: 0;\n    text-align: left; \n    \n    @media (max-width: 767px) {\n        flex-basis: 100%;\n    }\n"]);return gn=function(){return n},n}function mn(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    width: 100%;\n"]);return mn=function(){return n},n}function vn(){var n=Object(u.a)(["\n    display: flex;\n    width: 50%;\n    margin: 20px auto 0 auto;\n    background-color: #fff;\n    box-shadow: 1px 1px 3px 1px #ccc;\n\n    @media (max-width: 767px) {\n        width: 100%; \n    }\n"]);return vn=function(){return n},n}var kn=d.c.section(vn()),wn=d.c.article(mn()),yn=d.c.h2(gn()),zn=function(n){var t=n.title,e=n.body;return Object(r.jsx)(kn,{children:Object(r.jsxs)(wn,{children:[Object(r.jsx)(yn,{children:t}),e]})})};function Tn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 50%;\n    margin: 0 auto;\n\n    @media (max-width: 767px) {\n        width: 100%;\n    }\n"]);return Tn=function(){return n},n}var Sn=d.c.section(Tn()),Cn=function(n){var t=n.body;return Object(r.jsx)(Sn,{children:t})};var Dn=function(){return Object(r.jsxs)(x,{children:[Object(r.jsx)(y,{title:"Lista zada\u0144",subtitle:"Dodaj nowe zadanie",body:Object(r.jsx)(X,{})}),Object(r.jsx)(y,{subtitle:"Wyszukiwarka",body:Object(r.jsx)(On,{})}),Object(r.jsx)(zn,{title:"Lista zada\u0144",body:Object(r.jsx)(jn,{})}),Object(r.jsx)(Cn,{body:Object(r.jsx)(un,{})})]})};var En=function(){var n=Object(j.i)().id,t=Object(s.c)((function(t){return function(n,t){return q(n).find((function(n){return n.id===t}))}(t,n)}));return Object(r.jsx)(x,{children:Object(r.jsx)(y,{title:"Szczeg\xf3\u0142y zadania",subtitle:t?t.content:"Oops... Task not found! :(",body:!!t&&Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(w,{children:["Uko\u0144czono: ",Object(r.jsx)("strong",{children:t.done?"Tak":"Nie"})]})})})})},Fn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:":id"},t=n.id;return"/tasks/".concat(t)};function Un(){var n=Object(u.a)(["\n  background-color: teal;\n  list-style-type: none;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 15px;\n  margin: 0px;\n"]);return Un=function(){return n},n}function Ln(){var n=Object(u.a)(["\n    text-decoration: none;\n    color: white;\n    padding: 10px 10px 3px 10px;\n    &."," {\n        font-weight: bold;\n    }\n    &:hover {\n    transition: 0.5s;\n    filter: brightness(0.8);\n    border-bottom: 1px solid;\n  }\n"]);return Ln=function(){return n},n}var Pn="active",In=Object(d.c)(f.b).attrs((function(){return{activeClassName:Pn}}))(Ln(),Pn),Jn=d.c.ul(Un());var Nn=function(){return Object(r.jsx)("nav",{children:Object(r.jsxs)(Jn,{children:[Object(r.jsx)("li",{children:Object(r.jsx)(In,{to:"/tasks",children:"Zadania"})}),Object(r.jsx)("li",{children:Object(r.jsx)(In,{to:"/author",children:"O autorze"})})]})})};var Rn=function(){return Object(r.jsxs)(f.a,{children:[Object(r.jsx)(Nn,{}),Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{path:Fn(),children:Object(r.jsx)(En,{})}),Object(r.jsx)(j.b,{path:"/tasks",children:Object(r.jsx)(Dn,{})}),Object(r.jsx)(j.b,{path:"/author",children:Object(r.jsx)(z,{})}),Object(r.jsx)(j.b,{children:Object(r.jsx)(j.a,{to:"/tasks"})})]})]})},An=e(37),Bn=e(14),Hn=e.n(Bn),Wn=e(16),Mn=e(35),Zn=function(){var n=Object(Mn.a)(Hn.a.mark((function n(){var t;return Hn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/Todos-list-react/exampleTasks.json");case 2:return(t=n.sent).ok||new Error(t.statusText),n.next=7,t.json();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),qn=Hn.a.mark(Qn),Gn=Hn.a.mark(Vn),Kn=Hn.a.mark(Xn);function Qn(){var n;return Hn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Wn.c)(1e3);case 3:return t.next=5,Object(Wn.b)(Zn);case 5:return n=t.sent,t.next=8,Object(Wn.d)(W(n));case 8:t.next=16;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(Wn.d)(M());case 14:return t.next=16,Object(Wn.b)(alert,"Something went wrong...");case 16:case"end":return t.stop()}}),qn,null,[[0,10]])}function Vn(){var n;return Hn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Wn.e)(q);case 2:return n=t.sent,t.next=5,Object(Wn.b)(L,n);case 5:case"end":return t.stop()}}),Gn)}function Xn(){return Hn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Wn.g)(H.type,Qn);case 2:return n.next=4,Object(Wn.f)("*",Vn);case 4:case 5:case"end":return n.stop()}}),Kn)}var Yn=Hn.a.mark($n);function $n(){return Hn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Wn.a)([Xn()]);case 2:case"end":return n.stop()}}),Yn)}var _n=Object(An.a)(),nt=Object(S.a)({reducer:{tasks:K},middleware:[_n]});_n.run($n);var tt=nt,et=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,51)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;e(n),r(n),c(n),a(n),i(n)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsxs)(s.a,{store:tt,children:[Object(r.jsx)(b,{}),Object(r.jsx)(Rn,{})]})}),document.getElementById("root")),et()}},[[50,1,2]]]);
//# sourceMappingURL=main.2eeaa327.chunk.js.map