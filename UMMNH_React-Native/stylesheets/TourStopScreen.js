import { StyleSheet } from 'react-native'
import fontSizes from '../utils/FontSizes'
import colors from '../utils/Colors'

const styles = StyleSheet.create({
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
	scrollView: {
	},
	view: {
		flex: 1,
		alignItems: 'center'
	},
	mainContainer: {
		flex: 1,
		width: '90%',
		marginTop: 10,
		marginBottom: 10,
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
	imageGalleryButtonStyle: {
		position: 'absolute',
		bottom: 10,
		right: 10,
		marginLeft: 5,
		marginRight: 5,
		backgroundColor: colors.ummnhYellow,
	},
	header: {
		fontFamily: 'whitney-black',
		fontSize: fontSizes.headerSize,
		color: colors.ummnhDarkBlue,
		marginTop: 10
	},
	subheaderContainer: {
		marginTop: 5,
		flexDirection: 'row'
	},
	subheader: {
		marginLeft: 5,
		fontFamily: 'whitney-semibold',
		fontSize: fontSizes.subheaderSize,
		color: colors.ummnhDarkRed
	},
	shortDescription: {
		fontFamily: 'whitney-medium',
		textAlign: 'justify',
		fontSize: fontSizes.bodySize,
		lineHeight: (fontSizes.bodySize * 1.25),
		marginTop: 5
	},
	audioTourContainer: {
		backgroundColor: colors.ummnhLightBlue,
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 10,
		flex: 0
	},
	audioTourHeader: {
		fontFamily: 'whitney-black',
		fontSize: fontSizes.headerSize,
		color: colors.ummnhDarkBlue,
		marginTop: 5
	},
	buttonStyle: {
		backgroundColor: colors.ummnhYellow,
		marginLeft: 5,
		marginRight: 5,
		height: 45
	},
	buttonTitleStyle: {
		color: colors.ummnhDarkBlue,
		fontFamily: 'whitney-black',
		fontSize: fontSizes.subheaderSize,
		marginLeft: 10,
		marginRight: 10
	},
	audioTourButtonContainer: {
		flexDirection: 'row',
		alignItems: 'stretch',
		margin: 10
	},
	fullDescription: {
		fontFamily: 'whitney-medium',
		textAlign: 'justify',
		fontSize: fontSizes.bodySize,
		lineHeight: (fontSizes.bodySize * 1.25),
		marginTop: 10
	},
	TLASContainer: {
		backgroundColor: colors.ummnhLightGreen,
		alignItems: 'center',
		marginTop: 10,
		paddingTop: 10,
		paddingBottom: 10,
	},
	TLASHeader: {
		fontFamily: 'whitney-black',
		fontSize: fontSizes.headerSize,
		color: colors.ummnhDarkBlue,
	},
	TLASSubheader: {
		fontFamily: 'whitney-medium',
		fontSize: fontSizes.bodySize
	},
	TLASQuestionHolder: {
		width: '90%'
	},
	TLASButtonStyle: {
		backgroundColor: 'rgba(0,0,0,0)',
		paddingLeft: 0,
		paddingRight: 0
	},
	TLASButtonTitleStyle: {
		color: 'black',
		textAlign: 'justify',
		fontFamily: 'whitney-black',
		fontSize: fontSizes.bodySize,
		lineHeight: (fontSizes.bodySize * 1.25)
	},
	TLASAnswer: {
		textAlign: 'justify',
		fontFamily: 'whitney-medium',
		fontSize: fontSizes.bodySize,
		lineHeight: (fontSizes.bodySize * 1.25)
	},
	buttonContainer: {
		height: 150,
		width: '66%',
		justifyContent: 'center',
		alignSelf: 'center'
	},
})

export default styles