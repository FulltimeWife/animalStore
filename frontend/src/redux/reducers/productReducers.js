import * as actionTypes from '../constants/productConstants';

export const getProductsReducer = (state = { products: [] }, action) => {
  switch(action.type) {
    case actionTypes.getProductsRequest:
      return {
        loading: true,
        products: []
      };
    case actionTypes.getProductsSuccess:
      return {
        loading: false,
        products: action.payload
      };
    case actionTypes.getProductsFail:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
};
export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.getProductDetailsRequest:
      return {
        loading: true,
      };
    case actionTypes.getProductDetailsSuccess:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.getProductDetailsFail:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.getProductDetailsReset:
      return {
        product: {},
      };
    default:
      return state;
  }
};