import React from 'react';
import { View, Text } from 'react-native'
import HomeScreen from './screens/HomeScreen';
import * as Font from 'expo-font';
import { createStackNavigator, createAppContainer } from 'react-navigation';


class  App  extends React.Component {
  state = {
    fontLoaded: false
  };
  async componentWillMount(){
    try {
      await Font.loadAsync({
        'whitney-black' : require ('./assets/fonts/Whitney-Black.otf'),
        'whitney-medium' : require ('./assets/fonts/Whitney-Medium.otf'),
        'whitney-semibold' : require ('./assets/fonts/Whitney-Semibold.otf'),
      });
      this.setState({fontLoaded: true});
    } catch (error) {
      console.log('error loading fonts', error)
    }
  }
  render() {
    if (!this.state.fontLoaded) {
      return <Text>Loading...</Text>;
    }
    return (
      <HomeScreen />
    );  
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App
  }
});

export default createAppContainer(AppNavigator);

