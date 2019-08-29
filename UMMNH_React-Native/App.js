import React from 'react';
import { View, Text } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';


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
    About: AboutScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack)