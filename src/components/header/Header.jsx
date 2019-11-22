import React from 'react';
import { Link } from 'react-router-dom';
import './Headers.scss';
import logo from './logo.png';
import { auth } from '../../firebase/firebaseUtils';
import { connect } from 'react-redux';
import CardIcon from '../cartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <img src={logo} alt='Logo' className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          Shop
        </Link>
        <Link className='option' to='/contact'>
          Contact
        </Link>

        <Link className='option' to='/shop'>
          Shop
        </Link>
        {currentUser ? (
          <div
            className='option'
            onClick={() => {
              auth.signOut();
            }}
          >
            Sing Out
          </div>
        ) : (
          <Link className='option' to='/sing-in'>
            Sign In
          </Link>
        )}
        <CardIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
