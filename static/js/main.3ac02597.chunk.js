(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c,s=n(5),i=n.n(s),o=n(4),r=n(1),a=n(2),l=n.n(a),u=(n(10),n(11),n(0));!function(t){t.Initial="",t.Alphabet="name",t.Length="length"}(c||(c={}));var b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var h=function(){var t=Object(r.useState)(c.Initial),e=Object(o.a)(t,2),n=e[0],s=e[1],i=Object(r.useState)(!1),a=Object(o.a)(i,2),h=a[0],d=a[1],j=n||h,g=function(t,e,n){var c=t.map((function(t){return{id:crypto.randomUUID(),name:t,length:t.length}}));return e&&c.sort((function(t,n){switch(e){case"name":return t[e].localeCompare(n[e]);case"length":return t[e]-n[e];default:return 0}})),n&&c.reverse(),c}(b,n,h);return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==c.Alphabet}),onClick:function(){return s(c.Alphabet)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==c.Length}),onClick:function(){return s(c.Length)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!h}),onClick:function(){return d(!h)},children:"Reverse"}),j&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(c.Initial),d(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:Object(u.jsx)("ul",{children:g.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t.name},t.id)}))})})]})};i.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.3ac02597.chunk.js.map