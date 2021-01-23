import React from 'react';
import { Link } from 'react-router-dom';

const PostHeader = ({ goal }) => {
    return (
        <div className="post-header">
            <Link to={"/" + goal.username} className="post-header-text">
                <div className="profile-img-left">
                    <img src={goal.profilePhoto} alt="profile pic" className="rounded-circle profile-image-sm"/>
                </div>
                
                <span className="username">{goal.username}</span> <br />
                <span className="item-timestamp">{goal.createdAt}</span>
            </Link>
        </div>
    );
};

export default PostHeader;