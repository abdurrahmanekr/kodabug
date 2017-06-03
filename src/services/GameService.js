import EventEmitter from 'EventEmitter';

import {
	Alert
} from 'react-native';

import {
	WebService
} from '@kodabug/providers';

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
	*/
	async getGameList(data){
		return WebService.getGameList(data)
	}
}

module.exports = new GameService();
