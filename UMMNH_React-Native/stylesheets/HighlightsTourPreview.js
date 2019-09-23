import React from 'react'
import { StyleSheet } from 'react-native'
import fontSizes from '../utils/FontSizes'
import colors from '../utils/Colors'

const styles = StyleSheet.create({
	view: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	mainContainer: {
		width: '90%',
		flex: 1,
		marginTop: 10,
		marginBottom: 10,
	},
	upperContent: {
		flex: 2,
	},
	lowerContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonContainer: {
		flex: 1,
		width: '66%',
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
		backgroundColor: 'grey'
	},
	heroImage: {
		flex: 1,
		height: null,
		width: null,
		resizeMode: 'cover'
	},
	descriptionContainer: {
		marginTop: 10,
		flex: 1,
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
})

export default styles