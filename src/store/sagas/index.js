import {fork, all} from 'redux-saga/effects';
import {shopWatcher} from './shopSaga';
import {authWatcher} from './authSaga';
import {productWatcher} from './productSaga';
import {orderWatcher} from './orderSaga';
import {cartWatcher} from './cartSaga';

export default function* rootSaga() {
  yield all([
    fork(shopWatcher),
    fork(authWatcher),
    fork(productWatcher),
    fork(orderWatcher),
    fork(cartWatcher),
  ]);
}
