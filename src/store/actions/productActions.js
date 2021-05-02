import {productTypes} from './actionTypes';

export const productActions = {
  getProducts,
  getAddProducts,
  getSearchProducts,
  // getClearProducts,
  getProductsOfSpringCollection,
  getAddProductsOfSpringCollection,
};

function getProducts(data, resolve) {
  return {
    type: productTypes.GET_PRODUCTS,
    data,
    resolve,
  };
}

function getAddProducts(data, resolve) {
  return {
    type: productTypes.GET_ADD_PRODUCTS,
    data,
    resolve,
  };
}

function getSearchProducts(data, resolve) {
  return {
    type: productTypes.GET_SEARCH_PRODUCTS,
    data,
    resolve,
  };
}

// function getClearProducts() {
//   return {
//     type: productTypes.GET_CLEAR_PRODUCTS,
//   };
// }

function getProductsOfSpringCollection(data, resolve) {
  return {
    type: productTypes.GET_PRODUCTS_OF_SPRING_COLLECTION,
    data,
    resolve,
  };
}

function getAddProductsOfSpringCollection(data, resolve) {
  return {
    type: productTypes.GET_ADD_PRODUCTS_OF_SPRING_COLLECTION,
    data,
    resolve,
  };
}
