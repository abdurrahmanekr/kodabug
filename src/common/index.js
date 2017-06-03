/*
 * @providesModule @kodabug/common
 */

import {
	AsyncStorage,
	Alert
} from 'react-native';

import Config from '@kodabug/config';

export async function isLogin() {
	var session = await AsyncStorage.getItem("session_ticket");
	var user = await AsyncStorage.getItem("user");
	if (session != undefined && user != undefined)
		return true;
	return false;
}

export async function logOut() {
	await AsyncStorage.removeItem("session_ticket");
	await AsyncStorage.removeItem("user");
	return true;
}

export async function sendGET(service, method, data) {
	data = data || {};
	data.method = method;
	data.session_ticket = await AsyncStorage.getItem('session_ticket');

	return await fetch(encodeServiceData(service, data))
	.then(res => res.json())
	.then(res => {
		return res
	})
	.catch(res => {
		return 'connection_error';
	})
}

export async function setSessionTicket(ticket) {
	AsyncStorage.setItem("session_ticket", ticket);
}

export async function setUser(user) {
	GLOBALS.user = user;
	return await AsyncStorage.setItem("user", JSON.stringify(user));
}

export async function getUser() {
	var user = await AsyncStorage.getItem("user");
	if (user === undefined)
		return user;
	user = JSON.parse(user);
	GLOBALS.user = user;
	return user;
}

export function deleteSessionTicket(){
	AsyncStorage.removeItem("session_ticket");
}

export function getSessionTicket(){
	return AsyncStorage.getItem('session_ticket');
}

export function encodeServiceData(service, params) {
	return Config.WS_URL + '/' + service + '?data=' + JSON.stringify(params);
}

/*
 * Bu method içine girilen tanımlanmış hatalara göre ekrana uyarı verir
 * @text: standartlaştırılmış hata anahtarı
*/
export function handleErrorAlert(text) {
	switch (text) {
		case 'connection_error':
			Alert.alert('Sunucuya bağlanılamıyor', 'Bağlantı ile ilgili sorun yaşıyoruz, internet bağlantınızı kontrol edin');
			break;
		case 'invalid_username':
			Alert.alert('Kullanıcı adı yanlış!', 'Kullanıcı adınızı doğru girdiğinizden emin olun');
			break;
		case 'invalid_user':
			Alert.alert('Girdiğiniz kullanıcı bilgileri yanlış!', 'Kullanıcı adınızı && şifrenizi doğru girdiğinizden emin olun');
			break;
		case 'null_login_user':
			Alert.alert('Eksik bilgi!', 'Kullanıcı adı || şifre boş bırakılamaz');
			break;
		case 'null_register_user':
			Alert.alert('Eksik bilgi!', 'Kendini null olarak kaydetmek istemezsin!');
			break;
		case 'register_user_exist':
			Alert.alert('Girdiğiniz bazı bilgileri kullanılmış', 'Başka bir e-mail adresi deneyin');
			break;
		case 'invalid_register_user':
			Alert.alert('Girdiğiniz bilgiler geçersiz', 'Bu bilgiler hiç iç açıcı değil');
			break;
		case 'register_user_failed':
			Alert.alert('Kayıt yapılırken bir sorun oluştu', 'Lüfren sonra tekrar deneyiniz');
			break;
		default:
			break;
	}
}
