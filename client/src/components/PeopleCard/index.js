import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/placeholder-profile-pic.png';
import FriendButton from '../FriendButton';
import RemoveFriendButton from'../RemoveFriendButton';
import Auth from '../../utils/auth';


const PeopleCard = ({ person, isFriend }) => {
    // Button state for friends
    const [buttonState, setButtonState] = useState(isFriend ? 1 : 2);

    useEffect(() => {
        //setPendingFriendRequest(checkPendingFriendRequest(person.friendRequests));
        checkPendingFriendRequest(person.friendRequests);
    }, [buttonState]);

    // Check if pending friend request
    const checkPendingFriendRequest = (friendRequests) => {
        let friendRequestSent = false;

        if (friendRequests.length) {
            for (let i = 0; i < friendRequests.length; i++) {
                if (friendRequests[i].username === Auth.getProfile().data.username) {
                    friendRequestSent = true;
                    setButtonState(3);
                }
            }
        }

        return friendRequestSent;
    }

    const renderButton = () => {
        if (buttonState === 1) {
            return (<RemoveFriendButton friendid={person._id} setButtonState={setButtonState}  />);
        } else if (buttonState === 2) {
            return (<FriendButton friendid={person._id} setButtonState={setButtonState} />);
        } else {
            return (<p>Friend request sent.</p>);
        }
    }
    
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
                {renderButton()}
                
            </div>
        </div>
    );
};

export default PeopleCard;