import orderItems from '../resources/orderItems'
import { ORDER_INIT, ORDER_LOAD_LIST_FOOD_SUCCESS, ORDER_ADD, ORDER_REMOVE } from './types'

export const getProductList = () => {
    return (dispatch) => {
        const menu = orderItems.reply.menu_infos;
        let myMenu = [];
        myMenu.push({ name: 'fake', data: [] });
        for (let section of menu) {
            let mySection = {};
            mySection.id = section.dish_type_id;
            mySection.name = section.dish_type_name;
            mySection.data = [];
            const foods = section.dishes;
            for (let food of foods) {
                let myFood = {};
                myFood.totalOrder = food.total_order;
                myFood.name = food.name;
                myFood.description = food.description.replace(/\n/g, ' ');
                myFood.displayTotalOrder = food.display_total_order;
                myFood.price = food.price.text;
                myFood.priceValue = food.price.value;
                myFood.id = food.id;
                myFood.photo = food.photos[4] ? food.photos[4].value : 'https://images.foody.vn/res/g86/854377/s750x750/9f3b2c52-28d5-4fe6-aff9-900946e9413c.jpg';
                myFood.isAvaiable = food.is_available;
                myFood.quantity = 0;

                mySection.data.push(myFood);
            }

            myMenu.push(mySection);
        }
        console.log('Load data');
        dispatch({
            type: ORDER_LOAD_LIST_FOOD_SUCCESS,
            payload: myMenu
        });
    }
}

export const addFood = (id) => {
    return (dispatch) => dispatch ({
        type: ORDER_ADD,
        payload: id
    })
}

export const removeFood = (id) => {
    return  (dispatch) => dispatch({
        type: ORDER_REMOVE,
        payload: id
    })
}