(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{123:function(e,a,t){e.exports={container:"RegisterPage_container__1A8K5",form:"RegisterPage_form__2d9R6",formLabel:"RegisterPage_formLabel__3oxJ1",formInput:"RegisterPage_formInput__2hrsm",formButton:"RegisterPage_formButton__yXSXh"}},126:function(e,a,t){"use strict";t.r(a);var n=t(3),s=t(37),r=t(38),o=t(40),i=t(39),c=t(0),l=t(10),m=t(26),h=t(123),u=t.n(h),b=t(1),p=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=a.call.apply(a,[this].concat(o))).state={name:"",email:"",password:""},e.handleChange=function(a){var t=a.target;e.setState((function(e){return Object(n.a)({},t.name,t.value)}))},e.handleFormSubmit=function(a){a.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(r.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:u.a.container,children:[Object(b.jsx)("h2",{children:"Registration"}),Object(b.jsxs)("form",{className:u.a.form,onSubmit:this.handleFormSubmit,children:[Object(b.jsxs)("label",{className:u.a.formLabel,children:["Name",Object(b.jsx)("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name,className:u.a.formInput})]}),Object(b.jsxs)("label",{className:u.a.formLabel,children:["Email",Object(b.jsx)("input",{type:"email",name:"email",onChange:this.handleChange,value:this.state.email,className:u.a.formInput})]}),Object(b.jsxs)("label",{className:u.a.formLabel,children:["Password",Object(b.jsx)("input",{type:"password",name:"password",onChange:this.handleChange,value:this.state.password,className:u.a.formInput})]}),Object(b.jsx)("button",{type:"submit",className:u.a.formButton,children:"Sign Up"})]})]})}}]),t}(c.Component),f={onRegister:m.a.registrationUser};a.default=Object(l.b)((function(e){return{}}),f)(p)}}]);
//# sourceMappingURL=6.3809df34.chunk.js.map