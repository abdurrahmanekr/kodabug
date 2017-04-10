import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {isLogin} from '../../common/'
export default class Start extends Component {

	constructor(props) {
		super(props);
		this.isLogin();
	}

	async isLogin() {
		var present = this;
		isLogin().then((res) => {
			if(res)
				Actions.Main({type: 'reset'});
			else
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

import getCss from '../../assets/style';
const style = StyleSheet.create(getCss('start'));
