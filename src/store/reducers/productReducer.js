import {productTypes} from '../actions/actionTypes';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productTypes.GET_PRODUCTS_SUCCESS:
      const products = action.data;
      return {...state, products};
    case productTypes.GET_ADD_PRODUCTS_SUCCESS:
      const newProducts = action.data;
      return {...state, products: [...state.products, ...newProducts]};
    // case productTypes.GET_CLEAR_PRODUCTS:
    //   const productsCleared = [];
    //   return {...state, products: productsCleared};
    case productTypes.GET_SEARCH_PRODUCTS_SUCCESS:
      const productsSearched = action.data;
      return {products: productsSearched};
    case productTypes.GET_PRODUCTS_OF_SPRING_COLLECTION_SUCCESS:
      const productsOfSpringCollection = action.data;
      return {...state, products: productsOfSpringCollection};
    case productTypes.GET_ADD_PRODUCTS_OF_SPRING_COLLECTION_SUCCESS:
      const newProductsOfSpringCollection = action.data;
      return {
        ...state,
        products: [...state.products, ...newProductsOfSpringCollection],
      };
    default:
      return state;
  }
};

export default productReducer;
