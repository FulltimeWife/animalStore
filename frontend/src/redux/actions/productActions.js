import * as actionTypes from '../constants/productConstants';
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.getProductsRequest });

    const { data } = await axios.get("/api/products");

    dispatch({
      type: actionTypes.getProductsSuccess,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: actionTypes.getProductsFail,
      payload: 
        error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message
    })
  }
}

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.getProductDetailsRequest });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: actionTypes.getProductDetailsSuccess,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.getProductDetailsFail,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.getProductDetailsReset
  })
}