/*
 * @providesModule @kodabug/style/register
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
		justifyContent: "center",
	},
	register_container: {
		flex: 1,
		padding: 25
	},
	top_view: {
		flexDirection: 'row',
	    justifyContent: 'center',
	    alignItems: 'center'
	},
	logo: {
		width: 100,
		height: 100
	},
	logo_text: {
		fontFamily: 'UbuntuMono-Regular',
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 5,
		paddingLeft: 20,
		borderRadius: 5,
		marginBottom: 15,
		minHeight: 40
	},
	register_button: {
		padding: 15,
		alignItems: 'center',
		backgroundColor: '#387ef5',
		borderRadius: 5,
		marginBottom: 30
	},
	register_button_text: {
		color: '#fff'
	},
	footer: {
		height: 50,
		backgroundColor: '#e8e8e8',
		justifyContent: "center",
	},
	helpdesk: {
		flexDirection: 'row',
		justifyContent: "center",
		alignItems: "center"
	},
	helpdesk_text: {
		fontFamily: 'UbuntuMono-Regular',
		color: '#387ef5',
		marginLeft: 5,
		marginRight: 5
	},
})
