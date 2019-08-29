import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import * as Font from 'expo-font';


export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: "Home",
		headerStyle: {
			backgroundColor: '#00b6f1'
		},
		headerTitleStyle: {
			color: '#00274c'
		},
		headerTintColor: '#00274c',
		headerBackTitle: "Back",
		headerBackTitleStyle: {
			color: '#00274c'
		}
	}

  	async componentWillMount(){
  	  try {
  	    await Font.loadAsync({
  	      'whitney-black' : require ('../assets/fonts/Whitney-Black.otf'),
  	      'whitney-medium' : require ('../assets/fonts/Whitney-Medium.otf'),
  	      'whitney-semibold' : require ('../assets/fonts/Whitney-Semibold.otf'),
  	    });
  	    this.setState({fontLoaded: true});

  	  } catch (error) {
  	    console.log('error loading fonts', error)
  	  }
  	}
  	
	state = {
    	fontLoaded: false
  	};

  	render() {
  	  if (!this.state.fontLoaded) {
  	    return <Text>Loading...</Text>;
  	  }
  	  return (
  	  	<View style={styles.container}>
    		  <StatusBar hidden />
    		  <ImageBackground style = { styles.backgroundImage } source = {require('../assets/img/home_background.png')}> 
    		    <View style = {styles.menuContainer}>
    		      <View style = {styles.welcomeMessage}>
    		        <Text style = {[styles.ummnhLightBlue, styles.whitneyBlack, styles.welcomeBig]}>Welcome</Text>
    		        <Text style = {[styles.ummnhLightBlue, styles.whitneyBlack, styles.welcomeSmall]}>to the brand new</Text>
    		        <Text style = {[styles.ummnhLightBlue, styles.whitneyBlack, styles.welcomeMed]}>University of Michigan</Text>
    		        <Text style = {[styles.ummnhLightBlue, styles.whitneyBlack, styles.welcomeBig]}>Museum of</Text>
    		        <Text style = {[styles.ummnhLightBlue, styles.whitneyBlack, styles.welcomeBig]}>Natural History</Text>
  		
      		          <Text style = {[styles.ummnhDarkBlue, styles.whitneyMedium]}>We celebrated our grand opening on</Text>
      		          <Text style = {[styles.ummnhDarkBlue, styles.whitneyBlack]}>April 14th, 2019.</Text>
      		          <Text style = {[styles.ummnhDarkBlue, styles.whitneyMedium]}>Please, enjoy your visit, and be sure to</Text>
      		          <Text style = {[styles.ummnhDarkBlue, styles.whitneyBlack]}>come back in November</Text>
      		          <Text style = {[styles.ummnhDarkBlue, styles.whitneyMedium]}>for our second grand opening.</Text>
      		          <Text style = {styles.ummnhDarkBlue}> </Text>
      		          <Text style = {[styles.ummnhDarkBlue, styles.whitneyMedium]}>There will be more to see, do, and</Text>
      		          <Text style = {[styles.ummnhDarkBlue, styles.whitneyBlack]}>discover!</Text>
      		        </View>
      		        <View style = {styles.buttonContainer}>
      		          <View style = {{paddingBottom: 10}}>
      		            <Button 
      		            title = "Tours" 
      		            buttonStyle = {{backgroundColor: "#ffcb05"}} 
      		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}/>
      		          </View>
      		          <View style = {{paddingBottom: 10}}>
      		            <Button 
      		            title = "Today @ UMMNH"
      		            buttonStyle = {{backgroundColor: "#ffcb05"}} 
      		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}/>
      		          </View>
      		          <View style = {{paddingBottom: 10}}>
      		            <Button 
      		            title = "Map" 
      		            buttonStyle = {{backgroundColor: "#ffcb05"}} 
      		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}/>
      		          </View>
      		          <View style = {{paddingBottom: 20}}>
      		            <Button 
      		            title = "About" 
      		            buttonStyle = {{backgroundColor: "#ffcb05"}} 
      		            titleStyle = {{fontFamily : "whitney-black", color: "#00274c", fontSize: 22}}
      		            onPress = {() => this.props.navigation.navigate('About')}/>
      		          </View>
      		        </View>
      		      </View>
      		  </ImageBackground>
      		</View>
  	  	);  
  	}
}

const styles = StyleSheet.create({
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuContainer: {
    //flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.9)',
    width: '90%',
    height: '95%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    flex: 1,
    width: '66%',
    justifyContent: "flex-end"
  },
  welcomeMessage: {
    width: '90%',
    alignItems: 'flex-end'
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
    fontSize: 36
  },
  welcomeMed: {
    fontSize: 32
  },
  welcomeSmall: {
    fontSize: 28
  },
});