import { StyleSheet } from 'react-native'
import fontSizes from '../utils/FontSizes'
import colors from '../utils/Colors'

const styles = StyleSheet.create({
	view: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	mainContainer: {
		width: '90%',
		height: '95%',
	},
	upperArea: {
		flex: 2,
	},
	lowerArea: {
		flex: 1,
		alignItems: 'center'
	},
	navImage: {
		flex: 1,
		height: null,
		width: null,
		resizeMode: 'cover'
	},
	swipeContainer: {
		width: '100%',
		aspectRatio: 1920/1080,
		overflow: 'hidden',
		backgroundColor: 'grey'
	},
	buttonText: {
		color: 'white',
		fontSize: 65,
	},
	header: {
		color: colors.ummnhDarkBlue,
		fontSize: fontSizes.headerSize,
		fontFamily: 'whitney-black',
		marginTop: 10
	},
	subheaderContainer: {
		flexDirection: 'row',
		marginTop: 5,
	},
	subheaderText: {
		color: colors.ummnhDarkRed,
		fontSize: fontSizes.subheaderSize,
		fontFamily: 'whitney-semibold',
		marginLeft: 5
	},
	description: {
		fontSize: fontSizes.bodySize,
		marginTop: 5,
		fontFamily: 'whitney-medium',
		textAlign: 'justify',
		lineHeight: (fontSizes.bodySize * 1.25)
	},
	buttonContainer: {
		flex: 1,
		width: '66%',
		justifyContent: 'center',
		alignItems: 'stretch'
	},
	buttonStyle: {
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: colors.ummnhYellow
	},
	buttonTitleStyle: {
		color: colors.ummnhDarkBlue,
		fontFamily: 'whitney-black',
		fontSize: 22
	}

})

export default styles