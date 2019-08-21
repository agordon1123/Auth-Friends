import React from 'react';

const Friend = props => {
    console.log(props.friend.name)
    return (
        <div className='friend'>
            <p>Name: {props.friend.name}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default Friend;
