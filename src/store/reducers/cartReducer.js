import {cartTypes} from '../actions/actionTypes';

const initialState = {
  cartList: [],
  orderResponse: '',
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.ADD_PRODUCT:
      const product = action.data;

      const isExist = state.cartList.some(
        (element) => element.id === product.id,
      );
      if (isExist) return {...state};

      const cartList = [...state.cartList, product];
      return {...state, cartList};

    case cartTypes.REMOVE_PRODUCT:
      const removedCartProduct = state.cartList.filter(
        (element) => element.id !== action.data.id,
      );
      return {...state, cartList: removedCartProduct};

    case cartTypes.INCREASE_QUANTITY:
      const newIncCartList = state.cartList.map((product) => {
        if (product.id !== action.data.id) {
          return product;
        } else {
          return {...product, quantity: product.quantity + 1};
        }
      });
      return {...state, cartList: newIncCartList};

    case cartTypes.DECREASE_QUANTITY:
      const newDecCartList = state.cartList.map((product) => {
        if (product.id !== action.data.id) {
          return product;
        } else {
          if (product.quantity === 1) {
            alert('You can not decrease it anymore!');
            return product;
          }
          return {...product, quantity: product.quantity - 1};
        }
      });
      return {...state, cartList: newDecCartList};

    case cartTypes.SEND_ORDER_SUCCESS:
      const response = action.data;
      return {...state, orderResponse: response};

    default:
      return state;
  }
};

export default cartReducer;
