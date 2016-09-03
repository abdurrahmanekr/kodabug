"use strict";

KodaBugApp.service('GameService', function ($q) {
	
	return {

		getGame: function (gameId) {
			var deferred = $q.defer();
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
		},

		highlightingOnLoad: function () {
			var pre = document.querySelector("pre").querySelector("code");
			hljs.configure({
				useBR: false
			})
			hljs.highlightBlock(pre);
		}

	}

})