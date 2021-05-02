import {orderTypes} from './actionTypes';

export const orderActions = {
  getOrderHistory,
};

function getOrderHistory(data, resolve) {
  return {
    type: orderTypes.GET_ORDER_HISTORY,
    data,
    resolve,
  };
}
