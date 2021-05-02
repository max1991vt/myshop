import { shopTypes } from '../actions/actionTypes';

const initialState = {
    shop: {},
}

const shopReducer = (state = initialState, action) => {
    switch(action.type) {
        case shopTypes.GET_ALL_CATEGORY_AND_PRODUCT_SUCCESS:
            const shop = action.data;
            return {...state, shop};
        default: 
            return state;
    }
}

export default shopReducer;