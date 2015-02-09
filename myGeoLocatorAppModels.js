var myGeoLocatorAppModels = function(){
	this.mapData = Backbone.Model.extend(
		    {
		        defaults : {
		        			"myCompanyDescriptor" : '',
		        			"myErrorMsgs":{syntax:"Enter a valid email address. Eg. 'www.nytimes.com', 'nytimes.com' or 'g1.com.br' or 'www.g1.com.br'",unavailable:"Website not Found!"},
		        			"errorMsgFlag":false,
		        			"currentErrorMsg": "",
		        			"myLocationMockData" : {ip:"173.194.116.98",country_code:"US",country_name:"United States",region_code:"CA",region_name:"California",city:"Mountain View",zip_code:"94043",time_zone:"America/Los_Angeles",latitude:37.419,longitude:-122.058,metro_code:807},
		        			"myLocationData" : null,
		        			"myCompanyLocationMockData" : {ip:"173.194.116.98",country_code:"US",country_name:"United States",region_code:"CA",region_name:"California",city:"Mountain View",zip_code:"94043",time_zone:"America/Los_Angeles",latitude:37.419,longitude:-122.058,metro_code:807},
		        			"myCompanyLocationData" : null
		        			}
//{"ip":"173.194.116.98","country_code":"US","country_name":"United States","region_code":"CA","region_name":"California","city":"Mountain View","zip_code":"94043","time_zone":"America/Los_Angeles","latitude":37.419,"longitude":-122.058,"metro_code":807}

		    });

}
