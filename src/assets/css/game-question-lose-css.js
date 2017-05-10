/*
 * @providesModule @kodabug/style/game-question-lose
 */

import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: '#ffe6e6'
	},
	center_card: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	lose_text_container: {
		alignItems: 'center'
	},
	lose_text: {
		color: '#444',
		margin: 15,
	},
	lose_button: {
		backgroundColor: '#ef473a',
		padding: 15,
		margin: 15,
		borderRadius: 15,
		alignItems: 'center'
	},
	lose_button_text: {
		color: '#fff',
	}
});
