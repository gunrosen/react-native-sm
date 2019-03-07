import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';

const ImageWithCaption = (props) => {

    const {
      containerStyle,
      imageStyle,
      textContentStyle,
      textHeaderStyle,
      textDetailStyle,
      textHeader,
      textDetail,
      imageSrc
    } = props;
  
    return (
      <View style={[containerStyle]}>
        <ImageBackground style={[styles.imageStyle, imageStyle]}
          source={imageSrc}  
          resizeMode='stretch'>
        <View style={[styles.textContentStyle, textContentStyle]}>
          <Text style={[styles.textHeaderStyle, textHeaderStyle]}>{textHeader}</Text>
          <Text style={[styles.textDetailStyle, textDetailStyle]}>{textDetail}</Text>
        </View>
        </ImageBackground>
      </View>

    );
}

const styles = {
  imageStyle: {
    height: 80,
    flex:1,
    alignSelf: 'stretch',
  },
  textContentStyle: {
    position:'absolute',
    left: 10,
    bottom:10,
  },
  textHeaderStyle: {
    color: 'white',
    fontWeight:'bold',
    fontSize:14
  },
  textDetailStyle: {
    color:'white',
    fontSize:14
  }
}
export {ImageWithCaption}