(this["webpackJsonpincome-tax-calc"]=this["webpackJsonpincome-tax-calc"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(3),o=n.n(a),i=(n(9),n(10),n(11),n(0));var l=function(){return Object(i.jsx)("div",{className:"d-flex m-2",children:Object(i.jsx)("h1",{className:"header",children:"UK Income Tax Calculator"})})},x=n(4);n(13);var d=function(){var e=Object(r.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){function e(e){var t=[Math.round(e)];return t[0]>=12571&&t[0]<=50270?(t[1]=(t[0]-12570)/100*20,console.log(t),t):t[0]>=50271&&t[0]<=125140?(t[1]=7540,t[2]=(t[0]-50270)/100*40,console.log(t),t):t[0]>=125141&&t[0]<=15e4?(t[1]=10054,t[2]=(t[0]-50270)/100*40,console.log(t),t):(t[1]=10054,t[2]=39892,t[3]=(t[0]-15e4)/100*45,console.log(t),t)}document.querySelector(".total-display").innerText=function(t){return""===t?(document.querySelector(".tax-display").innerText="",document.querySelector(".per-20").innerText="",document.querySelector(".per-40").innerText="",document.querySelector(".per-45").innerText="",document.querySelector(".tax-month").innerText="","Please enter your annual salary"):t<12571&&0!==t?(document.querySelector(".tax-display").innerText="",document.querySelector(".per-20").innerText="",document.querySelector(".per-40").innerText="",document.querySelector(".per-45").innerText="",document.querySelector(".tax-month").innerText="","No tax to pay! \xa3"+(12570-t).toFixed(2)+" tax free allowance remaining"):0!==t?2===e(t).length?(document.querySelector(".per-20").innerText="Tax paid in 20% band: \xa3"+e(t)[1].toFixed(2),document.querySelector(".per-40").innerText="",document.querySelector(".per-45").innerText="",document.querySelector(".tax-month").innerText="Tax per month: \xa3"+(e(t)[1]/12).toFixed(2),document.querySelector(".tax-display").innerText="Total tax: \xa3"+e(t)[1].toFixed(2),"Income after tax: \xa3"+(t-e(t)[1]).toFixed(2)):3===e(t).length&&7540===e(t)[1]||3===e(t).length&&39892===e(t)[2]?(document.querySelector(".per-20").innerText="Tax paid in 20% band: \xa3"+e(t)[1].toFixed(2),document.querySelector(".per-40").innerText="Tax paid in 40% band: \xa3"+e(t)[2].toFixed(2),document.querySelector(".per-45").innerText="",document.querySelector(".tax-month").innerText="Tax per month: \xa3"+((e(t)[1]+e(t)[2])/12).toFixed(2),document.querySelector(".tax-display").innerText="Total tax: \xa3"+(e(t)[1]+e(t)[2]).toFixed(2),"Income after tax: \xa3"+(t-e(t)[1]-e(t)[2]).toFixed(2)):(document.querySelector(".per-20").innerText="Tax paid in 20% band: \xa3"+e(t)[1].toFixed(2),document.querySelector(".per-40").innerText="Tax paid in 40% band: \xa3"+e(t)[2].toFixed(2),document.querySelector(".per-45").innerText="Tax paid in 45% band: \xa3"+e(t)[3].toFixed(2),document.querySelector(".tax-month").innerText="Tax per month: \xa3"+((e(t)[1]+e(t)[2]+e(t)[3])/12).toFixed(2),document.querySelector(".tax-display").innerText="Total tax: \xa3"+(e(t)[1]+e(t)[2]+e(t)[3]).toFixed(2),"Income after tax: \xa3"+(t-e(t)[1]-e(t)[2]-e(t)[3]).toFixed(2)):void 0}(n)}),[n]),Object(i.jsx)("div",{className:"d-flex m-2",children:Object(i.jsxs)("form",{onChange:function(e){e.preventDefault(),c(e.target.value)},children:[Object(i.jsx)("span",{className:"fs-4 me-2",children:"\xa3"}),Object(i.jsx)("input",{id:"salary",type:"number",min:"0",max:"1000000000000"})]})})};n(14);var u=function(){return Object(i.jsxs)("div",{className:"d-flex flex-column align-items-center m-2 display-container",children:[Object(i.jsxs)("ul",{className:"per-display list-unstyled",children:[Object(i.jsx)("li",{className:"per-20",children:" "}),Object(i.jsx)("li",{className:"per-40",children:" "}),Object(i.jsx)("li",{className:"per-45",children:" "})]}),Object(i.jsx)("h3",{className:"tax-month",children:" "}),Object(i.jsx)("h3",{className:"tax-display",children:" "}),Object(i.jsx)("h3",{className:"total-display",children:"Please enter your annual salary"})]})};var s=function(){return Object(i.jsx)("div",{className:"app-view vh-100 vw-100 d-flex justify-content-center align-items-center",children:Object(i.jsxs)("div",{className:"app-container w-75 d-flex flex-column justify-content-center align-items-center",children:[Object(i.jsx)(l,{}),Object(i.jsx)(d,{}),Object(i.jsx)(u,{})]})})};n(15);o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(s,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.289c1917.chunk.js.map