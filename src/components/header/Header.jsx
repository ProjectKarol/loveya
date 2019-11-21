import React from 'react';
import { Link } from 'react-router-dom';
import './Headers.scss';
import logo from './logo.png';
import { auth } from '../../firebase/firebaseUtils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
