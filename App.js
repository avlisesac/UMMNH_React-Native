import React from 'react';
import { View, Text } from 'react-native'
import { Notifications } from 'expo'
import { createStackNavigator, createAppContainer, StackActions } from 'react-navigation'
import { useScreens } from 'react-native-screens'
import Constants from 'expo-constants'

import * as Permissions from 'expo-permissions'

import { firebaseApp } from './firebase-config.js'

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

export default class App extends React.Component {

  state = {
    notification: {},
  }

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.registerForPushNotificationsAsync()
  }

  registerForPushNotificationsAsync = async () => {



    /*
    if(!firebase.apps.length){
      firebase.initializeApp(Constants.manifest.extra.firebaseConfig)  
    }
    */


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
      alert('Must use physical device for Push Notifications')
    }
  }

  render(){
    return (
      <AppContainer />
    );
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

