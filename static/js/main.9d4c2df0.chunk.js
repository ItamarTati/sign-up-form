(window["webpackJsonpsign-up-form"]=window["webpackJsonpsign-up-form"]||[]).push([[0],{194:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(35),m=t.n(r),c=(t(40),t(5)),i=t(197),o=Object(c.b)({form:i.a}),s=(window.devToolsExtension?window.devToolsExtension()(c.c):c.c)(o),u=t(19),d=t(83),b=t(84),p=t(86),E=t(85),h=t(15),v=t(87),f=t(196),g=t(195),y=function(e){var a={};return e.name||(a.name="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.password?/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{9,}$/i.test(e.password)||(a.password="Needs to contain more than 9 characters, include an uppercase letter, a lowercase letter and a number"):a.password="Required",a},N=function(e){var a=e.input,t=e.label,n=e.type,r=e.meta,m=r.touched,c=r.error;return l.a.createElement("div",null,l.a.createElement("label",null,t),l.a.createElement("div",null,l.a.createElement("input",Object.assign({},a,{placeholder:t,type:n})),m&&c&&l.a.createElement("span",null,c)))},w=Object(g.a)({form:"multi",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0,validate:y})(function(e){var a=e.handleSubmit;return l.a.createElement("form",{onSubmit:a,className:"msform-box"},l.a.createElement("label",{className:"required"},"Name:"),l.a.createElement(f.a,{name:"name",type:"text",component:N}),l.a.createElement("label",null,"Role:"),l.a.createElement(f.a,{name:"role",type:"text",component:N}),l.a.createElement("label",{className:"required"},"Email:"),l.a.createElement(f.a,{name:"email",type:"email",component:N}),l.a.createElement("label",{className:"required"},"Password:"),l.a.createElement(f.a,{name:"password",type:"password",component:N}),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{type:"submit",className:"msform-action-button"},"Submit")))}),x=Object(g.a)({form:"multi",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0,validate:y})(function(e){var a=e.handleSubmit,t=e.pristine,n=e.submitting;return l.a.createElement("form",{onSubmit:a,className:"msform-box"},l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",{htmlFor:"updates"},"Receive updates about Tray.io product by email"),l.a.createElement("div",null,l.a.createElement(f.a,{name:"updates",id:"updates",component:N,type:"checkbox",value:"true"}))),l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",{htmlFor:"communication"},"Receive communication by email for other products created by Tray.io"),l.a.createElement("div",null,l.a.createElement(f.a,{name:"communication",id:"communication",component:N,type:"checkbox"}))),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{type:"submit",className:"msform-action-button",disabled:t||n},"Submit")))}),O=Object(g.a)({form:"multi",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0,validate:y})(function(e){var a=e.handleSubmit;return l.a.createElement("form",{onSubmit:a,className:"msform-box"},l.a.createElement("svg",{className:"checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},l.a.createElement("circle",{className:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),l.a.createElement("path",{className:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})),l.a.createElement("p",{className:"verify"},"Please verify your email adress, you have received an email from us already!"))}),S=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(E.a)(a).call(this,e))).nextPage=t.nextPage.bind(Object(h.a)(t)),t.nextPageSubmission=t.nextPageSubmission.bind(Object(h.a)(t)),t.state={page:1},t}return Object(v.a)(a,e),Object(b.a)(a,[{key:"nextPage",value:function(){this.setState({page:this.state.page+1})}},{key:"nextPageSubmission",value:function(e){this.setState({page:this.state.page+1}),console.log(JSON.stringify(e,0,2))}},{key:"render",value:function(){var e=this.state.page;return l.a.createElement("div",{className:"msform"},1===e?l.a.createElement("ul",{className:"page-indicator"},l.a.createElement("li",{className:"highlighted"},"User"),l.a.createElement("li",null,"Privacy"),l.a.createElement("li",null,"Done")):2===e?l.a.createElement("ul",{className:"page-indicator"},l.a.createElement("li",null,"User"),l.a.createElement("li",{className:"highlighted"},"Privacy"),l.a.createElement("li",null,"Done")):l.a.createElement("ul",{className:"page-indicator"},l.a.createElement("li",null,"User"),l.a.createElement("li",null,"Privacy"),l.a.createElement("li",{className:"highlighted"},"Done")),1===e&&l.a.createElement(w,{onSubmit:this.nextPage}),2===e&&l.a.createElement(x,{onSubmit:this.nextPageSubmission}),3===e&&l.a.createElement(O,null))}}]),a}(n.Component),k=document.getElementById("root");m.a.render(l.a.createElement(u.a,{store:s},l.a.createElement("div",null,l.a.createElement("h1",null,"MultiStepForm"),l.a.createElement(S,null))),k)},40:function(e,a,t){},88:function(e,a,t){e.exports=t(194)}},[[88,1,2]]]);
//# sourceMappingURL=main.9d4c2df0.chunk.js.map