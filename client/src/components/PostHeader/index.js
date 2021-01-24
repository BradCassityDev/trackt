import React from 'react';
import { Link } from 'react-router-dom';

const PostHeader = ({ username, profilePhoto, createdAt }) => {
    return (
        <div className="post-header">
            <Link to={"/" + username} className="post-header-text">
                <div className="profile-img-left">
                    <img src={profilePhoto} alt="profile pic" className="rounded-circle profile-image-sm"/>
                </div>
                
                <span className="username">{username}</span> <br />
                <span className="item-timestamp">{createdAt}</span>
            </Link>
        </div>
    );
};

export default PostHeader;