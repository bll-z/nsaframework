Ext.define("Ozone.components.dashboarddesigner.WorkingArea",{extend:"Ext.container.Container",alias:["widget.dashboarddesignerworkingarea","widget.Ozone.components.dashboarddesigner.WorkingArea"],mixins:{circularFocus:"Ozone.components.focusable.CircularFocus"},componentCls:"droppable",initComponent:function(){this.on({paneselect:{fn:this.paneSelected,scope:this}});this.callParent(arguments)},paneSelected:function(b){var a;a=b.getNextPane();if(!a){return}if(this._lastClickedPane&&!this._lastClickedPane.isDestroyed){this._lastClickedPane.el.removeCls("active-pane")}if(this._lastClickedPaneSibling&&!this._lastClickedPaneSibling.isDestroyed){this._lastClickedPaneSibling.el.removeCls("sibling-active-pane")}this._lastClickedPane=b;this._lastClickedPaneSibling=a;b.el.addCls("active-pane");a.el.addCls("sibling-active-pane")}});