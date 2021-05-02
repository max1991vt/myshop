import { shopTypes } from './actionTypes';

export const shopActions = {
    getAllCategoryAndProduct
}

function getAllCategoryAndProduct(resolve) {
    return {
        type: shopTypes.GET_ALL_CATEGORY_AND_PRODUCT,
        resolve
    }
}