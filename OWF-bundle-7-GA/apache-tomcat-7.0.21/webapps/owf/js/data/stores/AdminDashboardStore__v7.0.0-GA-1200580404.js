Ext.define("Ozone.data.stores.AdminDashboardStore",{extend:"Ozone.data.OWFStore",model:"Ozone.data.Dashboard",alias:"store.admindashboardstore",remoteSort:true,totalProperty:"results",sorters:[{property:"dashboardPosition",direction:"ASC"}],constructor:function(a){Ext.applyIf(a,{api:{read:"/dashboard",create:"/dashboard",update:"/dashboard",destroy:"/dashboard"},reader:{root:"data"},writer:{root:"data"}});this.callParent(arguments)},reorder:function(){if(this.getCount()>0){for(var b=0;b<this.getCount();b++){var a=this.getAt(b);a.set("dashboardPosition",b+1)}}}});