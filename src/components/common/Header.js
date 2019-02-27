import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native'


const Header = (props) =>{
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.text}</Text>
    </View>
  )
};



const styles = StyleSheet.create({
    viewStyle:{
      backgroundColor: '#f8f8f8',
      justifyContent: 'flex-start',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset:{width:0, height: 20},
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    textStyle:{
      color: 'black',
      fontSize: 16,
      padding: 8
    }
});

export {Header}
