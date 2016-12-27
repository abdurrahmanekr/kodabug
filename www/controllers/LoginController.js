"use strict";

KodaBugApp.controller('LoginController', function($scope, $timeout, $state, $ionicModal, $ionicHistory, WebService, LoadingService, PopupService, AjaxService) {
	$scope.user = {
		name: "anonim1@kodabug.com",
		password: "1234"
	};
	$scope.login = function(data) {
		if (data.usname == "")
			PopupService.open("Hata", "Kullanıcı Adı Gerekli", "Tamam");
		else if (data.password == "")
			PopupService.open("Hata", "Şifre Gerekli", "Tamam");
		else {
			LoadingService.show("Giriş yapılıyor", true);
			AjaxService.login($scope.user).then(function(res) {
				res = res.data;
				res = res ? res.result : null;
				if (res == null) {
					//bağlantı kopuk
					LoadingService.show("İnternet Bağlantınızı Kontrol Edip Tekrar Deneyin", false);
					$timeout(function() {
						LoadingService.hide();
					}, 3000);
				} else if(res.username == "1" && res.password == "1") {
					//giriş başarılı
					GLOBAL.user.usid = data.name;
					LoadingService.show("Giriş Başarılı", false);
					$timeout(function() {
						LoadingService.hide();
						$state.go("app.main");
						$ionicHistory.clearHistory();
					}, 1100);
					localStorage.setItem("auth", res.auth);
				} else {
					LoadingService.show("Kullanıcı adınız veya Şifreniz Yanlış", false);
					$timeout(function() {
						LoadingService.hide();
					}, 1000);
				}
			}, function(res) {
				LoadingService.show("İnternet Bağlantınızı Kontrol Edip Tekrar Deneyin", false);
				$timeout(function() {
					LoadingService.hide();
				}, 2000);
			});
		}
	};

	$scope.register = function () {
		$scope.regUser = {
			name: null,
			surname: null,
			mail: null,
			birth: null
		};
		$ionicModal.fromTemplateUrl('view/popup/register.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
			modal.show();
			$scope.registerUser = function () {
				if (!$scope.regUser.name ||
					!$scope.regUser.surname ||
					!$scope.regUser.mail ||
					!$scope.regUser.birth ||
					!$scope.regUser.password ||
					!$scope.regUser.password2) {
					PopupService.open("Yetersiz veri", "Seni \'null\' olarak kaydetmek istemeyiz", "Tamam", null, "Lütfen gerekli alanları doldurun");
					return;
				}
				if ($scope.regUser.password != $scope.regUser.password2) {
					PopupService.open("Hata", null, "Tamam", null, "şifrenizi doğru girdiğinizden emin olun");
					return;
				}
				LoadingService.show("Lütfen Bekleyin", true);
				AjaxService.register($scope.regUser).then(function (res) {
					res = res.data.result;
					if (res.exist == 1) {
						$timeout(function() {
							LoadingService.hide();
						}, 100);
						PopupService.open("Alınmış E-mail", null, "Tamam", null, "Bu e-mail adı ile zaten bir kayıt var");
					} else {
						LoadingService.show("Aramıza Hoşgeldin :)", false);
						$timeout(function() {
							LoadingService.hide();
							$scope.modal.hide();
							$state.go("app.main");
							$ionicHistory.clearHistory();
						}, 1000);
						GLOBAL.user.usid = $scope.regUser.mail;
						localStorage.setItem("auth", res.auth);
						localStorage.setItem("user", $scope.regUser.mail)
					}
					console.log(res);
				}, function (res) {
					LoadingService.show("Bağlanırken bir sorun oluştu :( lütfen tekrar deneyin", false);
					$timeout(function() {
						LoadingService.hide();
					}, 1000);
				});
			};
		});
	}
})