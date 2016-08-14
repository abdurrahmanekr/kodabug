"use strict";

KodaBugApp.controller('FriendsController', function($scope) {
    $scope.users = [
    	{
    		usid: "1234",
    		name: "Abdurrahman Eker",
    		img: "https://yt3.ggpht.com/-_NLURH7xKu8/AAAAAAAAAAI/AAAAAAAAAAA/HPkh-qQTBww/s100-c-k-no-rj-c0xffffff/photo.jpg",
    		coins:{
    			bug: 120,
    			key: 3,
    			fire: 5
    		}
    	},
    	{
    		usid: "1235",
    		name: "Kıpçak Beği",
    		img: "http://ionicframework.com/img/docs/venkman.jpg",
    		coins:{
    			bug: 520,
    			key: 10,
    			fire: 50
    		}
    	},
    	{
    		usid: "1236",
    		name: "Mustafa Koç",
    		img: "http://ionicframework.com/img/docs/spengler.jpg",
    		coins:{
    			bug: 12,
    			key: 4,
    			fire: 3
    		}
    	}
    ];

    $scope.getUserCard = function (usid) {
    	alert(usid);
    };
});