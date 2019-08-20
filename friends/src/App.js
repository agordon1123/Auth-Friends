import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.scss';

// components
import Profile from './components/Profile';
import LoginForm from './components/Login';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='links'>
          <img className='logo' src="https://img.icons8.com/ios/50/000000/origami.png" />
          <ul>
            <li className='link'>
              <Link to='/login'>Login</Link>
            </li>
            <li className='link'>
              <Link to='/profile'>Profile</Link>
            </li>
          </ul>
        </div>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/profile' component={Profile} />
      </header>
    </div>
  );
}

export default App;
