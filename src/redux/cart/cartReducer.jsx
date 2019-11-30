import CartactionTypes from './cartTypes';
import { adIttemToCart, removeItemFromCart } from './CartUtils';

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartactionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CartactionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: adIttemToCart(state.cartItems, action.payload)
      };
    case CartactionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartactionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
