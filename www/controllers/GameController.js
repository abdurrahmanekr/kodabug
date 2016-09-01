"use strict";

KodaBugApp.controller('GameController', function($scope, $stateParams, $timeout, GameService, LoadingService) {
    $scope.gameId = $stateParams.gameId;
    
    GameService.getGame($scope.gameId).then(function(res) {
	    $scope.game = {
	    	question: res.question,
	    	options: res.options,
	    	click: null,
	    	trueOption: null
	    };
    })
    $scope.useOption = function (index) {
    	$scope.game.click = index;
    	GameService.getTrueOption($scope.gameId, index).then(function (res) {
    		$scope.game.trueOption = res.trueOption;
    		if (index == res.trueOption)
    			LoadingService.show("Tebrikler Doğru Cevap !");
    		else 
    			LoadingService.show("Yanlış Cevap Verdin !");
    		$timeout(function() {
    			LoadingService.hide();
    		},2000);
    	});
    };
    $scope.openCoins = function (button) {
    	switch (button) {
    		case "key":
    			break;
			case "fire":
				break;
    	}
    }
});