Ext.define("Ozone.components.dd.WidgetDropZone",{extend:"Ext.dd.DropZone",ddGroup:"widgets",constructor:function(d,b){this.callParent(d,b);if(this.extraGroups!=null){var a=[].concat(this.extraGroups);for(var c=0;c<a.length;c++){this.addToGroup(a[c])}}},getTargetFromEvent:function(a){return a.getTarget(this.itemSelector)},onNodeEnter:function(d,a,c,b){},onNodeOut:function(d,a,c,b){Ext.fly(d).removeCls(["drag-cls","x-view-drop-indicator-right","x-view-drop-indicator-left"])},onNodeOver:function(f,a,d,b){var c=this.getDropPoint(d,f,a);if(c=="before"){Ext.fly(f).replaceCls("x-view-drop-indicator-right","x-view-drop-indicator-left")}else{Ext.fly(f).replaceCls("x-view-drop-indicator-left","x-view-drop-indicator-right")}return Ext.dd.DropZone.prototype.dropAllowed},onNodeDrop:function(f,i,g,b){var h=this.view;var j=this.getDropPoint(g,f,i);if(h==b.view){b.sourceStore.remove(b.widgetModel)}var d=h.store.findExact("widgetGuid",b.widgetModel.get("widgetGuid"));if(d>-1){h.store.removeAt(d)}var a=h.indexOf(f);var c=h.store.getAt(a);if(j=="after"){a++}h.store.insert(a,[b.widgetModel]);h.refresh();b.view.fireEvent("drag",h,c,f,a,g);return true},onContainerOver:function(b,c,a){return Ext.dd.DropZone.prototype.dropAllowed},onContainerDrop:function(b,c,a){var d=this.view.store.findExact("widgetGuid",a.widgetModel.get("widgetGuid"));if(d>-1){this.view.store.removeAt(d)}this.view.store.add(a.widgetModel)},getDropPoint:function(h,g,d){if(g==this.view.el.dom){return"before"}var f=Ext.fly(g).getX(),a=f+g.offsetWidth;var j=f+(a-f)/2;var i=h.getX();if(i<=j){return"before"}else{return"after"}}});