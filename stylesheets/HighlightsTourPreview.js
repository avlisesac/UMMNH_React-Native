import React from 'react'
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
	upperContent: {
		width: '100%',
	},
	lowerContent: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonContainer: {
		width: '66%',
		height: 150,
		justifyContent: 'center',
		alignItems: 'stretch'
	},
	buttonStyle: {
		backgroundColor: colors.ummnhYellow,
	},
	buttonTitleStyle: {
		fontFamily: 'whitney-black',
		color: colors.ummnhDarkBlue,
		fontSize: 22,
	},
	heroImageContainer: {
		width: '100%',
		aspectRatio: 1920/1080,
		//backgroundColor: 'grey'
	},
	heroImage: {
		flex: 1,
		height: null,
		width: null,
		resizeMode: 'contain'
	},
	descriptionContainer: {
		marginTop: 10,
	},
	header: {
		color: colors.ummnhDarkBlue,
		fontFamily: "whitney-black",
		fontSize: fontSizes.headerSize
	},
	subheaderContainer: {
		marginTop: 5,
		flexDirection: 'row'
	},
	subheaderText: {
		color: colors.ummnhDarkRed,
		fontFamily: 'whitney-semibold',
		fontSize: fontSizes.subheaderSize,
		marginLeft: 5
	},
	description: {
		fontFamily: 'whitney-medium',
		textAlign: 'justify',
		marginTop: 10,
		fontSize: fontSizes.bodySize,
		lineHeight: (fontSizes.bodySize * 1.25)
	},
	bodyCopy: {
		fontSize: fontSizes.bodySize,
		fontFamily: 'whitney-medium',
		textAlign: 'justify',
		marginTop: 10,
		lineHeight: (fontSizes.bodySize * 1.25)
	},
	safeAreaView: {
		flex: 1
	}
})

export default styles