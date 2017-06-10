/*
 * @providesModule @kodabug/style/game-question-gameover
 */

import {StyleSheet, Platform} from 'react-native';

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
		}),
		backgroundColor: '#ffe6e6'
	}
});
