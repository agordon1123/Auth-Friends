import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import Axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({})
    console.log(credentials)

    return (
        <div className='form'>
            <h2>Account Login</h2>
            <Form>
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
                <button type='submit'>Login</button>
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
        Axios.post('')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
})(Login);

export default LoginForm;
