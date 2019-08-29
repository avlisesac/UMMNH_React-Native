import React from 'react';
import { Text } from 'react-native'
import HomeScreen from './screens/HomeScreen';
import * as Font from 'expo-font';


export default class  App  extends React.Component {
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
      console.log("presenting home screen..."),
      console.log(" "),
      <HomeScreen />
    );  
  }
}


