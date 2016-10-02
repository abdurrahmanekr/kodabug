"use strict";

KodaBugApp.service('WebService', function ($q) {
	return {

		getUserVCard: function(id) {
			var deferred = $q.defer();

			deferred.resolve({
				usid: "1",
				coins: 930,
				heart: 3,
				bug: 300,
				fire: 5,
				key: 3
			});

			return deferred.promise;
		}


	}
})