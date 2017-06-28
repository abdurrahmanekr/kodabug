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
	BackHandler,
	ActivityIndicator,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Toast from 'react-native-root-toast';

import Config from '@kodabug/config';

import {
	TimeBar
} from '@kodabug/components';

import {
	GameService
} from '@kodabug/services';

import style from '@kodabug/style/game-question-main';

export default class GameQuestionMain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gid: props.state && props.state.gid,
			start: false,
			qname: null,
			qextension: null,
			qoption: null,
			qtype: null,
			trueOption: "",
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
		var self = this;
		// max timeout kadar bekler
		GameService.getRandomGame({ gid: self.state.gid });
		// burası ise asıl soruyu getirdiğimiz yer
		GameService.getGame().then(res => {
			if (res.result !== -1) {
				res = res.result;
				self.setState({
					start: true,
					end: false,
					trying: false,
					qname: res.qname,
					qextension: null,
					qoption: res.qoption.map((x, i) => {return {key: i, value: x}}),
					qtype: null,
					trueOption: ""
				});
			}
		});
	}

	selectOption (index) {
		var self = this;
		this.setState({
			trying: true
		});
		GameService.getTrueOption({ try: index }).then(res => {
			if (res.result !== -1) {
				res = res.result;

				// oyun bitti
				self.setState({
					end: true
				});

				if (index !== parseInt(res.qtrue)) {
					Toast.show('Yanlış Cevap!', { duration: Toast.durations.SHORT, position: Toast.positions.BOTTOM, animation: true, hideOnPress: true});
					Actions.GameQuestionLose({
						state: {
							gid: this.state.gid
						},
						type: 'reset'
					});
				} else {
					Toast.show('Doğru Cevap!', { duration: Toast.durations.SHORT, position: Toast.positions.BOTTOM, animation: true, hideOnPress: true});
					Actions.GameQuestionWin({
						state: {
							gid: this.state.gid
						},
						type: 'reset'
					});
				}
			} else {
				Toast.show('Bir sorun oluştu!', { duration: Toast.durations.SHORT, position: Toast.positions.BOTTOM, animation: true, hideOnPress: true});
				Actions.GameQuestionLose({
					state: {
						gid: this.state.gid
					},
					type: 'reset'
				});
			}
		});
	}

	render() {
		return (
			this.state.start === true ?
				<View style={style.body}>
					<TimeBar
						timeUp={() => {
							if (this.state.end === false) {
								Alert.alert('Süre doldu');
								Actions.GameQuestionLose({
									state: {
										gid: this.state.gid
									},
									type: 'reset'
								});
							}
						}}
						width={this.state.time}/>
					<Text
						style={style.qname}>
						{this.state.qname}
					</Text>
					{
						this.state.qextension !== undefined ? <Text
							style={style.qextension}>
							{this.state.qextension}
						</Text>: null
					}
					<View
						style={style.qoption}>
					{
						this.state.qoption.map((answer, key) => {
							return(
								<TouchableOpacity
									style={style.answer}
									key={key}
									disabled={this.state.trying}
									onPress={() => this.selectOption.bind(this)(key)}>
									<Text>
										{ answer.value }
									</Text>
								</TouchableOpacity>
							)
						})
					}
					</View>
				</View>
				:
				<View style={[style.body, style.loading]}>
					<ActivityIndicator
						style={style.loadingUser}
						animating={true}
						size={"large"}/>
				</View>
		);
	}
}
