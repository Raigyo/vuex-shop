(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230284"],{eaa3:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",[t._v("create a new book")]),o("ProductForm")],1)},r=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:function(e){return e.preventDefault(),t.create(e)}}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"id"}},[t._v("ID")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.id,expression:"book.id"}],staticClass:"form-control",attrs:{type:"text",id:"id",placeholder:"Enter id (ISBN)"},domProps:{value:t.book.id},on:{input:function(e){e.target.composing||t.$set(t.book,"id",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"title"}},[t._v("Title")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.title,expression:"book.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"Enter title"},domProps:{value:t.book.title},on:{input:function(e){e.target.composing||t.$set(t.book,"title",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"firstName"}},[t._v("First name")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.author.firstName,expression:"book.author.firstName"}],staticClass:"form-control",attrs:{type:"text",id:"firstName",placeholder:"Author first name"},domProps:{value:t.book.author.firstName},on:{input:function(e){e.target.composing||t.$set(t.book.author,"firstName",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"lastName"}},[t._v("Last name")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.author.lastName,expression:"book.author.lastName"}],staticClass:"form-control",attrs:{type:"text",id:"lastName",placeholder:"Author last name"},domProps:{value:t.book.author.lastName},on:{input:function(e){e.target.composing||t.$set(t.book.author,"lastName",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"publisher"}},[t._v("Publisher")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.publisher,expression:"book.publisher"}],staticClass:"form-control",attrs:{type:"text",id:"publisher",placeholder:"Publisher"},domProps:{value:t.book.publisher},on:{input:function(e){e.target.composing||t.$set(t.book,"publisher",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"year"}},[t._v("Year")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.year,expression:"book.year"}],staticClass:"form-control",attrs:{type:"number",id:"year",placeholder:"Publication year"},domProps:{value:t.book.year},on:{input:function(e){e.target.composing||t.$set(t.book,"year",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"price"}},[t._v("Price")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.price,expression:"book.price"}],staticClass:"form-control",attrs:{type:"text",id:"price",placeholder:"Price"},domProps:{value:t.book.price},on:{input:function(e){e.target.composing||t.$set(t.book,"price",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"image"}},[t._v("Image")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.image,expression:"book.image"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"Image"},domProps:{value:t.book.image},on:{input:function(e){e.target.composing||t.$set(t.book,"image",e.target.value)}}})]),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])},i=[],l={data:function(){return{book:{title:"",author:{firstName:"",lastName:""},publisher:"",year:"",price:"",image:""}}},methods:{create:function(){console.log(this.book),this.$store.dispatch("createProduct",this.book)}}},n=l,u=o("2877"),m=Object(u["a"])(n,s,i,!1,null,null,null),c=m.exports,p={components:{ProductForm:c}},d=p,b=Object(u["a"])(d,a,r,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d230284.d819b360.js.map