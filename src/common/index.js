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

export function encodeServiceData(service, params) {
	return Config.WS_URL + '/' + service + '?data=' + JSON.stringify(params);
}
