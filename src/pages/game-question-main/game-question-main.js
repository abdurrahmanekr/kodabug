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

export default class GameQuestionMain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question_name: '',
			answers: [
				{id: 0, name: 'cevap1', value: '1'},
				{id: 1, name: 'cevap2', value: '1'},
				{id: 2, name: 'cevap3', value: '1'},
				{id: 3, name: 'cevap4', value: '1'},
			],
			question_type: "1",
			correctAnswerId: ""
		}
	}

	render() {
		return (
			<View style={style.body}>
				<Text>
					{this.state.question_name}
				</Text>
				{
					this.state.answers.map((answer, key) => {
						return(
							<View style={style.answers} key={key}>
								<TouchableOpacity
									onPress={() => this.setState({correctAnswerId: key})}>
									<Text>
										{answer.value}
									</Text>
								</TouchableOpacity>
							</View>
						)
					})
				}
			</View>
		);
	}
}

import getCss from '../../assets/style';
const style = StyleSheet.create(getCss('game-question-main'));
