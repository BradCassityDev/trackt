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
            <h5>
                <Link className="site-logo" to="/">TRACKT</Link>
            </h5>

           <nav>
               {true && 
                <>
                    <span className="header-nav-link">
                        <Link to="/">Username</Link>
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