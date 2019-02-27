import {
    INIT_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';
import firebase from 'firebase';

const loginSuccess = (dispatch, user) => {
        console.log('Success log in');
        dispatch({
            type: LOGIN_SUCCESS,
            payload: user
        });
}

const loginFail = (dispatch, error) => {
        console.log('Fail');
        dispatch({
            type: LOGIN_FAIL,
            payload: error
        });
}

export const loginFirebase = ({email, password}) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email,password)
           .then((user) => loginSuccess(dispatch, user))
           .catch((error) => loginFail(dispatch, error));
  };



};
