import {
    INIT_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';
import firebase from '@firebase/app'
import '@firebase/auth'

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
    debugger;
    if(!email){
        return loginFail(dispatch, 'Email is empty');
    }
    firebase.auth().signInWithEmailAndPassword(email,password)
           .then((user) => loginSuccess(dispatch, user))
           .catch((error) => loginFail(dispatch, error));
  };



};
