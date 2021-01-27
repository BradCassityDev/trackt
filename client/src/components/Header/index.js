import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'
import Modal from 'react-bootstrap/modal';
import Button from 'react-bootstrap/button';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    // Logout event handler
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }

    return (
        <header>
            <h5>
                {Auth.loggedIn() ? 
                    <Link className="site-logo" to="/">TRACKT</Link>
                :
                    <Link className="site-logo" to="/login">TRACKT</Link>
                }
            </h5>

           <nav>
               {Auth.loggedIn() && 
                <>
                    <span className="header-nav-link">
                        <Link to="/">{Auth.getProfile().data.username}</Link>
                    </span>
                    <span className="header-nav-link">
                        <span className="devider">|</span>
                    </span>
                    <span className="header-nav-link">
                        <a href="/login" onClick={logout}>
                            Logout
                        </a>
                    </span>
                </>
               }
           </nav>
            
        </header>
    );

}

export default Header;