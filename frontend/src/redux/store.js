import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { cartReducer } from './reducers/cartReducers'
import { getProductsReducer, getProductDetailsReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const cartDefaultState = {
    cart: {
      cartItems: cartItemsInLocalStorage,
    },
  };
const store = createStore(
  reducer,
  cartDefaultState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
