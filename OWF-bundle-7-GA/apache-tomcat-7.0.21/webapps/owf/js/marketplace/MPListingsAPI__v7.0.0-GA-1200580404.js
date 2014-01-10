Ext.namespace("Ozone.marketplace");Ext.define("Ozone.marketplace.model.ServiceItem",{extend:"Ext.data.Model",fields:["imageLargeUrl","launchUrl","state","screenshot2Url","requirements","id","author","organization","avgRate","title","releaseDate","recommendedLayouts","dependencies","description","docUrl","totalVotes","approvalStatus","types","techPoc","screenshot1Url","customFields","isPublished","versionName","installUrl","categories","uuid","imageSmallUrl","createdDate","editedDate","isEnabled","createdBy","lastActivity","owfProperties"]});Ozone.marketplace.MPListingsAPI=function(){var b=Ext.create("Ozone.data.JsonProxy",{reader:{type:"json",root:"data",totalProperty:"total",idProperty:"id",successProperty:"success"},jsonRetriever:Ext.create("Ozone.marketplace.MPListingsRetriever",{})});b.jsonRetriever.on("success",function(c,f,e,d){b.processJson(c,f,e,d)});b.jsonRetriever.on("failure",function(c,f,e,d){b.processJson(c,f,e,d)});var a=Ext.create("Ext.data.Store",{model:"Ozone.marketplace.model.ServiceItem",proxy:b,remoteSort:true,pageSize:12,sorters:[{property:"title",direction:"asc"}],lastOptions:{params:{limit:20,start:0}},listeners:{load:{fn:function(e,d,f){var h=e.getRange();for(var g=0;g<h.length;g++){var c=h[g].data;c.dependencies=Ext.util.Format.htmlEncode(c.dependencies);c.description=Ext.util.Format.htmlEncode(c.description);c.requirements=Ext.util.Format.htmlEncode(c.requirements);c.title=Ext.util.Format.htmlEncode(c.title);c.versionName=Ext.util.Format.htmlEncode(c.versionName);c.launchUrl=Ext.util.Format.htmlEncode(c.launchUrl);c.author=Ext.util.Format.htmlEncode(c.author);if(Ext.isEmpty(c.owfProperties)){c.owfProperties={visibleInLaunch:true,singleton:false}}}},scope:this}}});this.getStore=function(){return a};this.loadStore=function(c,d){c=c||{};if(d){c=Ext.applyIf(c,a.lastOptions.params)}a.lastOptions.params=c;if(c.sorters&&c.sorters[0]){a.sorters.items[0].property=c.sorters[0].property;a.sorters.items[0].direction=c.sorters[0].direction}if(c.currentPage){a.currentPage=c.currentPage}a.load({categoryIDs:c.categoryIDs,typeIDs:c.typeIDs,stateIDs:c.stateIDs,title:c.title,description:c.description,author:c.author,queryString:c.queryString,scope:c.scope,start:c.start,limit:c.limit,sorters:c.sorters,event:c.event,pageSize:c.pageSize,useIndex:(c.useIndex!==false)?true:false,callback:c.countCategories?function(h,f,g){var i=[];a.each(function(l){var k=l.data.categories.length;if(k>0){for(var j=0;j<k;j++){var m=parseInt(l.data.categories[j].id);if(isNaN(i[m])){i[m]=1}else{i[m]++}}}});var e=Ext.query("*[class*=category-selectable]",Ext.get("mpCategoryTree").dom);Ext.each(e,function(m,k){var j=m.id.substr(14);if(m){if(m.id!="category-tree-all"){var l=i[parseInt(j)];var n=Ext.query("*[id="+m.id+"-count]",m);if(l!=undefined&&l!=null&&!isNaN(l)){n[0].innerHTML=" ("+l+")"}else{n[0].innerHTML=" (0)"}}}});if(c.callback){c.callback.call(h,f,g)}}:c.callback,add:c.append})};this.getCategoryCount=function(c){if(!isNaN(c)){return categoryCount[parseInt(c)]}}};