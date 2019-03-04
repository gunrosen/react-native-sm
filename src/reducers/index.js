import { combineReducers } from 'redux';
import login from './LoginReducer';
import getDelivery from './HistoryReducer';

export default combineReducers({
    login, getDelivery
});
