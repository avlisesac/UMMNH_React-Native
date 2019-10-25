import { StyleSheet } from 'react-native'
import fontSizes from '../utils/FontSizes'
import colors from '../utils/Colors'

const styles = StyleSheet.create({
	outerView: {
		flex: 1,
		alignItems: 'center',
	},
	mainContainer: {
		flex: 1,
		width: '90%',
		marginTop: 10,
		marginBottom: 10,
	},
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	loadingText: {
		fontFamily: 'whitney-medium',
		fontSize: fontSizes.bodySize,
		marginTop: 10
	},
	exitButtonStyle: {
		backgroundColor: 'rgba(0,0,0,0)'
	},
	exitButtonTitleStyle: {
		color: colors.ummnhDarkBlue
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
		fontSize: 65,
		color: 'white',
		textShadowColor: 'black',
		textShadowOffset: {
			with: 1.5,
			height: 1.5
		},
		textShadowRadius: 1,
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
		width: '66%',
		height: 300,
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
		fontSize: fontSizes.headerSize
	},
	bodyCopy: {
		fontSize: fontSizes.bodySize,
		marginTop: 5,
		fontFamily: 'whitney-medium',
		textAlign: 'justify',
		lineHeight: (fontSizes.bodySize * 1.25)
	},
	safeAreaView: {
		flex: 1,
	},

})

export default styles