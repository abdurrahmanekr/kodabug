export default function mainCss() {
	return {
		body: {
			flex: 1,
		},
		modal: {
			padding: 10,
			margin: 15,
			flex: 1,
			backgroundColor: 'rgba(255, 255, 255, 0.9)',
			borderColor: '#999',
			borderWidth: 1,
			borderRadius: 5
		},
		closeModal: {
			position: 'absolute',
			right: -10,
			top: -10,
			fontSize: 15,
			borderRadius: 50,
			paddingTop: 6,
			paddingLeft: 14,
			paddingRight: 14,
			paddingBottom: 10,
			backgroundColor: '#333',
			color: "#eee",
			zIndex: 100
		},
		questionInput: {
			borderWidth: 1,
			borderColor: "rgba(0, 0, 0, 0.25)",
			marginBottom: 6,
			padding: 7,
			borderRadius: 5
		},
		answers: {
			flexDirection: 'row'
		},
		correctAnswer: {
			backgroundColor: "#2ecc71",
			flexDirection: 'column',
			flex: 1
		},
		answerInputs: {
			position: 'absolute',
			left: -9999
		},
		answersBox: {
			borderWidth: 1,
			borderColor: "#999",
			flex: 1,
			flexDirection: 'row',
			borderRadius: 10,
			marginBottom: 6,
			padding: 7
		},
		headerText: {
			fontSize: 16,
			marginTop: 10,
			marginBottom: 10,
			marginLeft: 5,
			marginRight: 5

		}
	}
}
