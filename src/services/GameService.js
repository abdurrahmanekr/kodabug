import {
	WebService
} from '@kodabug/providers';

class GameService {

	/*
	 * Kullanıcını bir kullanıcı şeçmesini sağlar
	*/
	async startGame(data) {
		return WebService.startGame(data)
	}

	/*
	 * Kullanıcının oynamış olduğu oyunların listesini getirir
	*/
	async getGameList(data){
		return WebService.getGameList(data)
	}
}

module.exports = new GameService();
