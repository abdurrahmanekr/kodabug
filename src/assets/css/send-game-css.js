/*
 * @providesModule @kodabug/style/send-game
 */

import { StyleSheet, Platform } from 'react-native';

module.exports = StyleSheet.create({
	body: {
		flex: 1,
		...Platform.select({
			ios: {
				marginTop: 64
			},
			android: {
				marginTop: 50
			}
		})
	},
	bodyScroll: {
		paddingBottom: 50
	},
	question_name: {
		fontSize: 20,
		margin: 15,
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 15,
		paddingLeft: 15,
		minHeight: 50,
		color: '#333'
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
		textAlign: 'center',
		height: 50,
		color: '#333'
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
