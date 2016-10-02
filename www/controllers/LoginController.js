"use strict";

KodaBugApp.controller('LoginController', function($scope, $timeout, $state, $ionicHistory, WebService, LoadingService, PopupService, AjaxService) {
    $scope.user = {
        name: "",
        password: ""
    };
    $scope.login = function(data) {
        if (data.name == "")
            PopupService.open("Hata", "Kullanıcı Adı Gerekli", "Tamam");
        else if (data.password == "")
            PopupService.open("Hata", "Şifre Gerekli", "Tamam");
        else {
            LoadingService.show("Giriş yapılıyor", true);
            AjaxService.login($scope.user).then(function(response) {
                if (response == null) {
                    //bağlantı kopuk
                    LoadingService.show("İnternet Bağlantınızı Kontrol Edip Tekrar Deneyin", false);
                    $timeout(function() {
                        LoadingService.hide();
                    }, 3000);
                } else if(response.status) {
                    //giriş başarılı
                    GLOBAL.user.usid = data.name;
                    LoadingService.show("Giriş Başarılı", false);
                    $timeout(function() {
                        LoadingService.hide();
                        $state.go("app.main");
                        $ionicHistory.clearHistory();
                    }, 1100);
                    localStorage.setItem("auth", response.auth);
                } else {
                    LoadingService.show("Giriş Olmadı", false);
                    $timeout(function() {
                        LoadingService.hide();
                    }, 1000);
                }
            })
        }
    };
})