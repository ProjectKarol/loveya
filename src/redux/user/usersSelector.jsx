import { createSelector } from 'reselect';
const selectUser = state => state.user;
const selectCart = state => state.cart;

export const selectCartHidden = createSelector([]);
export const selectCurentUser = createSelector(
  [selectUser, selectCart],
  user => user.currentUser
);
