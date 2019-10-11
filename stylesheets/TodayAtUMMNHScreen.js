import { StyleSheet } from 'react-native'
import fontSizes from '../utils/FontSizes'
import colors from '../utils/Colors'

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1
	},
	listItem: {
		marginTop: 10,
		width: '90%',
		alignSelf: 'center',
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		paddingBottom: 10
	},
	title: {
		fontSize: fontSizes.headerSize,
		fontFamily: 'whitney-black',
	},
	time: {
		fontSize: fontSizes.subheaderSize,
		fontFamily: 'whitney-semibold'
	},
	description: {
		fontSize: fontSizes.bodySize,
		fontFamily: 'whitney-medium',
		textAlign: 'justify',
		lineHeight: (fontSizes.bodySize * 1.25)
	},
	notifContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '90%',
		alignSelf: 'center',
	},
	notifText: {
		fontFamily: 'whitney-medium',
		textAlign: 'center',
		fontSize: fontSizes.bodySize,
		lineHeight: (fontSizes.bodySize * 1.25),
		marginTop: 10,
		width: '80%',
	},
	buttonContainer: {
		width: '66%',
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	buttonStyle: {
		backgroundColor: colors.ummnhYellow,
		marginBottom: 10,
		marginTop: 10,
	},
	buttonTitleStyle: {
		fontFamily: 'whitney-black',
		fontSize: fontSizes.headerSize,
		color: colors.ummnhDarkBlue,
	},
	webLinkHolder: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center'
	}
})

export default styles