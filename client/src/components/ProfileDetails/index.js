import React from 'react';

const ProfileDetails = ({ user }) => {

    return (
        <div className="row">
            <div className="col-12 text-left">
                <span className="label-text">Name:</span>{ user.firstName} {user.lastName}
            </div>
            <div className="col-12 text-left">
                <span className="label-text">Email:</span> {user.email}
            </div>
            <div className="col-12 text-left">
                <span className="label-text">Active Goals:</span> 6
            </div>
            <div className="col-12 text-left">
                <span className="label-text">Failed Goals:</span> 1
            </div>
        </div>
    );
}

export default ProfileDetails;