export default function mainTabCss() {
	return {
		body: {
			flex: 1
		},
		header: {
			flex: 1,
			height: 10,
			flexDirection: 'row',
			backgroundColor: '#402000'
		},
		headerIconBox: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
		},
		iconText: {
			fontSize: 12,
			marginLeft: 5,
			paddingTop: 2.5,
			paddingBottom: 2.5,
			paddingLeft: 7.5,
			paddingRight: 7.5,
			borderRadius: 10,
			color: "#fff"
		},

		startGameArea: {
			flex: 4,
			backgroundColor: "#fff9e2",
			alignItems: 'center',
			margin: 10,
			marginBottom: 0,
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
		}
	}
}
