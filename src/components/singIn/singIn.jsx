import React, { Component } from 'react';
import './singin.scss';
import FormInput from '../FormInput/FormInput';
import CustomButon from '../CustomButon/CustomButon';
import { auth, signInWithGoogle } from '../../firebase/firebaseUtils';

class SingIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }
  submitHandler = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };
  onhandleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I aleready have an account</h2>
        <span>Sing in with your email and password</span>

        <form onSubmit={this.submitHandler}>
          <FormInput
            type='email'
            name='email'
            onhandleChange={this.onhandleChange}
            label='email'
            value={this.state.email}
            required
          />
          <FormInput
            type='password'
            name='password'
            onhandleChange={this.onhandleChange}
            label='password'
            value={this.state.password}
            required
          />
          <div className='buttons'>
            <CustomButon type='submit'>Sing in</CustomButon>
            <CustomButon onClick={signInWithGoogle} isGoogleSingIn>
              Sing in with google
            </CustomButon>
          </div>
        </form>
      </div>
    );
  }
}

export default SingIn;
