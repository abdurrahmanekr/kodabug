"use strict";

KodaBugApp.controller('MainController', function ($scope, $state, $ionicHistory, PopupService) {
	$scope.logout = function () {
		$state.go("login");
		$ionicHistory.clearHistory();
	};

	$scope.test = function () {
		var ilhams = ["naber","kokoş","serbest","bu","stil"];
		var rnd = parseInt((Math.random() * 100) % 5);
        PopupService.open("İlham Geliyor", ilhams[rnd], "Tamam");
	};
});