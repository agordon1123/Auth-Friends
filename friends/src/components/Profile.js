import React, { useState, useEffect } from 'react';
// import { axiosWithAuth } from '../utilities/axiosWithAuth';
import FriendsList from './FriendsList';
import { connect } from 'react-redux';
import { getFriends } from '../actions/getFriends';

const Profile = props => {
    console.log(props);

    useEffect(() => {
        props.getFriends();
    }, [])

    return (
        <div>
            <h1>Hello Alex</h1>
            <FriendsList friends={props} />
        </div>
    )
};

const mapPropsToState = state => {
    console.log(state)
    return {
        error: state.error,
        isLoading: state.isLoading,
        friends: state.friends
    }
}

export default connect(mapPropsToState, { getFriends })(Profile);
