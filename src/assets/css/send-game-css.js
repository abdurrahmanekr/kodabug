export default function sendGameCss() {
	return {
		body: {
			flex: 1,
			padding: 15,
			backgroundColor: 'rgba(255, 255, 255, 0.9)',
			justifyContent: 'center'
		},
		headerText: {
			fontSize: 16,
			marginTop: 10,
			marginBottom: 10,
			marginLeft: 5,
			marginRight: 5

		},
		questionInput: {
			borderWidth: 1,
			borderColor: "rgba(0, 0, 0, 0.25)",
			marginBottom: 6,
			padding: 7,
			borderRadius: 5
		},
		answers: {
			flexDirection: 'row',
		},
		answerInputs: {
			flex: 8,
			flexDirection: 'column',
			borderWidth: 1,
			borderColor: "rgba(0, 0, 0, 0.25)",
			marginBottom: 6,
			padding: 7,
			borderRadius: 5
		},
		correctAnswerInput: {
			borderColor: "#ff843c"
		},
		answerRadioButton: {
			flex: 1,
			flexDirection: 'column',
			marginRight: 6,
			marginBottom: 6,
			borderWidth: 1,
			borderColor: "rgba(0, 0, 0, 0.25)",
			borderRadius: 5,
		},
		correctAnswerRadioButton: {
			backgroundColor: "#ff843c"
		}
	}
}
