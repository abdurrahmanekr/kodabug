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
	}

}