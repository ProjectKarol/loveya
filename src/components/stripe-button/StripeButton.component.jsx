import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_LrfAVTCZQ8MG51dFol2yTh3T00WTDK4oKy';
  const onToken = token => {
    console.log(token);
    alert('Paytment sucessfull');
  };
  return (
    <div>
      <StripeCheckout
        label='Pay Now'
        name='Loveya Clothing'
        billingAddress
        shippingAddress
        image='https://www.loveya.pl/sklep/themes/loveya/images/logo.png'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeButton;
