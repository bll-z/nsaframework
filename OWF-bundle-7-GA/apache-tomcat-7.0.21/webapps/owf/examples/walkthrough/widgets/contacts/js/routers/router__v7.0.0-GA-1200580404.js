var app=app||{};$(function(){var a=Backbone.Router.extend({currentView:null,initialize:function(){_.bindAll(this)},routes:{"":"list","new":"newContact",":id":"editContact"},list:function(){this.showView("#contacts",new app.ContactsView())},editContact:function(c){var b=app.Contacts.get(c);if(b){this.showView("#contact",new app.EditContactView({model:b}))}else{this.navigate("",{trigger:true})}},newContact:function(){this.showView("#contact",new app.EditContactView({model:new app.Contact()}))},showView:function(b,c){if(this.currentView){this.currentView.remove();this.currentView.unbind()}if(b){$(b).html(c.render().el)}this.currentView=c;return c}});app.Router=new a();Backbone.history.start()});