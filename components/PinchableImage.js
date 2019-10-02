import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, Dimensions } from 'react-native';

import {
  PanGestureHandler,
  PinchGestureHandler,
  RotationGestureHandler,
  State,
} from 'react-native-gesture-handler';

export class PinchableImage extends React.Component {

  panRef = React.createRef();
  pinchRef = React.createRef();

  constructor(props) {
    super(props);

    let { width } = Dimensions.get('window')

    /* Panning */
    this._translateX = new Animated.Value(0)
    this._translateY = new Animated.Value(0)
    this._lastOffset = { x: 0, y: 0 }
    this._onPanGestureEvent = Animated.event(
    	[
    		{
    			nativeEvent: {
    				translationX: this._translateX,
    				translationY: this._translateY,
    			},
    		},
    	],
    	{ useNativeDriver: true }
    )

    /* Pinching */
    this._baseScale = new Animated.Value(1);
    this._pinchScale = new Animated.Value(1);
    this._scale = Animated.multiply(this._baseScale, this._pinchScale);
    this._lastScale = 1;
    this._onPinchGestureEvent = Animated.event(
      [{ nativeEvent: { scale: this._pinchScale } }],
      { useNativeDriver: true }
    );

  }

  
  _onPinchHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this._lastScale *= event.nativeEvent.scale;
      this._baseScale.setValue(this._lastScale);
      this._pinchScale.setValue(1);
    }
  };

  _onPanHandlerStateChange = event => {
  	if (event.nativeEvent.oldState === State.ACTIVE){
  		this._lastOffset.x += event.nativeEvent.translationX
  		this._lastOffset.y += event.nativeEvent.translationY
  		this._translateX.setOffset(this._lastOffset.x)
  		this._translateX.setValue(0)
  		this._translateY.setOffset(this._lastOffset.y)
  		this._translateY.setValue(0)
  	}
  }

  render() {
    return (
    		<PinchGestureHandler
    			{ ...this.props }
    			ref = { this.pinchRef }
    			simultaneousHandlers = { this.panRef }
    			onGestureEvent = { this._onPinchGestureEvent }
    			onHandlerStateChange = { this._onPinchHandlerStateChange } >

    			<Animated.View style = { styles.wrapper } >

    				<PanGestureHandler 
    					ref = { this.panRef }
    					simultaneousHandlers = { this.pinchRef }
    					onGestureEvent = { this._onPanGestureEvent }
    					onHandlerStateChange = { this._onPanHandlerStateChange }>

    					<Animated.View style = { styles.container } collapsable = { false }>
    						<Animated.Image
    							style = {[
    								styles.thisImage,
    								{
    									transform: [
    										{ scale: this._scale },
    										{ translateX: Animated.divide(this._translateX, this._scale) },
    										{ translateY: Animated.divide(this._translateY, this._scale) },
    									]
    								}
    							]}
    							source = { this.props.image }
    						/>
    					</Animated.View>
    				</PanGestureHandler>
    			</Animated.View>
    		</PinchGestureHandler>
    	//</View>
    );
  }
}

export default PinchableImage;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: '100%',
		backgroundColor: 'red'
	},
	container: {
    	...StyleSheet.absoluteFillObject,
    	backgroundColor: 'white',
    	overflow: 'hidden',
    	alignItems: 'center',
    	flex: 1,
    	justifyContent: 'center',
    	width: '100%',
    },
    thisImage: {
  		flex: 1,
    	width: '100%',
    	resizeMode: 'contain',
    },
    wrapper: {
    	flex: 1,
    	width: '100%',
    	backgroundColor: 'purple'
  	},
});