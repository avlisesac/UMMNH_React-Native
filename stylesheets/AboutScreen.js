import { StyleSheet } from 'react-native'
import colors from '../utils/Colors'
import fontSizes from '../utils/FontSizes'

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: "100%",
		alignItems: 'center',
		marginTop: '5%'
	},
	textContainer : {
		width: "90%",
	},
	textStyling : {
		width: "100%"
	},
	sectionHeader: {
		fontFamily: "whitney-black",
		paddingTop: 10,
		paddingBottom: 10,
		fontSize: fontSizes.headerSize,
	},
	sectionContent: {
		fontFamily: "whitney-medium",
		paddingBottom: 10,
		fontSize: fontSizes.bodySize,
		textAlign: 'justify',
		lineHeight: (fontSizes.bodySize * 1.25)
	},
	socMedHolder: {
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	buttonStyle: {
		backgroundColor: colors.ummnhYellow,
		marginRight: 10,
		width: 60
	},
	donationButtonStyle: {
		backgroundColor: colors.ummnhYellow,
		width: '66%',
		alignSelf: 'center',
		marginBottom: 20,
	},
	buttonTitleStyle: {
		color: colors.ummnhDarkBlue,
		fontFamily: 'whitney-black',
		fontSize: fontSizes.headerSize
	},
	safeAreaView: {
		flex: 1,
		//backgroundColor: 'red'
	}
})

export default styles