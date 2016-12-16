"use strict";

KodaBugApp.service('LoadingService',function ($ionicLoading) {
	return{
		show : function(e,w) {
			w = (w == true) ? '<ion-spinner icon="lines"/>' : '';
		  	$ionicLoading.show({
			    template: '<p>'+e+'</p>'+w,
			    animation: 'fade-in',
			    transclude: true,
    			replace: true,
			    showBackdrop: true,
			    maxWidth: 200,
			    showDelay: 0
		  	});
		},
		hide : function () {
			$ionicLoading.hide();
		}

	}
});