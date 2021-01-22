import React from 'react';
import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/react-hooks';
import image from '../../images/placeholder-profile-pic.png';

const ProfileCard = () => {

    // Temp fake user object
    const fakeUser = {
        firstName: 'John',
        lastName: 'Smith',
        username: 'JohnSmith',
        email: 'john@email.com',
        friendCount: 5,
        displayName: 'John Smith',
        profilePhoto: image,
        interests: [],
        goals: [],
        friendRequests: [],
        friends: [
            {
                username: "JaneDoe",
                profilePhoto: image,
            },
            {
                username: "BradCassity",
                profilePhoto: image,
            },
        ]
    };

    // Handle user edit form submit
    const handleEditUserSubmit = async event => {
        event.preventDefault();
    };


    const renderCardDetails = () => {
        if (false) {
            return (
                <div>
                    Name: {fakeUser.firstName} {fakeUser.lastName}
                    <button type="button" className="btn btn-default">Save Changes</button>
                </div>
            );
        } else {
            return (
                <form
                    className="edit-profile-form"
                    onSubmit={handleEditUserSubmit}
                >
                    <div>
                        <label>First Name:</label>
                        <input type="text" name="firstname" id="firstname" className="form-control"></input>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" name="lastname" id="lastname" className="form-control"></input>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" id="email" className="form-control"></input>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-default">Save Changes</button>
                    </div>
                </form>
            );
        }
    }

    return (
        <div className="content-wrapper">
            <div className="card text-center profile-card">
                <div className="card-body">
                    <img src={fakeUser.profilePhoto} alt="profile pic" className="rounded-circle profile-image"/>
                    <h5 className="card-title">John Smith</h5>
                    <hr></hr>
                    {renderCardDetails()}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;