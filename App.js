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
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStackNavigator, createAppContainer } from "react-navigation";
import reducers from './src/reducers';
import MainScreen from './src/screen/MainScreen';
import Login from './src/screen/Login';
import store from "./src/store";

const MainNavigator = createStackNavigator(
  {
    Main: { screen: MainScreen },
    Login: { screen: Login },
  },
  {
    initialRouteName: 'Login',
    headerMode : 'none',
    navigationOptions: ({ navigation }) => ({
      headerTitleStyle: { fontWeight: "500" }
    })
  }
);


class App extends Component {

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
          <Login/>
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
export default App;
