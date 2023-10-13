/***
@controller Name:sap.suite.ui.generic.template.ObjectPage.view.Details,
*@viewId:ui.s2p.mm.purrequisition.ops1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_PurRequisitionFs
*/
sap.ui.define([
	'sap/ui/core/mvc/ControllerExtension'
	// ,'sap/ui/core/mvc/OverrideExecution'
],
function (
	ControllerExtension
	// ,OverrideExecution
) {
	"use strict";
	return ControllerExtension.extend("customer.z.ui.s2p.mm.purrequisition.ops1.a1.addTable", {
		// metadata: {
		// 	// extension can declare the public methods
		// 	// in general methods that starts with "_" are private
		// 	methods: {
		// 		publicMethod: {
		// 			public: true /*default*/ ,
		// 			final: false /*default*/ ,
		// 			overrideExecution: OverrideExecution.Instead /*default*/
		// 		},
		// 		finalPublicMethod: {
		// 			final: true
		// 		},
		// 		onMyHook: {
		// 			public: true /*default*/ ,
		// 			final: false /*default*/ ,
		// 			overrideExecution: OverrideExecution.After
		// 		},
		// 		couldBePrivate: {
		// 			public: false
		// 		}
		// 	}
		// },

		// // adding a private method, only accessible from this controller extension
		// _privateMethod: function() {},
		// // adding a public method, might be called or overridden from other controller extensions as well
		// publicMethod: function() {},
		// // adding final public method, might be called but not overridden from other controller extensions as well
		// finalPublicMethod: function() {},
		// // adding a hook method, might be called or overridden from other controller extensions.
		// // override these method does not replace the implementation, but executes after the original method.
		// onMyHook: function() {},
		// // method per default public, but made private per metadata
		// couldBePrivate: function() {},
		// // this section allows to extend lifecycle hooks or override public methods of the base controller
		
		onBeforeRebindTableForWorkflowHistory:function(oEvent){
			// Start of Change on 24.02.2023 by Rgnanendra
			// debugger;
			// var PRnumber = window.location.hash.split("C_PurRequisitionFs(PurchaseRequisition='")[1].split("'")[0];
			var PRnumber =  window.location.hash.split("C_PurRequisitionFs(PurchaseRequisition='")[0].split("'")[1];
				//var SupplierCode = sPath.split("'")[1];
			var oBindingParams = oEvent.getParameter("bindingParams");
			oBindingParams.filters.push(new sap.ui.model.Filter("PrNumber", "EQ", PRnumber));
			// End of Change
		},
		override: {
		// 	/**
		// 	 * Called when a controller is instantiated and its View controls (if available) are already created.
		// 	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		// 	 * @memberOf customer.z.ui.s2p.mm.purreqnitem.ops1.a1.addTableSection
		// 	 */
			// onInit: function() 
			// {
			// 	this = that;
			// 	var oTab = that.getView().byId("ui.s2p.mm.purrequisition.ops1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_PurRequisitionFs--Items::responsiveTable");
            //     oTab.attachItemPress(that.onNavigate.bind(that));
			// },

		// 	/**
		// 	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		// 	 * (NOT before the first rendering! onInit() is used for that one!).
		// 	 * @memberOf customer.z.ui.s2p.mm.purreqnitem.ops1.a1.addTableSection
		// 	 */
		// 	onBeforeRendering: function() {
		// 	},

		// 	/**
		// 	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		// 	 * This hook is the same one that SAPUI5 controls get after being rendered.
		// 	 * @memberOf customer.z.ui.s2p.mm.purreqnitem.ops1.a1.addTableSection
		// 	 */
		onAfterRendering: function() { 
			// debugger;
			var locTable = this.getView().byId("ui.s2p.mm.purrequisition.ops1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_PurRequisitionFs--customer.z.ui.s2p.mm.purrequisition.ops1.a1.WorkflowHistory");
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZMM_PREQ_MAIN_SRV/");
			locTable.setModel(oModel);
				locTable.setEntitySet("WI_HistorySet");
				var oNavCol = this.getView().byId("ui.s2p.mm.purrequisition.ops1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_PurRequisitionFs--template:::ObjectPageTable:::ColumnListItem:::sFacet::Items");
				oNavCol.setType("Navigation");
				oNavCol.attachPress(function(oEvent){
                    //  alert("test");
					var oCrossAppNav = sap.ushell.Container.getService("CrossApplicationNavigation");
					oCrossAppNav.toExternal({
					  target: {
						semanticObject: "PurchaseRequisitionItem",
						action: "displayFactSheet_PRItem"
					  }
					});
				});

//                 var sectionPage =  this.getView().byId("ui.s2p.mm.purreqnitem.ops1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_PurRequisitionItemFs--GeneralInformation::Section");
//                 var subSection1 = new sap.uxap.ObjectPageSubSection({Title:"Sub Section Title"});

//                 var objectPage = this.getView().byId("ui.s2p.mm.purreqnitem.ops1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_PurRequisitionItemFs--objectPage");
			
//                 var oSection = new sap.uxap.ObjectPageSection({

// titleUppercase: false,  title: "New Section"

// });
// objectPage.addSection(oSection);
			
//                 var that = this;
		   
		  
				
				
			   
				



 

//                     // Table Data


				
//                     var oTable =  new sap.m.Table("table01", {
//                         headerToolbar : [
//                             new sap.m.Toolbar({
//                             content:[
//                                      new sap.m.Title({
//                                      text:" Workflow History"
//                                      })
//                                      ]
//                             })
//             ],
//                         columns: [
//                             new sap.m.Column({
//                                 header: new sap.m.Label({
//                                     text: "ApprovalLevel"
//                                 })
//                             }),
//                             new sap.m.Column({
//                                 header: new sap.m.Label({
//                                     text: "Status"
//                                 })
//                             }),
//                             new sap.m.Column({
//                                 header: new sap.m.Label({
//                                     text: "Approver"
//                                 })
//                             }),
//                             new sap.m.Column({
//                                 header: new sap.m.Label({
//                                     text: "Actionedby"
//                                 })
//                             })
//                         ]
//                     });
			  

			   
//                         // oTable.setModel(oModel);

//                         var that = this;
//                        var prno=  window.location.hash.split("C_PurRequisitionItemFs(PurchaseRequisition='")[1].split("'")[0];

//                         var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZMM_PREQ_MAIN_SRV/");
//                          //debugger
//                         var aFilter = new sap.ui.model.Filter("PrNumber", sap.ui.model.FilterOperator.EQ, prno); //0012892585 this.prno

//                         oModel.read("/WI_HistorySet", {
//                             filters: [aFilter],
//                             success: function (oData) {
//                                 // console.log(oData);
//                                 var workflowItems = oData.results;
//                                 for (var count = 0; count < workflowItems.length; count++) {
//                                     var approverArray = [];
//                                     var approver = workflowItems[count].Approver.split(";");
//                                     for (var j = 0; j < approver.length; j++) {
//                                         var approverObject = {};
	
//                                         if (workflowItems[count].Approver === "") {
//                                             workflowItems[count].approverSet = [];
//                                             continue;
//                                         }
//                                         // approverObject.approverName = approver[j].split("[")[0];
//                                         // approverObject.approverID = approver[j].split("[")[1].substring(0, approver[j].split("[")[1].length - 1);
//                                         // approverArray.push(approverObject);
//                                         // workflowItems[count].approverSet = approverArray;
//                                         if (approver[j] !== "") {
//                                             // if (approver[j].includes("[")) {
//                                             // 	approverObject.approverName = approver[j].split("[")[0];
//                                             // 	approverObject.approverID = approver[j].split("[")[1].substring(0, approver[j].split("[")[1].length - 1);
//                                             // 	approverArray.push(approverObject);
//                                             // 	workflowItems[count].approverSet = approverArray;
//                                             // } else {
//                                             approverObject.approverName = approver[j]
//                                             approverObject.approverID = approver[j]
//                                             approverArray.push(approverObject);
//                                             workflowItems[count].approverSet = approverArray;
//                                             // }
//                                         }
	
//                                     }
//                                 }
//                                 var jsonModel = new sap.ui.model.json.JSONModel();
//                                 jsonModel.setData(oData.results);
//                                 // that.getOwnerComponent().setModel(jsonModel, "TimeLineModel");
//                                 that.getView().setModel(jsonModel, "TimeLineModel");
//                                 var jsonModel1 = new sap.ui.model.json.JSONModel();
//                                 var tableBusyModelData = {};
//                                 tableBusyModelData.isBusy = false;
//                                 jsonModel1.setData(tableBusyModelData);
//                                 // that.getOwnerComponent().setModel(jsonModel1, "tableBusyModel");
//                                 that.getView().setModel(jsonModel1, "tableBusyModel");
//                             },
//                             error: function () {
//                                 var jsonModel1 = new sap.ui.model.json.JSONModel();
//                                 var tableBusyModelData = {};
//                                 tableBusyModelData.isBusy = false;
//                                 jsonModel1.setData(tableBusyModelData);
//                                 that.getOwnerComponent().setModel(jsonModel1, "tableBusyModel");
//                                 that.getView().setModel(jsonModel1, "tableBusyModel");
//                             }
//                         });
	

//                         var oTemplate = new sap.m.ColumnListItem({

//                             type : sap.m.ListType.Active,
						
//                             cells : [ new sap.m.Label({
						
//                             text : "{TimeLineModel>ApprovalLevel}"
						
//                             }), new sap.m.Label({
						
//                             text : "{TimeLineModel>Status}"
						
//                             }),
//                             , new sap.m.Label({
						
//                                 text : "{TimeLineModel>Approver}"
							
//                                 }),
//                                 new sap.m.Label({
						
//                                     text : "{TimeLineModel>Actionedby}"
								
//                                     }) ],
						
						
//                             });
// oTable.bindAggregation("items", {

//     path : "TimeLineModel>/",// <<<Your data path at runtime

//     template : oTemplate

//     });
// 	this._oTPC = new TablePersoController({
// 		table: oTable,
// 		//specify the first part of persistence ids e.g. 'demoApp-productsTable-dimensionsCol'
// 		componentName: "demoApp"
	
// 	}).activate();
//                     // oTable.bindColumns("/columns", function(sId, oContext) {
//                     //   var columnName = oContext.getObject().colName;
//                     //   return new sap.ui.table.Column({
//                     //     label: columnName,
//                     //     template: columnName,
//                     //   });
//                     // });
//                     // oTable.bindRows("/rows");
//                     // subSection.addBlock(oTable);
//                     subSection.addBlock(oTable);
//                     sectionPage.addSubSection(subSection);
// 					var oSection1 = new sap.uxap.ObjectPageSection({

// 						titleUppercase: false,  title: "New Section"
					
// 						});
// 						objectPage.addSection(oSection1);
					

		},

		// 	/**
		// 	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		// 	 * @memberOf customer.z.ui.s2p.mm.purreqnitem.ops1.a1.addTableSection
		// 	 */
		// 	onExit: function() {
		// 	},
		onExit: function () {
			// this._oTPC.destroy();
		},
		// onTableItemPress: function(oEvent) {
		// 	// Navigate to F0349A
		// 	sap.ushell.Container.getService("CrossApplicationNavigation").toExternal({
		// 	  target: {
		// 		semanticObject: "PurchaseRequisitionItem",
		// 		action: "displayFactSheet_PRItem"
		// 	  }
		// 	});
		//   },
		// 	override public method of the base controller
		//	"templateBaseExtension": {
		/**
		 * Can be used to make sure that certain fields will be contained in the select clause of the table binding. 
		 * This should be used, when custom logic of the extension depends on these fields.
		 * sControlId is the ID of the control on which extension logic to be applied.
		 * For each custom field the extension must call fnEnsureSelectionProperty(oControllerExtension, sFieldname).
		 * oControllerExtension must be the ControllerExtension instance which ensures the field to be part of the select clause.				
		 * sFieldname must specify the field to be selected. Note that this must either be a field of the entity set itself or a field which can be reached via a :1 navigation property.
		 * In the second case sFieldname must contain the relative path.
		 */
		//	ensureFieldsForSelect: function(fnEnsureSelectionProperty, sControlId){
		//myControlId is the Id of the control to which the extension has been added
		/*if(myControlId == sControlId) {
			fnEnsureSelectionProperty(oControllerExtension, sFieldname);
		}*/
			},
			
		/**
		 * Can be used to add filters. They will be combined via AND with all other filters
		 * sControlId is the ID of the control on which extension logic to be applied.
		 * For each filter the extension must call fnAddFilter(oControllerExtension, oFilter)
		 * oControllerExtension must be the ControllerExtension instance which adds the filter
		 * oFilter must be an instance of sap.ui.model.Filter
		 */
		//addFilters: function(fnAddFilter, sControlId){
		//myControlId is the Id of the control to which the extension has been added
		/*if(myControlId == sControlId) {
			var oFilter = new sap.ui.model.Filter(vFilterInfo, vOperator?, vValue1?, vValue2?),
			fnAddFilter(oControllerExtension, oFilter);	
		}*/
		//	},
		/**
		 * Can be used to store specific state. Therefore, the implementing controller extension must call fnSetExtensionStateData(oControllerExtension, oExtensionState).
		 * oControllerExtension must be the ControllerExtension instance for which the state should be stored. oExtensionState is the state to be stored.
		 * Note that the call is ignored if oExtensionState is faulty
		 */
		//provideExtensionStateData: function(fnSetExtensionStateData){
		/*var oExtensionState = Object.create(null);//Create a new object
			oExtensionState.<myKeyName> = {
					data: <myPropertyValue>,
					lifecycle: {//provide values for lifecycle parameters
						permanent : true,
						page : false,
						session : true,
						pagination : false
					}
			}
		fnSetExtensionStateData(this, oExtensionState);*/
		//},
		/**
		 * Can be used extensions to restore their state according to a state which was previously stored.
		 * Therefore, the implementing controller extension can call fnGetExtensionStateData(oControllerExtension) in order to retrieve the state information which has been stored in the current state for this controller extension.
		 * undefined will be returned by this function if no state or a faulty state was stored.
		 * bIsSameAsLast is a boolean and a value of true indicates that the state needs not to be adapted, since view is like we left it the last time
		 */
		//restoreExtensionStateData: function(fnGetExtensionStateData, bIsSameAsLast){				
		//var oExtensionState = fnGetExtensionStateData(this);//get extensionState object
		//}
		//	}
		// }
		onBeforeRebindTableForWorkflowHistory:function(oEvent){
			
			// debugger;
			//var PRnumber = window.location.hash.split("C_PurRequisitionFs(PurchaseRequisition='")[1].split("'")[0];
				// var PRnumber = "";
			  var PRnumber =  window.location.hash.split("C_PurRequisitionFs(PurchaseRequisition='")[0].split("'")[1];
			//var SupplierCode = sPath.split("'")[1];
			var oBindingParams = oEvent.getParameter("bindingParams");
			oBindingParams.filters.push(new sap.ui.model.Filter("PrNumber", "EQ", PRnumber));
			// this.getView().byId("WorkflowHistory").refresh();
			
            
			// var aFilter = new sap.ui.model.Filter("PrNumber", sap.ui.model.FilterOperator.EQ, prno);

			
		},
	});
});