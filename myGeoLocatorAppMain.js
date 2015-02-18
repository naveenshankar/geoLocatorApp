var myGeoLocatorAppMain = function()
{	
	var models = new myGeoLocatorAppModels();
	var views = new myGeoLocatorAppViews();
	var mapData = this.mapData = new models.mapData();
	this.utils = new myGeoLocatorAppUtils();

	this.formView = new views.formView({el:'.mainForm',model:this.mapData});
	this.formView.listenTo(this.mapData, 'change:errorMsgFlag', this.formView.showHideErrorMsg);
	this.formView.listenTo(this.mapData, 'change:currentErrorMsg', this.formView.changeErrorMessage);
	//this.formView.listenTo(this.mapData, 'change:newSearchText', this.formView.updateLocalStorage);

	this.mapView = new views.mapView({el:'.mapLocation',model:this.mapData});
	this.mapView.listenTo(this.mapData, 'change:myCompanyLocationData', this.mapView.renderMyCompanyLocation);
	this.mapView.listenTo(this.mapData, 'change:myLocationData', this.mapView.renderOrEraseMyLocation);
}

$( document ).ready(function() {
    var newApp = new myGeoLocatorAppMain();
});
