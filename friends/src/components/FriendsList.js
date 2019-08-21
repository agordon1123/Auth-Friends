import React from 'react';

const FriendsList = ({  friends }) => {
    console.log(friends)
    return (
        <div>
            <h1>Friends: [{friends.friends.length ? friends.friends.length : '...loading'}]</h1>
        </div>
    )
}

export default FriendsList;
