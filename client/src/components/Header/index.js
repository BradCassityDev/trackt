import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

    // Logout event handler
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }

    return (
        <header>
            <h5>
                <Link className="site-logo" to="/">TRACKT</Link>
            </h5>

           
            <nav>
               
            </nav>
        </header>
    );

}

export default Header;