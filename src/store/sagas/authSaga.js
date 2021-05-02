import {authTypes} from '../actions/actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import axios from '../axios.config';

function* fetchSignup(action) {
  try {
    const response = yield axios.post('myshop/register.php', action.data);

    yield put({
      type: authTypes.SIGN_UP_SUCCESS,
      data: response,
    });

    action.resolve && action.resolve(response);
  } catch (error) {
    console.log(error);
  }
}

function* fetchSignin(action) {
  try {
    const response = yield axios.post('myshop/login.php', action.data);

    yield put({
      type: authTypes.SIGN_IN_SUCCESS,
      data: response.user,
    });

    action.resolve && action.resolve(response);
  } catch (error) {
    console.log(error);
  }
}

function* fetchCheckJWT(action) {
  try {
    const response = yield axios.post('myshop/check_login.php', action.data);

    yield put({
      type: authTypes.CHECK_JWT_SUCCESS,
      data: response.user,
    });

    action.resolve && action.resolve(response);
  } catch (error) {
    console.log(error);
  }
}

function* fetchChangeUserInformation(action) {
  try {
    const response = yield axios.post('myshop/change_info.php', action.data);

    yield put({
      type: authTypes.CHANGE_USER_INFORMATION_SUCCESS,
      data: response,
    });

    action.resolve && action.resolve(response);
  } catch (error) {
    console.log(error);
  }
}

function* fetchRefreshToken(action) {
  try {
    const response = yield axios.post('myshop/refresh_token.php', action.data);

    yield put({
      type: authTypes.REFRESH_TOKEN_SUCCESS,
      data: response,
    });

    action.resolve && action.resolve(response);
  } catch (error) {
    console.log(error);
  }
}

export function* authWatcher() {
  yield takeLatest(authTypes.SIGN_UP, fetchSignup);
  yield takeLatest(authTypes.SIGN_IN, fetchSignin);
  yield takeLatest(authTypes.CHECK_JWT, fetchCheckJWT);
  yield takeLatest(
    authTypes.CHANGE_USER_INFORMATION,
    fetchChangeUserInformation,
  );
  yield takeLatest(authTypes.REFRESH_TOKEN, fetchRefreshToken);
}
