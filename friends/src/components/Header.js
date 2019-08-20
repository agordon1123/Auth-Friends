import React from 'react';
import { Link, Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';

const Header = () => {
    return (
        <header className='header'>
            <ul className='links'>
                <li className='link'>
                    <Link to='/login'>Login</Link>
                </li>
                <li className='link'>
                    <Link to='/profile'>Profile</Link>
                </li>
            </ul>
            <Route path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
        </header>
    )
}

export default Header;
