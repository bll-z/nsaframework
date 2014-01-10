Ext.define("Ozone.components.admin.EditDashboardWindow",{extend:"Ext.window.Window",alias:["widget.editdashboardwindow","widget.Ozone.components.admin.EditDashboardWindow"],mixins:{widget:"Ozone.components.focusable.CircularFocus"},cls:"editdashboardwindow",callback:Ext.emptyFn,scope:undefined,guid:undefined,name:undefined,description:undefined,definition:undefined,resizable:false,modal:true,initComponent:function(){var b=this;var a=Ozone.config.freeTextEntryWarningMessage;if(!this.scope){this.scope=this}Ext.apply(this,{layout:"fit",items:[{xtype:"panel",cls:"usereditpanel",layout:"fit",items:[{xtype:"panel",cls:"adminEditor",bodyCls:"adminEditor-body",layout:"fit",border:false,items:[{xtype:"form",itemId:"form",layout:"anchor",bodyCls:"properties-body",border:false,bodyBorder:true,preventHeader:true,padding:5,autoScroll:true,defaults:{anchor:"100%",msgTarget:"side",labelSeparator:"",margin:"5 5 0 5",listeners:{blur:{fn:function(c){c.changed=true;c.doComponentLayout()},scope:b},change:{fn:function(j,i,d,e){var h=j.ownerCt;var g=h.getForm(),c=h.ownerCt.getDockedItems()[0].getComponent("ok");if(!j.changed&&j.isDirty()){j.changed=true}if(g.isDirty()&&!g.hasInvalidField()){c.enable()}else{c.disable()}},scope:b},afterrender:{fn:function(e,c){var d=e.getComponentLayout();if(d.errorStrategies!=null){d.previousBeforeLayout=d.beforeLayout;d.beforeLayout=function(g,f){return this.previousBeforeLayout()||!this.owner.preventMark};d.errorStrategies.side={prepare:function(f){var g=f.errorEl;if(f.hasActiveError()&&f.changed){g.removeCls("owf-form-valid-field");g.removeCls("x-form-warning-icon");g.removeCls("owf-form-unchanged-field");g.addCls(Ext.baseCSSPrefix+"form-invalid-icon");d.tip=d.tip?d.tip:Ext.create("Ext.tip.QuickTip",{baseCls:Ext.baseCSSPrefix+"form-invalid-tip",renderTo:Ext.getBody()});d.tip.tagConfig=Ext.apply({},{attribute:"errorqtip"},d.tip.tagConfig);g.dom.setAttribute("data-errorqtip",f.getActiveError()||"");g.setDisplayed(f.hasActiveError())}else{if(f.hasActiveWarning&&f.hasActiveWarning()&&f.changed){g.removeCls(Ext.baseCSSPrefix+"form-invalid-icon");g.removeCls("owf-form-valid-field");g.removeCls("owf-form-unchanged-field");g.addCls("x-form-warning-icon");d.tip=d.tip?d.tip:Ext.create("Ext.tip.QuickTip",{iconCls:"x-form-warning-icon",renderTo:Ext.getBody()});d.tip.tagConfig=Ext.apply({},{attribute:"errorqtip"},d.tip.tagConfig);g.dom.setAttribute("data-errorqtip",f.getActiveWarning()||"");g.setDisplayed(f.hasActiveWarning())}else{if(f.changed){if(d.tip){d.tip.unregister(g)}g.removeCls(Ext.baseCSSPrefix+"form-invalid-icon");g.removeCls("x-form-warning-icon");g.removeCls("owf-form-unchanged-field");g.addCls("owf-form-valid-field");g.dom.setAttribute("data-errorqtip","");g.setDisplayed(true)}else{g.removeCls(Ext.baseCSSPrefix+"form-invalid-icon");g.removeCls("x-form-warning-icon");g.removeCls("owf-form-valid-field");g.dom.setAttribute("data-errorqtip","");g.setDisplayed(false)}}}},adjustHorizInsets:function(f,g){if(f.autoFitErrors){g.insets.right+=f.errorEl.getWidth()}},adjustVertInsets:Ext.emptyFn,layoutHoriz:function(f,g){f.errorEl.setStyle("left",g.width-g.insets.right+"px")},layoutVert:function(f,g){f.errorEl.setStyle("top",g.insets.top+"px")},onFocus:Ext.emptyFn}}},scope:b}}},items:[{xtype:"component",hidden:a==null||a=="",renderTpl:'<div id="{id}" class="{cls}"><div class="headerSpacer"></div>{message}</div>',renderData:{cls:(a&&a.length>0)?"dialogHeader":"",message:a?a:""}},{xtype:"hidden",value:this.guid,name:"guid",preventMark:true,itemId:"guid"},{xtype:"textfield",itemId:"nameField",value:this.name,fieldLabel:Ozone.util.createRequiredLabel("Name"),labelWidth:140,allowBlank:false,name:"name",maxLength:200,enforceMaxLength:true},{xtype:"textarea",value:this.description,fieldLabel:"Description",labelWidth:140,allowBlank:true,name:"description",maxLength:255,enforceMaxLength:true},{xtype:"textarea",value:this.definition,fieldLabel:Ozone.util.createRequiredLabel("Definition"),labelWidth:140,allowBlank:true,name:"definition",height:130,minHeight:130,validator:function(d){try{Ext.decode(d)}catch(c){return"This field must be a valid JSON Object string"}if(d!=null&&d.length>0&&d.charAt(0)=="["&&d.charAt(d.length-1)=="]"){return"This field must be a valid JSON Object string"}return true}}]}],buttons:[{text:"OK",itemId:"ok",disabled:true,handler:function(d,g){this.closeButton=d;var f=d.ownerCt.ownerCt;this.submitValues=f.getComponent("form").getValues();var c=f.getComponent("form").getForm().getFields().items;for(field in c){if(c[field].name){this.submitValues["original"+c[field].name.charAt(0).toUpperCase()+c[field].name.slice(1)]=c[field].originalValue}}this.close()},scope:this},{text:"Cancel",itemId:"cancel",handler:function(c,d){this.closeButton=c;this.close()},scope:this}]}]}]});this.callParent(arguments);this.on("afterrender",function(){this.setupFocus(this.down("#nameField").getFocusEl(),this.down("#cancel").getFocusEl())});this.on("beforeclose",function(c,d){this.callback.call(this.scope,this.submitValues,this.closeButton)})}});