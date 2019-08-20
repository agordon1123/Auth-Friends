import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

const Profile = () => {
    const [friends, setFriends] = useState({
        friends: []
    })
    console.log(friends);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                setFriends({ friends: res.data })
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Hello from Profile</h1>
        </div>
    )
};

export default Profile;
