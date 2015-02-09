var myGeoLocatorAppViews = function()
{
    var utils = new myGeoLocatorAppUtils();
	this.formView = Backbone.View.extend(
            {
                initialize : function()
                {  
                    thisView = this;
                },
                events: {
                    "click .searchButton": "searchAddress",
                    "click .locateButton":   "findMe",
                    "click .resetButton":   "removeLocation"
                },
                searchAddress: function(e){
                    e.stopImmediatePropagation();
                    var promiseOfResponse;
                    var websiteName = $('.searchInput').val();

                    if(websiteName == ''){
                        thisView.model.set('currentErrorMsg','syntax');
                        thisView.model.set('errorMsgFlag',true);
                        thisView.model.set('myCompanyLocationData',null);
                    }
                    else{
                        promiseOfResponse = utils.getWebsiteCoordinates(websiteName);
                        promiseOfResponse.done(function(data){
                            thisView.model.set('errorMsgFlag',false);
                            thisView.model.set('myLocationData',null);
                            thisView.model.set('myCompanyLocationData',data);
                        }).fail(function(data){ 
                            thisView.model.set('currentErrorMsg','unavailable');
                            thisView.model.set('errorMsgFlag',true);
                        });
                    }
                },
                findMe: function(e){
                    e.stopImmediatePropagation();
                    var websiteName = $('.searchInput').val();
                    var promiseOfResponse ;

                    if(websiteName == ''){
                        thisView.model.set('myLocationData',{});
                        thisView.model.set('myCompanyLocationData',null);
                        thisView.model.set('errorMsgFlag',false);
                    }
                    else{
                        promiseOfResponse = utils.getWebsiteCoordinates(websiteName);
                        promiseOfResponse.done(function(data){
                            thisView.model.set('errorMsgFlag',false);
                            thisView.model.set('myLocationData',{});
                            thisView.model.set('myCompanyLocationData',data);
                        }).fail(function(data){
                            thisView.model.set('errorMsgFlag',true);
                            thisView.model.set('currentErrorMsg','unavailable');
                            thisView.model.set('myLocationData',{});
                            thisView.model.set('myCompanyLocationData',null);
                        });
                    }
                },
                showHideErrorMsg: function(){
                    if(thisView.model.get('errorMsgFlag') == true){
                        $('.errormsgs').fadeIn("slow");
                    }
                    else {
                        $('.errormsgs').fadeOut("slow");
                    }  
                },
                changeErrorMessage: function(){
                    var errorType = thisView.model.get('currentErrorMsg');
                    $('.errorText').html(thisView.model.get('myErrorMsgs')[errorType]); 
                },
                removeLocation: function(){
                    thisView.model.set('myLocationData',null);
                }
            });

	this.mapView = Backbone.View.extend(
            {
                initialize : function()
                { 
                  $(this.el).hide();
                },
                renderOrEraseMyLocation : function(){
                    $(this.el).slideDown("slow");
                    utils.renderMap('map-canvas',this.model.get('myCompanyLocationData'),this.model.get('myLocationData'));
                    if(!this.model.get('myCompanyLocationData') && !this.model.get('myLocationData')){
                        $(this.el).slideUp("slow");
                    }
                },
                renderMyCompanyLocation : function(){
                    $(this.el).slideDown("slow");
                    if(this.model.get('myCompanyLocationData')){
                        utils.renderMap('map-canvas',this.model.get('myCompanyLocationData'),this.model.get('myLocationData'));
                    }
                }
            });

}
