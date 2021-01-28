import React from 'react';
import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import image from '../../images/placeholder-profile-pic.png';
import FriendRequests from '../FriendRequests';
import { Image } from "cloudinary-react";

const FriendList = ({userInfo}) => {
    const {friendCount, friends} = userInfo;

    // Handle view user event
    const viewUserHandler = async event => {
        event.preventDefault();
    };

    return (
        <div className="content-wrapper">
            <div className="card text-center profile-card">
                <div className="card-body">
                <h5 className="card-title">Friends List</h5>
                    {Auth.getProfile().data.username === userInfo.username && (
                            <div>
                                <FriendRequests friendRequests={userInfo.friendRequests} />
                            </div>
                    )}
                    
                    <span>({friendCount}) Friends</span>
                    <hr></hr>
                    <div className="row">
                        {friends && friends.map(friend => (
                            <div key={friend._id} className="col-6 col-sm-4" key={friend.username}>
                                <Link to={"/" + friend.username}>
                                    <div className="card friend-card">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* <img src={friend.profilePhoto ? friend.profilePhoto : image} alt="profile pic" className="rounded-circle profile-image-sm"/> */}
                                                <Image
                                                className="rounded-circle profile-image-sm"
                                                cloudName="trackt"
                                                public_id={`trackt-user-pfp/${friend.username}`}
                                                onError={() => {console.log(this)}}
                                                ></Image>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <span className="friend-name">{friend.username}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendList;

