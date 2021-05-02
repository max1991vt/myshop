import {shopTypes} from '../actions/actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import axios from '../axios.config';

function* fetchGetAllCategoryAndProduct(action) {
  try {
    const response = yield axios.get('myshop/');

    yield put({
      type: shopTypes.GET_ALL_CATEGORY_AND_PRODUCT_SUCCESS,
      data: response,
    });

    action.resolve && action.resolve(response);
  } catch (error) {
        console.log(error);
  }
}

export function* shopWatcher() {
  yield takeLatest(
    shopTypes.GET_ALL_CATEGORY_AND_PRODUCT,
    fetchGetAllCategoryAndProduct,
  );
}
