import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actionTypes.addToCart,
    payload: {
      product: data._id,
      name: data.name,
      productImageUrl: data.productImageUrl,
      price: data.price,
      productInStockCount: data.productInStockCount,
      quantity,
    }
  })

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.removeFromCart,
    payload: id
  })

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};