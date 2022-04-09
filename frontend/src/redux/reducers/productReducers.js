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