"use strict";

KodaBugApp.service('GameService', function ($q) {
	
	return {

		getGame: function (gameId) {
			var deferred = $q.defer();
			deferred.resolve({
				question: "E = m.c^2 formülü kime aittir ?",
				options: ["Albert Einstein", "Alfred Nobel", "Nikola Tesla", "Amanda Cery"]
			});
			return deferred.promise;
		},
		getTrueOption: function (gameId, index) {
			var deferred = $q.defer();
			deferred.resolve({
				trueOption: 0,
				win: index == 0
			});
			return deferred.promise; 
		},

		getRandomGame: function () {
			var deferred = $q.defer();
			deferred.resolve({
				id: "1"
			});
			return deferred.promise; 
		}

	}

})