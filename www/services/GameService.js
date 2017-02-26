"use strict";

KodaBugApp.service('GameService', function ($http, $q) {
	
	return {

		getGame: function () {
			var deferred = $q.defer();
			$http(common.ws({
				service: "GameService",
				method: "getGame",
				data: {}
			})).success(function(res) {
				console.log(res);
			}).error(function() {

			})
			deferred.resolve(
			// {
			// 	question: "E = m.c^2 formülü kime aittir ?",
			// 	options: ["Albert Einstein", "Alfred Nobel", "Nikola Tesla", "Amanda Cery"],
			// 	type: "text"
			// }
			{
				question: "<p>İşlem sonunda a değişkenin değeri nedir ?</p><pre><code class=\"javascript\">var a = null;<br />if (a = false) <br/>\ta = true;",
				options: ["true", "false", "null"],
				type: "code"
			}
			);
			return deferred.promise;
		},
		getTrueOption: function (gameId, index) {
			var deferred = $q.defer();
			deferred.resolve({
				trueOption: 1,
				win: index == 1
			});
			return deferred.promise; 
		},

		getRandomGame: function () {
			var deferred = $q.defer();
			deferred.resolve({
				id: parseInt(Math.random() * 100) % 10
			});
			return deferred.promise; 
		},

		highlightingOnLoad: function () {
			try {
				var pre = document.querySelector("pre").querySelector("code");
				hljs.configure({
					useBR: false
				})
				hljs.highlightBlock(pre);
			} catch (e) {
				return;
			}
		}

	}

})