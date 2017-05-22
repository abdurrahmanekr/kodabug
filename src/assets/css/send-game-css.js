/*
 * @providesModule @kodabug/style/send-game
 */

import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
	body: {
		flex: 1,
		marginTop: 50
	},
	question_name: {
		fontSize: 20,
		margin: 15,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 15,
		paddingLeft: 15
	},
	answers: {
		alignItems: 'center',
	},
	answer: {
		backgroundColor: '#d66828',
		borderRadius: 15,
		marginTop: 10,
		marginLeft: 15,
		marginRight: 15,
		alignSelf: 'stretch',
	},
	answerInputs: {
		textAlign: 'center'
	},
	question_extension: {
		margin: 15,
		marginTop: 0
	},
	trueOption: {
		backgroundColor: '#afa',
	},
	sendButton: {
		marginTop: 20,
		backgroundColor: '#8dec98',
		padding: 15,
		borderRadius: 15,
		alignSelf: 'center',
	}
});
