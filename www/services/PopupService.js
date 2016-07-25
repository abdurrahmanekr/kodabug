"use strict";

KodaBugApp.service('PopupService', function($ionicPopup) {
	var result = function 	(t, c, b1, b2) {
		var b2 = b2 || null;
		var e;
		if (b2 == null)
			$ionicPopup.alert({
			    title: t,
			    template: c,
			    buttons: [
			    	{ 
			    		text: b1,
		    			type : "button-dark",
	    				onTap : function(a) {
	    					e = "1";
			    		}
			    	}
			    ]
			});
		else
			$ionicPopup.alert({
			    title: t,
			    template: c,
			    buttons: [
			    	{
			    		text: b1,
			    		type : "button-dark",
			    		onTap : function(a) {
	    					e = "1";
			    		}
			    	},
			    	{ 
			    		text: b2,
			    		type : "button-balanced",
			    		onTap : function(a) {
	    					e = "2";
			    		}
			    	}
		    	]
			});

		return e;
	};
	var confirm = function 	(t, c, b1, b2) {
		var b2 = b2 || null;
		var e;
		if (b2 == null)
			return $ionicPopup.confirm({
			    title: t,
			    template: c,
			    buttons: [
			    	{ 
			    		text: b1,
		    			type : "button-dark",
	    				onTap : function(a) {
	    					e = "1";
			    		}
			    	}
			    ]
			}).then(function() {
				return e;
			});
		else
			return $ionicPopup.confirm({
			    title: t,
			    template: c,
			    buttons: [
			    	{
			    		text: b1,
			    		type : "button-dark",
			    		onTap : function(a) {
	    					e = "1";
			    		}
			    	},
			    	{ 
			    		text: b2,
			    		type : "button-balanced",
			    		onTap : function(a) {
	    					e = "2";
			    		}
			    	}
		    	]
			}).then(function() {
				return e;
			});
	};
	return {
		open : result,
		confirm : confirm
	};
});