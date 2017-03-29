import {
	AsyncStorage
} from 'react-native';

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