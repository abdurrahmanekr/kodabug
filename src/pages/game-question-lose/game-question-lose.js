import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	StatusBar
} from 'react-native';

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
						onPress={() => {}}>
						<Text
							style={style.lose_button_text}>Çık</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

import getCss from '../../assets/style';
const style = StyleSheet.create(getCss('game-question-lose'));
