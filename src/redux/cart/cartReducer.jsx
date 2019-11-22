import CartactionTypes from './cartTypes';
import { adIttemToCart } from './CartUtils';
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

    default:
      return state;
  }
};

export default cartReducer;
