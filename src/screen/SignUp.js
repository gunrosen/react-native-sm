import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class SignUp extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30}}>
          If you like React, you'll also like React Native.
        </Text>
        <Text style={{padding:10,fontSize:30}}>
          Instead of 'div' and 'span', you'll use native components
          like 'View' and 'Text'.
        </Text>
      </View>
    );
  }
}