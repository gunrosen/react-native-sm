import {
    HISTORY_INIT,
    HISTORY_SEARCH_ID_SUCCESS,
    HISTORY_SEARCH_ID_FAIL,
    HISTORY_SEARCH_INFO_SUCCESS,
    HISTORY_SEARCH_INFO_FAIL,
    HISTORY_SEARCH_NO_RESULT,
}from '../actions/types';

const STATE_INIT = {
  error: '',
  lstDelivery: null,
  arrIds: null,
  page: null,
  noResult: false
}

export default (state = STATE_INIT, action) => {
    switch (action.type) {
      case HISTORY_INIT:
          return { ...state, ...STATE_INIT };
      case HISTORY_SEARCH_ID_SUCCESS:
          return { ...state, ...STATE_INIT, arrIds : action.payload, page: 0 };
      case HISTORY_SEARCH_ID_FAIL:
          return { ...state, ...STATE_INIT, error: action.payload };
      case HISTORY_SEARCH_INFO_SUCCESS:
          return { ...state,  lstDelivery: action.payload, page: action.page};
      case HISTORY_SEARCH_INFO_FAIL:
          return { ...state,   error: action.payload};
      case HISTORY_SEARCH_NO_RESULT:
          return { ...state, ...STATE_INIT, noResult:true };
      default:
        return state;
    }
};
