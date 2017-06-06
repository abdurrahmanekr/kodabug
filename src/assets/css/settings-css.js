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
	},
	set_profile_save_button: {
		marginTop: -5
	},
	set_profile_image: {
		alignSelf: 'center',
		width: 120,
		height: 120,
		margin: 20,
		marginBottom: 10
	},
	set_profile_image_text: {
		alignSelf: 'center',
		marginBottom: 10,
		fontSize: 15
	},
	set_profile_input: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 5,
		paddingLeft: 20,
		borderRadius: 5,
		marginBottom: 15,
		minHeight: 40,
		flex: 1,
		marginLeft: 10
	},
	set_profile_input_icon: {
		width: 30
	},
	set_profile_label: {
		paddingLeft: 15,
		paddingRight: 15,
		marginTop: 10,
		flexDirection: 'row',
	}
});
