import React from 'react';

const ProfileMenu = ({ menuState, setMenuState }) => {

    // Handle Menu Change Event
    const handleMenuChange = event => {
        setMenuState(event.target.innerText);
    };
    
    return (
        <div className="content-wrapper">
            <nav>
                <ul className="nav nav-pills">
                    <li className={menuState === "Everyone's Goals" ? "profile-menu-item menu-item-selected": "profile-menu-item selected"} onClick={handleMenuChange}>Everyone's Goals</li>
                    <li className={menuState === "My Goals" ? "profile-menu-item menu-item-selected": "profile-menu-item selected"} onClick={handleMenuChange} onClick={handleMenuChange}>My Goals</li>
                    <li className={menuState === "People" ? "profile-menu-item menu-item-selected": "profile-menu-item selected"} onClick={handleMenuChange} onClick={handleMenuChange}>People</li>
                    <li className={menuState === "Shame Board" ? "profile-menu-item menu-item-selected": "profile-menu-item selected"} onClick={handleMenuChange} onClick={handleMenuChange}>Shame Board</li>
                </ul>
            </nav>
            <hr></hr>
        </div>
    );
};

export default ProfileMenu;