import { StyleSheet } from 'react-native'
import fontSizes from '../utils/FontSizes'
import colors from '../utils/Colors'

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: '90%',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	exitText: {
		fontFamily: 'whitney-medium',
		fontSize: fontSizes.bodySize,
		lineHeight: (fontSizes.bodySize * 1.25),
		textAlign: 'justify'
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10,
		width: '100%',
	},
	buttonStyle: {
		backgroundColor: colors.ummnhYellow,
		width: 100,
		marginRight: 20,
		marginLeft: 20,
	},
	yesButtonTitleStyle: {
		fontFamily: 'whitney-black',
		fontSize: fontSizes.subheaderSize,
		color: colors.ummnhDarkBlue,
	},
	noButtonTitleStyle: {
		fontFamily: 'whitney-black',
		fontSize: fontSizes.subheaderSize,
		color: colors.ummnhDarkRed
	}
})

export default styles
