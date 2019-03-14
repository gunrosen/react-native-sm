import {
  INIT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from './types';
import firebase from '@firebase/app'
import '@firebase/auth'
import { AsyncStorage } from 'react-native'

const loginSuccess = async (dispatch, user, email, password) => {
  try {
    await AsyncStorage.setItem("AUTH", JSON.stringify({  email,  password }));
    console.log('Success log in');
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user
    });
  } catch (err) {
    console.log(err);
  }
}

const loginFail = (dispatch, error) => {
  console.log('Fail');
  dispatch({
    type: LOGIN_FAIL,
    payload: error
  });
}

export const loginFirebase = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => loginSuccess(dispatch, user, email, password))
      .catch((error) => loginFail(dispatch, error));
  };



};
