Ext.define("Ozone.data.WidgetDefinition",{extend:"Ext.data.Model",idProperty:"widgetGuid",fields:[{name:"id",mapping:"id"},{name:"name",mapping:"value.namespace"},{name:"originalName",mapping:"value.originalName"},{name:"version",mapping:"value.widgetVersion"},{name:"description",mapping:"value.description"},{name:"url",mapping:"value.url"},{name:"headerIcon",mapping:"value.headerIcon"},{name:"image",mapping:"value.image"},{name:"width",mapping:"value.width"},{name:"height",mapping:"value.height"},{name:"widgetGuid",mapping:"path"},{name:"universalName",mapping:"value.universalName"},{name:"maximized",mapping:"value.maximized"},{name:"minimized",mapping:"value.minimized"},{name:"x",mapping:"value.x"},{name:"y",mapping:"value.y"},{name:"visible",mapping:"value.visible"},{name:"definitionVisible",mapping:"value.definitionVisible"},{name:"background",mapping:"value.background"},{name:"disabled",mapping:"value.disabled"},{name:"editable",mapping:"value.editable"},{name:"tags",mapping:"value.tags"},{name:"singleton",mapping:"value.singleton"},{name:"allRequired",mapping:"value.allRequired"},{name:"directRequired",mapping:"value.directRequired"},{name:"userId",mapping:"value.userId"},{name:"userRealName",mapping:"value.userRealName"},{name:"totalUsers",mapping:"value.totalUsers"},{name:"totalGroups",mapping:"value.totalGroups"},{name:"widgetTypes",mapping:"value.widgetTypes"},{name:"descriptorUrl",mapping:"value.descriptorUrl"},{name:"intents",mapping:"value.intents"},{name:"title",mapping:"value.namespace"},{name:"groups",mapping:"value.groups"},{name:"disabled",mapping:"value.disabled"}]});Ext.define("Ozone.data.stores.AdminWidgetStore",{extend:"Ozone.data.OWFStore",model:"Ozone.data.WidgetDefinition",alias:"store.adminwidgetstore",remoteSort:true,sorters:[{property:"name",direction:"ASC"}],constructor:function(a){Ext.applyIf(a,{api:{read:"/widget",create:"/widget",update:"/widget",destroy:"/widget"}});this.callParent(arguments)}});Ext.define("Ozone.components.admin.ExportWindow",{extend:"Ext.window.Window",alias:["widget.exportwindow","widget.ExportWindow"],mixins:{widget:"Ozone.components.focusable.CircularFocus"},title:"Export",itemId:"exportwindow",modal:true,closable:true,draggable:false,resizable:false,closeAction:"hide",border:false,minWidth:250,layout:"auto",items:[{xtype:"panel",itemId:"exportpanel",cls:"admineditoraddpanel",layout:"fit",border:false,flex:1,items:[{xtype:"form",itemId:"form",layout:"anchor",bodyCls:"properties-body",border:false,preventHeader:true,padding:5,autoScroll:true,defaults:{anchor:"100%",msgTarget:"side",labelSeparator:"",margin:"5 5 0 5"},items:[{xtype:"textfield",itemId:"filename",fieldLabel:"File Name",labelWidth:130,allowBlank:false,name:"filename",maxLength:200,regex:/^[a-zA-Z\d\-\_]+$/,regexText:"Invalid characters! The Filename may only contain letters, numbers, dashes, and underscores."}]}]}],buttons:[{text:"OK",itemId:"ok",disabled:true},{text:"Cancel",itemId:"cancel"}],initComponent:function(){var a=this;a.setWidth(Math.round(Ext.getBody().getViewSize().width*0.9));a.on("beforeshow",function(){a.setTitle(a.generateTitle())});a.on("afterrender",function(){var d=a.down("#form");var b=a.down("#filename");var c=a.down("#ok");var e=a.down("#cancel");a.itemFilename&&b.setValue(a.itemFilename)&&c.enable();d.on("fieldvaliditychange",function(h,g,i,f){if(i){c.enable()}else{c.disable()}});e.on("click",function(f,g){a.close()});c.on("click",function(f,g){if(a.okFn){a.okFn(b.value)}a.close()});a.setupFocus(b.getFocusEl(),e.getFocusEl())});a.on("beforeclose",function(){a.down("#form").clearListeners();a.down("#ok").clearListeners();a.down("#cancel").clearListeners();a.focusOnClose&&a.focusOnClose.focus()});a.callParent(arguments)},generateTitle:function(){var d="Export";if(this.itemName){d="Export "+this.itemName}var c=100;d=Ext.util.Format.ellipsis(d,c);var b=Ext.getBody().getViewSize();var a=new Ext.util.TextMetrics();var e=a.getWidth(d);while(e>((b.width*0.8))){c-=5;d=Ext.util.Format.ellipsis(d,c);e=a.getWidth(d)}a.destroy();return Ext.htmlEncode(d)}});Ext.define("Ozone.components.admin.grid.WidgetsGrid",{extend:"Ext.grid.Panel",alias:["widget.widgetsgrid"],plugins:new Ozone.components.focusable.FocusableGridPanel(),cls:"grid-widget",defaultPageSize:50,forceFit:true,baseParams:null,initComponent:function(){if(this.store==null){this.store=Ext.StoreMgr.lookup({type:"adminwidgetstore",pageSize:this.defaultPageSize})}if(this.baseParams){this.setBaseParams(this.baseParams)}Ext.apply(this,{columnLines:true,columns:[{itemId:"universalName",header:"Universal Name",dataIndex:"universalName",flex:1,width:210,minWidth:210,sortable:true,hidden:true,renderer:function(f,c,b,g,e,d,a){return'<div class="grid-text">'+f?Ext.htmlEncode(f):"</div>"}},{itemId:"widgetGuid",header:"GUID",dataIndex:"widgetGuid",flex:1,width:210,minWidth:210,sortable:true,hidden:true,renderer:function(f,c,b,g,e,d,a){return'<div class="grid-text">'+f+"</div>"}},{itemId:"name",header:"Title",dataIndex:"name",flex:1,minWidth:200,sortable:true,renderer:function(m,b,f,j,g,n,k){var l=m;var a=f.get("headerIcon");var d=Ozone.util.contextPath();if(!a.match(new RegExp("^/?"+d+"/.*$","i"))&&!a.match(new RegExp("^https?://.*","i"))){if(a.indexOf("/")==0){a=d+a}else{a=d+"/"+a}var i=/admin\/64x64_blue_dashboard.png/g;var h=/admin\/64x64_blue_group.png/g;var e=/admin\/64x64_blue_user.png/g;var o=/admin\/64x64_blue_widget.png/g;if(a.match(i)){a=a.replace(i,"admin/24x24_blue_dashboard.png")}else{if(a.match(h)){a=a.replace(h,"admin/24x24_blue_group.png")}else{if(a.match(e)){a=a.replace(e,"admin/24x24_blue_user.png")}else{if(a.match(o)){a=a.replace(o,"admin/24x24_blue_widget.png")}}}}}var c='<div class="grid-icon-and-text-title-box"><div class="grid-icon-and-text-icon"><img class="grid-icon-and-text-icon-image" src="'+Ext.htmlEncode(a)+'">';c+="</div>";c+='<div class="grid-icon-and-text-title">'+Ext.htmlEncode(l)+"</div>";return c}},{itemId:"widgetUrl",header:"URL",dataIndex:"url",width:250,sortable:true,renderer:function(f,c,b,g,e,d,a){return'<div class="grid-text">'+Ext.htmlEncode(f)+"</div>"}},{itemId:"type",header:"Type",dataIndex:"widgetTypes",width:75,sortable:false,hidden:true,renderer:function(f,c,b,g,e,d,a){return'<div class="grid-text">'+f[0]?f[0].name:"</div>"}},{itemId:"version",header:"Version",dataIndex:"version",width:75,sortable:true,hidden:true,renderer:function(f,c,b,g,e,d,a){return'<div class="grid-text">'+Ext.htmlEncode(f)+"</div>"}},{itemId:"totalUsers",header:"Users",dataIndex:"totalUsers",width:75,hidden:this.hideTotalUsersCol,sortable:false,renderer:function(f,c,b,g,e,d,a){return'<div class="grid-text">'+f+"</div>"}},{itemId:"totalGroups",header:"Groups",dataIndex:"totalGroups",width:75,hidden:this.hideTotalGroupsCol,sortable:false,renderer:function(f,c,b,g,e,d,a){return'<div class="grid-text">'+f+"</div>"}}]});Ext.apply(this,{multiSelect:true,dockedItems:[Ext.create("Ext.toolbar.Paging",{dock:"bottom",store:this.store,displayInfo:true,hidden:this.hidePagingToolbar,itemId:"widget-grid-paging"})]});this.callParent(arguments)},load:function(){this.store.loadPage(1)},refresh:function(){this.store.loadPage(this.store.currentPage)},getTopToolbar:function(){return this.getDockedItems('toolbar[dock="top"]')[0]},getBottomToolbar:function(){return this.getDockedItems('toolbar[dock="bottom"]')[0]},applyFilter:function(d,a){this.store.proxy.extraParams=undefined;if(d){var c=[];for(var b=0;b<a.length;b++){c.push({filterField:a[b],filterValue:d})}this.store.proxy.extraParams={filters:Ext.JSON.encode(c),filterOperator:"OR"}}if(this.baseParams){this.setBaseParams(this.baseParams)}this.store.loadPage(1,{params:{offset:0,max:this.store.pageSize}})},clearFilters:function(){this.store.proxy.extraParams=undefined;if(this.baseParams){this.setBaseParams(this.baseParams)}this.store.load({params:{start:0,max:this.store.pageSize}})},setBaseParams:function(a){this.baseParams=a;if(this.store.proxy.extraParams){Ext.apply(this.store.proxy.extraParams,a)}else{this.store.proxy.extraParams=a}},setStore:function(b,c){this.reconfigure(b,c);var a=this.getBottomToolbar();if(a){a.bindStore(b)}}});Ext.define("Ozone.components.admin.widget.DeleteWidgetsPanel",{extend:"Ext.panel.Panel",alias:["widget.deletewidgetspanel","widget.Ozone.components.admin.widget.DeleteWidgetsPanel"],mixins:{circularFocus:"Ozone.components.focusable.CircularFocus"},delWidgets:null,itemId:"deletepanel",cls:"deletepanel",initComponent:function(){this.addEvents(["delete","cancel"]);if(this.store==null){this.store=Ext.StoreMgr.lookup({type:"adminwidgetstore"})}Ext.apply(this,{layout:{type:"vbox",align:"stretch"},items:[{xtype:"component",itemId:"delTitlePanel",cls:"delTitlePanel",layout:"fit",border:false,height:30,renderTpl:["You have selected to delete {name}."],renderData:{name:"0 widget(s)"}},{xtype:"component",itemId:"reqTitlePanel",cls:"reqTitlePanel",layout:"fit",border:false,height:50,renderTpl:["These widgets are required by other widgets in OWF. Deleting these widgets will additionally delete the widgets listed below."]},{xtype:"grid",itemId:"reqGrid",autoScroll:true,forceFit:true,flex:1,border:false,store:{type:"adminwidgetstore",remoteSort:false},columns:[{itemId:"name",header:"Title",dataIndex:"name",flex:1,minWidth:200,sortable:true,renderer:function(j,b,e,g,f,k,h){var i=j;var a=e.get("headerIcon");var d=Ozone.util.contextPath();if(!a.match(new RegExp("^/?"+d+"/.*$","i"))&&!a.match(new RegExp("^https?://.*","i"))){if(a.indexOf("/")==0){a=d+a}else{a=d+"/"+a}}var c='<div class="grid-widget"><div class="grid-icon-and-text-title-box"><div class="grid-icon-and-text-icon"><img class="grid-icon-and-text-icon-image" src="'+a+'"> ';c+="</div>";c+='<div class="grid-icon-and-text-title">'+i+"</div>";return c}},{itemId:"widgetUrl",header:"URL",dataIndex:"url",flex:1,minWidth:250,menuDisabled:true,sortable:true}]}],buttons:[{text:Ozone.layout.DialogMessages.ok,itemId:"ok",handler:function(a){this.del()},scope:this},{text:"Cancel",itemId:"cancel",handler:function(a){this.cancel()},scope:this}]});this.callParent();this.on({afterrender:{fn:function(){if(this.delWidgets!=null){this.loadData(this.delWidgets)}var a=this.down("#ok").getFocusEl(),b=this.down("#cancel").getFocusEl();this.setupFocus(a,b);Ext.defer(function(){b.focus()},400)},scope:this}})},loadData:function(e){if(e!=null){this.store.loadData(e);var j=this.down("#delTitlePanel");var g=this.store.getCount();var h={name:g>1?('<span class="heading-bold">'+g+"</span> widgets"):('<span class="heading-bold">'+this.store.getAt(0).data.name+"</span>")};if(j.rendered){j.renderTpl.overwrite(j.getTargetEl(),h)}else{j.renderData=h}var f=[];var b=this.requiredWidgets;if(b){for(var c=0;c<b.length;c++){if(-1==this.store.find("guid",b[c].path)){f.push({id:b[c].path,name:b[c].value.namespace,version:b[c].value.widgetVersion,url:b[c].value.url,headerIcon:b[c].value.headerIcon,image:b[c].value.image,width:b[c].value.width,height:b[c].value.height,widgetGuid:b[c].path,maximized:b[c].value.maximized,minimized:b[c].value.minimized,x:b[c].value.x,y:b[c].value.y,visible:b[c].value.visible,tags:b[c].value.tags,totalUsers:b[c].value.totalUsers,totalGroups:b[c].value.totalGroups,singleton:b[c].value.singleton})}}}var a=this.down("#reqGrid");var d=a.getStore();if(d){d.removeAll();if(f.length>0){d.loadData(f)}this.doLayout()}}},del:function(){var f=this.store.getRange();var a=this.down("#reqGrid");var e=a.getStore();var b=e.getRange();var d=Ext.create("Ext.util.MixedCollection");for(var c=0;c<f.length;c++){d.add(f[c].data.widgetGuid,f[c].data.widgetGuid)}for(var c=0;c<b.length;c++){d.add(b[c].data.widgetGuid,b[c].data.widgetGuid)}this.fireEvent("delete",{widgetGuidsToDelete:d.getRange()})},cancel:function(){this.fireEvent("cancel")},down:function(a){if(this.cmpCache==null){this.cmpCache=Ext.create("Ext.util.MixedCollection")}var b=this.cmpCache.getByKey(a);if(b==null){b=this.callParent(arguments);if(b!=null){this.cmpCache.add(a,b)}}return b}});Ext.define("Ozone.components.admin.widget.WidgetDetailPanel",{extend:"Ext.panel.Panel",alias:["widget.widgetdetailpanel"],layout:{type:"vbox",align:"stretch"},viewGroup:null,initComponent:function(){var a=this;OWF.Preferences.getUserPreference({namespace:"owf.admin.WidgetEditCopy",name:"guid_to_launch",onSuccess:function(b){a.guid_EditCopyWidget=b.value},onFailure:function(b){Ext.Msg.alert("Preferences Error","Error looking up Widget Editor: "+b)}});if(this.store==null){this.store=Ext.StoreMgr.lookup({type:"adminwidgetstore"})}this.viewGroup=Ext.create("Ext.view.View",{cls:"widgetDetailsView",store:this.store,deferEmptyText:false,flex:1,tpl:new Ext.XTemplate('<tpl for=".">','<div class="detail-info">','<div class="detail-header-block">','<div class="detail-widget">','<div class="detail-icon">','<img src={image:this.renderImage} title="{name:htmlEncode}" class="detail-icon-image">',"</div>","</div>",'<div class="detail-icon-block">','<div class="detail-title">{name:htmlEncode}</div>','<div><span class="detail-label">Version:</span> {version:htmlEncode}</div>',"</div>","</div>",'<div class="detail-block">','<div><span class="detail-label">Description:</span> {description:htmlEncode}</div>','<div><span class="detail-label">Universal Name:</span> {universalName:htmlEncode}</div>','<div><span class="detail-label">Default Tags:</span> {tags:this.renderTags}</div>','<div><span class="detail-label">Single Instance:</span> {singleton}</div>','<div><span class="detail-label">Visible:</span> {definitionVisible}</div>','<div><span class="detail-label">Background:</span> {background}</div>','<div><span class="detail-label">Requires Widgets:</span> {directRequired:this.renderRequiresFlag}</div>','<div><span class="detail-label">Width:</span> {width}</div>','<div><span class="detail-label">Height:</span> {height}</div>',"</div>","</div>","</tpl>",{compiled:true,renderImage:function(c){var b=Ozone.util.contextPath();if(!c.match(new RegExp("^/?"+b+"/.*$","i"))&&!c.match(new RegExp("^https?://.*","i"))){if(c.indexOf("/")==0){c=b+c}else{c=b+"/"+c}}return encodeURI(decodeURI(c))},renderTags:function(b){var d="";if(b!=null){for(var c=0;c<b.length;c++){d+=Ext.htmlEncode(b[c].name);if(c<b.length-1){d+=", "}}}if(d==""){d="<i>none</i>"}return d},renderRequiresFlag:function(b){return b!=null&&b.length>0}}),emptyText:"No widget selected",itemSelector:"div.mpDetailSummary",autoScroll:"true"});this.items=[this.viewGroup,{xtype:"grid",itemId:"reqGrid",cls:"reqGrid",autoScroll:true,hidden:true,hideHeaders:true,forceFit:true,flex:1,border:false,store:{type:"adminwidgetstore",remoteSort:false},dockedItems:[{xtype:"toolbar",dock:"top",items:[{xtype:"tbtext",text:"This Widget Requires:"}]}],columns:[{itemId:"name",header:"Title",dataIndex:"name",flex:1,minWidth:200,sortable:true,renderer:function(k,c,f,h,g,l,i){var j=k;var b=f.get("headerIcon");var e=Ozone.util.contextPath();if(!b.match(new RegExp("^/?"+e+"/.*$","i"))&&!b.match(new RegExp("^https?://.*","i"))){if(b.indexOf("/")==0){b=e+b}else{b=e+"/"+b}}var d='<div class="grid-widget"><div class="grid-icon-and-text-title-box"><div class="grid-icon-and-text-icon"><img class="grid-icon-and-text-icon-image" src="'+b+'"> ';d+="</div>";d+='<div class="grid-icon-and-text-title">'+j+"</div>";return d}}],listeners:{itemdblclick:{fn:function(b){var c=b.getSelectionModel().getSelection();if(c&&c.length>0){for(var d=0;d<c.length;d++){this.doEdit(c[d].data.id,c[d].data.name)}}else{Ext.Msg.alert("Error","You must select at least one widget to edit.")}},scope:this}}}];this.callParent(arguments)},clear:function(){this.load(null)},load:function(b){var a=this.getComponent("reqGrid");var c=[];if(b!=null){c.push(b)}this.viewGroup.store.loadData(c,false);if(b!=null&&b.data.allRequired!=null&&b.data.allRequired.length>0){this.requestFrom=b.data.id;Ext.Ajax.request({url:Ozone.util.contextPath()+"/widget",params:{id:b.data.allRequired,_method:"GET"},success:function(e,h){var g=Ext.decode(e.responseText);if(g){var j=g.data;if(j!=null&&j.length>0){var d=[];if(j){for(var f=0;f<j.length;f++){d.push({id:j[f].path,name:j[f].value.namespace,version:j[f].value.widgetVersion,url:j[f].value.url,headerIcon:j[f].value.headerIcon,image:j[f].value.image,width:j[f].value.width,height:j[f].value.height,widgetGuid:j[f].path,maximized:j[f].value.maximized,minimized:j[f].value.minimized,x:j[f].value.x,y:j[f].value.y,visible:j[f].value.visible,tags:j[f].value.tags,totalUsers:j[f].value.totalUsers,totalGroups:j[f].value.totalGroups,singleton:j[f].value.singleton})}}if(a&&this.store.getAt(0).get("id")==this.requestFrom){a.store.loadData(d);a.setVisible(true)}}else{if(a){a.store.removeAll(true);a.setVisible(false)}}}},failure:function(d,e){Ext.Msg.alert("Server Error","Error retrieving required widgets: "+d)},scope:this})}else{if(a){a.store.removeAll(true);a.setVisible(false)}}},doEdit:function(c,b){var a=Ozone.util.toString({id:c,copyFlag:false});OWF.Launcher.launch({title:"$1 - "+b,titleRegex:/(.*)/,guid:this.guid_EditCopyWidget,launchOnlyIfClosed:false,data:a},function(d){if(d.error){Ext.Msg.alert("Launch Error","Widget Editor Launch Failed: "+d.message)}})}});Ext.define("Ozone.components.admin.widget.WidgetManagementPanel",{extend:"Ozone.components.admin.ManagementPanel",alias:["widget.widgetmanagement","widget.widgetmanagementpanel","widget.Ozone.components.admin.widget.WidgetManagementPanel"],dragAndDrop:true,launchesWidgets:true,channel:"AdminChannel",defaultTitle:"Widgets",minButtonWidth:80,cls:"widgetmanagementpanel",detailsAutoOpen:true,initComponent:function(){var a=this;OWF.Preferences.getUserPreference({namespace:"owf.admin.WidgetEditCopy",name:"guid_to_launch",onSuccess:function(b){a.guid_EditCopyWidget=b.value},onFailure:function(b){a.showAlert("Preferences Error","Error looking up Widget Editor: "+b)}});Ext.applyIf(this,{xtype:"panel",itemId:"main",layout:{type:"border"},items:[{xtype:"widgetsgrid",itemId:"grid",border:false,region:"center"},{xtype:"widgetdetailpanel",itemId:"widgetdetailpanel",region:"east",preventHeader:true,collapseMode:"mini",collapsible:true,collapsed:true,split:true,border:false,width:300}],dockedItems:[{xtype:"toolbar",dock:"top",layout:{type:"hbox",align:"stretchmax"},items:[{itemId:"tbtext",xtype:"tbtext",text:'<span class="heading-bold">'+this.defaultTitle+" </span>"},"->",{xtype:"searchbox",listeners:{searchChanged:function(c,d){var b=a.down("#grid");if(b!=null){b.applyFilter(d,["displayName","universalName"])}}}}]},{xtype:"toolbar",dock:"bottom",ui:"footer",defaults:{minWidth:this.minButtonWidth},items:[{xtype:"button",text:"Create",itemId:"create",handler:function(c,b){b.stopPropagation();this.doCreate()},scope:this},{xtype:"splitbutton",text:"Edit",itemId:"editButton",handler:function(){var d=this.down("#grid");var b=d.getSelectionModel().getSelection();if(b&&b.length>0){for(var c=0;c<b.length;c++){this.doEdit(b[c].data.id,b[c].data.name)}}else{a.showAlert("Error","You must select at least one widget to edit.")}},menu:{xtype:"menu",plain:true,hideMode:"display",defaults:{minWidth:this.minButtonWidth},items:[{xtype:"owfmenuitem",text:"Export",handler:function(c){var b=a.down("#grid").getSelectionModel().getSelection();if(b&&b.length===1){a.doExport("widget",b[0])}else{if(b&&b.length>1){a.showAlert("Error","You must select only one widget to export.")}else{a.showAlert("Error","You must select a widget to export.")}}}}]},scope:this},{xtype:"button",text:"Delete",itemId:"deleteButton",handler:function(){var c=this.down("#grid");var b=c.getSelectionModel().getSelection();if(b&&b.length>0){this.createDeleteWindow(b)}else{a.showAlert("Error","You must select at least one widget to delete.")}},scope:this}]}]});this.callParent();OWF.Eventing.subscribe("AdminChannel",owfdojo.hitch(this,function(b,d,c){if(d.domain==="Widget"){this.down("#grid").getBottomToolbar().doRefresh()}}));this.on({render:{fn:function(){var b=this.down("#grid");if(b!=null){b.on({itemdblclick:{fn:function(){var c=b.getSelectionModel().getSelection();if(c&&c.length>0){for(var d=0;d<c.length;d++){this.doEdit(c[d].data.id,c[d].data.name)}}else{a.showAlert("Error","You must select at least one widget to edit.")}},scope:this},select:{fn:function(g,c,d,e){var f=this.down("#widgetdetailpanel");if(f!=null){f.load(c);if(this.detailsAutoOpen){f.expand()}}},scope:this}});b.getView().on({itemkeydown:{scope:this,fn:function(e,d,g,f,c){switch(c.getKey()){case c.SPACE:case c.ENTER:this.doEdit(d.data.id,d.data.name)}}}});b.load();b.store.on({datachanged:{fn:function(){var c=this.down("#widgetdetailpanel");if(c!=null){c.collapse();c.clear()}if(!this.disableLaunchMenuRefresh){this.refreshWidgetLaunchMenu()}},scope:this}})}},scope:this},afterrender:{fn:function(){var b=this.el.down(".x-collapse-el");b.on("click",function(){var c=this.el.down(".x-splitter-collapsed");if(c){this.detailsAutoOpen=true}else{this.detailsAutoOpen=false}},this)},scope:this}})},createDeleteWindow:function(e){var c=this;var d=Ext.getBody().getViewSize();var a=[];if(e!=null){for(var b=0;b<e.length;b++){a.push(e[b].data.widgetGuid)}}OWF.Preferences.getDependentWidgets({content:{ids:a},onSuccess:Ext.bind(function(g){var f=g.data;if(f!=null&&f.length>0){var h=Ext.create("Ext.window.Window",{title:"Warning",itemId:"deletewidgetwindow",minWidth:250,minHeight:200,width:d.width*0.8,height:d.height*0.75,layout:"fit",modal:true,items:[{xtype:"deletewidgetspanel",itemId:"deletewidgetspanel",delWidgets:e,requiredWidgets:f,listeners:{"delete":{fn:function(j){if(j!=null&&j.widgetGuidsToDelete!=null){OWF.Preferences.deleteWidgetDefs({content:{id:j.widgetGuidsToDelete,_method:"delete"},onSuccess:Ext.bind(function(k){var l=this.down("#grid");if(l!=null){l.refresh()}h.close()},this),onFailure:function(){c.showAlert(Ozone.util.ErrorMessageString.saveUpdatedWidgets,Ozone.util.ErrorMessageString.saveUpdatedWidgetsMsg)}})}},scope:this},cancel:{fn:function(){h.close()},scope:this}}}]});h.show()}else{var i="This action will permanently delete ";if(e.length==1){i+='<span class="heading-bold">'+Ext.htmlEncode(e[0].data.name)+"</span>."}else{i+='the selected <span class="heading-bold">'+e.length+" widgets</span>."}this.showConfirmation("Warning",i,function(n,p,o){if(n=="ok"){var m=c.down("#grid");var k=m.store;var j=k.autoSave;k.autoSave=false;k.remove(e);var l=k.getTotalCount()-e.length;k.on({write:{fn:function(t,q,v){if(k.data.items.length==0&&k.currentPage>1){var u=k.getPageFromRecordIndex(l-1);var r=(u>=k.currentPage)?k.currentPage:u;k.loadPage(r)}m.getBottomToolbar().doRefresh()},scope:this,single:true}});k.save()}})}},this),onFailure:function(){c.showAlert("Error","Error deleting the selected widget(s).")}})}});