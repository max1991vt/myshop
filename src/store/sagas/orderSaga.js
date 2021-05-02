import {orderTypes} from '../actions/actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import axios from '../axios.config';

function* fetchGetOrderHistory(action) {
  try {
    const response = yield axios.post('myshop/order_history.php', action.data);

    yield put({
      type: orderTypes.GET_ORDER_HISTORY_SUCCESS,
      data: response,
    });

    action.resolve && action.resolve(response);
  } catch (error) {
    console.log(error);
  }
}

export function* orderWatcher() {
  yield takeLatest(orderTypes.GET_ORDER_HISTORY, fetchGetOrderHistory);
}
