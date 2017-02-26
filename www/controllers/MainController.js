"use strict";

KodaBugApp.controller('MainController', function ($scope, $rootScope, $timeout, $state, $ionicHistory, LoadingService, PopupService, WebService) {

	$rootScope.myUser = {};
	$rootScope.games = {};
    WebService.getUserVCard(GLOBAL.user.usid).then(function(res) {
    	$timeout(function() {
	    	$rootScope.myUser = res;
    	});
    	GLOBAL.user = res;
    });

    WebService.getGameList().then(function(res) {
    	if (res.count === 0) {
    		$rootScope.games = [];
    		return;
    	}
    	$rootScope.games = res;
    });

	$scope.logout = function () {
		$state.go("login");
		$ionicHistory.clearHistory();
	};

	$scope.test = function () {
		var ilhams = ["naber","kokoş","serbest","bu","stil"];
		var rnd = parseInt((Math.random() * 100) % 5);
        PopupService.open("İlham Geliyor", ilhams[rnd], "Tamam");
	};
	
	$scope.newGame = function () {
		LoadingService.show("Yeni biri bulunuyor...", true);
		WebService.startGame().then(function(res) {
			LoadingService.hide();
			$rootScope.startedGame = res;
			$state.go("game.main.dash");
		});
	};

	$scope.openCoins = function (type) {
		var template = "";
		switch(type){
			case "heart":
				type = "Can";
				template = "Senin daha çok oyuncu ile oyun oynamanı sağlar. Ne kadar çok can o kadar debug :)";
				break;
			case "bug":
				type = "Bug";
				template = "Bu senin bug puanın! Soru çözerek ve görev kartını tamamlayarak kazanabilirsin.\
							Bugları kullanarak, ileride yapılacak çekilişlerde kendine hediye alma şansın var. :)";
				break;
			case "fire":
				type = "Ateş";
				template = "Ateş biriktirerek oyunda soru atlamaları yapabilirsin. Bu çok kullanışlıdır.";
				break;

			case "key":
				type = "Anahtar";
				template = "Pek hile sayılmasada sorularda sana ipucu verir. \
							Anahtar biriktirmek istiyorsan görev kartını tamamlaman yeterli :)";
				break;
		}
		PopupService.open(type, template,"Tamam");
	};
});