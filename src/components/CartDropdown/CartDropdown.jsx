import React from 'react';
import CustomButon from '../CustomButon/CustomButon';
import './CartDropdown.scss';
import CartItem from '../cartItem/CartItem';
import { connect } from 'react-redux';
import { selectCartItem } from '../../redux/cart/cartSelector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cartActions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-item' />
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}

      <CustomButon
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Go To Checkout
      </CustomButon>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
