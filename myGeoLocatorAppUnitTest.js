$( document ).ready(function() {
    var newApp = new myGeoLocatorAppMain();
    
	    QUnit.test( "errormessagesfadeIn", function(assert) {
	    		newApp.formView.model.set('errorMsgFlag',true);
	    		setTimeout(assert.equal( $('.errormsgs').css('display'), "block", "Error messages fade-in works!" ),2000);
	    		newApp.formView.model.set('errorMsgFlag',false);
		});

		QUnit.test( "currentErrorTexts", function(assert) {
	    		newApp.formView.model.set('currentErrorMsg',"syntax");
	    		assert.equal($('.errorText').html(), "Enter a valid email address. Eg. 'www.nytimes.com', 'nytimes.com' or 'g1.com.br' or 'www.g1.com.br'", "Dynamic Error messages work!" );
	    		newApp.formView.model.set('currentErrorMsg',"unavailable");
	    		assert.equal($('.errorText').html(), "Website not Found!", "Dynamic Error messages work!" );
	    		newApp.formView.model.set('currentErrorMsg',"");
		});
	
});
