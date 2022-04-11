import * as actionTypes from "../constants/productConstants";

export const getAllProductsReducer = (state = { allProducts: [] }, action) => {
  switch (action.type) {
    case actionTypes.getAllProductsRequest:
      return {
        loading: true,
        allProducts: [],
      };
    case actionTypes.getAllProductsSuccess:
      return {
        allProducts: action.payload,
        loading: false,
      };
    case actionTypes.getAllProductsFailure:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductByIdReducer = (state = { productById: [] }, action) => {
  switch (action.type) {
    case actionTypes.getProductByIdRequest:
      return {
        loading: true,
        productById: [],
      };
    case actionTypes.getProductByIdSuccess:
      return {
        loading: false,
        productById: action.payload,
      };
    case actionTypes.getProductByIdFailure:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  };
};