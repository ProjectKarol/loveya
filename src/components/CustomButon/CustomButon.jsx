import React from 'react';
import './CustomButon.scss';

const CustomButon = ({ children, isGoogleSingIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSingIn ? 'google-sing-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButon;
