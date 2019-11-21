import React, { Component } from 'react';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SigInAngSingUp from './pages/SingInAndSingUp/SingInAndSingUp';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { setCurrentUser } from './redux/user/userActions';

import './App.css';

class App extends Component {
  unsubscripeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscripeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/sing-in' component={SigInAngSingUp} />
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
