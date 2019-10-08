import React, {Component} from 'react';
import {
  Animated,
  StyleSheet,
  View,
} from 'react-native';


export default class App extends Component{

  state ={
    ballY: new Animated.Value(0),
    ballX: new Animated.Value(0)
  }

  componentDidMount(){
    Animated.timing(this.state.ballY, {
      toValue: 600,
      duration: 1000,
    }).start()

    Animated.spring(this.state.ballX, {
      toValue: 100,
      bounciness: 35, 
    }).start()

    // Animated.decay(this.state.ballX, {
    //   velocity: 1
    // }).start()
  }
  render(){
    return (
      <View style={styles.container}>
        <Animated.View style={[
          styles.ball,
          { top: this.state.ballY, left: this.state.ballX}
          ]} />
      </View>
    );
  };
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },

  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F00'
  }
});
