import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	StatusBar
} from 'react-native';

export default class GameQuestionWin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Tebrikler !',
			message: 'Devam etmek ister miydin ?',

		}
	}

	render() {
		return (
			<View style={style.body}>
				<StatusBar
					backgroundColor="#ceffcc"
					barStyle="light-content"/>
				<View
					style={style.center_card}>
					<View
						style={style.win_text_container}>
						<Text
							style={style.win_text}>
							{this.state.title}
						</Text>
						<Text
							style={style.win_text}>
							{this.state.message}
						</Text>
					</View>
					<View
						style={style.win_buttons}>
						<TouchableOpacity
							style={style.win_button1}
							onPress={() => {}}>
							<Text
								style={style.win_button_text}>Çık</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={style.win_button2}
							onPress={() => {}}>
							<Text
								style={style.win_button_text}>Devam</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

import getCss from '../../assets/style';
const style = StyleSheet.create(getCss('game-question-win'));
