import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButon from '../CustomButon/CustomButon';
import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils';
import './SingUp.scss';

class SingUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmpasswod: ''
    };
  }

  handleSubmint = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmpasswod } = this.state;
    if (password !== confirmpasswod) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmpasswod: ''
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmpasswod } = this.state;
    return (
      <div className='sing-up'>
        <h2>I do nat have account</h2>
        <span>Sing up with your email and password</span>
        <form className='sing-up-form' onSubmit={this.handleSubmint}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Dispaly Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmpasswod'
            value={confirmpasswod}
            onChange={this.handleChange}
            label='Confirm password'
            required
          />

          <CustomButon>Sing Up</CustomButon>
        </form>
      </div>
    );
  }
}

export default SingUp;
