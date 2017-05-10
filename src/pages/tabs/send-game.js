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
				{id: 0, name: 'cevap1', value: ''},
				{id: 1, name: 'cevap2', value: ''},
				{id: 2, name: 'cevap3', value: ''},
				{id: 3, name: 'cevap4', value: ''},
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
			RegisterService.uploadGame("uploadGame", this.state.question_name, this.state.question_type, question_option, this.state.correctAnswerId, sessionTicket).then(res => {
				if(res.result.exist != "1" && res.result.question_id){
					Alert.alert("Soru gönderildi, teşekkürler!");
					this.setState({modalVisible: false});
				}else{
					Alert.alert("Bir şeyler ters gitti");
				}
			})
		})

	}

	render() {
		return (
			<View style={style.body}>
				<Text style={style.headerText}>
					Soruyu belirtilen kurallarla yazınız, aşağıdaki cevap girdilerine şıkları belirtin ve doğru cevabı soldaki kutucuktan işaretleyin.
				</Text>
				<TextInput underlineColorAndroid="transparent"
					style={style.questionInput}
					placeholder="Soru"
					value={this.state.question_name}
					multiline={true}
					numberOfLines={5}
					onChangeText={(value) => this.setState({question_name: value})}/>

				{
					this.state.answers.map((answer, key) => {
						return(
							<View style={style.answers} key={key}>
								<TouchableOpacity
									onPress={() => this.setState({correctAnswerId: key})}
									style={[this.state.correctAnswerId === key ? style.correctAnswerRadioButton : "", style.answerRadioButton]}>
									<View/>
								</TouchableOpacity>
								<TextInput
									underlineColorAndroid="transparent"
									style={[this.state.correctAnswerId === key ? style.correctAnswerInput : "", style.answerInputs]}
									placeholder={answer.name}
									value={answer.value}
									onChangeText={(value) => {
										this.state.answers[key].value = value;
										this.setState({answers: this.state.answers});
									}}/>
							</View>
						)
					})
				}

				<Button
					title="Gönder"
					onPress={this.uploadGame.bind(this)}
					color="#ff843c"
					accessibilityLabel="Soruyu gönder"/>
			</View>
		);
	}
}
