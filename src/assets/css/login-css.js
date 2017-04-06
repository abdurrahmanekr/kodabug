export default function loginCss() {
	return {
		body: {
			flex: 1,
			justifyContent: "center",
		},
		login_container: {
			flex: 1,
			padding: 25
		},
		logo_container: {
			alignItems: "center",
		},
		logo: {
			width: 180,
			height: 180,
		},
		signup: {
			flexDirection: 'row',
			justifyContent: "center",
			alignItems: "center"
		},
		input: {
			borderWidth: 1,
			borderColor: '#ccc',
			padding: 5,
			paddingLeft: 20,
			borderRadius: 5,
			marginBottom: 15
		},
		login_button: {
			padding: 15,
			alignItems: 'center',
			backgroundColor: '#387ef5',
			borderRadius: 5
		},
		login_button_text: {
			color: '#fff'
		},
		try_text: {
			fontFamily: 'monospace',
			color: '#666',
			marginBottom: 5,
		},
		catch_text_container: {
			marginTop: 5,
			flexDirection: 'row',
		},
		catch_text: {
			fontFamily: 'monospace',
			color: '#387ef5',
			marginLeft: 10,
			marginRight: 10
		},
		signup_text: {
			fontFamily: 'monospace',
			color: '#387ef5',
			marginLeft: 5,
			marginRight: 5
		},
		footer: {
			height: 50,
			backgroundColor: '#e8e8e8',
			justifyContent: "center",
		}
	}
}
