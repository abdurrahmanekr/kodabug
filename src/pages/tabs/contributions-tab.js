import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Modal,
	TouchableHighlight,
	Alert,
	TextInput,
	Button,
	TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import style from '@kodabug/style/contributions';

export default class ContributionsTab extends Component {
	constructor(props) {
		super(props);

	}


	render() {
		return (
			<View style={style.body}>
				<TouchableOpacity
					onPress={() => {Actions.SendGame()}}
					style={style.sendGameButton}>
					<Text style={style.sendGameButtonText}>Soru Gönder</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
