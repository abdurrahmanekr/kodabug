import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	AsyncStorage
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import {isLogin, deleteSessionTicket} from '@kodabug/common';

import style from '@kodabug/style/start';

export default class Start extends Component {

	constructor(props) {
		super(props);
		this.isLogin();
	}

	async isLogin() {
		// await AsyncStorage.removeItem('user')
		var present = this;
		isLogin().then((res) => {
			if(res){
				Actions.Main({type: 'reset'});
			}else
				Actions.Login({type: 'reset'});
		});
	}

	render() {
		return (
			<View
				style={style.body}>
				<Text>Yükleniyor...</Text>
			</View>
		);
	}
}
