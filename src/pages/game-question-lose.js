import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	StatusBar
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import style from '@kodabug/style/game-question-lose';

export default class GameQuestionLose extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: 'Sıra ona geçti'
		}
	}

	render() {
		return (
			<View style={style.body}>
				<StatusBar
					backgroundColor="#ffe6e6"
					barStyle="light-content"/>
				<View
					style={style.center_card}>
					<View
						style={style.lose_text_container}>
						<Text
							style={style.lose_text}>
							{this.state.message}
						</Text>
					</View>
					<TouchableOpacity
						style={style.lose_button}
						onPress={() => {
							Actions.Main({type: 'reset'});
						}}>
						<Text
							style={style.lose_button_text}>Çık</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
