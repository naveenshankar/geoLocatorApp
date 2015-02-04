var myGeoLocatorAppMain = function()
{	
	var models = new myGeoLocatorAppModels();
	var views = new myGeoLocatorAppViews();

    var table = this.tableData = new models.formData();
	var chart = this.chartData = new models.mapData();

	this.formView = new views.formView({el:'.mainForm',model:this.formData});
	this.formView.listenTo(this.formData, 'change:dataTables', this.formView.render);

	this.mapView = new views.mapView({el:'.mapLocation',model:this.mapData});
	this.mapView.listenTo(this.mapData, 'change:dataRecords', this.mapView.render);
	
}

$( document ).ready(function() {
    var newApp = new myGeoLocatorAppMain();
});
