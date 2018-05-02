
sap.ui.core.UIComponent.extend("smax.batch31.A1.Component", {
	
	metadata : {
		rootView : "smax.batch31.A1.view.App",
		routing : {
			config : {
				routerClass : "sap.m.routing.Router",			
				controlId : "idApp",
				controlAggregation : "pages",
				viewType : "XML"
			},
			routes : [{
				pattern : "",
				name : "page1",
				viewName : "smax.batch31.A1.view.Page1"				
			},{
				pattern : "page2pp",
				name : "page2",
				viewName : "smax.batch31.A1.view.Page2"
			}
			
			]
		}
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		var oRouter = this.getRouter();
		oRouter.initialize();
	}
});