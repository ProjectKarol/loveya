import React from 'react';
import CustomButon from '../CustomButon/CustomButon';
import './CartDropdown.scss';
import CartItem from '../cartItem/CartItem';
import { connect } from 'react-redux';
import { selectCartItem } from '../../redux/cart/cartSelector';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-item' />
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
      <CustomButon>Go To Checkout</CustomButon>
    </div>
  );
};
const mapStateToProps = props => ({
  cartItems: selectCartItem(props)
});
export default connect(mapStateToProps)(CartDropdown);
