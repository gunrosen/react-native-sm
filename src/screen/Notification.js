/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  Animated, TouchableHighlight,
  ScrollView, Easing, StyleSheet, Text, View
} from 'react-native';

const arr = []
for (var i = 0; i < 200; i++) {
  arr.push(i)
}

export default class Notification extends Component {
  constructor() {
    super()
    this.animatedValue = []
    arr.forEach((value) => {
      this.animatedValue[value] = new Animated.Value(0)
    })
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    arr.forEach((value) => {
      this.animatedValue[value].setValue(0);
    })

    const animations = arr.map((item) => {
      return Animated.timing(
        this.animatedValue[item],
        {
          toValue: 1,
          duration: 50
        }
      )
    })
    Animated.stagger(10, animations).start()
  }

  render() {
    const animations = arr.map((a, i) => {
      return <Animated.View key={i} style={{ opacity: this.animatedValue[a], height: 20, width: 20, backgroundColor: i % 2 == 0 ? 'red' : 'blue', marginLeft: 3, marginTop: 3 }} />
    })

    return (
      <View style={styles.container}>
        {animations}
        <Text style={{ color: 'black' }} onPress={this.animate.bind(this)}>Again</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    backgroundColor: 'blue'
  }
});

