import React, { useState } from "react";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/react-hooks";
import image from "../../images/placeholder-profile-pic.png";
import { UPDATE_USER } from "../../utils/mutations";
import ProfileDetails from '../ProfileDetails';
import {deletePhoto} from '../../utils/API.js';

const ProfileCard = ({ user }) => {
    
  const [updateUser, { error }] = useMutation(UPDATE_USER);

  // form state
  const [formState, setFormState] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  });

  // Cloudinary Functionality
  async function showUploadWidget() {
    // Delete user photo everytime before adding new photo
    await deletePhoto(user.username);
    
    window.cloudinary.openUploadWidget(
      {
        cloudName: "trackt",
        uploadPreset: "trackt",
        public_id: user.username,
        cropping: true,
      },
      async (error, result) => {
        if (!error && result && result.event === "success") {
          const pfp = result.info.secure_url;
 
          user.profilePhoto = pfp
          await updateUser({
              variables: {
                  profilePhoto: user.profilePhoto,
                  _id: user._id
              }
          })
        }
      }
    );
  }
  
  // Form change handler
  const handleFormChange = (event) => {
    event.preventDefault();
  };

  // Handle user edit form submit
  const handleEditUserSubmit = async (event) => {
    const { name, value } = event.target;
    setFormState({...formState, [name]: value});
  };

  // Render Card Details
  const renderCardDetails = () => {
    if (/*Auth.getProfile().data.username !== user.username*/ true) {
      return (
        <div>
            <ProfileDetails user={user} />
            <hr />
            
        </div>
      );
    } else {
      return (
        <form className="edit-profile-form" onSubmit={handleEditUserSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="form-control"
              value={formState.firstName}
              onChange={handleFormChange}
            ></input>
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="form-control"
              value={formState.lastName}
              onChange={handleFormChange}
            ></input>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              value={formState.email}
              onChange={handleFormChange}
            ></input>
          </div>
          
          <div>
            <button type="submit" className="btn btn-default">
              Save Changes
            </button>
          </div>
        </form>
      );
    }
  };

  return (
    <div className="content-wrapper">
      <div className="card text-center profile-card">
        <div className="card-body">
          <img
            src={user.profilePhoto ? user.profilePhoto : image}
            alt="profile pic"
            className="rounded-circle profile-image"
          />
          {Auth.getProfile().data.username === user.username && 
            <div>
              <button className="btn btn-link" onClick={showUploadWidget}>
                Change Profile Picture
              </button>
            </div>
          }
          <h5 className="card-title mt-3">{user.username}</h5>
          <hr></hr>
          {renderCardDetails()}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
