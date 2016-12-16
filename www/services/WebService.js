"use strict";

KodaBugApp.service('WebService', function ($q, $http) {
	return {

		getUserVCard: function(id) {
			var deferred = $q.defer();

			$http(common.ws({
				service: "UserService",
				method: "getUserVCard",
				data: {
					usid: id
				}
			})).success(function(res) {
				res = res.result;
				if (res == -1)
					return;

				deferred.resolve({
					usid: id,
					usname: res.usname + " " + res.surname,
					uspoint: res.uspoint,
					coins: res.copo,
					heart: res.hepo,
					bug: res.bugpo,
					fire: res.fipo,
					key: res.keypo,
					photo: res.photo ? res.photo : common.identicon(id)
				});
			});

			return deferred.promise;
		},

		getGameList: function() {
			var deferred = $q.defer();

			$http(common.ws({
				service: "GameService",
				method: "getGameList",
				data: {
					auth: localStorage.getItem("auth")
				}
			})).success(function(res) {
				res = res.result;
				if (res == -1)
					return;

				deferred.resolve(res);
			});

			return deferred.promise;
		},

		startGame: function() {
			var deferred = $q.defer();

			$http(common.ws({
				service: "GameService",
				method: "startGame",
				data: {
					auth: localStorage.getItem("auth")
				}
			})).success(function(res) {
				res = res.result;
				if (res == -1)
					return;

				deferred.resolve(res);
			});

			return deferred.promise;
		}
	}
})