(this.webpackJsonptheburgerbuilderapp=this.webpackJsonptheburgerbuilderapp||[]).push([[3],{92:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(93),r=a.n(l);t.a=function(e){var t=null,a=[r.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(r.a.Invalid),e.elementType){case"input":t=i.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=i.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=i.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:r.a.Input},i.a.createElement("label",{className:r.a.Label},e.label),t)}},93:function(e,t,a){e.exports={Input:"input_Input__3qy65",Label:"input_Label__31iAt",InputElement:"input_InputElement__38otg",Invalid:"input_Invalid__2TKu4"}},94:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__1J6zM"}},95:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__-62kd",Input:"ContactData_Input__30VPo"}},99:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(50),r=a(30),u=a(94),c=a.n(u);var o=function(e){return i.a.createElement("div",{className:c.a.CheckoutSummary},i.a.createElement("h1",null,"We hope it taste well!"),i.a.createElement("div",{style:{width:"100%",height:"300px",margin:"auto"}},i.a.createElement(l.a,{ingredients:e.ingredients})),i.a.createElement(r.a,{btnType:"Danger",clicked:e.checkoutcancel},"CANCEL"),i.a.createElement(r.a,{btnType:"Success",clicked:e.checkoutcontinue},"CONTINUE"))},d=a(10),s=a(17),p=a(22),m=a(95),v=a.n(m),h=a(38),g=a(92),f=a(11),b=a(4),y=Object(d.b)((function(e){return{loading:e.order.loading,ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,a){return e(f.g(t,a))}}}))((function(e){var t=Object(n.useState)({name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:6,maxLength:6,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}}),a=Object(p.a)(t,2),l=a[0],u=a[1],c=Object(n.useState)(!1),o=Object(p.a)(c,2),d=o[0],m=o[1],f=[];for(var y in l)f.push({id:y,config:l[y]});var C=i.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={};for(var n in l)a[n]=l[n].value;var i={ingredients:e.ings,price:e.price,orderData:a,userId:e.userId};e.onOrderBurger(i,e.token)}},f.map((function(e){return i.a.createElement(g.a,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){var a=Object(b.b)(l[t],{value:e.target.value,valid:Object(b.a)(e.target.value,l[t].validation),touched:!0}),n=Object(b.b)(l,Object(s.a)({},t,a)),i=!0;for(var r in n)i=n[r].valid&&i;u(n),m(i)}(t,e.id)}})})),i.a.createElement(r.a,{btnType:"Success",disabled:!d},"ORDER"));return e.loading&&(C=i.a.createElement(h.a,null)),i.a.createElement("div",{className:v.a.ContactData},i.a.createElement("h4",null,"Enter your Contact Data"),C)})),C=a(1);t.default=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))((function(e){var t=i.a.createElement(C.a,{to:"/"});if(e.ings){var a=e.purchased?i.a.createElement(C.a,{to:"/"}):null;t=i.a.createElement("div",null,a,i.a.createElement(o,{ingredients:e.ings,checkoutcancel:function(){e.history.goBack()},checkoutcontinue:function(){e.history.replace(e.match.path+"/contact-data")}}),i.a.createElement(C.b,{path:e.match.path+"/contact-data",component:y}))}return t}))}}]);
//# sourceMappingURL=3.4574ba4b.chunk.js.map