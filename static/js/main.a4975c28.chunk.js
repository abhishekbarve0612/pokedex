(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{22:function(e,c,t){},23:function(e,c,t){},30:function(e,c,t){},31:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),a=t(16),i=t.n(a),j=(t(22),t.p,t(23),t(4)),r=t(2),l=t(10),d=function(e){var c=Object(s.useState)(null),t=Object(l.a)(c,2),n=t[0],a=t[1],i=Object(s.useState)(null),j=Object(l.a)(i,2),r=j[0],d=j[1],o=Object(s.useState)(!0),b=Object(l.a)(o,2),h=b[0],x=b[1];return Object(s.useEffect)((function(){var c=new AbortController;return fetch(e,{signal:c.signal}).then((function(e){return e.json()})).then((function(e){x(!1),a(e),d(null)})).catch((function(e){"AbortError"===e.name||(d(e.message),x(!1))})),function(){c.abort()}}),[e]),{data:n,isLoading:h,error:r}},o=t(0),b=function(e){var c=e.pokes;return console.log(c[1].name),Object(o.jsx)("div",{className:"pokemon-lists",children:c.map((function(e,c){return Object(o.jsxs)("li",{className:"pokemon-item",id:c,children:[Object(o.jsx)("div",{className:"poke-name",children:e.name}),Object(o.jsx)("div",{className:"info-button",children:Object(o.jsx)(j.b,{to:"/pokedex/pokemon/".concat(e.name),children:"Click Here"})})]})}))})},h=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(j.b,{to:"/pokedex",children:Object(o.jsx)("h3",{children:"Pokedex"})})})},x=function(){var e=Object(r.f)().id,c=d("https://pokeapi.co/api/v2/pokemon/".concat(e)),t=c.data,s=c.isLoading,n=c.error;return null!=t&&console.log(t),Object(o.jsxs)("div",{className:"poke-info",children:[t&&Object(o.jsxs)("div",{children:[n&&Object(o.jsx)("h3",{children:n}),s&&Object(o.jsx)("h3",{children:"Loading..."}),t&&Object(o.jsxs)("div",{className:"pokemon-info",children:[Object(o.jsx)("img",{className:"poke-head",src:t.sprites.other.dream_world.front_default,alt:""}),Object(o.jsx)("h1",{className:"poke-name",children:t.name}),Object(o.jsxs)("div",{className:"description",children:[Object(o.jsxs)("div",{className:"info-card",children:[Object(o.jsx)("h3",{className:"data",children:"ID"}),Object(o.jsx)("div",{className:"value",children:t.id})]}),Object(o.jsxs)("div",{className:"info-card",children:[Object(o.jsx)("h3",{className:"data",children:"Height"}),Object(o.jsx)("div",{className:"value",children:t.height})]}),Object(o.jsxs)("div",{className:"info-card",children:[Object(o.jsx)("h3",{className:"data",children:"Weight"}),Object(o.jsx)("div",{className:"value",children:t.weight})]}),Object(o.jsxs)("div",{className:"info-card",children:[Object(o.jsx)("h3",{className:"data",children:"Abilities"}),Object(o.jsx)("div",{className:"value",children:Object(o.jsx)(o.Fragment,{children:t.abilities.map((function(e,c){return Object(o.jsx)("div",{id:c,children:e.ability.name})}))})})]}),Object(o.jsxs)("div",{className:"info-card",children:[Object(o.jsx)("h3",{className:"data",children:"Moves"}),Object(o.jsx)("div",{className:"value",children:Object(o.jsx)(o.Fragment,{children:t.moves.map((function(e,c){return Object(o.jsx)("div",{id:c,children:e.move.name})}))})})]}),t.stats.map((function(e,c){return Object(o.jsxs)("div",{className:"info-card",children:[Object(o.jsx)("div",{className:"data",children:e.stat.name}),Object(o.jsxs)("div",{className:"value",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Base Stat:"})," ",e.base_stat]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Effort:"})," ",e.effort]})]})]})}))]})]})]}),Object(o.jsx)("div",{className:"button",children:Object(o.jsx)(j.b,{to:"/pokedex",children:"Go Back To HOME"})})]})},O=function(){var e,c=Object(r.f)().page;null==c||1==isNaN(c)?(e=0,c=0):e=15*parseInt(c),Object(s.useEffect)((function(){null==c||1==isNaN(c)?(e=0,c=0):e=15*parseInt(c)})),console.log(e);var t="https://pokeapi.co/api/v2/pokemon?offset=".concat(e,"&limit=15"),n=d(t),a=n.data,i=n.isLoading,l=n.error,h=null;return 0==i&&null!=a&&(console.log(a.results[0]),h=a.results),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"pokelist",children:[l&&Object(o.jsx)("h3",{children:l}),i&&Object(o.jsx)("h3",{children:"Loading..."}),a&&Object(o.jsx)(b,{pokes:h})]}),Object(o.jsxs)("div",{className:"pagination",children:[c-1>-1&&Object(o.jsx)("div",{className:"button",children:Object(o.jsx)(j.b,{to:"/pokedex/".concat(c-1),children:"Previous"})}),Object(o.jsx)("div",{className:"button",children:Object(o.jsx)(j.b,{to:"/pokedex/".concat(parseInt(c)+2),children:parseInt(c)+2})}),Object(o.jsx)("div",{className:"button",children:Object(o.jsx)(j.b,{to:"/pokedex/".concat(parseInt(c)+3),children:parseInt(c)+3})}),Object(o.jsx)("div",{className:"button",children:Object(o.jsx)(j.b,{to:"/pokedex/".concat(parseInt(c)+4),children:parseInt(c)+4})}),Object(o.jsx)("div",{className:"button",children:Object(o.jsx)(j.b,{to:"/pokedex/".concat(parseInt(c)+1),children:"Next"})})]})]})};t(30);var m=function(){return Object(o.jsx)(j.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{className:"header",children:Object(o.jsx)(h,{})}),Object(o.jsx)("div",{className:"main-container",children:Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{exact:!0,path:"/pokedex/:page?",children:Object(o.jsx)(O,{})}),Object(o.jsx)(r.a,{exact:!0,path:"/pokedex/pokemon/:id",children:Object(o.jsx)(x,{})})]})})]})})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,a=c.getLCP,i=c.getTTFB;t(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),u()}},[[31,1,2]]]);
//# sourceMappingURL=main.a4975c28.chunk.js.map