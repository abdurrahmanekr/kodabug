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

import style from '@kodabug/style/game-question-main';

export default class GameQuestionMain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question_name: 'İşlem sonunda a değişkenin değeri nedir ?',
			question_extension: 'var a = null;\nif (a = false)\n\t\ta=true;',
			answers: [
				{id: 0, value: 'true'},
				{id: 1, value: 'false'},
				{id: 2, value: 'null'},
				{id: 3, value: 'hata verir'},
			],
			question_type: "1",
			correctAnswerId: ""
		};
	}

	componentWillMount() {
		this.loadGame();
	}

	async loadGame() {

	}

	render() {
		return (
			<View style={style.body}>
				<Text
					style={style.question_name}>
					{this.state.question_name}
				</Text>
				{
					this.state.question_extension !== undefined ? <Text
						style={style.question_extension}>
						{this.state.question_extension}
					</Text>: null
				}
				<View
					style={style.answers}>
				{
					this.state.answers.map((answer, key) => {
						return(
							<TouchableOpacity
								style={style.answer}
								key={key}
								onPress={() => this.setState({correctAnswerId: key})}>
								<Text>
									{answer.value}
								</Text>
							</TouchableOpacity>
						)
					})
				}
				</View>
			</View>
		);
	}
}
