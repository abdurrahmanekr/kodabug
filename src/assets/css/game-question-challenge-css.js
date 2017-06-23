/*
 * @providesModule @kodabug/style/game-question-challenge
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
		})
	},
	column: {
		padding: 15,
		alignItems: 'center',
	},
	userImage: {
		width: 100,
		height: 100,
		borderRadius: 50
	},
	userName: {
		marginTop: 10,
		fontSize: 18,
	},
	button:{
		padding: 10,
		borderWidth: 1,
		borderColor: '#ff843c',
		margin: 15,
		borderRadius: 5
	},
	buttonText:{
		textAlign: 'center',
		color: '#ff843c'
	},
	loadingUser: {
		marginTop: 15
	},
	successText: {
		fontSize: 20
	}
});
