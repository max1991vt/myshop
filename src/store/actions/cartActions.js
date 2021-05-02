import {cartTypes} from './actionTypes';

export const cartActions = {
  addProduct,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
  sendOrder,
};

function addProduct(data) {
  return {
    type: cartTypes.ADD_PRODUCT,
    data,
  };
}

function removeProduct(data) {
  return {
    type: cartTypes.REMOVE_PRODUCT,
    data,
  };
}

function increaseQuantity(data) {
  return {
    type: cartTypes.INCREASE_QUANTITY,
    data,
  };
}

function decreaseQuantity(data) {
  return {
    type: cartTypes.DECREASE_QUANTITY,
    data,
  };
}

function sendOrder(data, resolve) {
  return {
    type: cartTypes.SEND_ORDER,
    data,
    resolve,
  };
}
