import CartactionTypes from './cartTypes';

export const toggleCartHidden = () => ({
  type: CartactionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartactionTypes.ADD_ITEM,
  payload: item
});
