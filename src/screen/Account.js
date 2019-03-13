/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { NativeModules, StyleSheet, Text, View, TouchableWithoutFeedback ,ToastAndroid} from 'react-native';


export default class Account extends Component {
  showToast = () => {
    console.log('Clicked');
    NativeModules.Toast.show('Awesome work', NativeModules.Toast.SHORT);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Account Screen</Text>
        <TouchableWithoutFeedback onPress={this.showToast.bind(this)}>
          <Text>ClickMe!!</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
