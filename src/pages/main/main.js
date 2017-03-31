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

import {
	RegisterService
} from '../../services/'

import {getSessionTicket} from '../../common/index';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			question_name: 'falan',
			answers: [
				{id: 0, name: 'cevap1', value: 'a', editable: false, focus: false},
				{id: 1, name: 'cevap2', value: 'b', editable: false, focus: false},
				{id: 2, name: 'cevap3', value: 'c', editable: false, focus: false},
				{id: 3, name: 'cevap4', value: 'd', editable: false, focus: false},
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
				<Button onPress={() => {this.setState({modalVisible: !this.state.modalVisible})}} title="Soru gönder" />
				<Modal animationType={"slide"}
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={() => {Alert.alert("Kapandı")}}>
					<View style={style.modal}>
						<Text style={style.closeModal} onPress={() => {this.setState({modalVisible: !this.state.modalVisible})}}>x</Text>
						<Text style={style.headerText}>
							Soruyu belirtilen kurallarla yazınız ve aşağıdaki cevap girdilerine şıkları belirtin ve doğru cevabın üzerine basılı tutarak seçin.
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
											onPress={() => {this.refs[key].focus();}}
											onLongPress={() => {this.setState({correctAnswerId: key})}}
											style={[this.state.correctAnswerId === key ? style.correctAnswer : "", style.answersBox]}
											>
											<Text>
											{this.state.answers[key].value === '' ? this.state.answers[key].name : this.state.answers[key].value}
											</Text>
										</TouchableOpacity>
										<TextInput
										underlineColorAndroid="transparent"
										style={style.answerInputs}
										placeholder={answer.name}
										value={answer.value}
										ref={key}
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
							onPress={this.uploadGame.bind(this)}/>
					</View>
				</Modal>
			</View>
		);
	}
}

import getCss from '../../assets/style';
const style = StyleSheet.create(getCss('main'));
