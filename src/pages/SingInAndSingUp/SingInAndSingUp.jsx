import React from 'react';
import './sing-in-and-singup.scss';
import SingIn from '../../components/singIn/singIn';
import SingUp from '../../components/singUp/SingUp';

const SigInAngSingUp = () => {
  return (
    <div className='sing-in-and-sing-up'>
      <SingIn />
      <SingUp />
    </div>
  );
};

export default SigInAngSingUp;
