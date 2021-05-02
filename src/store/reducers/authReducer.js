import {authTypes} from '../actions/actionTypes';

const initialState = {
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SIGN_UP_SUCCESS:
      const response = action.data;
      return response;
    case authTypes.SIGN_IN_SUCCESS:
      const user = action.data;
      return {...state, user};
    case authTypes.CHECK_JWT_SUCCESS:
      const userInfo = action.data;
      return {...state, user: userInfo};
    case authTypes.CHANGE_USER_INFORMATION_SUCCESS:
      const userChanged = action.data;
      return {...state, user: userChanged};
    case authTypes.SIGN_OUT:
      const userSignouted = null;
      return {...state, user: userSignouted};
    case authTypes.REFRESH_TOKEN_SUCCESS:
      const token = action.data;
      return token;
    default:
      return state;
  }
};

export default authReducer;
