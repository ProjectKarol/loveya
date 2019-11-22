import React from 'react';
import './CustomButon.scss';

const CustomButon = ({ children, isGoogleSingIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSingIn ? 'google-sing-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButon;
