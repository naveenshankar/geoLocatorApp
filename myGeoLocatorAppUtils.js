var myGeoLocatorAppUtils = function(){

}

myGeoLocatorAppUtils.prototype.getWebsiteCoordinates = function(address){
  	var response = $.ajax({
                            url: "http://freegeoip.net/json/"+address,
                            async:true,
                            dataType: "json",
                            cache :false
                          });
  	return response;
}

myGeoLocatorAppUtils.prototype.renderMap = function(canvasId,companyLocation,myLocation){
		var mapCanvas = document.getElementById(canvasId);
    var that = this;

    function success(position) {
        var latlng,myLocationMarker,myCompanyMarker,mapOptions, map;

        if(companyLocation){
            latlng = new google.maps.LatLng(companyLocation.latitude,companyLocation.longitude);
        }
        else{
            latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        }
       
        mapOptions = {
            center: latlng,
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(mapCanvas, mapOptions);

        if(myLocation){
            myLocationMarker = new google.maps.Marker({
                position: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
                map: map,
                title:"You are here!"
            });
        }

        if(companyLocation){
            myCompanyMarker = new google.maps.Marker({
                position: latlng,
                map: map,
                title:"Website you have been searching for!"
            });
        }
        
    } 

    function error() {
        console.log("inside error callback");
    } 
  
    navigator.geolocation.getCurrentPosition(success,error);
}

