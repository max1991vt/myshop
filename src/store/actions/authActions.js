import {authTypes} from './actionTypes';

export const authActions = {
  signup,
  signin,
  checkJWT,
  changeUserInformation,
  signout,
  refreshToken,
};

function signup(data, resolve) {
  return {
    type: authTypes.SIGN_UP,
    data,
    resolve,
  };
}

function signin(data, resolve) {
  return {
    type: authTypes.SIGN_IN,
    data,
    resolve,
  };
}

function checkJWT(data, resolve) {
  return {
    type: authTypes.CHECK_JWT,
    data,
    resolve,
  };
}

function changeUserInformation(data, resolve) {
  return {
    type: authTypes.CHANGE_USER_INFORMATION,
    data,
    resolve,
  };
}

function signout() {
  return {
    type: authTypes.SIGN_OUT,
  };
}

function refreshToken(data, resolve) {
  return {
    type: authTypes.REFRESH_TOKEN,
    data,
    resolve,
  };
}
