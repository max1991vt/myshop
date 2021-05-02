import {orderTypes} from '../actions/actionTypes';

const initialState = {
  orderHistory: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case orderTypes.GET_ORDER_HISTORY_SUCCESS:
      const orderHistory = action.data;
      return {...state, orderHistory};
    default:
      return state;
  }
};

export default orderReducer;
