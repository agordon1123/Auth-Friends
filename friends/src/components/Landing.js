import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const logout = () => {
    localStorage.removeItem('token');
}


const Landing = () => {
    useEffect(() => {
        logout();
    }, [])
    
    return (
        <div className='landing'>
            <h2>Welcome to the next big Social App</h2>
            <Link to='/login'>Get Started</Link>
        </div>
    )
}

export default Landing;
