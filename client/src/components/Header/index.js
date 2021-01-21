import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'

const Header = () => {

    // Logout event handler
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }

    return (
        <header>
            <h4>
                <Link to="/">TRACKT</Link>
            </h4>

            <nav>
            </nav>
        </header>
    );

}

export default Header;