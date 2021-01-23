import React from 'react';

const ProfileMenu = ({ setMenuState }) => {

    // Handle Menu Change Event
    const handleMenuChange = event => {
        setMenuState(event.target.innerText);
    };
    
    return (
        <div className="content-wrapper">
            <nav>
                <ul className="nav nav-pills">
                    <li className="profile-menu-item" onClick={handleMenuChange}><a href="#">Everyone's Goals</a></li>
                    <li className="profile-menu-item" onClick={handleMenuChange}><a href="#">My Goals</a></li>
                    <li className="profile-menu-item" onClick={handleMenuChange}><a href="#">People</a></li>
                    <li className="profile-menu-item" onClick={handleMenuChange}><a href="#">Shame Board</a></li>
                </ul>
            </nav>
            <hr></hr>
        </div>
    );
};

export default ProfileMenu;