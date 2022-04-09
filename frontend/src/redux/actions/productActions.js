import * as actionTypes from "../constants/productConstants";
import axios from "axios";

export const getAllProductsAction = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.getAllProductsRequest});
    const { data } = await axios.get("/api/products");
    dispatch({
      type: actionTypes.getAllProductsSuccess,
      payload: data,
    });
  } catch (error) {
    console.error(error)
    dispatch({
      type: actionTypes.getAllProductsFailure,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
}