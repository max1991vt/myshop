import {combineReducers} from 'redux';
import shop from './shopReducer';
import cart from './cartReducer';
import auth from './authReducer';
import product from './productReducer';
import order from './orderReducer';

export default combineReducers({
  shop,
  cart,
  auth,
  product,
  order,
});
