import {
    HISTORY_INIT,
    HISTORY_SEARCH_ID_SUCCESS,
    HISTORY_SEARCH_ID_FAIL,
    HISTORY_SEARCH_INFO_SUCCESS,
    HISTORY_SEARCH_INFO_FAIL
}from '../actions/types';

const STATE_INIT = {
  error: '',
  lstId: null,
  lstDelivery: null
}

export default (state = STATE_INIT, action) => {
    switch (action.type) {
      case HISTORY_INIT:
          return { ...state, ...STATE_INIT };
      case HISTORY_SEARCH_ID_SUCCESS:
          return { ...state, ...STATE_INIT, lstId : action.payload };
      case HISTORY_SEARCH_ID_FAIL:
          return { ...state, ...STATE_INIT, error: action.payload };
      case HISTORY_SEARCH_INFO_SUCCESS:
          return { ...state,  lstDelivery: action.payload};
      case HISTORY_SEARCH_INFO_FAIL:
          return { ...state,   error: action.payload};
      default:
        return state;
    }
};
