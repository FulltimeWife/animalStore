import * as actionTypes from '../constants/cartConstants';

const cartDefaultState = {
  cartItems: [],
}

export const cartReducer = (state = cartDefaultState, action) => {
  switch(action.type) {
    case actionTypes.addToCart:
      const item = action.payload;
      
      const doesItemExist = state.cartItems.find((x) => x.product === item.product)

      if(doesItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => 
            x.product === doesItemExist.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.removeFromCart:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload)
      }
    default:
      return state;
  }

  
}