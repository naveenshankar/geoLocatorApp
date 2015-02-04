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

myGeoLocatorAppUtils.prototype.renderMap = function(canvasId,position){
		var mapCanvas = document.getElementById(canvasId);
		var latlng = new google.maps.LatLng(position.latitude,position.longitude);
        var mapOptions = {
            center: latlng,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
		      position: latlng,
		      map: map,
		      title:"You are here!"
		});
}

