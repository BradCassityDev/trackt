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
                    <li className="profile-menu-item" onClick={handleMenuChange}>Everyone's Goals</li>
                    <li className="profile-menu-item" onClick={handleMenuChange}>My Goals</li>
                    <li className="profile-menu-item" onClick={handleMenuChange}>People</li>
                    <li className="profile-menu-item" onClick={handleMenuChange}>Shame Board</li>
                </ul>
            </nav>
            <hr></hr>
        </div>
    );
};

export default ProfileMenu;