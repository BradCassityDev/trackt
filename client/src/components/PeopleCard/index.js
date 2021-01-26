import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/placeholder-profile-pic.png';
import FriendButton from '../FriendButton';


const PeopleCard = ({ person }) => {

    return (
        <div className="card shadow-sm people-card">
            <div className="card-header">
                <Link to={"/" + person.username} className="post-header-text">
                <div className="row">
                    <div className="col-12">
                        <img src={person.profilePhoto ? person.profilePhoto : image} alt="profile pic" className="rounded-circle profile-image-md"/>
                    </div>
                </div> 
                
                {person.username}
                </Link>
            </div>
            <div className="card-body">
                {person.friend ? (
                    <button className="btn btn-danger">Remove Friend</button>
                ) : (
                    <FriendButton friendid={person._id} />
                )}
            </div>
        </div>
    );
};

export default PeopleCard;