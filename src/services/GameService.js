import {
	WebService
} from '@kodabug/providers';

class GameService {

	/*
	 * oyunun kendini getirir
	*/
	async getGame(data) {
		return WebService.getGame(data)
	}

	/*
	 * oyunun kendini getirir
	*/
	async getTrueOption(data) {
		return WebService.getTrueOption(data)
	}

	/*
	 * oyun kuyruğuna oyun atmak için kullanılır
	*/
	async getRandomGame(data) {
		return WebService.getRandomGame(data)
	}

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
