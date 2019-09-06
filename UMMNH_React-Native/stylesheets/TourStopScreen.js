import { StyleSheet } from 'react-native'
import fontSizes from '../utils/FontSizes'
import colors from '../utils/Colors'

const styles = StyleSheet.create({
	scrollView: {
	},
	view: {
		flex: 1,
		alignItems: 'center'
	},
	mainContainer: {
		marginTop: '5%',
		marginBottom: '5%',
		width: '90%',
		backgroundColor: 'red',
	},
	heroHolder: {
		width: '100%',
		aspectRatio: 1920/1080,
		backgroundColor: 'grey'
	},
	heroImage: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'contain'
	},
	subheaderContainer: {
		marginTop: 5,
		flexDirection: 'row'
	},
	subheader: {
		marginLeft: 5
	}
})

export default styles