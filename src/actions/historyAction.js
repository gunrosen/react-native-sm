import {
    HISTORY_INIT,
    HISTORY_SEARCH_ID_SUCCESS,
    HISTORY_SEARCH_ID_FAIL,
    HISTORY_SEARCH_INFO_SUCCESS,
    HISTORY_SEARCH_INFO_FAIL
} from './types';
import axios from 'axios';

const header = {
'Content-Type': 'application/json',
'Accept': 'application/json',
'Origin': 'https://www.now.vn',
'x-foody-access-token': '',
'x-foody-app-type': 1004,
'x-foody-api-version': 1,
'x-foody-client-id': '',
'x-foody-client-language': 'vi',
'x-foody-client-type': '1',
'x-foody-client-version': '3.0.0',
};
const getSuccess = (dispatch, result) => {
  dispatch({
      type: HISTORY_SEARCH_SUCCESS,
      payload: result
  });
}

const getFail = (dispatch, error) => {
  dispatch({
      type: HISTORY_SEARCH_FAILS,
      payload: error
  });
}

const  getDeliveryIds = () => {
    return dispatch => {
      const requestConfig = {
        url:'https://gappapi.deliverynow.vn/api/delivery/search_delivery_ids',
        method:'post',
        headers: header,
        data:{"category_group":1,"city_id":217,"delivery_only":true,"keyword":"","sort_type":8,"foody_services":[1],"combine_categories":[{"code":1,"id":76},{"code":1,"id":5},{"code":1,"id":16},{"code":1,"id":70}]},
      }
      return   axios.request(requestConfig).then(
          response => {
              if (response.data.reply.delivery_ids) {
                      let arrIds = response.data.reply.delivery_ids;
                      let deliverIds = arrIds.slice(0,10);
                      dispatch({
                          type: HISTORY_SEARCH_ID_SUCCESS,
                          payload: deliverIds
                        }
                      );
              } else {
                    dispatch({
                      type: HISTORY_SEARCH_ID_SUCCESS,
                      payload: []
                    })
              }
          }).catch(
          error => {
                dispatch({
                    type: HISTORY_SEARCH_ID_FAIL,
                    payload: error
                  }
                )
          }
          )
    }
}

const getDeliveryInfo = (lstId) => {
      return dispatch => {
        const requestConfig = {
          url:'https://gappapi.deliverynow.vn/api/delivery/get_infos',
          method:'post',
          headers: header,
          data:{"delivery_ids":lstId}
        }
        return axios.request(requestConfig).then(
            response => {
                      dispatch({
                          type: HISTORY_SEARCH_INFO_SUCCESS,
                          payload: response.data.reply.delivery_infos
                        })
            }).catch(
                    err => {
                      dispatch({
                          type: HISTORY_SEARCH_INFO_FAIL,
                          payload: err
                        })
                    }
          )

      }
}

export const getDeliveryIdThenInfo = () => {
    return (dispatch, getState) => {
          return dispatch(getDeliveryIds()).then( () => {
              const lstId = getState().getDelivery.lstId;
              return dispatch(getDeliveryInfo(lstId))
          })
    }

}
