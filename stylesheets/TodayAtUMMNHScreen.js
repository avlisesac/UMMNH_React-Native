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
		alignSelf: 'center'
	},
	notifText: {
		fontFamily: 'whitney-medium',
		textAlign: 'justify',
		fontSize: fontSizes.bodySize,
		lineHeight: (fontSizes.bodySize * 1.25),
		marginBottom: 10
	},
	buttonStyle: {
		backgroundColor: colors.ummnhYellow
	},
	buttonTitleStyle: {
		fontFamily: 'whitney-black',
		fontSize: fontSizes.headerSize,
		color: colors.ummnhDarkBlue,
		width: '66%'
	}
})

export default styles