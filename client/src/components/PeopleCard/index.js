import React from 'react';

const PeopleCard = ({ person }) => {
    return (
        <div className="card shadow-sm people-card">
            <div className="card-header">
                <div className="row">
                    <div className="col-12">
                        <img src={person.profilePhoto} alt="profile pic" className="rounded-circle profile-image-md"/>
                    </div>
                </div> 
                
                {person.username}
            </div>
            <div className="card-body">
                {person.friend ? (
                    <button className="btn btn-danger">Remove Friend</button>
                ) : (
                    <button className="btn btn-success">Add Friend</button>
                )}
            </div>
        </div>
    );
};

export default PeopleCard;