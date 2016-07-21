"use strict";

KodaBugApp.controller('LoginController', function ($scope, $ionicPopup, AjaxService, LoadingService, $timeout, $state, $ionicHistory) {
	$scope.user = {
		name : "",
		password : ""
	};

	$scope.login = function (data) {
		if (data.name == "") {
			$ionicPopup.show({
			    template: 'İsmi Boş Bırakma',
			    title: 'Hata',
			    buttons: [
			      { text: 'Tamam' }
			    ]
		  	});
		}else if(data.password == ""){
			$ionicPopup.show({
			    template: 'Şifreyi Boş Bırakma',
			    title: 'Hata',
			    buttons: [
			      { text: 'Tamam' }
			    ]
		  	});
		}
		else{
			LoadingService.show("Giriş yapılıyor",true);
			AjaxService.login($scope.user).then(function(response) {
				response = JSON.parse(response);
				if (response) {
					LoadingService.show("Giriş Başarılı",false);
					$timeout(function () {
						LoadingService.hide();
						$state.go("app.dash");
						$ionicHistory.clearHistory();
					}, 1100);
				}else{
					LoadingService.show("Giriş Olmadı",false);
					$timeout(function () {
						LoadingService.hide();				
					}, 1000);
				}
			})
		}
	};
})