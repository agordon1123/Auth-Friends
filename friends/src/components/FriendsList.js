import React from 'react';
import Friend from './Friend';

const FriendsList = ({ friends }) => {
    console.log(friends)
    return (
        <div className='friends-list'>
            <h2>Friends: {friends.friends.length ? friends.friends.length : '...loading'}</h2>
            {friends.friends.length && friends.friends.map(friend => {
                return <Friend key={friend.id} friend={friend}/>
            })}
        </div>
    )
}

export default FriendsList;
