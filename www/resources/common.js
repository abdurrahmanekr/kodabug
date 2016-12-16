"use strict";

var common = {

	ws: function(ws) {

		ws.type = ws.type || "GET";
		var result = {
			method: ws.type,
			url: GLOBAL.serviceUrl + ws.service
		};
		ws.data.method = ws.method;
		ws.data = btoa(JSON.stringify(ws.data));	
		if (ws.type == "GET")
			result.params = {
				data: ws.data
			}
		else
			result.data = ws.data;
		return result;
	},

	identicon : function (text, size) {
	    var size = size || 210;
	    var shaObj = new jsSHA(text + '0', "TEXT");
	    var hash = shaObj.getHash("SHA-512", "HEX", 1);
	    var data = new Identicon(hash, size).toString();
	    return "data:image/png;base64," + data;
	}

}

