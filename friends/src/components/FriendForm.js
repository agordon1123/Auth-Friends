import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { getFriends } from '../actions/getFriends';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

const AddFriend = () => {
    return (
        <div>
            <h2>Add Friend</h2>
            <Form className='friend-form'>
                <Field
                    className='input'
                    type='text'
                    name='name'
                    placeholder='name'
                />
                <Field
                    className='input'
                    type='text'
                    name='age'
                    placeholder='age' 
                />
                <Field
                    className='input'
                    type='text'
                    name='email'
                    placeholder='email'
                />
                <button className='button' type='submit'>Add</button>
            </Form>
        </div>
    )
}

const FriendForm = withFormik({
    mapPropsToValues({ name, age, email }) {
        return {
            id: Date.now(),
            name: name || '',
            age: age || '',
            email: email || ''
        }
    },

    handleSubmit(values, { props }) {
        console.log(props)
        console.log(values)
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', values)
            .then(res => {
                console.log(res)
                props.getFriends();
            })
            .catch(err => console.log(err))
    }
})(AddFriend)

const mapPropsToState = state => {
    console.log(state)
    return {
        error: state.error,
        isLoading: state.isLoading,
        friends: state.friends
    }
}

export default connect(mapPropsToState, { getFriends })(FriendForm);
