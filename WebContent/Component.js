
sap.ui.core.UIComponent.extend("smax.batch31.A1.Component", {
	
	metadata : {
		manifest : "json"
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		var oRouter = this.getRouter();
		oRouter.initialize();
	}
});