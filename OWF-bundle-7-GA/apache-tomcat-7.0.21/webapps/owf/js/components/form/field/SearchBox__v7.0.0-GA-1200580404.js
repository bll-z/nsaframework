Ext.define("Ozone.components.form.field.SearchBox",{extend:"Ext.form.field.Text",alias:"widget.searchbox",emptyText:"Search...",fieldSubTpl:['<span class="magnifier-btn search-img" ></span>','<input type="text" id="{id}" ','<tpl if="name">name="{name}" </tpl>','<tpl if="tabIdx">tabIndex="{tabIdx}" </tpl>','autocomplete="off" />','<span class="clear-btn search-img" id="{id}-clearEl"></span>',{compiled:true,disableFormats:true}],fieldBodyCls:"search",minHeight:20,componentLayout:"searchbox",dynamic:false,searchChangedEventDelay:200,initComponent:function(){this.addChildEls({name:"clearEl",id:this.getInputId()+"-clearEl"});this.callParent(arguments);function a(b){b.mon(b.clearEl,"click",function(){this.onClear()},b);b.clearKeyMap=new Ext.util.KeyMap(b.clearEl,{key:[Ext.EventObject.ENTER,Ext.EventObject.SPACE],handler:function(d,c){c.stopPropagation();this.onClear()},scope:b});Ozone.components.focusable.Focusable.setupFocus(b.clearEl,b);b.clearEl.hover(function(){this.addCls("clear-btn-over")},function(){this.removeCls("clear-btn-over")},b.clearEl)}this.on("afterrender",function(c){a(c);c.keymap=new Ext.util.KeyMap(c.inputEl,{key:Ext.EventObject.ENTER,handler:function(){this.fireSearchChanged()},scope:c});var b=new Ext.util.DelayedTask(function(){c.fireSearchChanged()});if(c.dynamic){c.inputEl.on("keyup",function(f,d){b.delay(c.searchChangedEventDelay)})}c.setHeight(c.getHeight())});this.on("destroy",function(b){b.clearKeyMap.destroy();b.keymap.destroy()});this.addEvents("searchChanged")},onClear:function(){this.setValue("");this.clearInvalid();this.inputEl.focus();this.fireSearchChanged()},fireSearchChanged:function(){this.fireEvent("searchChanged",this,this.getValue())}});