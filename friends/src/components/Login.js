import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

const Login = props => {
    console.log(props);

    return (
        <div className='form'>
            <h2>Account<br />Login</h2>
            <Form>
                {localStorage.getItem('token') ? 
                <Redirect to='/profile' />
                : (
                    <>
                <Field
                    className='input'
                    type='text'
                    name='username'
                    placeholder='abc@123.com'
                />
                <Field
                    className='input'
                    type='text'
                    name='password'
                    placeholder='******'
                />
                <button className='button' type='submit'>Login</button>
                </>
                )}
            </Form>
        </div>
    )
}

const LoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        }
    },

    handleSubmit(values) {
        console.log(values)
        Axios
            .post('http://localhost:5000/api/login', values)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                // console.log(props)
            })
            .catch(err => console.log(err));
    }
})(Login);

export default LoginForm;
