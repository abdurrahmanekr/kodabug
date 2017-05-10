import EventEmitter from 'EventEmitter';

import {
	Alert
} from 'react-native';

import {getGameList} from '@kodabug/providers/web-service';

import {
	getSessionTicket
} from '@kodabug/common';

class GameService extends EventEmitter {
	constructor(props) {
	  super(props);

	  this.state = {};
	}

	/*
	 * Kullanıcının oynamış olduğu oyunların listesini getirir
	 * @session_ticket: kullanıcının session_ticket bilgisi
	*/
	async getGameList(method, session_ticket){
		return getGameList(method, session_ticket).then(res => {
			return res;
		});
	}
}

module.exports = new GameService();
