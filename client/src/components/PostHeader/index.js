import React from 'react';

const PostHeader = ({ goal }) => {
    return (
        <div className="post-header">
            <div className="profile-img-left">
                <img src={goal.profilePhoto} alt="profile pic" className="rounded-circle profile-image-sm"/>
            </div>
            <span className="username">{goal.username}</span> <br />
            <span className="item-timestamp">{goal.createdAt}</span>
        </div>
    );
};

export default PostHeader;