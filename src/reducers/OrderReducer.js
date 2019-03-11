import {
    ORDER_INIT,
    ORDER_LOAD_LIST_FOOD_SUCCESS,
    ORDER_ADD,
    ORDER_REMOVE
} from '../actions/types';
const STATE_INIT = {
    foodList: [],
    purchaseOrder: [],
    total: 0
}

export default (state = STATE_INIT, action) => {
    switch (action.type) {
        case ORDER_INIT:
            return { ...state, ...STATE_INIT };
        case ORDER_LOAD_LIST_FOOD_SUCCESS:
            return { ...state, ...STATE_INIT, foodList: action.payload };
        case ORDER_ADD:
            {
                let total = state.total;
                let info = null;
                let newFoodList = state.foodList.map((section) => {
                    if (section.data && section.data.find(item => item.id == action.payload)) {
                        return {
                            ...section, data: section.data.map((item) => {
                                if (item.id === action.payload) {
                                    total = total + item.priceValue;
                                    info = item;
                                    return {
                                        ...item,
                                        quantity: item.quantity + 1,
                                    }
                                }
                                return item;
                            })
                        };
                    }
                    return section;
                });
                let purchaseOrder = state.purchaseOrder;
                if (purchaseOrder.find(item => item.id == action.payload)) {
                    purchaseOrder = purchaseOrder.map( item => {
                            if(item.id == action.payload){
                                return {
                                    ...item,
                                    quantity: item.quantity +1,
                                }
                            }
                            return item;
                    });
                } else {
                    purchaseOrder = [ ...purchaseOrder, {
                        quantity:1,
                        id: action.payload,
                        info
                    }]  
                    
                }
                return { ...state, foodList: newFoodList, total, purchaseOrder };
            }
        case ORDER_REMOVE:
            {
                let total = state.total;
                let newFoodList = state.foodList.map((section) => {
                    if (section.data && section.data.find(item => item.id == action.payload)) {
                        return {
                            ...section, data: section.data.map((item) => {
                                if (item.id === action.payload) {
                                    total = total - item.priceValue;
                                    return {
                                        ...item,
                                        quantity: item.quantity - 1,
                                    }
                                }
                                return item;
                            })
                        };
                    }
                    return section;
                });
                let purchaseOrder = state.purchaseOrder;
                if (purchaseOrder.find(item => item.id == action.payload)) {
                    purchaseOrder = purchaseOrder.map( item => {
                            if(item.id == action.payload){
                                return {
                                    ...item,
                                    quantity: item.quantity -1,
                                }
                            }
                            return item;
                    });
                }
                return { ...state, foodList: newFoodList, total, purchaseOrder };
            }
        default:
            return state;
    }
};
