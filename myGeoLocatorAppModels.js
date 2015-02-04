var myGeoLocatorAppModels = function(){
	this.formData = Backbone.Model.extend(
		    {
		        defaults : {
		        			"userName":"Enter your username",
		        			"password":'Enter your password',
		        			"currentAnimationRequestId":'',
		        			"reloadFlag" : false,
		        			"withAnimation" : false,
		        			"withoutAnimation" : false,
		        			"mockDataTables" : {ip:"173.194.116.98",country_code:"US",country_name:"United States",region_code:"CA",region_name:"California",city:"Mountain View",zip_code:"94043",time_zone:"America/Los_Angeles",latitude:37.419,longitude:-122.058,metro_code:807},
		        			"dataTables" : ''
		        			}
//{"ip":"173.194.116.98","country_code":"US","country_name":"United States","region_code":"CA","region_name":"California","city":"Mountain View","zip_code":"94043","time_zone":"America/Los_Angeles","latitude":37.419,"longitude":-122.058,"metro_code":807}

		    });

	this.mapData = Backbone.Model.extend(
		    {
		    	 defaults : {
		        			"userName":"Enter your username",
		        			"password":'Enter your password',
		        			"currentPage":''	 
		        			}
		    });
}
