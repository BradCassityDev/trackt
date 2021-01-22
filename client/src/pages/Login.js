import React, { useState } from 'react';
// import { LOGIN_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Login = () => {

    // Form state
    const [formState, setFormState] = useState({ email: '', password: '' });

    // Login mutation
    // const [Login, { error }] = useMutation();

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

    // Handle login form submit
    const handleFormSubmit = event => {
        event.preventDefault();
    };

    return (
        <div className="card login-signup-card shadow-sm">
            <div className="card-body">
                <h4>Login</h4>
                <hr></hr>
                {true && <div className="alert alert-dange" role="alert">Login failed. Incorrect email or password.</div>}
                <form onSubmit={handleFormSubmit} className="login-form">
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
                    <p><Link to="/signup">SIGN UP</Link> instead</p>
                </div>
                
            </div>
        </div>
    );
};

export default Login;