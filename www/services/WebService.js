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
				res = res[0];
				deferred.resolve({
					usid: res.usid,
					coins: res.copo,
					heart: res.hepo,
					bug: res.bugpo,
					fire: res.fipo,
					key: res.keypo
				});
			})

			return deferred.promise;
		}
	}
})