import {
	AsyncStorage
} from 'react-native';

import Config from '../common/config'

export async function isLogin() {
	var session = await AsyncStorage.getItem("session_ticket");
	if (session != null)
		return true;
	return false;
}

export async function setSessionTicket(ticket) {
	AsyncStorage.setItem("session_ticket", ticket);
}

export function deleteSessionTicket(){
	AsyncStorage.removeItem("session_ticket");
}

export function getSessionTicket(){
	return AsyncStorage.getItem("session_ticket");
}

export function encodeServiceData(service, params) {
	return Config.WS_URL + '/' + service + '?data=' + JSON.stringify(params);
}

/*
 * Bu method, fonksiyona verilen argümanların parametresiz alınması ve argümanların
 * kullanılabilir olarak döndürebilmesine yarar.
 * @args: fonksiyon içerisinde `arguments` değeri girilir.
*/

export function getArgs(args){
	return [].slice.apply(args)
}

/*
 * Bu method, argümanların URL yapısındaki `data` tipine çevrilebilmesine yarayan fonksiyon.
 * @method:  serviste kullanılan method girdisi
 * @args: 'getArgs' fonksiyonuna gönderilecek olan `arguments` değeri.
*/

export function argumentsToData(method, args){
	data = Config.init(method);
	args = getArgs(args);
	Object.keys(data).map((objKey, key) => {
		data[objKey] = args[key];
	});
	return data;
}
