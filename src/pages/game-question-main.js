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
	TouchableOpacity,
	BackAndroid,
	BackHandler
} from 'react-native';

import Config from '@kodabug/config';

import {
	TimeBar
} from '@kodabug/components';

import {Actions} from 'react-native-router-flux';

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
			correctAnswerId: "",
			time: Config.MAX_GAME_TIMEOUT
		};
	}

	componentWillMount() {
		this.loadGame();
		BackHandler.addEventListener('hardwareBackPress', this.eventListenBackAndroid);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.eventListenBackAndroid);
	}

	eventListenBackAndroid(){
		Alert.alert(
			'Oyundandan çıkmak mı istiyorsunuz?',
			'Oyundan çıkarsanız mağlup duruma düşersiniz',
			[
				{
					text: "Çık",
					onPress: () => { Actions.Main({type: 'reset'}) }
				},
				{
					text: "Devam et"
				}
			]
		);
		return true; //stay on app
	}

	async loadGame() {

	}

	render() {
		return (
			<View style={style.body}>
				<TimeBar
					width={this.state.time}/>
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
