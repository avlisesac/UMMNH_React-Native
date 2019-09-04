import React from 'react'
import { StyleSheet } from 'react-native'
import fontSizes from '../utils/FontSizes'
import colors from '../utils/Colors'

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: 'center'
	},
	widthContainer: {
		flex: 1,
		width: '90%',
	},
	upperContent: {
		flex: 2,
	},
	lowerContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonStyle: {
		backgroundColor: colors.ummnhYellow,
		paddingLeft: 25,
		paddingRight: 25
	},
	buttonTitleStyle: {
		fontFamily: 'whitney-black',
		color: colors.ummnhDarkBlue,
		fontSize: 22,
	},
	heroImage: {
		marginTop: 10,
		width: '100%',
		height: undefined,
		aspectRatio: 16/9,
		backgroundColor: 'grey'
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
	}
})

export default styles