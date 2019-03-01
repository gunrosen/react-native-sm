import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Account from './Account';
import History from './History';
import Notification from './Notification';
import colors from '../resources/colors';

const AppNavigator = createBottomTabNavigator({
        Home: {
          screen: Home,
          navigationOptions: () => ({
              tabBarIcon: ({tintColor}) => (
                    <Ionicons  name='ios-home' size={25} color={tintColor} />
              )
          })
        },
        History: {
          screen: History ,
          navigationOptions: () => ({
              tabBarIcon: ({tintColor}) => (
                    <Ionicons  name='ios-list-box' size={25}  color={tintColor}  />
              )
          })
        },
        Notification: {
          screen: Notification,
          navigationOptions: () => ({
              tabBarIcon: ({tintColor}) => (
                    <Ionicons  name='ios-notifications' size={25}  color={tintColor}  />
              )
          })
         },
        Account: {
          screen: Account,
          navigationOptions: () => ({
              tabBarIcon: ({tintColor}) => (
                    <Ionicons  name='ios-person' size={25}  color={tintColor} />
              )
          })
         },
    },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
          return <Ionicons  name='ios-airplane' size={25} />
      }

    }),
    tabBarOptions: {
      activeTintColor: colors.primaryColor,
      inactiveTintColor: 'gray',
    },
    initialRouteName: 'History'
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

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor:'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (iconName, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  if (routeName === 'Home') {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Settings') {
    iconName = `ios-options${focused ? '' : '-outline'}`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(AppNavigator);
