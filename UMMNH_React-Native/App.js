import React from 'react';
import { View, Text } from 'react-native'
import { createStackNavigator, createAppContainer, StackActions } from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import HighlightsTourPreview from './screens/HighlightsTourPreview';
import TourNavigationScreen from './screens/TourNavigationScreen';
import ShowOnMapScreen from './screens/ShowOnMapScreen';
import TourStopScreen from './screens/TourStopScreen';
import ExitScreen from './screens/ExitScreen';
import ImageGalleryScreen from './screens/ImageGalleryScreen'
import TodayAtUMMNHScreen from './screens/TodayAtUMMNHScreen'


export default class  App  extends React.Component {
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
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack)