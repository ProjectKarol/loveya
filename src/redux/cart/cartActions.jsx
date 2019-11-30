import CartactionTypes from './cartTypes';

export const toggleCartHidden = () => ({
  type: CartactionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartactionTypes.ADD_ITEM,
  payload: item
});
export const removeItem = item => ({
  type: CartactionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartactionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
