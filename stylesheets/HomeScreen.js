import { StyleSheet } from 'react-native'
import colors from '../utils/Colors'
import fontSizes from '../utils/FontSizes'

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1
  },
  laodingText: {
    fontFamily: 'whitney-medium',
    fontSize: fontSizes.bodySize,
  },
	container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    height: undefined,
    width: undefined,
  },
  menuContainer: {
    backgroundColor: 'rgba(255,255,255, 0.9)',
    width: '90%',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    flex: 1,
    width: '66%',
    justifyContent: "flex-end"
  },
  welcomeMessageContainer: {
    flex: 1,
    width: '90%',
    alignItems: 'flex-end'
  },
  welcomeMessageImage: {
    flex: 1,
    width: '100%',
    aspectRatio: 486/637,
    resizeMode: 'cover',
    marginTop: 10,
  },
  ummnhLightBlue: {
    color: '#00b6f1'
  },
  ummnhDarkBlue: {
    color: '#00274c'
  },
  whitneyBlack: {
    fontFamily: "whitney-black"
  },
  whitneyMedium: {
    fontFamily: "whitney-medium"
  },
  welcomeBig: {
    fontSize: 36,
    color: colors.ummnhLightBlue,
    fontFamily: "whitney-black"
  },
  welcomeMed: {
    fontSize: 32,
    color: colors.ummnhLightBlue,
    fontFamily: "whitney-black"
  },
  welcomeSmall: {
    fontSize: 28,
    color: colors.ummnhLightBlue,
    fontFamily: "whitney-black"
  },
  copyReg: {
  	color: colors.ummnhDarkBlue,
  	fontFamily: 'whitney-medium',
  },
  copyBold: {
  	color: colors.ummnhDarkBlue,
  	fontFamily: 'whitney-black'
  },
  spacer: {
  	height: 10
  },
  safeAreaView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default styles