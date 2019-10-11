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
      require('./assets/img/home_message.png'),
      require('./assets/img/home_background.png'),
      require('./assets/img/HeroImage_Doli.png'),
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

