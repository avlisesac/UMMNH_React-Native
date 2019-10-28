import React from 'react';
import { View, Text, AsyncStorage } from 'react-native'
import { Notifications, ScreenOrientation, AppLoading } from 'expo'
import { createStackNavigator, createAppContainer, StackActions } from 'react-navigation'
import { useScreens } from 'react-native-screens'
import Constants from 'expo-constants'

import * as Permissions from 'expo-permissions'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font';

import { firebaseApp } from './firebase-config'

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import HighlightsTourPreview from './screens/HighlightsTourPreview';
import TourNavigationScreen from './screens/TourNavigationScreen';
import ShowOnMapScreen from './screens/ShowOnMapScreen';
import TourStopScreen from './screens/TourStopScreen';
import ExitScreen from './screens/ExitScreen';
import ImageGalleryScreen from './screens/ImageGalleryScreen'
import TodayAtUMMNHScreen from './screens/TodayAtUMMNHScreen'
import EndOfTourScreen from './screens/EndOfTourScreen'

const YOUR_PUSH_TOKEN = '';

useScreens()
changeScreenOrientation()

cacheFonts = (fonts) => {
    console.log('trying to load fonts...')
    return fonts.map(font => Font.loadAsync(font))
}

cacheImages = (images) => {
  return images.map(image => {
    return Asset.fromModule(image).downloadAsync()
  })
}

export default class App extends React.Component {

  state = {
    notification: {},
    isReady: false,
  }

  constructor(props){
    super(props)

    if(Text.defaultProps == null){
      Text.defaultProps = {}
    }
    Text.defaultProps.allowFontScaling = false;
  }

  componentDidMount(){
    this.registerForPushNotificationsAsync()
    this.checkForFirstLaunch()
  }

  checkForFirstLaunch = async () => {
    AsyncStorage.getItem("hasLaunched").then(value => {
      if(value == null){
        AsyncStorage.setItem("hasLaunched", "true")
        let targetDB = firebaseApp.database().ref('analytics/')

        let incrementValue = targetDB.once('value').then(function(snapshot){

          //Get current count
          let currentValue = snapshot.val()['first-launch']

          console.log(currentValue, typeof currentValue)


          //Increment by one
          let newValue = currentValue += 1

          console.log(newValue)

          //Set as new DB value
          targetDB.update({
            ['first-launch']: newValue
          })

        })

      } else {
        console.log('not first launch')
      }
    })
  }

  registerForPushNotificationsAsync = async () => {

    if(Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      )

      let finalStatus = existingStatus
      
      if(existingStatus !== 'granted'){
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        )
        finalStatus = status
      }

      if(finalStatus !== 'granted'){
        console.log('access not granted for push notifs')
      }

      let token = await Notifications.getExpoPushTokenAsync()
      let deviceID = Constants.installationId
      let targetDB = firebaseApp.database().ref('pushTokens/' + deviceID)

      console.log('device id:', deviceID)
      console.log('expo push token:', token)

      targetDB.set({
        pushToken: token
      })
      

    } else {
      //alert('Must use physical device for Push Notifications')
    }
  }

  render(){
    if(!this.state.isReady){
      return (
        <AppLoading
          startAsync = { this._loadAssetsAsync }
          onFinish = { () => this.setState({ isReady: true })}
          onError = { console.warn }
        />
      )
    }

    return (
      <AppContainer />
    );
  }

  _loadAssetsAsync = async () => {
    
    const fontAssets = cacheFonts([
      { 'whitney-black' : require ('./assets/fonts/Whitney-Black.otf') },
      { 'whitney-medium' : require ('./assets/fonts/Whitney-Medium.otf') },
      { 'whitney-semibold' : require ('./assets/fonts/Whitney-Semibold.otf') },
      { 'whitney-medium-italic': require ('./assets/fonts/Whitney-MediumItal.otf') },
      { 'whitney-black-italic': require('./assets/fonts/Whitney-BlackItal.otf') },
    ])

    const imageAssets = cacheImages([
      //require('./assets/img/home_background.png'),
      //require('./assets/img/HeroImage_Doli.png'),

      //Home Background
      'https://firebasestorage.googleapis.com/v0/b/ummnh-app.appspot.com/o/home_background.png?alt=media&token=b18b5fff-2cf9-48f8-a099-25a6d4040bba',

      //Hero Images
        //Mastodons
        'https://drive.google.com/file/d/1ym9y6gE6FncG2CxaULAqhK46uUjf4AZF/view?usp=sharing',
        //Fossil Prep Lab
        'https://drive.google.com/file/d/1YQLHJUwd9-nF2TmtTFpouJLnZ9yXTaBh/view?usp=sharing',
        //Tree of Life
        'https://drive.google.com/file/d/1gsxLSGDYMx90MK8bfWy54HnsgxTN9d-i/view?usp=sharing',
        //Evolution
        'https://drive.google.com/file/d/1Zs9lICSIrM48cWIClpqWCb_Ne7G7lRLO/view?usp=sharing',
        //Whales
        'https://drive.google.com/file/d/1JPCZ0Xc-rU_ahlwelFPArUy-J27DKCSx/view?usp=sharing',
        //Majungasaurus
        'https://drive.google.com/file/d/18lvoz5pbA9JOcCgDEDoQ1uXGZBlNUXKP/view?usp=sharing',
        //Doli
        'http://drive.google.com/uc?export=view&id=1yW3qtC5cLYkgptEp8_zW-WTDdsSaX5z6',
        //Sediba
        'https://drive.google.com/file/d/1B1lCwxEhWYeXRVPrtLK5X-NyIVSYZZMa/view?usp=sharing',
        //Quetz
        'https://drive.google.com/file/d/1ofxaZVgO_6L45bdFHKp3byFav5L24ojm/view?usp=sharing',
        //Dynamic Planet
        'https://drive.google.com/file/d/1C8xS5dpEMSPiyvVdyIU9SG-2nlozwz2w/view?usp=sharing',

      //Gallery Images
        //Doli
          //1
          'https://drive.google.com/open?id=1cG-0HtzEXPfusDWRnPS0kk1n7JV10qh2',

      //Navigation Images
    ])

    await Promise.all([...fontAssets, ...imageAssets])
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
    Tours: HighlightsTourPreview,
    Navigation: TourNavigationScreen,
    ShowOnMap: ShowOnMapScreen,
    TourStop: TourStopScreen,
    Exit: ExitScreen,
    ImageGallery: ImageGalleryScreen,
    TodayAtUMMNH: TodayAtUMMNHScreen,
    EndOfTour: EndOfTourScreen,
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack)

async function changeScreenOrientation(){
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
}

