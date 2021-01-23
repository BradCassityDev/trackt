import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Signup = () => {

    // Form state
    const [formState, setFormState] = useState({ email: '', password: '' });

    // Add user mutation
    const [addUser, { error }] = useMutation(ADD_USER);

    // Handle form state if change is detected
    const formChange = event => {
        // Deconstruct the name and value from the target field
        const { name, value } = event.target;

        // Set the form's state with the new values
        setFormState({
            ...formState,
            [name]: value
        });
    };

    // Handle Signup form submit
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState }
            });

            // Save token to local storage and redirect user profile home page
            Auth.login(data.addUser.token);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="card login-signup-card shadow-sm">
            <div className="card-body">
                <h4>Create Account</h4>
                <hr></hr>
                {error && <div className="alert alert-danger">Something went wrong while signing up.</div>}
                <form onSubmit={handleFormSubmit} className="login-form">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <label className="form-label">Username</label>
                            <input
                                className='form-control'
                                placeholder='Username'
                                name='username'
                                type='username'
                                id='username'
                                value={formState.username}
                                onChange={formChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-3">
                            <label className="form-label">Email</label>
                            <input
                                className='form-control'
                                placeholder='Email'
                                name='email'
                                type='email'
                                id='email'
                                value={formState.email}
                                onChange={formChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-3">
                            <label className="form-label">Password</label>
                            <input
                                className='form-control'
                                placeholder='Password'
                                name='password'
                                type='password'
                                id='emapasswordil'
                                value={formState.password}
                                onChange={formChange}
                            />
                        </div>
                    </div>
                    <button className='btn w-100 btn-default' type='submit'>
                        Submit
                    </button>
                </form>

                <div className="login-signup-toggle-text">
                    <p>Don't have an account?</p>
                    <p><Link to="/login">LOGIN</Link> instead</p>
                </div>
                
            </div>
        </div>
    );
};

export default Signup;