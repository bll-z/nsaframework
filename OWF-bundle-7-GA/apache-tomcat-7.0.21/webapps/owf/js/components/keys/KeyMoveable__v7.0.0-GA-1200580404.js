Ext.define("Ozone.components.keys.KeyMoveable",{extend:"Ext.AbstractPlugin",init:function(b){var a=this.moveAmount||Ozone.components.keys.KeyMoveable.prototype.moveAmount;b.moveUp=function(){var c=this.getPosition(),d=c[1]-a;c[1]=d>0?d:0;this.setPosition(c)};b.moveDown=function(e){var d=e-this.getHeight(),c=this.getPosition(),f=c[1]+a;c[1]=f>d?d:f;this.setPosition(c)};b.moveLeft=function(){var d=this.getPosition(),c=d[0]-a;d[0]=c>0?c:0;this.setPosition(d)};b.moveRight=function(f){var e=f-this.getWidth(),d=this.getPosition(),c=d[0]+a;d[0]=c>e?e:c;this.setPosition(d)}}});Ozone.components.keys.KeyMoveable.prototype.moveAmount=10;