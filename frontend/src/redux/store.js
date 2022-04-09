//Import stuff needed for store.
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//Import all of the reducers.
import {
  getAllProductsReducer
} from "./reducers/productReducers"

//Tree
const reducer = combineReducers({
  getAllProducts: getAllProductsReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;