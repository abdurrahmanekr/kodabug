export default function gameQuestionWinCss() {
	return {
		body: {
			flex: 1,
			backgroundColor: '#ceffcc'
		},
		center_card: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'center',
		},
		win_text_container: {
			alignItems: 'center'
		},
		win_text: {
			color: '#444',
			margin: 15,
		},
		win_buttons: {
			flexDirection: 'row',
			justifyContent: 'center',
			margin: 15,
		},
		win_button1: {
			backgroundColor: '#ef473a',
			padding: 15,
			paddingLeft: 30,
			paddingRight: 30,
			borderBottomLeftRadius: 15,
			borderTopLeftRadius: 15,
			alignItems: 'center'
		},
		win_button2: {
			backgroundColor: '#33cd5f',
			padding: 15,
			paddingLeft: 30,
			paddingRight: 30,
			borderBottomRightRadius: 15,
			borderTopRightRadius: 15,
			alignItems: 'center'
		},
		win_button_text: {
			color: '#fff',
		}
	}
}
