import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}
    onPress={props.onPress}>
          <Text style={styles.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );

};

const styles = {
    buttonStyle:{
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderColor: '#007aff',
      borderRadius: 5,
      borderWidth: 1,
      marginLeft: 5,
      marginRight: 5
    },
    textStyle:{
      alignSelf: 'center',
      color: '#007aff',
      fontWeight: '600',
      fontSize: 16,
      paddingTop: 10,
      paddingBottom: 10
    }

};
export { Button };
