/*
 * @providesModule @kodabug/style/main-tab
 */

import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
	body: {
		flex: 1
	},
	header: {
		height: 50,
		flexDirection: 'row',
		backgroundColor: '#402000'
	},
	headerIconBox: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconTextContainer: {
		marginLeft: 5,
		paddingTop: 2.5,
		paddingBottom: 2.5,
		paddingLeft: 7.5,
		paddingRight: 7.5,
		borderRadius: 10,
	},
	iconText: {
		fontSize: 12,
		backgroundColor: 'transparent',
		color: "#fff"
	},
	startGameArea: {
		backgroundColor: "#fff9e2",
		alignItems: 'center',
		margin: 10
	},
	startGameAreaTitle: {
		fontSize: 25,
		color: '#510600',
		margin: 20
	},
	startGameAreaImage: {
	    width: 200,
	    height: 150,
		resizeMode: 'contain',
	},

	gameList: {
		flex: 4,
		margin: 10,
		backgroundColor: "#fff9e2",
	},
	gameListTitle: {
		fontSize: 23,
		margin: 10,
		color: "#510600",
		textAlign: 'center'
	},
	gameListScroll: {

	},
	gameListGame: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: "#ddd",
		marginBottom: 2
	},
	gameListAvatar: {
		width: 60,
		height: 60,
		margin: 10
	},
	gameListContent: {
		margin: 10,
	},
	gameListName: {
		margin: 0,
		padding: 0,
		fontSize: 18,
		color: "#333",
		flex: 1,
		justifyContent: 'flex-start'
	},
	gameListRank: {
		margin: 0,
		padding: 0,
		color: "#6d0800",
		fontSize: 12
	},
	gameListDate: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	gameListStatus:{
		flex: 1,
		flexDirection: 'column',
		alignItems: 'flex-end',
	},
	gameListScores:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 10,
		marginTop: 5
	},
	gameListScoresText:{
		borderRadius: 5,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 5,
		paddingBottom: 5,
		marginLeft: 3,
		backgroundColor: '#888'
	},
	gameListQueue: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		marginBottom: 10,
		marginRight: 10,
	},
	gameListQueueText: {
		fontSize: 15,
		borderRadius: 5,
		color: '#fff',
		fontWeight: '500',
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 5,
		paddingTop: 5,
	},
	gameListQueueRival:{
		backgroundColor: "#e74c3c",
	},
	gameListQueueSelf: {
		backgroundColor: "#2ecc71",
	}
});
