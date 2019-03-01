import {
    HISTORY_INIT,
    HISTORY_SEARCH_SUCCESS,
    HISTORY_SEARCH_FAIL
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
export const searchDelivery = () => {


}

 export const requestGetId = () => {
    const requestConfig = {
        url:'https://gappapi.deliverynow.vn/api/delivery/search_delivery_ids',
        method:'post',
        headers: header,
        data:{"category_group":1,"city_id":217,"delivery_only":true,"keyword":"","sort_type":8,"foody_services":[1],"combine_categories":[{"code":1,"id":76},{"code":1,"id":5},{"code":1,"id":16},{"code":1,"id":70}]},

    }
      axios.request(requestConfig).then(
          (result) => console.log(result)
      ).catch(
        (error) => console.log(console.error();)
      );
  }
