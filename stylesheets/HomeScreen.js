import { StyleSheet, Dimensions } from 'react-native'
import colors from '../utils/Colors'
import fontSizes from '../utils/FontSizes'

const { width, height } = Dimensions.get('window')

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
    justifyContent: "flex-end",
    //backgroundColor: 'purple',
  },
  welcomeMessageContainer: {
    flex: 1,
    paddingTop: 10,
    width: '90%',
    alignItems: 'flex-end',
    //backgroundColor: 'red'
  },
  bigWords: {
    flex: 1,
    //backgroundColor: 'blue',
    width: '100%',
    justifyContent: 'flex-end'
  },
  bigWordsInnerContainer: {

  },
  bigWordsText: {
    fontFamily: 'whitney-black',
    color: colors.ummnhLightBlue,
    textAlign: 'right'
  },
  bigBig: {
    //flex: 2,
    fontSize: fontSizes.welcomeBigBig
  },
  bigNormal: {
    //flex: 1,
    fontSize: fontSizes.welcomeBigMed
  },
  smallWords: {
    flex: 1,
    //backgroundColor: 'green',
    width: '100%',
  },
  smallWordsInnerContainer: {

  },
  smallWordsText: {
    color: colors.ummnhDarkBlue,
    textAlign: 'right',
    //flex: 1,
    fontSize: fontSizes.welcomeBody
  },
  smallNormal: {
    fontFamily: 'whitney-medium',
  },
  smallBold: {
    fontFamily: 'whitney-black',
  },
  welcomeMessageImage: {
    flex: 1,
    width: '100%',
    aspectRatio: 486/637,
    resizeMode: 'contain',
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