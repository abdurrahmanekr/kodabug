var _MODE_ = 1 ? "release" : "debug"; // release = 1 - debug = 0
var GLOBAL = {
	serviceUrl : _MODE_ == "release" ? "http://testrest.avarekodcu.com/service/" : "http://localhost/kodabug/service/",
	user: {
		usid: null,
		coins: null,
		heart: null,
		bug: null,
		fire: null,
		key: null,
		usname: null,
		uspoint: null
	}
};