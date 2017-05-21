/**
 * @providesModule @kodabug/style/settings
 */
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
	body: {
		flex: 1,
		marginTop: 50
	},
	list: {
		borderBottomWidth: 0,
		borderTopWidth: 0,
		marginTop: 0
	},
	list_view: {
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
		alignItems: 'center'
	},
	list_input: {
		padding: 10,
		paddingTop: 4,
		zIndex: 99,
		height: 40
	},
	new_server_input: {
		flex: 1,
		height: 40,
		paddingLeft: 10,
		marginLeft: 10,
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 10,
		width: 200
	},
	select_item: {
		height: 70
	},
	select_item_ios: {
		height: 80
	},
	server_save: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 25,
		paddingBottom: 25,
		borderTopWidth: 1,
		borderTopColor: '#eee'
	},
	server_save_button: {
		padding: 10,
		paddingRight: 20,
		paddingLeft: 20,
		alignItems: 'center',
		backgroundColor: '#0097a7',
		borderRadius: 5,
		marginLeft: 10,
		marginRight: 10
	},
	server_button_text: {
		color: '#fff',
		fontSize: 15
	},
	server_new_bottom: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	themeSection:{
		width:'100%'
	},
	sectionHeader:{
		paddingTop:8,
		paddingBottom:8,
		width:'100%',
		textAlign:'center',
		backgroundColor:'#f9f9f9',
		color:'#4e7b92',
		fontSize:15,
		alignSelf:'center',
		marginTop:50
	},
	applyButton:{
		width:120,
		height:40,
		alignSelf:'center',
		flexDirection:'column',
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#587e94',
		borderRadius:5
	}
});
