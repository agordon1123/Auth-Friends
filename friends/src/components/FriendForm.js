import React from 'react';
import { withFormik, Form, Field } from 'formik';
// import Axios from 'axios';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
// import { axiosWithAuth } from '../utilities/axiosWithAuth';

const AddFriend = () => {
    return (
        <div>
            <p>AddFriend</p>
            <Form>
                <Field 
                    type='text'
                    name='name'
                    placeholder='name'
                />
                <Field
                    type='text'
                    name='age'
                    placeholder='age' 
                />
                <Field
                    type='text'
                    name='email'
                    placeholder='email'
                />
                <button type='submit'>Add</button>
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

    handleSubmit(values) {
        console.log(values)
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', values)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
})(AddFriend)

export default FriendForm;
