import { combineReducers } from 'redux';
import login from './LoginReducer';
import getDelivery from './HistoryReducer';
import order from './OrderReducer';

export default combineReducers({
    login, getDelivery, order
});
