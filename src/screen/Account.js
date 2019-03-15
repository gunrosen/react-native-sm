/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { NativeModules, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableHighlight, AsyncStorage } from 'react-native';


export default class Account extends Component {

  showToast = () => {
    console.log('Clicked');
    NativeModules.Toast.show('Awesome work', NativeModules.Toast.SHORT);
  }

  logOut = () => {
    AsyncStorage.removeItem('AUTH').then(
      () => this.props.navigation.navigate('Login'),
      () => console.log('error')
    );
    ;
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <TouchableWithoutFeedback onPress={this.showToast.bind(this)}>
          <Text>ClickMe!!</Text>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this.logOut.bind(this)}>
          <Text>LOG OUT</Text>
        </TouchableHighlight> */}
                <Text>
          If you like React, you'll also like React Native.
        </Text>
        <Text>
          Instead of 'div' and 'span', you'll use native components
          like 'View' and 'Text'.
        </Text>

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
});
