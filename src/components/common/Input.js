import React from 'react';
import {TextInput, View, Text } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) =>{
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput value ={value}
                      placeholder={placeholder}
                      autoCorrect={false}
                      onChangeText={onChangeText}
                      secureTextEntry={secureTextEntry}
                      style={styles.inputStyle}
            />
        </View>

    )
};

const styles = {
      inputStyle:{
          paddingLeft: 5,
          paddingRight: 5,
          fontSize: 18,
          lineHeight: 23,
          flex:2,
          color: 'black',
      },
      labelStyle:{
          fontSize: 18,
          paddingLeft: 20,
          flex: 1,
          alignSelf:'center'
      },
      containerStyle:{
          flexDirection: 'row',
          flex:1,
          alignItems: 'center'
      }
};
export { Input }
