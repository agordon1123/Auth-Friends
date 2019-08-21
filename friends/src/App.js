import React from 'react';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';

import './App.scss';

// components
import Profile from './components/Profile';
import LoginForm from './components/Login';
import Landing from './components/Landing';
import PrivateRoute from './components/PrivateRoute';

const App = props => {
  console.log(props)

  const goHome = () => {
    props.history.push('/')
  };

  return (
    <div className="App">
      <header className='header'>
        <div className='links'>
          <img className='logo' onClick={goHome} src="https://img.icons8.com/ios/50/000000/origami.png" />
          <ul>
            <li className='link'>
              <Link to='/login'>Login</Link>
            </li>
            <li className='link'>
              <Link to='/profile'>Profile</Link>
            </li>
            <li className='link'>
              <Link to='/'>Logout</Link>
            </li>
          </ul>
        </div>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={LoginForm} />
        <PrivateRoute exact path='/profile' component={Profile} />
      </header>
    </div>
  );
}

export default withRouter(App);
