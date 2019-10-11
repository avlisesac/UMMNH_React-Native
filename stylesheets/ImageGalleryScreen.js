import { StyleSheet } from 'react-native'
import fontSizes from '../utils/FontSizes'

const styles = StyleSheet.create({
	wrapper: {
	},
	slideView: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	slideImage: {
		flex: 1,
		width: '100%',
		resizeMode: 'contain'
	},
	slideText: {
		marginTop: 10,
		marginBottom: 25,
		width: '90%',
		backgroundColor: 'rgba(255,255,255,0.5)',
		textAlign: 'center',
		fontFamily: 'whitney-medium',
		fontSize: fontSizes.bodySize
	},
	swiperButtonText: {
		fontSize: 65,
		color: 'white',
		textShadowColor: 'black',
		textShadowOffset: {
			with: 1.5,
			height: 1.5
		},
		textShadowRadius: 1,
	},
	testView: {
		backgroundColor: 'red',
		width: '100%',
		height: '100%',
	},
	safeAreaView: {
		flex: 1,
		//backgroundColor: 'red',
	},
})

export default styles