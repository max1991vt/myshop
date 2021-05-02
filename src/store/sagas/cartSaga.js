import {cartTypes} from '../actions/actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import axios from '../axios.config';

function* fetchSendOrder(action) {
  try {
    const response = yield axios.post('myshop/cart.php', action.data);

    yield put({
      type: cartTypes.SEND_ORDER_SUCCESS,
      data: response,
    });

    action.resolve && action.resolve(response);
  } catch (error) {
    console.log(error);
  }
}

export function* cartWatcher() {
  yield takeLatest(cartTypes.SEND_ORDER, fetchSendOrder);
}
