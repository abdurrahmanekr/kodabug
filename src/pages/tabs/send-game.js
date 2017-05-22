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

import { RegisterService } from '@kodabug/services';
import { getSessionTicket } from '@kodabug/common';

import style from '@kodabug/style/send-game';

export default class SendGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question_name: '',
			answers: [
				{id: 0, name: 'Şık 1', value: ''},
				{id: 1, name: 'Şık 2', value: ''},
				{id: 2, name: 'Şık 3', value: ''},
				{id: 3, name: 'Şık 4', value: ''},
			],
			question_type: "1",
			correctAnswerId: ""
		}
	}

	uploadGame(){
		let question_option = [];
		this.state.answers.map((answer, key) => {
			question_option.push(String(answer.value));
		});

		getSessionTicket().then(sessionTicket => {
			RegisterService.uploadGame("uploadGame", this.state.question_name, this.state.question_type, question_option, 0, sessionTicket).then(res => {
				if (res.result.exist != "1" && res.result.question_id) {
					Alert.alert("Soru gönderildi, teşekkürler!");
					this.setState({modalVisible: false});
				} else {
					Alert.alert("Bir şeyler ters gitti");
				}
			})
		})

	}

	render() {
		return (
			<View style={style.body}>
				<TextInput
					underlineColorAndroid="transparent"
					style={style.question_name}
					placeholder={'Soru'}
					multiline={true}
					onChangeText={(value) => {
						this.setState({question_name: value});
					}}/>
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
								style={[style.answer, key == 0 ? style.trueOption : {}]}
								key={key}
								onPress={() => this.setState({correctAnswerId: key})}>
								<TextInput
									underlineColorAndroid="transparent"
									style={style.answerInputs}
									placeholder={key == 0 ? 'Doğru Cevap' : answer.name}
									value={answer.value}
									onChangeText={(value) => {
										this.state.answers[key].value = value;
										this.setState({answers: this.state.answers});
									}}/>
							</TouchableOpacity>
						)
					})
				}
				</View>

				<TouchableOpacity
					style={style.sendButton}
					onPress={this.uploadGame.bind(this)}>
					<Text>İnsert into</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
