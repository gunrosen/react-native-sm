/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './src/screen/Home';
import Account from './src/screen/Account';
import History from './src/screen/History';
import Notification from './src/screen/Notification';

type Props = {};
  const HomeIconWithBadge = (props) => {
  // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
}
const AppNavigator = createBottomTabNavigator({
        Home: {  screen: Home  },
        History: {  screen: History },
        Notification: {  screen: Notification },
        Account: {  screen: Account },
    }, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });


const AppContainer = createAppContainer(AppNavigator);

class App extends Component<Props> {
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
