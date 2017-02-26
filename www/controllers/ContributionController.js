"use strict";

KodaBugApp.controller('ContributionController', function($scope, $ionicPopup, $timeout, $ionicActionSheet, PopupService, WebService, LoadingService){

	$scope.newBute = {
		qname: "",
		questions :[
			{
				text: ""
			},
			{
				text: ""
			},
			{
				text: ""
			},
			{
				text: ""
			}
		]
	};

	$scope.useOption = function(index) {
		var hideSheet = $ionicActionSheet.show({
			buttons: [
				{
					text: '<i class="icon ion-edit"></i> Düzenle'
				}, {
					text: '<span class="balanced"><i class="icon ion-checkmark"></i> Doğru bu olsun</span>'
				}
			],
			titleText: 'Şık Seçenekleri',
			cancelText: 'Vazgeç',
			buttonClicked: function(indexBtn) {
				switch (indexBtn) {
					case 0:
						var myPopup = $ionicPopup.show({
							template: '<input type="text" ng-model="newBute.questions['+index+'].text">',
							title: 'İçeriğini Değiştir',
							scope: $scope,
							buttons: [
								{
									text: '<b>Tamam</b>',
									type: 'button-positive',
									onTap: function(e) {
										myPopup.close();
									}
								}
							]
						});
						hideSheet();
						break;
					case 1:
						$scope.newBute.questions.find(function(x) {x.trueOption=false;});
						$scope.newBute.questions[index].trueOption = true;
						hideSheet();
						break;
				}
			}
		});
	};

	$scope.sendQuestion = function() {
		// doğru şık var mı ?
		var tOpt = $scope.newBute.questions.find(function(x) {return x.trueOption==true;});
		// hepsi dolu mu ?
		var optName = $scope.newBute.questions.find(function(x) {return x.text == ""});
		// sorunun ismi girilmiş mi
		var qname = $scope.newBute.qname;

		if (!qname) {
			PopupService.open("Eksik Bilgi", "Soru ne olacak ? Buna karar vermelisin", "Tamam");
		} else if (optName) {
			PopupService.open("Eksik Bilgi", "Şıkların <span class='assertive'>Tamamını</span> doldurduğuna emin olmaısın", "Tamam");
		} else if (!tOpt) {
			PopupService.open("Eksik Bilgi", "Şıklardan birisine basılı tutarak <span class='balanced'>Doğru bu olsun</span> seçeneğini işaretlemelisin ", "Tamam");
		} else {
			LoadingService.show("Yükleniyor", true);
			WebService.uploadGame({
				question_name: $scope.newBute.qname,
				question_option: $scope.newBute.questions.map(function(x) {return x.text}),
				question_true: $scope.newBute.questions.indexOf(tOpt)
			})
			.then(function(res) {
				if (res === false) {
					PopupService.open("Soru eklenemedi", "Oturumunuz doğru olmayabilir", "Tamam");
				} else if (res.exist != 0) {
					PopupService.open("Soru eklenemedi", "Bu soruya benzer kayıtlarımızda sorular var lüffen özgün bir soru yazın", "Tamam");
				} else {
					PopupService.open("Soru başarıyla eklendi!!", "", "Tamam");
				}
				LoadingService.hide();
			});
		}
	};

});
