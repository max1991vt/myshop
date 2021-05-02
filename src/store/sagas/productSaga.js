import {productTypes} from '../actions/actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import axios from '../axios.config';

function* fetchGetProducts(action) {
  try {
    const {data} = action;
    const idType = data.id;
    const page = data.page;

    const response = yield axios.get(
      `myshop/product_by_type.php?id_type=${idType}&page=${page}`,
    );

    yield put({
      type: productTypes.GET_PRODUCTS_SUCCESS,
      data: response,
    });

    action.resolve && action.resolve(response);
  } catch (error) {
    console.log(error);
  }
}

function* fetchGetAddProducts(action) {
  try {
    const {data} = action;
    const idType = data.id;
    const page = data.page;

    const response = yield axios.get(
      `myshop/product_by_type.php?id_type=${idType}&page=${page}`,
    );

    yield put({
      type: productTypes.GET_ADD_PRODUCTS_SUCCESS,
      data: response,
    });

    action.resolve && action.resolve(response);
  } catch (error) {
    console.log(error);
  }
}

function* fetchGetSearchProducts(action) {
  try {
    const {data} = action;
    const key = data.keySearch;

    const response = yield axios.get(`myshop/search.php?key=${key}`);

    yield put({
      type: productTypes.GET_SEARCH_PRODUCTS_SUCCESS,
      data: response,
    });

    action.resolve && action.resolve(response);
  } catch (error) {
    console.log(error);
  }
}

function* fetchGetProductsOfSpringCollection(action) {
  try {
    const {data} = action;
    const page = data.page;

    const response = yield axios.get(`myshop/get_collection.php?page=${page}`);

    yield put({
      type: productTypes.GET_PRODUCTS_OF_SPRING_COLLECTION_SUCCESS,
      data: response,
    });

    action.resolve && action.resolve(response);
  } catch (error) {
    console.log(error);
  }
}

function* fetchGetAddProductsOfSpringCollection(action) {
  try {
    const {data} = action;
    const page = data.page;

    const response = yield axios.get(`myshop/get_collection.php?page=${page}`);

    yield put({
      type: productTypes.GET_ADD_PRODUCTS_OF_SPRING_COLLECTION_SUCCESS,
      data: response,
    });

    action.resolve && action.resolve(response);
  } catch (error) {
    console.log(error);
  }
}

export function* productWatcher() {
  yield takeLatest(productTypes.GET_PRODUCTS, fetchGetProducts);
  yield takeLatest(productTypes.GET_ADD_PRODUCTS, fetchGetAddProducts);
  yield takeLatest(productTypes.GET_SEARCH_PRODUCTS, fetchGetSearchProducts);
  yield takeLatest(
    productTypes.GET_PRODUCTS_OF_SPRING_COLLECTION,
    fetchGetProductsOfSpringCollection,
  );
  yield takeLatest(
    productTypes.GET_ADD_PRODUCTS_OF_SPRING_COLLECTION,
    fetchGetAddProductsOfSpringCollection,
  );
}
