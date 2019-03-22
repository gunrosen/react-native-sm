import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  red: {
    color: 'red',
  },
  blue: {
    color: 'blue',
  }
});

export default class SignUp extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>
          Heading
        </Text>
        <Text style={styles.red}>
          Red text
        </Text>
        <Text style={styles.blue}>
          Blue text
        </Text>
        <Text style={[styles.heading, styles.red]}>
          Blue Heading
        </Text>
      </View>
    );
  }
}