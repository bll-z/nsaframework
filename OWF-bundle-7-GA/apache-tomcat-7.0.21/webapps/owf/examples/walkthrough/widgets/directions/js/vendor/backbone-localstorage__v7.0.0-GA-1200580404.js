function S4(){return(((1+Math.random())*65536)|0).toString(16).substring(1)}function guid(){return(S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())}var Store=function(b){this.name=b;var a=localStorage.getItem(this.name);this.data=(a&&JSON.parse(a))||{}};_.extend(Store.prototype,{save:function(){localStorage.setItem(this.name,JSON.stringify(this.data))},create:function(a){if(!a.id){a.id=a.attributes.id=guid()}this.data[a.id]=a;this.save();return a},update:function(a){this.data[a.id]=a;this.save();return a},find:function(a){return this.data[a.id]},findAll:function(){return _.values(this.data)},destroy:function(a){delete this.data[a.id];this.save();return a}});Backbone.sync=function(e,c,b){var d;var a=c.localStorage||c.collection.localStorage;switch(e){case"read":d=c.id?a.find(c):a.findAll();break;case"create":d=a.create(c);break;case"update":d=a.update(c);break;case"delete":d=a.destroy(c);break}if(d){b.success(d)}else{b.error("Record not found")}};