import { StyleSheet } from 'react-native'
import fontSizes from '../utils/FontSizes'
import colors from '../utils/Colors'

const styles = StyleSheet.create({
	scrollView: {
	},
	view: {
		flex: 1,
		alignItems: 'center'
	},
	mainContainer: {
		marginTop: '5%',
		marginBottom: '5%',
		width: '90%',
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
	subheaderContainer: {
		marginTop: 5,
		flexDirection: 'row'
	},
	subheader: {
		marginLeft: 5
	},
	TLASContainer: {
		backgroundColor: colors.ummnhLightGreen,
		alignItems: 'center'
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
		fontSize: fontSizes.subheaderSize,
		lineHeight: (fontSizes.subheaderSize * 1.25)
	}
})

export default styles