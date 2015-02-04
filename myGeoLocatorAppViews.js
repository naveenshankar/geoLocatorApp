var myGeoLocatorAppViews = function()
{
	this.formView = Backbone.View.extend(
            {
                initialize : function()
                {  
                    thisView = this;
                },
                events: {
                    "click .searchButton": "searchAddress",
                    "keyup .searchInput" : "showPrompt",
                    "click .locateButton":   "findMe"
                },
                showPrompt: function(e){
                    if(e.keyCode == 13){
                        $('.searchButton').trigger('click');
                     }
                },
                searchAddress: function(){
                    var utils = new myGeoLocatorAppUtils();
                    var websiteName = $('.searchInput').val();
                    var promiseOfResponse = utils.getWebsiteCoordinates(websiteName);
                    function renderAddress(position) {
                        utils.renderMap('map-canvas',position);
                    }
                    promiseOfResponse.done(function(data){renderAddress(data)});
                },
                findMe: function(){
                    var utils = new myGeoLocatorAppUtils();
                    var mapCanvas = document.getElementById('map-canvas');
                    function success(position) {
                        utils.renderMap('map-canvas',position.coords);
                    } 
                    function error() {
                        
                    } 
                    navigator.geolocation.getCurrentPosition(success, error);
                },
                render: function(){

                }
            });

	this.mapView = Backbone.View.extend(
            {
                initialize : function()
                { 
                  console.log("initialize");
                  mapView = this;
                  $(this.el).hide();
                },
                render : function(){
                  //console
                }
            });

}
