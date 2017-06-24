/*
 * @providesModule @kodabug/style/game-question-main
 */

import {StyleSheet, Platform} from 'react-native';

module.exports = StyleSheet.create({
	body: {
		flex: 1
	},
	loading: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	question_name: {
		fontSize: 20,
		margin: 15
	},
	answers: {
	},
	answer: {
		backgroundColor: '#d66828',
		borderRadius: 15,
		alignItems: 'center',
		padding: 15,
		marginTop: 10,
		marginLeft: 15,
		marginRight: 15
	},
	question_extension: {
		margin: 15,
		marginTop: 0
	}
});
