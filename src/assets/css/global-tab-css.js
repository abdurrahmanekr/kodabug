/*
 * @providesModule @kodabug/style/global-tab
 */

import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
	body: {
		flex: 1
	},
	top_image: {
		flex: 1,
		height: 200
	},
	profile_card: {
		flex: 1,
		flexDirection: 'row',
		padding: 10
	},
	background_image: {
		position: 'absolute',
		right: 0,
		left: 0,
		top: 0,
		bottom: 0
	},
	settingButton: {
		backgroundColor: 'transparent'
	},
	profile_image_container: {
		width: 100,
		height: 100
	},
	profile_image: {
		width: 100,
		height: 100,
		borderRadius: 100
	},
	profile_right_container: {
		flex: 1,
		marginLeft: 10
	},
	user_name: {
		fontSize: 20,
		color: '#333'
	},
	user_rank_name: {
		fontSize: 15,
		color: '#999'
	},
	profile_rank_container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	profile_rank_count: {
		fontSize: 15,
		marginLeft: 10,
		color: '#ffab2e'
	},
	task_card: {
		flex: 1,
		backgroundColor: '#fff9e2',
		margin: 10
	},
	task_card_title: {
		fontSize: 15,
		margin: 10,
		color: "#510600"
	},
	task_card_content: {
		flexDirection: 'row',
		padding: 10,
		backgroundColor: "#fff"
	},
	task_card_item: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center'
	},
	task_item_header: {
		fontSize: 20,
		color: '#444'
	},
	setting_button: {
		alignSelf: 'flex-end',
		margin: 10
	}
});
