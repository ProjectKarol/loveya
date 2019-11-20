import React, { Component } from 'react';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SigInAngSingUp from './pages/SingInAndSingUp/SingInAndSingUp';
import { auth } from './firebase/firebaseUtils';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscripeFromAuth = null;
  componentDidMount() {
    this.unsubscripeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscripeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/sing-in' component={SigInAngSingUp} />
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </div>
    );
  }
}

export default App;
