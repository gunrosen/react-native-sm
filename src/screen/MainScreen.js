import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Account from './Account';
import History from './History';
import Notification from './Notification';

const AppNavigator = createBottomTabNavigator({
        Home: {  screen: Home  },
        History: {  screen: History },
        Notification: {  screen: Notification },
        Account: {  screen: Account },
    });

const AppContainer = createAppContainer(AppNavigator);

class MainScreen extends Component<Props> {
  render() {
    return (
          <View style={styles.container}>
                return <AppContainer/>;
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

export default createAppContainer(AppNavigator);
