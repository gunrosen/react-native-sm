/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import firebase from '@firebase/app'
import '@firebase/auth'
import { createStackNavigator, createAppContainer, createSwitchNavigator} from "react-navigation";
import MainScreen from './src/screen/MainScreen';
import Login from './src/screen/Login';
import SignUp from './src/screen/SignUp';
import Order from './src/screen/Order';
import store from "./src/store";

const MainNavigator = createStackNavigator(
  {
    Main: { screen: MainScreen },
    Order: { screen: Order },
    SignUp:{screen: SignUp}
  },
  {
    initialRouteName: 'Main',
    headerMode : 'none',
  }
);
const AuthenNavigator = createStackNavigator({
        Login: { screen: Login },
        SignUp: {screen: SignUp}
    },
    {
      initialRouteName: 'Login',
      headerMode : 'none',
    }
    );
const AppContainer = createAppContainer(createSwitchNavigator(
  {
      App: MainNavigator,
      Auth: AuthenNavigator
  },
  {
      initialRouteName: 'Auth',
  }
  ));

export default class App extends Component {

  componentWillMount(){
    firebase.initializeApp( {
            apiKey: 'AIzaSyBDPfHW8grY-4cmUka0J0zxok-dUOGaUEc',
            authDomain: 'authentication-28d02.firebaseapp.com',
            databaseURL: 'https://authentication-28d02.firebaseio.com',
            projectId: 'authentication-28d02',
            storageBucket: 'authentication-28d02.appspot.com',
            messagingSenderId: '420746767018'
            });

    firebase.auth().onAuthStateChanged((user) => {
              if(user){
                this.setState({logginIn: true});
              } else {
                this.setState({logginIn: false});
              }
            });

}

  render() {
    return (
      <Provider store={store}>
          <AppContainer/>
      </Provider>
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
