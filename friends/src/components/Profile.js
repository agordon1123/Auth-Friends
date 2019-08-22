import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import FriendsList from './FriendsList';
import FriendForm from './FriendForm';
import { getFriends } from '../actions/getFriends';

const Profile = props => {
    console.log(props);

    useEffect(() => {
        props.getFriends();
    }, [])

    return (
        <div className='profile'>
            <h1>Hello Alex</h1>
            <div className='profile-container'>

            {props.isLoading ? (
            <Loader
                type="Puff"
                color="#00BFFF"
                /> 
            ) : (
                <> 
                    <FriendsList friends={props} />
                    <FriendForm />
                </> 
            )} 
            </div>
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
