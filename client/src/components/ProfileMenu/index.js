import React from 'react';
import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/react-hooks';
import image from '../../images/placeholder-profile-pic.png';

const ProfileMenu = () => {
    return (
        <div className="content-wrapper">
            <nav>
                <ul className="nav nav-pills">
                    <li className="profile-menu-item disabled"><a href="#">Everyone's Goals</a></li>
                    <li className="profile-menu-item"><a href="#">My Goals</a></li>
                    <li className="profile-menu-item"><a href="#">People</a></li>
                    <li className="profile-menu-item"><a href="#">Shame Board</a></li>
                </ul>
            </nav>
            <hr></hr>
        </div>
    );
};

export default ProfileMenu;