Ext.define("Ozone.components.focusable.EscCloseHelper",{setupFocusOnEsc:function(d,b){function a(){d.focus()}function c(f){function e(){Ext.defer(a,1);this.un("keyup",arguments.callee)}var g=Ext.isFF3_6?Ext.getDoc():Ext.getBody();if(f.getKey()===f.ESC){g.on(Ozone.components.keys.EVENT_NAME,e,g)}}if(b){this.on("specialkey",function(f,g,e){c(e)})}else{this.mon(this.getEl(),"keydown",c)}this.on("close",a)}});